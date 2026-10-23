// js/app.js - Main Application Controller for HSK 3 Master
(function() {
  // Global State
  const state = {
    currentTab: 'dashboard',
    currentVocabSubtab: 'quiz600',
    examType: 'hsk', // 'hsk' or 'yct'
    userRole: 'parent', // 'parent' or 'student'
    audioSpeed: 1.0,
    filterLevel: 'all',
    vocabSearch: '',
    vocabPosFilter: 'all',
    flashcardIndex: 0,
    flashcardFlipped: false,
    quizSession: null,
    quizIndex: 0,
    quizUserAnswers: [],
    quizTimer: null,
    quizSecondsLeft: 0,
    hanziCanvasInstance: null,
    writingSelectedChunks: []
  };

  // Sound and Confetti shortcuts
  const Audio = window.HSKAudio;
  const Storage = window.HSKStorage;
  const QuizEngine = window.HSKQuizEngine;

  // DOM Elements cache
  let dom = {};

  function initDOM() {
    dom = {
      navTabs: document.querySelectorAll('.nav-tab-btn'),
      tabPanels: document.querySelectorAll('.tab-panel'),
      parentBadge: document.getElementById('parent-badge'),
      roleToggleBtn: document.getElementById('role-toggle-btn'),
      speedToggleBtn: document.getElementById('speed-toggle-btn'),
      speedLabel: document.getElementById('speed-label'),
      examCountdown: document.getElementById('exam-countdown-days'),
      statMasteredCount: document.getElementById('stat-mastered-count'),
      statMistakeCount: document.getElementById('stat-mistake-count'),
      statTotalTested: document.getElementById('stat-total-tested'),
      statAccuracyRate: document.getElementById('stat-accuracy-rate'),
      // Quiz views
      quizSetupArea: document.getElementById('quiz-setup-area'),
      quizActiveArea: document.getElementById('quiz-active-area'),
      quizResultArea: document.getElementById('quiz-result-area'),
      // Flashcard view
      flashcardContainer: document.getElementById('flashcard-container'),
      vocabTableBody: document.getElementById('vocab-table-body'),
      vocabSearchResultsCount: document.getElementById('vocab-search-results-count'),
      // Mistake view
      mistakesListContainer: document.getElementById('mistakes-list-container'),
      mistakesEmptyState: document.getElementById('mistakes-empty-state'),
      // Parent dashboard
      parentStatsSummary: document.getElementById('parent-stats-summary'),
      parentWeakWordsList: document.getElementById('parent-weak-words-list'),
      parentExamHistoryList: document.getElementById('parent-exam-history-list')
    };
  }

  // --- LEVEL METADATA & LABELS ---
  function getLevelMeta(examType, level) {
    if (examType === 'yct') {
      switch (level) {
        case '1':
          return { label: 'ระดับ 1', shortLabel: 'YCT 1', count: 80, desc: '80 คำพื้นฐาน (อนุบาล-ประถมต้น)' };
        case '2':
          return { label: 'ระดับ 2', shortLabel: 'YCT 2', count: 150, desc: '150 คำสะสม (ประถมต้น)' };
        case '3':
          return { label: 'ระดับ 3', shortLabel: 'YCT 3', count: 300, desc: '300 คำสะสม (ประถมปลาย-มัธยมต้น)' };
        case '4':
          return { label: 'ระดับ 4', shortLabel: 'YCT 4', count: 600, desc: '600 คำสะสม (มัธยม)' };
        case 'all':
        default:
          return { label: 'ทุกระดับ (1-4)', shortLabel: 'YCT 1-4', count: 600, desc: 'ทั้งหมด 600 คำ (YCT 1 - 4)' };
      }
    } else {
      switch (level) {
        case '1':
          return { label: 'ระดับ 1', shortLabel: 'HSK 1', count: 150, desc: '150 คำพื้นฐานเริ่มต้น' };
        case '2':
          return { label: 'ระดับ 2', shortLabel: 'HSK 2', count: 300, desc: '300 คำสะสม (ระดับ 1+2)' };
        case 'new3':
          return { label: 'เฉพาะคำใหม่ ระดับ 3', shortLabel: 'HSK 3 ใหม่', count: 300, desc: '300 คำใหม่ระดับ 3' };
        case '3':
        case 'all':
        default:
          return { label: 'ทุกระดับ (1-3)', shortLabel: 'HSK 1-3', count: 600, desc: 'ทั้งหมด 600 คำ (HSK 1 - 3)' };
      }
    }
  }

  // --- GET ACTIVE VOCAB POOL ---
  function getActiveVocabPool(applyLevelFilter = true) {
    const rawPool = (state.examType === 'yct') ? (window.YCT_VOCAB || []) : (window.HSK_VOCAB || []);
    if (!applyLevelFilter) return rawPool;

    const lvl = state.selectedLevel || state.filterLevel || 'all';
    if (lvl === 'all') return rawPool;

    if (state.examType === 'yct') {
      const num = parseInt(lvl);
      if (isNaN(num)) return rawPool;
      return rawPool.filter(w => w.level <= num);
    } else {
      if (lvl === '1') return rawPool.filter(w => w.level === 1);
      if (lvl === '2') return rawPool.filter(w => w.level <= 2);
      if (lvl === 'new3') return rawPool.filter(w => w.level === 3);
      if (lvl === '3') return rawPool.filter(w => w.level <= 3);
      return rawPool;
    }
  }

  // --- LEVEL SELECTION MODAL LOGIC ---
  let modalTempExamType = 'hsk';
  let modalTempLevel = 'all';

  function openLevelModal(targetExamType) {
    const modal = document.getElementById('level-select-modal');
    if (!modal) return;

    modalTempExamType = targetExamType || state.examType || 'hsk';
    modalTempLevel = (targetExamType && targetExamType !== state.examType) ? 'all' : (state.selectedLevel || 'all');

    renderModalContent();
    modal.classList.remove('hidden');
  }

  function closeLevelModal() {
    const modal = document.getElementById('level-select-modal');
    if (modal) modal.classList.add('hidden');
  }

  function renderModalContent() {
    const tabHsk = document.getElementById('modal-tab-hsk');
    const tabYct = document.getElementById('modal-tab-yct');
    const container = document.getElementById('modal-levels-container');
    const confirmBtn = document.getElementById('modal-confirm-btn');
    const headerBg = document.getElementById('modal-header-bg');

    const isYCT = modalTempExamType === 'yct';

    if (headerBg) {
      headerBg.className = isYCT
        ? 'p-6 bg-gradient-to-r from-teal-950 to-emerald-900 text-white flex items-center justify-between'
        : 'p-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex items-center justify-between';
    }

    if (tabHsk && tabYct) {
      if (isYCT) {
        tabYct.className = 'py-2.5 px-3 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 bg-emerald-600 text-white shadow';
        tabHsk.className = 'py-2.5 px-3 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 text-gray-600 hover:text-indigo-700 hover:bg-white';
      } else {
        tabHsk.className = 'py-2.5 px-3 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 bg-indigo-600 text-white shadow';
        tabYct.className = 'py-2.5 px-3 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 text-gray-600 hover:text-emerald-700 hover:bg-white';
      }
    }

    if (confirmBtn) {
      confirmBtn.className = isYCT
        ? 'px-6 py-2.5 rounded-xl text-sm font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition flex items-center gap-2'
        : 'px-6 py-2.5 rounded-xl text-sm font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition flex items-center gap-2';
    }

    if (!container) return;

    const levels = isYCT ? [
      { id: 'all', title: 'ทุกระดับ YCT (1 - 4)', count: '600 คำ', desc: 'รวมคำศัพท์เยาวชนครบทุกระดับ 1 ถึง 4', icon: '🌟' },
      { id: '1', title: 'YCT ระดับ 1', count: '80 คำ', desc: 'ระดับ 1: เริ่มต้น อนุบาล / ประถมต้น (สัตว์ สี ตัวเลข)', icon: '🐣' },
      { id: '2', title: 'YCT ระดับ 2', count: '150 คำสะสม', desc: 'ระดับ 2: ประถมต้น (ครอบครัว โรงเรียน กิจวัตร)', icon: '🎒' },
      { id: '3', title: 'YCT ระดับ 3', count: '300 คำสะสม', desc: 'ระดับ 3: ประถมปลาย - มัธยมต้น (ประโยคบทสนทนา)', icon: '📚' },
      { id: '4', title: 'YCT ระดับ 4', count: '600 คำสะสม', desc: 'ระดับ 4: มัธยม (ระดับสูงสุดของ YCT ไวยากรณ์ครบ)', icon: '🎓' }
    ] : [
      { id: 'all', title: 'ทุกระดับ HSK (1 - 3)', count: '600 คำ', desc: 'รวมทุกระดับ 1, 2, 3 คลังคำศัพท์และไวยากรณ์ครบวงจร', icon: '🌟' },
      { id: '1', title: 'HSK ระดับ 1', count: '150 คำ', desc: 'ระดับ 1: พื้นฐานจำเป็น สำหรับผู้เริ่มต้นเรียนภาษาจีน', icon: '🌱' },
      { id: '2', title: 'HSK ระดับ 2', count: '300 คำสะสม', desc: 'ระดับ 2: ระดับต้นตอนปลาย สื่อสารชีวิตประจำวัน (1+2)', icon: '🌿' },
      { id: '3', title: 'HSK ระดับ 3', count: '600 คำทั้งหมด', desc: 'ระดับ 3: ระดับกลาง พร้อมสอบวัดระดับจริงสากล', icon: '🌳' },
      { id: 'new3', title: 'เฉพาะคำใหม่ HSK 3', count: '300 คำใหม่', desc: 'เจาะลึกเฉพาะคำศัพท์ใหม่ของระดับ 3 (ไม่รวม 1-2)', icon: '🎯' }
    ];

    container.innerHTML = levels.map(lvl => {
      const isSelected = modalTempLevel === lvl.id;
      const activeBorder = isYCT 
        ? (isSelected ? 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-400' : 'border-gray-200 bg-white hover:border-emerald-300')
        : (isSelected ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-400' : 'border-gray-200 bg-white hover:border-indigo-300');

      return `
        <div class="level-card p-3.5 rounded-2xl border-2 cursor-pointer transition flex items-start gap-3 ${activeBorder}" onclick="window.HSKApp.selectModalLevel('${lvl.id}')">
          <div class="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
            ${lvl.icon}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between gap-1">
              <span class="font-extrabold text-sm text-gray-900 truncate">${lvl.title}</span>
              <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 whitespace-nowrap">${lvl.count}</span>
            </div>
            <p class="text-xs text-gray-500 mt-1 leading-snug">${lvl.desc}</p>
          </div>
          <div class="flex-shrink-0 pt-0.5">
            <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center font-bold text-xs ${isSelected ? (isYCT ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-indigo-600 bg-indigo-600 text-white') : 'border-gray-300 bg-white'}">
              ${isSelected ? '✓' : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function selectModalLevel(levelId) {
    modalTempLevel = levelId;
    renderModalContent();
  }

  function setModalExamType(examType) {
    modalTempExamType = examType;
    modalTempLevel = 'all';
    renderModalContent();
  }

  function applyModalSelection() {
    state.examType = modalTempExamType;
    state.selectedLevel = modalTempLevel;
    state.filterLevel = modalTempLevel;

    // Save to settings
    const currentSettings = Storage.getSettings();
    Storage.saveSettings({
      ...currentSettings,
      examType: state.examType,
      selectedLevel: state.selectedLevel,
      hskLevelFilter: state.selectedLevel
    });

    closeLevelModal();
    updateExamThemeAndContent();

    // Rerender active views
    renderDashboard();
    if (state.currentTab === 'flashcards') {
      if (state.currentVocabSubtab === 'quiz600') {
        initQuiz600();
      } else if (state.currentVocabSubtab === 'flashcards') {
        renderFlashcards();
      } else {
        renderVocabTable(getActiveVocabPool(true));
      }
    } else if (state.userRole === 'parent') {
      renderParentDashboard();
      renderVocabTable(getActiveVocabPool(true));
    }
  }

  function setExamType(type) {
    openLevelModal(type);
  }

  function updateExamThemeAndContent() {
    const isYCT = state.examType === 'yct';
    const lvl = state.selectedLevel || 'all';
    const meta = getLevelMeta(state.examType, lvl);
    const pool = getActiveVocabPool(true);
    const poolCount = pool.length;

    document.body.dataset.examType = state.examType;
    document.body.dataset.examLevel = lvl;

    // 1. Header Toggle Buttons (Desktop & Mobile)
    const btnHsk = document.getElementById('exam-toggle-hsk');
    const btnYct = document.getElementById('exam-toggle-yct');
    const btnHskMobile = document.getElementById('exam-toggle-hsk-mobile');
    const btnYctMobile = document.getElementById('exam-toggle-yct-mobile');

    if (isYCT) {
      if (btnYct) btnYct.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition bg-emerald-600 text-white shadow-sm';
      if (btnHsk) btnHsk.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition text-gray-700 hover:text-indigo-700 hover:bg-white';
      if (btnYctMobile) btnYctMobile.className = 'py-2 px-2 rounded-xl font-black transition text-center bg-emerald-600 text-white shadow-sm flex items-center justify-center gap-1.5';
      if (btnHskMobile) btnHskMobile.className = 'py-2 px-2 rounded-xl font-black transition text-center text-gray-700 hover:bg-white flex items-center justify-center gap-1.5';
    } else {
      if (btnHsk) btnHsk.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition bg-indigo-600 text-white shadow-sm';
      if (btnYct) btnYct.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition text-gray-700 hover:text-emerald-700 hover:bg-white';
      if (btnHskMobile) btnHskMobile.className = 'py-2 px-2 rounded-xl font-black transition text-center bg-indigo-600 text-white shadow-sm flex items-center justify-center gap-1.5';
      if (btnYctMobile) btnYctMobile.className = 'py-2 px-2 rounded-xl font-black transition text-center text-gray-700 hover:bg-white flex items-center justify-center gap-1.5';
    }

    // 2. Header Level Selector Button (Desktop & Mobile)
    const headerLevelLabel = document.getElementById('header-level-label');
    const headerLevelBtn = document.getElementById('header-level-btn');
    const headerLevelLabelMobile = document.getElementById('header-level-label-mobile');
    const headerLevelBtnMobile = document.getElementById('header-level-btn-mobile');
    const headerLevelBadgeMobile = document.getElementById('header-level-badge-mobile');

    if (headerLevelLabel) {
      headerLevelLabel.textContent = `🏷️ ระดับ: ${meta.shortLabel} (${poolCount} คำ) ▾`;
    }
    if (headerLevelLabelMobile) {
      headerLevelLabelMobile.textContent = `${meta.shortLabel} (${poolCount} คำ)`;
    }
    if (headerLevelBadgeMobile) {
      headerLevelBadgeMobile.className = isYCT
        ? 'flex-shrink-0 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200'
        : 'flex-shrink-0 text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200';
    }
    if (headerLevelBtn) {
      headerLevelBtn.className = isYCT
        ? 'inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-black bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-sm transition'
        : 'inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-black bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-300 shadow-sm transition';
    }
    if (headerLevelBtnMobile) {
      headerLevelBtnMobile.className = isYCT
        ? 'w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border border-gray-300 hover:border-emerald-400 shadow-sm text-xs transition'
        : 'w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border border-gray-300 hover:border-indigo-400 shadow-sm text-xs transition';
    }

    // 3. Logo & Header Text
    const logoIcon = document.getElementById('header-logo-icon');
    const logoTitle = document.getElementById('header-logo-title');
    const headerSubtitle = document.getElementById('header-subtitle');
    const portalBadge = document.getElementById('current-portal-badge');
    const currentExamBadge = document.getElementById('current-exam-badge');

    if (logoIcon) {
      logoIcon.textContent = isYCT ? '🐼' : '学';
      logoIcon.className = isYCT
        ? 'w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center font-chinese font-bold text-2xl shadow-md'
        : 'w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-emerald-500 text-white flex items-center justify-center font-chinese font-bold text-2xl shadow-md';
    }
    if (logoTitle) {
      const portal = document.body.dataset.portal || '';
      if (portal === 'student') {
        logoTitle.innerHTML = isYCT 
          ? `YCT <span class="text-emerald-600">Youth</span>`
          : `HSK 3 <span class="text-indigo-600">Student</span>`;
      } else if (portal === 'parent') {
        logoTitle.innerHTML = isYCT
          ? `YCT <span class="text-emerald-600">Parent</span>`
          : `HSK 3 <span class="text-amber-600">Parent</span>`;
      } else {
        logoTitle.innerHTML = isYCT
          ? `YCT <span class="text-emerald-600">Master</span>`
          : `HSK 3 <span class="text-indigo-600">Master</span>`;
      }
    }
    if (headerSubtitle) {
      headerSubtitle.textContent = isYCT
        ? `ระบบฝึกฝนภาษาจีนสำหรับเด็กและเยาวชน YCT (${meta.shortLabel})`
        : `พื้นที่ฝึกฝนและทำแบบทดสอบเตรียมสอบ HSK (${meta.shortLabel})`;
    }
    if (portalBadge) {
      const portal = document.body.dataset.portal || '';
      const portalText = portal === 'parent' ? 'โหมดผู้ปกครอง' : (isYCT ? 'โหมดเยาวชน' : 'โหมดนักเรียน');
      portalBadge.textContent = portalText;
      portalBadge.className = isYCT
        ? 'hidden md:inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300'
        : 'hidden md:inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200';
    }
    if (currentExamBadge) {
      currentExamBadge.textContent = isYCT ? `🟢 ${meta.shortLabel}` : `🔵 ${meta.shortLabel}`;
      currentExamBadge.className = isYCT
        ? 'px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300'
        : 'px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-700 border border-indigo-200';
    }

    // 4. Hero Banner (Dashboard)
    const heroBanner = document.getElementById('dashboard-hero-banner');
    const heroTag = document.getElementById('hero-tag-badge');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');

    if (heroBanner) {
      heroBanner.className = isYCT
        ? 'relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white p-6 sm:p-8 shadow-xl transition-all duration-300'
        : 'relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 shadow-xl transition-all duration-300';
    }
    if (heroTag) {
      heroTag.textContent = isYCT
        ? `🐼 เตรียมสอบภาษาจีนเยาวชน ${meta.shortLabel} ให้พร้อม`
        : `🔥 เตรียมสอบ ${meta.shortLabel} ให้พร้อม`;
      heroTag.className = isYCT
        ? 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-400 text-emerald-950 uppercase tracking-wide'
        : 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-950 uppercase tracking-wide';
    }
    if (heroTitle) {
      heroTitle.textContent = isYCT
        ? `ยินดีต้อนรับสู่ห้องฝึกภาษาจีนเยาวชน ${meta.shortLabel}`
        : `ยินดีต้อนรับสู่ห้องฝึกภาษาจีน ${meta.shortLabel}`;
    }
    if (heroDesc) {
      heroDesc.textContent = isYCT
        ? `ฝึกฟัง พูด อ่าน และเขียนภาษาจีนอย่างสนุกสนาน คลังคำศัพท์ YCT ${meta.shortLabel} รวม ${poolCount} คำ มีทั้งแบบทดสอบการฟัง และแบบฝึกข้อสอบมาตรฐานสำหรับเยาวชน`
        : `ฝึกฟัง พูด อ่าน และเขียนภาษาจีนให้คล่องแคล่ว คลังคำศัพท์ ${meta.shortLabel} รวม ${poolCount} คำ มีทั้งแบบทดสอบการฟัง 600 คำ และจำลองสอบจริงครบทั้ง 3 พาร์ท พร้อมเสียงอ่านมาตรฐาน`;
    }

    // 5. Featured Listening Banner
    const featuredBanner = document.getElementById('featured-listening-banner');
    const featuredTitle = document.getElementById('featured-listening-title');
    const featuredDesc = document.getElementById('featured-listening-desc');

    if (featuredBanner) {
      featuredBanner.className = isYCT
        ? 'p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all'
        : 'p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all';
    }
    if (featuredTitle) {
      featuredTitle.textContent = `แบบทดสอบการฟัง ${isYCT ? 'YCT' : 'HSK'} (${poolCount} คำ)`;
    }
    if (featuredDesc) {
      featuredDesc.textContent = isYCT
        ? `ฝึกฟังเสียงภาษาจีนทีละ 1 คำ แล้วเลือกความหมายภาษาไทย (คลังคำศัพท์เยาวชน ${meta.shortLabel}) มีระบบจำจุดเดิมทำค้างไว้ได้`
        : `ฝึกฟังเสียงภาษาจีนทีละ 1 คำ แล้วเลือกความหมายภาษาไทย (${meta.shortLabel}) มีระบบจำจุดเดิมทำค้างไว้ได้`;
    }

    // 6. Navigation Tabs
    const navTabVocabText = document.getElementById('nav-tab-vocab-text');
    const navTabQuizText = document.getElementById('nav-tab-quiz-text');
    if (navTabVocabText) {
      navTabVocabText.textContent = `แบบทดสอบการฟัง & คลังคำศัพท์ (${poolCount} คำ)`;
    }
    if (navTabQuizText) {
      navTabQuizText.textContent = `แบบทดสอบ ${meta.shortLabel} (ฟัง/อ่าน/เขียน)`;
    }

    // 7. Cards
    const cardMockTitle = document.getElementById('card-mock-title');
    const cardMockTag = document.getElementById('card-mock-tag');
    const cardMockDesc = document.getElementById('card-mock-desc');
    if (cardMockTitle) {
      cardMockTitle.textContent = `จำลองสอบ ${meta.shortLabel} เสมือนจริง`;
    }
    if (cardMockTag) {
      cardMockTag.textContent = isYCT ? 'ข้อสอบเยาวชนมาตรฐาน' : 'เหมือนห้องสอบจริง';
    }
    if (cardMockDesc) {
      cardMockDesc.textContent = isYCT
        ? `20 ข้อ จับเวลา 25 นาที แบบทดสอบเยาวชน YCT ${meta.shortLabel} (ข้อสอบมาตรฐาน)`
        : `25 ข้อ จับเวลา 30 นาที คะแนนเต็ม 300 คะแนน (เกณฑ์ผ่าน 180 คะแนน)`;
    }

    // 8. Quiz Setup Area
    const quizSetupTitle = document.getElementById('quiz-setup-title');
    if (quizSetupTitle) {
      quizSetupTitle.textContent = `เริ่มทำแบบทดสอบ ${meta.shortLabel}`;
    }

    // 9. Readiness Stats Goal Label
    const statGoalDesc = document.getElementById('stat-mastered-goal-desc');
    if (statGoalDesc) {
      statGoalDesc.textContent = `เป้าหมาย ${poolCount} คำ`;
    }

    // 10. Footer Description
    const footerDesc = document.getElementById('footer-desc');
    if (footerDesc) {
      footerDesc.textContent = isYCT
        ? `YCT Youth Master • ออกแบบเพื่อการเรียนรู้และเตรียมสอบวัดระดับภาษาจีนเยาวชน YCT (${meta.shortLabel}) รวม ${poolCount} คำ`
        : `HSK Master • ออกแบบพิเศษสำหรับคุณพ่อและลูกเพื่อพิชิตการสอบ HSK (${meta.shortLabel}) รวม ${poolCount} คำ`;
    }

    updateLevelSelectors();
    updateQuiz600Radios();
  }

  function updateLevelSelectors() {
    const isYCT = state.examType === 'yct';
    const selects = [
      document.getElementById('dashboard-level-filter'),
      document.getElementById('vocab-level-filter')
    ];

    const optionsHTML = isYCT ? `
      <option value="all">ทั้งหมด 600 คำ (YCT 1 - 4)</option>
      <option value="1">YCT 1 (80 คำพื้นฐาน)</option>
      <option value="2">YCT 2 (150 คำสะสม)</option>
      <option value="3">YCT 3 (300 คำสะสม)</option>
      <option value="4">YCT 4 (600 คำสะสม)</option>
    ` : `
      <option value="all">ทั้งหมด 600 คำ (HSK 1 - 3)</option>
      <option value="1">ระดับ HSK 1 (150 คำ)</option>
      <option value="2">ระดับ HSK 2 (300 คำสะสม)</option>
      <option value="3">ระดับ HSK 3 (600 คำทั้งหมด)</option>
      <option value="new3">เฉพาะคำใหม่ HSK 3 (300 คำ)</option>
    `;

    selects.forEach(sel => {
      if (sel) {
        sel.innerHTML = optionsHTML;
        sel.value = state.selectedLevel || 'all';
      }
    });
  }

  function updateQuiz600Radios() {
    const isYCT = state.examType === 'yct';
    const container = document.querySelector('[name="quiz600-range"]')?.closest('.grid');
    if (!container) return;

    if (isYCT) {
      container.innerHTML = `
        <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-emerald-400 transition">
          <input type="radio" name="quiz600-range" value="all" ${state.selectedLevel === 'all' ? 'checked' : ''} class="text-emerald-600 focus:ring-emerald-500">
          <div>
            <div class="text-gray-900 font-bold">ทั้งหมด 600 คำ (YCT 1 - 4)</div>
            <div class="text-gray-400 font-normal text-[11px]">รวมทุกระดับชั้นเยาวชน</div>
          </div>
        </label>
        <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-emerald-400 transition">
          <input type="radio" name="quiz600-range" value="1" ${state.selectedLevel === '1' ? 'checked' : ''} class="text-emerald-600 focus:ring-emerald-500">
          <div>
            <div class="text-gray-900 font-bold">เฉพาะ YCT 1 (80 คำ)</div>
            <div class="text-gray-400 font-normal text-[11px]">สำหรับเด็กเล็ก/เริ่มต้น</div>
          </div>
        </label>
        <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-emerald-400 transition">
          <input type="radio" name="quiz600-range" value="2" ${state.selectedLevel === '2' ? 'checked' : ''} class="text-emerald-600 focus:ring-emerald-500">
          <div>
            <div class="text-gray-900 font-bold">เฉพาะ YCT 2 (150 คำสะสม)</div>
            <div class="text-gray-400 font-normal text-[11px]">ระดับประถมต้น</div>
          </div>
        </label>
        <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-emerald-400 transition">
          <input type="radio" name="quiz600-range" value="3" ${state.selectedLevel === '3' ? 'checked' : ''} class="text-emerald-600 focus:ring-emerald-500">
          <div>
            <div class="text-gray-900 font-bold">เฉพาะ YCT 3 (300 คำสะสม)</div>
            <div class="text-gray-400 font-normal text-[11px]">ระดับประถมปลาย</div>
          </div>
        </label>
      `;
    } else {
      container.innerHTML = `
        <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-indigo-400 transition">
          <input type="radio" name="quiz600-range" value="all" ${state.selectedLevel === 'all' || state.selectedLevel === '3' ? 'checked' : ''} class="text-indigo-600 focus:ring-indigo-500">
          <div>
            <div class="text-gray-900 font-bold">ทั้งหมด 600 คำ (1 - 600)</div>
            <div class="text-gray-400 font-normal text-[11px]">HSK 1-3 ครบทุกคำ</div>
          </div>
        </label>
        <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-indigo-400 transition">
          <input type="radio" name="quiz600-range" value="hsk3" ${state.selectedLevel === 'new3' ? 'checked' : ''} class="text-indigo-600 focus:ring-indigo-500">
          <div>
            <div class="text-gray-900 font-bold">เฉพาะ HSK 3 (คำที่ 301 - 600)</div>
            <div class="text-gray-400 font-normal text-[11px]">300 คำใหม่ระดับ 3</div>
          </div>
        </label>
        <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-indigo-400 transition">
          <input type="radio" name="quiz600-range" value="hsk2" ${state.selectedLevel === '2' ? 'checked' : ''} class="text-indigo-600 focus:ring-indigo-500">
          <div>
            <div class="text-gray-900 font-bold">เฉพาะ HSK 2 (คำที่ 151 - 300)</div>
            <div class="text-gray-400 font-normal text-[11px]">150 คำระดับกลาง</div>
          </div>
        </label>
        <label class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-indigo-400 transition">
          <input type="radio" name="quiz600-range" value="hsk1" ${state.selectedLevel === '1' ? 'checked' : ''} class="text-indigo-600 focus:ring-indigo-500">
          <div>
            <div class="text-gray-900 font-bold">เฉพาะ HSK 1 (คำที่ 1 - 150)</div>
            <div class="text-gray-400 font-normal text-[11px]">150 คำพื้นฐาน</div>
          </div>
        </label>
      `;
    }
  }

  // --- TAB ROUTING ---
  function switchTab(tabName) {
    state.currentTab = tabName;
    dom.navTabs.forEach(btn => {
      if (btn.dataset.tab === tabName) {
        btn.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
        btn.classList.remove('text-gray-700', 'hover:bg-gray-100');
      } else {
        btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
        btn.classList.add('text-gray-700', 'hover:bg-gray-100');
      }
    });

    dom.tabPanels.forEach(panel => {
      if (panel.id === `tab-${tabName}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });

    if (tabName === 'dashboard') {
      renderDashboard();
    } else if (tabName === 'flashcards') {
      switchVocabSubtab(state.currentVocabSubtab || 'quiz600');
    } else if (tabName === 'mistakes') {
      renderMistakes();
    } else if (tabName === 'parent') {
      renderParentDashboard();
    } else if (tabName === 'worksheet') {
      renderWorksheetConfig();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- AUDIO SPEED TOGGLE ---
  function toggleAudioSpeed() {
    if (state.audioSpeed === 1.0) {
      state.audioSpeed = 0.8;
      if (dom.speedLabel) dom.speedLabel.textContent = '🐢 เสียงช้า 0.8x';
    } else {
      state.audioSpeed = 1.0;
      if (dom.speedLabel) dom.speedLabel.textContent = '⚡ เสียงปกติ 1.0x';
    }
  }

  // --- ROLE TOGGLE (Parent / Student) ---
  function toggleRole() {
    state.userRole = state.userRole === 'parent' ? 'student' : 'parent';
    updateRoleUI();
  }

  function updateRoleUI() {
    const isParent = state.userRole === 'parent';
    if (dom.parentBadge) {
      dom.parentBadge.textContent = isParent ? '👨‍🏫 โหมดคุณพ่อ (มีคำอธิบายภาษาไทย)' : '👦 โหมดนักเรียน (เน้นฝึกทำข้อสอบ)';
      dom.parentBadge.className = isParent 
        ? 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300'
        : 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300';
    }
    if (dom.roleToggleBtn) {
      dom.roleToggleBtn.textContent = isParent ? 'สลับเป็นโหมดนักเรียน' : 'สลับเป็นโหมดคุณพ่อ';
    }
    // Update parent guide hints in DOM
    document.querySelectorAll('.parent-tip-box').forEach(el => {
      el.style.display = isParent ? 'block' : 'none';
    });
  }

  // --- DASHBOARD RENDERING ---
  function renderDashboard() {
    const stats = Storage.getStats();
    const mistakes = Storage.getMistakes();
    const mastery = Storage.getMastery();
    const settings = Storage.getSettings();

    // Calculate days left
    const examDate = new Date(settings.examDate || '2026-11-23');
    const now = new Date();
    const diffTime = examDate - now;
    const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    if (dom.examCountdown) dom.examCountdown.textContent = diffDays;

    // Count mastered words in active pool (score >= 2)
    const pool = getActiveVocabPool(true);
    const poolIds = new Set(pool.map(w => w.id));
    const masteredCount = Object.keys(mastery).filter(id => poolIds.has(parseInt(id)) && mastery[id] >= 2).length;
    const poolMistakes = mistakes.filter(m => poolIds.has(m.id));

    if (dom.statMasteredCount) dom.statMasteredCount.textContent = `${masteredCount} / ${pool.length}`;
    if (dom.statMistakeCount) dom.statMistakeCount.textContent = poolMistakes.length;
    if (dom.statTotalTested) dom.statTotalTested.textContent = stats.totalQuestions;

    const accuracy = stats.totalQuestions > 0 ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) : 0;
    if (dom.statAccuracyRate) dom.statAccuracyRate.textContent = `${accuracy}%`;

    const goalDesc = document.getElementById('stat-mastered-goal-desc');
    if (goalDesc) goalDesc.textContent = `เป้าหมาย ${pool.length} คำ`;

    updateRoleUI();
  }

  // --- START QUIZ SESSION ---
  function startQuiz(mode, count = 10) {
    clearInterval(state.quizTimer);
    const mistakes = Storage.getMistakes();

    if (mode === 'mistakes' && mistakes.length === 0) {
      alert('เยี่ยมมาก! ตอนนี้ยังไม่มีคำศัพท์ที่ตอบผิดเลย คุณพ่อสามารถเลือกแบบทดสอบด้านล่างได้เลยครับ');
      return;
    }

    const questions = QuizEngine.generateQuizSession({
      mode: mode,
      count: count,
      examType: state.examType,
      levelFilter: state.filterLevel,
      mistakeItems: mistakes
    });

    if (questions.length === 0) {
      alert('ไม่พบคำถามตามเงื่อนไขที่เลือก กรุณาตรวจสอบการตั้งค่าระดับ HSK');
      return;
    }

    state.quizSession = {
      mode: mode,
      questions: questions,
      currentIndex: 0,
      userAnswers: [],
      startTime: Date.now(),
      isFinished: false
    };

    switchTab('quiz');
    dom.quizSetupArea.classList.add('hidden');
    dom.quizResultArea.classList.add('hidden');
    dom.quizActiveArea.classList.remove('hidden');

    // Timer setup for mock exam (30 mins = 1800s)
    if (mode === 'mock_exam') {
      state.quizSecondsLeft = 30 * 60;
      startQuizTimer();
    } else {
      document.getElementById('quiz-timer-display').classList.add('hidden');
    }

    renderCurrentQuestion();
  }

  function startQuizTimer() {
    const timerDisplay = document.getElementById('quiz-timer-display');
    const timerText = document.getElementById('quiz-timer-text');
    timerDisplay.classList.remove('hidden');

    function updateDisplay() {
      const mins = Math.floor(state.quizSecondsLeft / 60);
      const secs = state.quizSecondsLeft % 60;
      timerText.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      if (state.quizSecondsLeft <= 300) {
        timerDisplay.classList.add('text-red-600', 'animate-pulse');
      } else {
        timerDisplay.classList.remove('text-red-600', 'animate-pulse');
      }
    }

    updateDisplay();
    state.quizTimer = setInterval(() => {
      state.quizSecondsLeft--;
      updateDisplay();
      if (state.quizSecondsLeft <= 0) {
        clearInterval(state.quizTimer);
        alert('หมดเวลาทำข้อสอบแล้ว! ระบบจะสรุปคะแนนอัตโนมัติ');
        finishQuiz();
      }
    }, 1000);
  }

  // --- RENDER CURRENT QUESTION ---
  function renderCurrentQuestion() {
    const session = state.quizSession;
    if (!session || session.currentIndex >= session.questions.length) {
      finishQuiz();
      return;
    }

    const q = session.questions[session.currentIndex];
    const totalQ = session.questions.length;
    const currentNum = session.currentIndex + 1;

    // Update Progress
    document.getElementById('quiz-progress-text').textContent = `ข้อที่ ${currentNum} / ${totalQ}`;
    const progressPercent = Math.round((currentNum / totalQ) * 100);
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;

    // Category / Section badge
    const badge = document.getElementById('quiz-section-badge');
    badge.textContent = q.section || q.category;

    // Prompt in Thai
    document.getElementById('quiz-prompt-thai').textContent = q.promptThai;

    // Reset feedback container
    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.classList.add('hidden');
    feedbackBox.innerHTML = '';

    const cardContent = document.getElementById('quiz-card-content');
    cardContent.innerHTML = '';

    // Auto-play audio if listening or if question has audioText
    if (q.type === 'listening' || Storage.getSettings().autoPlayAudio) {
      setTimeout(() => {
        Audio.speak(q.audioText, state.audioSpeed);
      }, 250);
    }

    // --- RENDER QUESTION TYPES ---
    if (q.type === 'listening') {
      renderListeningQuestion(q, cardContent);
    } else if (q.type === 'reading') {
      renderReadingQuestion(q, cardContent);
    } else if (q.type === 'writing') {
      renderWritingQuestion(q, cardContent);
    }
  }

  // 1. Listening Question UI
  function renderListeningQuestion(q, container) {
    const audioBtn = document.createElement('div');
    audioBtn.className = 'flex flex-col items-center justify-center p-6 bg-indigo-50 border-2 border-indigo-200 border-dashed rounded-2xl mb-6 cursor-pointer hover:bg-indigo-100 transition shadow-inner';
    audioBtn.innerHTML = `
      <div class="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-lg mb-2 transform active:scale-95 transition">
        🔊
      </div>
      <p class="text-indigo-800 font-bold text-base">กดเพื่อฟังเสียงภาษาจีน</p>
      <p class="text-xs text-indigo-500 mt-1">คลิกซ้ำเพื่อฟังอีกครั้งได้ตามต้องการ</p>
    `;
    audioBtn.onclick = () => Audio.speak(q.audioText, state.audioSpeed);
    container.appendChild(audioBtn);

    const choicesGrid = document.createElement('div');
    choicesGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-3.5';

    q.choices.forEach((choice, idx) => {
      const btn = document.createElement('button');
      const letter = String.fromCharCode(65 + idx);
      btn.className = 'choice-btn flex items-center gap-3.5 p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/50 bg-white text-left transition font-medium shadow-sm hover:shadow text-lg';
      btn.innerHTML = `
        <span class="w-9 h-9 rounded-lg bg-gray-100 text-gray-700 font-bold flex items-center justify-center flex-shrink-0 text-sm border border-gray-300">${letter}</span>
        <span class="flex-1 text-gray-800 font-semibold ${q.subType === 'audio_to_hanzi' ? 'text-2xl font-chinese' : 'text-base'}">${choice}</span>
      `;
      btn.onclick = () => submitAnswer(choice, btn);
      choicesGrid.appendChild(btn);
    });

    container.appendChild(choicesGrid);
  }

  // 2. Reading Question UI
  function renderReadingQuestion(q, container) {
    const displayBox = document.createElement('div');
    displayBox.className = 'flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-6 shadow-sm';

    if (q.subType === 'hanzi_to_meaning' || q.subType === 'hanzi_to_pinyin') {
      displayBox.innerHTML = `
        <div class="text-5xl font-chinese font-bold text-gray-900 tracking-wide mb-2">${q.displayHanzi}</div>
        ${q.displayPinyin ? `<div class="text-lg text-indigo-600 font-medium">${q.displayPinyin}</div>` : ''}
        <button class="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition" onclick="window.HSKAudio.speak('${q.audioText}', ${state.audioSpeed})">
          🔊 ฟังเสียงอ่าน
        </button>
      `;
    } else if (q.subType === 'meaning_to_hanzi') {
      displayBox.innerHTML = `
        <div class="text-2xl font-bold text-indigo-900 text-center mb-1">"${q.targetMeaning}"</div>
        <div class="text-sm text-gray-500">เลือกตัวอักษรจีนที่มีความหมายตรงกับคำนี้</div>
      `;
    } else if (q.subType === 'fill_in_the_blank') {
      displayBox.innerHTML = `
        <div class="text-2xl font-chinese font-semibold text-gray-900 leading-relaxed text-center mb-3">
          ${q.blankedSentence}
        </div>
        <div class="text-sm text-gray-600 bg-white px-3.5 py-1.5 rounded-lg border border-gray-200">
          ความหมายประโยค: <span class="font-medium text-gray-800">${q.sentenceMeaning}</span>
        </div>
        <button class="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition" onclick="window.HSKAudio.speak('${q.audioText}', ${state.audioSpeed})">
          🔊 ฟังทั้งประโยค
        </button>
      `;
    }
    container.appendChild(displayBox);

    const choicesGrid = document.createElement('div');
    choicesGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-3.5';

    q.choices.forEach((choice, idx) => {
      const btn = document.createElement('button');
      const letter = String.fromCharCode(65 + idx);
      const isHanzi = q.subType === 'meaning_to_hanzi' || q.subType === 'fill_in_the_blank';
      btn.className = 'choice-btn flex items-center gap-3.5 p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/50 bg-white text-left transition font-medium shadow-sm hover:shadow text-lg';
      btn.innerHTML = `
        <span class="w-9 h-9 rounded-lg bg-gray-100 text-gray-700 font-bold flex items-center justify-center flex-shrink-0 text-sm border border-gray-300">${letter}</span>
        <span class="flex-1 text-gray-800 font-semibold ${isHanzi ? 'text-2xl font-chinese' : 'text-base'}">${choice}</span>
      `;
      btn.onclick = () => submitAnswer(choice, btn);
      choicesGrid.appendChild(btn);
    });

    container.appendChild(choicesGrid);
  }

  // 3. Writing Question UI
  function renderWritingQuestion(q, container) {
    if (q.subType === 'sentence_unscramble') {
      renderSentenceUnscramble(q, container);
    } else {
      renderHanziStrokeWriting(q, container);
    }
  }

  // 3.1 Sentence Unscramble (连词成句)
  function renderSentenceUnscramble(q, container) {
    state.writingSelectedChunks = [];

    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-5';

    // Target sentence placeholder / assembly area
    const assemblyBox = document.createElement('div');
    assemblyBox.id = 'unscramble-assembly-box';
    assemblyBox.className = 'min-h-[72px] p-4 bg-amber-50/60 border-2 border-dashed border-amber-300 rounded-2xl flex flex-wrap gap-2.5 items-center justify-center text-xl font-chinese font-semibold text-gray-800 shadow-inner';
    assemblyBox.innerHTML = '<span class="text-sm text-amber-700 font-sans font-normal italic">คลิกเลือกบล็อกคำศัพท์ด้านล่างเพื่อเรียงเป็นประโยค</span>';
    wrapper.appendChild(assemblyBox);

    // Available chunk blocks
    const chunksContainer = document.createElement('div');
    chunksContainer.id = 'unscramble-chunks-container';
    chunksContainer.className = 'flex flex-wrap gap-3 justify-center py-2';

    q.chunks.forEach((chunk, idx) => {
      const chip = document.createElement('button');
      chip.className = 'unscramble-chip px-5 py-3 rounded-xl bg-white border-2 border-indigo-200 text-indigo-900 font-chinese font-bold text-xl shadow hover:bg-indigo-50 active:scale-95 transition';
      chip.textContent = chunk;
      chip.dataset.index = idx;
      chip.onclick = () => {
        if (!state.writingSelectedChunks.includes(chunk)) {
          state.writingSelectedChunks.push(chunk);
          chip.classList.add('opacity-30', 'pointer-events-none');
          updateAssemblyUI();
        }
      };
      chunksContainer.appendChild(chip);
    });
    wrapper.appendChild(chunksContainer);

    function updateAssemblyUI() {
      assemblyBox.innerHTML = '';
      if (state.writingSelectedChunks.length === 0) {
        assemblyBox.innerHTML = '<span class="text-sm text-amber-700 font-sans font-normal italic">คลิกเลือกบล็อกคำศัพท์ด้านล่างเพื่อเรียงเป็นประโยค</span>';
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50');
        return;
      }

      state.writingSelectedChunks.forEach((chunk, i) => {
        const item = document.createElement('span');
        item.className = 'inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 text-white rounded-lg shadow text-lg font-chinese font-bold cursor-pointer hover:bg-red-500 transition group';
        item.title = 'คลิกเพื่อเอาคำนี้ออก';
        item.innerHTML = `${chunk} <span class="text-xs text-indigo-200 group-hover:text-white">✕</span>`;
        item.onclick = () => {
          // Remove from selected
          state.writingSelectedChunks.splice(i, 1);
          // Restore in chunksContainer
          const originalChip = chunksContainer.querySelector(`.unscramble-chip[data-index="${q.chunks.indexOf(chunk)}"]`);
          if (originalChip) {
            originalChip.classList.remove('opacity-30', 'pointer-events-none');
          }
          updateAssemblyUI();
        };
        assemblyBox.appendChild(item);
      });

      const allSelected = state.writingSelectedChunks.length === q.chunks.length;
      submitBtn.disabled = !allSelected;
      if (allSelected) {
        submitBtn.classList.remove('opacity-50');
      } else {
        submitBtn.classList.add('opacity-50');
      }
    }

    // Action Controls
    const actionRow = document.createElement('div');
    actionRow.className = 'flex justify-center gap-3 mt-2';

    const resetBtn = document.createElement('button');
    resetBtn.className = 'px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition';
    resetBtn.textContent = '🔄 รีเซ็ตการเรียงคำ';
    resetBtn.onclick = () => {
      state.writingSelectedChunks = [];
      chunksContainer.querySelectorAll('.unscramble-chip').forEach(c => {
        c.classList.remove('opacity-30', 'pointer-events-none');
      });
      updateAssemblyUI();
    };

    const submitBtn = document.createElement('button');
    submitBtn.id = 'unscramble-submit-btn';
    submitBtn.disabled = true;
    submitBtn.className = 'px-8 py-2.5 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow transition opacity-50';
    submitBtn.textContent = 'ตรวจคำตอบ ✓';
    submitBtn.onclick = () => {
      const userAnswerSentence = state.writingSelectedChunks.join('');
      const correctSentence = q.correctOrder.join('');
      // Check punctuation trimmed comparison
      const normUser = userAnswerSentence.replace(/[。，！？,.!?]/g, '');
      const normCorrect = correctSentence.replace(/[。，！？,.!?]/g, '');
      const isCorrect = normUser === normCorrect;
      submitAnswer(userAnswerSentence, submitBtn, isCorrect);
    };

    actionRow.appendChild(resetBtn);
    actionRow.appendChild(submitBtn);
    wrapper.appendChild(actionRow);

    container.appendChild(wrapper);
  }

  // 3.2 Hanzi Stroke & Writing Practice Canvas (书写汉字)
  function renderHanziStrokeWriting(q, container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col items-center gap-4';

    const contextBox = document.createElement('div');
    contextBox.className = 'w-full text-center p-4 bg-slate-50 rounded-2xl border border-slate-200';
    contextBox.innerHTML = `
      <div class="text-xs text-gray-500 font-semibold mb-1">บริบทประโยค:</div>
      <div class="text-xl font-chinese font-bold text-gray-800">${q.sentenceContext}</div>
      <div class="text-sm text-indigo-700 font-medium mt-1">พินอิน: <span class="text-base font-bold">${q.targetPinyin}</span> | ความหมาย: ${q.meaning}</div>
    `;
    wrapper.appendChild(contextBox);

    // Canvas + Controls Container
    const canvasWrap = document.createElement('div');
    canvasWrap.className = 'flex flex-col items-center bg-white p-3 rounded-2xl border-2 border-indigo-200 shadow-md';
    canvasWrap.innerHTML = `
      <canvas id="hanzi-drawing-canvas" width="260" height="260" class="rounded-xl cursor-crosshair touch-none"></canvas>
      <div class="flex items-center gap-2 mt-3 text-xs">
        <button id="canvas-toggle-model-btn" class="px-2.5 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-medium transition">
          👁️ ซ่อน/แสดงตัวอย่าง
        </button>
        <button id="canvas-undo-btn" class="px-2.5 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition">
          ↩️ ย้อนกลับ 1 เส้น
        </button>
        <button id="canvas-clear-btn" class="px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-medium transition">
          🗑️ ล้างกระดาน
        </button>
      </div>
    `;
    wrapper.appendChild(canvasWrap);

    // Typing answer input & submit
    const inputRow = document.createElement('div');
    inputRow.className = 'w-full max-w-sm flex gap-2';
    inputRow.innerHTML = `
      <input type="text" id="hanzi-input-field" placeholder="พิมพ์ตัวอักษรจีนคำตอบที่นี่..." class="flex-1 px-4 py-2.5 rounded-xl border-2 border-gray-300 focus:border-indigo-500 text-xl font-chinese text-center font-bold outline-none" autofocus />
      <button id="hanzi-submit-btn" class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow transition">
        ตรวจคำตอบ
      </button>
    `;
    wrapper.appendChild(inputRow);

    container.appendChild(wrapper);

    // Initialize Canvas after element inserted
    setTimeout(() => {
      const hc = new window.HanziCanvas('hanzi-drawing-canvas');
      hc.setModelChar(q.targetHanzi, true);
      state.hanziCanvasInstance = hc;

      document.getElementById('canvas-toggle-model-btn').onclick = () => hc.toggleModel();
      document.getElementById('canvas-undo-btn').onclick = () => hc.undo();
      document.getElementById('canvas-clear-btn').onclick = () => hc.clear();

      const input = document.getElementById('hanzi-input-field');
      const submitBtn = document.getElementById('hanzi-submit-btn');

      const doSubmit = () => {
        const val = input.value.trim();
        if (!val) {
          alert('กรุณาพิมพ์ตัวอักษรจีน หรือคลิกปุ่มตรวจคำตอบ');
          return;
        }
        const isCorrect = val === q.targetHanzi;
        submitAnswer(val, submitBtn, isCorrect);
      };

      submitBtn.onclick = doSubmit;
      input.onkeypress = (e) => {
        if (e.key === 'Enter') doSubmit();
      };
    }, 50);
  }

  // --- SUBMIT ANSWER & FEEDBACK ---
  function submitAnswer(userChoice, targetElement, explicitIsCorrect = null) {
    const session = state.quizSession;
    if (!session || session.isFinished) return;

    const q = session.questions[session.currentIndex];
    const isCorrect = explicitIsCorrect !== null 
      ? explicitIsCorrect 
      : (userChoice === q.correctAnswer);

    // Disable choices
    document.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = true);

    // Record answer
    session.userAnswers.push({
      question: q,
      userChoice: userChoice,
      isCorrect: isCorrect
    });

    // Update global storage stats
    const delta = {
      totalQuestions: 1,
      totalCorrect: isCorrect ? 1 : 0
    };
    if (q.type === 'listening') {
      delta.listeningQuestions = 1;
      if (isCorrect) delta.listeningCorrect = 1;
    } else if (q.type === 'reading') {
      delta.readingQuestions = 1;
      if (isCorrect) delta.readingCorrect = 1;
    } else if (q.type === 'writing') {
      delta.writingQuestions = 1;
      if (isCorrect) delta.writingCorrect = 1;
    }
    Storage.updateStats(delta);

    if (isCorrect) {
      Audio.playCorrect();
      Storage.updateMastery(q.wordId, 1);
    } else {
      Audio.playWrong();
      Storage.recordMistake(q);
    }

    // Show Feedback Box
    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.classList.remove('hidden');

    const feedbackColor = isCorrect 
      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
      : 'bg-rose-50 border-rose-300 text-rose-950';

    feedbackBox.className = `p-5 rounded-2xl border-2 ${feedbackColor} shadow-md mt-6 animate-fade-in`;
    feedbackBox.innerHTML = `
      <div class="flex items-start gap-3.5">
        <div class="text-3xl">${isCorrect ? '🎉' : '💡'}</div>
        <div class="flex-1">
          <div class="font-bold text-lg mb-1 flex items-center gap-2">
            <span>${isCorrect ? 'ถูกต้องแล้ว! เก่งมากครับ' : 'ยังไม่ถูกต้องครับผม'}</span>
            <button class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/80 border border-current shadow-sm" onclick="window.HSKAudio.speak('${q.audioText}', ${state.audioSpeed})">
              🔊 ฟังเสียงเฉลย
            </button>
          </div>
          <div class="text-sm font-medium leading-relaxed mb-3">
            ${q.explanation}
          </div>
          <div class="text-xs text-gray-600 bg-white/70 p-2.5 rounded-xl border border-gray-200">
            <span class="font-bold">👨‍🏫 สำหรับคุณพ่อ:</span> คำนี้คือ <span class="font-bold font-chinese">${q.hanzi}</span> (อ่านว่า: ${q.pinyin}) แปลว่า "${q.meaning}"
          </div>
        </div>
      </div>
      <div class="mt-4 flex justify-end">
        <button id="quiz-next-btn" class="px-7 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow transition text-base">
          ${session.currentIndex + 1 < session.questions.length ? 'ข้อถัดไป ➔' : 'ดูสรุปผลคะแนน 🏆'}
        </button>
      </div>
    `;

    document.getElementById('quiz-next-btn').onclick = () => {
      session.currentIndex++;
      renderCurrentQuestion();
    };
  }

  // --- FINISH QUIZ & RESULT SUMMARY ---
  function finishQuiz() {
    clearInterval(state.quizTimer);
    const session = state.quizSession;
    if (!session) return;
    session.isFinished = true;

    dom.quizActiveArea.classList.add('hidden');
    dom.quizResultArea.classList.remove('hidden');

    const totalQ = session.questions.length;
    const correctCount = session.userAnswers.filter(a => a.isCorrect).length;
    const scorePercent = Math.round((correctCount / totalQ) * 100);

    // Mock exam calculation out of 300 points
    let mockExamScore = 0;
    let isMockPassed = false;
    if (session.mode === 'mock_exam') {
      session.userAnswers.forEach(a => {
        if (a.isCorrect) mockExamScore += (a.question.points || 12);
      });
      isMockPassed = mockExamScore >= 180;
      Storage.updateStats({
        mockExamsTaken: 1,
        mockExamsPassed: isMockPassed ? 1 : 0
      });
    }

    // Save session in history
    Storage.addHistoryRecord({
      mode: session.mode,
      totalQuestions: totalQ,
      correctCount: correctCount,
      percentage: scorePercent,
      mockScore: mockExamScore,
      passed: isMockPassed
    });

    // Audio & Confetti
    if (scorePercent >= 70 || isMockPassed) {
      Audio.playVictory();
      if (window.launchConfetti) window.launchConfetti(3000);
    }

    // Render Result Summary View
    const resultContainer = document.getElementById('quiz-result-details');
    resultContainer.innerHTML = `
      <div class="text-center py-6">
        <div class="inline-flex items-center justify-center w-24 h-24 rounded-full ${scorePercent >= 70 ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'} text-5xl mb-4 shadow-inner">
          ${scorePercent >= 80 ? '🏆' : (scorePercent >= 60 ? '⭐' : '💪')}
        </div>
        <h2 class="text-3xl font-extrabold text-gray-900 mb-2">
          ${scorePercent >= 80 ? 'สุดยอดมากเลยลูก! ทำได้ยอดเยี่ยมมาก' : (scorePercent >= 60 ? 'เก่งมากครับ พัฒนาขึ้นเรื่อยๆ!' : 'ไม่เป็นไรเลยลูก ฝึกฝนอีกนิดเก่งแน่นอน')}
        </h2>
        <p class="text-base text-gray-600 max-w-md mx-auto">
          ${session.mode === 'mock_exam' 
            ? `ผลการจำลองสอบ HSK 3: ได้คะแนน <strong>${mockExamScore} / 300 คะแนน</strong> (${isMockPassed ? '🎉 ผ่านเกณฑ์มาตรฐาน HSK 3 แล้ว!' : 'ยังไม่ถึงเกณฑ์ผ่าน 180 คะแนน ทบทวนอีกนิดนะลูก'})`
            : `ตอบถูกต้อง <strong>${correctCount} จาก ${totalQ} ข้อ</strong> (คิดเป็น ${scorePercent}%)`}
        </p>
      </div>

      <!-- Part breakdown for mock exam -->
      ${session.mode === 'mock_exam' ? `
        <div class="grid grid-cols-3 gap-3 my-4">
          <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-center">
            <div class="text-xs text-blue-700 font-semibold">การฟัง (听力)</div>
            <div class="text-xl font-bold text-blue-900">${session.userAnswers.filter(a => a.question.type === 'listening' && a.isCorrect).length * 10} / 100</div>
          </div>
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
            <div class="text-xs text-emerald-700 font-semibold">การอ่าน (阅读)</div>
            <div class="text-xl font-bold text-emerald-900">${session.userAnswers.filter(a => a.question.type === 'reading' && a.isCorrect).length * 10} / 100</div>
          </div>
          <div class="p-3 bg-purple-50 border border-purple-200 rounded-xl text-center">
            <div class="text-xs text-purple-700 font-semibold">การเขียน (书写)</div>
            <div class="text-xl font-bold text-purple-900">${session.userAnswers.filter(a => a.question.type === 'writing' && a.isCorrect).length * 20} / 100</div>
          </div>
        </div>
      ` : ''}

      <!-- Detailed Review List -->
      <div class="mt-6 border-t border-gray-200 pt-6">
        <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span>📋 เฉลยและทบทวนอย่างละเอียดทุกข้อ</span>
          <span class="text-xs font-normal text-gray-500">(คุณพ่อสามารถอ่านคำแปลภาษาไทยและกดฟังเสียงได้ทุกข้อ)</span>
        </h3>
        <div class="flex flex-col gap-3">
          ${session.userAnswers.map((item, idx) => `
            <div class="p-4 rounded-xl border ${item.isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'} flex items-start gap-3">
              <span class="w-7 h-7 rounded-full ${item.isCorrect ? 'bg-emerald-600' : 'bg-rose-600'} text-white font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                ${item.isCorrect ? '✓' : '✕'}
              </span>
              <div class="flex-1">
                <div class="flex items-center gap-2 font-chinese font-bold text-lg text-gray-900">
                  <span>ข้อ ${idx + 1}: 【${item.question.hanzi}】</span>
                  <span class="text-sm font-sans font-medium text-indigo-700">${item.question.pinyin}</span>
                  <button class="text-xs px-2 py-0.5 rounded-full bg-white border border-gray-300 hover:bg-gray-100" onclick="window.HSKAudio.speak('${item.question.audioText}', ${state.audioSpeed})">
                    🔊 ฟังเสียง
                  </button>
                </div>
                <div class="text-sm text-gray-700 mt-1">${item.question.explanation}</div>
                ${!item.isCorrect ? `<div class="text-xs text-rose-700 font-semibold mt-1">คำตอบของลูก: ${item.userChoice || '(ไม่ได้ตอบ)'}</div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Action buttons in result view
    document.getElementById('result-retry-btn').onclick = () => {
      startQuiz(session.mode, session.questions.length);
    };
    document.getElementById('result-dashboard-btn').onclick = () => {
      switchTab('dashboard');
    };
  }

  // ========================================================
  // --- SUBTAB: LISTENING QUIZ 600 WORDS (NEW FEATURE) ---
  // ========================================================
  const quiz600 = {
    words: [],
    currentIndex: 0,
    correctCount: 0,
    wrongCount: 0,
    isAnswered: false,
    selectedRange: 'all',
    currentChoices: []
  };

  function switchVocabSubtab(subtabName) {
    state.currentVocabSubtab = subtabName;
    const btnQuiz = document.getElementById('subtab-btn-quiz600');
    const btnFlash = document.getElementById('subtab-btn-flashcards');
    const btnTable = document.getElementById('subtab-btn-table');

    const viewQuiz = document.getElementById('vocab-subtab-quiz600');
    const viewFlash = document.getElementById('vocab-subtab-flashcards');
    const viewTable = document.getElementById('vocab-subtab-table');

    // Reset button styles
    [btnQuiz, btnFlash, btnTable].forEach(btn => {
      if (!btn) return;
      btn.className = 'subtab-btn px-4 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-2 text-gray-700 hover:bg-gray-100';
    });

    // Hide all views
    [viewQuiz, viewFlash, viewTable].forEach(v => {
      if (v) v.classList.add('hidden');
    });

    if (subtabName === 'quiz600') {
      if (btnQuiz) btnQuiz.className = 'subtab-btn px-4 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-2 bg-indigo-600 text-white shadow-sm';
      if (viewQuiz) viewQuiz.classList.remove('hidden');
      initQuiz600();
    } else if (subtabName === 'flashcards') {
      if (btnFlash) btnFlash.className = 'subtab-btn px-4 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-2 bg-indigo-600 text-white shadow-sm';
      if (viewFlash) viewFlash.classList.remove('hidden');
      renderFlashcards();
    } else if (subtabName === 'table') {
      if (btnTable) btnTable.className = 'subtab-btn px-4 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-2 bg-indigo-600 text-white shadow-sm';
      if (viewTable) viewTable.classList.remove('hidden');
      renderVocabTable(getActiveVocabPool(true));
    }
  }

  function initQuiz600() {
    const saved = Storage.getQuiz600();
    const resumeBox = document.getElementById('quiz600-resume-box');
    const resumeDesc = document.getElementById('quiz600-resume-desc');
    const resumeBtn = document.getElementById('quiz600-resume-btn');
    const startBtn = document.getElementById('quiz600-start-btn');
    const resetBtn = document.getElementById('quiz600-reset-btn');

    // Check if there is a saved checkpoint
    if (saved && saved.currentIndex > 0 && saved.totalWords && saved.currentIndex < saved.totalWords) {
      if (resumeBox) resumeBox.classList.remove('hidden');
      if (resumeDesc) {
        resumeDesc.textContent = `ทำค้างไว้ถึงคำที่ ${saved.currentIndex + 1} จากทั้งหมด ${saved.totalWords} คำ (ตอบถูก ${saved.correctCount || 0} / ตอบผิด ${saved.wrongCount || 0})`;
      }
      if (resumeBtn) {
        resumeBtn.onclick = () => startQuiz600(true);
      }
    } else {
      if (resumeBox) resumeBox.classList.add('hidden');
    }

    if (startBtn) {
      startBtn.onclick = () => startQuiz600(false);
    }
    if (resetBtn) {
      resetBtn.onclick = () => {
        if (confirm('ต้องการล้างประวัติการทำแบบทดสอบ 600 คำเพื่อเริ่มใหม่หรือไม่?')) {
          Storage.resetQuiz600();
          initQuiz600();
        }
      };
    }
  }

  function startQuiz600(isResume = false) {
    const allVocab = getActiveVocabPool();
    const rangeRadio = document.querySelector('input[name="quiz600-range"]:checked');
    const rangeVal = rangeRadio ? rangeRadio.value : 'all';

    let pool = allVocab;
    if (state.examType === 'yct') {
      if (rangeVal === '1') pool = allVocab.filter(w => w.level === 1);
      else if (rangeVal === '2') pool = allVocab.filter(w => w.level <= 2);
      else if (rangeVal === '3') pool = allVocab.filter(w => w.level <= 3);
      else if (rangeVal === '4') pool = allVocab.filter(w => w.level <= 4);
    } else {
      if (rangeVal === 'hsk1' || rangeVal === '1') pool = allVocab.filter(w => w.level === 1);
      else if (rangeVal === 'hsk2' || rangeVal === '2') pool = allVocab.filter(w => w.level === 2);
      else if (rangeVal === 'hsk3' || rangeVal === '3') pool = allVocab.filter(w => w.level === 3);
    }

    quiz600.words = pool;
    quiz600.selectedRange = rangeVal;
    quiz600.isAnswered = false;

    if (isResume) {
      const saved = Storage.getQuiz600();
      quiz600.currentIndex = saved.currentIndex || 0;
      quiz600.correctCount = saved.correctCount || 0;
      quiz600.wrongCount = saved.wrongCount || 0;
    } else {
      quiz600.currentIndex = 0;
      quiz600.correctCount = 0;
      quiz600.wrongCount = 0;
    }

    // Toggle panels
    document.getElementById('quiz600-setup-panel').classList.add('hidden');
    document.getElementById('quiz600-active-panel').classList.remove('hidden');
    document.getElementById('quiz600-finished-panel').classList.add('hidden');

    renderCurrentQuiz600Word();
  }

  function renderCurrentQuiz600Word() {
    if (quiz600.currentIndex >= quiz600.words.length) {
      finishQuiz600();
      return;
    }

    quiz600.isAnswered = false;
    const targetWord = quiz600.words[quiz600.currentIndex];
    const totalWords = quiz600.words.length;
    const currentNum = quiz600.currentIndex + 1;

    // Badges & Progress
    document.getElementById('quiz600-progress-badge').textContent = `คำที่ ${currentNum} / ${totalWords}`;
    document.getElementById('quiz600-level-badge').textContent = (state.examType === 'yct' ? 'YCT ระดับ ' : 'HSK ระดับ ') + targetWord.level;
    document.getElementById('quiz600-live-correct').textContent = quiz600.correctCount;
    document.getElementById('quiz600-live-wrong').textContent = quiz600.wrongCount;

    const answeredCount = quiz600.correctCount + quiz600.wrongCount;
    const accuracy = answeredCount > 0 ? Math.round((quiz600.correctCount / answeredCount) * 100) : 0;
    document.getElementById('quiz600-live-percent').textContent = `แม่นยำ ${accuracy}%`;

    const progressPct = Math.round((currentNum / totalWords) * 100);
    document.getElementById('quiz600-progress-bar').style.width = `${progressPct}%`;
    document.getElementById('quiz600-speed-indicator').textContent = `${state.audioSpeed}x`;

    // Reset feedback box
    const feedbackBox = document.getElementById('quiz600-feedback-box');
    feedbackBox.classList.add('hidden');
    feedbackBox.innerHTML = '';

    // Generate 4 Thai choices
    const correctMeaning = (targetWord.entries && targetWord.entries[0]) ? targetWord.entries[0].meaning : '';
    const allVocab = getActiveVocabPool();
    
    // Pick 3 distractors with different meanings
    const distractorCandidates = allVocab
      .filter(w => w.id !== targetWord.id && w.entries && w.entries[0] && w.entries[0].meaning !== correctMeaning)
      .map(w => w.entries[0].meaning);
    
    const uniqueCandidates = [...new Set(distractorCandidates)].sort(() => 0.5 - Math.random()).slice(0, 3);
    const choices = [correctMeaning, ...uniqueCandidates].sort(() => 0.5 - Math.random());
    quiz600.currentChoices = choices;

    // Render choice buttons
    const choicesGrid = document.getElementById('quiz600-choices-grid');
    choicesGrid.innerHTML = '';

    choices.forEach((choice, idx) => {
      const letter = String.fromCharCode(65 + idx);
      const btn = document.createElement('button');
      btn.className = 'quiz600-choice-btn flex items-center gap-3.5 p-4 rounded-2xl border-2 border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/40 bg-white text-left transition font-semibold text-gray-800 shadow-sm active:scale-98 text-base';
      btn.innerHTML = `
        <span class="w-8 h-8 rounded-xl bg-gray-100 text-gray-700 font-bold flex items-center justify-center flex-shrink-0 text-sm border border-gray-300">${letter}</span>
        <span class="flex-1">${choice}</span>
      `;
      btn.onclick = () => handleQuiz600Answer(choice, btn, correctMeaning, targetWord);
      choicesGrid.appendChild(btn);
    });

    // Audio Playback
    setTimeout(() => {
      Audio.speak(targetWord.hanzi, state.audioSpeed);
    }, 200);

    // Audio trigger button click
    const trigger = document.getElementById('quiz600-audio-trigger');
    trigger.onclick = () => Audio.speak(targetWord.hanzi, state.audioSpeed);

    // Quit button click
    document.getElementById('quiz600-quit-btn').onclick = () => {
      Storage.saveQuiz600({
        currentIndex: quiz600.currentIndex,
        correctCount: quiz600.correctCount,
        wrongCount: quiz600.wrongCount,
        totalWords: totalWords,
        range: quiz600.selectedRange
      });
      document.getElementById('quiz600-active-panel').classList.add('hidden');
      document.getElementById('quiz600-setup-panel').classList.remove('hidden');
      initQuiz600();
    };
  }

  function handleQuiz600Answer(selectedChoice, chosenBtn, correctMeaning, targetWord) {
    if (quiz600.isAnswered) return;
    quiz600.isAnswered = true;

    const isCorrect = (selectedChoice === correctMeaning);
    const buttons = document.querySelectorAll('.quiz600-choice-btn');
    buttons.forEach(b => b.classList.add('pointer-events-none'));

    // Highlight buttons
    if (isCorrect) {
      Audio.playCorrect();
      quiz600.correctCount++;
      chosenBtn.classList.remove('border-gray-200', 'bg-white');
      chosenBtn.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-900');
      Storage.updateMastery(targetWord.id, 1);
    } else {
      Audio.playWrong();
      quiz600.wrongCount++;
      chosenBtn.classList.remove('border-gray-200', 'bg-white');
      chosenBtn.classList.add('border-rose-500', 'bg-rose-50', 'text-rose-900');
      // Highlight the correct one
      buttons.forEach(b => {
        if (b.textContent.includes(correctMeaning)) {
          b.classList.remove('border-gray-200', 'bg-white');
          b.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-900');
        }
      });
      // Save mistake
      Storage.recordMistake({
        wordId: targetWord.id,
        hanzi: targetWord.hanzi,
        pinyin: targetWord.pinyin,
        meaning: correctMeaning
      });
    }

    // Save progress
    Storage.saveQuiz600({
      currentIndex: quiz600.currentIndex + 1,
      correctCount: quiz600.correctCount,
      wrongCount: quiz600.wrongCount,
      totalWords: quiz600.words.length,
      range: quiz600.selectedRange
    });

    // Update Live Scores
    document.getElementById('quiz600-live-correct').textContent = quiz600.correctCount;
    document.getElementById('quiz600-live-wrong').textContent = quiz600.wrongCount;

    // Show Feedback Box
    const feedbackBox = document.getElementById('quiz600-feedback-box');
    feedbackBox.classList.remove('hidden');
    feedbackBox.className = `p-5 rounded-2xl border-2 ${isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-rose-50 border-rose-300 text-rose-950'} shadow-md animate-fade-in`;
    
    feedbackBox.innerHTML = `
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-start gap-3">
          <div class="text-3xl">${isCorrect ? '🎉' : '💡'}</div>
          <div>
            <div class="font-bold text-base flex items-center gap-2">
              <span>${isCorrect ? 'ถูกต้องแล้วครับ!' : 'ยังไม่ถูกต้องครับผม'}</span>
              <button class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/80 border border-current shadow-sm hover:bg-white" onclick="window.HSKAudio.speak('${targetWord.hanzi}', ${state.audioSpeed})">
                🔊 ฟังอีกครั้ง
              </button>
            </div>
            <div class="mt-2 flex items-baseline gap-2">
              <span class="text-3xl font-chinese font-bold text-gray-900">${targetWord.hanzi}</span>
              <span class="text-base text-indigo-700 font-mono font-semibold">${targetWord.pinyin}</span>
              <span class="text-sm text-gray-700">➔ แปลว่า: <strong class="text-gray-900">${correctMeaning}</strong></span>
            </div>
            ${targetWord.entries[0] && targetWord.entries[0].example_full ? `
              <div class="mt-2 text-xs text-gray-600 bg-white/70 p-2.5 rounded-xl border border-gray-200">
                <span class="font-bold">ตัวอย่างประโยค:</span> ${targetWord.entries[0].example_full}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
      <div class="mt-4 flex justify-end">
        <button id="quiz600-next-word-btn" class="px-7 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition text-base">
          คำถัดไป ➔
        </button>
      </div>
    `;

    document.getElementById('quiz600-next-word-btn').onclick = () => {
      quiz600.currentIndex++;
      renderCurrentQuiz600Word();
    };
  }

  function finishQuiz600() {
    Audio.playVictory();
    if (window.launchConfetti) window.launchConfetti(3500);

    document.getElementById('quiz600-active-panel').classList.add('hidden');
    const finishPanel = document.getElementById('quiz600-finished-panel');
    finishPanel.classList.remove('hidden');

    const total = quiz600.words.length;
    const correct = quiz600.correctCount;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    document.getElementById('quiz600-finish-total').textContent = total;
    document.getElementById('quiz600-finish-correct').textContent = correct;
    document.getElementById('quiz600-finish-percent').textContent = `${pct}%`;

    document.getElementById('quiz600-finish-desc').textContent = 
      `ลูกได้ฝึกฟังคำศัพท์ครบ ${total} คำ ตอบถูกต้อง ${correct} คำ (${pct}%) ยอดเยี่ยมมากครับ!`;

    document.getElementById('quiz600-restart-btn').onclick = () => {
      Storage.resetQuiz600();
      finishPanel.classList.add('hidden');
      document.getElementById('quiz600-setup-panel').classList.remove('hidden');
      initQuiz600();
    };

    renderDashboard();
  }

  // --- FLASHCARDS & VOCABULARY VIEW ---
  function renderFlashcards() {
    let filtered = getActiveVocabPool(true);

    // Filter by POS
    if (state.vocabPosFilter !== 'all') {
      filtered = filtered.filter(v => v.entries.some(e => e.pos.includes(state.vocabPosFilter)));
    }

    // Filter by Search Text
    if (state.vocabSearch) {
      const q = state.vocabSearch.toLowerCase().trim();
      filtered = filtered.filter(v => 
        v.hanzi.includes(q) ||
        v.pinyin.toLowerCase().includes(q) ||
        v.entries.some(e => e.meaning.toLowerCase().includes(q) || (e.example_full && e.example_full.includes(q)))
      );
    }

    if (dom.vocabSearchResultsCount) {
      dom.vocabSearchResultsCount.textContent = `พบ ${filtered.length} คำศัพท์`;
    }

    renderFlashcardCard(filtered);
    renderVocabTable(filtered);
  }

  function renderFlashcardCard(list) {
    if (list.length === 0) {
      dom.flashcardContainer.innerHTML = '<div class="p-8 text-center text-gray-500">ไม่พบคำศัพท์ตามเงื่อนไขที่ค้นหา</div>';
      return;
    }

    if (state.flashcardIndex >= list.length) state.flashcardIndex = 0;
    const word = list[state.flashcardIndex];
    const isStarred = Storage.isStarred(word.id);
    const masteryScore = Storage.getMastery()[word.id] || 0;

    dom.flashcardContainer.innerHTML = `
      <div class="relative w-full max-w-md mx-auto aspect-[4/3] cursor-pointer perspective" id="flashcard-card">
        <div class="w-full h-full rounded-3xl bg-white border-2 border-indigo-200 shadow-xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-indigo-400 relative overflow-hidden">
          
          <!-- Top bar inside card -->
          <div class="flex items-center justify-between text-xs text-gray-500">
            <span class="px-2.5 py-1 rounded-full font-bold bg-indigo-50 text-indigo-700">${state.examType.toUpperCase()} ระดับ ${word.level} (คำที่ ${word.id})</span>
            <div class="flex items-center gap-2">
              <span class="text-xs ${masteryScore >= 2 ? 'text-emerald-600 font-bold' : 'text-gray-400'}">
                ${masteryScore >= 2 ? '✓ แม่นยำแล้ว' : (masteryScore === 1 ? '🔄 กำลังจำ' : '⚪ ยังไม่เริ่ม')}
              </span>
              <button class="star-btn text-xl ${isStarred ? 'text-amber-500' : 'text-gray-300'} hover:scale-110 transition" id="card-star-btn">
                ★
              </button>
            </div>
          </div>

          <!-- Center Content -->
          <div class="text-center py-4 my-auto">
            ${!state.flashcardFlipped ? `
              <!-- FRONT: Hanzi + Pinyin -->
              <div class="text-6xl font-chinese font-bold text-gray-900 tracking-wide mb-3 animate-fade-in">${word.hanzi}</div>
              <div class="text-2xl text-indigo-600 font-medium tracking-wider mb-2 font-mono">${word.pinyin}</div>
              <div class="text-xs text-gray-400 mt-2">แตะที่การ์ดเพื่อดูความหมายและประโยคตัวอย่าง 🔄</div>
            ` : `
              <!-- BACK: Meaning & Sentences -->
              <div class="animate-fade-in">
                <div class="text-2xl font-bold text-gray-900 mb-2">
                  ${word.entries.map(e => `<span class="text-indigo-600 font-semibold text-sm">${e.pos}</span> ${e.meaning}`).join(' | ')}
                </div>
                ${word.entries[0] && word.entries[0].example_full ? `
                  <div class="mt-4 p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-left">
                    <div class="text-xs text-indigo-500 font-bold mb-1">ตัวอย่างประโยค:</div>
                    <div class="text-base font-chinese font-semibold text-gray-800">${word.entries[0].example_full}</div>
                  </div>
                ` : ''}
              </div>
            `}
          </div>

          <!-- Bottom controls inside card -->
          <div class="flex items-center justify-between pt-2 border-t border-gray-100">
            <button class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition" id="card-speak-btn">
              🔊 ฟังเสียงอ่าน
            </button>
            <span class="text-xs text-gray-400 font-mono">${state.flashcardIndex + 1} / ${list.length}</span>
            <button class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold ${masteryScore >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-emerald-100'} transition" id="card-master-btn">
              ${masteryScore >= 2 ? '✓ แม่นแล้ว' : 'ทำเครื่องหมายว่าจำได้'}
            </button>
          </div>

        </div>
      </div>
    `;

    // Bind Card events
    const card = document.getElementById('flashcard-card');
    card.onclick = (e) => {
      // Don't flip if clicking buttons
      if (e.target.closest('button')) return;
      state.flashcardFlipped = !state.flashcardFlipped;
      renderFlashcardCard(list);
    };

    document.getElementById('card-speak-btn').onclick = () => {
      Audio.speak(word.hanzi, state.audioSpeed);
    };

    document.getElementById('card-star-btn').onclick = (e) => {
      e.stopPropagation();
      Storage.toggleStar(word.id);
      renderFlashcardCard(list);
    };

    document.getElementById('card-master-btn').onclick = (e) => {
      e.stopPropagation();
      Storage.updateMastery(word.id, 2);
      renderFlashcardCard(list);
      renderDashboard();
    };

    // Navigation buttons below card
    document.getElementById('flashcard-prev-btn').onclick = () => {
      state.flashcardFlipped = false;
      state.flashcardIndex = (state.flashcardIndex - 1 + list.length) % list.length;
      renderFlashcardCard(list);
    };
    document.getElementById('flashcard-next-btn').onclick = () => {
      state.flashcardFlipped = false;
      state.flashcardIndex = (state.flashcardIndex + 1) % list.length;
      renderFlashcardCard(list);
    };
  }

  function renderVocabTable(list) {
    if (!dom.vocabTableBody) return;
    dom.vocabTableBody.innerHTML = '';

    const slice = list.slice(0, 100); // paginate first 100 for fast rendering
    slice.forEach(word => {
      const tr = document.createElement('tr');
      tr.className = 'border-b border-gray-100 hover:bg-slate-50 transition';
      tr.innerHTML = `
        <td class="p-3.5 text-center text-xs font-mono text-gray-400">${word.id}</td>
        <td class="p-3.5 font-chinese font-bold text-2xl text-gray-900">${word.hanzi}</td>
        <td class="p-3.5 font-medium text-indigo-700 font-mono text-base">${word.pinyin}</td>
        <td class="p-3.5 text-sm text-gray-800">
          ${word.entries.map(e => `<span class="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 mr-1">${e.pos}</span>${e.meaning}`).join('; ')}
        </td>
        <td class="p-3.5 text-xs font-chinese text-gray-600 hidden md:table-cell">
          ${word.entries[0] && word.entries[0].example_full ? word.entries[0].example_full : '-'}
        </td>
        <td class="p-3.5 text-center">
          <button class="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition" onclick="window.HSKAudio.speak('${word.hanzi}', ${state.audioSpeed})">
            🔊
          </button>
        </td>
      `;
      dom.vocabTableBody.appendChild(tr);
    });
  }

  // --- MISTAKES VIEW (错题本) ---
  function renderMistakes() {
    const mistakes = Storage.getMistakes();
    const countBadge = document.getElementById('mistakes-total-badge');
    if (countBadge) countBadge.textContent = `${mistakes.length} คำ`;

    if (mistakes.length === 0) {
      dom.mistakesEmptyState.classList.remove('hidden');
      dom.mistakesListContainer.classList.add('hidden');
      return;
    }

    dom.mistakesEmptyState.classList.add('hidden');
    dom.mistakesListContainer.classList.remove('hidden');
    dom.mistakesListContainer.innerHTML = '';

    mistakes.sort((a, b) => (b.wrongCount || 1) - (a.wrongCount || 1));

    mistakes.forEach(item => {
      const row = document.createElement('div');
      row.className = 'p-4 rounded-2xl bg-white border-2 border-rose-100 hover:border-rose-300 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 transition';
      row.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 font-chinese font-bold text-2xl flex items-center justify-center border border-rose-200">
            ${item.hanzi}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-bold text-gray-900 text-lg">${item.hanzi}</span>
              <span class="text-sm text-indigo-600 font-mono font-medium">${item.pinyin}</span>
              <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-700">ตอบผิด ${item.wrongCount || 1} ครั้ง</span>
            </div>
            <div class="text-sm text-gray-600 mt-0.5">
              ความหมาย: <strong class="text-gray-800">${item.meaning}</strong>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 self-end md:self-auto">
          <button class="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition flex items-center gap-1" onclick="window.HSKAudio.speak('${item.hanzi}', ${state.audioSpeed})">
            🔊 ฟังเสียง
          </button>
          <button class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition flex items-center gap-1" onclick="window.HSKApp.resolveMistake(${item.wordId})">
            ✓ จำได้แล้ว (ลบออก)
          </button>
        </div>
      `;
      dom.mistakesListContainer.appendChild(row);
    });
  }

  function resolveMistake(wordId) {
    Storage.removeMistake(wordId);
    renderMistakes();
    renderDashboard();
  }

  // --- PARENT DASHBOARD VIEW ---
  function renderParentDashboard() {
    const stats = Storage.getStats();
    const mistakes = Storage.getMistakes();
    const history = Storage.getHistory();
    const settings = Storage.getSettings();

    // Summary cards
    if (dom.parentStatsSummary) {
      dom.parentStatsSummary.innerHTML = `
        <div class="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div class="text-xs text-gray-500 font-semibold mb-1">ความพร้อมโดยรวม</div>
          <div class="text-3xl font-extrabold text-indigo-600">
            ${stats.totalQuestions > 0 ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) : 0}%
          </div>
          <div class="text-xs text-gray-500 mt-1">จากคำถามทั้งหมด ${stats.totalQuestions} ข้อ</div>
        </div>
        <div class="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div class="text-xs text-gray-500 font-semibold mb-1">การฟัง (听力)</div>
          <div class="text-3xl font-extrabold text-blue-600">
            ${stats.listeningQuestions > 0 ? Math.round((stats.listeningCorrect / stats.listeningQuestions) * 100) : 0}%
          </div>
          <div class="text-xs text-gray-500 mt-1">ถูกต้อง ${stats.listeningCorrect} / ${stats.listeningQuestions} ข้อ</div>
        </div>
        <div class="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div class="text-xs text-gray-500 font-semibold mb-1">การอ่าน (阅读)</div>
          <div class="text-3xl font-extrabold text-emerald-600">
            ${stats.readingQuestions > 0 ? Math.round((stats.readingCorrect / stats.readingQuestions) * 100) : 0}%
          </div>
          <div class="text-xs text-gray-500 mt-1">ถูกต้อง ${stats.readingCorrect} / ${stats.readingQuestions} ข้อ</div>
        </div>
        <div class="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div class="text-xs text-gray-500 font-semibold mb-1">การเขียน (书写)</div>
          <div class="text-3xl font-extrabold text-purple-600">
            ${stats.writingQuestions > 0 ? Math.round((stats.writingCorrect / stats.writingQuestions) * 100) : 0}%
          </div>
          <div class="text-xs text-gray-500 mt-1">ถูกต้อง ${stats.writingCorrect} / ${stats.writingQuestions} ข้อ</div>
        </div>
      `;
    }

    // Top Weak Words
    if (dom.parentWeakWordsList) {
      if (mistakes.length === 0) {
        dom.parentWeakWordsList.innerHTML = '<div class="p-4 text-center text-sm text-gray-500">ยอดเยี่ยมมาก! ยังไม่มีรายการคำศัพท์ที่ตอบผิดสะสม</div>';
      } else {
        const topWeak = [...mistakes].sort((a, b) => (b.wrongCount || 1) - (a.wrongCount || 1)).slice(0, 8);
        dom.parentWeakWordsList.innerHTML = topWeak.map(w => `
          <div class="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200">
            <div class="flex items-center gap-3">
              <span class="font-chinese font-bold text-xl text-gray-900">${w.hanzi}</span>
              <div>
                <span class="text-xs text-indigo-700 font-mono font-medium">${w.pinyin}</span>
                <span class="text-xs text-gray-700 block">แปลว่า: <strong>${w.meaning}</strong></span>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-700">ผิด ${w.wrongCount || 1} ครั้ง</span>
          </div>
        `).join('');
      }
    }

    // History
    if (dom.parentExamHistoryList) {
      if (history.length === 0) {
        dom.parentExamHistoryList.innerHTML = '<div class="p-4 text-center text-sm text-gray-500">ยังไม่มีประวัติการทำแบบทดสอบ</div>';
      } else {
        dom.parentExamHistoryList.innerHTML = history.slice(0, 10).map(h => `
          <div class="flex items-center justify-between p-3.5 rounded-xl bg-white border border-gray-200 text-sm">
            <div>
              <span class="font-bold text-gray-800">${h.mode === 'mock_exam' ? '🏆 จำลองสอบเสมือนจริง HSK 3' : '⚡ แบบทดสอบย่อย'}</span>
              <span class="text-xs text-gray-400 block">${new Date(h.date).toLocaleDateString('th-TH', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div class="text-right">
              <span class="font-bold text-base ${h.percentage >= 60 ? 'text-emerald-600' : 'text-rose-600'}">${h.percentage}%</span>
              <span class="text-xs text-gray-500 block">${h.correctCount} / ${h.totalQuestions} ข้อ</span>
            </div>
          </div>
        `).join('');
      }
    }
  }

  // --- PRINTABLE WORKSHEET GENERATOR ---
  function renderWorksheetConfig() {
    // Config handled in index.html
  }

  function printWorksheet(count = 20) {
    const vocab = getActiveVocabPool();
    const pool = state.filterLevel === 'all' ? vocab : vocab.filter(v => v.level === parseInt(state.filterLevel));
    const picked = [...pool].sort(() => 0.5 - Math.random()).slice(0, count);

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('โปรดอนุญาต Pop-up เพื่อเปิดหน้าพิมพ์เอกสาร');
      return;
    }

    const examTitle = state.examType.toUpperCase();
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>ใบงานทดสอบคำศัพท์ ${examTitle} - ${count} ข้อ</title>
        <style>
          body { font-family: "Sarabun", Arial, sans-serif; padding: 25px; color: #1e293b; }
          h1 { text-align: center; margin-bottom: 5px; font-size: 22px; }
          .header-meta { display: flex; justify-content: space-between; font-size: 14px; border-bottom: 2px solid #334155; padding-bottom: 8px; margin-bottom: 20px; }
          .q-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
          .q-item { border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 8px; page-break-inside: avoid; }
          .hanzi { font-size: 26px; font-weight: bold; font-family: "Kaiti", "Microsoft YaHei", sans-serif; }
          .pinyin { font-size: 13px; color: #4338ca; }
          .answer-line { margin-top: 8px; border-bottom: 1px dashed #94a3b8; height: 20px; }
          .page-break { page-break-after: always; }
          .answer-key { margin-top: 30px; font-size: 12px; }
          @media print {
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="margin-bottom: 15px;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">
            🖨️ คลิกเพื่อสั่งพิมพ์ (Print)
          </button>
        </div>
        <h1>แบบทดสอบคำศัพท์ภาษาจีน ${examTitle}</h1>
        <div class="header-meta">
          <span>ชื่อ-นามสกุล: ..............................................................</span>
          <span>วันที่: ..............................</span>
          <span>คะแนน: .......... / ${count}</span>
        </div>
        <p style="font-size: 13px; color: #64748b; margin-bottom: 15px;"><strong>คำสั่ง:</strong> ให้นักเรียนเขียนความหมายภาษาไทย และคัดอักษรจีนลงในช่องที่กำหนดให้ถูกต้อง</p>
        <div class="q-grid">
          ${picked.map((w, idx) => `
            <div class="q-item">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <span style="font-weight: bold; font-size: 14px;">ข้อที่ ${idx + 1}.</span>
                <span class="pinyin">${w.pinyin}</span>
              </div>
              <div class="hanzi" style="text-align: center; margin: 4px 0;">${w.hanzi}</div>
              <div style="font-size: 12px; color: #64748b;">ความหมายภาษาไทย:</div>
              <div class="answer-line"></div>
            </div>
          `).join('')}
        </div>

        <div class="page-break"></div>

        <div class="answer-key">
          <h2 style="font-size: 16px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">เฉลยสำหรับคุณพ่อคุณแม่ (Answer Key)</h2>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;">
            ${picked.map((w, idx) => `
              <div>
                <strong>${idx + 1}.</strong> ${w.hanzi} (${w.pinyin}) : ${w.entries.map(e => e.meaning).join(', ')}
              </div>
            `).join('')}
          </div>
        </div>
      </body>
      </html>
    `;

    printWin.document.write(html);
    printWin.document.close();
  }

  // --- INITIALIZE APPLICATION ---
  function init() {
    initDOM();

    // Nav Tabs clicks
    dom.navTabs.forEach(btn => {
      btn.onclick = () => switchTab(btn.dataset.tab);
    });

    // Header buttons
    if (dom.roleToggleBtn) dom.roleToggleBtn.onclick = toggleRole;
    if (dom.speedToggleBtn) dom.speedToggleBtn.onclick = toggleAudioSpeed;

    // Search and filters in vocab
    const searchInput = document.getElementById('vocab-search-input');
    if (searchInput) {
      searchInput.oninput = (e) => {
        state.vocabSearch = e.target.value;
        renderFlashcards();
      };
    }

    const levelFilterSelect = document.getElementById('vocab-level-filter');
    if (levelFilterSelect) {
      levelFilterSelect.onchange = (e) => {
        state.filterLevel = e.target.value;
        renderFlashcards();
      };
    }

    const posFilterSelect = document.getElementById('vocab-pos-filter');
    if (posFilterSelect) {
      posFilterSelect.onchange = (e) => {
        state.vocabPosFilter = e.target.value;
        renderFlashcards();
      };
    }

    // Quick quiz buttons on Dashboard
    document.querySelectorAll('[data-quick-quiz]').forEach(btn => {
      btn.onclick = () => {
        const mode = btn.dataset.quickQuiz;
        const count = parseInt(btn.dataset.count || '10');
        startQuiz(mode, count);
      };
    });

    // Quiz quit button
    const quitBtn = document.getElementById('quiz-quit-btn');
    if (quitBtn) {
      quitBtn.onclick = () => {
        if (confirm('ต้องการยกเลิกการทำแบบทดสอบชุดนี้ใช่หรือไม่?')) {
          clearInterval(state.quizTimer);
          switchTab('dashboard');
        }
      };
    }

    // Printable worksheet buttons
    const print10Btn = document.getElementById('print-worksheet-10-btn');
    if (print10Btn) print10Btn.onclick = () => printWorksheet(10);
    const print20Btn = document.getElementById('print-worksheet-20-btn');
    if (print20Btn) print20Btn.onclick = () => printWorksheet(20);

    // Bind Level Modal Events
    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) modalCloseBtn.onclick = closeLevelModal;

    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    if (modalCancelBtn) modalCancelBtn.onclick = closeLevelModal;

    const modalConfirmBtn = document.getElementById('modal-confirm-btn');
    if (modalConfirmBtn) modalConfirmBtn.onclick = applyModalSelection;

    const modalTabHsk = document.getElementById('modal-tab-hsk');
    if (modalTabHsk) modalTabHsk.onclick = () => setModalExamType('hsk');

    const modalTabYct = document.getElementById('modal-tab-yct');
    if (modalTabYct) modalTabYct.onclick = () => setModalExamType('yct');

    const levelModal = document.getElementById('level-select-modal');
    if (levelModal) {
      levelModal.onclick = (e) => {
        if (e.target === levelModal) closeLevelModal();
      };
    }

    // Load saved exam mode & level
    const savedSettings = Storage.getSettings();
    state.examType = savedSettings.examType || 'hsk';
    state.selectedLevel = savedSettings.selectedLevel || 'all';
    state.filterLevel = state.selectedLevel;

    // Initial render
    const portal = document.body.dataset.portal || '';
    if (portal === 'student') {
      state.userRole = 'student';
    } else if (portal === 'parent') {
      state.userRole = 'parent';
      renderParentDashboard();
      renderVocabTable(getActiveVocabPool(true));
    }
    updateExamThemeAndContent();
    renderDashboard();
  }

  // Export app instance
  window.HSKApp = {
    init,
    switchTab,
    switchVocabSubtab,
    setExamType,
    openLevelModal,
    closeLevelModal,
    selectModalLevel,
    setModalExamType,
    applyModalSelection,
    initQuiz600,
    startQuiz,
    resolveMistake,
    printWorksheet
  };

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

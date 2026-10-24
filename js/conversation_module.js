// js/conversation_module.js - Daily Chinese Conversations Interactive Engine
(function() {
  'use strict';

  let currentCategoryFilter = 'all'; // 'all' | 'school' | 'food-shopping' | 'travel' | 'workplace'
  let currentLevelFilter = 'all'; // 'all' | 'easy' | 'medium' | 'hard'
  let currentSearchQuery = '';
  let activeConversation = null;
  let isPlayingAll = false;
  let playIndex = 0;
  let playTimer = null;
  let showPinyin = true;
  let showThai = true;
  let roleplayMode = 'all'; // 'all' | 'A' | 'B'

  function getConversations() {
    return window.DAILY_CONVERSATIONS || [];
  }

  function filterConversations() {
    let list = getConversations();

    // 1. Filter by category
    if (currentCategoryFilter !== 'all') {
      list = list.filter(c => c.categoryKey === currentCategoryFilter);
    }

    // 2. Filter by level
    if (currentLevelFilter !== 'all') {
      list = list.filter(c => c.level === currentLevelFilter);
    }

    // 3. Filter by search query
    if (currentSearchQuery.trim()) {
      const q = currentSearchQuery.toLowerCase().trim();
      list = list.filter(c => 
        c.titleCn.toLowerCase().includes(q) ||
        c.titleTh.toLowerCase().includes(q) ||
        c.titlePinyin.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.lines.some(l => l.cn.toLowerCase().includes(q) || l.th.toLowerCase().includes(q))
      );
    }
    return list;
  }

  // --- RENDER MAIN CONVERSATION TAB ---
  function renderConversationTab() {
    const container = document.getElementById('tab-conversation');
    if (!container) return;

    if (activeConversation) {
      renderActiveConversationView(container);
    } else {
      renderConversationListView(container);
    }
  }

  // --- RENDER LIST VIEW ---
  function renderConversationListView(container) {
    const allList = getConversations();
    const list = filterConversations();

    const allCount = allList.length;
    const schoolCount = allList.filter(c => c.categoryKey === 'school').length;
    const foodCount = allList.filter(c => c.categoryKey === 'food-shopping').length;
    const travelCount = allList.filter(c => c.categoryKey === 'travel').length;
    const workCount = allList.filter(c => c.categoryKey === 'workplace').length;

    // Filtered level counts within current category
    const catList = currentCategoryFilter === 'all' ? allList : allList.filter(c => c.categoryKey === currentCategoryFilter);
    const easyCount = catList.filter(c => c.level === 'easy').length;
    const medCount = catList.filter(c => c.level === 'medium').length;
    const hardCount = catList.filter(c => c.level === 'hard').length;

    container.innerHTML = `
      <div class="space-y-6">
        <!-- Hero Header -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-800 via-emerald-800 to-indigo-900 text-white p-6 sm:p-8 shadow-xl">
          <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div class="space-y-2 max-w-2xl">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-950 uppercase tracking-wide">
                💬 บทสนทนาภาษาจีนในชีวิตประจำวัน
              </div>
              <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight">
                คลังบทสนทนาภาษาจีน 4 หมวดหมู่
              </h1>
              <p class="text-sm sm:text-base text-emerald-100 leading-relaxed">
                ครอบคลุม <strong>ในโรงเรียน • ซื้อของ-สั่งอาหาร • เดินทาง • ในที่ทำงาน</strong> แบ่ง 3 ระดับความยาก พร้อมเสียงอ่านและระบบฝึกสวมบทบาท (Role-play)
              </p>
            </div>
            <div class="flex items-center gap-2 bg-white/10 backdrop-blur rounded-2xl p-3 border border-white/20 self-start md:self-auto text-center">
              <div class="px-3">
                <p class="text-2xl sm:text-3xl font-black text-amber-300">${allCount}</p>
                <p class="text-[11px] text-white/80">บทสนทนา</p>
              </div>
              <div class="h-8 w-px bg-white/20"></div>
              <div class="px-3">
                <p class="text-2xl sm:text-3xl font-black text-emerald-300">4</p>
                <p class="text-[11px] text-white/80">หมวดหมู่หลัก</p>
              </div>
              <div class="h-8 w-px bg-white/20"></div>
              <div class="px-3">
                <p class="text-2xl sm:text-3xl font-black text-indigo-300">3</p>
                <p class="text-[11px] text-white/80">ระดับความยาก</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 1. CATEGORY TABS (4 หมวดหมู่หลัก) -->
        <div class="bg-white rounded-3xl p-3 sm:p-4 shadow-sm border border-gray-200">
          <div class="text-xs font-bold text-gray-500 mb-2 px-1 flex items-center gap-1.5">
            <span>📂</span> <span>เลือกหมวดหมู่บทสนทนา:</span>
          </div>
          <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button class="conv-cat-btn px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition flex items-center gap-1.5 whitespace-nowrap ${currentCategoryFilter === 'all' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}" data-cat="all">
              <span>🌟</span> <span>ทั้งหมด (${allCount})</span>
            </button>
            <button class="conv-cat-btn px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition flex items-center gap-1.5 whitespace-nowrap ${currentCategoryFilter === 'school' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}" data-cat="school">
              <span>🏫</span> <span>ในโรงเรียน (${schoolCount})</span>
            </button>
            <button class="conv-cat-btn px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition flex items-center gap-1.5 whitespace-nowrap ${currentCategoryFilter === 'food-shopping' ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}" data-cat="food-shopping">
              <span>🛍️</span> <span>ซื้อของ-สั่งอาหาร (${foodCount})</span>
            </button>
            <button class="conv-cat-btn px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition flex items-center gap-1.5 whitespace-nowrap ${currentCategoryFilter === 'travel' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}" data-cat="travel">
              <span>✈️</span> <span>เดินทาง (${travelCount})</span>
            </button>
            <button class="conv-cat-btn px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition flex items-center gap-1.5 whitespace-nowrap ${currentCategoryFilter === 'workplace' ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}" data-cat="workplace">
              <span>💼</span> <span>ในที่ทำงาน (${workCount})</span>
            </button>
          </div>
        </div>

        <!-- 2. DIFFICULTY LEVEL PILLS & SEARCH CONTROLS -->
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <!-- Level Filter Buttons (3 ระดับ: ง่าย, ปานกลาง, ยาก) -->
          <div class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            <span class="text-xs font-bold text-gray-400 mr-1 hidden sm:inline">ระดับ:</span>
            <button class="conv-filter-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 whitespace-nowrap ${currentLevelFilter === 'all' ? 'bg-gray-900 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}" data-level="all">
              <span>ทั้งหมด</span>
            </button>
            <button class="conv-filter-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 whitespace-nowrap ${currentLevelFilter === 'easy' ? 'bg-emerald-600 text-white shadow-md' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'}" data-level="easy">
              <span>🟢</span> <span>1. ง่าย (${easyCount})</span>
            </button>
            <button class="conv-filter-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 whitespace-nowrap ${currentLevelFilter === 'medium' ? 'bg-amber-600 text-white shadow-md' : 'bg-amber-50 text-amber-800 hover:bg-amber-100'}" data-level="medium">
              <span>🟡</span> <span>2. ปานกลาง (${medCount})</span>
            </button>
            <button class="conv-filter-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 whitespace-nowrap ${currentLevelFilter === 'hard' ? 'bg-rose-600 text-white shadow-md' : 'bg-rose-50 text-rose-800 hover:bg-rose-100'}" data-level="hard">
              <span>🔴</span> <span>3. ยาก (${hardCount})</span>
            </button>
          </div>

          <!-- Search Box -->
          <div class="relative w-full md:w-72">
            <input 
              type="text" 
              id="conv-search-input"
              value="${currentSearchQuery}"
              placeholder="🔍 ค้นหาบทสนทนา / คำศัพท์..." 
              class="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
            />
            <span class="absolute left-3 top-2.5 text-gray-400 text-xs">🔎</span>
            ${currentSearchQuery ? `<button id="conv-search-clear" class="absolute right-3 top-2 text-gray-400 hover:text-gray-600 text-xs">✕</button>` : ''}
          </div>
        </div>

        <!-- Conversations Grid -->
        ${list.length === 0 ? `
          <div class="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-300">
            <span class="text-5xl">🔍</span>
            <h3 class="text-base font-bold text-gray-800 mt-3">ไม่พบบทสนทนาตามเงื่อนไขที่เลือก</h3>
            <p class="text-xs text-gray-500 mt-1">ลองเปลี่ยนหมวดหมู่ เลือกระดับความยากอื่น หรือล้างคำค้นหา</p>
            <button onclick="window.ConversationModule.resetFilters()" class="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition">
              ล้างตัวกรองทั้งหมด
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            ${list.map(c => `
              <div 
                class="conv-card bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                data-id="${c.id}"
              >
                <div class="space-y-3">
                  <!-- Header badges -->
                  <div class="flex items-center justify-between gap-2">
                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                      c.level === 'easy' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                      c.level === 'medium' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                      'bg-rose-100 text-rose-800 border border-rose-200'
                    }">
                      ${c.level === 'easy' ? '🟢 ง่าย' : c.level === 'medium' ? '🟡 ปานกลาง' : '🔴 ยาก'}
                    </span>
                    <span class="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-lg border border-indigo-100">
                      ${c.category}
                    </span>
                  </div>

                  <!-- Title & Icon -->
                  <div class="flex items-start gap-3">
                    <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr ${
                      c.level === 'easy' ? 'from-emerald-500 to-teal-400' :
                      c.level === 'medium' ? 'from-amber-500 to-orange-400' :
                      'from-rose-500 to-indigo-600'
                    } text-white flex items-center justify-center text-2xl shadow-md flex-shrink-0 group-hover:scale-105 transition">
                      ${c.icon}
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 group-hover:text-emerald-700 transition line-clamp-1 text-base sm:text-lg">
                        ${c.titleCn}
                      </h3>
                      <p class="text-xs text-emerald-600 font-medium">${c.titlePinyin}</p>
                      <p class="text-xs text-gray-600 mt-1 line-clamp-1">${c.titleTh}</p>
                    </div>
                  </div>

                  <!-- Situation description -->
                  <p class="text-xs text-gray-500 bg-gray-50 p-2.5 rounded-xl line-clamp-2 border border-gray-100">
                    💡 ${c.situation}
                  </p>
                </div>

                <!-- Footer info -->
                <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <div class="flex items-center gap-2">
                    <span>${c.roles.A.avatar} ${c.roles.A.name.split(' ')[0]}</span>
                    <span>⇄</span>
                    <span>${c.roles.B.avatar} ${c.roles.B.name.split(' ')[0]}</span>
                  </div>
                  <span class="font-bold text-emerald-600 group-hover:translate-x-1 transition flex items-center gap-1">
                    ฝึกพูด ➔
                  </span>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;

    // Category button click handlers
    container.querySelectorAll('.conv-cat-btn').forEach(btn => {
      btn.onclick = () => {
        currentCategoryFilter = btn.dataset.cat;
        renderConversationTab();
      };
    });

    // Level filter click handlers
    container.querySelectorAll('.conv-filter-btn').forEach(btn => {
      btn.onclick = () => {
        currentLevelFilter = btn.dataset.level;
        renderConversationTab();
      };
    });

    const searchInput = container.querySelector('#conv-search-input');
    if (searchInput) {
      searchInput.oninput = (e) => {
        currentSearchQuery = e.target.value;
        renderConversationTab();
      };
    }

    const searchClear = container.querySelector('#conv-search-clear');
    if (searchClear) {
      searchClear.onclick = () => {
        currentSearchQuery = '';
        renderConversationTab();
      };
    }

    container.querySelectorAll('.conv-card').forEach(card => {
      card.onclick = () => {
        const id = card.dataset.id;
        openConversation(id);
      };
    });
  }

  // --- RENDER ACTIVE CONVERSATION DETAIL & PLAYER ---
  function renderActiveConversationView(container) {
    const c = activeConversation;
    if (!c) return;

    container.innerHTML = `
      <div class="space-y-6">
        <!-- Top Back Bar & Quick Info -->
        <div class="flex items-center justify-between gap-3">
          <button id="conv-back-btn" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-bold shadow-sm transition">
            <span>←</span> <span>กลับหน้ารายการบทสนทนา</span>
          </button>
          
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
              c.level === 'easy' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
              c.level === 'medium' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
              'bg-rose-100 text-rose-800 border border-rose-200'
            }">
              ${c.level === 'easy' ? '🟢 ระดับ 1: ง่าย' : c.level === 'medium' ? '🟡 ระดับ 2: ปานกลาง' : '🔴 ระดับ 3: ยาก'}
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              📂 ${c.category}
            </span>
          </div>
        </div>

        <!-- Conversation Hero Card -->
        <div class="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-gray-200 space-y-4">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl bg-gradient-to-tr ${
              c.level === 'easy' ? 'from-emerald-500 to-teal-400' :
              c.level === 'medium' ? 'from-amber-500 to-orange-400' :
              'from-rose-500 to-indigo-600'
            } text-white flex items-center justify-center text-3xl sm:text-4xl shadow-md flex-shrink-0">
              ${c.icon}
            </div>
            <div class="space-y-1">
              <h1 class="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                ${c.titleCn}
              </h1>
              <p class="text-xs sm:text-sm font-semibold text-emerald-700">
                ${c.titlePinyin}
              </p>
              <p class="text-xs sm:text-base text-gray-600 font-medium">
                ${c.titleTh}
              </p>
            </div>
          </div>
          
          <div class="p-3 sm:p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-900 flex items-center gap-2">
            <span class="text-base flex-shrink-0">💡</span>
            <span><strong>สถานการณ์:</strong> ${c.situation}</span>
          </div>
        </div>

        <!-- Control Toolbar: Continuous Audio, Pinyin Toggle, Thai Toggle & Role-Play Mode -->
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex flex-wrap items-center justify-between gap-3">
          <!-- Audio Play All / Stop -->
          <div class="flex items-center gap-2">
            <button 
              id="conv-play-all-btn" 
              class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition shadow-md flex items-center gap-2 ${
                isPlayingAll ? 'bg-rose-600 text-white animate-pulse' : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }"
            >
              <span>${isPlayingAll ? '⏹️ หยุดเล่น' : '▶️ เล่นเสียงต่อเนื่องทั้งหมด'}</span>
            </button>
            <span id="conv-play-status" class="text-xs text-gray-500 ${isPlayingAll ? '' : 'hidden'}">
              กำลังเล่นประโยคที่ <span id="conv-active-line-num">1</span>/${c.lines.length}...
            </span>
          </div>

          <!-- Display Toggles & Role-play Mode -->
          <div class="flex items-center gap-2 flex-wrap">
            <!-- Pinyin Toggle -->
            <button id="toggle-pinyin-btn" class="px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold transition flex items-center gap-1 ${showPinyin ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-gray-100 text-gray-500'}">
              <span>🔤</span> <span>${showPinyin ? 'ซ่อนพินอิน' : 'แสดงพินอิน'}</span>
            </button>

            <!-- Thai Toggle -->
            <button id="toggle-thai-btn" class="px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold transition flex items-center gap-1 ${showThai ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-gray-100 text-gray-500'}">
              <span>🇹🇭</span> <span>${showThai ? 'ซ่อนแปลไทย' : 'แสดงแปลไทย'}</span>
            </button>

            <!-- Roleplay Select -->
            <div class="flex items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs font-bold text-gray-700">
              <span class="px-1.5 text-gray-400">🎭 บทบาท:</span>
              <button class="role-btn px-2 py-1 rounded-lg transition ${roleplayMode === 'all' ? 'bg-white shadow text-indigo-700' : 'hover:text-black'}" data-role="all">
                ฟังทุกคน
              </button>
              <button class="role-btn px-2 py-1 rounded-lg transition ${roleplayMode === 'A' ? 'bg-white shadow text-indigo-700' : 'hover:text-black'}" data-role="A">
                ฉันคือ A
              </button>
              <button class="role-btn px-2 py-1 rounded-lg transition ${roleplayMode === 'B' ? 'bg-white shadow text-emerald-700' : 'hover:text-black'}" data-role="B">
                ฉันคือ B
              </button>
            </div>
          </div>
        </div>

        <!-- Dialogue Bubbles Stream -->
        <div class="space-y-4" id="dialogue-lines-container">
          ${c.lines.map((line, idx) => {
            const isSpeakerA = line.speaker === 'A';
            const speakerInfo = isSpeakerA ? c.roles.A : c.roles.B;
            const isUserRole = (roleplayMode === 'A' && isSpeakerA) || (roleplayMode === 'B' && !isSpeakerA);

            return `
              <div 
                id="dialogue-line-${idx}"
                class="dialogue-line-bubble flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl transition-all duration-200 border ${
                  isSpeakerA 
                    ? 'bg-white border-indigo-100 hover:border-indigo-300 ml-0 mr-4 sm:mr-16' 
                    : 'bg-emerald-50/60 border-emerald-100 hover:border-emerald-300 ml-4 sm:ml-16 mr-0'
                }"
              >
                <!-- Avatar & Speaker Indicator -->
                <div class="flex flex-col items-center flex-shrink-0">
                  <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${
                    isSpeakerA ? 'bg-indigo-600 text-white' : 'bg-emerald-600 text-white'
                  }">
                    ${speakerInfo.avatar}
                  </div>
                  <span class="text-[11px] font-bold text-gray-500 mt-1">
                    ${isSpeakerA ? 'A' : 'B'}
                  </span>
                </div>

                <!-- Bubble Content -->
                <div class="flex-1 space-y-1.5">
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-xs font-bold ${isSpeakerA ? 'text-indigo-900' : 'text-emerald-900'}">
                      ${speakerInfo.name} ${isUserRole ? '⭐ (บทของคุณ - ฝึกพูดประโยคนี้)' : ''}
                    </span>
                    <!-- Audio Speak Button -->
                    <button 
                      class="line-speak-btn inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-bold transition shadow-sm ${
                        isSpeakerA ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-300'
                      }"
                      data-text="${encodeURIComponent(line.cn)}"
                      data-index="${idx}"
                      title="กดฟังเสียงประโยคนี้"
                    >
                      <span class="speaker-icon">🔊</span>
                      <span class="hidden sm:inline">ฟังเสียง</span>
                    </button>
                  </div>

                  <!-- Chinese Characters -->
                  <div class="text-base sm:text-xl font-chinese font-bold text-gray-900 tracking-wide select-text">
                    ${line.cn}
                  </div>

                  <!-- Pinyin -->
                  ${showPinyin ? `
                    <div class="text-xs sm:text-sm font-medium text-emerald-700 tracking-wide">
                      ${line.pinyin}
                    </div>
                  ` : ''}

                  <!-- Thai Translation -->
                  ${showThai ? `
                    <div class="text-xs sm:text-sm text-gray-600 pt-0.5">
                      ${line.th}
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Key Vocabulary Section -->
        <div class="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-gray-200 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">📚</span>
            <h3 class="text-base sm:text-lg font-extrabold text-gray-900">คำศัพท์สำคัญในบทสนทนานี้</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            ${c.keyVocab.map(v => `
              <div 
                class="vocab-pill p-3 rounded-2xl bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 transition flex items-center justify-between cursor-pointer"
                onclick="window.AudioEngine ? window.AudioEngine.speak('${v.cn}') : (window.HSKAudio && window.HSKAudio.speak('${v.cn}'))"
                title="คลิกเพื่อฟังเสียงคำว่า ${v.cn}"
              >
                <div>
                  <p class="font-chinese font-bold text-base text-gray-900">${v.cn}</p>
                  <p class="text-xs font-semibold text-emerald-600">${v.pinyin}</p>
                  <p class="text-xs text-gray-600">${v.th}</p>
                </div>
                <button class="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-xs text-emerald-700 hover:scale-110 transition border border-gray-200">
                  🔊
                </button>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Grammar & Culture Tip -->
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-5 sm:p-6 border border-amber-200 space-y-2">
          <div class="flex items-center gap-2 text-amber-900">
            <span class="text-xl">💡</span>
            <h3 class="text-sm sm:text-base font-extrabold">เกร็ดไวยากรณ์ & การนำไปใช้จริง</h3>
          </div>
          <p class="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
            ${c.tip}
          </p>
        </div>

        <!-- Next / Previous Navigation within current filtered pool -->
        <div class="flex items-center justify-between pt-2">
          <button id="conv-prev-btn" class="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm flex items-center gap-1.5">
            <span>←</span> <span>บทก่อนหน้า</span>
          </button>
          <button id="conv-next-btn" class="px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-bold hover:bg-emerald-700 transition shadow-sm flex items-center gap-1.5">
            <span>บทถัดไป</span> <span>→</span>
          </button>
        </div>
      </div>
    `;

    // Event Handlers for Active Conversation
    const backBtn = container.querySelector('#conv-back-btn');
    if (backBtn) {
      backBtn.onclick = () => {
        stopAllContinuousPlay();
        activeConversation = null;
        renderConversationTab();
      };
    }

    const playAllBtn = container.querySelector('#conv-play-all-btn');
    if (playAllBtn) {
      playAllBtn.onclick = () => {
        if (isPlayingAll) {
          stopAllContinuousPlay();
          renderActiveConversationView(container);
        } else {
          startContinuousPlay(c);
        }
      };
    }

    const togglePinyinBtn = container.querySelector('#toggle-pinyin-btn');
    if (togglePinyinBtn) {
      togglePinyinBtn.onclick = () => {
        showPinyin = !showPinyin;
        renderActiveConversationView(container);
      };
    }

    const toggleThaiBtn = container.querySelector('#toggle-thai-btn');
    if (toggleThaiBtn) {
      toggleThaiBtn.onclick = () => {
        showThai = !showThai;
        renderActiveConversationView(container);
      };
    }

    container.querySelectorAll('.role-btn').forEach(btn => {
      btn.onclick = () => {
        roleplayMode = btn.dataset.role;
        renderActiveConversationView(container);
      };
    });

    container.querySelectorAll('.line-speak-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        stopAllContinuousPlay();
        const text = decodeURIComponent(btn.dataset.text);
        const idx = parseInt(btn.dataset.index);
        highlightBubble(idx);
        speakLine(text, () => {
          removeHighlightBubble(idx);
        });
      };
    });

    // Prev / Next Navigation within current list
    const currentPool = filterConversations();
    const curIdx = currentPool.findIndex(item => item.id === c.id);

    const prevBtn = container.querySelector('#conv-prev-btn');
    if (prevBtn) {
      if (curIdx > 0) {
        prevBtn.onclick = () => {
          stopAllContinuousPlay();
          openConversation(currentPool[curIdx - 1].id);
        };
      } else {
        prevBtn.disabled = true;
        prevBtn.classList.add('opacity-40', 'cursor-not-allowed');
      }
    }

    const nextBtn = container.querySelector('#conv-next-btn');
    if (nextBtn) {
      if (curIdx < currentPool.length - 1 && curIdx !== -1) {
        nextBtn.onclick = () => {
          stopAllContinuousPlay();
          openConversation(currentPool[curIdx + 1].id);
        };
      } else {
        nextBtn.disabled = true;
        nextBtn.classList.add('opacity-40', 'cursor-not-allowed');
      }
    }
  }

  // --- AUDIO & SEQUENTIAL PLAYBACK LOGIC ---
  function speakLine(text, onEnded) {
    if (window.AudioEngine && typeof window.AudioEngine.speak === 'function') {
      window.AudioEngine.speak(text, onEnded);
    } else if (window.HSKAudio && typeof window.HSKAudio.speak === 'function') {
      window.HSKAudio.speak(text, 1.0, onEnded);
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.onend = onEnded;
      u.onerror = onEnded;
      window.speechSynthesis.speak(u);
    } else {
      if (onEnded) onEnded();
    }
  }

  function highlightBubble(idx) {
    document.querySelectorAll('.dialogue-line-bubble').forEach(b => {
      b.classList.remove('ring-4', 'ring-emerald-400', 'bg-emerald-100');
    });
    const el = document.getElementById(`dialogue-line-${idx}`);
    if (el) {
      el.classList.add('ring-4', 'ring-emerald-400');
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function removeHighlightBubble(idx) {
    const el = document.getElementById(`dialogue-line-${idx}`);
    if (el) {
      el.classList.remove('ring-4', 'ring-emerald-400');
    }
  }

  function startContinuousPlay(c) {
    isPlayingAll = true;
    playIndex = 0;
    const playBtn = document.getElementById('conv-play-all-btn');
    const playStatus = document.getElementById('conv-play-status');
    if (playBtn) {
      playBtn.className = 'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition shadow-md flex items-center gap-2 bg-rose-600 text-white animate-pulse';
      playBtn.innerHTML = '<span>⏹️ หยุดเล่น</span>';
    }
    if (playStatus) playStatus.classList.remove('hidden');

    playNextLine(c);
  }

  function playNextLine(c) {
    if (!isPlayingAll || !c || playIndex >= c.lines.length) {
      stopAllContinuousPlay();
      renderConversationTab();
      return;
    }

    const line = c.lines[playIndex];
    const isSpeakerA = line.speaker === 'A';
    const isUserMuted = (roleplayMode === 'A' && isSpeakerA) || (roleplayMode === 'B' && !isSpeakerA);

    const activeNum = document.getElementById('conv-active-line-num');
    if (activeNum) activeNum.textContent = (playIndex + 1);

    highlightBubble(playIndex);

    const curIndex = playIndex;
    playIndex++;

    if (isUserMuted) {
      // User role: pause for speaking practice
      playTimer = setTimeout(() => {
        removeHighlightBubble(curIndex);
        if (isPlayingAll) playNextLine(c);
      }, 3500);
    } else {
      speakLine(line.cn, () => {
        removeHighlightBubble(curIndex);
        if (isPlayingAll) {
          playTimer = setTimeout(() => {
            playNextLine(c);
          }, 650);
        }
      });
    }
  }

  function stopAllContinuousPlay() {
    isPlayingAll = false;
    if (playTimer) clearTimeout(playTimer);
    playTimer = null;
    if (window.HSKAudio && typeof window.HSKAudio.stop === 'function') {
      window.HSKAudio.stop();
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    document.querySelectorAll('.dialogue-line-bubble').forEach(b => {
      b.classList.remove('ring-4', 'ring-emerald-400');
    });
  }

  function openConversation(id) {
    const found = getConversations().find(c => c.id === id);
    if (found) {
      activeConversation = found;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderConversationTab();
    }
  }

  function resetFilters() {
    currentCategoryFilter = 'all';
    currentLevelFilter = 'all';
    currentSearchQuery = '';
    renderConversationTab();
  }

  // Export to global window
  window.ConversationModule = {
    render: renderConversationTab,
    open: openConversation,
    resetFilters: resetFilters,
    filterByCategory: (cat) => {
      currentCategoryFilter = cat;
      activeConversation = null;
      renderConversationTab();
    },
    filterByLevel: (lvl) => {
      currentLevelFilter = lvl;
      activeConversation = null;
      renderConversationTab();
    }
  };

})();

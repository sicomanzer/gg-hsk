// js/storage.js - LocalStorage Persistence for HSK 3 Master
(function() {
  const STORAGE_KEY_STATS = 'hsk3_stats_v1';
  const STORAGE_KEY_MISTAKES = 'hsk3_mistakes_v1';
  const STORAGE_KEY_STARRED = 'hsk3_starred_v1';
  const STORAGE_KEY_MASTERY = 'hsk3_mastery_v1';
  const STORAGE_KEY_HISTORY = 'hsk3_history_v1';
  const STORAGE_KEY_SETTINGS = 'hsk3_settings_v1';

  const defaultSettings = {
    childName: 'ลูกรัก',
    examDate: '2026-11-23', // 1 month from now
    dailyGoal: 20,
    audioSpeed: 1.0,
    autoPlayAudio: true,
    hskLevelFilter: 'all' // 'all', '1', '2', '3'
  };

  const defaultStats = {
    totalQuizzes: 0,
    totalQuestions: 0,
    totalCorrect: 0,
    listeningQuestions: 0,
    listeningCorrect: 0,
    readingQuestions: 0,
    readingCorrect: 0,
    writingQuestions: 0,
    writingCorrect: 0,
    mockExamsTaken: 0,
    mockExamsPassed: 0,
    lastPracticed: null
  };

  function getJSON(key, defaultVal) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultVal;
    } catch (e) {
      console.warn('LocalStorage read error:', e);
      return defaultVal;
    }
  }

  function setJSON(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('LocalStorage write error:', e);
    }
  }

  const Storage = {
    getSettings() {
      return { ...defaultSettings, ...getJSON(STORAGE_KEY_SETTINGS, {}) };
    },
    saveSettings(settings) {
      setJSON(STORAGE_KEY_SETTINGS, settings);
    },
    getStats() {
      return { ...defaultStats, ...getJSON(STORAGE_KEY_STATS, {}) };
    },
    updateStats(delta) {
      const current = this.getStats();
      for (const key in delta) {
        if (typeof current[key] === 'number') {
          current[key] += delta[key];
        } else {
          current[key] = delta[key];
        }
      }
      current.lastPracticed = new Date().toISOString();
      setJSON(STORAGE_KEY_STATS, current);
      return current;
    },
    getMistakes() {
      return getJSON(STORAGE_KEY_MISTAKES, []);
    },
    recordMistake(question) {
      const mistakes = this.getMistakes();
      const existing = mistakes.find(m => m.wordId === question.wordId);
      if (existing) {
        existing.wrongCount = (existing.wrongCount || 1) + 1;
        existing.lastWrongAt = new Date().toISOString();
        existing.lastQuestion = question;
      } else {
        mistakes.push({
          wordId: question.wordId,
          hanzi: question.hanzi || question.targetWord,
          pinyin: question.pinyin || question.targetPinyin,
          meaning: question.meaning,
          wrongCount: 1,
          firstWrongAt: new Date().toISOString(),
          lastWrongAt: new Date().toISOString(),
          lastQuestion: question
        });
      }
      setJSON(STORAGE_KEY_MISTAKES, mistakes);
      this.updateMastery(question.wordId, -1);
    },
    removeMistake(wordId) {
      const mistakes = this.getMistakes().filter(m => m.wordId !== wordId);
      setJSON(STORAGE_KEY_MISTAKES, mistakes);
      this.updateMastery(wordId, 1);
    },
    clearAllMistakes() {
      setJSON(STORAGE_KEY_MISTAKES, []);
    },
    getStarred() {
      return getJSON(STORAGE_KEY_STARRED, []);
    },
    toggleStar(wordId) {
      const starred = this.getStarred();
      const idx = starred.indexOf(wordId);
      if (idx >= 0) {
        starred.splice(idx, 1);
      } else {
        starred.push(wordId);
      }
      setJSON(STORAGE_KEY_STARRED, starred);
      return starred.includes(wordId);
    },
    isStarred(wordId) {
      return this.getStarred().includes(wordId);
    },
    getMastery() {
      return getJSON(STORAGE_KEY_MASTERY, {});
    },
    updateMastery(wordId, deltaScore) {
      const mastery = this.getMastery();
      const current = mastery[wordId] || 0;
      mastery[wordId] = Math.max(0, Math.min(3, current + deltaScore));
      setJSON(STORAGE_KEY_MASTERY, mastery);
      return mastery[wordId];
    },
    getHistory() {
      return getJSON(STORAGE_KEY_HISTORY, []);
    },
    addHistoryRecord(record) {
      const history = this.getHistory();
      history.unshift({
        id: Date.now(),
        date: new Date().toISOString(),
        ...record
      });
      // Keep up to 100 recent sessions
      if (history.length > 100) history.pop();
      setJSON(STORAGE_KEY_HISTORY, history);
    },
    resetAllData() {
      localStorage.removeItem(STORAGE_KEY_STATS);
      localStorage.removeItem(STORAGE_KEY_MISTAKES);
      localStorage.removeItem(STORAGE_KEY_STARRED);
      localStorage.removeItem(STORAGE_KEY_MASTERY);
      localStorage.removeItem(STORAGE_KEY_HISTORY);
    }
  };

  window.HSKStorage = Storage;
})();

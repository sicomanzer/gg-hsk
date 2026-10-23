// js/audio.js - Web Speech & Synthesized Sound Effects
(function() {
  // Web Audio Context for sound effects
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Synthesized chime for correct answers
  function playCorrectSound() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'sine';

      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
      osc1.frequency.exponentialRampToValueAtTime(1046.50, now + 0.3); // C6

      osc2.frequency.setValueAtTime(523.25 / 2, now);
      osc2.frequency.exponentialRampToValueAtTime(1046.50 / 2, now + 0.3);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.45);
      osc2.stop(now + 0.45);
    } catch (e) {
      console.warn('Audio effect error:', e);
    }
  }

  // Synthesized sound for wrong answers
  function playWrongSound() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.linearRampToValueAtTime(180, now + 0.25);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      console.warn('Audio effect error:', e);
    }
  }

  // Fanfare for exam complete / victory
  function playVictorySound() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      const now = ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        gain.gain.setValueAtTime(0.12, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.35);
      });
    } catch (e) {
      console.warn('Audio effect error:', e);
    }
  }

  // Chinese Text-to-Speech (TTS)
  let chineseVoices = [];
  function loadVoices() {
    if ('speechSynthesis' in window) {
      const allVoices = window.speechSynthesis.getVoices();
      chineseVoices = allVoices.filter(v => 
        v.lang.startsWith('zh') || v.lang.includes('cmn') || v.lang.includes('Chinese')
      );
    }
  }

  if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  function speakChinese(text, speed = 1.0, onEndCallback = null) {
    if (!('speechSynthesis' in window)) {
      alert('เบราว์เซอร์นี้ไม่รองรับระบบสังเคราะห์เสียง (Web Speech API)');
      return;
    }

    // Cancel ongoing speech
    window.speechSynthesis.cancel();

    // Remove punctuation that doesn't need to be pronounced literally
    const cleanText = text.replace(/[～~]/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'zh-CN';
    utterance.rate = Math.max(0.6, Math.min(1.5, speed));
    utterance.pitch = 1.0;

    // Pick best Chinese voice if available
    if (chineseVoices.length === 0) loadVoices();
    if (chineseVoices.length > 0) {
      // Prefer zh-CN voices
      const preferred = chineseVoices.find(v => v.lang === 'zh-CN') || chineseVoices[0];
      utterance.voice = preferred;
    }

    if (onEndCallback) {
      utterance.onend = onEndCallback;
      utterance.onerror = onEndCallback;
    }

    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // Export audio helpers to global window
  window.HSKAudio = {
    speak: speakChinese,
    stop: stopSpeech,
    playCorrect: playCorrectSound,
    playWrong: playWrongSound,
    playVictory: playVictorySound
  };
})();

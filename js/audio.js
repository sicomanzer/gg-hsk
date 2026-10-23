// js/audio.js - High-Definition Chinese Voice & Synthesized Sound Effects
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

  // Synthesized chime for correct answers (Boosted & Crystal Clear)
  function playCorrectSound() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.08); // E5
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.16); // G5
      osc1.frequency.exponentialRampToValueAtTime(1046.50, now + 0.24); // C6

      osc2.frequency.setValueAtTime(523.25, now);
      osc2.frequency.exponentialRampToValueAtTime(1046.50, now + 0.24);

      // Louder, punchier gain for phone speakers
      gain.gain.setValueAtTime(0.35, now);
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

  // Synthesized sound for wrong answers (Punchy & Clear)
  function playWrongSound() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.linearRampToValueAtTime(160, now + 0.25);

      gain.gain.setValueAtTime(0.30, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
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
        gain.gain.setValueAtTime(0.25, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.4);
      });
    } catch (e) {
      console.warn('Audio effect error:', e);
    }
  }

  // --- DUAL-ENGINE CHINESE AUDIO (HD CLOUD + WEBSPEECH FALLBACK) ---
  let currentAudio = null;
  const audioCache = new Map();

  // Local WebSpeech Voice Loader
  let chineseVoices = [];
  function loadVoices() {
    if ('speechSynthesis' in window) {
      const allVoices = window.speechSynthesis.getVoices();
      chineseVoices = allVoices.filter(v => 
        v.lang.startsWith('zh') || v.lang.includes('cmn') || v.lang.includes('Chinese')
      );
      // Prioritize natural/neural voices over robotic system voices
      chineseVoices.sort((a, b) => {
        const aName = (a.name || '').toLowerCase();
        const bName = (b.name || '').toLowerCase();
        const aScore = aName.includes('natural') || aName.includes('neural') || aName.includes('google') || aName.includes('tingting') || aName.includes('xiaoxiao') ? 1 : 0;
        const bScore = bName.includes('natural') || bName.includes('neural') || bName.includes('google') || bName.includes('tingting') || bName.includes('xiaoxiao') ? 1 : 0;
        return bScore - aScore;
      });
    }
  }

  if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  // Stop any active audio (HTML5 Audio or WebSpeech)
  function stopAllSpeech() {
    if (currentAudio) {
      try {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      } catch (e) {}
      currentAudio = null;
    }
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }

  // Fallback: Web Speech API (Local System Voice)
  function speakViaSpeechSynthesis(cleanText, speed, onEndCallback) {
    if (!('speechSynthesis' in window)) {
      if (onEndCallback) onEndCallback();
      return;
    }

    try {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'zh-CN';
      utterance.rate = Math.max(0.65, Math.min(1.4, speed));
      utterance.pitch = 1.05; // Slightly higher pitch cuts through speaker muffling
      utterance.volume = 1.0; // 100% Full Volume

      if (chineseVoices.length === 0) loadVoices();
      if (chineseVoices.length > 0) {
        // Preferred voice: zh-CN
        const preferred = chineseVoices.find(v => v.lang === 'zh-CN' || v.lang === 'cmn-Hans-CN') || chineseVoices[0];
        utterance.voice = preferred;
      }

      if (onEndCallback) {
        utterance.onend = onEndCallback;
        utterance.onerror = onEndCallback;
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('SpeechSynthesis error:', e);
      if (onEndCallback) onEndCallback();
    }
  }

  // Primary: High-Definition Mandarin Native Speaker Stream
  function speakChinese(text, speed = 1.0, onEndCallback = null) {
    stopAllSpeech();

    // Clean text (remove placeholders, punctuation)
    const cleanText = (text || '')
      .replace(/[～~_]/g, '')
      .replace(/\[.*?\]/g, '')
      .trim();

    if (!cleanText) {
      if (onEndCallback) onEndCallback();
      return;
    }

    // Google Neural Mandarin Putonghua TTS URL (Loud, clear, 100% standard pronunciation)
    const cloudUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encodeURIComponent(cleanText)}`;

    try {
      const audio = new Audio(cloudUrl);
      currentAudio = audio;
      audio.volume = 1.0; // Maximum loudness
      audio.playbackRate = Math.max(0.7, Math.min(1.4, speed));

      let hasFinished = false;
      const finish = () => {
        if (!hasFinished) {
          hasFinished = true;
          currentAudio = null;
          if (onEndCallback) onEndCallback();
        }
      };

      audio.onended = finish;

      audio.onerror = () => {
        // If network is offline or blocked, smoothly fall back to local WebSpeech
        speakViaSpeechSynthesis(cleanText, speed, onEndCallback);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          // If browser policy blocks autoplay without user gesture, fallback to SpeechSynthesis
          speakViaSpeechSynthesis(cleanText, speed, onEndCallback);
        });
      }
    } catch (e) {
      speakViaSpeechSynthesis(cleanText, speed, onEndCallback);
    }
  }

  // Export audio helpers to global window
  window.HSKAudio = {
    speak: speakChinese,
    stop: stopAllSpeech,
    playCorrect: playCorrectSound,
    playWrong: playWrongSound,
    playVictory: playVictorySound
  };
})();

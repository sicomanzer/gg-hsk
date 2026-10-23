// js/quiz_engine.js - Dynamic Question Generator for HSK 3
(function() {
  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function sample(array, n) {
    return shuffle(array).slice(0, n);
  }

  function getVocabPool(levelFilter = 'all', examType = 'hsk') {
    const all = (examType === 'yct' ? window.YCT_VOCAB : window.HSK_VOCAB) || window.HSK_VOCAB || [];
    if (!levelFilter || levelFilter === 'all') return all;
    const lvl = parseInt(levelFilter);
    return all.filter(v => v.level === lvl);
  }

  function getFirstMeaning(word) {
    if (!word || !word.entries || word.entries.length === 0) return '';
    return word.entries.map(e => e.meaning).filter(Boolean).join(' / ');
  }

  function getPrimaryMeaning(word) {
    if (!word || !word.entries || word.entries.length === 0) return '';
    return word.entries[0].meaning;
  }

  function getExampleSentence(word) {
    if (!word || !word.entries) return null;
    for (const e of word.entries) {
      if (e.example_full && e.example_full.length >= 4 && !e.example_full.startsWith('甲：')) {
        return {
          sentence: e.example_full,
          blanked: e.example ? e.example.replace(/[～~]/g, ' ______ ') : e.example_full.replace(word.hanzi, ' ______ '),
          meaning: e.meaning
        };
      }
    }
    return null;
  }

  const QuizEngine = {
    // Generate 4 multiple-choice options with 1 correct answer
    makeChoices(correctItem, pool, keyExtractor) {
      const correctVal = keyExtractor(correctItem);
      const distractors = pool
        .filter(w => w.id !== correctItem.id && keyExtractor(w) !== correctVal)
        .map(keyExtractor);
      const pickedDistractors = sample([...new Set(distractors)], 3);
      const allChoices = shuffle([correctVal, ...pickedDistractors]);
      return {
        choices: allChoices,
        correctAnswer: correctVal
      };
    },

    // 1. Listening Questions
    generateListeningQuestion(targetWord, pool) {
      const subTypes = ['audio_to_hanzi', 'audio_to_meaning'];
      const subType = subTypes[Math.floor(Math.random() * subTypes.length)];
      
      const primaryMeaning = getPrimaryMeaning(targetWord);

      if (subType === 'audio_to_hanzi') {
        const { choices, correctAnswer } = this.makeChoices(targetWord, pool, w => w.hanzi);
        return {
          id: 'list_' + Math.random().toString(36).substr(2, 9),
          type: 'listening',
          subType: 'audio_to_hanzi',
          category: 'การฟัง (听力)',
          promptThai: 'กดฟังเสียงภาษาจีน แล้วเลือกตัวอักษรจีนที่ตรงกับเสียงอ่าน',
          audioText: targetWord.hanzi,
          wordId: targetWord.id,
          hanzi: targetWord.hanzi,
          pinyin: targetWord.pinyin,
          meaning: primaryMeaning,
          choices: choices,
          correctAnswer: correctAnswer,
          explanation: `คำตอบคือ 【${targetWord.hanzi}】 (${targetWord.pinyin}) แปลว่า: ${primaryMeaning}`
        };
      } else {
        const { choices, correctAnswer } = this.makeChoices(targetWord, pool, w => getPrimaryMeaning(w));
        return {
          id: 'list_' + Math.random().toString(36).substr(2, 9),
          type: 'listening',
          subType: 'audio_to_meaning',
          category: 'การฟัง (听力)',
          promptThai: 'กดฟังเสียงภาษาจีน แล้วเลือกความหมายภาษาไทยที่ถูกต้อง',
          audioText: targetWord.hanzi,
          wordId: targetWord.id,
          hanzi: targetWord.hanzi,
          pinyin: targetWord.pinyin,
          meaning: primaryMeaning,
          choices: choices,
          correctAnswer: correctAnswer,
          explanation: `【${targetWord.hanzi}】 (${targetWord.pinyin}) แปลว่า "${primaryMeaning}"`
        };
      }
    },

    // 2. Reading Questions
    generateReadingQuestion(targetWord, pool) {
      const ex = getExampleSentence(targetWord);
      const subTypes = ex ? ['hanzi_to_meaning', 'meaning_to_hanzi', 'hanzi_to_pinyin', 'fill_in_the_blank'] : ['hanzi_to_meaning', 'meaning_to_hanzi', 'hanzi_to_pinyin'];
      const subType = subTypes[Math.floor(Math.random() * subTypes.length)];
      const primaryMeaning = getPrimaryMeaning(targetWord);

      if (subType === 'hanzi_to_meaning') {
        const { choices, correctAnswer } = this.makeChoices(targetWord, pool, w => getPrimaryMeaning(w));
        return {
          id: 'read_' + Math.random().toString(36).substr(2, 9),
          type: 'reading',
          subType: 'hanzi_to_meaning',
          category: 'การอ่าน (阅读)',
          promptThai: 'คำศัพท์จีนคำนี้ มีความหมายภาษาไทยตรงกับข้อใด?',
          displayHanzi: targetWord.hanzi,
          displayPinyin: targetWord.pinyin,
          audioText: targetWord.hanzi,
          wordId: targetWord.id,
          hanzi: targetWord.hanzi,
          pinyin: targetWord.pinyin,
          meaning: primaryMeaning,
          choices: choices,
          correctAnswer: correctAnswer,
          explanation: `【${targetWord.hanzi}】 (${targetWord.pinyin}) หมายถึง: ${primaryMeaning}`
        };
      } else if (subType === 'meaning_to_hanzi') {
        const { choices, correctAnswer } = this.makeChoices(targetWord, pool, w => w.hanzi);
        return {
          id: 'read_' + Math.random().toString(36).substr(2, 9),
          type: 'reading',
          subType: 'meaning_to_hanzi',
          category: 'การอ่าน (阅读)',
          promptThai: `คำว่า "${primaryMeaning}" เขียนเป็นตัวอักษรจีนข้อใด?`,
          targetMeaning: primaryMeaning,
          audioText: targetWord.hanzi,
          wordId: targetWord.id,
          hanzi: targetWord.hanzi,
          pinyin: targetWord.pinyin,
          meaning: primaryMeaning,
          choices: choices,
          correctAnswer: correctAnswer,
          explanation: `"${primaryMeaning}" ในภาษาจีนคือ 【${targetWord.hanzi}】 (${targetWord.pinyin})`
        };
      } else if (subType === 'hanzi_to_pinyin') {
        const { choices, correctAnswer } = this.makeChoices(targetWord, pool, w => w.pinyin);
        return {
          id: 'read_' + Math.random().toString(36).substr(2, 9),
          type: 'reading',
          subType: 'hanzi_to_pinyin',
          category: 'การอ่าน (阅读)',
          promptThai: 'ตัวอักษรจีนนี้ ออกเสียงพินอิน (Pinyin) อย่างไร?',
          displayHanzi: targetWord.hanzi,
          audioText: targetWord.hanzi,
          wordId: targetWord.id,
          hanzi: targetWord.hanzi,
          pinyin: targetWord.pinyin,
          meaning: primaryMeaning,
          choices: choices,
          correctAnswer: correctAnswer,
          explanation: `【${targetWord.hanzi}】 ออกเสียงพินอินว่า: ${targetWord.pinyin} (${primaryMeaning})`
        };
      } else {
        // Fill in the blank (选词填空)
        const { choices, correctAnswer } = this.makeChoices(targetWord, pool, w => w.hanzi);
        return {
          id: 'read_' + Math.random().toString(36).substr(2, 9),
          type: 'reading',
          subType: 'fill_in_the_blank',
          category: 'การอ่าน (阅读)',
          promptThai: 'เลือกคำศัพท์ที่ถูกต้องเติมลงในช่องว่างของประโยค',
          blankedSentence: ex.blanked,
          fullSentence: ex.sentence,
          audioText: ex.sentence,
          sentenceMeaning: ex.meaning,
          wordId: targetWord.id,
          hanzi: targetWord.hanzi,
          pinyin: targetWord.pinyin,
          meaning: primaryMeaning,
          choices: choices,
          correctAnswer: correctAnswer,
          explanation: `ประโยคที่สมบูรณ์คือ: "${ex.sentence}" (คำที่เติม: 【${targetWord.hanzi}】 ${targetWord.pinyin} - ${primaryMeaning})`
        };
      }
    },

    // 3. Writing Questions
    generateWritingQuestion(targetWord, pool) {
      const sentences = window.HSK_SENTENCES || [];
      // Try to find a sentence for this target word
      const matchingSentences = sentences.filter(s => s.wordId === targetWord.id && s.chunks && s.chunks.length >= 3 && s.chunks.length <= 5);
      
      let sentenceObj = null;
      if (matchingSentences.length > 0) {
        sentenceObj = matchingSentences[Math.floor(Math.random() * matchingSentences.length)];
      } else {
        // Pick any nice 3-5 chunk sentence
        const pool3to5 = sentences.filter(s => s.chunks && s.chunks.length >= 3 && s.chunks.length <= 5);
        if (pool3to5.length > 0) {
          sentenceObj = pool3to5[Math.floor(Math.random() * pool3to5.length)];
        }
      }

      const primaryMeaning = getPrimaryMeaning(targetWord);
      const isUnscramble = Math.random() > 0.4 && sentenceObj;

      if (isUnscramble) {
        // 连词成句 - Sentence Unscramble
        const originalChunks = [...sentenceObj.chunks];
        let scrambled = shuffle(originalChunks);
        // Ensure scrambled is different from original if more than 1 chunk
        let tries = 0;
        while (scrambled.join('') === originalChunks.join('') && tries < 5) {
          scrambled = shuffle(originalChunks);
          tries++;
        }

        return {
          id: 'write_' + Math.random().toString(36).substr(2, 9),
          type: 'writing',
          subType: 'sentence_unscramble',
          category: 'การเขียน (书写)',
          promptThai: 'คลิกเรียงคำศัพท์เพื่อสร้างประโยคภาษาจีนที่ถูกต้องสมบูรณ์ (连词成句)',
          fullSentence: sentenceObj.fullSentence,
          chunks: scrambled,
          correctOrder: originalChunks,
          audioText: sentenceObj.fullSentence,
          wordId: sentenceObj.wordId,
          hanzi: sentenceObj.targetWord,
          pinyin: sentenceObj.targetPinyin,
          meaning: sentenceObj.meaning,
          explanation: `ประโยคที่ถูกต้องคือ: "${sentenceObj.fullSentence}" (ความหมาย: ${sentenceObj.meaning})`
        };
      } else {
        // HSK 3 Writing Part 2: Hanzi Character Writing & Typing Practice
        const ex = getExampleSentence(targetWord);
        const sentenceContext = ex ? ex.sentence.replace(targetWord.hanzi, ` [ ${targetWord.pinyin} ] `) : `请写出：[ ${targetWord.pinyin} ]`;
        return {
          id: 'write_' + Math.random().toString(36).substr(2, 9),
          type: 'writing',
          subType: 'character_stroke_input',
          category: 'การเขียน (书写)',
          promptThai: 'ฝึกเขียน/พิมพ์อักษรจีนตามพินอินและบริบทประโยค (มีกระดานคัดลายมือ)',
          targetHanzi: targetWord.hanzi,
          targetPinyin: targetWord.pinyin,
          sentenceContext: sentenceContext,
          fullSentence: ex ? ex.sentence : targetWord.hanzi,
          audioText: targetWord.hanzi,
          wordId: targetWord.id,
          hanzi: targetWord.hanzi,
          pinyin: targetWord.pinyin,
          meaning: primaryMeaning,
          correctAnswer: targetWord.hanzi,
          explanation: `อักษรจีนที่ถูกต้องคือ 【${targetWord.hanzi}】 (พินอิน: ${targetWord.pinyin}, แปลว่า: ${primaryMeaning})`
        };
      }
    },

    // Build a customized quiz session
    generateQuizSession(options = {}) {
      const {
        mode = 'quick', // 'quick_10', 'quick_20', 'listening', 'reading', 'writing', 'mock_exam', 'mistakes'
        levelFilter = 'all',
        examType = 'hsk',
        count = 10,
        mistakeItems = []
      } = options;

      const pool = getVocabPool(levelFilter, examType);
      if (pool.length === 0) return [];

      let questions = [];

      if (mode === 'mistakes') {
        if (!mistakeItems || mistakeItems.length === 0) return [];
        const sampledMistakes = sample(mistakeItems, count || mistakeItems.length);
        sampledMistakes.forEach(m => {
          const vocabItem = pool.find(v => v.id === m.wordId) || {
            id: m.wordId,
            hanzi: m.hanzi,
            pinyin: m.pinyin,
            entries: [{ pos: '', meaning: m.meaning, example_full: '' }]
          };
          const types = ['listening', 'reading', 'writing'];
          const pickedType = types[Math.floor(Math.random() * types.length)];
          if (pickedType === 'listening') {
            questions.push(this.generateListeningQuestion(vocabItem, pool));
          } else if (pickedType === 'reading') {
            questions.push(this.generateReadingQuestion(vocabItem, pool));
          } else {
            questions.push(this.generateWritingQuestion(vocabItem, pool));
          }
        });
        return questions;
      }

      if (mode === 'listening') {
        const words = sample(pool, count);
        return words.map(w => this.generateListeningQuestion(w, pool));
      }

      if (mode === 'reading') {
        const words = sample(pool, count);
        return words.map(w => this.generateReadingQuestion(w, pool));
      }

      if (mode === 'writing') {
        const words = sample(pool, count);
        return words.map(w => this.generateWritingQuestion(w, pool));
      }

      if (mode === 'mock_exam') {
        // Standard HSK 3 Simulated Mock Exam:
        // 10 Listening (100 pts) + 10 Reading (100 pts) + 5 Writing (100 pts) = 25 questions, 300 pts!
        const listWords = sample(pool, 10);
        const readWords = sample(pool.filter(w => !listWords.includes(w)), 10);
        const writeWords = sample(pool.filter(w => !listWords.includes(w) && !readWords.includes(w)), 5);

        const listQ = listWords.map(w => {
          const q = this.generateListeningQuestion(w, pool);
          q.section = 'Part 1: การฟัง (听力)';
          q.points = 10;
          return q;
        });

        const readQ = readWords.map(w => {
          const q = this.generateReadingQuestion(w, pool);
          q.section = 'Part 2: การอ่าน (阅读)';
          q.points = 10;
          return q;
        });

        const writeQ = writeWords.map(w => {
          const q = this.generateWritingQuestion(w, pool);
          q.section = 'Part 3: การเขียน (书写)';
          q.points = 20;
          return q;
        });

        return [...listQ, ...readQ, ...writeQ];
      }

      // Default quick quiz: balanced mix
      const total = count || 10;
      const listCount = Math.floor(total * 0.35);
      const readCount = Math.floor(total * 0.45);
      const writeCount = total - listCount - readCount;

      const words = sample(pool, total);
      const listSlice = words.slice(0, listCount);
      const readSlice = words.slice(listCount, listCount + readCount);
      const writeSlice = words.slice(listCount + readCount);

      const listQuestions = listSlice.map(w => this.generateListeningQuestion(w, pool));
      const readQuestions = readSlice.map(w => this.generateReadingQuestion(w, pool));
      const writeQuestions = writeSlice.map(w => this.generateWritingQuestion(w, pool));

      return shuffle([...listQuestions, ...readQuestions, ...writeQuestions]);
    }
  };

  window.HSKQuizEngine = QuizEngine;
})();

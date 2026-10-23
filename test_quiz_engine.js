// test_quiz_engine.js
global.window = global;
require('./vocab_data.js');
require('./sentences_data.js');
require('./js/storage.js');
require('./js/quiz_engine.js');

console.log('HSK_VOCAB loaded:', window.HSK_VOCAB.length);
console.log('HSK_SENTENCES loaded:', window.HSK_SENTENCES.length);

const mockSession = window.HSKQuizEngine.generateQuizSession({ mode: 'mock_exam' });
console.log('Mock exam questions count:', mockSession.length);
console.log('Part 1 (Listening):', mockSession.filter(q => q.type === 'listening').length);
console.log('Part 2 (Reading):', mockSession.filter(q => q.type === 'reading').length);
console.log('Part 3 (Writing):', mockSession.filter(q => q.type === 'writing').length);

const quickSession = window.HSKQuizEngine.generateQuizSession({ mode: 'quick', count: 10 });
console.log('Quick session count:', quickSession.length);

console.log('Sample question 1:', JSON.stringify(quickSession[0], null, 2));

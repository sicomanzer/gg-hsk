// tests/test-browser-audio.js
const { chromium } = require('playwright');

async function test() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('about:blank');

  const result = await page.evaluate(async () => {
    return new Promise(resolve => {
      const url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=' + encodeURIComponent('你好');
      const audio = new Audio(url);
      audio.volume = 1.0;
      audio.oncanplaythrough = () => {
        resolve({ success: true, duration: audio.duration });
      };
      audio.onerror = (e) => {
        resolve({ success: false, error: audio.error ? audio.error.message : 'Unknown' });
      };
      audio.load();
    });
  });

  console.log('Browser Audio Load Result:', result);
  await browser.close();
}

test().catch(console.error);

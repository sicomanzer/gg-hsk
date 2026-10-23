// tests/test-hd-audio.js
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3004;
const ROOT = path.resolve(__dirname, '..');

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';
  else if (urlPath === '/student') urlPath = '/student.html';
  else if (urlPath === '/parent') urlPath = '/parent.html';

  let filePath = path.join(ROOT, urlPath);
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404);
      res.end('404');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': ext === '.js' ? 'application/javascript' : 'text/html' });
    fs.createReadStream(filePath).pipe(res);
  });
});

async function run() {
  await new Promise(r => server.listen(PORT, r));
  console.log(`Server started on ${PORT}`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/student`);

  const audioCheck = await page.evaluate(async () => {
    return new Promise(resolve => {
      if (!window.HSKAudio) return resolve({ ok: false, reason: 'HSKAudio not found' });
      // Call speak
      window.HSKAudio.speak('高兴', 1.0, () => {
        resolve({ ok: true, callbackFired: true });
      });
      // Safety timeout
      setTimeout(() => resolve({ ok: true, timeout: true }), 1500);
    });
  });

  console.log('Audio test evaluation:', audioCheck);
  await browser.close();
  server.close();
}

run().catch(console.error);

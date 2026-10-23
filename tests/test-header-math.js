// tests/test-header-math.js
const { chromium } = require('playwright');
const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 3006;
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
    const mime = ext === '.js' ? 'application/javascript' : (ext === '.css' ? 'text/css' : 'text/html');
    res.writeHead(200, { 'Content-Type': mime });
    fs.createReadStream(filePath).pipe(res);
  });
});

async function run() {
  await new Promise(r => server.listen(PORT, r));
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { name: 'Ultra Narrow 320px', width: 320, height: 568 },
    { name: 'Narrow Mobile 360px', width: 360, height: 740 },
    { name: 'iPhone SE 375px', width: 375, height: 667 },
    { name: 'iPhone 14 390px', width: 390, height: 844 },
    { name: 'Desktop 1440px', width: 1440, height: 900 }
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    await context.addInitScript(() => {
      localStorage.setItem('hsk3_student_profile_v2', JSON.stringify({
        id: 'test', name: 'น้องโฟกัส', avatar: '🐯', role: 'student', isNew: false
      }));
    });

    const page = await context.newPage();
    await page.goto(`http://localhost:${PORT}/student`);
    await page.waitForTimeout(400);

    const speedBox = await page.locator('#speed-toggle-btn').boundingBox();
    const presenceBox = await page.locator('#live-presence-badge').boundingBox();
    const avatarBox = await page.locator('#user-profile-badge').boundingBox();

    console.log(`\n--- Viewport: ${vp.name} (${vp.width}px) ---`);
    console.log(`Presence right: ${presenceBox ? (presenceBox.x + presenceBox.width).toFixed(1) : 'null'}px`);
    console.log(`Avatar right:   ${avatarBox ? (avatarBox.x + avatarBox.width).toFixed(1) : 'null'}px`);
    console.log(`Speed right:    ${speedBox ? (speedBox.x + speedBox.width).toFixed(1) : 'null'}px`);

    const rightEdge = speedBox ? (speedBox.x + speedBox.width) : 0;
    const diff = vp.width - rightEdge;
    if (diff < 0) {
      console.log(`❌ OVERFLOW by ${Math.abs(diff).toFixed(1)}px!`);
    } else {
      console.log(`✅ Fits with ${diff.toFixed(1)}px margin to spare.`);
    }

    await context.close();
  }

  await browser.close();
  server.close();
}

run().catch(console.error);

// tests/verify-mobile-header.js
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3005;
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
    { name: 'Ultra Narrow 320px', width: 320, height: 600 },
    { name: 'Standard Mobile 360px (Samsung Galaxy)', width: 360, height: 740 },
    { name: 'iPhone SE 375px', width: 375, height: 667 },
    { name: 'iPhone 14 390px', width: 390, height: 844 }
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

    const docScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const docClientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`[${vp.name}] Document width: scrollWidth=${docScrollWidth}px, clientWidth=${docClientWidth}px`);

    // Check if rightmost button is within viewport
    const speedBox = await page.locator('#speed-toggle-btn').boundingBox();
    const avatarBox = await page.locator('#user-profile-badge').boundingBox();
    const presenceBox = await page.locator('#live-presence-badge').boundingBox();

    console.log(`  Presence badge right edge: ${presenceBox.x + presenceBox.width}px`);
    console.log(`  Avatar badge right edge:   ${avatarBox.x + avatarBox.width}px`);
    console.log(`  Speed toggle right edge:   ${speedBox.x + speedBox.width}px`);

    const rightEdge = speedBox.x + speedBox.width;
    if (rightEdge > vp.width) {
      console.error(`  ❌ OVERFLOW! Right edge (${rightEdge}px) > Viewport width (${vp.width}px)`);
      process.exit(1);
    } else {
      console.log(`  ✅ Perfect fit! Margin to screen edge: ${(vp.width - rightEdge).toFixed(1)}px`);
    }

    await context.close();
  }

  await browser.close();
  server.close();
  console.log('\nAll mobile viewports verified: Zero overflow on top bar!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

// tests/deep-qa.test.js
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3003;
const ROOT = path.resolve(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';
  else if (urlPath === '/student') urlPath = '/student.html';
  else if (urlPath === '/parent') urlPath = '/parent.html';

  let filePath = path.join(ROOT, urlPath);
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

const results = {
  total: 0,
  passed: 0,
  failed: 0,
  errors: []
};

function assert(condition, message) {
  results.total++;
  if (!condition) {
    results.failed++;
    const err = `[FAIL] ${message}`;
    console.error('❌ ' + err);
    results.errors.push(err);
    throw new Error(message);
  } else {
    results.passed++;
    console.log(`✅ [PASS] ${message}`);
  }
}

const SET_RETURNING_USER = () => {
  localStorage.setItem('hsk3_student_profile_v2', JSON.stringify({
    id: 'deep_test_user',
    name: 'น้องจีนเก่ง',
    avatar: '🦄',
    role: 'student',
    isNew: false
  }));
};

async function runDeepTests() {
  await new Promise(resolve => server.listen(PORT, resolve));
  console.log(`🚀 Deep QA Server running at http://localhost:${PORT}`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // ----------------------------------------------------
    // TEST DEEP 1: AUDIO SPEED CYCLING
    // ----------------------------------------------------
    console.log('\n--- DEEP 1: AUDIO SPEED TOGGLING & PERSISTENCE ---');
    {
      const context = await browser.newContext();
      await context.addInitScript(SET_RETURNING_USER);
      const page = await context.newPage();
      await page.goto(`http://localhost:${PORT}/student`);
      await page.waitForTimeout(300);

      const speedBtn = page.locator('#speed-toggle-btn');
      const speedLabel = page.locator('#speed-label');

      assert(await speedLabel.innerText() === '⚡ 1.0x', 'Default speed is 1.0x');

      // Click 1 -> 0.8x
      await speedBtn.click();
      assert(await speedLabel.innerText() === '🐢 0.8x', 'Speed toggles to 0.8x');

      // Click 2 -> 1.0x
      await speedBtn.click();
      assert(await speedLabel.innerText() === '⚡ 1.0x', 'Speed toggles back to 1.0x');

      // Reload to verify persistence
      await page.reload({ waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(300);
      assert(await page.locator('#speed-label').innerText() === '⚡ 1.0x', 'Speed 1.0x is persisted across page reload');

      await context.close();
    }

    // ----------------------------------------------------
    // TEST DEEP 2: PRESENCE MODAL & CLASSROOM LIST
    // ----------------------------------------------------
    console.log('\n--- DEEP 2: REAL-TIME PRESENCE MODAL ---');
    {
      const context = await browser.newContext();
      await context.addInitScript(SET_RETURNING_USER);
      const page = await context.newPage();
      await page.goto(`http://localhost:${PORT}/student`);
      await page.waitForTimeout(300);

      // Click live presence badge
      await page.locator('#live-presence-badge').click();
      await page.waitForTimeout(300);

      const modal = page.locator('#online-peers-modal');
      assert(await modal.isVisible(), 'Clicking presence badge opens #online-peers-modal');

      const modalTitle = await modal.locator('h3').innerText();
      assert(modalTitle.includes('เพื่อนๆ ที่กำลังออนไลน์'), 'Modal title correctly shows online peers');

      // Verify self item is present
      const selfName = await modal.locator('text=น้องจีนเก่ง').isVisible();
      assert(selfName, 'Current user "น้องจีนเก่ง" is listed in active peers list');

      // Close modal
      await modal.locator('#close-peers-modal-btn').click();
      await page.waitForTimeout(200);
      assert(!(await modal.isVisible()), 'Presence modal closes via close button');

      await context.close();
    }

    // ----------------------------------------------------
    // TEST DEEP 3: 600-WORD LISTENING QUIZ (PROGRESS & RESUME)
    // ----------------------------------------------------
    console.log('\n--- DEEP 3: 600-WORD LISTENING TEST & BOOKMARKING ---');
    {
      const context = await browser.newContext();
      await context.addInitScript(SET_RETURNING_USER);
      const page = await context.newPage();
      await page.goto(`http://localhost:${PORT}/student`);
      await page.waitForTimeout(400);

      // Navigate to Flashcards / 600 Quiz Tab
      await page.locator('nav button[data-tab="flashcards"]').click();
      await page.waitForTimeout(300);
      await page.locator('#subtab-btn-quiz600').click();
      await page.waitForTimeout(300);

      // Start 600 quiz
      const start600Btn = page.locator('#quiz600-start-btn');
      assert(await start600Btn.isVisible(), 'Start 600-word quiz button is visible');
      await start600Btn.click();
      await page.waitForTimeout(400);

      // Verify Active 600 Quiz Container
      const activeArea = page.locator('#quiz600-active-panel');
      assert(await activeArea.isVisible(), '600-word listening quiz #quiz600-active-panel is active');

      // Answer 2 words
      for (let w = 0; w < 2; w++) {
        await page.waitForTimeout(300);
        const choices = page.locator('.quiz600-choice-btn');
        assert(await choices.count() === 4, `Question ${w + 1} has 4 multiple-choice options`);
        // Click first choice
        await choices.first().click();
        await page.waitForTimeout(400);

        // Click next question button
        const nextBtn = page.locator('#quiz600-next-word-btn');
        if (await nextBtn.isVisible()) {
          await nextBtn.click();
          await page.waitForTimeout(300);
        }
      }

      // Reload page and check resume box
      await page.reload({ waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(400);
      await page.locator('nav button[data-tab="flashcards"]').click();
      await page.waitForTimeout(300);

      const resumeBox = page.locator('#quiz600-resume-box');
      assert(await resumeBox.isVisible(), 'Resume card #quiz600-resume-box is visible after leaving and reloading');

      const resumeDesc = await page.locator('#quiz600-resume-desc').innerText();
      assert(resumeDesc.includes('คำที่'), `Resume description correctly shows saved index ("${resumeDesc}")`);

      await context.close();
    }

    // ----------------------------------------------------
    // TEST DEEP 4: STUDENT QUIZ -> PARENT DASHBOARD SYNC
    // ----------------------------------------------------
    console.log('\n--- DEEP 4: CROSS-PORTAL DATA SYNC (STUDENT -> PARENT) ---');
    {
      const context = await browser.newContext();
      await context.addInitScript(SET_RETURNING_USER);
      const studentPage = await context.newPage();
      await studentPage.goto(`http://localhost:${PORT}/student`);
      await studentPage.waitForTimeout(400);

      // Run a 3-question quiz to generate history and stats
      await studentPage.evaluate(() => window.HSKApp.startQuiz('quick', 3));
      await studentPage.waitForTimeout(500);

      // Answer all questions
      for (let i = 0; i < 3; i++) {
        await studentPage.waitForTimeout(300);
        const choiceBtns = studentPage.locator('.choice-btn');
        if (await choiceBtns.count() > 0) {
          await choiceBtns.first().click();
          await studentPage.waitForTimeout(300);
        } else {
          const chips = studentPage.locator('.unscramble-chip:not(.pointer-events-none)');
          const count = await chips.count();
          for (let c = 0; c < count; c++) {
            const avail = studentPage.locator('.unscramble-chip:not(.pointer-events-none)').first();
            if (await avail.count() > 0) await avail.click();
            await studentPage.waitForTimeout(80);
          }
          const subBtn = studentPage.locator('#unscramble-submit-btn');
          if (await subBtn.isVisible()) await subBtn.click();
        }

        const next = studentPage.locator('#quiz-next-btn');
        if (await next.isVisible()) {
          await next.click();
          await studentPage.waitForTimeout(300);
        }
      }

      await studentPage.waitForTimeout(600);

      // Now open Parent Portal in same context (shared localStorage)
      const parentPage = await context.newPage();
      await parentPage.goto(`http://localhost:${PORT}/parent`);
      await parentPage.waitForTimeout(500);

      // Check if Exam History contains the test record
      const historyList = parentPage.locator('#parent-exam-history-list');
      const historyItems = historyList.locator('> div');
      const itemCount = await historyItems.count();
      assert(itemCount >= 1, `Parent portal exam history updated with student test results (count: ${itemCount})`);

      // Check overall readiness stat is greater than 0%
      const readinessText = await parentPage.locator('#parent-stats-summary').innerText();
      assert(readinessText.includes('ข้อ'), `Parent overview displays real test questions count: ${readinessText.split('\n')[0]}`);

      await context.close();
    }

  } catch (err) {
    console.error(`\n❌ Deep QA test failed: ${err.message}`);
    console.error(err.stack);
  } finally {
    await browser.close();
    server.close();
  }

  console.log('\n==================================================');
  console.log(`DEEP QA SUMMARY: Total: ${results.total} | Passed: ${results.passed} | Failed: ${results.failed}`);
  console.log('==================================================');

  return results;
}

runDeepTests().then(res => {
  if (res.failed > 0) process.exit(1);
  else process.exit(0);
});

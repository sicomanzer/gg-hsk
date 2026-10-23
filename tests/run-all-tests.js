// tests/run-all-tests.js
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3002;
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
  errors: [],
  logs: []
};

function log(msg) {
  console.log(msg);
  results.logs.push(msg);
}

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

const SET_RETURNING_USER_SCRIPT = () => {
  localStorage.setItem('hsk3_student_profile_v2', JSON.stringify({
    id: 'test_user_returning',
    name: 'น้องโฟกัส',
    avatar: '🐼',
    role: 'student',
    isNew: false
  }));
};

async function runSuite() {
  await new Promise(resolve => server.listen(PORT, resolve));
  log(`🚀 Local Test Server running at http://localhost:${PORT}`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // ----------------------------------------------------
    // TEST SUITE 1: PAGE LOAD & ZERO CRITICAL ERRORS
    // ----------------------------------------------------
    log('\n==================================================');
    log('SUITE 1: PAGE LOADING & ERROR-FREE VERIFICATION');
    log('==================================================');

    for (const route of ['/student', '/parent', '/']) {
      const page = await browser.newPage();
      const consoleErrors = [];
      const pageErrors = [];

      page.on('console', msg => {
        if (msg.type() === 'error') {
          // Ignore MQTT broker websocket network unreachable if running in sandboxed or offline mode
          if (!msg.text().includes('WebSocket') && !msg.text().includes('mqtt')) {
            consoleErrors.push(msg.text());
          }
        }
      });
      page.on('pageerror', err => pageErrors.push(err.message));

      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(500);

      const title = await page.title();
      assert(title.length > 5, `${route} has valid document title: "${title}"`);
      assert(consoleErrors.length === 0, `${route} has 0 console errors (got ${consoleErrors.length}: ${consoleErrors.join(', ')})`);
      assert(pageErrors.length === 0, `${route} has 0 unhandled page exceptions (got: ${pageErrors.join(', ')})`);

      await page.close();
    }

    // ----------------------------------------------------
    // TEST SUITE 2: RESPONSIVE VIEWPORT & HORIZONTAL OVERFLOW
    // ----------------------------------------------------
    log('\n==================================================');
    log('SUITE 2: RESPONSIVE VIEWPORTS & OVERFLOW CHECK');
    log('==================================================');

    const viewports = [
      { name: 'Desktop 1440px', width: 1440, height: 900 },
      { name: 'Tablet 768px', width: 768, height: 1024 },
      { name: 'Mobile 390px (iPhone 14)', width: 390, height: 844 },
      { name: 'Narrow Mobile 360px', width: 360, height: 740 }
    ];

    for (const vp of viewports) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await context.newPage();
      await page.goto(`http://localhost:${PORT}/student`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(400);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      const hasOverflow = scrollWidth > clientWidth;

      assert(!hasOverflow, `/student on ${vp.name}: scrollWidth (${scrollWidth}px) <= clientWidth (${clientWidth}px) - No Horizontal Overflow`);

      // Verify that Header controls are properly visible according to viewport breakpoint (Tailwind md is >= 768px)
      if (vp.width < 768) {
        const hskToggle = await page.locator('#exam-toggle-hsk-mobile').isVisible();
        const yctToggle = await page.locator('#exam-toggle-yct-mobile').isVisible();
        const levelBtnMobile = await page.locator('#header-level-btn-mobile').isVisible();
        assert(hskToggle && yctToggle && levelBtnMobile, `${vp.name}: Mobile 2-way mode switcher & level selector are visible`);
      } else {
        const desktopToggle = await page.locator('#exam-toggle-hsk').isVisible();
        assert(desktopToggle, `${vp.name}: Desktop mode switcher is visible`);
      }

      await context.close();
    }

    // ----------------------------------------------------
    // TEST SUITE 3: PERSONA A - FIRST-TIME USER ONBOARDING
    // ----------------------------------------------------
    log('\n==================================================');
    log('SUITE 3: PERSONA A - FIRST-TIME USER SIMULATION');
    log('==================================================');

    {
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto(`http://localhost:${PORT}/student`);
      
      // Clear localStorage to simulate fresh user
      await page.evaluate(() => localStorage.clear());
      await page.reload({ waitUntil: 'domcontentloaded' });
      
      // Wait for onboard modal trigger (presence.js has 600ms timeout)
      await page.waitForTimeout(900);
      const modalVisible = await page.locator('#profile-edit-modal').isVisible();
      assert(modalVisible, 'First-time user is prompted with profile onboarding modal');

      // Fill in student nickname
      const nameInput = page.locator('#profile-name-input');
      await nameInput.fill('น้องโฟกัส');
      
      // Pick avatar
      const avatarBtn = page.locator('#avatar-pick-grid button[data-avatar="🐼"]');
      await avatarBtn.click();

      // Click save
      await page.locator('#profile-save-btn').click();
      await page.waitForTimeout(300);

      // Verify saved in UI
      const savedName = await page.locator('#user-name-display').innerText();
      const savedAvatar = await page.locator('#user-avatar-display').innerText();
      assert(savedName === 'น้องโฟกัส', `User name display correctly shows "น้องโฟกัส" (got "${savedName}")`);
      assert(savedAvatar === '🐼', `User avatar display correctly shows "🐼" (got "${savedAvatar}")`);

      await context.close();
    }

    // ----------------------------------------------------
    // TEST SUITE 4: PERSONA B - NAVIGATION, TABS & FLASHCARDS
    // ----------------------------------------------------
    log('\n==================================================');
    log('SUITE 4: PERSONA B - REGULAR USER WORKFLOW');
    log('==================================================');

    {
      const context = await browser.newContext();
      await context.addInitScript(SET_RETURNING_USER_SCRIPT);
      const page = await context.newPage();
      await page.goto(`http://localhost:${PORT}/student`);
      await page.waitForTimeout(300);

      // Test Tab Switching: Flashcards / Vocab Tab
      await page.locator('nav button[data-tab="flashcards"]').click();
      await page.waitForTimeout(300);
      const flashcardsTabActive = await page.locator('#tab-flashcards').isVisible();
      assert(flashcardsTabActive, 'Successfully navigated to Flashcards/Vocab Tab (#tab-flashcards)');

      // Switch to Flashcard sub-tab
      await page.locator('#subtab-btn-flashcards').click();
      await page.waitForTimeout(300);
      const flashcardsSubActive = await page.locator('#vocab-subtab-flashcards').isVisible();
      assert(flashcardsSubActive, 'Successfully switched to Flashcards sub-tab (#vocab-subtab-flashcards)');

      // Test Search Input
      const searchInput = page.locator('#vocab-search-input');
      await searchInput.fill('รัก');
      await page.waitForTimeout(300);

      const searchCountText = await page.locator('#vocab-search-results-count').innerText();
      assert(searchCountText.includes('คำ') || searchCountText.includes('ศัพท์'), `Vocab search filter displays active count: ${searchCountText}`);

      // Clear search
      await searchInput.fill('');
      await page.waitForTimeout(300);

      // Switch to Table sub-tab
      await page.locator('#subtab-btn-table').click();
      await page.waitForTimeout(300);
      assert(await page.locator('#vocab-subtab-table').isVisible(), 'Successfully switched to Table sub-tab (#vocab-subtab-table)');
      const tableRows = await page.locator('#vocab-table-body tr').count();
      assert(tableRows > 0, `Vocab table contains rendered word rows (count: ${tableRows})`);

      // Switch to Mistakes Tab
      await page.locator('nav button[data-tab="mistakes"]').click();
      await page.waitForTimeout(300);
      assert(await page.locator('#tab-mistakes').isVisible(), 'Successfully navigated to Mistakes Tab (#tab-mistakes)');

      await context.close();
    }

    // ----------------------------------------------------
    // TEST SUITE 5: PERSONA C - MODE SWITCHING & LEVEL SELECTOR
    // ----------------------------------------------------
    log('\n==================================================');
    log('SUITE 5: PERSONA C - EXAM MODE SWITCHING (HSK ⇄ YCT)');
    log('==================================================');

    {
      const context = await browser.newContext();
      await context.addInitScript(SET_RETURNING_USER_SCRIPT);
      const page = await context.newPage();
      await page.goto(`http://localhost:${PORT}/student`);
      await page.waitForTimeout(400);

      // Open Level Modal via YCT Toggle
      await page.locator('#exam-toggle-yct').click();
      await page.waitForTimeout(300);
      const modal = page.locator('#level-select-modal');
      assert(await modal.isVisible(), 'Clicking YCT toggle opens Level Selection Modal');

      // Click on YCT 2 card
      const yct2Btn = page.locator('#modal-levels-container .level-card[data-level="2"]');
      await yct2Btn.click();
      await page.waitForTimeout(200);

      // Click Confirm
      await page.locator('#modal-confirm-btn').click();
      await page.waitForTimeout(400);

      // Verify theme switched to YCT
      const logoTitle = await page.locator('#header-logo-title').innerText();
      assert(logoTitle.includes('YCT'), `Logo title switched to YCT (got: "${logoTitle}")`);
      const logoIcon = await page.locator('#header-logo-icon').innerText();
      assert(logoIcon === '🐼', `Logo icon switched to 🐼 Panda for YCT (got: "${logoIcon}")`);

      // Verify level label updated
      const levelLabel = await page.locator('#header-level-label').innerText();
      assert(levelLabel.includes('YCT 2') || levelLabel.includes('150'), `Header level badge updated to YCT 2: "${levelLabel}"`);

      // Verify Persistence on Reload
      await page.reload({ waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(400);
      const reloadedTitle = await page.locator('#header-logo-title').innerText();
      assert(reloadedTitle.includes('YCT'), `Persistence verified: YCT mode preserved after page reload ("${reloadedTitle}")`);

      await context.close();
    }

    // ----------------------------------------------------
    // TEST SUITE 6: PERSONA D - ERROR-PRONE USER & EDGE CASES
    // ----------------------------------------------------
    log('\n==================================================');
    log('SUITE 6: PERSONA D - ERROR TOLERANCE & EDGE CASES');
    log('==================================================');

    {
      const context = await browser.newContext();
      await context.addInitScript(SET_RETURNING_USER_SCRIPT);
      const page = await context.newPage();
      await page.goto(`http://localhost:${PORT}/student`);
      await page.waitForTimeout(400);

      // Test Search with special characters and non-existent words
      await page.locator('nav button[data-tab="flashcards"]').click();
      await page.waitForTimeout(200);
      await page.locator('#subtab-btn-flashcards').click();
      await page.waitForTimeout(200);

      const searchInput = page.locator('#vocab-search-input');
      await searchInput.fill('!@#$%^&*()_+~`<>?:"{}|');
      await page.waitForTimeout(300);

      const countText = await page.locator('#vocab-search-results-count').innerText();
      assert(countText.includes('0'), 'Search with non-existent characters shows 0 results gracefully without crashing');

      // Test rapid switching between tabs
      for (const tab of ['dashboard', 'flashcards', 'quiz', 'mistakes', 'dashboard']) {
        await page.locator(`nav button[data-tab="${tab}"]`).click();
      }
      await page.waitForTimeout(300);
      assert(await page.locator('#tab-dashboard').isVisible(), 'Rapid tab switching maintains correct UI state on dashboard');

      await context.close();
    }

    // ----------------------------------------------------
    // TEST SUITE 7: PERSONA E - PARENT PORTAL AUDIT
    // ----------------------------------------------------
    log('\n==================================================');
    log('SUITE 7: PERSONA E - PARENT PORTAL AUDIT');
    log('==================================================');

    {
      const context = await browser.newContext({
        permissions: ['clipboard-read', 'clipboard-write']
      });
      const page = await context.newPage();
      await page.goto(`http://localhost:${PORT}/parent`);
      await page.waitForTimeout(500);

      // Verify parent header and title
      const parentTitle = await page.locator('#header-logo-title').innerText();
      assert(parentTitle.includes('Parent'), `Parent portal displays Parent branding ("${parentTitle}")`);

      // Verify 4 Pillars summary stats exist
      const statsSummary = page.locator('#parent-stats-summary');
      assert(await statsSummary.isVisible(), 'Parent overview shows 4-pillars readiness summary');

      // Verify Worksheet buttons exist
      const print10Btn = page.locator('#print-worksheet-10-btn');
      const print20Btn = page.locator('#print-worksheet-20-btn');
      assert(await print10Btn.isVisible() && await print20Btn.isVisible(), 'Print worksheet 10 and 20 buttons are present');

      // Verify Instagram link to Creator
      const creatorLink = page.locator('a[href="https://www.instagram.com/program_12y"]');
      const creatorCount = await creatorLink.count();
      assert(creatorCount >= 1, 'Creator Instagram link is present on parent portal');

      await context.close();
    }

    // ----------------------------------------------------
    // TEST SUITE 8: QUIZ ENGINE EXECUTION (MOCK EXAM FLOW)
    // ----------------------------------------------------
    log('\n==================================================');
    log('SUITE 8: FULL QUIZ FLOW & SCORING');
    log('==================================================');

    {
      const context = await browser.newContext();
      await context.addInitScript(SET_RETURNING_USER_SCRIPT);
      const page = await context.newPage();
      await page.goto(`http://localhost:${PORT}/student`);
      await page.waitForTimeout(400);

      // Start a quick 3-question test via HSKApp.startQuiz('quick', 3)
      await page.evaluate(() => window.HSKApp.startQuiz('quick', 3));
      await page.waitForTimeout(500);

      // Verify quiz interface is active
      const quizActiveArea = page.locator('#quiz-active-area');
      assert(await quizActiveArea.isVisible(), 'Active quiz interface #quiz-active-area is rendered');

      // Answer 3 questions
      for (let i = 0; i < 3; i++) {
        await page.waitForTimeout(400);
        
        const choiceBtns = page.locator('.choice-btn');
        const count = await choiceBtns.count();

        if (count > 0) {
          // 1. Multiple choice question
          await choiceBtns.first().click();
          await page.waitForTimeout(400);
        } else {
          // 2. Sentence unscramble or Hanzi stroke writing
          const unscrambleChips = page.locator('.unscramble-chip');
          const chipCount = await unscrambleChips.count();

          if (chipCount > 0) {
            for (let c = 0; c < chipCount; c++) {
              const availableChip = page.locator('.unscramble-chip:not(.pointer-events-none)').first();
              if (await availableChip.count() > 0) {
                await availableChip.click();
                await page.waitForTimeout(120);
              }
            }
            await page.locator('#unscramble-submit-btn').click();
            await page.waitForTimeout(400);
          } else {
            // 3. Hanzi stroke writing
            const hanziInput = page.locator('#hanzi-input-field');
            if (await hanziInput.isVisible()) {
              await hanziInput.fill('我');
              await page.locator('#hanzi-submit-btn').click();
              await page.waitForTimeout(400);
            }
          }
        }

        // Click Next / View Results
        const nextBtn = page.locator('#quiz-next-btn');
        if (await nextBtn.isVisible()) {
          await nextBtn.click();
          await page.waitForTimeout(400);
        }
      }

      // Verify Quiz Summary or Completion Screen
      await page.waitForTimeout(600);
      const resultAreaVisible = await page.locator('#quiz-result-area').isVisible();
      assert(resultAreaVisible, 'Quiz completion summary screen #quiz-result-area is displayed with score');

      await context.close();
    }

  } catch (err) {
    log(`\n❌ Test run failed with error: ${err.message}`);
    log(err.stack);
  } finally {
    await browser.close();
    server.close();
  }

  log('\n==================================================');
  log(`SUMMARY: Total: ${results.total} | Passed: ${results.passed} | Failed: ${results.failed}`);
  log('==================================================');

  return results;
}

runSuite().then(res => {
  if (res.failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
});

// tests/test-conversations.js - E2E Playwright test for Daily Conversations feature
const { chromium } = require('playwright');
const http = require('http');
const path = require('path');
const fs = require('fs');
const assert = require('assert');

const PORT = 3007;
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

async function runTests() {
  console.log(`Starting Conversation Feature E2E Test on http://localhost:${PORT}...`);
  await new Promise(r => server.listen(PORT, r));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  
  // Seed local profile
  await context.addInitScript(() => {
    localStorage.setItem('hsk3_student_profile_v2', JSON.stringify({
      id: 'test', name: 'น้องโฟกัส', avatar: '🐯', role: 'student', isNew: false
    }));
  });

  const page = await context.newPage();
  await page.goto(`http://localhost:${PORT}/student`);
  await page.waitForTimeout(400);

  console.log('\n--- 1. NAVIGATION TAB ORDER VERIFICATION ---');
  // Check that the conversation button is right before the creator link
  const navTabs = page.locator('nav .nav-tab-btn, nav a');
  const navTexts = await navTabs.allTextContents();
  console.log('Nav tabs found:', navTexts.map(t => t.trim()));

  const convBtn = page.locator('nav button[data-tab="conversation"]');
  await assert.doesNotReject(async () => {
    await convBtn.waitFor({ state: 'visible' });
  }, 'Conversation tab button must be visible');
  console.log('✅ [PASS] "บทสนทนาประจำวัน" tab exists in navigation');

  // Verify it is placed before "ผู้สร้างเว็บไซต์"
  const creatorLinkIndex = navTexts.findIndex(t => t.includes('ผู้สร้างเว็บไซต์'));
  const convBtnIndex = navTexts.findIndex(t => t.includes('บทสนทนา'));
  assert.ok(convBtnIndex !== -1, 'Conversation tab must be found');
  assert.ok(creatorLinkIndex !== -1, 'Creator link must be found');
  assert.ok(convBtnIndex < creatorLinkIndex, 'Conversation tab must be positioned before Creator menu!');
  console.log(`✅ [PASS] Conversation tab (index ${convBtnIndex}) is positioned right before Creator link (index ${creatorLinkIndex})`);

  console.log('\n--- 2. SWITCH TO CONVERSATION TAB ---');
  await convBtn.click();
  await page.waitForTimeout(300);

  const tabConv = page.locator('#tab-conversation');
  assert.ok(await tabConv.isVisible(), '#tab-conversation must be visible');
  console.log('✅ [PASS] Successfully navigated to #tab-conversation');

  console.log('\n--- 3. 3-LEVEL FILTERING (ง่าย • ปานกลาง • ยาก) ---');
  // Initial all cards
  let cards = await page.locator('.conv-card').count();
  assert.strictEqual(cards, 18, `Expected 18 total conversation cards, got ${cards}`);
  console.log(`✅ [PASS] All 18 conversations rendered across 3 levels`);

  // Filter 1: ง่าย (Easy)
  await page.locator('.conv-filter-btn[data-level="easy"]').click();
  await page.waitForTimeout(200);
  cards = await page.locator('.conv-card').count();
  assert.strictEqual(cards, 6, `Expected 6 easy conversation cards, got ${cards}`);
  console.log('✅ [PASS] Level 1 (ง่าย) filtered correctly to 6 conversations');

  // Filter 2: ปานกลาง (Medium)
  await page.locator('.conv-filter-btn[data-level="medium"]').click();
  await page.waitForTimeout(200);
  cards = await page.locator('.conv-card').count();
  assert.strictEqual(cards, 6, `Expected 6 medium conversation cards, got ${cards}`);
  console.log('✅ [PASS] Level 2 (ปานกลาง) filtered correctly to 6 conversations');

  // Filter 3: ยาก (Hard)
  await page.locator('.conv-filter-btn[data-level="hard"]').click();
  await page.waitForTimeout(200);
  cards = await page.locator('.conv-card').count();
  assert.strictEqual(cards, 6, `Expected 6 hard conversation cards, got ${cards}`);
  console.log('✅ [PASS] Level 3 (ยาก) filtered correctly to 6 conversations');

  console.log('\n--- 4. INTERACTIVE DIALOGUE PLAYER DETAIL VIEW ---');
  // Open the first card
  await page.locator('.conv-card').first().click();
  await page.waitForTimeout(300);

  const backBtn = page.locator('#conv-back-btn');
  assert.ok(await backBtn.isVisible(), 'Back button must be visible');
  
  const playAllBtn = page.locator('#conv-play-all-btn');
  assert.ok(await playAllBtn.isVisible(), 'Play all button must be visible');

  const dialogueBubbles = await page.locator('.dialogue-line-bubble').count();
  assert.ok(dialogueBubbles >= 4, `Dialogue must have at least 4 lines, got ${dialogueBubbles}`);
  console.log(`✅ [PASS] Conversation detail opened with ${dialogueBubbles} interactive dialogue bubbles`);

  // Toggle Pinyin
  const pinyinBtn = page.locator('#toggle-pinyin-btn');
  await pinyinBtn.click();
  await page.waitForTimeout(100);
  console.log('✅ [PASS] Pinyin toggle clicked successfully');

  // Toggle Thai
  const thaiBtn = page.locator('#toggle-thai-btn');
  await thaiBtn.click();
  await page.waitForTimeout(100);
  console.log('✅ [PASS] Thai toggle clicked successfully');

  // Roleplay mode
  const roleABtn = page.locator('.role-btn[data-role="A"]');
  await roleABtn.click();
  await page.waitForTimeout(100);
  console.log('✅ [PASS] Role-play mode (I am Speaker A) activated');

  // Back button returns to list
  await backBtn.click();
  await page.waitForTimeout(200);
  assert.ok(await page.locator('.conv-card').first().isVisible(), 'Returned to card grid');
  console.log('✅ [PASS] Back button successfully returns to list view');

  console.log('\n--- 5. CHECK / (INDEX.HTML) MASTER PORTAL ---');
  await page.goto(`http://localhost:${PORT}/`);
  await page.waitForTimeout(400);

  const indexConvBtn = page.locator('nav button[data-tab="conversation"]');
  assert.ok(await indexConvBtn.isVisible(), 'Conversation button must exist on index.html');
  const indexNavTexts = await page.locator('nav .nav-tab-btn, nav a').allTextContents();
  const indexCreatorIndex = indexNavTexts.findIndex(t => t.includes('ผู้สร้างเว็บไซต์'));
  const indexConvIndex = indexNavTexts.findIndex(t => t.includes('บทสนทนา'));
  assert.ok(indexConvIndex < indexCreatorIndex, 'On index.html, conversation tab must be before creator link');
  console.log('✅ [PASS] index.html nav tab order verified correctly before creator link');

  await indexConvBtn.click();
  await page.waitForTimeout(200);
  assert.ok(await page.locator('#tab-conversation').isVisible(), '#tab-conversation visible on index.html');
  console.log('✅ [PASS] index.html successfully renders conversation tab');

  await browser.close();
  server.close();
  console.log('\n==================================================');
  console.log('🎉 ALL CONVERSATION FEATURE TESTS PASSED (100%)');
  console.log('==================================================');
}

runTests().catch(err => {
  console.error('Test Failed:', err);
  process.exit(1);
});

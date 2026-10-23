# 04 - FIX CHANGELOG

### Code Modifications & Self-Healing Actions

#### 1. Header Layout Architecture
- **Files:** `student.html`, `parent.html`, `index.html`
- **Changes:**
  - Converted single-row overloaded header into a 2-tier responsive mobile layout.
  - Kept row 1 focused on branding and primary controls (presence counter, profile avatar, audio speed).
  - Placed 2-way mode switcher (`HSK` vs `YCT`) and full-width Level Selector card into row 2 for mobile touch friendliness.
  - Set `overflow-x: hidden` and `max-w-full` on `body` to guarantee 0px horizontal scroll on all mobile devices.

#### 2. Dynamic Header & Theme Synchronization
- **File:** `js/app.js`
- **Changes:**
  - Fixed `updateExamThemeAndContent()` to set concise static labels for `portalBadge` on desktop and hide it on mobile (`hidden md:inline-block`).
  - Synced `#header-level-label-mobile` to `${meta.shortLabel} (${poolCount} คำ)`.
  - Added dynamic theme colors for mobile level badge (Indigo for HSK, Emerald for YCT).

#### 3. Audio Speed Persistence & Mobile Fit
- **File:** `js/app.js`
- **Changes:**
  - In `toggleAudioSpeed()`:
    - Updated toggle text to compact format `⚡ 1.0x` and `🐢 0.8x`.
    - Added `Storage.saveSettings()` write call on every speed change.
  - In `init()`:
    - Read `savedSettings.audioSpeed` from `Storage.getSettings()`.
    - Applied saved speed state to `dom.speedLabel` upon app startup.

#### 4. Data-Level Attribute on Modal Cards
- **File:** `js/app.js`
- **Changes:**
  - Added `data-level="${lvl.id}"` attribute to `.level-card` in `renderModalContent()` for accessibility and automation testing.

#### 5. Defensive Guard on Worksheet Generator
- **File:** `js/app.js`
- **Changes:**
  - Safely guarded `(w.entries || []).map(...)` in `printWorksheet()` to prevent potential unhandled exceptions when printing answer keys.

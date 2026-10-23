# 03 - BUG REPORT & ROOT CAUSE ANALYSIS

### Summary of Defects Detected & Resolved

| Bug ID | Severity | Component | Summary | Status |
|---|---|---|---|---|
| **BUG-001** | P1 (High) | Mobile Header | Multi-line badge text (`โหมดนักเรียน (HSK 1-3)`) caused 4-line wrapping and crushed the app title down to "H" on mobile | **FIXED & VERIFIED** |
| **BUG-002** | P2 (Medium) | Audio Speed Controller | Toggle displayed lengthy Thai text (`🐢 เสียงช้า 0.8x`) pushing icons out of view on mobile, and failed to persist speed state across page reloads | **FIXED & VERIFIED** |
| **BUG-003** | P2 (Medium) | Level Selection Modal | Modal cards lacked machine-readable data attributes (`data-level`), hindering accessibility and test automation | **FIXED & VERIFIED** |
| **BUG-004** | P2 (Medium) | Printable Worksheets | Unsafe property access on `w.entries.map` in answer key generation could cause runtime crash if vocabulary entries were null/undefined | **FIXED & VERIFIED** |

---

### Detailed Defect Reports

#### BUG-001: Mobile Header Overflow & Truncated App Title
- **Affected Route:** `/student`, `/parent`, `/`
- **Severity:** P1 (High)
- **User Impact:** Mobile users saw a broken top bar with "H" instead of the logo name, and an awkward badge wrapped across 4 lines.
- **Root Cause:** Appending `${meta.shortLabel}` into `#current-portal-badge` directly beside the logo exceeded horizontal viewport width on screens < 400px.
- **Fix:**
  - Redesigned the header into a clean 2-row mobile structure.
  - Row 1: Logo, Title, and top utilities (Presence, Profile, Audio Speed). Long portal badge is hidden on mobile (`hidden md:inline-block`).
  - Row 2: 50/50 segmented mode switch (`[ 🔵 HSK ] [ 🟢 YCT ]`) and full-width Level Selector card (`🏷️ ระดับปัจจุบัน: HSK 1-3 (600 คำ) [ เปลี่ยนระดับ ▾ ]`).
- **Retest Result:** Verified on 360px, 390px, 768px, and 1440px viewports with zero horizontal overflow.

#### BUG-002: Audio Speed Toggle Text Overflow & Missing Persistence
- **Affected Route:** `/student`, `/`
- **Severity:** P2 (Medium)
- **User Impact:** Clicking the audio speed toggle on mobile rendered lengthy strings like `'🐢 เสียงช้า 0.8x'` and `'⚡ เสียงปกติ 1.0x'`, expanding the button width unexpectedly. Additionally, user preference was lost upon page reload.
- **Root Cause:** `toggleAudioSpeed()` hardcoded long text and omitted `Storage.saveSettings()`.
- **Fix:**
  - Standardized compact labels: `'⚡ 1.0x'` (normal) and `'🐢 0.8x'` (slow).
  - Added persistence: Saves `audioSpeed` to localStorage in `Storage.saveSettings()`.
  - Added startup restoration: `init()` reads `savedSettings.audioSpeed` on startup.
- **Retest Result:** Automated Playwright test verified toggle to 0.8x, toggle back to 1.0x, and persistence across page reload.

#### BUG-003: Level Selection Modal Card Targetability
- **Affected Route:** `#level-select-modal` on all portals
- **Severity:** P2 (Medium)
- **User Impact:** Screen readers and automated tests could not reliably target level cards without querying inner Thai strings.
- **Root Cause:** Dynamic card generation omitted `data-level="${lvl.id}"` attribute.
- **Fix:** Added `data-level="${lvl.id}"` directly to each `.level-card` container in `renderModalContent()`.
- **Retest Result:** Verified modal level selection works cleanly via selector `.level-card[data-level="2"]`.

#### BUG-004: Potential TypeError on Worksheet Answer Key
- **Affected Route:** `/parent` (Printable Worksheets)
- **Severity:** P2 (Medium)
- **User Impact:** Generating paper worksheets could crash if vocabulary records contained empty entries.
- **Root Cause:** Direct call `w.entries.map(...)` without nullish coalescing.
- **Fix:** Applied safe fallback `(w.entries || []).map(e => e.meaning).join(', ') || (w.meaning || '')`.
- **Retest Result:** Verified worksheet generation produces valid HTML documents with complete answer keys.

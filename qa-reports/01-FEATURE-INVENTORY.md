# 01 - FEATURE INVENTORY
**Project:** HSK 3 & YCT Master Web Application  
**Version:** 1.0.0  
**Testing Framework:** Playwright End-to-End Automation + Chromium Headless Engine  
**Date:** 2026-10-23  

---

### Feature Matrix Overview

| Feature ID | Page / Route | Feature Name | User Role | Expected Behavior | Actual Result | Test Status |
|---|---|---|---|---|---|---|
| **FEAT-001** | `/student`, `/parent`, `/` | Top Header & Branding | Student / Parent | Displays logo, title ("HSK 3 Student" / "YCT Youth"), and online presence | Logo and title render cleanly with zero overflow | **PASS** |
| **FEAT-002** | `/student`, `/parent`, `/` | Real-time Presence Badge | All | Shows online counter `🟢 ออนไลน์ N คน`; clicking opens `#online-peers-modal` | Shows live peer count; modal lists classroom participants | **PASS** |
| **FEAT-003** | `/student`, `/` | User Profile Customization | Student | Clicking `#user-profile-badge` opens modal to edit nickname & choose 15 avatar icons | Nickname and avatar update immediately and persist | **PASS** |
| **FEAT-004** | `/student`, `/` | Audio Speed Controller | Student | Clicking `#speed-toggle-btn` toggles between 1.0x (normal) and 0.8x (slow) for speech engine | Toggles smoothly, updates label, and persists in localStorage | **PASS** |
| **FEAT-005** | `/student`, `/parent`, `/` | Exam Mode Switcher (HSK ⇄ YCT) | All | Allows toggling between HSK (General) and YCT (Youth); changes themes (Indigo ⇄ Emerald) | Opens level popup, switches theme, logo, and vocab dataset | **PASS** |
| **FEAT-006** | `/student`, `/parent`, `/` | Level Selection Modal | All | Lets user select specific grade (HSK 1, 2, 3, new3 or YCT 1, 2, 3, 4, all 600) | Injects cards dynamically, highlights selection, updates header | **PASS** |
| **FEAT-007** | `/student` | Student Dashboard Tab | Student | Overview hero card, 4 today's stats counters, and 6 practice mode cards | Counters reflect real test results; buttons launch appropriate quiz | **PASS** |
| **FEAT-008** | `/student` | 600-Word Listening Quiz | Student | Sequential single-word listening test with 4 choices, audio replay, and bookmark resume | Audio plays, choices highlight correct/wrong, progress saved | **PASS** |
| **FEAT-009** | `/student` | Flashcard Mode | Student | Interactive vocabulary cards with Hanzi, Pinyin, Thai meaning, and audio pronunciation | Search filters cards dynamically; table view lists all words | **PASS** |
| **FEAT-010** | `/student` | Quiz Engine (Mock Exam) | Student | 25-question standard simulated exam with 30-min timer (Listening, Reading, Writing) | Generates balanced questions, tracks timer, grades out of 300 pts | **PASS** |
| **FEAT-011** | `/student` | Sentence Unscramble (连词成句) | Student | Click/drag Chinese word chunks to build complete sentence | Chips move to assembly box; checks word order accurately | **PASS** |
| **FEAT-012** | `/student` | Hanzi Stroke Writing Canvas | Student | HTML5 Tian Zi Ge grid canvas allowing handwriting practice with show/hide watermark | Canvas captures touch/mouse strokes; input validates typing | **PASS** |
| **FEAT-013** | `/student` | Mistakes Review (错题本) | Student | Collects incorrectly answered questions for targeted practice | Records wrong words; allows practicing only weak words | **PASS** |
| **FEAT-014** | `/parent` | Parent Readiness Dashboard | Parent | 4-pillar readiness breakdown (Overall, Listening, Reading, Writing %) | Automatically calculates percentages from student practice logs | **PASS** |
| **FEAT-015** | `/parent` | Weak Words Analytics | Parent | Shows most frequent mistakes with count and Thai meaning | Highlights top weak words for parental intervention | **PASS** |
| **FEAT-016** | `/parent` | Printable Worksheet Generator | Parent | Generates 10-question and 20-question printable A4 worksheets with answer key | Opens clean printable window with formatting and answers | **PASS** |
| **FEAT-017** | `/parent` | Copy Student Link | Parent | One-click button to copy student link with clipboard fallback | Copies URL and gives visual confirmation feedback | **PASS** |
| **FEAT-018** | `/parent`, `/student` | Creator Instagram Link | All | Navigates to `@program_12y` on Instagram in a new tab | Correct external link attribute `target="_blank" rel="noopener"` | **PASS** |
| **FEAT-019** | All routes | Responsive Mobile Header | All (Mobile) | 2-row layout with 50/50 segmented mode switch and full-width level button | No horizontal overflow across 360px, 390px, 768px, 1440px | **PASS** |

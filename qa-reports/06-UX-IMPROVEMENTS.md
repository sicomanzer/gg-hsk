# 06 - UX/UI AUDIT & RECOMMENDATIONS

### Human-Centric Usability Audit

During autonomous user simulation across all personas (First-Time Student, Regular Student, Power Learner, Error-Prone User, and Parent), the following observations and improvements were evaluated:

---

### Implemented UX Improvements

1. **Thumb-Friendly Level Selection on Mobile:**
   - Instead of crowding buttons into a single header line, separating the mode switch (`HSK` vs `YCT`) and the current level into a dedicated card with an unmistakable `เปลี่ยนระดับ ▾` button allows students to operate the app effortlessly with one thumb.

2. **Compact Speed Badge:**
   - Changing the button text from a long sentence (`🐢 เสียงช้า 0.8x`) to a clean, universal badge (`🐢 0.8x`) preserves header balance across all smartphone sizes.

3. **Instant Audio Speed Feedback & Memory:**
   - Students studying with slower audio speeds (0.8x) now retain their preference even after refreshing or navigating between tabs.

---

### Recommended Future Enhancements (Backlog)

1. **Haptic Feedback on Mobile (Vibration API):**
   - For smartphone users, triggering `navigator.vibrate(50)` on correct answers and `navigator.vibrate([100, 50, 100])` on incorrect answers adds rewarding gamified tactile feedback.

2. **Pinyin Tone Color Coding:**
   - Optional color highlights for the 4 tones (e.g. 1st tone red, 2nd tone green, 3rd tone blue, 4th tone purple) can help young learners visualize pronunciation patterns faster.

3. **Offline Service Worker (PWA):**
   - Registering a service worker with caching for vocab and audio can turn HSK 3 Master into an installable progressive web app (PWA) on iPads and Android tablets.

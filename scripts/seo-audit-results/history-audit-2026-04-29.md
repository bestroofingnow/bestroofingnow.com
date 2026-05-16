# Browser History Usage Audit — 2026-04-29

Phase 1 of `.claude/plan/brn-gold-standard.md` — pre-flight check for Google's June 15 2026 back-button-hijacking demotion.

- Files scanned: **751**
- Findings: **11**

Each finding is read-only and may be entirely safe. Review and tag SAFE / REVIEW / VIOLATES.

## beforeunload listener (1)

> beforeunload prompts must NOT block organic-search exit. Analytics-only is allowed.

- `src\components\analytics\AutoTrack.tsx:84` — `window.addEventListener('beforeunload', handleBeforeUnload);`

## mouseleave/exit-intent (8)

> Exit-intent popups must be passive (no history manipulation, dismissible).

- `src\components\estimate\EstimateProvider.tsx:35` — `// Session storage key for exit intent - persists for the entire browser session`
- `src\components\estimate\EstimateProvider.tsx:52` — `// Check if exit intent was already shown this session on mount`
- `src\components\estimate\EstimateProvider.tsx:64` — `// Handle exit intent - only fires once per session`
- `src\components\estimate\EstimateProvider.tsx:103` — `// Enable exit intent only on desktop after user has been on page for 15 seconds`
- `src\components\estimate\EstimateProvider.tsx:106` — `// Skip on mobile - exit intent doesn't work well on mobile anyway`
- `src\components\estimate\EstimateProvider.tsx:118` — `// Add exit intent listener using mouseleave on document`
- `src\components\estimate\EstimateProvider.tsx:125` — `document.documentElement.addEventListener('mouseleave', handleMouseLeave);`
- `src\components\estimate\EstimateProvider.tsx:128` — `document.documentElement.removeEventListener('mouseleave', handleMouseLeave);`

## scroll-lock body overflow (2)

> Body scroll-lock is fine for modals. Verify it always unlocks on close.

- `src\components\layout\Header.tsx:23` — `document.body.style.overflow = 'hidden';`
- `src\components\projects\ProjectGallery.tsx:26` — `document.body.style.overflow = 'hidden';`

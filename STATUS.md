# PR-004 — AI Games · Status
_Maintained by the Conductor. Agents update this every cycle._

**Goal:** Browser games (single-file HTML, mobile-first) live on GitHub Pages (`eshcharb-dot/ai-games`), listed in the `games/index.html` arcade hub, with Exodus Arena as the flagship playable.
**Phase:** Deployed-but-unverified / cleanup — 6 game folders exist, hub and docs are stale   **Tracker status:** In Progress

## Today's Goals
- (set by the Conductor each morning)

## Next Steps
- [x] Verify deployment: DONE 2026-11-06 — Pages enabled (workflow build, source master), static.yml deploys on push to `master`, last run success, all 7 game URLs return 200. CLAUDE.md says `main` but repo is `master` (fix in the README/CLAUDE.md step).
- [x] Fix the arcade hub: DONE 2026-11-06 — added cards for `exodus-arena-v3`, `passover-breaker`, `mila-beli-mila` (5 cards; `ea-55b33e6f` card kept pending Q-PR004-001).
- [x] Update README.md + CLAUDE.md Current Games table: DONE 2026-11-06 (6 real folders listed; main→master fixed).
- [ ] Identify the current canonical Exodus Arena (v3 has the latest mobile UX commit; `ea-55b33e6f` is the private URL) and archive or de-link `exodus-arena-v2` to avoid duplicates.
- [x] mila-beli-mila v3.3 fixes: DONE/obsolete 2026-11-06 — index.html already has no BOM (first byte 3C), no SW/reload code, inline JS passes node --check; game is now v4 (welcome label still says v3.3, cosmetic). Deleting stale task.txt + public games/mila-beli-mila/test.html ("UX TEST v26") awaits Q-PR004-002.
- [ ] Run a mobile audit (375×667: no scroll, 64px+ buttons, one-line text) on `exodus-arena-v3`, `passover-breaker`, `mila-beli-mila`, `redefine-rescue` using the `ux-ui-agent` skill; log fixes.
- [ ] Decide what to build next after cleanup (needs owner) — see Open Questions.

## Blockers
- none

## Open Questions
- [ ] Q-PR004-001 (normal): Which Exodus Arena version should be the public flagship, and should older ones (`exodus-arena-v2`, and the private-URL `ea-55b33e6f`) stay public? Options: (a) v3 public, v2 removed, `ea-55b33e6f` stays private-only; (b) keep all linked as version history. Recommendation: (a).

- [ ] Q-PR004-002 (low): OK to delete stale task.txt (repo root) and games/mila-beli-mila/test.html (publicly served test copy with red "UX TEST" banner)? Both are in git history. Recommendation: yes, delete both.

## Run Log
- 2026-11-06 10:06 — Verified mila-beli-mila v3.3 fixes already in place (v4 now); asked Q-PR004-002 re deleting stale task.txt/test.html
- 2026-11-06 09:12 — README.md + CLAUDE.md game tables updated to 6 real folders, main→master
- 2026-11-06 09:08 — Arcade hub: added v3, passover-breaker, mila-beli-mila cards (pushed)
- 2026-11-06 09:06 — Verified GitHub Pages deploy (master, workflow, all game URLs 200)
- 2026-11-06 08:25 — STATUS.md created by Conductor init

# PR-004 — AI Games · Status
_Maintained by the Conductor. Agents update this every cycle._

**Goal:** Browser games (single-file HTML, mobile-first) live on GitHub Pages (`eshcharb-dot/ai-games`), listed in the `games/index.html` arcade hub, with Exodus Arena as the flagship playable.
**Phase:** Deployed-but-unverified / cleanup — 6 game folders exist, hub and docs are stale   **Tracker status:** In Progress

## Today's Goals
- Write `docs/NEXT-GAMES.md`: 3 original next-game concepts (one paragraph each: core loop, mobile controls, effort in cycles) and add Q-PR004-003 asking the owner to pick one — turns the vague "decide what to build next" step into a yes/no.
- Cosmetic: update the mila-beli-mila welcome label from v3.3 to v4; commit and push.
- Render the arcade hub `games/index.html` at 375x667 (overflow, tap-target sizes, card links all 200) and fix any issues found.

## Next Steps
- [x] (2026-11-07) Write `docs/NEXT-GAMES.md`: DONE 2026-11-07, Q-PR004-003 asked.
- [x] (2026-11-07) mila-beli-mila welcome label v3.3 -> v4: DONE 2026-11-07 10:10.
- [ ] (2026-11-07) 375x667 render audit of the arcade hub `games/index.html`; fix issues.
- [x] Verify deployment: DONE 2026-11-06 — Pages enabled (workflow build, source master), static.yml deploys on push to `master`, last run success, all 7 game URLs return 200. CLAUDE.md says `main` but repo is `master` (fix in the README/CLAUDE.md step).
- [x] Fix the arcade hub: DONE 2026-11-06 — added cards for `exodus-arena-v3`, `passover-breaker`, `mila-beli-mila` (5 cards; `ea-55b33e6f` card kept pending Q-PR004-001).
- [x] Update README.md + CLAUDE.md Current Games table: DONE 2026-11-06 (6 real folders listed; main→master fixed).
- [ ] Identify the current canonical Exodus Arena (v3 has the latest mobile UX commit; `ea-55b33e6f` is the private URL) and archive or de-link `exodus-arena-v2` to avoid duplicates.
- [x] mila-beli-mila v3.3 fixes: DONE/obsolete 2026-11-06 — index.html already has no BOM (first byte 3C), no SW/reload code, inline JS passes node --check; game is now v4 (welcome label still says v3.3, cosmetic). Deleting stale task.txt + public games/mila-beli-mila/test.html ("UX TEST v26") awaits Q-PR004-002.
- [x] Mobile audit, start screens: DONE 2026-11-06 (rendered 375x667 via headless Chrome: no overflow, no JS errors on all 4).
- [x] Button heights: DONE 2026-11-06 — min-height 64px on redefine-rescue start/replay and exodus-v3 game-over/pause/trivia buttons (CSS only, JS syntax OK).
- [x] Mobile audit, in-game screens (redefine-rescue, exodus-arena-v3): DONE 2026-11-06 — rendered 375x667 in iframe: no overflow/clipped text/JS errors in play, pause, game-over, victory; only issue was exodus-v3 play-btn 60px -> fixed to 64px. Root font still 16px on both (18px rule open, low priority).
- [x] Mobile audit, in-game screens passover-breaker + mila-beli-mila: DONE 2026-11-06 — 375x667 iframe: no horizontal overflow/scroll, no JS errors on all screens. Notes: mila action buttons 120px (32vw, under the 130px/22vh guideline), mila secondary buttons 44-53px, passover sound icon 49px (low priority, unchanged).
- [x] mila action buttons: DONE 2026-11-06 — height max(32vw,22vh) (~147px at 375x667); CSS-only, JS syntax OK; not re-rendered (landscape/desktop overrides untouched).
- [ ] Optional polish: root font 18px — investigated 2026-11-06: redefine-rescue uses px (1 rem, nothing to scale); exodus-v3 has 148 rem uses so a root change rescales ~12% everywhere and needs a rendered 375x667 re-audit first. Skipped; low priority.
- [ ] Decide what to build next after cleanup (needs owner) — see Open Questions.

## Blockers
- none

## Open Questions
- [ ] Q-PR004-001 (normal): Which Exodus Arena version should be the public flagship, and should older ones (`exodus-arena-v2`, and the private-URL `ea-55b33e6f`) stay public? Options: (a) v3 public, v2 removed, `ea-55b33e6f` stays private-only; (b) keep all linked as version history. Recommendation: (a).

- [ ] Q-PR004-002 (low): OK to delete stale task.txt (repo root) and games/mila-beli-mila/test.html (publicly served test copy with red "UX TEST" banner)? Both are in git history. Recommendation: yes, delete both.

- [ ] Q-PR004-003 (normal): Which next game should we build? (A) Tide Pool Tapper ~6 cycles, (B) Lantern Heist ~9, (C) Stack Rally ~5-8 — see docs/NEXT-GAMES.md. Recommendation: A.

## Run Log
- 2026-11-07 10:10 — mila-beli-mila welcome label v3.3 -> v4 (one-line text change, committed + pushed)
- 2026-11-07 10:05 — Wrote docs/NEXT-GAMES.md (3 concepts) and asked Q-PR004-003
- 2026-11-06 19:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002; no code changes
- 2026-11-06 18:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002; no code changes
- 2026-11-06 17:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002; no code changes
- 2026-11-06 16:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002; no code changes
- 2026-11-06 15:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002 or are skipped polish; no code changes
- 2026-11-06 14:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002 or are skipped low-risk polish; no changes
- 2026-11-06 13:05 — No actionable step: DECISIONS.md empty, all remaining items wait on Q-PR004-001/002 (or are skipped low-risk polish); no changes
- 2026-11-06 12:06 — Investigated 18px root-font polish: risky for exodus-v3 (148 rem uses), n/a for redefine-rescue; no code change; remaining items wait on owner (Q-PR004-001/002)
- 2026-11-06 12:05 — mila action buttons raised to max(32vw,22vh) (~147px on phone); syntax OK; remaining items wait on Q-PR004-001/002
- 2026-11-06 11:20 — In-game 375x667 audit of passover-breaker + mila-beli-mila: no overflow/JS errors; minor button-size notes logged
- 2026-11-06 11:08 — In-game 375x667 audit of redefine-rescue + exodus-arena-v3: clean; exodus play-btn 60->64px (syntax OK); passover/mila in-game audit queued

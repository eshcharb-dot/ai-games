# PR-004 — AI Games · Status
_Maintained by the Conductor. Agents update this every cycle._

**Goal:** Browser games (single-file HTML, mobile-first) live on GitHub Pages (`eshcharb-dot/ai-games`), listed in the `games/index.html` arcade hub, with Exodus Arena as the flagship playable.
**Phase:** Deployed-but-unverified / cleanup — 6 game folders exist, hub and docs are stale   **Tracker status:** In Progress

## Today's Goals
- Write `docs/LANTERN-HEIST-SPEC.md`: core loop, one-thumb controls at 375x667, art and audio approach, and a cycle-by-cycle build plan. Build can then start the moment the owner picks B on Q-PR004-005. No game code yet.
- Stack Rally: add a localStorage best score plus an optional daily-seed mode. CDP playtest at 375x667, push, check the live URL returns 200.
- Root-font 18px audit for exodus-arena-v3: render 375x667 at 16px vs 18px and record the overflow/clipping diff. Apply only if clean; otherwise close the step as won't-fix.

## Next Steps
- [x] (2026-11-09) docs/LANTERN-HEIST-SPEC.md: DONE 07:08 (design only; build waits on Q-PR004-005 = B).
- [x] (2026-11-09) Stack Rally daily seed: DONE 07:10 — DAILY RUN button, date-seeded RNG for spawns, per-day best in localStorage (normal best already existed); node --check OK, rng determinism verified, start screen fits vertically. Live-play of daily mode not driven in CDP.
- [x] (2026-11-07) Write `docs/NEXT-GAMES.md`: DONE 2026-11-07, Q-PR004-003 asked.
- [x] (2026-11-07) mila-beli-mila welcome label v3.3 -> v4: DONE 2026-11-07 10:10.
- [x] (2026-11-07) 375x667 render audit of arcade hub: DONE 10:20 — no horizontal overflow, 5 cards 328x230-252px (tap targets fine), no title clipping, all 5 card hrefs resolve to existing index.html; hub scrolls vertically (list page, not game flow) — no fix needed.
- [x] Verify deployment: DONE 2026-11-06 — Pages enabled (workflow build, source master), static.yml deploys on push to `master`, last run success, all 7 game URLs return 200. CLAUDE.md says `main` but repo is `master` (fix in the README/CLAUDE.md step).
- [x] Fix the arcade hub: DONE 2026-11-06 — added cards for `exodus-arena-v3`, `passover-breaker`, `mila-beli-mila` (5 cards; `ea-55b33e6f` card kept pending Q-PR004-001).
- [x] Update README.md + CLAUDE.md Current Games table: DONE 2026-11-06 (6 real folders listed; main→master fixed).
- [x] Canonical Exodus Arena: DONE 2026-11-08 — v3 flagship; exodus-arena-v2 folder deleted, ea-55b33e6f card removed from hub (folder kept, private-only), stale task.txt + mila test.html deleted (Q-001/002).
- [x] mila-beli-mila v3.3 fixes: DONE/obsolete 2026-11-06 — index.html already has no BOM (first byte 3C), no SW/reload code, inline JS passes node --check; game is now v4 (welcome label still says v3.3, cosmetic). Deleting stale task.txt + public games/mila-beli-mila/test.html ("UX TEST v26") awaits Q-PR004-002.
- [x] Mobile audit, start screens: DONE 2026-11-06 (rendered 375x667 via headless Chrome: no overflow, no JS errors on all 4).
- [x] Button heights: DONE 2026-11-06 — min-height 64px on redefine-rescue start/replay and exodus-v3 game-over/pause/trivia buttons (CSS only, JS syntax OK).
- [x] Mobile audit, in-game screens (redefine-rescue, exodus-arena-v3): DONE 2026-11-06 — rendered 375x667 in iframe: no overflow/clipped text/JS errors in play, pause, game-over, victory; only issue was exodus-v3 play-btn 60px -> fixed to 64px. Root font still 16px on both (18px rule open, low priority).
- [x] Mobile audit, in-game screens passover-breaker + mila-beli-mila: DONE 2026-11-06 — 375x667 iframe: no horizontal overflow/scroll, no JS errors on all screens. Notes: mila action buttons 120px (32vw, under the 130px/22vh guideline), mila secondary buttons 44-53px, passover sound icon 49px (low priority, unchanged).
- [x] mila action buttons: DONE 2026-11-06 — height max(32vw,22vh) (~147px at 375x667); CSS-only, JS syntax OK; not re-rendered (landscape/desktop overrides untouched).
- [ ] Optional polish: root font 18px — investigated 2026-11-06: redefine-rescue uses px (1 rem, nothing to scale); exodus-v3 has 148 rem uses so a root change rescales ~12% everywhere and needs a rendered 375x667 re-audit first. Skipped; low priority.
- [x] Tide Pool Tapper cycle 1: DONE 2026-11-08 — scaffold games/tide-pool-tapper/index.html (tap loop, combo, lives, urchin decoys, golden shield, audio, particles); node --check OK, start screen rendered at 375x667 clean. In-game/game-over screens not yet rendered/played.
- [x] Tide Pool Tapper cycle 2a: DONE 2026-11-08 — drove real gameplay via Chrome DevTools (node WebSocket): taps score + combo (465 pts, x9), idle drains 3 lives -> game-over shows score/best, Play again resets (64px btn), no JS errors, no overflow at 375x667, screenshots good. Urchin-hit path not exercised live.
- [x] Tide Pool Tapper cycle 2b: DONE 2026-11-08 — gentler curve (spawn 1.4-0.009t floor .55s, life 3.8-0.015t floor 1.9s), swipe-flick bonus (2x pts on safe critters, urchins ignored; canvas touch-action:none), syntax OK, flick verified with synthetic pointer sweep in headless Chrome (score registered, no errors). Urchin tap live + HUD sliver not re-checked.
- [x] Tide Pool Tapper cycle 3: DONE 2026-11-08 — urchin tap verified live (lives 3->2, red flash, combo reset), tide now rises with lost lives + red hit flash, hub card added, CLAUDE.md/README tables updated, pushed.
- [x] Verify Tide Pool Tapper live URL: DONE 2026-11-08 — game URL 200, hub shows Tide card.
- [x] Stack Rally cycle 1 (Q-004 = C): DONE 2026-11-08 — 2D canvas scaffold games/stack-rally (drag steer, inverted-pendulum lean, crates/hazards, audio, game over, hub card); node --check OK; physics tuned via sim (idle falls ~3s, controlled bot survives 90s); start screen rendered. In-game not yet driven in Chrome.
- [x] Stack Rally cycle 2: DONE 2026-11-08 — drove real touch input via headless Chrome CDP (driver /tmp/drv/run4.js): start→play→crash→game-over→replay all work, no JS errors, no overflow at 375x667, again btn 64px. A PD-control bot (lean + leanV) survives 33s; P-only bot dies in 4-8s (steering needs damping — maybe too twitchy for humans; consider softening). Crate count grows slowly (n=4 after 33s).
- [x] Stack Rally cycle 3a: DONE 2026-11-08 18:15 — combo streak bonus + floating score popups, roadside parallax, softer lean damping (.5->.38); node --check OK, CDP playtest passes (bot 33s, 10 crates, no errors/overflow).
- [x] Stack Rally cycle 3b: DONE 2026-11-08 18:30 — capped lean height gain (n<=14), CDP playtest clean, marked Playable in hub/README/CLAUDE.md, pushed, live URL 200.
- [x] Root URL 404 fix: DONE 2026-11-09 — added root index.html redirecting to games/, pushed, live root now 200.
- [x] Lantern Heist cycle 1: DONE 09:10 — games/lantern-heist engine (6x9 grid, swipe/tap/keys, undo, gem+exit, win screen, particles); node --check OK; headless route test: gem, 14 steps, win, undo OK. Not in hub yet.
- [x] Lantern Heist cycle 2: DONE 09:35 — guards (pingpong/loop patrol), lantern cone w/ Bresenham LOS (walls/pillars block), SPOTTED overlay + undo/restart, level 2 'Night Watch'; node --check OK; headless test: BFS finds 13-step safe win, caught path detected, moves blocked while caught, undo clears. Not rendered visually yet; not in hub.
- [x] Lantern Heist cycle 3: DONE 2026-11-09 09:35 — stars saved to localStorage (lh_progress, best per level), level select overlay (5x6 grid, sequential unlock, LEVELS header button), NEXT -> select after last level; node --check OK, stubbed-DOM test: win saves 3★/14 steps, grid renders 30. Not rendered visually yet (select screen + header button need 375x667 check).
- [x] Lantern Heist cycle 4: DONE 2026-11-09 09:50 — levels 3-10 added (pillars, 2-3 guards, loops); tools/lh-solve.js BFS (state=pos,gem,guard phase) confirms all 10 solvable and par = optimal; node --check OK. Not played visually; level-select grid only shows 10 of 30 slots.
- [x] Lantern Heist cycle 5a: DONE 2026-11-09 09:40 — levels 11-20 generated via new tools/lh-gen.js (seeded random + BFS-validated, par=optimal, 2-3 guards); lh-solve.js now exports solve(); node --check OK. Not played visually.
- [x] Lantern Heist cycle 5b: DONE 2026-11-09 09:45 — levels 21-30 generated (seed 777, 3 guards, par 22-30, BFS-validated) and appended; 30 levels total; node --check OK. Not played visually.
- [x] Lantern Heist cycle 6: DONE 2026-11-09 09:30 — true 375x667 CDP render of play + level select: no overflow, no JS errors, layout clean; Web Audio sfx (step/bump/gem/caught/win) added; hub card added (New); pushed.
- [x] Lantern Heist cycle 7: DONE 2026-11-09 09:45 — tools/lh-cdp.js (CDP @375x667): BFS route wins L1 (ESCAPED, 14 steps, 3★, saved to localStorage), NEXT loads L2, guard sight triggers SPOTTED, undo clears overlay, level select shows L2 unlocked, no JS errors/overflow; live URL 200; marked Playable in README/CLAUDE.md; lh-solve.js now exposes solve.path.
- [x] Lantern Heist cycle 8a: DONE 2026-11-09 10:15 — eased thief/guard movement, radial glow on thief + guard lanterns; node --check OK, lh-cdp.js passes (win/caught/undo/unlock, no errors, no overflow at 375x667).
- [x] Lantern Heist cycle 8b: DONE 2026-11-09 10:12 — win-screen staggered star pop + par shown; node --check OK, lh-cdp passes (no errors). Difficulty: pars are BFS-optimal, 21-30 have 3 guards/par 22-30 — left as is pending owner feedback (Q-PR004-006).
- [ ] Await Q-PR004-006 feedback on Lantern Heist; then tune difficulty / add more levels or pick next game (see docs/NEXT-GAMES.md).
- [ ] Await Tide Pool Tapper feedback from owner (coming later).
- [x] Root font 18px exodus-v3: DONE 2026-11-09 07:20 — 375x667 harness at 16 vs 18px (title, HUD, instructions, pause, level-up, trivia forced visible): identical, no overflow; applied html{font-size:18px}; JS OK. Not live-played after change.
- [x] Verify exodus-arena-v3 live: DONE 2026-11-09 07:07 (200, 18px root live). Then idle until Q-PR004-005 answered (if B, start Lantern Heist cycle 1 per docs/LANTERN-HEIST-SPEC.md).

## Blockers
- none

## Open Questions
- [ ] Q-PR004-006 (low): Lantern Heist (30 levels) is live at https://eshcharb-dot.github.io/ai-games/games/lantern-heist/ — playtest on phone; too hard/easy, or any changes? Recommend: send feedback, then I do a juice pass.
- [x] Q-PR004-001 (normal): Which Exodus Arena version should be the public flagship, and should older ones (`exodus-arena-v2`, and the private-URL `ea-55b33e6f`) stay public? Options: (a) v3 public, v2 removed, `ea-55b33e6f` stays private-only; (b) keep all linked as version history. Recommendation: (a).

- [x] Q-PR004-002 (low): OK to delete stale task.txt (repo root) and games/mila-beli-mila/test.html (publicly served test copy with red "UX TEST" banner)? Both are in git history. Recommendation: yes, delete both.

- [x] Q-PR004-003 (normal): Which next game should we build? (A) Tide Pool Tapper ~6 cycles, (B) Lantern Heist ~9, (C) Stack Rally ~5-8 — see docs/NEXT-GAMES.md. Recommendation: A.

- [x] Q-PR004-004 (low): Tide Pool Tapper is live at https://eshcharb-dot.github.io/ai-games/games/tide-pool-tapper/ — playtest on your phone; want changes, or start the next concept (B Lantern Heist / C Stack Rally)? Recommend: send feedback, then C (shorter).

- [x] Q-PR004-005 (low): Stack Rally is live at https://eshcharb-dot.github.io/ai-games/games/stack-rally/ — playtest on phone; steering too twitchy/easy/hard? Or start Lantern Heist (B)? Recommend: send feedback, then B.

## Run Log
- 2026-11-09 20:03 — No actionable step: live URLs (root, hub, lantern-heist, stack-rally, tide, exodus-v3) all 200; waiting on Q-PR004-006 + Tide feedback; no code changes
- 2026-11-09 11:05 — No actionable step: live URLs (root, hub, lantern-heist, stack-rally, tide) all 200; waiting on Q-PR004-006 + Tide feedback; no code changes
- 2026-11-09 10:08 — No actionable step: live URLs (root, hub, lantern-heist, stack-rally) all 200, lantern-heist JS passes node --check; waiting on Q-PR004-006 + Tide feedback; no code changes
- 2026-11-09 10:12 — Lantern Heist 8b: win-screen star pop animation + par display, CDP clean, pushed; waiting on Q-PR004-006
- 2026-11-09 10:05 — Lantern Heist 8a: smooth movement + glow juice, CDP playtest clean; next = difficulty eyeball + star anim
- 2026-11-09 09:32 — Lantern Heist cycle 7: CDP win/caught/undo/unlock all pass, live 200, marked Playable; asked Q-PR004-006; next = juice pass
- 2026-11-09 09:30 — Lantern Heist cycle 6: 375x667 render clean, audio sfx + hub card added, pushed; next = CDP full-level win + live check
- 2026-11-09 09:29 — Lantern Heist cycle 5b: levels 21-30 appended (30 total, BFS-validated); next = visual pass 375x667 + audio + hub card
- 2026-11-09 09:40 — Lantern Heist cycle 5a: levels 11-20 via tools/lh-gen.js (BFS-validated); next = levels 21-30
- 2026-11-09 09:26 — Lantern Heist cycle 4: levels 3-10 + tools/lh-solve.js BFS (all solvable, par=optimal); next = levels 11-30
- 2026-11-09 09:35 — Lantern Heist cycle 3: stars+localStorage+level select, tested headless-stub; next = levels 1-10 + BFS solver
- 2026-11-09 09:21 — Lantern Heist cycle 2: guards + cone LOS + caught/undo + level 2, headless-tested; next = stars/localStorage/level select
- 2026-11-09 09:10 — Q-005=B: Lantern Heist cycle 1 engine built + route-tested (not yet hubbed); next = guards + cone LOS
- 2026-11-09 08:05 — No actionable step: live URLs (root, hub, stack-rally, tide, exodus-v3) all 200; waiting on Q-PR004-005 + Tide feedback; no code changes
- 2026-11-09 07:07 — Re-verified live: root, hub, stack-rally (daily mode deployed), exodus-v3 all 200; no actionable step, waiting on Q-PR004-005
- 2026-11-09 07:07 — Verified exodus-v3 live: 200 and 18px root deployed; idle until Q-PR004-005 answered
- 2026-11-09 07:20 — exodus-v3 root font 16->18px applied (16/18 render diff clean), pushed
- 2026-11-09 07:10 — Stack Rally daily-seed mode added + pushed; next = 18px root-font audit for exodus-v3 (or wait on Q-PR004-005)
- 2026-11-09 07:05 — Wrote docs/LANTERN-HEIST-SPEC.md (loop, controls, art/audio, 9-cycle plan); next = Stack Rally best score + daily seed
- 2026-11-09 06:57 — No actionable step: live URLs (root, hub, stack-rally, tide, exodus-v3) all 200; waiting on Q-PR004-005 + Tide feedback; no code changes
- 2026-11-09 06:55 — Root URL was 404; added root index.html redirect to games/, pushed, live 200; other URLs 200; still waiting on Q-PR004-005
- 2026-11-08 19:05 — Re-verified live URLs (hub, stack-rally, tide-pool, exodus-v3 all 200), pushed pending log commit; still waiting on Q-PR004-005 / Tide feedback
- 2026-11-08 18:17 — No actionable step: waiting on Q-PR004-005 (Stack Rally playtest / Lantern Heist pick) and Tide Pool feedback; no code changes
- 2026-11-08 18:30 — Stack Rally 3b: lean-height cap, marked Playable, pushed, live 200; asked Q-PR004-005
- 2026-11-08 18:15 — Stack Rally 3a: combo/popups/parallax/softer damping added; CDP playtest clean; next = difficulty + mark Playable
- 2026-11-08 18:08 — Stack Rally 2: real touch-driven playtest in headless Chrome at 375x667 passes (no errors/overflow); PD bot survives 33s; next = juice + difficulty tune
- 2026-11-08 18:05 — Built Stack Rally scaffold (2D), physics tuned by sim, hub card + docs added; next = drive in-game in headless Chrome
- 2026-11-08 14:05 — No actionable step: still waiting on Q-PR004-004 (playtest feedback / next-game pick); no code changes
- 2026-11-08 13:05 — No actionable step: still waiting on Q-PR004-004 (playtest feedback / next-game pick); no code changes
- 2026-11-08 12:05 — No actionable step: still waiting on Q-PR004-004 (playtest feedback / next-game pick); no code changes
- 2026-11-08 11:05 — No actionable step: still waiting on Q-PR004-004 (playtest feedback / next-game pick); no code changes
- 2026-11-08 10:05 — No actionable step: still waiting on Q-PR004-004 (playtest feedback / next-game pick); no code changes
- 2026-11-08 07:13 — No actionable step: waiting on Q-PR004-004 (playtest feedback / next-game pick); only skipped root-font polish remains; no code changes
- 2026-11-08 07:12 — Verified Tide Pool Tapper live (200) + hub card deployed; asked Q-PR004-004 for playtest feedback
- 2026-11-08 07:11 — Tide Pool Tapper 3: urchin tap verified, tide-rises-with-lives + hit flash, hub card + docs, pushed
- 2026-11-08 07:10 — Tide Pool Tapper 2b: difficulty curve eased + swipe-flick 2x bonus (verified headless); next = juice/polish, hub card, deploy
- 2026-11-08 07:08 — Playtested Tide Pool Tapper live at 375x667 (taps, combo, game-over, replay): no errors; next = difficulty tune + flick bonus
- 2026-11-08 07:05 — Built Tide Pool Tapper scaffold (games/tide-pool-tapper); syntax OK, start screen verified at 375x667; next = playtest/render in-game
- 2026-11-08 06:53 — Acted on owner decisions: deleted exodus-arena-v2, task.txt, mila test.html; removed ea-55b33e6f hub card; docs tables updated; next = build Tide Pool Tapper
- 2026-11-07 19:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002/003; no code changes
- 2026-11-07 18:39 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002/003; no code changes
- 2026-11-07 15:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002/003; no code changes
- 2026-11-07 14:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002/003; no code changes
- 2026-11-07 13:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002/003; no code changes
- 2026-11-07 12:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002/003; no code changes
- 2026-11-07 11:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002/003; no code changes
- 2026-11-07 10:13 — Hub 375x667 audit: clean, no changes needed; remaining items wait on Q-PR004-001/002/003
- 2026-11-07 10:10 — mila-beli-mila welcome label v3.3 -> v4 (one-line text change, committed + pushed)
- 2026-11-07 10:05 — Wrote docs/NEXT-GAMES.md (3 concepts) and asked Q-PR004-003
- 2026-11-06 19:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002; no code changes
- 2026-11-06 18:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002; no code changes
- 2026-11-06 17:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002; no code changes
- 2026-11-06 16:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002; no code changes
- 2026-11-06 15:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002 or are skipped polish; no code changes
- 2026-11-06 14:05 — No actionable step: DECISIONS.md still empty; remaining items wait on Q-PR004-001/002 or are skipped low-risk polish; no changes
- 2026-11-06 13:05 — No actionable step: DECISIONS.md empty, all remaining items wait on Q-PR004-001/002 (or are skipped low-risk polish); no changes

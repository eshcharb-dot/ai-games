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
- [ ] Stack Rally cycle 2: drive real gameplay via headless Chrome DevTools at 375x667 (play, crash, replay, no JS errors), tune feel, fix any overflow.
- [ ] Stack Rally cycle 3: juice (stack sway/wobble, road scenery parallax, combo for streaks), difficulty curve, daily seed, then mark Playable + verify live URL.
- [ ] Await Tide Pool Tapper feedback from owner (coming later).
- [ ] Optional polish: root font 18px audit (see above).

## Blockers
- none

## Open Questions
- [x] Q-PR004-001 (normal): Which Exodus Arena version should be the public flagship, and should older ones (`exodus-arena-v2`, and the private-URL `ea-55b33e6f`) stay public? Options: (a) v3 public, v2 removed, `ea-55b33e6f` stays private-only; (b) keep all linked as version history. Recommendation: (a).

- [x] Q-PR004-002 (low): OK to delete stale task.txt (repo root) and games/mila-beli-mila/test.html (publicly served test copy with red "UX TEST" banner)? Both are in git history. Recommendation: yes, delete both.

- [x] Q-PR004-003 (normal): Which next game should we build? (A) Tide Pool Tapper ~6 cycles, (B) Lantern Heist ~9, (C) Stack Rally ~5-8 — see docs/NEXT-GAMES.md. Recommendation: A.

- [x] Q-PR004-004 (low): Tide Pool Tapper is live at https://eshcharb-dot.github.io/ai-games/games/tide-pool-tapper/ — playtest on your phone; want changes, or start the next concept (B Lantern Heist / C Stack Rally)? Recommend: send feedback, then C (shorter).

## Run Log
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

# PR-004 — AI Games · Status
_Maintained by the Conductor. Agents update this every cycle._

**Goal:** Browser games (single-file HTML, mobile-first) live on GitHub Pages (`eshcharb-dot/ai-games`), listed in the `games/index.html` arcade hub, with Exodus Arena as the flagship playable.
**Phase:** Deployed-but-unverified / cleanup — 6 game folders exist, hub and docs are stale   **Tracker status:** In Progress

## Today's Goals
- (set by the Conductor each morning)

## Next Steps
- [ ] Verify deployment: remote `origin` = github.com/eshcharb-dot/ai-games (branch `master`) and `.github/workflows/static.yml` exist; check with `gh` that Pages is enabled and the Play URLs load (CLAUDE.md says deploy from `main`, repo uses `master` — reconcile).
- [ ] Fix the arcade hub `games/index.html`: it links only `ea-55b33e6f/` and `redefine-rescue/`; add cards for `exodus-arena-v3`, `passover-breaker`, `mila-beli-mila` (emoji, name, description, status badge).
- [ ] Update `README.md` and the "Current Games" table in `CLAUDE.md`: both list only `exodus-arena` (folder no longer exists) — replace with the real folders: `ea-55b33e6f`, `exodus-arena-v2`, `exodus-arena-v3`, `passover-breaker`, `mila-beli-mila`, `redefine-rescue`.
- [ ] Identify the current canonical Exodus Arena (v3 has the latest mobile UX commit; `ea-55b33e6f` is the private URL) and archive or de-link `exodus-arena-v2` to avoid duplicates.
- [ ] Finish `mila-beli-mila` v3.3 fixes described in `task.txt` (UTF-8 BOM, reload-loop/service-worker code, version badge); confirm first byte is `3C`, then delete or archive the stale `task.txt` and `games/mila-beli-mila/test.html`.
- [ ] Run a mobile audit (375×667: no scroll, 64px+ buttons, one-line text) on `exodus-arena-v3`, `passover-breaker`, `mila-beli-mila`, `redefine-rescue` using the `ux-ui-agent` skill; log fixes.
- [ ] Decide what to build next after cleanup (needs owner) — see Open Questions.

## Blockers
- none

## Open Questions
- [ ] Q-PR004-001 (normal): Which Exodus Arena version should be the public flagship, and should older ones (`exodus-arena-v2`, and the private-URL `ea-55b33e6f`) stay public? Options: (a) v3 public, v2 removed, `ea-55b33e6f` stays private-only; (b) keep all linked as version history. Recommendation: (a).

## Run Log
- 2026-11-06 08:25 — STATUS.md created by Conductor init

# PR-004 — AI Games

> A collection of browser-based games built with AI. All games are single-file HTML/JS, mobile-adaptive, and deployed to GitHub Pages for instant play on any device.

## Games

| # | Game | Description | Status |
|---|------|-------------|--------|
| 1 | [Exodus Arena v3](games/exodus-arena-v3/) | Passover-themed battle arena (latest, mobile UX) — pick a biblical hero, weapon, fight waves with trivia | Playable |
| 3 | [Exodus Arena (private URL)](games/ea-55b33e6f/) | Exodus Arena copy at a private URL | Playable |
| 4 | [Passover Breaker](games/passover-breaker/) | Passover-themed brick-breaker | Playable |
| 5 | [Mila Beli Mila](games/mila-beli-mila/) | Hebrew word-guessing party game | WIP (v3.3 fixes pending) |
| 6 | [Redefine Rescue](games/redefine-rescue/) | Cow-rescue game | Playable |
| 7 | [Tide Pool Tapper](games/tide-pool-tapper/) | Tap stranded critters, dodge urchins | Playable |
| 8 | [Stack Rally](games/stack-rally/) | Balance a tower of crates on a winding road | WIP |

## Deployment

All games are hosted via **GitHub Pages** at a single repo. Each game lives in its own folder under `games/` with an `index.html` entry point.

Play URL pattern: `https://<username>.github.io/ai-games/games/<game-name>/`

## How to add a new game

1. Create a folder under `games/<game-name>/`
2. Build the game as a self-contained `index.html` (with optional assets)
3. Ensure it's responsive / mobile-adaptive
4. Push to GitHub — it auto-deploys via Pages

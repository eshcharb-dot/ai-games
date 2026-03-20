# PR-004 — AI Games

> A collection of browser-based games built with AI. All games are single-file HTML/JS, mobile-adaptive, and deployed to GitHub Pages for instant play on any device.

## Games

| # | Game | Description | Status |
|---|------|-------------|--------|
| 1 | [Exodus Arena](games/exodus-arena/) | Passover-themed battle arena — pick a biblical hero, choose a weapon, fight waves of enemies with trivia challenges | Playable |

## Deployment

All games are hosted via **GitHub Pages** at a single repo. Each game lives in its own folder under `games/` with an `index.html` entry point.

Play URL pattern: `https://<username>.github.io/ai-games/games/<game-name>/`

## How to add a new game

1. Create a folder under `games/<game-name>/`
2. Build the game as a self-contained `index.html` (with optional assets)
3. Ensure it's responsive / mobile-adaptive
4. Push to GitHub — it auto-deploys via Pages

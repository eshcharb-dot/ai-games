# Lantern Heist — Design Spec (design only; build waits on Q-PR004-005 = B)

Single-file `games/lantern-heist/index.html`, 2D canvas, mobile-first, portrait.

## Core loop
Turn-based stealth puzzle on a 6x9 grid. Each swipe = one thief step (or wait on tap-center). After every step all guards advance one step of their patrol and rotate their lantern. Seen = caught (level restarts, undo available). Goal: grab the gem, then reach the exit. Stars by step count (3 = par, 2 = par+3, 1 = any clear).

## Rules
- Tiles: floor, wall (blocks movement and light), gem, exit (locked until gem), pillar (blocks light only).
- Guard: fixed patrol path (ping-pong or loop) + lantern cone facing direction of travel; cone = 3-tile-long, 1-wide at start widening to 3 (Bresenham-style grid cells, blocked by walls/pillars).
- Variants unlocked progressively: stationary rotating guard (L6+), lantern-off timed guard (L12+), mirror tile reflecting cones (L20+), noisemaker pebble (L24+, tap tile within 2 to lure guard one step).
- Thief caught if its tile is lit after the guard phase, or a guard steps onto it.
- Undo: unlimited, steps back one full turn (state stack). Restart button.

## Controls (375x667)
- Swipe anywhere in 4 directions = step (min 24px, direction by dominant axis). Tap an adjacent tile = step there. Tap own tile = wait.
- Bottom bar (pinned, 64px+): UNDO, RESTART, and a step counter at top. Board scales to width: 6 cols x ~56px = 336px, 9 rows = 504px; header 56px + bottom bar 90px fits in 667 without scroll.
- Desktop: arrows/WASD, Z = undo, R = restart.

## Art
Near-black navy gradient + grain; lantern light via additive radial/cone gradients (`globalCompositeOperation='lighter'`), paper-cut silhouettes (thief teal, guards amber outline), soft vignette. Font: Fredoka or Cinzel (Google Fonts link). Juice: cone flicker, caught = red flash + screenshake, gem pickup particles, exit star-burst.

## Audio (WebAudio, no files)
Step tick (soft noise burst), gem chime (two-note arpeg), caught (low saw drop), clear fanfare (3 notes), ambient low drone toggleable.

## Data
Levels as ASCII arrays + guard path lists in JS. Progress/stars in localStorage (`lh_progress`). Level select = 5x6 grid of 64px buttons (30 levels).

## Build plan (~9 cycles)
1. Engine: grid, render, swipe input, state stack/undo, win/lose. Syntax check + render 375x667.
2. Guards + cone visibility (LOS, walls). Headless CDP test of a caught/clear path.
3. Gem/exit logic, step counter, stars, localStorage, level select screen.
4. Levels 1-10 (tutorial ramp), solver script (BFS over state) to verify solvable + compute par.
5. Levels 11-20 + lantern-off guards; solver verify.
6. Levels 21-30 + mirror/pebble; solver verify.
7. Visual pass: glow, grain, particles, shake.
8. Audio + hub card + README/CLAUDE.md tables.
9. CDP playtest all screens, push, verify live 200.

The BFS solver in step 4 is key: it guarantees every shipped level is solvable and gives honest par values.

# Next Game Concepts

Three original concepts, all single-file HTML, mobile-first (375x667 portrait), Web Audio SFX, no scrolling. Effort is in ~10-minute work cycles to a playable v1.

## A. Tide Pool Tapper (one-thumb arcade)
**Core loop:** Waves roll in from the top of a tide pool; tiny creatures (crabs, starfish, snails) get stranded on the sand. Tap a creature to flick it back into the water before the next wave drains the pool; each rescue builds a combo multiplier, and rare golden creatures give a shield. Waves speed up, decoys (urchins) punish careless taps.
**Mobile controls:** Tap targets only; large hit areas; optional swipe to flick into the water for bonus points.
**Look:** Warm sunset gradient, grain overlay, chunky rounded sprites drawn on canvas, water-ripple shader-ish effect via layered sine paths.
**Effort:** ~6 cycles.

## B. Lantern Heist (stealth puzzle, short levels)
**Core loop:** Grid-based mini-levels (6x9). You are a thief gliding between shadows; guards carry lanterns with rotating light cones. Move one step per swipe; guards move in lockstep, so each level is a turn-based puzzle: reach the gem, then the exit. 30 hand-tuned levels, star rating by step count.
**Mobile controls:** Swipe in 4 directions (or tap an adjacent tile); undo button at bottom.
**Look:** Near-black navy with warm lantern glow, light cones drawn with additive gradients, paper-cut silhouettes.
**Effort:** ~9 cycles (engine 3, levels 4, polish 2).

## C. Stack Rally (physics-lite endless runner)
**Core loop:** Your delivery cart carries a growing tower of crates down a winding road. Tilt the lane by dragging left/right to keep the stack balanced through curves and bumps; pick up crates for score, but a taller stack sways more. Drop the stack = game over. Daily seed for replay variety.
**Mobile controls:** Horizontal drag anywhere on screen; big pause button at bottom. Keyboard arrows on desktop.
**Look:** Low-poly Three.js (toon material, bloom), or 2D parallax if we want to stay lightweight.
**Effort:** ~8 cycles in 3D, ~5 in 2D.

## Recommendation
**A (Tide Pool Tapper)** — fastest to a fun v1, easiest touch input, and a good fit for the existing hub. B is the most original if you want a longer-lived game.

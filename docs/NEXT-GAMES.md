# Next Game Concepts

Five original concepts (A-C built; D-E new), all single-file HTML, mobile-first (375x667 portrait), Web Audio SFX, no scrolling. Effort is in ~10-minute work cycles to a playable v1.

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

## D. Moth Light (one-thumb flyer) — added 2026-11-13
**Core loop:** You are a moth drifting up a dark chimney. Hold the thumb anywhere to glide toward the nearest lamp; release to drop. Lamps give brief warmth (score + fuel), but burning-hot bulbs and spider threads punish hovering too long. Chain lamps without touching walls for a multiplier.
**Why it fits:** One-thumb hold/release, zero UI to read, short runs (30-60s), and it reuses the Lantern Heist glow/additive-light look so it feels like a sibling game.
**Effort:** ~5 cycles (physics+loop 2, hazards/combo 1, art+audio 1, polish/hub 1).

## E. Bubble Barista (one-thumb timing) — added 2026-11-13
**Core loop:** Orders slide in on a conveyor; each needs a drink poured to an exact line. Hold to pour, release to stop; overshoot spills and costs a heart. Streaks of perfect pours trigger rush hour (faster belt, double points). Daily menu seed like Stack Rally.
**Why it fits:** Pure press-and-release timing, instantly learnable, very colorful contrast to the dark games in the hub, and highly replayable via streaks.
**Effort:** ~5 cycles (pour/timing loop 2, orders+rush 1, juice+audio 1, hub/polish 1).

## Recommendation
A, B, C are built. Next pick: **D (Moth Light)** — most distinct feel, 5 cycles; E is the lighter, more colorful alternative.

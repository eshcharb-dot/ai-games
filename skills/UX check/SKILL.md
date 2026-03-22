---
name: mobile-responsive-qa
description: Enforce mobile-first responsive design and QA validation on every UI, HTML, or CSS change. Use this skill whenever the user is building a web app, game, landing page, or any browser-based UI — especially when they mention mobile, responsive, phone, viewport, screen size, layout issues, overflow, or anything looking broken or messy on smaller screens. Also trigger when the user asks to "make it look good on phone", "fix mobile layout", "test responsiveness", or creates/edits any HTML/CSS file that renders in a browser. Even if the user doesn't mention mobile, use this skill proactively on any UI task to ensure the output is responsive by default.
---

# Mobile Responsiveness QA

## Purpose

Ensure every UI output is fully responsive and mobile-friendly. This skill enforces a standard QA checklist after any layout, CSS, or HTML change — so nothing ships broken on mobile.

## When to use

- After ANY CSS, HTML layout, or canvas/SVG sizing change
- When building or editing any browser-based UI (games, apps, pages, dashboards)
- When the user reports something looks wrong on mobile
- Proactively on every UI task, even if the user only tests on desktop

## Pre-build: Responsive foundations

Before writing or editing any UI code, verify these foundations are in place:

### Viewport meta tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

### Base CSS reset
```css
*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
}
```

### Relative units only
- **Never** use fixed `px` for widths, heights, padding, or margins on containers
- Use `%`, `vw`, `vh`, `rem`, `em`, `dvh` (dynamic viewport height for mobile browsers)
- Use `clamp()` for font sizes: `font-size: clamp(14px, 4vw, 24px)`
- Use `max-width` + `width: 100%` instead of fixed widths

### Layout
- Use **flexbox** or **CSS grid** — never floats or absolute positioning for layout
- Stack elements vertically on narrow screens, side-by-side on wider ones
- Use `gap` instead of margin hacks for spacing between flex/grid children

### Touch targets
- All buttons and interactive elements: minimum **44×44px** tap area
- Add `touch-action: manipulation` to prevent double-tap zoom delay
- If hover effects exist, add touch/click equivalents

### Safe areas (notched phones)
```css
.app-container {
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}
```

### Canvas/game area (if applicable)
- Canvas must scale proportionally to viewport while maintaining aspect ratio
- Use JS to dynamically resize on load, resize, and orientation change:
```js
function resizeCanvas() {
  const container = canvas.parentElement;
  const ratio = canvas.height / canvas.width;
  canvas.style.width = '100%';
  canvas.style.height = 'auto';
  canvas.width = container.clientWidth * window.devicePixelRatio;
  canvas.height = canvas.width * ratio;
  const ctx = canvas.getContext('2d');
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}
window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);
resizeCanvas();
```

## Post-build: QA checklist

After every UI change, validate against these breakpoints:

| Breakpoint | Device reference        | Width  |
|------------|------------------------|--------|
| XS         | iPhone SE              | 375px  |
| S          | iPhone 14              | 390px  |
| M          | iPhone Plus / Max      | 414px  |
| Tablet     | iPad Mini / iPad       | 768px  |
| Desktop    | Laptop                 | 1024px |

### At each breakpoint, verify:

1. **No horizontal overflow** — nothing scrolls sideways, no content bleeds off-screen
2. **No overlapping elements** — all UI elements have proper spacing and don't stack on top of each other
3. **No clipped content** — text, buttons, images are fully visible, not cut off
4. **Text is readable** — no text smaller than 14px on mobile, sufficient contrast, no text running off-edge
5. **Tap targets are 44×44px minimum** — buttons, links, interactive elements are finger-friendly
6. **Portrait AND landscape work** — test both orientations, layout adapts correctly
7. **Images/media scale** — no images wider than their container, use `max-width: 100%; height: auto;`
8. **Modals/popups fit** — any overlay content is scrollable and doesn't exceed viewport
9. **Inputs are usable** — form fields don't zoom the page on focus (font-size >= 16px on inputs for iOS)
10. **Performance is smooth** — no janky scroll, no layout thrashing on resize

### Media query reference

```css
/* Mobile first — base styles are for smallest screens */

/* Small phones → larger phones */
@media (min-width: 414px) { }

/* Phones → tablets */
@media (min-width: 768px) { }

/* Tablets → desktop */
@media (min-width: 1024px) { }

/* Large desktop */
@media (min-width: 1440px) { }
```

## Rules

- **Mobile-first always.** Write base CSS for the smallest screen, then add complexity with `min-width` media queries.
- **Do not consider any UI task complete until all breakpoints pass the checklist above.**
- **Fix before moving on.** If any breakpoint fails, fix it immediately — don't leave it for later.
- **Do NOT change game logic or functionality** when applying responsive fixes. Only touch layout, styling, sizing, and responsiveness.
- **Test after every change**, not just at the end. Small CSS tweaks can cascade into layout breaks at other breakpoints.

## Common mobile pitfalls to watch for

- `100vh` on mobile Safari doesn't account for the URL bar — use `100dvh` or JS fallback
- iOS auto-zooms on input focus if font-size < 16px
- Fixed position elements can behave unexpectedly on mobile keyboards
- `gap` in flexbox has near-universal support now, but verify if targeting very old browsers
- Landscape mode on phones gives very little vertical space — make sure critical UI isn't vertically overflowing
- Images without `max-width: 100%` will break layouts instantly
- Nested scrollable areas (scroll inside scroll) create terrible UX on touch devices

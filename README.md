# Rabia Ramzan Portfolio

The production page is [badgefolio-website-clone.html](./badgefolio-website-clone.html). It keeps the existing Badgefolio-inspired visual system and interactions while presenting Rabia Ramzan’s graphic and UI/UX portfolio. The page is framework-free: markup, CSS, and interaction logic live in that file.

## Run locally

```bash
npm install
npm run dev
```

The development server opens `badgefolio-website-clone.html` directly.

## Structure

- **Hero:** Sticky gradient stage, Rabia’s hanging draggable ID badge, scroll transition, and fixed top-panel navigation.
- **Content:** About, service rows, Experience, a single approved client quote, Selected Work, a 52-image More Work gallery, Contact, and the original “Let’s talk.” footer with its second badge.
- **Assets:** Local Rabia source images are in [`assets/rabia`](./assets/rabia), including the portrait, four featured projects, and the 52 lazy-loaded gallery images.
- **Interactions:** A single Lenis instance is bootstrapped asynchronously from the document head, so native scrolling responds immediately while the CDN loads. Once ready, Lenis drives wheel, keyboard, anchors, and viewport-triggered animation; touch keeps its native momentum. It pauses while either badge is dragged and resumes through every release/cancel path.
- **Responsive behavior:** CSS breakpoints cover desktop, tablet, and narrow mobile layouts; `prefers-reduced-motion` disables animation and leaves all content visible.

## Fonts and external dependency

The page loads **Anton**, **Archivo**, and **Playfair Display** from Google Fonts. Lenis is loaded from its CDN as a progressive enhancement; immediate native scrolling remains available if it is unavailable.

## Editing

The top of the `<style>` block contains color, typography, spacing, responsive, and badge tokens. The inline script is organized into sections for Lenis scrolling, scroll reveals, hero-badge physics, menu controls, contact validation, and portfolio behavior.

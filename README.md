# Anidu Yakubu Khalid — Portfolio

A cinematic developer portfolio built with **SvelteKit · Three.js · GSAP-grade motion**.
Submission for HNG Stage 5b (Frontend Wizards).

> **Live URL:** _add after deploy_ · **Repo:** https://github.com/AY-Khalid

---

## What you'll see

1. **Full-screen splash** matching the reference brief — vertical `CONNECTING` typography, a
   half-face B&W portrait composition, accent stripe stack labeling each capability, signature
   monogram, contact line. Single CTA: **Enter portfolio**.
2. **3D slide-in transition** — the splash rotates out along Y (perspective 1400px, ~22°) and
   the main portfolio panel rotates in from the opposite side, blurred → crisp, ~1.1s.
3. **Three.js hero** — wireframe torus knot + accent icosahedron + drifting particle field with
   pointer parallax. Theme-aware (recolors on dark/light toggle).
4. **About · Stack · Projects · Credentials · Contact** — staggered reveals, project filters,
   case-detail modals, magnetic CTAs, parallax tilt on project cards.

## Setup

```bash
# 1. Install
npm install

# 2. Drop your photo
#    Add a forward-facing portrait here (jpg or png, square-ish, ≥1200px):
#       static/portrait.jpg
#    The splash composition expects a left-half/centered face — same framing as the brief image.

# 3. Run
npm run dev

# 4. Build for production
npm run build
npm run preview
```

### Where to put your picture
- File path: **`static/portrait.jpg`** (lowercase, exact name)
- Recommended: 1200×1500px or larger, face centered slightly left of frame, plain background
- It will be auto-grayscale + clipped to the "D" silhouette in the splash

---

## Architecture

```
src/
├── app.html               # Theme bootstrap (no FOUC), font preload, skip link
├── app.css                # Design tokens, type, motion primitives, reduced-motion
├── routes/
│   ├── +layout.svelte     # Global styles + prerender entry
│   ├── +layout.ts         # prerender = true, SSR + static export
│   └── +page.svelte       # Splash ↔ Portfolio choreography (3D slide-in)
└── lib/
    ├── projects.ts        # Curated project + repo data
    ├── theme.ts           # Persisted dark/light store
    ├── motion.ts          # reveal / magnetic / tilt Svelte actions + reduced-motion
    └── components/
        ├── SplashScreen.svelte     # Entry — image-faithful composition
        ├── SplashStripes.svelte    # Accent capability bars
        ├── PortraitMask.svelte     # Half-face clip + gold signature ring
        ├── ThreeHero.svelte        # WebGL scene (theme-aware, parallax)
        ├── Header.svelte           # Glass nav + theme toggle
        ├── Hero.svelte             # Above-the-fold portfolio hero
        ├── Marquee.svelte          # Capability ticker
        ├── About / Stack / Projects / Credentials / Contact / Footer
        └── PortfolioApp.svelte     # Composition of the entered experience
```

### Why SvelteKit + adapter-static
The portfolio prerenders to static HTML for instant first paint and zero server cost.
Three.js + GSAP-style motion are dynamic-imported so the splash itself stays lean.

### Component composition
- **Actions over wrappers** — `reveal`, `magnetic`, `tilt` are tiny imperative Svelte actions
  that attach IntersectionObserver / pointer listeners directly to elements. Zero re-renders,
  zero virtual DOM cost, fully tree-shakeable.
- **State** — `$state` / `$effect` runes for splash → portfolio handoff; one `theme` store.
- **Styling** — Tailwind for tokens + layout; component-scoped `<style>` blocks for keyframes
  and clip-path artistry that don't belong in utility classes.

---

## Animation decisions

| Concern | Decision |
|---|---|
| Splash exit | CSS `transition` on `transform/opacity/filter` with a 3D rotateY — GPU-only, 60fps. |
| Portfolio entry | `@keyframes slideIn3D` with `perspective(1400px)` rotateY + blur ramp. |
| Section reveals | IntersectionObserver action (`reveal`) — fires once, then disconnects. Cheap. |
| 3D scene | Three.js `requestAnimationFrame` loop, capped DPR at 2, fog at z=22. |
| Stripe bars | Staggered keyframe `stripeIn` with skew + translate — feels engineered, not generic. |
| Card hover | `tilt` action — pointer-driven `rotateX/Y` with `preserve-3d`. |
| Marquee | Pure CSS keyframe (`marquee-track`). No JS, no jank. |
| Reduced motion | Global override disables all keyframes; Three.js drops particle count + freezes spin. |

---

## Performance

- **Static export** — `@sveltejs/adapter-static`, prerender = true. Deploy to Vercel / Netlify /
  Cloudflare Pages as a static site.
- **Code splitting** — `three` and `gsap` are in their own Rollup chunks (see `vite.config.ts`).
- **Lazy WebGL** — `import('three')` inside `onMount`, so SSR never touches it and the splash
  ships without the 3D bundle.
- **DPR clamp** — `renderer.setPixelRatio(Math.min(devicePixelRatio, 2))` — protects retina.
- **Fonts** — single Google Fonts request with `display=swap`; preconnect already done.
- **Theme bootstrap** — inline `<script>` in `app.html` sets the `.dark` class _before_ paint
  using `localStorage` + `prefers-color-scheme`. No FOUC.
- **Manual chunks** — three.js (~580KB gzipped) is its own chunk so the splash + landing copy
  paint before WebGL hydrates.

---

## Accessibility

- Skip-to-content link, semantic landmarks (`header`, `main`, `section`, `footer`, `article`).
- Visible focus rings via `:focus-visible` with `outline-offset: 3px`.
- Keyboard: Enter / Space activates the splash CTA; all controls reachable via Tab.
- Form: associated `<label for>`, `aria-modal` on the case-detail dialog, `role="alert"` for
  validation errors, `role="status"` for sent confirmation.
- Color contrast: cream `#FBF6EC` / ink `#0B0B0B` is 19.4:1. Dark mode mirrors at the same
  ratio. Accent text on stripes uses cream on saturated mid-tones to clear AAA on the dark
  side (stone uses ink so contrast holds).
- Reduced motion: respected globally + within the Three.js loop (lower particle count, no spin).
- All decorative SVGs are `aria-hidden`; image alt on the portrait references the subject.

---

## Theme support

- **Dark / light** with persisted preference (`localStorage: ayk-theme`) and
  `prefers-color-scheme` fallback. Toggle is in the header.
- Three.js scene re-themes live via a `MutationObserver` on `<html>` class changes — wireframe
  + particles flip to ink/cream while the accent stays lime.

---

## Security & stability

- Contact form sanitizes `<>` from inputs and clamps length client-side; submission opens a
  `mailto:` so no API key is shipped and no backend can leak.
- All external links use `target="_blank" rel="noopener"`.
- No secrets, no env vars required to build.
- Image load failure is handled gracefully (placeholder ink card with the path hint).
- Modal open locks body scroll and restores on close (no scroll-lock leak).

---

## Trade-offs

- **No CMS / MDX for case studies** — the project set is small and stable enough to live in
  `projects.ts`. Trade: editing requires a redeploy. Worth it for the static + prerender win.
- **mailto over a serverless email backend** — keeps the site zero-config to deploy and avoids
  rate-limit/abuse surface. If a contact backend is needed later, swap `submit()` to POST.
- **Three.js over a shader file** — kept the GLSL inline-friendly with built-in materials so
  the bundle stays in the 580KB ballpark instead of pulling glslify + raw GLSL.
- **No router-level animation library** — used native Svelte transitions + actions to keep
  bundle small. GSAP is reserved for the curtain transition if you want to upgrade later.

---

## Deploy

### Vercel
```bash
# zero config — `adapter-static` produces `build/`
npx vercel --prod
```

### Netlify
1. Push to GitHub
2. Connect repo on Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Cloudflare Pages
- Framework preset: SvelteKit
- Build: `npm run build`
- Output: `build`

---

## License

MIT — content is mine, code is yours to learn from.

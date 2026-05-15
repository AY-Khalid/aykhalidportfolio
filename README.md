# My portfolio

This is the portfolio I built for HNG 2026 Stage 5b. It's a SvelteKit site with a splash
entry screen, a Three.js hero, and the usual about, work, and contact sections, but
done in a neumorphic style.

It lives at the URL in my submission form (also pinned on my GitHub profile).

## What's in here

The two halves of the site:

1. A full-screen splash page that takes its cues from a design poster I love. There's
   a big "CONNECTING" wordmark, a half-portrait of me, and a stack of coloured stripes
   labeling what I do.
2. The main portfolio. You get to it by clicking "Enter portfolio" on the splash. It
   does a 3D rotate transition so the splash flips out of view and the portfolio flips
   in.

The portfolio itself has:

- A Three.js hero with a wireframe knot, a floating icosahedron, and a drifting particle
  field. It reacts to your cursor and re-colors when you flip the theme.
- An about section, a stack section, a projects section with filtering and a screenshot
  carousel inside each project's detail modal, certifications, a contact form, and a
  footer.
- Light/dark theme toggle. It remembers your choice.

## Getting it running

You need Node 20+ and npm.

```bash
npm install
npm run dev
```

That starts the dev server at `http://localhost:5173`.

To build for production:

```bash
npm run build
```

Output goes to `build/`. The adapter is `@sveltejs/adapter-netlify` so this deploys
straight to Netlify with no extra config.

## Where to put your photo

The splash uses a transparent PNG of me at `static/portrait.png`. If you don't have a
PNG, drop a JPG with a clean white background at `static/portrait.jpg` and the splash
will blend the white out automatically using `mix-blend-mode: multiply`.

The image renders as block content with no padding or margin so its edges land directly
on the cream background.

## Where to put project screenshots

Each project has its own folder under `static/projects/<slug>/`. Drop your images in
there as `1.png`, `2.png`, etc. The first image becomes the card thumbnail, the rest
appear in the modal as a swipeable carousel.

```
static/projects/
├── docagent/
│   ├── 1.png      ← thumbnail
│   └── 2.png
├── accessible-finance/
│   └── 1.png
└── ...
```

If a project doesn't have a screenshot yet, the card falls back to a clean coloured panel
with the project's first letter. No broken image icons.

To add a new project, edit `src/lib/projects.ts` and add an entry. The `slug` field has
to match the folder name in `static/projects/`.

## Project structure

```
src/
├── app.html                Theme bootstrap, fonts, skip link
├── app.css                 Tailwind base + neumorphism design system
├── routes/
│   ├── +layout.svelte
│   ├── +layout.ts          prerender = true, SSR + static export
│   └── +page.svelte        Splash → portfolio handoff
└── lib/
    ├── projects.ts         Project data (descriptions, repos, screenshots)
    ├── theme.ts            Dark/light store with localStorage persistence
    ├── motion.ts           reveal / magnetic / tilt Svelte actions
    └── components/
        ├── SplashScreen.svelte
        ├── SplashStripes.svelte
        ├── PortraitMask.svelte
        ├── ThreeHero.svelte
        ├── Header.svelte
        ├── Hero.svelte
        ├── Marquee.svelte
        ├── About.svelte
        ├── Stack.svelte
        ├── Projects.svelte
        ├── Credentials.svelte
        ├── Contact.svelte
        ├── Footer.svelte
        └── PortfolioApp.svelte
```

## A few decisions worth flagging

**Why SvelteKit.** It was the brief, but it was also the right tool. The site prerenders
to static HTML so the first paint is instant.

**The neumorphism design system.** Everything elevated, recessed, or interactive uses one
of four utility classes: `.neo-raised`, `.neo-inset`, `.solid-cta`, or `.btn-outline`.
They use dual-light shadows that re-themes correctly in dark mode.

**Animations.** I used CSS keyframes and a tiny `reveal` action backed by
IntersectionObserver. No animation library running on every scroll event. The 3D slide-in
transition between splash and portfolio is pure CSS with `perspective` and `rotateY`.

**Three.js bundle.** Three is loaded inside `onMount` so the splash itself ships without
any of it. The renderer caps device pixel ratio at 2, so retina displays don't get
murdered by 4x fragment work.

**Reduced motion.** Global override disables all keyframes and pauses the Three.js spin
when `prefers-reduced-motion: reduce` is set.

**No backend.** The contact form opens the visitor's mail client via `mailto:`. No API
keys, no rate-limiting service, no leak surface.

## Accessibility

- Skip-to-content link at the top
- Semantic landmarks: header, main, section, footer, article
- All interactive elements reachable by keyboard
- Visible focus rings via `:focus-visible`
- Form fields are labelled, validation errors use `role="alert"`, success state uses `role="status"`
- The case detail modal uses `aria-modal` and traps body scroll
- All decorative SVGs are marked `aria-hidden`

## Performance

- Static site export via `adapter-netlify`
- GSAP is in its own Rollup chunk (see `vite.config.ts`)
- Three.js is lazy-imported inside `onMount`
- Fonts are preconnected and loaded with `display=swap`
- Theme bootstraps in a tiny inline script before paint so there's no flash
- Images use `loading="lazy"` and `decoding="async"`

## Stack

- SvelteKit (Svelte 5 with runes)
- TypeScript
- Tailwind CSS
- Three.js for the hero scene
- GSAP for some motion bits
- Adapter: `@sveltejs/adapter-netlify`

## Links

- Live site: in the submission form
- My GitHub: https://github.com/AY-Khalid
- My email: aniduyakubu@gmail.com
- My LinkedIn: https://www.linkedin.com/in/anidu-yakubu-khalid-ab977821b/

## License

MIT. Use whatever's useful here.

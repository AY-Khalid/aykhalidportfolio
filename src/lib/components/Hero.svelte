<script lang="ts">
	import ThreeHero from './ThreeHero.svelte';
	import { reveal, magnetic } from '$lib/motion';
</script>

<section id="top" class="relative min-h-[100svh] overflow-hidden">
	<!-- Three.js canvas underlay -->
	<div class="absolute inset-0 opacity-70 dark:opacity-90">
		<ThreeHero />
	</div>

	<!-- Soft vignette to land back on cream -->
	<div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at center, transparent 0%, var(--neo-bg) 75%)"></div>

	<div class="relative z-10 max-w-[1040px] mx-auto px-5 md:px-8 pt-36 md:pt-40 pb-24 min-h-[100svh] flex flex-col justify-between">
		<div>
			<div use:reveal class="neo-pill inline-flex">
				<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
				<span class="text-[10px] tracking-[0.22em] uppercase">Open to remote work</span>
			</div>

			<h1 use:reveal={{ delay: 80 }} class="mt-6 font-display text-[clamp(2.6rem,8vw,7rem)] leading-[0.92] tracking-tight">
				Anidu Yakubu<br/>
				<span class="opacity-50">Khalid<span style="color:#A8D958">.</span></span>
			</h1>

			<p use:reveal={{ delay: 180 }} class="mt-6 md:mt-8 max-w-2xl text-base md:text-xl leading-relaxed opacity-80">
				I'm a frontend engineer based in Nigeria. Three years working remotely, currently
				in the HNG cohort, mostly building with Svelte, Next.js, and Three.js. I cross over
				into ML and data work when the problem actually needs it.
			</p>

			<div use:reveal={{ delay: 260 }} class="mt-9 flex flex-wrap items-center gap-4">
				<a use:magnetic={0.2} href="#work" class="solid-cta inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold" data-cursor="hover">
					See my work
					<span aria-hidden="true">↓</span>
				</a>
				<a href="#contact" class="btn-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold">
					Say hi
				</a>
				<a href="/resume.pdf" download class="text-sm underline underline-offset-4 hover:text-accent-sky ml-1">Grab my CV</a>
			</div>

			<div use:reveal={{ delay: 340 }} class="mt-10 flex flex-wrap items-center gap-3 text-sm">
				<a href="https://github.com/AY-Khalid" target="_blank" rel="noopener" class="neo-pill">
					<svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
					GitHub
				</a>
				<a href="https://www.linkedin.com/in/anidu-yakubu-khalid-ab977821b/" target="_blank" rel="noopener" class="neo-pill">
					<svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="currentColor"><path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 12.3h-3v-5.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7h-3v-11h2.9v1.5c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7v6.5z"/></svg>
					LinkedIn
				</a>
				<a href="mailto:aniduyakubu@gmail.com" class="neo-pill">
					<svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
					Email
				</a>
			</div>
		</div>

		<div use:reveal={{ delay: 500 }} class="mt-12 flex items-end justify-between">
			<div class="hidden md:flex items-center gap-3">
				<div class="neo-inset-sm w-9 h-9 rounded-full grid place-items-center">
					<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
				</div>
				<span class="text-[10px] tracking-[0.3em] uppercase opacity-60">Scroll</span>
			</div>
			<div class="ml-auto text-right text-[10px] tracking-[0.2em] uppercase opacity-60 leading-relaxed">
				<div>Nigeria, WAT (UTC+1)</div>
				<div>Working US/EU hours</div>
			</div>
		</div>
	</div>
</section>

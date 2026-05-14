<script lang="ts">
	import SplashStripes from './SplashStripes.svelte';
	import PortraitMask from './PortraitMask.svelte';
	import { magnetic } from '$lib/motion';

	let { onenter }: { onenter: () => void } = $props();
	let leaving = $state(false);

	function enter() {
		if (leaving) return;
		leaving = true;
		// Wait for the 3D slide-out animation, then notify parent.
		setTimeout(() => onenter(), 1100);
	}

	function onKey(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			enter();
		}
	}
</script>

<div
	class="splash relative w-full min-h-screen overflow-hidden grain bg-cream-50 dark:bg-cream-50 text-ink-900"
	class:leaving
	aria-hidden={leaving}
>
	<!-- Top-left back chevron (decorative — matches reference image) -->
	<div class="absolute top-5 left-5 md:top-7 md:left-7 z-20">
		<div class="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-cream-100 shadow-md flex items-center justify-center">
			<svg viewBox="0 0 24 24" class="w-6 h-6 text-ink-900" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="15 18 9 12 15 6"/>
			</svg>
		</div>
	</div>

	<!-- Top-right meta -->
	<div class="hidden md:flex absolute top-7 right-7 z-20 items-center gap-3 text-xs tracking-[0.18em] text-ink-500">
		<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
		<span>AVAILABLE · REMOTE WORLDWIDE</span>
	</div>

	<!-- Main composition grid -->
	<div class="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-5 md:px-10 pt-24 md:pt-20 pb-28 min-h-screen">
		<div class="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6 items-center min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-12rem)]">

			<!-- LEFT: Vertical CONNECTING column -->
			<div class="col-span-3 md:col-span-2 flex justify-end pr-1 md:pr-2 self-stretch lg:z-20 lg:absolute lg:left-[16%] lg:top-1/2 lg:-translate-y-1/2 lg:h-[70%] lg:self-auto">
				<div class="flex items-center gap-1 md:gap-3 h-full">
					<!-- Tiny sublabel running vertically -->
					<div class="vtext text-[8px] sm:text-[9px] md:text-[11px] tracking-[0.35em] sm:tracking-[0.45em] text-ink-500 uppercase whitespace-nowrap font-medium">
						Designing my platforms on the internet
					</div>
					<!-- Huge CONNECTING word -->
					<div class="vtext font-display text-[clamp(2rem,7vw,5.6rem)] leading-none text-ink-900 whitespace-nowrap">
						CONNECTING
					</div>
					<!-- Smaller subline -->
					<div class="vtext text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-ink-700 uppercase whitespace-nowrap font-semibold">
						AY · Khalid
					</div>
				</div>
			</div>

			<!-- CENTER: Portrait composition -->
			<div class="col-span-5 md:col-span-5 relative aspect-[3/4] md:aspect-[4/5]">
				<PortraitMask />
			</div>

			<!-- RIGHT: Stripe stack -->
			<div class="col-span-4 md:col-span-5 pl-0.5 sm:pl-1 md:pl-2">
				<SplashStripes />
			</div>
		</div>

		<!-- Bottom row: phone + signature mark + CTA -->
		<div class="relative mt-6 md:mt-2 grid grid-cols-12 gap-3 md:gap-4 items-end">
			<div class="col-span-12 md:col-span-5 md:col-start-4 flex items-center gap-2 md:gap-3">
				<div class="w-3 h-3 bg-ink-900 shrink-0"></div>
				<a href="tel:+2348209001050" class="font-mono text-xs sm:text-sm md:text-base tracking-wider hover:underline">
					+234 8160 170 296
				</a>
			</div>
			<div class="col-span-12 md:col-span-3 md:col-start-10 flex justify-start md:justify-end items-center gap-2">
				<!-- Signature mark — a stylized monogram badge -->
				<div class="flex items-center gap-2">
					<div class="relative w-11 h-11 md:w-12 md:h-12 rounded-full bg-cream-100 border border-ink-900/10 flex items-center justify-center">
						<div class="font-display text-ink-900 text-base md:text-lg">AYK</div>
						<div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-lime"></div>
					</div>
					<div class="leading-tight">
						<div class="font-display text-sm">Anidu</div>
						<div class="text-[10px] tracking-[0.25em] text-ink-500">YAKUBU · KHALID</div>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA — inline on mobile, absolutely positioned on md+ to sit at bottom center -->
		<div class="mt-8 flex flex-col items-center md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-10 md:mt-0 z-30">
			<button
				type="button"
				use:magnetic={0.25}
				onclick={enter}
				onkeydown={onKey}
				class="group inline-flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-ink-900 text-cream-50 font-medium tracking-wide shadow-xl hover:shadow-2xl transition-shadow"
				aria-label="Enter portfolio"
				data-cursor="hover"
			>
				<span class="text-sm md:text-base">Enter portfolio</span>
				<span class="relative w-6 h-6 rounded-full bg-cream-50 text-ink-900 flex items-center justify-center transition-transform group-hover:translate-x-1">
					<svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
						<line x1="5" y1="12" x2="19" y2="12"/>
						<polyline points="12 5 19 12 12 19"/>
					</svg>
				</span>
			</button>
			<p class="mt-2 text-center text-[10px] tracking-[0.35em] text-ink-500 uppercase">Press Enter or click</p>
		</div>
	</div>

	<!-- Decorative bottom-left rule like the reference -->
	<div class="hidden md:block absolute bottom-10 left-10 z-0 w-40 h-px bg-ink-900/15"></div>
</div>

<style>
	.splash {
		transform-origin: center center;
		transition:
			transform 1s cubic-bezier(.7, .0, .2, 1),
			opacity .9s ease,
			filter .9s ease;
	}
	.splash.leaving {
		transform: perspective(1400px) rotateY(-22deg) translateZ(-300px) translateX(-12vw) scale(0.92);
		opacity: 0;
		filter: blur(6px);
		pointer-events: none;
	}
	@media (prefers-reduced-motion: reduce) {
		.splash { transition: opacity .3s ease; }
		.splash.leaving { transform: none; filter: none; }
	}
</style>

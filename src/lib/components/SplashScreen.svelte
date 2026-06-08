<script lang="ts">
	import SplashStripes from './SplashStripes.svelte';
	import PortraitMask from './PortraitMask.svelte';
	import { magnetic } from '$lib/motion';

	let { onenter }: { onenter: () => void } = $props();
	let leaving = $state(false);

	function enter() {
		if (leaving) return;
		leaving = true;
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
	class="splash relative w-full min-h-[100svh] overflow-hidden grain bg-cream-50 dark:bg-cream-50 text-ink-900"
	class:leaving
	aria-hidden={leaving}
>
	<!-- Top chrome (back chevron + status) -->
	<div class="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-7 md:left-7 z-40">
		<div class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-cream-100 shadow-md flex items-center justify-center">
			<svg viewBox="0 0 24 24" class="w-5 h-5 md:w-6 md:h-6 text-ink-900" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="15 18 9 12 15 6"/>
			</svg>
		</div>
	</div>

	<div class="hidden sm:flex absolute top-5 right-5 md:top-7 md:right-7 z-40 items-center gap-2 md:gap-3 text-[10px] md:text-xs tracking-[0.18em] text-ink-500">
		<span class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
		<span>OPEN TO WORK</span>
	</div>

	<!-- ═══════════════════════════════════════════════════════════════
	     MOBILE LAYOUT (< lg)
	     Vertical flow. Portrait dominates the upper half; CONNECTING
	     runs vertically along its left flank; stripes flow below at a
	     comfortable read size; meta row at the bottom.
	     ═══════════════════════════════════════════════════════════════ -->
	<div class="lg:hidden relative z-10 mx-auto w-full px-4 sm:px-6 pt-16 sm:pt-20 pb-[7.5rem] min-h-[100svh] flex flex-col">

		<!-- HERO BLOCK: portrait + vertical CONNECTING -->
		<div class="relative w-full mt-2 sm:mt-4 mx-auto max-w-md">
			<div class="flex items-stretch gap-2 sm:gap-3">
				<!-- Vertical CONNECTING column, flush against the portrait left edge -->
				<div class="flex items-center shrink-0 py-2">
					<div class="flex items-stretch gap-0.5 sm:gap-1.5">
						<div class="vtext text-[7px] sm:text-[8px] tracking-[0.35em] text-ink-500 uppercase whitespace-nowrap font-medium self-center">
							Designing my platforms on the internet
						</div>
						<div class="vtext font-display text-[clamp(2.4rem,11vw,3.6rem)] leading-none text-ink-900 whitespace-nowrap self-center">
							CONNECTING
						</div>
						<div class="vtext text-[7px] sm:text-[9px] tracking-[0.3em] text-ink-700 uppercase whitespace-nowrap font-semibold self-center">
							AY · Khalid
						</div>
					</div>
				</div>

				<!-- Portrait fills remaining width, keeps a portrait aspect -->
				<div class="relative flex-1 aspect-[3/4]">
					<PortraitMask />
				</div>
			</div>
		</div>

		<!-- STRIPE BLOCK: full width, comfortable read size -->
		<div class="relative mt-6 sm:mt-8 w-full mx-auto max-w-md">
			<SplashStripes />
		</div>

		<!-- META ROW: phone + AYK badge — fixed at bottom-ish -->
		<div class="relative mt-auto pt-8 flex items-center justify-between gap-4">
			<div class="flex items-center gap-2 min-w-0">
				<div class="w-2.5 h-2.5 bg-ink-900 shrink-0"></div>
				<a href="tel:+2348160170296" class="font-mono text-[11px] sm:text-xs tracking-wider hover:underline truncate">
					+234 8160 170 296
				</a>
			</div>
			<div class="flex items-center gap-2 shrink-0">
				<div class="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cream-100 border border-ink-900/10 flex items-center justify-center">
					<div class="font-display text-ink-900 text-xs sm:text-sm">AYK</div>
					<div class="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent-lime"></div>
				</div>
				<div class="leading-tight">
					<div class="font-display text-xs sm:text-sm">Anidu</div>
					<div class="text-[8px] sm:text-[9px] tracking-[0.22em] text-ink-500">YAKUBU · KHALID</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Sticky CTA on mobile -->
	<div class="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
		<button
			type="button"
			use:magnetic={0.25}
			onclick={enter}
			onkeydown={onKey}
			class="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ink-900 text-cream-50 font-medium tracking-wide shadow-2xl"
			aria-label="Enter portfolio"
			data-cursor="hover"
		>
			<span class="text-sm">Enter portfolio</span>
			<span class="relative w-6 h-6 rounded-full bg-cream-50 text-ink-900 flex items-center justify-center transition-transform group-hover:translate-x-1">
				<svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
					<line x1="5" y1="12" x2="19" y2="12"/>
					<polyline points="12 5 19 12 12 19"/>
				</svg>
			</span>
		</button>
	</div>

	<!-- ═══════════════════════════════════════════════════════════════
	     DESKTOP LAYOUT (lg+)
	     The original horizontal composition with CONNECTING absolutely
	     positioned, portrait centered, stripes flowing right.
	     ═══════════════════════════════════════════════════════════════ -->
	<div class="hidden lg:block relative z-10 max-w-[1280px] mx-auto px-10 pt-20 pb-28 min-h-screen">
		<div class="grid grid-cols-12 gap-6 items-center min-h-[calc(100vh-12rem)]">

			<!-- LEFT: Vertical CONNECTING column (absolute on lg+) -->
			<div class="col-span-2 flex justify-end pr-2 self-stretch z-20 absolute left-[16%] top-1/2 -translate-y-1/2 h-[70%] self-auto">
				<div class="flex items-center gap-3 h-full">
					<div class="vtext text-[11px] tracking-[0.45em] text-ink-500 uppercase whitespace-nowrap font-medium">
						Designing my platforms on the internet
					</div>
					<div class="vtext font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-none text-ink-900 whitespace-nowrap">
						CONNECTING
					</div>
					<div class="vtext text-xs tracking-[0.4em] text-ink-700 uppercase whitespace-nowrap font-semibold">
						AY · Khalid
					</div>
				</div>
			</div>

			<!-- CENTER: Portrait -->
			<div class="col-span-5 relative aspect-[4/5]">
				<PortraitMask />
			</div>

			<!-- RIGHT: Stripe stack -->
			<div class="col-span-5 pl-2">
				<SplashStripes />
			</div>
		</div>

		<!-- Bottom row: phone + signature mark -->
		<div class="relative mt-2 grid grid-cols-12 gap-4 items-end">
			<div class="col-span-5 col-start-4 flex items-center gap-3">
				<div class="w-3 h-3 bg-ink-900 shrink-0"></div>
				<a href="tel:+2348160170296" class="font-mono text-base tracking-wider hover:underline">
					+234 8160 170 296
				</a>
			</div>
			<div class="col-span-3 col-start-10 flex justify-end items-center gap-2">
				<div class="flex items-center gap-2">
					<div class="relative w-12 h-12 rounded-full bg-cream-100 border border-ink-900/10 flex items-center justify-center">
						<div class="font-display text-ink-900 text-lg">AYK</div>
						<div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-lime"></div>
					</div>
					<div class="leading-tight">
						<div class="font-display text-sm">Anidu</div>
						<div class="text-[10px] tracking-[0.25em] text-ink-500">YAKUBU · KHALID</div>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA at bottom center (desktop) -->
		<div class="absolute left-1/2 -translate-x-1/2 bottom-10 z-30 flex flex-col items-center">
			<button
				type="button"
				use:magnetic={0.25}
				onclick={enter}
				onkeydown={onKey}
				class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ink-900 text-cream-50 font-medium tracking-wide shadow-xl hover:shadow-2xl transition-shadow"
				aria-label="Enter portfolio"
				data-cursor="hover"
			>
				<span class="text-base">Enter portfolio</span>
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

	<div class="hidden lg:block absolute bottom-10 left-10 z-0 w-40 h-px bg-ink-900/15"></div>
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

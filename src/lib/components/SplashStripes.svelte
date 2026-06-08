<script lang="ts">
	type Stripe = { label: string; color: string; w: string };
	const stripes: Stripe[] = [
		{ label: 'FRONTEND ENGINEER',    color: '#A8D958', w: '100%' },
		{ label: 'SVELTE · SVELTEKIT',   color: '#2E8FB8', w: '94%'  },
		{ label: 'THREE.JS · WEBGL',     color: '#E89A3C', w: '88%'  },
		{ label: 'TYPESCRIPT · NEXT.JS', color: '#C9C4BC', w: '82%'  },
		{ label: 'ML / AI · PYTHON',     color: '#7A5236', w: '76%'  }
	];
</script>

<div class="flex flex-col items-end text-end gap-2 sm:gap-2.5 md:gap-4 w-full relative z-0">
	{#each stripes as s, i}
		<div
			class="stripe-bar stripe-pad stripe-shape text-xs sm:text-sm md:text-base lg:text-lg"
			style="
				--stripe-w: {s.w};
				--stripe-color: {s.color};
				--stripe-text-color: {s.color === '#C9C4BC' ? '#15161A' : '#FBF6EC'};
				--delay: {0.6 + i * 0.12}s;
			"
		>
			<span class="block tracking-[0.12em] sm:tracking-[0.16em] md:tracking-[0.22em] font-bold whitespace-nowrap">{s.label}</span>
		</div>
	{/each}
</div>

<style>
	/* ───────────────────────────────────────────────
	   MOBILE / TABLET (default, < 1024px)
	   Every stripe fills the container width.
	   No clip-path skew. No transform. No animation translate.
	   ─────────────────────────────────────────────── */
	.stripe-shape {
		width: 100%;
		background: var(--stripe-color);
		color: var(--stripe-text-color);
		clip-path: none;
		border-radius: 4px;
		opacity: 0;
		animation: stripeFade 0.6s ease both;
		animation-delay: var(--delay);
	}

	@keyframes stripeFade {
		from { opacity: 0; }
		to   { opacity: 1; }
	}

	/* Padding tiers */
	.stripe-pad { padding: 0.7rem 0.9rem 0.75rem 1.4rem; }
	@media (min-width: 640px) { .stripe-pad { padding: 0.8rem 1rem 0.85rem 1.5rem; } }
	@media (min-width: 768px) { .stripe-pad { padding: 0.85rem 1.1rem 0.95rem 1.4rem; } }

	/* ───────────────────────────────────────────────
	   DESKTOP (lg+, 1024px+)
	   Cascading widths, angled left edge, slide+skew animation.
	   ─────────────────────────────────────────────── */
	@media (min-width: 1024px) {
		.stripe-shape {
			width: var(--stripe-w);
			clip-path: polygon(6% 0, 100% 0, 100% 100%, 0 100%);
			border-radius: 0;
			animation: stripeIn 0.9s cubic-bezier(.2,.7,.2,1) both;
			animation-delay: var(--delay);
		}

		@keyframes stripeIn {
			from { opacity: 0; transform: translateX(60px) skewX(-6deg); }
			to   { opacity: 1; transform: translateX(0) skewX(0); }
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.stripe-shape {
			animation: none !important;
			opacity: 1 !important;
			transform: none !important;
		}
	}
</style>

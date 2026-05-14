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

<div class="flex flex-col items-end text-end gap-2 sm:gap-3 md:gap-4 w-full relative z-0">
	{#each stripes as s, i}
		<div
			class="stripe-bar stripe-pad text-[10px] sm:text-xs md:text-base lg:text-lg"
			style="
				width: {s.w};
				background: {s.color};
				color: {s.color === '#C9C4BC' ? '#15161A' : '#FBF6EC'};
				clip-path: polygon(6% 0, 100% 0, 100% 100%, 0 100%);
				--delay: {0.6 + i * 0.12}s;
				animation: stripeIn 0.9s cubic-bezier(.2,.7,.2,1) both;
				animation-delay: var(--delay);
			"
		>
			<span class="block tracking-[0.08em] sm:tracking-[0.14em] md:tracking-[0.22em]">{s.label}</span>
		</div>
	{/each}
</div>

<style>
	/* Responsive padding for stripes — tight on mobile, generous on desktop */
	.stripe-pad { padding: 0.5rem 0.6rem 0.55rem 0.8rem; }
	@media (min-width: 640px) { .stripe-pad { padding: 0.7rem 0.9rem 0.75rem 1.1rem; } }
	@media (min-width: 768px) { .stripe-pad { padding: 0.85rem 1.1rem 0.95rem 1.4rem; } }

	@keyframes stripeIn {
		from { opacity: 0; transform: translateX(60px) skewX(-6deg); }
		to   { opacity: 1; transform: translateX(0) skewX(0); }
	}
	@media (prefers-reduced-motion: reduce) {
		div { animation: none !important; opacity: 1 !important; transform: none !important; }
	}
</style>

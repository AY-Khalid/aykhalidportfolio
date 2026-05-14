<script lang="ts">
	import { onMount } from 'svelte';
	import SplashScreen from '$lib/components/SplashScreen.svelte';
	import PortfolioApp from '$lib/components/PortfolioApp.svelte';

	let entered = $state(false);
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
		// Skip splash if hash already targets a section (deep-link UX)
		if (location.hash && location.hash !== '#top') {
			entered = true;
		}
	});

	function handleEnter() {
		entered = true;
		// Smooth scroll to top after the panel arrives
		requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
	}
</script>

<!-- Splash and portfolio share a 3D scene to choreograph the slide-in -->
<div class="scene-3d relative">
	{#if !entered}
		<SplashScreen onenter={handleEnter} />
	{:else}
		<div class="portfolio-in">
			<PortfolioApp />
		</div>
	{/if}
</div>

<style>
	.portfolio-in {
		animation: slideIn3D 1.1s cubic-bezier(.2,.7,.2,1) both;
		transform-origin: center center;
		will-change: transform, opacity, filter;
	}
	@keyframes slideIn3D {
		0%   { opacity: 0; transform: perspective(1400px) rotateY(22deg) translateZ(-360px) translateX(14vw) scale(0.94); filter: blur(8px); }
		60%  { opacity: 1; filter: blur(0); }
		100% { opacity: 1; transform: perspective(1400px) rotateY(0) translateZ(0) translateX(0) scale(1); filter: blur(0); }
	}
	@media (prefers-reduced-motion: reduce) {
		.portfolio-in { animation: fadeIn .35s ease both; }
		@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
	}
</style>

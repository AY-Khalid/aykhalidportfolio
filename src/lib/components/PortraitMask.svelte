<script lang="ts">
	// Half-face B&W portrait composition matching the reference.
	// User drops their photo at /static/portrait.jpg (a forward-facing headshot).
	// We render it grayscale, clipped to a "D" silhouette, with a circular signature ring behind.
	let { src = '/portrait.jpg' } = $props();
	let loaded = $state(false);
</script>

<div class="relative w-full h-full select-none">
	<!-- Yellow/gold signature ring + curving signature text.
	     Desktop only. On mobile the ring competes with the portrait and the
	     signature text is too small to read anyway, so we hide the whole group. -->
	<div class="hidden lg:contents">
		<div
			class="absolute lg:left-[102%] top-1/2 -translate-x-1/2 -translate-y-1/2
			       w-[70%] aspect-square rounded-full ring-circle z-10"
			aria-hidden="true"
		></div>

		<div
			class="absolute lg:left-[102%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square
			       pointer-events-none z-10"
			aria-hidden="true"
		>
			<svg viewBox="0 0 200 200" class="w-full h-full">
				<defs>
					<path id="signring" d="M 100,100 m -86,0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0" />
				</defs>
				<text class="signature-text" font-family="Inter, sans-serif" font-size="6" letter-spacing="3" fill="#1F2126">
					<textPath href="#signring" startOffset="14%">A N I D U  ·  Y A K U B U  ·  K H A L I D  ·  F R O N T E N D  E N G I N E E R  ·</textPath>
				</text>
			</svg>
		</div>
	</div>

	<!-- "D"-shaped portrait clip -->
	<div class="absolute inset-0 portrait-mask z-10 lg:w-[900px]">
		<img
			src={src}
			alt="Portrait of Anidu Yakubu Khalid"
			class="w-full h-full object-cover object-center grayscale contrast-110"
			onload={() => (loaded = true)}
			onerror={() => (loaded = false)}
			loading="eager"
			decoding="async"
		/>
		<!-- Fallback ink placeholder if no photo -->
		{#if !loaded}
			<div class="absolute inset-0 flex items-center justify-center bg-ink-800 text-cream-100 text-xs tracking-widest">
				<div class="text-center px-4">
					<div class="font-display text-3xl mb-2">AYK</div>
					<div>Drop your portrait at <code>/static/portrait.jpg</code></div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.ring-circle {
		background: radial-gradient(circle at 50% 50%, #E8C25A 0%, #D4A33A 60%, #B07F1F 100%);
		box-shadow: 0 30px 80px -30px rgba(0,0,0,0.35);
	}
	.portrait-mask {
		/* "D" silhouette: a half-disc clipped on the left edge for the half-face look */
		clip-path: ellipse(58% 50% at 38% 50%);
		filter: drop-shadow(0 30px 50px rgba(0,0,0,0.25));
	}
	.signature-text { opacity: 0.85; }
	@media (max-width: 768px) {
		.portrait-mask { clip-path: ellipse(65% 50% at 42% 50%); }
	}
</style>

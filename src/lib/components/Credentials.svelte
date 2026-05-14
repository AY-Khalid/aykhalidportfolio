<script lang="ts">
	import { reveal } from '$lib/motion';
	const certs = [
		{ name: 'IBM Data Science Professional', accent: '#2E8FB8' },
		{ name: 'Google Advanced Data Analytics', accent: '#A8D958' },
		{ name: 'Google Business Intelligence', accent: '#E89A3C' },
		{ name: 'Harvard CS50', accent: '#7A5236' },
		{ name: '3MTT (ML/AI and Data Engineering)', accent: '#C9C4BC' }
	];
</script>

<section id="credentials" class="relative py-24 md:py-32">
	<div class="max-w-[1040px] mx-auto px-5 md:px-8">
		<div class="grid grid-cols-12 gap-8 items-end mb-10">
			<div class="col-span-12 md:col-span-6">
				<div use:reveal class="neo-pill mb-3">04 · CERTIFICATIONS</div>
				<h2 use:reveal={{ delay: 80 }} class="font-display text-3xl md:text-5xl leading-tight">Stuff I've studied.</h2>
			</div>
			<p use:reveal={{ delay: 140 }} class="col-span-12 md:col-span-6 opacity-70 md:text-right">
				Five courses I sat through and finished. Mostly data, analytics, and engineering.
			</p>
		</div>

		<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
			{#each certs as c, i}
				<li use:reveal={{ delay: i * 60 }} class="neo-raised card-lift p-5 rounded-2xl">
					<div class="neo-inset-sm w-9 h-9 rounded-xl grid place-items-center mb-3">
						<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke={c.accent} stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="8" r="6"/>
							<path d="M9 13.5l-2 6 5-3 5 3-2-6"/>
						</svg>
					</div>
					<div class="text-[10px] tracking-[0.25em] uppercase opacity-50 mb-1">Certificate</div>
					<div class="font-medium leading-snug">{c.name}</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<script lang="ts">
	const items = [
		'FRONTEND',
		'SVELTEKIT',
		'NEXT.JS',
		'TYPESCRIPT',
		'THREE.JS',
		'TAILWIND',
		'PYTHON',
		'FASTAPI',
		'OPEN TO WORK',
		'SAY HI'
	];
</script>

<div class="relative py-6 md:py-8">
	<div class="max-w-[1040px] mx-auto px-5 md:px-8">
		<div class="neo-inset rounded-full overflow-hidden py-4 px-6">
			<div class="marquee-track text-[clamp(1rem,2vw,1.5rem)] font-display tracking-tight">
				{#each [...items, ...items] as t}
					<span class="flex items-center gap-6 opacity-85">
						<span>{t}</span>
						<span class="w-2 h-2 rounded-full" style="background: #A8D958"></span>
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>

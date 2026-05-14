<script lang="ts">
	import { reveal } from '$lib/motion';

	type Group = { title: string; color: string; items: string[]; icon: string };

	const groups: Group[] = [
		{
			title: 'Frontend',
			color: '#A8D958',
			items: ['Svelte / SvelteKit', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'Three.js', 'GSAP', 'HTML/CSS'],
			icon: 'M4 6h16M4 12h16M4 18h10'
		},
		{
			title: 'Backend',
			color: '#2E8FB8',
			items: ['FastAPI', 'Django', 'Flask', 'Express.js', 'Node.js', 'REST APIs', 'PostgreSQL', 'MySQL'],
			icon: 'M3 5l9 4 9-4-9-4-9 4zM3 12l9 4 9-4M3 19l9 4 9-4'
		},
		{
			title: 'ML / AI',
			color: '#E89A3C',
			items: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'LLM apps', 'NLP', 'Embeddings'],
			icon: 'M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24'
		},
		{
			title: 'Data',
			color: '#7A5236',
			items: ['SQL', 'Power BI', 'Plotly Dash', 'Tableau', 'ETL', 'R', 'Jupyter'],
			icon: 'M3 3v18h18M7 14l4-4 4 3 6-7'
		}
	];
</script>

<section id="stack" class="relative py-28 md:py-36">
	<div class="max-w-[1040px] mx-auto px-5 md:px-8">
		<div class="flex items-end justify-between flex-wrap gap-4 mb-12">
			<div>
				<div use:reveal class="neo-pill mb-3">02 · STACK</div>
				<h2 use:reveal={{ delay: 80 }} class="font-display text-3xl md:text-5xl leading-tight max-w-2xl">What I work with.</h2>
			</div>
			<p use:reveal={{ delay: 160 }} class="text-sm md:text-base opacity-70 max-w-md">
				Stuff I've actually shipped with. Not a list of badges from a tutorial.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each groups as g, i}
				<div use:reveal={{ delay: i * 80 }} class="neo-raised card-lift relative p-6 rounded-3xl overflow-hidden">
					<div class="flex items-center justify-between mb-5">
						<div class="neo-inset-sm w-11 h-11 rounded-2xl grid place-items-center">
							<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d={g.icon}/>
							</svg>
						</div>
						<div class="w-3 h-3 rounded-full" style="background: {g.color}; box-shadow: 0 0 12px {g.color}88"></div>
					</div>
					<h3 class="font-display text-xl mb-4">{g.title}</h3>
					<ul class="space-y-1.5">
						{#each g.items as it}
							<li class="flex items-center gap-2 text-sm opacity-85">
								<span class="w-1 h-1 rounded-full" style="background: {g.color}"></span>
								{it}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

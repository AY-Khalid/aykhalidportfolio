<script lang="ts">
	import { projects, moreLinks } from '$lib/projects';
	import { reveal, tilt } from '$lib/motion';

	type Filter = 'all' | 'ml' | 'web' | 'data';
	let filter = $state<Filter>('all');

	function matches(tags: string[]) {
		if (filter === 'all') return true;
		const t = tags.map((x) => x.toLowerCase()).join(' ');
		if (filter === 'ml') return /(ml|nlp|llm|embedding|scikit|pandas)/.test(t);
		if (filter === 'web') return /(typescript|django|svelte|next|js|html|full-stack|vite|pwa)/.test(t);
		if (filter === 'data') return /(sql|sqlite|capstone|dash|analytics)/.test(t);
		return true;
	}

	const accentMap: Record<string, string> = {
		lime:  '#A8D958',
		sky:   '#2E8FB8',
		amber: '#E89A3C',
		stone: '#C9C4BC',
		earth: '#7A5236'
	};

	let active = $state<string | null>(null);
	function open(slug: string) { active = slug; }
	function close() { active = null; }
	$effect(() => {
		if (active) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = '';
	});
</script>

<section id="work" class="relative py-28 md:py-40">
	<div class="max-w-[1040px] mx-auto px-5 md:px-8">
		<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
			<div>
				<div use:reveal class="neo-pill mb-3">03 · WORK</div>
				<h2 use:reveal={{ delay: 80 }} class="font-display text-3xl md:text-5xl leading-tight">A few projects.</h2>
				<p use:reveal={{ delay: 140 }} class="mt-3 opacity-70 max-w-xl">
					Some ML, some full-stack, some analytics. Everything links back to
					<a class="underline underline-offset-4 hover:text-accent-sky" href="https://github.com/AY-Khalid?tab=repositories" target="_blank" rel="noopener">my GitHub</a>
					if you want to dig in.
				</p>
			</div>

			<div use:reveal={{ delay: 200 }} class="neo-inset rounded-full p-1.5 flex flex-wrap gap-1" role="tablist" aria-label="Filter projects">
				{#each [['all','All'],['web','Web'],['ml','ML / AI'],['data','Data']] as const as [k, l]}
					<button
						type="button"
						role="tab"
						aria-selected={filter === k}
						onclick={() => (filter = k as Filter)}
						class="px-4 py-2 rounded-full text-sm font-semibold transition-all
							{filter === k
								? 'bg-ink-900 text-cream-100 dark:bg-cream-100 dark:text-ink-900 shadow-md'
								: 'text-ink-900 dark:text-cream-100 opacity-60 hover:opacity-100'}"
					>{l}</button>
				{/each}
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each projects.filter((p) => matches(p.tags)) as p (p.slug)}
				<article
					use:reveal
					use:tilt={5}
					class="neo-raised group card-lift relative overflow-hidden rounded-3xl p-6 md:p-7 flex flex-col"
				>
					<div class="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-25 blur-2xl pointer-events-none" style="background: {accentMap[p.accent]}"></div>

					<!-- Thumbnail -->
					<button
						type="button"
						onclick={() => open(p.slug)}
						class="thumb relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 neo-inset-sm"
						aria-label="Open {p.title}"
					>
						{#if p.images?.[0]}
							<img
								src={p.images[0]}
								alt="{p.title} screenshot"
								class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
								loading="lazy"
								decoding="async"
								onerror={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
							/>
						{/if}
						<!-- Always-on accent wash for empty states + image overlay flourish -->
						<div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(135deg, {accentMap[p.accent]}28 0%, transparent 60%)"></div>
						<!-- Slug initial as fallback decoration -->
						<div class="absolute inset-0 grid place-items-center font-display text-7xl opacity-10 select-none">
							{p.title[0]}
						</div>
					</button>

					<div class="flex items-center justify-between mb-3">
						<div class="neo-inset-sm rounded-full px-3 py-1 text-[10px] tracking-[0.22em] uppercase flex items-center gap-2">
							<span class="w-1.5 h-1.5 rounded-full" style="background: {accentMap[p.accent]}"></span>
							{p.year}
						</div>
						<div class="text-[10px] tracking-[0.2em] uppercase opacity-60">{p.tags[0]}</div>
					</div>

					<h3 class="font-display text-2xl md:text-[1.75rem] mb-1 tracking-tight leading-tight">{p.title}</h3>
					<p class="text-sm md:text-base opacity-70 mb-4">{p.tagline}</p>

					<p class="text-sm leading-relaxed opacity-70 mb-5 line-clamp-3">{p.description}</p>

					<div class="flex flex-wrap gap-1.5 mb-5">
						{#each p.tags as t}
							<span class="neo-pill">{t}</span>
						{/each}
					</div>

					<div class="mt-auto flex items-center justify-between gap-3">
						<button type="button" onclick={() => open(p.slug)} class="text-sm font-medium underline underline-offset-4 hover:text-accent-sky">More about it →</button>
						<a href={p.repo} target="_blank" rel="noopener" class="btn-outline text-sm inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full">
							<svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
							Source
						</a>
					</div>
				</article>
			{/each}
		</div>

		<!-- Other things on my GitHub -->
		<div class="mt-16 md:mt-20">
			<h3 use:reveal class="font-display text-xl md:text-2xl mb-6">Other things on my GitHub</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each moreLinks as m, i}
					<a use:reveal={{ delay: i * 40 }} href={m.repo} target="_blank" rel="noopener" class="neo-raised-sm card-lift block p-5 rounded-2xl">
						<div class="font-medium mb-1 flex items-center justify-between">
							<span>{m.title}</span>
							<span class="opacity-50">↗</span>
						</div>
						<div class="text-sm opacity-70">{m.desc}</div>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Project detail modal -->
	{#if active}
		{@const p = projects.find((x) => x.slug === active)!}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
			role="dialog"
			aria-modal="true"
			aria-label="{p.title} details"
		>
			<button type="button" onclick={close} class="absolute inset-0 bg-black/50 backdrop-blur-md" aria-label="Close"></button>
			<div class="neo-raised-lg relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-9 modal-in">
				<div class="absolute top-4 right-4 z-10">
					<button onclick={close} class="btn-outline w-10 h-10 grid place-items-center rounded-full" aria-label="Close dialog">
						<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
					</button>
				</div>

				<!-- Gallery -->
				{#if p.images?.length}
					<div class="mb-6 -mx-1">
						<div class="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 px-1">
							{#each p.images as img, i}
								<div class="snap-start shrink-0 w-full md:w-[85%] aspect-[16/10] rounded-2xl overflow-hidden neo-inset-sm relative">
									<img
										src={img}
										alt="{p.title} screenshot {i + 1}"
										class="absolute inset-0 w-full h-full object-cover"
										loading="lazy"
										decoding="async"
										onerror={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none'; }}
									/>
									<div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(135deg, {accentMap[p.accent]}20 0%, transparent 60%)"></div>
								</div>
							{/each}
						</div>
						{#if p.images.length > 1}
							<div class="mt-2 text-[10px] tracking-[0.25em] uppercase opacity-50 text-center">← swipe · {p.images.length} screenshots →</div>
						{/if}
					</div>
				{/if}

				<div class="neo-inset-sm inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] tracking-[0.25em] uppercase mb-3">
					<span class="w-1.5 h-1.5 rounded-full" style="background: {accentMap[p.accent]}"></span>
					{p.year} · {p.tags.slice(0,2).join(' · ')}
				</div>
				<h3 class="font-display text-3xl mb-2">{p.title}</h3>
				<p class="opacity-70 mb-5">{p.tagline}</p>
				<p class="leading-relaxed mb-4 opacity-90">{p.description}</p>
				<div class="text-sm opacity-70 mb-6"><strong>Role:</strong> {p.role}</div>
				<div class="flex flex-wrap gap-2 mb-6">
					{#each p.tags as t}<span class="neo-pill">{t}</span>{/each}
				</div>
				<div class="flex flex-wrap gap-3">
					<a href={p.repo} target="_blank" rel="noopener" class="solid-cta inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold">View on GitHub →</a>
					{#if p.demo}
						<a href={p.demo} target="_blank" rel="noopener" class="btn-outline inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold">Live demo ↗</a>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	.modal-in {
		animation: modalIn .5s cubic-bezier(.2,.7,.2,1) both;
	}
	@keyframes modalIn {
		from { opacity: 0; transform: translateY(20px) scale(.96); }
		to   { opacity: 1; transform: translateY(0) scale(1); }
	}
	.line-clamp-4 {
		display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>

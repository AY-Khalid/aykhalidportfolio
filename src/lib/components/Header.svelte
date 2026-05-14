<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme';

	let open = $state(false);
	const links = [
		{ href: '#work', label: 'Work' },
		{ href: '#about', label: 'About' },
		{ href: '#stack', label: 'Stack' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<header class="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[min(1040px,calc(100%-2rem))]">
	<div class="neo-raised rounded-2xl px-4 md:px-5 h-16 flex items-center justify-between">
		<a href="#top" class="flex items-center gap-2.5 group" aria-label="Home">
			<span class="neo-inset-sm w-9 h-9 rounded-xl grid place-items-center font-display text-sm">K</span>
			<span class="font-display tracking-tight hidden sm:inline">Khalid</span>
		</a>
		<nav class="hidden md:flex items-center gap-1 neo-inset-sm rounded-full px-1.5 py-1" aria-label="Primary">
			{#each links as l}
				<a href={l.href} class="px-4 py-1.5 text-sm rounded-full hover:text-accent-sky transition-colors">{l.label}</a>
			{/each}
		</nav>
		<div class="flex items-center gap-2.5">
			<button
				type="button"
				onclick={toggleTheme}
				class="btn-outline w-10 h-10 grid place-items-center rounded-full"
				aria-label="Toggle dark mode"
			>
				{#if $theme === 'dark'}
					<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
				{:else}
					<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
				{/if}
			</button>
			<a
				href="#contact"
				class="solid-cta hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
			>
				Let's talk
				<span aria-hidden="true">→</span>
			</a>
			<button class="md:hidden btn-outline w-10 h-10 grid place-items-center rounded-full" aria-label="Menu" aria-expanded={open} onclick={() => (open = !open)}>
				<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					{#if open}
						<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
					{:else}
						<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
					{/if}
				</svg>
			</button>
		</div>
	</div>
	{#if open}
		<div class="md:hidden mt-2 neo-raised rounded-2xl overflow-hidden">
			<nav class="px-5 py-3 flex flex-col" aria-label="Mobile">
				{#each links as l}
					<a href={l.href} onclick={() => (open = false)} class="py-2.5 text-base">{l.label}</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>

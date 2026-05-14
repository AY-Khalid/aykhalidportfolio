import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function initial(): Theme {
	if (!browser) return 'light';
	const stored = localStorage.getItem('ayk-theme') as Theme | null;
	if (stored) return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const theme = writable<Theme>(initial());

if (browser) {
	theme.subscribe((t) => {
		document.documentElement.classList.toggle('dark', t === 'dark');
		try { localStorage.setItem('ayk-theme', t); } catch {}
		const meta = document.querySelector('meta[name="theme-color"]');
		if (meta) meta.setAttribute('content', t === 'dark' ? '#1F2126' : '#F1E8D5');
	});
}

export function toggleTheme() {
	theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
}

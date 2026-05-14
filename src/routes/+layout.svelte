<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/theme';

	let { children } = $props();
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
		// initialize theme class; store subscription handles updates
		theme.subscribe(() => {})();
	});
</script>

<svelte:head>
	<meta name="color-scheme" content="light dark" />
</svelte:head>

{@render children?.()}

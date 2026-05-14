<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="relative pt-8 pb-12">
	<div class="max-w-[1040px] mx-auto px-5 md:px-8">
		<div class="neo-raised rounded-3xl px-6 md:px-10 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
			<div class="flex items-center gap-3">
				<div class="neo-inset-sm w-10 h-10 rounded-xl grid place-items-center font-display">K</div>
				<div class="text-sm opacity-80">
					© {year} Anidu Yakubu Khalid.<br class="md:hidden"/>
					<span class="opacity-70"> Made with SvelteKit, Three.js, and Tailwind.</span>
				</div>
			</div>
			<div class="text-[10px] tracking-[0.25em] uppercase opacity-60">
				Thanks for scrolling
			</div>
		</div>
	</div>
</footer>

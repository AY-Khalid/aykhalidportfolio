import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	build: {
		target: 'es2020',
		cssCodeSplit: true,

		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('gsap')) {
						return 'gsap';
					}

					// REMOVE three chunking
					// if (id.includes('three')) {
					// 	return 'three';
					// }
				}
			}
		}
	},

	server: {
		fs: { strict: false }
	}
});
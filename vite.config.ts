import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'es2020',
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				manualChunks: {
					three: ['three'],
					gsap: ['gsap']
				}
			}
		}
	},
	server: {
		fs: { strict: false }
	}
});

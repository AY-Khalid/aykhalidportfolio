/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				cream: {
					50: '#F7EFE0',
					100: '#F1E8D5',
					200: '#E8DCC4',
					300: '#D9CAA8'
				},
				ink: {
					900: '#1A1A1A',
					800: '#1F2126',
					700: '#2A2D34',
					500: '#5A5D65'
				},
				accent: {
					lime: '#A8D958',
					sky: '#2E8FB8',
					amber: '#E89A3C',
					stone: '#C9C4BC',
					earth: '#7A5236'
				}
			},
			fontFamily: {
				display: ['"Archivo Black"', '"Anton"', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
			}
		}
	},
	plugins: []
};

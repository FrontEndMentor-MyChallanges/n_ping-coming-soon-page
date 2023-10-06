/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: '#4f7df3',
				primaryHover: '#4f7df3d6',
				secondary: '#c2d3ff',
				error: '#ff5263',
				textLight: '#969696',
				textDark: '#151f29',
			},
			fontFamily: {
				libreFranklin: ['Libre Franklin', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

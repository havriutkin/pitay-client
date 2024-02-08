/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html", 
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	important: '#root',
	theme: {
		extend: {
			colors: {
				'dark-blue': '#004A98',
				'light-blue': '#005DBF',
				'lighter-blue': '#42B8FD',
				'custom-green': '#00bdbf',
				'custom-red': '#bf005d'
			},
			fontFamily: {
				'open-sans': ['Open Sans', 'sans-serif'],
				'squada-one': ['Squada One', 'sans-serif']
			}
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
}


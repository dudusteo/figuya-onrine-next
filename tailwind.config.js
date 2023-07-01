/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				mulberry: {
					50: "#fbf4f7",
					100: "#f8ebf1",
					200: "#f4d6e4",
					300: "#ebb6ce",
					400: "#de88ad",
					500: "#cb5182",
					600: "#bd456f",
					700: "#a23458",
					800: "#872d49",
					900: "#712a40",
					950: "#441322",
				},
			},
			height: {
				144: "36rem",
			},
		},
	},
	plugins: [],
};

const config = {
	// mode: "jit",
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: [],
	variants: {
		extend: {
			animation: ['hover']
		}
	}
};

module.exports = config;

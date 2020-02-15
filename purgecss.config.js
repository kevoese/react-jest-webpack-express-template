const PurgecssJs = content => content.match(/[A-z0-9-:\/]+/g) || [];

module.exports = {
	content: [ './client/**/*.jsx', './client/**/*.html'],
	css: ['client/styles/tailwind.css', 'client/styles/custom/index.scss'],
	whitelistPatterns: [/app-.*/], //js generated css classes should be prefixed with 'app-'
	extractors: [
		{
			extractor: PurgecssJs,
			extensions: ['js', 'jsx'],
		},
	],
};

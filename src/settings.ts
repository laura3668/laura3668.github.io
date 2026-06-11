export const profile = {
	fullName: 'Laura Pascual',
	title: '',
	institute: '',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
		{title: 'Computer Science', description: 'Dummy CS description', field: 'computer-science'},
		{title: 'Life Sciences', description: 'Dummy LS description', field: 'biology'},
		{title: 'Engineering', description: 'Dummy Eng description', field: 'engineering'},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: 'https://www.linkedin.com/in/laura-pascual-hebrero/',
	x: '',
	bluesky: '',
	github: 'https://github.com/laura3668',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'garden', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'forest', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Laura Pascual Hebrero',
	default_description: 'Personal website of Laura Pascual, software engineer from Technical University of Denmark.',
	default_image: '/favicon.svg',
}

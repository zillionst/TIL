let CONST = require("./const");

module.exports = {
	title: 'VuePress 시작!',
	description: 'Hello World',
	themeConfig: {
		nav: [
			{
				text: 'About',
				items: [
					{text: 'About Me', link: '/about/me'},
					{text: 'About Blog', link: '/about/blog'}
				]
			}
		],
		sidebar: [
			{
				title: 'VuePress',   // required
				children: CONST.VuePress
			},
		]
	}
};
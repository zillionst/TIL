let CONST = require("./const");

module.exports = {
	title: 'TIL (Today I Learned) by zillionst',
	description: 'zillionst',
	base: "/TIL/",
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
				title:  '1. JavaScript',
				children: CONST.JavaScript
			},
			{
				title: '2. VuePress',   // required
				children: CONST.VuePress
			},
			{
				title: '3. MarkDown',
				children: CONST.MarkDown
			}
		]
	}
};
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'vdbogdanov',
			social: {
				github: 'https://github.com/vdbogdanov',
				gitlab: 'https://gitlab.com/vdbogdanov',
				telegram: 'https://t.me/vdbogdanov',
				discord: 'http://discordapp.com/users/vdbogdanov',
				linkedin: 'https://www.linkedin.com/in/vdbogdanov',
				email: 'mailto:vladimirxbogdanov@yandex.ru',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

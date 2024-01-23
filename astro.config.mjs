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
			locales: {
				root: { label: 'Русский', lang: 'ru' },
				en: { label: 'English', lang: 'en' },
			},
			sidebar: [
				{
					label: 'Общая информация',
					autogenerate: { directory: 'common-info' },
				},
				{
					label: 'Cheatsheets',
					autogenerate: { directory: 'cheatsheets' },
				},
				{
					label: 'Ansible',
					autogenerate: { directory: 'ansible' },
				},
			],
		}),
	],
});

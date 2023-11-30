import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs for Nexavia Enterprise',
			social: {
				github: 'https://github.com/kuem-si',
			},
			sidebar: [
				/*{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},*/
				{
					label: 'User',
					items: [
						{ label: 'Login', link: '/user/login' },
						{ label: 'Supported IoT Devices', link: '/user/supported_iot_devices' }
					]
				},
				{
					label: 'Developer',
					items: [
						{ label: 'Authentication', link: '/developer/authentication' }
					]
				},
			],
		}),
	],
});

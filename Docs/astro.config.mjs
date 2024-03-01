import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs for Nexavia Enterprise',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
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
					label: 'Overview',
					link: '/overview'
				},
				{
					label: 'User',
					items: [
						{ label: 'Overview', link: '/user/overview' },
						{
							label: 'Tenant Management',
							items: [
								{ label: 'Overview', link: '/user/tenant-management' },
							]
						},
						{
							label: 'Authentication & Login',
							items: [
								{ label: 'Overview', link: '/user/authentication-and-login' },
							]
						},
						{
							label: 'Device Management',
							items: [
								{ label: 'Supported Network Technologies', link: '/user/device-management/supported-network-technologies-and-concentrators' },
								{ label: 'Supported IoT Devices', link: '/user/device-management/supported-iot-devices' },
								{ label: 'IoT Device pairing with application', link: '/user/device-management/device-pairing' }
							]
						}
					]
				},
				{
					label: 'Developer',
					items: [
						{ label: 'Overview', link: '/developer/overview' },
						{ label: 'Authentication', link: '/developer/authentication' }
					]
				},
			],
		}),
	],
});

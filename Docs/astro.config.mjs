import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs for Nexavia and Thynkr',
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
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},*/
				{
					label: 'Overview',
					slug: 'overview'
				},
				{
					label: 'User',
					items: [
						{ label: 'Overview', slug: 'user/overview' },
						{
							label: 'Authentication & Login',
							items: [
								{ label: 'Login', slug: 'user/authentication-and-login' },
							]
						},
						{
							label: 'Dashboard',
							items :[
								{ label: 'Main Dashboard', slug: 'user/dashboard/main' },
								{ label: 'Device Dashboard', slug: 'user/dashboard/device' },
							]
						},
						{
							label: 'Tenant Management',
							items: [
								{ label: 'Overview', slug: 'user/tenant-management' },
							]
						},
						{
							label: 'Device Management',
							items: [
								{ label: 'Supported Network Technologies', slug: 'user/device-management/supported-network-technologies-and-concentrators' },
								{ label: 'Supported IoT Devices', slug: 'user/device-management/supported-iot-devices' },
								{ label: 'IoT Device pairing with application', slug: 'user/device-management/device-pairing' },
								{ label: 'Device Settings', slug: 'user/device-management/device-settings' }
							]
						}
					]
				},
				{
					label: 'Developer',
					items: [
						{ label: 'Overview', slug: 'developer/overview' },
						{ label: 'Authentication', slug: 'developer/authentication' },
						{ label: 'Device List', slug: 'developer/device-list' }
					]
				},
			],
		}),
	],
});

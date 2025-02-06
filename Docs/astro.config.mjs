// @ts-check
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
							label: 'General',
							items :[
								{ label: 'Language Management', slug: 'user/language-management' }
							]
						},
						{
							label: 'General UI & UX patterns',
							items :[
								{ label: 'Overview', slug: 'user/general-ui-ux-patterns/overview' },
								{ label: 'Grid - Row Filter', slug: 'user/general-ui-ux-patterns/grid-filter-row' },
								{ label: 'Grid - Column Sorting', slug: 'user/general-ui-ux-patterns/grid-column-sorting' },
								{ label: 'Grid - Column Customizations', slug: 'user/general-ui-ux-patterns/grid-column-customizations' },
								{ label: 'Grid - Row Selection', slug: 'user/general-ui-ux-patterns/grid-row-selection' },
								{ label: 'Grid - Pagination', slug: 'user/general-ui-ux-patterns/grid-pagination' },
								{ label: 'Grid - Master-Detail', slug: 'user/general-ui-ux-patterns/grid-master-detail' },
								{ label: 'Grid - Export Options', slug: 'user/general-ui-ux-patterns/grid-export-options' },
								{ label: 'Chart - Export & Print Options', slug: 'user/general-ui-ux-patterns/chart-export-print-options' },
								{ label: 'Chart - Show & Hide Series', slug: 'user/general-ui-ux-patterns/chart-show-hide-series' },
								{ label: 'Chart - Zoom & Pan', slug: 'user/general-ui-ux-patterns/chart-zoom-pan' },
								{ label: 'Selectbox - Filtering', slug: 'user/general-ui-ux-patterns/selectbox-filtering' },
								{ label: 'Datepicker - Selection Advices', slug: 'user/general-ui-ux-patterns/date-selection-advices' }
							]
						},
						{
							label: 'Tenant Management',
							items: [
								{ label: 'Overview', slug: 'user/tenant-management' },
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

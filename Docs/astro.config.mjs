// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Nexavia Enterprise Docs',
			// Nexavia Enterprise lockup from nexavia-brand-assets v1.6.0 (unchanged copies).
			logo: {
				light: './src/assets/brand/nexavia-enterprise-lockup-light.svg',
				dark: './src/assets/brand/nexavia-enterprise-lockup-dark.svg',
				replacesTitle: true,
			},
			favicon: '/favicon.svg',
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
				// Nexavia tokens read data-nx-member and data-nx-theme; Starlight writes
				// data-theme. Mirror it before first paint and on every theme change.
				{
					tag: 'script',
					content:
						"(()=>{const r=document.documentElement;r.dataset.nxMember='enterprise';const s=()=>{r.dataset.nxTheme=r.dataset.theme==='dark'?'dark':'light'};s();new MutationObserver(s).observe(r,{attributes:true,attributeFilter:['data-theme']})})();",
				},
				// Code blocks and tables that scroll sideways must be reachable by keyboard (WCAG 2.1.1).
				{
					tag: 'script',
					content:
						"addEventListener('DOMContentLoaded',()=>{for(const p of document.querySelectorAll('.expressive-code pre, .sl-markdown-content table'))if(p.scrollWidth>p.clientWidth){p.tabIndex=0}});",
				},
			],
			customCss: [
				'@fontsource/schibsted-grotesk/400.css',
				'@fontsource/schibsted-grotesk/600.css',
				'@fontsource/schibsted-grotesk/700.css',
				'./src/styles/vendor/nexavia.tokens.css',
				'./src/styles/nexavia-theme.css',
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kuem-si' }],
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
					items: [{ autogenerate: { directory: 'reference' } }],
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
					label: 'Tiers',
					items: [
						{ label: 'Overview', slug: 'tiers/overview' },
						{ label: 'NOC', slug: 'tiers/noc' },
						{ label: 'IoT', slug: 'tiers/iot' },
						{ label: 'Lighting', slug: 'tiers/lighting' },
						{ label: 'Package', slug: 'tiers/package' }
					]
				},
				{
					label: 'Utility',
					items: [
						{ label: 'Mobile', slug: 'utility/mobile' },
						{ label: 'Web', slug: 'utility/web' }
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

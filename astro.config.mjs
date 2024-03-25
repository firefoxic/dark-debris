import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	base: '/dark-debris',
	baseUrl: process.env.NODE_ENV === `development` ? `/` : `/dark-debris`,
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});

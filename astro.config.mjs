import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { getProjectRoot } from "./utils/getProjectRoot.js"

// https://astro.build/config
export default defineConfig({
	base: getProjectRoot(),
	site: 'https://firefoxic.github.io/',
	integrations: [mdx(), sitemap()],
});

import { env } from "node:process"

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import { getProjectRoot } from "./utils/getProjectRoot.js"

// https://astro.build/config
export default defineConfig({
	base: getProjectRoot(),
	outDir: `./dist${getPrNumber()}`,
	site: 'https://firefoxic.github.io/',
	integrations: [mdx(), sitemap()],
});
function getPrNumber () {
	if (!env.CI) return ``
	return `/${env.PR_NUMBER}`
}

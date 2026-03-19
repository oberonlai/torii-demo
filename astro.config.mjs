// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.DEMO_SITE ?? 'https://torii.codotx.com',
  base: process.env.DEMO_BASE ?? '/',
  integrations: [sitemap()],
});

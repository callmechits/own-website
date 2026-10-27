// astro.config.mjs
// -----------------------------------------------------------------------------
// Global Astro configuration. The site is fully static: `astro build` writes
// plain HTML/CSS/JS into ./dist, which Cloudflare Pages serves as-is.
// -----------------------------------------------------------------------------
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: replace with your real domain once you buy it. Astro uses this to
  // build absolute URLs (canonical links, Open Graph tags).
  site: 'https://example.dev',

  // Emit /about/index.html rather than /about.html so URLs stay clean
  // (/about/) on any static host.
  build: { format: 'directory' },

  // Syntax highlighting for code blocks inside blog posts. "css-variables"
  // lets the theme pick up the site's own colour tokens (see global.css).
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
});

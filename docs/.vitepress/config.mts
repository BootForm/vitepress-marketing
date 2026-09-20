import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // CHANGE ME: your site's name and description.
  title: 'Cedar & Vine',
  description: 'A marketing site built with VitePress, not a docs site wearing a hat.',

  // CHANGE ME if you rename the repo, or set to '/' once you're serving from a custom domain
  // (step 5c of the README) instead of yourname.github.io/vitepress-marketing/. GitHub Pages
  // serves a repo that isn't named yourname.github.io from a subpath, and every built asset link
  // has to know that subpath at build time, or they all 404 once deployed. Get this wrong and the
  // site looks completely unstyled in production while working fine in `npm run dev`, since the
  // dev server always serves from the root and never hits this.
  base: '/vitepress-marketing/',

  vite: {
    plugins: [tailwindcss()],
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
    ],

    // No `sidebar` key at all: the default theme only renders a sidebar for a section that has
    // one configured. If you add a `/docs/` section later, scope its sidebar to that path only
    // (`sidebar: { '/docs/': [...] }`), the same way the real bootform.com marketing site does.
    // A sidebar with no path key applies to every page, which is what makes a VitePress site
    // read as documentation instead of marketing, even on the home page.
    socialLinks: [
      // CHANGE ME: your links, or delete any you don't want.
      { icon: 'github', link: 'https://github.com/yourname' },
    ],
  },
})

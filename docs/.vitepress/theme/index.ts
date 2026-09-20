// The default theme, plus Tailwind and one small override: a site-wide footer. This is deliberate
// otherwise: VitePress's default theme already does everything a marketing site needs (a
// `layout: home` hero and features grid, a plain `layout: page` for the blog list and pricing page)
// once you stop using its docs-specific defaults. See index.md and blog/index.md for how each page
// opts into that, and AGENTS.md for the rule in one place.
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// VitePress's own `themeConfig.footer` option only renders on `layout: doc` pages. It never
// shows on `layout: home` or `layout: page`, which is every page in this repo. `layout-bottom` is
// the slot that actually renders on every layout, so a custom Layout override is the only way to
// get a footer here at all, not a config option away.
export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'layout-bottom': () =>
        h(
          'footer',
          { class: 'border-t border-black/10 px-6 py-8 text-center text-sm opacity-60 dark:border-white/10' },
          [
            'Built with ',
            h(
              'a',
              { href: 'https://github.com/BootForm/vitepress-marketing', class: 'text-brand-500 hover:underline', target: '_blank', rel: 'noopener' },
              'vitepress-marketing',
            ),
            '. The form runs on ',
            h(
              'a',
              { href: 'https://bootform.com', class: 'text-brand-500 hover:underline', target: '_blank', rel: 'noopener' },
              'BootForm',
            ),
            '.',
          ],
        ),
    }),
}

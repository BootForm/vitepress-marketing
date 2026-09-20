// The default theme, unmodified, plus Tailwind. This is deliberate: VitePress's default theme
// already does everything a marketing site needs (a `layout: home` hero and features grid, a plain
// `layout: page` for the blog list) once you stop using its docs-specific defaults. See index.md
// and blog/index.md for how each page opts into that, and AGENTS.md for the rule in one place.
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default DefaultTheme

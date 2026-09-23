# Working in this repo

This is a teaching template: VitePress, deliberately configured as a marketing site instead of the
documentation site its defaults assume. Someone (human or AI agent) clones it, edits a few files,
and gets a real multi-page site with a blog and a working contact form. Keep it that way.

## The one rule this whole repo exists to teach

**Every page needs `layout: home` or `layout: page` in its frontmatter. Never leave a marketing
page on VitePress's default `layout: doc`.**

`layout: doc` is what VitePress calls a documentation article: a sidebar (if one is configured for
that path), a "previous/next page" footer, a prose-width content column. That is correct for
actual documentation and wrong for a home page, a pricing page, or a blog post index. Every page in
`docs/` in this template already sets `layout: home` or `layout: page` for exactly this reason.
When adding a new top-level page, set one of those two explicitly rather than leaving the
frontmatter empty.

If you genuinely add a documentation section later (a `/docs/` folder), scope its sidebar to that
path only: `sidebar: { '/docs/': [...] }` in `config.mts`, never a bare `sidebar: [...]` with no
path key. An unscoped sidebar applies to every page on the site, including the home page, which is
the single most common way an LLM-generated "marketing site" ends up looking like a documentation
site with the words changed. This repo's own `config.mts` has no `sidebar` key at all right now,
on purpose: add the path-scoped form only when there's an actual docs section to point it at.

## The constraints that define this repo

- **A real build step, unlike `first-website`/`one-page-site`.** This repo needs Node.js, `npm
  install`, and a terminal. That's the point: it's the next step up for someone who already has a
  zero-install site and wants several pages that share a design.
- **`base` in `config.mts` must match how the site is actually served.** A GitHub Pages project
  site (not `yourname.github.io` itself) is served from a subpath, so every built asset link needs
  to know that subpath at build time or it 404s in production while working fine in `npm run dev`
  (which always serves from the root and never exercises `base` at all). Renaming the repo or
  moving to a custom domain both mean updating `base` to match, in the same commit.
- **Tailwind via `@tailwindcss/vite`**, the real Vite plugin, not the browser CDN build the
  no-build-step templates use. This repo already has a build step, so there's no reason to reach
  for the CDN version here.
- **Plain markdown content (a blog post's paragraphs, headings, lists) needs `@tailwindcss/typography`'s
  `prose` class on its wrapping element, or it renders completely unstyled.** Tailwind's preflight
  reset strips the browser's own default heading sizes, list bullets and link colours, on the
  assumption that a Tailwind project styles everything explicitly with utility classes. A markdown
  file's rendered headings and lists never carry any classes at all (there's no markdown-it-attrs
  plugin here to add them), so without `prose` a page like `blog/index.md` looks completely flat:
  no heading hierarchy, no list markers, no spacing, plain default-coloured links. `blog/index.md`
  and both example posts already wrap their content in `prose dark:prose-invert`, with
  `max-w-none` where a custom `max-w-*` should win over prose's own default width. Any new page
  written as plain markdown paragraphs needs the same wrapper. A page built from custom, already-
  hand-classed HTML (like the sections in `index.md`, or `pricing.md`'s cards) doesn't need `prose`
  and generally shouldn't get it, since it fights with utility classes already on the same
  elements. Style a lone bare heading on a page like that directly (`<h2 class="...">`) instead,
  with `!` on its size, weight and margin classes (`text-3xl! font-bold! mb-8!`, as `pricing.md`
  does): VitePress's own `base.css` resets headings outside any `@layer`, so a plain utility class
  on a heading silently loses to it.
- **`prose` blocks are the one exception, handled once in `style.css`.** The same unlayered
  resets (VitePress's own `base.css`: `h1`-`h6` at 16px, `p` and lists with no margin, lists with no
  bullets, links with no colour) also flatten every `prose` block, and `!` can't fix that, because
  `prose` styles child elements the markdown gives you no class on. Confirmed live 2026-09-23: every
  `# Heading` in a `prose` wrapper rendered at body size, with no paragraph spacing. The last rule in
  `docs/.vitepress/theme/style.css` fixes it with `revert-layer`, handing exactly those properties
  back to the layered `prose` rules, scoped to `.prose` and skipping `not-prose`. Keep that rule;
  markdown inside a `prose` wrapper needs no `!` classes of its own.
- **The blog is deliberately a hand-maintained list, not a real blog engine.** Tags, dates,
  pagination and RSS are a bigger job than one template page should take on; that's what
  `vitepress-blog` is for. Don't add `createContentLoader`-based post listing here: it would
  duplicate that repo's whole reason to exist.
- **Comments in the frontmatter and config are the lesson**, not clutter. Keep `CHANGE ME` markers
  where the reader is meant to edit, and keep them rare enough to still mean something.
- **The site-wide footer is a `theme/index.ts` override, not a `themeConfig.footer` entry.**
  VitePress's built-in `themeConfig.footer` option only renders on `layout: doc` pages, never on
  `layout: home` or `layout: page`, which is every page in this repo. The `layout-bottom` slot,
  used in a custom `Layout` render function, is what actually shows on every layout. Leave the
  "Built with vitepress-marketing" credit and its link in place; it's the same permanent
  attribution `first-website` and `one-page-site` keep in their own hand-written footers, not a
  `CHANGE ME` placeholder.
- **The logo is one file, referenced twice, by two different mechanisms.** `docs/public/logo.svg`
  is a `CHANGE ME` placeholder: replace the file (any image format, same filename) and both the
  header and the footer pick it up, no code change needed. The header uses `config.mts`'s built-in
  `logo:` option, which VitePress base-prefixes itself. The footer's `<img>` is our own, in
  `theme/index.ts`, so it needs `withBase('/logo.svg')` explicitly, same as any other dynamic
  href/src outside markdown-it's link transform (see the link-handling entry above). If you rename
  the file, update both places, not just one.
- **Link internally with markdown syntax (`[text](/path)`), never a raw `<a href="/path">` tag.**
  VitePress rewrites a markdown-syntax link's `href` to include `base` at build time; it leaves a
  raw HTML anchor's `href` completely untouched. A raw `<a href="/#get-in-touch">` builds without
  error and works in `npm run dev` (which serves from `/`), then silently points at the wrong URL
  once deployed to a subpath. Need styling markdown's plain link syntax can't give you (a button
  look, say)? Put the classes on an inline element inside the link text instead:
  `` [<span class="...">Get a free quote</span>](/#get-in-touch) `` still renders as one `<a>`,
  still gets `base`-rewritten, and still carries the classes. `pricing.md`'s own CTA does exactly
  this.

## The form

The `action` ships as the literal placeholder `https://f.bootform.com/__YOUR_FORM_ID__`.

**Never replace it with a real form ID.** A form ID is the entire claim credential: whoever claims
one first owns it permanently, and every fork then delivers its visitors' messages to that person.
An unclaimed ID also exposes held submissions to anyone who reads the repo. The reader generates
their own in step 4 of the README. This is not negotiable and is not a placeholder-for-convenience.

The honeypot input must stay. It is hidden, unlabelled to screen readers, and filtering depends on
it being submitted empty.

## Adding a new kind of content

Want a section this template doesn't have yet, such as books, team members, events, or services?
Use the `add-collection` skill from [`BootForm/site-skills`](https://github.com/BootForm/site-skills)
(`/plugin marketplace add BootForm/site-skills`, then `/plugin install vitepress-sites@site-skills`).
It copies a shared card component, an entry header, a data loader and a listing page into this
repo, following every convention in this file, so each new entry afterwards is one markdown file.
The same files and steps are readable without the plugin, under
`plugins/vitepress-sites/skills/add-collection/` in that repo. It is also the way to replace the hand-maintained blog list with a generated one, if you outgrow it.

## Writing style

- Second person, present tense, short sentences.
- Say what will happen before asking them to run something, and say what they should see after.
- **No em dashes or en dashes.** Use a comma, a colon, a full stop, or brackets.
- No AI attribution in commits or pull requests, here or anywhere else in this organisation.
- Never claim BootForm offers EU data residency, a DPA, or an uptime SLA. It does not.

## Before changing anything

Run `npm run build` locally before committing. A build failure in GitHub Actions is slower to
diagnose than one on your own machine, and the workflow in this repo doesn't do anything `npm run
build` doesn't already do.

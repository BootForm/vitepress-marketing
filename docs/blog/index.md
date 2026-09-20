---
# `layout: page` gives a plain page with no sidebar and no docs-style prose column width, the same
# way the home page uses `layout: home`. Leave this frontmatter out and this becomes a regular docs
# article instead, which is the exact mistake this whole template exists to prevent.
layout: page
title: Blog
---

<!-- `prose` (from @tailwindcss/typography) styles plain markdown - headings, lists, links - without
     needing a Tailwind class on every single element. `max-w-none` drops prose's own default
     65-character width so our own `max-w-2xl` on this div wins instead. Any future blog post
     written in plain markdown gets this styling for free, which is the whole point: a reader
     shouldn't have to hand-class every paragraph just to write a post. -->
<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 py-16">

# Blog

<!-- CHANGE ME: this list is hand-maintained, on purpose. A real post index (tags, dates, RSS) is a
     bigger job than one template page should take on. See vitepress-blog when you need that. Add
     a link here each time you add a post file next to this one. -->

- [Why we started Cedar & Vine](/blog/why-we-started)
- [3 things we check before every quote](/blog/three-things-we-check)

</div>

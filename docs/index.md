---
# CHANGE ME: everything in this frontmatter block. `layout: home` is the one line that matters
# most: it is what makes this page a marketing homepage instead of a documentation page. Leave it
# out (or set `layout: doc`, VitePress's default) and this page renders like a docs article
# instead, sidebar-less hero and all.
layout: home

hero:
  name: "Cedar & Vine"
  text: "Landscapes people stop to look at."
  tagline: Lawn care, garden design and seasonal cleanup for homes in Ashgrove and nearby. Free quotes, no obligation.
  actions:
    - theme: brand
      text: Get a free quote
      link: '#get-in-touch'
    - theme: alt
      text: Read the blog
      link: /blog/

features:
  - title: Lawn care
    details: Mowing, edging and feeding, on a schedule that fits your yard.
  - title: Garden design
    details: A plan built around your soil, your light and what you actually want to maintain.
  - title: Seasonal cleanup
    details: Leaves in autumn, mulch in spring, storm damage whenever it happens.
---

<!-- ───── How it works ─────
     Plain markdown and HTML, same as the form section below. Everything on this page after the
     frontmatter is just the page's normal content; `layout: home` only changes what renders above
     it (the hero and features grid), not how content below is written. -->

<div class="mx-auto max-w-4xl px-6 py-16">

## How it works

<div class="grid gap-6 sm:grid-cols-3">
  <div>
    <p class="text-sm font-semibold text-brand-500">1. Tell us about your yard</p>
    <p class="text-sm opacity-70">Send a few photos and what you're hoping for. Takes two minutes.</p>
  </div>
  <div>
    <p class="text-sm font-semibold text-brand-500">2. Get a free quote</p>
    <p class="text-sm opacity-70">A real price, not a "call for pricing," usually within a day.</p>
  </div>
  <div>
    <p class="text-sm font-semibold text-brand-500">3. We show up and do it</p>
    <p class="text-sm opacity-70">On the date we agreed, with everything we need.</p>
  </div>
</div>

</div>

<!-- ───── Testimonial ───── -->

<div class="mx-auto max-w-2xl px-6 py-16">

## What neighbours say

<blockquote class="border-l-2 border-brand-500 pl-5 text-lg italic opacity-80">
They quoted a real price the same day and showed up exactly when they said they would. The garden
hasn't looked this good since we moved in.
</blockquote>

<p class="text-sm opacity-50">(a happy customer, not yet you)</p>

</div>

<!-- ───── The form ─────
     Replace __YOUR_FORM_ID__ below with the ID you generate in step 3 of the README. Everything
     else here already works. This is plain HTML inside a markdown file, which VitePress renders
     as-is: no Vue component needed for a form this simple. -->

<div class="mx-auto max-w-2xl px-6 pb-16">

## Get in touch {#get-in-touch}

<form action="https://f.bootform.com/__YOUR_FORM_ID__" method="POST" class="mx-auto flex max-w-md flex-col gap-4">

  <div class="flex flex-col gap-1">
    <label for="name" class="text-sm font-medium">Your name</label>
    <input id="name" name="name" type="text" required
           class="rounded-md border border-black/15 px-3 py-2 outline-none focus:border-brand-500 dark:border-white/15">
  </div>

  <div class="flex flex-col gap-1">
    <label for="email" class="text-sm font-medium">Your email</label>
    <input id="email" name="email" type="email" required
           class="rounded-md border border-black/15 px-3 py-2 outline-none focus:border-brand-500 dark:border-white/15">
  </div>

  <div class="flex flex-col gap-1">
    <label for="message" class="text-sm font-medium">What do you need done?</label>
    <textarea id="message" name="message" rows="4" required
              class="rounded-md border border-black/15 px-3 py-2 outline-none focus:border-brand-500 dark:border-white/15"></textarea>
  </div>

  <!-- A spam trap. Real people never see it, bots fill it in. Leave it alone. -->
  <input type="text" name="_honeypot" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true">

  <button type="submit" class="self-start rounded-md bg-brand-500 px-5 py-2 font-medium text-white hover:bg-brand-600">
    Send
  </button>
</form>

</div>

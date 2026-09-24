# A marketing site built with VitePress, not a docs site

This one is a step up from [first-website](https://github.com/BootForm/first-website) and
[one-page-site](https://github.com/BootForm/one-page-site): several pages that share a design, a
blog, and a real build step. It needs Node.js and a terminal, which those two don't.

By the end you will have a home page, a blog, and a working contact form, built with
[VitePress](https://vitepress.dev) and deployed automatically by GitHub Actions.

**[See what you are building →](https://bootform.github.io/vitepress-marketing/)**

## Why this exists

VitePress is usually reached for as a *documentation* tool, and its defaults show it: a sidebar,
a "previous/next page" footer, prose-width articles. Ask an AI coding agent for a VitePress
marketing site and it will, more often than not, hand you a docs site with the words changed,
because that's almost all VitePress content looks like in its training data.

This template is the fix. `layout: home` and `layout: page` (used throughout `docs/`) are what
turn off the docs chrome; [`AGENTS.md`](./AGENTS.md) says so explicitly, so an agent editing this
repo reads the rule instead of guessing.

---

## Before you start

You need:

- A free GitHub account.
- [Node.js](https://nodejs.org) 20 or later installed on your computer.
- Some comfort with a terminal. `git clone`, `npm install`, `npm run dev`, that level.

Don't have some of this yet, or not sure how? [Setting up your
computer](https://bootform.com/docs/computer-setup) walks through installing Git and Node.js, a
basic terminal tutorial, and installing and using VS Code, from scratch.

If any of that sounds like too much right now, [first-website](https://github.com/BootForm/first-website)
needs none of it and still ends with a real site and a working form.

---

## Step 1: Make your own copy

Click the green **Use this template** button at the top of this page, then **Create a new
repository**. Name it `vitepress-marketing`, or whatever you like.

> **Naming it something other than `vitepress-marketing`?** Open `docs/.vitepress/config.mts` and
> change `base: '/vitepress-marketing/'` (and the favicon path under `head`, in the same file) to match your repo's actual name (`/your-repo-name/`).
> Get this wrong and the deployed site looks completely unstyled, while `npm run dev` still works
> fine locally, since the dev server never uses `base`.

Then clone *your* new repository to your computer:

```bash
git clone https://github.com/yourname/vitepress-marketing.git
cd vitepress-marketing
npm install
```

---

## Step 2: Preview it locally

```bash
npm run dev
```

Open the address it prints, usually `http://localhost:5173`. That's your site, running on your
own computer. It still says Cedar & Vine. We'll fix that next.

Leave this running in its own terminal window while you edit; it reloads automatically.

---

## Step 3: Make it yours

Look for the lines marked `CHANGE ME`, across a few files:

- **`docs/.vitepress/config.mts`**: your site's title and description, the nav links, your social
  links.
- **`docs/public/logo.svg`**: your logo. Replace the file itself (any image format works, keep the
  filename `logo.svg` or update the two places that reference it, listed in `AGENTS.md`) and it
  updates in both the header and the footer, no other change needed.
- **`docs/.vitepress/theme/style.css`**: your brand colour. One value, used everywhere: buttons,
  links, VitePress's own accent colour.
- **`docs/index.md`**: the whole home page. The `hero` and `features` blocks at the top are plain
  YAML frontmatter, not Vue components: change the text, add or remove a feature, nothing to
  recompile by hand.
- **`docs/blog/index.md`** and **`docs/blog/why-we-started.md`**: the example post. Add a new post
  by copying `why-we-started.md`, and link it from `blog/index.md`.

Save a file and check the browser tab running `npm run dev`. It updates within a second or two.

> **Picking a colour is the hard part.** If you have no idea, `--color-brand-500: #2563eb` (a
> plain blue) is a safe default. Pick one colour; the darker/lighter shades around it in
> `style.css` are just that one colour, adjusted.

---

## Step 4: Make the contact form actually work

Here is the bit most tutorials skip.

A static site has no program running behind it, so there is nowhere for a form to send anything.
We will use [BootForm](https://bootform.com), because you can point a form at it and it works
immediately, with no account.

**4a. Generate your form ID.**

It is just a random UUID, and it has to be yours alone. Open BootForm's own [UUID
generator](https://bootform.com/uuidgenerator) and copy what it shows you (or run
`crypto.randomUUID()` in any browser console). You'll get something like
`11111111-1111-4111-8111-111111111111`, though a real one won't repeat digits like that.

> **Use your own.** Do not use the one printed above, and do not use a friend's. Whoever claims a
> form ID first owns it, and everything sent to it goes to them. Yours should be a fresh random one
> that nobody else has seen.

**4b. Paste it in.**

In `docs/index.md`, find this line:

```html
<form action="https://f.bootform.com/__YOUR_FORM_ID__" method="POST" class="mx-auto flex max-w-md flex-col gap-4">
```

Replace `__YOUR_FORM_ID__` with your ID. Save, and the running preview picks it up.

**4c. Try it, then claim it.**

Fill in the form on your local preview and send it. You'll land on a page asking you to claim the
form. Claiming creates a free account and delivers anything already sent. Do this **before** the
site goes live publicly (step 5) so nobody else can claim your ID first.

> **Don't leave it too long.** Held messages are kept for 48 hours before they are deleted.

---

## Step 5: Deploy it

**5a. Push your changes:**

```bash
git add -A
git commit -m "Make it mine"
git push
```

**5b. Turn on GitHub Pages, the Actions way** (different from `first-website`'s "deploy from a
branch," because this site needs a build step):

1. In your repository, click **Settings → Pages**.
2. Under **Source**, choose **GitHub Actions** (not "Deploy from a branch").

That's it. This repo already ships a workflow (`.github/workflows/deploy.yml`) that builds the
site and deploys it on every push to `main`. Check the **Actions** tab for progress; the first run
takes a couple of minutes.

Once it finishes, your site is live at `https://yourname.github.io/vitepress-marketing/`.

**5c. Optional: a real domain.** The same DNS steps as
[one-page-site's Step 5](https://github.com/BootForm/one-page-site#step-5-put-it-on-your-own-domain)
apply here too: a `CNAME` file in `docs/public/`, DNS records at your registrar, then **Enforce
HTTPS** in the same Pages settings. One extra step this template needs that `one-page-site`
doesn't: a custom domain serves from the root, not a `/vitepress-marketing/` subpath, so also
change `base: '/vitepress-marketing/'` to `base: '/'` in `docs/.vitepress/config.mts`, commit, and
push.

---

## That's it

You have a real, multi-page marketing site with a blog and a working contact form, built the way
VitePress is meant to be used for this, not the docs-site defaults.

### Where to go next

- [`site-skills`](https://github.com/BootForm/site-skills) if you use Claude Code: commands to add
  page sections, add a new kind of content (books, team members, events), change the theme and
  swap icons, all following this template's conventions.
- [`site-sections`](https://bootform.github.io/site-sections/) for copy-paste page sections (heroes,
  pricing, FAQs, footers) that survive VitePress's own styles.
| | |
|---|---|
| **A real blog engine** | [vitepress-blog](https://github.com/BootForm) when you want tags, dates and RSS, not a hand-maintained list. |
| **A portfolio** | [vitepress-portfolio](https://github.com/BootForm) when you have case studies to show. |
| **More form options** | File uploads, autoresponders, Discord and Slack: [bootform.com/docs](https://bootform.com/docs/). |

### Stuck?

Open an [issue](https://github.com/BootForm/vitepress-marketing/issues) and say what happened.

---

## Frequently hit problems

**`npm install` fails.** Check `node --version`; this needs Node.js 20 or later.

**My changes aren't showing in `npm run dev`.** Check the terminal it's running in for an error.
A typo in frontmatter YAML (the block between `---` lines) is the most common cause.

**The Actions deploy fails.** Open the failed run in the **Actions** tab and read its log; it's
almost always the same error `npm run build` would show locally. Run `npm run build` on your own
computer first to catch it there, where it's faster to fix.

**The form shows raw text instead of a nice page.** You are seeing the response as JSON. That is
normal for now. Once you claim the form you can set a redirect so people land back on your site.

## Licence

MIT. Do whatever you like with it, including using it for a real business.

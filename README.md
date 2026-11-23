# Johnny Lim — personal site

Plain HTML/CSS, no build step. GitHub Pages serves these files exactly as they are.

## What's in here

| File | What it does |
|---|---|
| `index.html` | Home page: profile, experience, skills, latest posts, contact |
| `blog/index.html` | List of all blog posts |
| `blog/seo-vs-geo/index.html` | Starter post. **Review and edit it before publishing; it goes out under your name** |
| `blog/post-template/index.html` | Copy this to start a new post (hidden from Google) |
| `assets/styles.css` | All styling |
| `assets/Johnny_Lim_Resume.pdf` | Resume download (phone number removed for the public version) |
| `assets/og-image.png` | Preview image shown when the link is shared on LinkedIn/WhatsApp |
| `sitemap.xml` | List of pages for Google (submit in Search Console) |
| `robots.txt` | Lets search engines and AI crawlers in; points to the sitemap |
| `llms.txt` | Plain-text summary of you and the site for AI tools |
| `404.html` | "Page not found" page |
| `.nojekyll` | Tells GitHub to serve the files as-is (keep this file) |

Every page has a title, a meta description, a canonical URL, Open Graph tags and JSON-LD schema
(Person, WebSite, ProfilePage, Blog, BlogPosting). All of it is linked to the same Person entity.

---

## Before you upload: two find-and-replace jobs

Do these in any text editor that can search across a folder (VS Code: Ctrl+Shift+H).

1. Replace `YOUR-USERNAME` with your GitHub username (lowercase).
2. Replace `you@example.com` with the email address you want shown on the site.

---

## Publishing on GitHub Pages (about 10 minutes, all in the browser)

1. **Create a GitHub account** at github.com if you don't have one. Your username becomes your
   web address: `https://username.github.io`.
2. **Create the repository.** Click **+ → New repository**. Name it **exactly**
   `username.github.io` (your username). Set it to **Public** and click **Create repository**.
   > Use this exact name. It puts the site at the root of the address, which the canonical URLs,
   > sitemap and 404 page all expect.
3. **Upload the files.** On the new repo page, click **uploading an existing file**. Unzip the site
   on your computer, open the folder, select everything *inside* it (including the `blog` and
   `assets` folders) and drag it into the browser. Click **Commit changes**.
   - `.nojekyll` is a hidden file. On a Mac, press **Cmd+Shift+.** in Finder to show it.
     If it doesn't upload, click **Add file → Create new file**, name it `.nojekyll`, leave it empty
     and commit.
4. **Turn on Pages.** Go to **Settings → Pages**. Under *Build and deployment*, set Source to
   **Deploy from a branch**, Branch to **main** and folder to **/ (root)**. Click **Save**.
5. Wait 1–2 minutes and visit `https://username.github.io`. The Actions tab shows build progress.

### Get it into Google

1. Go to Google Search Console → **Add property → URL prefix** → enter your site address.
2. Verify with the **HTML tag** method: copy the `<meta name="google-site-verification" ...>` tag
   and paste it into `index.html` on the line after `<meta charset="utf-8">`. Commit, then click Verify.
3. Go to **Sitemaps** and submit `sitemap.xml`.
4. Do the same in Bing Webmaster Tools. You can import straight from Search Console. Bing's index
   feeds several AI search tools, so this is worth the five minutes.

---

## Adding a blog post

1. In GitHub, open `blog/post-template/index.html` and copy its contents.
2. Click **Add file → Create new file** and name it `blog/your-post-slug/index.html`.
   Use a short slug with hyphens, e.g. `blog/geo-for-recruitment-firms/index.html`.
3. Paste the template and replace:
   - the `<title>`, `meta description`, `og:title`, `og:description`
   - `your-post-slug` in the canonical URL, `og:url` and `mainEntityOfPage`
   - the dates (`datePublished`, `dateModified`, the visible date)
   - the headline, the "Short answer" box and the body
   - **delete** the yellow note box and the `<meta name="robots" content="noindex">` line
4. Add the post to the top of the list in `blog/index.html` and in the "Latest writing" section of
   `index.html`. Copy an existing `<li>…</li>` block and edit it.
5. Add a `<url>` line to `sitemap.xml` and a line to `llms.txt`.
6. Commit. The post is live in a minute or two.

When you update a post later, change its `dateModified` and the `<lastmod>` in `sitemap.xml`.

**Tip for GEO:** put a direct 2–3 sentence answer in the "Short answer" box, use headings phrased
the way people ask questions, and include something original: your own data, examples or opinion.
That's the part AI answer engines tend to quote.

## Optional: your own domain

Buy a domain (e.g. johnnylim.com), then in **Settings → Pages → Custom domain** enter it and follow
GitHub's DNS instructions. After that, find-and-replace `https://username.github.io` with
`https://johnnylim.com` across all files, so the canonical URLs and sitemap match.

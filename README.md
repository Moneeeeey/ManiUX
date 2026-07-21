# Joshua Lucas — Portfolio (rebuild)

A static, no-build-tools recreation of the joshglucas.com layout, type, and
hover interactions: dark background, a wide horizontal hero split, a 3-across
project card grid with a cursor-tracked spotlight on hover, and an editorial
case-study template with alternating label/body columns underneath.

Layout is horizontal-first (built for laptop/desktop width) and collapses to
a single column at tablet (1080px) and phone (640px) breakpoints.

## Files

- `index.html` — homepage
- `stadia.html` — case study template (Stadia Store Redesign), reuse this
  structure for other projects (duplicate the file, swap the content)
- `styles.css` — all styling, one file, CSS variables at the top for colors/fonts
- `script.js` — the cursor-follow hover preview on the project list

## Customizing

1. **Your info** — edit the name, tagline, and social links at the top of `index.html`.
2. **Real project images** — the boxes labeled "drop in your own image" in
   `stadia.html` and the colored swatch in the hover preview are placeholders
   (kept deliberately generic rather than reusing anyone else's photos/videos).
   Replace `<div class="placeholder">...</div>` with an `<img>` or `<video>` tag,
   and swap the swatch `<div>` in `index.html`/`script.js` for a small thumbnail
   image per project if you want real imagery following the cursor.
3. **More case studies** — duplicate `stadia.html`, rename it (e.g. `search-labs.html`),
   update the content, then point the matching link in `index.html` to it.
4. **Colors/fonts** — all in the `:root` block at the top of `styles.css`.

## Hosting on GitHub Pages

1. **Create a new repository** on GitHub (e.g. `portfolio`, or `<your-username>.github.io`
   if you want it at the root of your GitHub domain instead of a subpath).
2. **Push these files** to the repo:
   ```bash
   cd site
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. **Turn on Pages**: on GitHub, go to your repo → **Settings** → **Pages** →
   under "Build and deployment" set **Source** to "Deploy from a branch" →
   pick **`main`** and **`/ (root)`** → **Save**.
4. GitHub will build and give you a URL:
   - `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`
   - `https://<your-username>.github.io/<repo-name>/` otherwise
   It usually goes live within a minute or two.
5. **Custom domain (optional)**: in the same Pages settings, add your domain
   under "Custom domain," then at your domain registrar add a `CNAME` record
   pointing to `<your-username>.github.io`.

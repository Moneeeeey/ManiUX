# Your Name — Portfolio

A static, no-build-tools recreation of the joshglucas.com homepage and
project-page pattern: white background, a rounded coral gradient hero
with an animated blurred-blob background, a bordered marquee ticker
("CASE STUDIES | DESIGN PROCESS"), a 3-across project grid with
hover-reveal name tags, and a project/case-study template with
scroll-triggered reveal animations.

All names, social links, and images from the original site have been
replaced with placeholders for you to fill in with your own.

## Files

- `index.html` — homepage (header, hero, marquee, project grid)
- `project-template.html` — the reusable case-study page template, with
  every interaction from the homepage (header, marquee) plus its own:
  scroll-reveal sections, a pull-quote, a stats row, and a "next project"
  link
- `project-1.html`, `project-2.html`, `project-3.html` — working copies
  of the template, already linked from the three homepage cards and
  chained to each other via "next project" (1 → 2 → 3 → 1)
- `styles.css` — the whole design system: colors, radii, and fonts as
  CSS variables at the top, then component styles
- `script.js` — the hero tagline's per-letter reveal animation, the
  draggable/looping marquee, and the scroll-reveal (IntersectionObserver)
  used on project pages

## Fonts

The real site uses two paid fonts (Quincy CF Italic, NB Architekt) that
aren't publicly licensable, so this rebuild substitutes close free
Google Fonts instead:

- **Quincy CF Italic** → **Instrument Serif** (italic) — the big italic
  serif used for the hero tagline, project titles, and pull-quotes
- **NB Architekt** → **DM Mono** — the small uppercase mono used in the
  marquee ticker and section labels
- **Karla** is the same font the real site uses for UI text (nav, buttons,
  names), loaded from Google Fonts

## Customizing

1. **Your info** — in `index.html`: the `.brand` link text, the hero
   `data-reveal-text` tagline, the two `.meta-item` labels (city/company),
   and the three `.pill-btn` social links. Repeat the same edits in
   `project-template.html` / `project-1..3.html` for the header.
2. **Real project images** — replace `.project-card__placeholder-label`
   (homepage cards) and `.project-cover` / `.gallery__item`
   (project pages) with an `<img>` or `<video>` covering the element;
   the border-radius is already set on the parent so it'll clip
   correctly. The `--grad-a` / `--grad-b` inline CSS variables set each
   placeholder's gradient — remove them once you add a real image.
3. **More case studies** — duplicate `project-template.html`, rename it,
   fill in the bracketed `[...]` placeholder copy, and point a project
   card on `index.html` (and the neighboring project's "next project"
   link) at the new file.
4. **Colors/fonts/radii** — all in the `:root` block at the top of
   `styles.css`.

## Hosting on GitHub Pages

1. **Create a new repository** on GitHub (e.g. `portfolio`, or
   `<your-username>.github.io` if you want it at the root of your GitHub
   domain instead of a subpath).
2. **Push these files** to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. **Turn on Pages**: on GitHub, go to your repo → **Settings** → **Pages**
   → under "Build and deployment" set **Source** to "Deploy from a branch"
   → pick **`main`** and **`/ (root)`** → **Save**.
4. GitHub will build and give you a URL:
   - `https://<your-username>.github.io/` if the repo is named
     `<your-username>.github.io`
   - `https://<your-username>.github.io/<repo-name>/` otherwise
   It usually goes live within a minute or two.
5. **Custom domain (optional)**: in the same Pages settings, add your
   domain under "Custom domain," then at your domain registrar add a
   `CNAME` record pointing to `<your-username>.github.io`.

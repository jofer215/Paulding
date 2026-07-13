# Paulding County History Archive

A community-maintained, open-source archive of historical documents, maps,
articles, and research links about **Paulding County, Ohio**. This is a
county-history project, not a genealogy database — the focus is on the
place, its institutions, and its past, not individual family trees.

The site is a static Jekyll site hosted on GitHub Pages, browsable at:

**https://jofer215.github.io/paulding/**

## What's here

- **Documents** — scanned deeds, meeting minutes, government records, and other primary sources
- **Maps** — plat maps, atlases, and surveys of the county
- **Articles** — newspaper clippings, essays, and written histories
- **Links** — curated links to external archives, societies, and research resources

Every item has a small amount of structured metadata (type, era, source,
rights) so it can be browsed, filtered, and searched from `/browse.html` or
from each section's own page.

## Contributing

Adding a new document, map, article, or link is a matter of adding one
Markdown file with a short front-matter block — no build tools or Jekyll
knowledge required. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the
step-by-step guide and a copy-paste template.

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/paulding/ in a browser. (The `/paulding/`
prefix comes from `baseurl` in `_config.yml` — update it if you rename or
fork the repo.)

## Project structure

```
_items/            One Markdown file per material (document, map, article, link)
_data/eras.yml      Controlled list of eras used for filtering
_layouts/           Page templates (default page, item detail page)
_includes/          Reusable page pieces (header, footer, item card, filters)
assets/css/         Site styling
assets/js/          Client-side filtering (no build step, no dependencies)
assets/files/       Scanned files (images, PDFs), organized by material type
documents/, maps/, articles/, links/   Section index pages
browse.html         Search/filter across all materials at once
```

## License / rights

This repository bundles two different things with two different licensing
situations:

- **The site's code** — layouts, includes, CSS, JS, and configuration — is
  open source under the [MIT License](LICENSE). Fork it, reuse it, adapt it
  for your own county's archive.
- **The archived historical materials** (`_items/`, `assets/files/`) are
  *not* covered by that license. Rights vary item by item — some are public
  domain, some are reproduced with the source organization's permission,
  some have unconfirmed status — and each item's own `rights` front-matter
  field documents its specific situation. Check that note before reusing any
  scanned content, transcription, or newsletter.

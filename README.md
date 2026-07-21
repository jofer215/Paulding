# Studying Paulding County

*History, Archives, and Stories from Paulding County, Ohio*

A community-maintained, open-source archive of historical documents, maps,
articles, and research links about **Paulding County, Ohio**. This is a
county-history project, not a genealogy database — the focus is on the
place, its institutions, and its past, not individual family trees.

The site is a static Jekyll site hosted on GitHub Pages, browsable at:

**https://jofer215.github.io/Paulding/**

## AI Disclosure

This project was built with the help of Claude (Anthropic's AI model),
working under a human's direction throughout. To be specific about who
did what:

- **A human researched, located, and sourced every historical item in
  this archive** — scanned documents, old newsletters, photographs,
  bibliographic references, and links to outside archives all came from
  a human researcher's own collecting and reviewing, not from the AI
  independently searching for material.
- **Claude built the site itself** — the Jekyll structure, layouts,
  styling, and the client-side filtering/search — and was also used to
  process the source material the researcher provided: transcribing
  scanned text, drafting item descriptions, cross-referencing entries,
  and organizing everything into this repository's file structure.
- **A human reviewed and approved every addition** before it was
  committed, including flagging and holding back sensitive or unverified
  material for further review (see [ROADMAP.md](ROADMAP.md)).

In short: the history is human-researched; a substantial amount of the
transcription, drafting, and all of the site engineering were
AI-assisted. If you're citing material from this archive, cite the
original historical source noted in that item's own metadata, not this
project or its AI assistance.

## What's here

- **Documents** — scanned deeds, meeting minutes, government records, and other primary sources
- **Maps** — plat maps, atlases, and surveys of the county
- **Articles** — newspaper clippings, essays, and written histories
- **Books** — books about Paulding County, cataloged by citation or fully transcribed
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

This repo is pinned to **Ruby 3.1.4** via `.ruby-version` — newer
Rubies (3.4+/4.x) drop gems the old `github-pages`/Jekyll toolchain
needs, and break a `liquid` gem method it calls. Install it with
[rbenv](https://github.com/rbenv/rbenv) (`rbenv install 3.1.4`) rather
than using your system Ruby or Homebrew's default one.

```bash
bundle install
LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 bundle exec jekyll serve
```

(The `LANG`/`LC_ALL` variables work around a Sass encoding bug that
otherwise fails on non-ASCII characters in the stylesheets — you'll
know you need them if you see a "US-ASCII character" error.)

Then open http://localhost:4000/Paulding/ in a browser. (The `/Paulding/`
prefix comes from `baseurl` in `_config.yml`, and must match the exact case
of the GitHub repo name — update both if you rename or fork the repo. Note:
GitHub often rejects a repo rename that only changes case — e.g. `Paulding`
to `paulding` — so a true case change may require renaming to a different
name first, then renaming again to the desired lowercase name.)

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

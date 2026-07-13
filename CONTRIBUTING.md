# Contributing to the Paulding County History Archive

Thank you for helping build this archive. You don't need to know Jekyll,
Ruby, or web development to contribute — you need a scanned file (or a
link) and a small block of metadata.

There are two ways to contribute:

1. **Suggest a resource** by [opening an issue](../../issues/new/choose) —
   good if you don't want to touch git/GitHub directly. A maintainer will
   add it for you.
2. **Add it yourself** via a pull request — good if you're comfortable with
   GitHub's web editor or git. Steps below.

## Adding an item yourself

Every item (document, map, article, or link) is one Markdown file in the
`_items/` folder. The file has two parts:

- A **front matter** block (metadata between `---` lines) that drives
  filtering, cards, and the detail page
- An optional **body** below it, in Markdown, for a transcription, extra
  context, or notes

### 1. Add the scanned file (skip this for links)

Put the scan in `assets/files/<type>/`, using a short, descriptive,
lowercase-with-hyphens filename:

- `assets/files/documents/` — deeds, minutes, records
- `assets/files/maps/` — plats, atlases, surveys
- `assets/files/articles/` — clippings, essays

Prefer `.jpg` or `.png` for images (they display inline) and `.pdf` for
multi-page documents. Keep individual files under ~10 MB where possible —
compress large scans before adding them.

### 2. Add the metadata file

Create a new file in `_items/`, named after the item, e.g.
`_items/1875-plat-map.md`. Copy this template and fill it in:

```yaml
---
title: "Short, descriptive title"
type: document            # one of: document, map, article, link
era: 1880-1920             # pick the closest match from _data/eras.yml
date: 1893-06-15           # optional; use whatever precision you know (YYYY or YYYY-MM-DD)
description: "One or two sentences shown on the browse card."
source: "Where this came from, e.g. an archive, courthouse, or family collection"
rights: "Copyright/public-domain status, e.g. 'Public domain (published before 1928)'"
file: /assets/files/documents/1875-plat-map.jpg   # omit for type: link
external_url: "https://example.org"                # only for type: link
tags: [tag-one, tag-two]
---

Optional longer notes, transcription, or context go here in Markdown.
```

Notes on the fields:

| Field          | Required          | Notes                                                                 |
|----------------|--------------------|------------------------------------------------------------------------|
| `title`        | yes                | Displayed everywhere; keep it concise                                 |
| `type`         | yes                | Must be exactly one of `document`, `map`, `article`, `link`           |
| `era`          | yes                | Must match a `key` from [`_data/eras.yml`](_data/eras.yml)            |
| `date`         | no                 | Enables sorting by recency and shows a year on the card               |
| `description`  | recommended        | Shown on the browse/section card                                     |
| `source`       | recommended        | Credit the archive, institution, or person who provided it            |
| `rights`       | recommended        | Copyright/public-domain status — important for reuse                  |
| `file`         | for document/map/article | Path to the scanned file under `assets/files/`                  |
| `external_url` | for link           | The URL being linked to                                               |
| `tags`         | no                 | Freeform keywords, shown on the detail page and searchable            |

If you need a new era bucket, propose it by editing `_data/eras.yml` in the
same pull request and explaining why in the PR description — please keep
the list short, since it's used as a filter.

### 3. Preview your change (optional but encouraged)

```bash
bundle install
bundle exec jekyll serve
```

Visit http://localhost:4000/paulding/ and check your new item's card and
detail page look right.

### 4. Open a pull request

Include:

- What the item is and where it came from
- Confirmation you have the right to share it (public domain, permission
  granted, or your own material)

A maintainer will review for correct metadata and formatting, then merge.

## Style guidelines

- Keep filenames lowercase, hyphenated, and descriptive (`1875-plat-map.jpg`, not `IMG_0001.jpg`).
- Prefer specific, searchable titles over vague ones ("1893 Flood Damage Report" rather than "Old Document").
- Always fill in `rights` — if you're unsure of the copyright status, say so rather than guessing (e.g. "Status unknown; predates 1900").
- Don't include personal genealogical records (family trees, obituaries focused on individuals) — this archive is scoped to county history, not genealogy.

# Roadmap / Open Items

Working notes on what's pending for this archive. Not part of the
published site (see `_config.yml`'s `exclude:` list).

## Needs your review before publishing

### "Jim Powell" — HIGH PRIORITY, do not publish without reading first

Source: `pOG4823` (the Don H. Price newspaper-column scan you sent
2026-07-13), the final piece in the document, titled "JIM POWELL." Not
yet transcribed anywhere in this repo — the rest of that same scan was
processed into
[`_items/paulding-countys-past-don-price.md`](_items/paulding-countys-past-don-price.md),
which explicitly notes "Jim Powell" is being held back.

What it's about: vote-buying targeting Black voters in 1890s Paulding
(a wealthy lawyer's household reportedly paid Black men to vote a
straight ticket via Jim Powell, described as "the leader of the colored
people"), and an 1894 double child-murder in Crane Township. A white
teenager, Charley/Charles Hart, was arrested along with two Black men;
the two Black men were released and Hart was tried in Defiance County
(venue change) and hanged. The piece states Jim Powell later claimed
"the man who murdered the [Good] children was still walking the streets
of Paulding" — implying, through coded language, that Hart may have been
wrongfully executed and the actual killer was someone Powell was
protecting or declining to name.

**Important counter-evidence to weigh:** this archive's
[`_items/history-of-paulding-county-sheriffs-office.md`](_items/history-of-paulding-county-sheriffs-office.md)
now includes an **official Ohio Penitentiary execution record dated
December 21, 1894**, naming the victims as Ashby and Elsie Good and
describing Charles Hart acting alone, with a specific stated motive
(concealing an assault on Elsie). That's a formal state record, not
folklore — it directly complicates the "Jim Powell" account's central
implication. Read both before deciding anything.

Your options, as discussed:
1. Add "Jim Powell" with heavy editorial framing/context
2. Skip it entirely
3. Something else once you've read it

### Mystery/sensitive files already handled cautiously
- **Della: Correspondence 1906-1907** — added as a `link`-type entry
  (external, not hosted locally) per your earlier decision to include it
  as-is. You've now sent the actual PDF (`20160519_ferrisjoshua_mms647.pdf`)
  — it hasn't been re-hosted locally or transcribed; flag if you want that
  reconsidered.

## Still waiting on source material

- **1892 Historical Atlas of Paulding County** — we have a direct link
  (`1892paulding.pdf` on your old WordPress site) but not the file itself.
  Currently just a bibliography `link` entry
  ([`_items/historical-atlas-paulding-county-1892.md`](_items/historical-atlas-paulding-county-1892.md)).
  Send the PDF and this becomes a real `document`/`map` entry.
- **"The Cider Mills"** — listed in Don H. Price's original 15-article
  table of contents but missing from the `pOG4823` scan. If a copy turns
  up, it belongs in `_items/paulding-countys-past-don-price.md`.
- **Canal Towns Were Numerous, Parts One and Two** — Part Three is
  transcribed ([`_items/canal-towns-were-numerous-1922.md`](_items/canal-towns-were-numerous-1922.md)),
  but the earlier installments (referenced as having run in an October/
  November newsletter and a January/February newsletter of an
  unspecified year) haven't surfaced yet.
- **400MB WordPress media tar** — you're planning to push extracted files
  to a `raw-media-import` branch (or similar) for curation. `uploads/` is
  already excluded from the Jekyll build to receive it.

## Structural/process notes

- Site baseurl must match the GitHub repo's exact name casing
  (`/Paulding`, capital P) — a same-case rename attempt failed on
  GitHub's side ("Repository name was not changed"), so this repo is
  staying capitalized for now. If you retry the rename later (GitHub
  sometimes requires renaming to an intermediate name first, then to the
  final lowercase name), remember to flip `_config.yml`'s `baseurl` and
  `repository`, and the two URLs in `README.md`, to match.
- Development branch is `paulding-county-oh` (renamed from
  `claude/paulding-county-history-site-9g199v`); PRs merge into `main`.

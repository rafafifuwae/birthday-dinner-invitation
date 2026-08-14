# Birthday Dinner Invitation

Live: https://rafafifuwae.github.io/birthday-dinner-invitation/

A standalone art-deco invitation card. Friday, 4 September 2026 — pick-up at
18.30 WIB, doors at 20.00, Donna Bar & Lounge.

## Files

- `index.html` — the page GitHub Pages serves. Self-contained: no fonts, scripts
  or images are fetched from anywhere else.
- `og.png` — the thumbnail WhatsApp and other apps show for the link.
- `robots.txt` — keeps the page out of search results. The link still works for
  anyone who has it.
- `source.html` — the same page without the `<head>`. This is the file to edit.
- `build-site.js` — rebuilds `index.html` from `source.html`.

## Changing the words

For a small text change, edit `index.html` directly, commit, and push. Pages
redeploys in about a minute.

For anything larger, edit `source.html` and run `node build-site.js`, which
rewrites `index.html` around it.

If you change the name or the opening line, `og.png` is now out of date — those
two appear in it. Rebuild, then screenshot `og.html` at 1200×630, save it over
`og.png`, and delete `og.html`.

## The card changes with the date

Three states, all driven by the clock. Nothing needs to be switched on.

| From | Shows |
| --- | --- |
| now | a live countdown; the days column disappears on the day itself |
| 4 Sep, 18.30 WIB | **Tonight** — "Everything's ready. I'm already on my way." |
| 5 Sep, 04.00 WIB | **Afterward** — "You showed up. Same table next year." |

Every boundary is an absolute instant at `+07:00`, so the phone's timezone
cannot shift it. The three times live at the top of the countdown block in
`source.html`; change the pick-up line in the card to match if you move it.

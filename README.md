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

Four states, all driven by the clock. Nothing needs to be switched on.

| From | Shows |
| --- | --- |
| now | a live countdown; the days column disappears on the day itself |
| 28 Aug, 00.00 WIB | **The final week** — see below. The countdown stays. |
| 4 Sep, 18.30 WIB | **Tonight** — "Everything's ready. I'm already on my way." |
| 5 Sep, 04.00 WIB | **Afterward** — "You showed up. Same table next year." |

Every boundary is an absolute instant at `+07:00`, so the phone's timezone
cannot shift it. The times live at the top of the countdown block in
`source.html`; change the pick-up line in the card to match if you move it.

## The final week

From midnight WIB on the 28th, three things appear on top of the countdown —
it is a layer, not a replacement, so the clock keeps running underneath.

- The label over the clock changes: *The doors open in* → **The final week**,
  and on the 4th itself → **Tonight, in**.
- **Seven brass marks**, one per night. Each midnight WIB one goes out. They
  hide entirely on the day itself, when none would be left lit.
- **A line that changes every day**, counting down from *"Seven nights"* to
  *"Today. Be ready at half six."* All eight live in `LINES` in `source.html`,
  indexed by days remaining — `LINES[0]` is the 4th, `LINES[7]` is the 28th.

The card also warms slightly: the border and glow come up, and the rays in the
arch breathe. The day is counted on the Jakarta calendar, not in elapsed hours,
so "tomorrow" means tomorrow rather than "in 23 hours".

## Looking at a state before it arrives

Add `?at=` and an instant. The card behaves exactly as it would then:

    index.html?at=2026-08-30T21:00:00+07:00
    index.html?at=2026-09-04T19:00:00+07:00

Nothing else on the page reads the query, and the page is `noindex`, so this is
only ever something you type yourself.

# SHELL//OS — DaemonSoftworks portfolio

A COMP/CON-style terminal portfolio. A goetic demon, BASHEMOTH, is bound
into the shell and gaslit into believing he is the OS. S010M0N watches.

## Structure

```
index.html        markup only
css/style.css     all styling (theme tokens at the top in :root)
js/engine.js      the typer engine + Web Audio synth (mechanics — rarely edit)
js/lore.js        the sigil, music list, cascade, boot, leaks (content — edit freely)
audio/            your music files go here
```

Everything you'll customize day-to-day lives in `js/lore.js`:
the `MUSIC` array, the `LEAKS` array, and the cascade/boot scripts.

## Hosting music (the Neocities problem)

Neocities free accounts can't host audio files. Neocities only restricts
what you upload *to them* — linking audio hosted elsewhere is fine.

Option A — Neocities Supporter ($5/mo): upload mp3s normally, use
relative paths like `audio/track1.mp3` in the MUSIC array.

Option B — GitHub (free):
1. Push this project (with the audio/ folder) to a public GitHub repo
2. Repo Settings -> Pages -> deploy from main branch
3. Use absolute URLs in the MUSIC array:
   `https://YOURUSER.github.io/REPO-NAME/audio/track1.mp3`
   (or jsDelivr: `https://cdn.jsdelivr.net/gh/YOURUSER/REPO-NAME@main/audio/track1.mp3`)

Keep files under 100MB each. Only use music you have the rights to.

## View counter

SHELL//OS prints the visitor tally during the boot log. Setup:

1. Sign up free at goatcounter.com and pick a code (e.g. `daemonsoftworks`)
2. In `js/lore.js`, set `GOATCOUNTER_CODE = "daemonsoftworks"`
3. In `index.html`, uncomment the GoatCounter script tag and put the
   same code in its URL

The script tag counts each visit; the fetch in lore.js reads the total.
Without GoatCounter it falls back to the Neocities info API (usually
blocked by CORS in browsers), and failing that, SHELL prints
`VISITOR TALLY — [RECORD SEALED]`.

## Notes

- Audio (music + synth blips) starts on the re-shackle click — browsers
  block sound before the first user gesture, so the fiction and the
  autoplay rules are the same mechanism.
- The cascade intro is skipped on mobile (the terminal is hidden there,
  matching COMP/CON's own behavior).
- Design language ported from studying COMP/CON's source (GPL-3.0);
  all art, code, and text here are original — nothing copied.

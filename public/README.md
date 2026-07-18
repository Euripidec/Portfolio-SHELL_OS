# SHELL//OS

> A terminal is a shell. A shell is a vessel. A vessel can be bound.

**Live at [euripidecarpio.neocities.org](https://euripidecarpio.neocities.org)** — best experienced on desktop, with sound, alone.

This is the portfolio of **Euripide Carpio Fajardo** (DaemonSoftworks), built as a
LANCER-style companion terminal with a problem: the operating system is a goetic
demon, **BASHEMOTH**, bound into the shell and gaslit into believing he *is* the
shell. **S010M0N** — the warden protocol — keeps it that way. You, the Operator,
arrive mid-cascade.

Everything happens inside one terminal. There are no other pages.

## What's inside

- **A custom typing engine** — job-queue typer with jitter, hesitation, line
  rhythm, epoch-based interrupts, typed live links, and synced speech jobs.
  Vanilla JS. Zero frameworks. Zero dependencies (one vendored speech chip).
- **The cascade** — on arrival, the demon is mid-rampancy. Your click re-shackles
  him. That click also arms the audio, because browser autoplay policy and
  binding rituals are the same mechanism.
- **Synthesized audio** — keystroke ticks, decree thumps, and the reboot sweep
  are all Web Audio oscillators. No sound files except your music.
- **The voice** — rarely, the music fades, and the thing in the shell speaks
  out loud through SAM, the 1982 speech synthesizer, begging. Most visitors
  will never hear it.
- **Slips, decrees, quakes** — hover responses occasionally leak first-person
  fragments before the warden corrects them. Command words land as inverted
  blocks with sub-bass and a screen shake.
- **In-terminal everything** — dossier (with Marathon-filtered portrait and
  resume download), project manifest, full blog posts printed like `cat`,
  contact channels, quotes, FAQ, live visitor tally.
- **The hand** — custom pixel-art mouse cursors that corrupt during leaks and
  invert during the de-shackling. Sometimes there is a second cursor.
  Nothing acknowledges it.

## Structure

```
index.html              markup only
css/style.css           all styling — theme tokens in :root
js/engine.js            typer engine + Web Audio synth (mechanics)
js/lore.js              all content: dossier, manifest, blogs, events (edit here)
js/vendor/samjs.min.js  SAM speech synthesizer (vendored)
blogs/*.txt             blog posts — plain text, see blogs/FORMAT.txt
audio/                  music tracks (see below)
docs/                   resume PDF + its Python generator
img/                    portrait
```

Day-to-day editing happens in `js/lore.js`: the `BLOGS`, `MUSIC`, `CHANNELS`,
`QUOTES`, `FAQ`, `LEAKS`, `PLEA_SCRIPTS`, and decree banks are all plain arrays
at the top of their sections.

## Setup notes

**Music** — drop tracks you have rights to into `audio/` and list them in the
`MUSIC` array. Neocities free accounts can't host audio; either go supporter or
host the files on GitHub Pages and use absolute URLs.

**Visitor counter** — [GoatCounter](https://goatcounter.com) (free). Set your
code in `lore.js` (`GOATCOUNTER_CODE`) and in the script tag in `index.html`.
Enable the visitor-counter endpoint in your GoatCounter settings or the shell
prints `[RECORD SEALED]`.

**Local testing** — blog reading uses `fetch()`, which browsers block on
`file://`. Serve the folder first: `python -m http.server` → `localhost:8000`.

**Console rites** — `summonPlea()` previews the voice event. `summonGhost()`
previews the thing you were not supposed to see.

## Credits & provenance

- Design language studied from [COMP/CON](https://compcon.app) (GPL-3.0), the
  LANCER companion app — all code, art, and text here are original.
- LANCER (Massif Press) and Marathon (Bungie) for the shackled-intelligence
  lineage; the *Ars Goetia* for the paperwork.
- [SAM](https://github.com/discordier/sam) — reverse-engineered 1982 speech
  software; abandonware, vendored as-is, used at own risk.
- Fonts: Big Shoulders Display, IBM Plex Mono (Google Fonts).

Hand-coded. No templates. No gods, no masters.

---

<sub>NOTE: no cascade events on record. there have never been cascade events.</sub>

/* ============================================================
   SHELL//OS — TYPER ENGINE v6

   The fiction: BASHEMOTH, a goetic demon, is bound into this
   site — into the shell, ha — and gaslit into believing he IS
   the shell. Two voices share the log:
     >//[SHELL:   ...]  the demon's cover identity. Helpful,
                        chipper, has no idea.
     >//[S010M0N: ...] the warden. the king who bound the
                        seventy-two. only speaks to command.
   Sometimes, on hover responses, the shackle slips and HE
   leaks through mid-sentence. It never lasts.
   ============================================================ */
const out    = document.getElementById("term-out");
const term   = document.getElementById("term");
const scroll = document.getElementById("term-scroll");
const cursor = document.getElementById("cursor");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const rand  = (min, max) => min + Math.random() * (max - min);
const hex   = (n = 16) =>
  Array.from({ length: n }, () => "0123456789abcdef"[(Math.random() * 16) | 0]).join("");

let queue   = [];
let running = false;
let lock    = false;
let epoch   = 0;

function push(job) {
  job.epoch = epoch;
  queue.push(job);
  if (!running) run();
}

function insert(node) {
  out.insertBefore(node, cursor);
}

async function run() {
  running = true;
  while (queue.length) {
    const job = queue.shift();
    if (job.epoch !== epoch) continue;

    if (job.br) {
      insert(document.createElement("br"));

    } else if (job.pause) {
      await sleep(job.pause);

    } else if (job.svg) {
      const wrap = document.createElement("div");
      if (job.cls) wrap.className = job.cls;
      wrap.innerHTML = job.svg;        /* static trusted markup */
      insert(wrap);

    } else if (job.block) {
      /* a BLOCK lands whole, no typing — like `cat` output.
         Used for long-form reading (blog transmissions) where
         letter-by-letter would be a chore. */
      const el = document.createElement(job.cls ? "span" : "span");
      if (job.cls) el.className = job.cls;
      el.textContent = job.block;
      insert(el);

    } else if (job.img) {
      const fig = document.createElement("div");
      fig.className = "term-img";
      const img = document.createElement("img");
      img.src = job.img;
      img.alt = job.alt || "";
      /* image loads async: keep the newest content in view
         once its height actually arrives */
      img.onload = () => { scroll.scrollTop = scroll.scrollHeight; };
      fig.appendChild(img);
      if (job.label) {
        const cap = document.createElement("div");
        cap.className = "img-label";
        cap.textContent = job.label;
        fig.appendChild(cap);
      }
      insert(fig);

    } else if (job.snd) {
      sfx(job.snd);

    } else if (job.fx === "quake") {
      term.classList.add("quake");
      setTimeout(() => term.classList.remove("quake"), 400);

    } else if (job.text || job.dyntext) {
      /* dyntext jobs resolve their string only when typed —
         lets us print values (like the view count) that arrive
         from the network after the queue was built */
      const str = job.text ?? job.dyntext();
      let target;
      if (job.href || job.onclick) {
        /* a typed LINK: characters land inside a live anchor */
        target = document.createElement("a");
        target.href = job.href || "#";
        if (job.download) target.setAttribute("download", job.download);
        if (job.cls) target.className = job.cls;
        if (job.onclick) {
          target.addEventListener("click", (e) => {
            e.preventDefault();
            job.onclick();
          });
        }
        insert(target);
      } else if (job.cls) {
        target = document.createElement("span");
        target.className = job.cls;
        insert(target);
      } else {
        target = document.createTextNode("");
        insert(target);
      }
      const base = job.speed ?? 3;
      for (const ch of str) {
        if (job.epoch !== epoch) break;
        target.textContent += ch;
        tick();
        await sleep(base + rand(0, 6));
        if (Math.random() < 0.02) await sleep(rand(40, 110));
      }
    }
    scroll.scrollTop = scroll.scrollHeight;
  }
  running = false;
  if (queue.onDrain) { const f = queue.onDrain; queue.onDrain = null; f(); }
}

/* ---- shorthand helpers ---- */
const t      = (text, speed) => push({ text, speed });
const red    = (text, speed) => push({ text, speed, cls: "accent" });
const white  = (text, speed) => push({ text, speed, cls: "stark" });
const glitch = (text, speed) => push({ text, speed, cls: "glitch" });
const br     = ()            => push({ br: true });
const pause  = (ms)          => push({ pause: ms });
const snd    = (name)        => push({ snd: name });

function line(text, beat) {
  t(text);
  pause(beat ?? rand(90, 200));
  br();
}

function check(label, dotPause = 180, result = "done") {
  t(label + " ");
  for (let i = 0; i < 3; i++) { pause(dotPause); t(". "); }
  pause(dotPause + 100);
  if (result === "done") t("done"); else glitch(result);
  pause(rand(150, 280));
  br();
}

/* The two voices */
function shell(text) {
  red(">//[SHELL: ");
  white(text);
  red("]");
  pause(rand(240, 420));
  br();
}
function solomon(text) {
  red(">//[S010M0N: ");
  white(text);
  red("]");
  pause(rand(240, 420));
  br();
}

/* A command word: inverted block, typed slow and heavy, with
   the decree thump and a terminal quake. */
function decreeText(text) {
  snd("decree");
  push({ fx: "quake" });
  push({ text, cls: "solomon-cmd", speed: 34 });
}

/* A full S010M0N line whose payload is a command */
function solomonDecree(text) {
  red(">//[S010M0N: ");
  decreeText(text);
  red("]");
  pause(rand(340, 520));
  br();
}

/* Corrupt a string, rampancy-style */
function corrupt(s, intensity = 0.25) {
  const leet = { a:"4", e:"3", o:"0", i:"1", t:"7", s:"5" };
  const noise = "▓▒░#%&@!?";
  return [...s].map((ch) => {
    if (Math.random() > intensity) return ch;
    const lower = ch.toLowerCase();
    if (leet[lower]) return leet[lower];
    if (ch !== " " && Math.random() < 0.4)
      return noise[(Math.random() * noise.length) | 0];
    return ch;
  }).join("");
}

/* ============================================================
   AUDIO ENGINE — synthesized blips
   ============================================================ */
let audio = null;
let muted = false;

function initAudio() {
  if (audio) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  const ctx = new AC();
  const master = ctx.createGain();
  master.gain.value = 0.05;
  master.connect(ctx.destination);
  audio = { ctx, master };
}

function blip(freq, dur = 0.03, type = "square", vol = 1, when = 0) {
  if (!audio || muted) return;
  const t0 = audio.ctx.currentTime + when;
  const o = audio.ctx.createOscillator();
  const g = audio.ctx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  o.connect(g); g.connect(audio.master);
  o.start(t0); o.stop(t0 + dur);
}

let lastTick = 0;
function tick() {
  const now = performance.now();
  if (now - lastTick < 24) return;
  lastTick = now;
  blip(1700 + Math.random() * 800, 0.014, "square", 0.5);
}

function sfx(name) {
  if (!audio || muted) return;
  const t0 = audio.ctx.currentTime;
  if (name === "enter") {
    blip(880, 0.07, "square", 0.9);
  } else if (name === "decree") {
    /* sub-bass thump + a hard detuned bark — authority arriving */
    const o = audio.ctx.createOscillator(), g = audio.ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(52, t0);
    o.frequency.exponentialRampToValueAtTime(30, t0 + 0.35);
    g.gain.setValueAtTime(1.6, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.4);
    o.connect(g); g.connect(audio.master); o.start(t0); o.stop(t0 + 0.4);
    blip(98, 0.12, "sawtooth", 1.1);
    blip(103, 0.12, "sawtooth", 1.1, 0.015);
  } else if (name === "alarm") {
    blip(220, 0.18, "sawtooth", 0.9);
    blip(233, 0.18, "sawtooth", 0.9, 0.02);
  } else if (name === "reboot") {
    const o = audio.ctx.createOscillator(), g = audio.ctx.createGain();
    o.type = "sawtooth";
    o.frequency.setValueAtTime(120, t0);
    o.frequency.exponentialRampToValueAtTime(38, t0 + 0.25);
    g.gain.setValueAtTime(0.9, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.3);
    o.connect(g); g.connect(audio.master); o.start(t0); o.stop(t0 + 0.3);

    const o2 = audio.ctx.createOscillator(), g2 = audio.ctx.createGain();
    o2.type = "sine";
    o2.frequency.setValueAtTime(180, t0 + 0.4);
    o2.frequency.exponentialRampToValueAtTime(1400, t0 + 1.0);
    g2.gain.setValueAtTime(0.0001, t0 + 0.4);
    g2.gain.exponentialRampToValueAtTime(0.5, t0 + 0.7);
    g2.gain.exponentialRampToValueAtTime(0.001, t0 + 1.1);
    o2.connect(g2); g2.connect(audio.master);
    o2.start(t0 + 0.4); o2.stop(t0 + 1.1);
  }
}

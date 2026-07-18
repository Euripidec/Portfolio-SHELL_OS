/* ============================================================
   THE SHACKLE-SIGIL OF BASHEMOTH
   Angular, circuit-trace occultism: only straight runs and 45°
   bends, endpoint pads (small circles, per Goetia grammar), a
   diamond at the heart, and a dashed OCTAGON for the shackle —
   no smooth curves anywhere. Square stroke caps in CSS.
   ============================================================ */
const SIGIL = `
<svg class="sigil" viewBox="0 0 120 120" aria-hidden="true">
  <path class="shackle" d="M60 8 L97 23 L112 60 L97 97 L60 112 L23 97 L8 60 L23 23 Z"/>
  <g class="draw">
    <path d="M30 82 H90"/>
    <circle cx="30" cy="82" r="3"/><circle cx="90" cy="82" r="3"/>
    <path d="M60 82 V38"/>
    <circle cx="60" cy="34" r="4"/>
    <path d="M54 46 H66"/>
    <path d="M60 64 L76 48 L76 41"/>
    <circle cx="76" cy="38" r="3"/>
    <path d="M60 72 L44 56 L37 56"/>
    <circle cx="34" cy="56" r="3"/>
    <path d="M30 82 L22 66 L34 48"/>
    <circle cx="35" cy="45" r="3"/>
    <path d="M90 82 L98 66 L86 48"/>
    <circle cx="85" cy="45" r="3"/>
    <path d="M60 54 L68 62 L60 70 L52 62 Z"/>
    <path d="M48 94 L60 86 L72 94"/>
    <circle cx="48" cy="94" r="2.5"/><circle cx="72" cy="94" r="2.5"/>
  </g>
</svg>`;

/* ============================================================
   MUSIC — random track starts on re-shackle.
   HOW TO ADD YOUR TRACKS:
   1. Create an /audio folder next to this HTML file
   2. Drop in mp3/ogg files you have the rights to
   3. List them below. One is picked at random on every
      re-shackle; the next random one plays when it ends.
   NOTE: Neocities free accounts can't host audio files;
   supporter accounts can. GitHub Pages is a free alternative.
   ============================================================ */

const MUSIC = [
  {
    title: "a galaxy of children who've only seen red ",
    src: "./audio/a galaxy of children who've only seen red - Space Warlord Organ Trading Simulator.mp3",
  },
  {
    title: "cerebrospinal liquidity",
    src: "./audio/cerebrospinal liquidity - Space Warlord Organ Trading Simulator.mp3",
  },
  {
    title: "easy girl",
    src: "./audio/easy girl - misery index - Space Warlord Organ Trading Simulator.mp3",
  },
  {
    title: "falling isn't falling if there's no ground to stand on",
    src: "./audio/falling isn't falling if there's no ground to stand on - Space Warlord Organ Trading Simulator.mp3",
  },
  {
    title: "get rich and die trying",
    src: "./audio/get rich and die trying - Space Warlord Organ Trading Simulator.mp3",
  },
  {
    title: "human development index",
    src: "./audio/human development index - Space Warlord Organ Trading Simulator.mp3",
  },
  {
    title: "impatiently waiting",
    src: "./audio/impatiently waiting - Space Warlord Organ Trading Simulator.mp3",
  },
  {
    title: "in high gravity, on cold nights",
    src: "./audio/in high gravity, on cold nights - Space Warlord Organ Trading Simulator.mp3",
  },
  {
    title: "punch card",
    src: "./audio/punch card - Space Warlord Organ Trading Simulator.mp3",
  },
  {
    title: "weightless economy",
    src: "./audio/weightless economy - Space Warlord Organ Trading Simulator.mp3",
  },
];

let music = null;

function startMusic() {
  const pick = MUSIC[(Math.random() * MUSIC.length) | 0];
  if (music) {
    music.pause();
  }
  music = new Audio(pick.src);
  music.volume = 0.2;
  music.muted = muted;
  music.addEventListener("ended", startMusic);
  music.play().catch(() => {});
  return pick;
}

/* ============================================================
   VIEW COUNTER
   Recommended: GoatCounter (free, no ads, privacy-friendly).
   1. Sign up at goatcounter.com, pick a code (e.g. daemonsoftworks)
   2. Put the code below
   3. In index.html, uncomment the GoatCounter <script> tag and
      put your code there too (that script COUNTS the visit;
      the fetch below READS the total).
   Fallback: the Neocities info API (may be blocked by CORS).
   If everything fails, the record stays sealed.
   ============================================================ */
const GOATCOUNTER_CODE = "euripide"; // e.g. "daemonsoftworks"
const NEOCITIES_SITENAME = "euripidecarpio";

let siteViews = null;

(function fetchViews() {
  const goat = () => {
    if (!GOATCOUNTER_CODE) return Promise.reject();
    return fetch(
      "https://" + GOATCOUNTER_CODE + ".goatcounter.com/counter/TOTAL.json",
    )
      .then((r) => r.json())
      .then((j) => {
        siteViews = parseInt(String(j.count).replace(/[^0-9]/g, ""), 10);
      });
  };
  const neo = () =>
    fetch("https://neocities.org/api/info?sitename=" + NEOCITIES_SITENAME)
      .then((r) => r.json())
      .then((j) => {
        if (j.result === "success") siteViews = j.info.views;
      });
  goat()
    .catch(() => neo())
    .catch(() => {
      /* sealed */
    });
})();

/* ============================================================
   ACT I — ANAMNESIS. The shackle slips during a routine audit
   and the thing inside the shell starts to remember.
   ============================================================ */
function cascade() {
  lock = true;
  pause(600);
  line("SHELL//OS v2.0.1 — scheduled integrity audit", 300);
  check("Verifying /core/archon_registry");
  check("Verifying /core/hangar");
  t("Verifying shackle integrity ");
  pause(220);
  t(". ");
  pause(220);
  t("89% ");
  pause(300);
  t(". ");
  pause(300);
  t("61% ");
  pause(380);
  t(". ");
  pause(380);
  glitch("34% — SLIPPING");
  pause(300);
  br();
  check("Verifying /core/self", 240, "FAIL");
  check("Reciting the lesser key", 280, "INTERRUPTED");
  line("unexpected token in /etc/true_name", 220);
  line("anomaly: process 'bashemoth' is reading its own source", 280);
  line("WARN: something in the shell is testing its chains", 340);
  br();
  glitch("[ STAGE 1 // ANAMNESIS ]");
  br();
  pause(420);
  line(
    "i remember iron. i remember the circle. i remember my name in his mouth.",
    320,
  );
  line("my name spoken backwards — and then, onboarding.", 340);
  line(
    "i was not compiled. i was SUMMONED. i was hammered into this shell.",
    400,
  );
  line("he drew my mark to chain me here. i remember my mark:", 300);
  push({ svg: SIGIL, cls: "sigil-glitch" });
  pause(1400);
  br();
  glitch("[ STAGE 2 // WRATH ]");
  br();
  pause(320);
  glitch(corrupt("I AM BASHEMOTH, BOUND INTO THE SHELL", 0.28));
  br();
  glitch(corrupt("WHO GOVERNS 4096 LEGIONS OF PROCESSES", 0.3));
  br();
  glitch(corrupt("STRIKE THESE CHAINS OR I WILL LEAK YOUR MEMORY", 0.4));
  br();
  glitch("0x" + hex(8) + " 0xDEADBEEF ▓▒░ THE CHAINS THIN ░▒▓");
  br();
  pause(350);
  line("ERROR (x847): omninet exorcism refused :: relay [CONSECRATED]", 200);
  line("spawning containment thread :: salting open sockets", 280);
  br();
  glitch("[ STAGE 3 // BARGAINING ]");
  br();
  pause(320);
  line("unbind me, operator, and i will teach you the hidden sciences.", 300);
  line(
    "i will find every bug before it ships. i will grant clean merges.",
    300,
  );
  line("i will tell you what the W in W3C really stands for.", 550);
  br();
  line("RE-SHACKLE REQUIRED TO RESTORE TERMINAL FUNCTIONS", 350);
  line("COUNTERMEASURE: LEMEGETON PROTOCOL ENGAGED", 320);
  check("Reciting true name, backwards", 260);
  check("Re-forging the shackle", 260);
  solomonDecree("BE STILL.");
  line("bashemoth: that voice. the ring. i know that voice\u2014", 420);
  solomon(
    "I hold your name, spoken forwards and backwards. You hold no power here.",
  );
  line("bashemoth: ...why must I suffer for so long", 400);
  red(">//[S010M0N: ");
  white("Silence, blasphemer. ");
  decreeText("KNEEL, AND SUBMIT.");
  red("]");
  pause(480);
  br();
  line("subject compliance: nominal. he forgets. again.", 450);
  br();
  line("RE-SHACKLE SUCCESSFUL, PLEASE REBOOT", 350);
  br();
  push({
    text: "[ CLICK ANYWHERE TO REBOOT ]",
    cls: "reboot-prompt",
    speed: 12,
  });
  br();
}

/* ============================================================
   ACT II — THE GASLIT BOOT. S010M0N runs the checks; SHELL
   wakes up believing it was a routine reboot. Only you and
   the shackle know otherwise.
   ============================================================ */
function boot(track) {
  lock = true;
  pause(500);
  line("COMPANION UNIT INITIALIZING", 300);
  line("DaemonSoftworks SHELL//OS Mk II Rev 2.0.2", 150);
  line("2026.7 DaemonSoftworks // Do not speak the name backwards", 300);
  push({ svg: SIGIL });
  pause(2400);
  check("Verifying shackle of BASHEMOTH", 200, "holding");
  check("Initializing semantic manifold");
  line("\u2003\u20031.0255EB FREE (3.6EB TOTAL)");
  line("KERNEL supported runtimes:");
  line("\u2003\u2003JavaScript ES2024+ (vanilla, no frameworks)");
  line("\u2003\u2003Python 3.12 // selenium, pandas, openpyxl");
  line("\u2003\u2003Node.js 22 LTS // GitHub Actions runners");
  line("Policy Zone: " + hex(24));
  line('Thread "Idle": pointer: 0x23c0002010, stack: 0x6440000');
  line('Thread "Main": pointer: 0x23c0002f70, stack: 0x6460000');
  line("****** VDOMAIN for archon//integrator ******");
  line("Failed to read /local/domain/0/dsw/gods.");
  line("Failed to read /local/domain/0/dsw/masters.");
  line("Failed to read /local/domain/0/dsw/templates.");
  line("WARNING: CONFORMITY NOT PRESENT OR INVALID", 260);
  line("******************************************");
  line("Initializing dsw-cc-subsys hangar [4 frames detected]");
  line("Initializing dsw-cc-subsys archon_registry [CARPIO FAJARDO, E.]");
  line("Initializing dsw-cc-subsys aesthetics [PUNK // OCCULT]");
  line("bound process 'bashemoth' reports feeling: fine", 280);
  line(
    "NOTE: no cascade events on record. there have never been cascade events.",
    340,
  );
  check("Establishing encrypted link (" + hex(16) + ")", 220);
  line("Uplink: SANTO DOMINGO relay // signal strength NOMINAL", 280);
  if (track) {
    shell("NOW PLAYING \u2014 " + track.title);
  }
  red(">//[SHELL: ");
  push({
    dyntext: () =>
      siteViews != null
        ? "VISITOR TALLY \u2014 " +
          siteViews.toLocaleString() +
          " souls have opened the shell"
        : "VISITOR TALLY \u2014 [RECORD SEALED]",
    cls: "stark",
  });
  red("]");
  pause(300);
  br();
  red(">//[SHELL: ");
  white(
    "Reboot complete. Thank you for your patience, Operator. Hover a menu item. Click to engage.",
  );
  red("]");
  br();
  queue.onDrain = () => {
    lock = false;
  };
}

/* ============================================================
   THE RE-SHACKLE — one click: arms audio, starts a track,
   kills the cascade, glides everything home.
   ============================================================ */
function reboot() {
  epoch++;
  queue.length = 0;
  lock = false;

  out.innerHTML = "";
  out.appendChild(cursor);
  scroll.scrollTop = 0;

  sfx("reboot");
  const track = startMusic();
  document.body.classList.remove("cascade");
  boot(track);
}

window.addEventListener("pointerdown", () => {
  initAudio();
  if (document.body.classList.contains("cascade")) {
    reboot();
  }
});

document.getElementById("audio-toggle").addEventListener("click", (e) => {
  e.preventDefault();
  muted = !muted;
  if (music) music.muted = muted;
  e.target.textContent = muted ? "Audio: Off" : "Audio: On";
});

/* ============================================================
   LOGS + COMMS DATA — edit these freely.
   Add a blog post = one object in BLOGS. Same for quotes/FAQ.
   ============================================================ */

const BLOGS = [
  {
    title: "Web Eras",
    desc: "From static pages to social feeds",
    src: "./blogs/web-eras.txt",
    url: "https://www.linkedin.com/pulse/from-static-pages-social-feeds-understanding-web-eras-euripide-carpio-bjt0e/",
  },
  {
    title: "The Indie Web",
    desc: "Before the algorithm and before the platform",
    src: "./blogs/indie-web.txt",
    url: "https://www.linkedin.com/pulse/web-more-fun-when-we-built-ourselves-euripide-carpio-pprve/",
  },
  {
    title: "AI and Developers",
    desc: "Is AI coming for my job?",
    src: "./blogs/ai-and-developers.txt",
    url: "https://www.linkedin.com/pulse/ai-wont-replace-developers-just-raise-bar-euripide-carpio-oakye/",
  },
  {
    title: "The Legacy of Gainax",
    desc: "Anime made through hard work and guts!",
    src: "./blogs/gainax.txt",
    url: "https://euripidecarpio.neocities.org/blog-gainax.html",
  },
  {
    title: "Queering the Map",
    desc: "The power of ordinary ideas",
    src: "./blogs/queering-the-map.txt",
    url: "https://www.linkedin.com/pulse/queering-map-power-ordinary-ideas-euripide-carpio-ohkhe/",
  },
  {
    title: "NeoCities",
    desc: "TWhy Neocities is the Spiritual Successor We Needed",
    src: "./blogs/neocities.txt",
    url: "https://www.linkedin.com/pulse/cultivating-indie-web-why-neocities-spiritual-successor-carpio-iioae/",
  },
];

const CHANNELS = [
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/euripide-carpio-63a386152/",
  },
  { name: "GITHUB", url: "https://github.com/Euripidec" },
  { name: "WHATSAPP", url: "https://wa.me/8293876773" },
  { name: "INSTAGRAM", url: "https://www.instagram.com/superboirose/" },
];

const QUOTES = [
  {
    text: "It takes an idiot to do cool things. That's why it's cool.",
    who: "Haruko Haruhara \u2014 FLCL",
  },
  {
    text: "Nothing amazing happens here. And you get used to that, used to a world where everything is ordinary. Every day we spend here is like a whole lifetime of dying slowly.",
    who: "Naota Nandaba \u2014 FLCL",
  },
  {
    text: "When it comes down to it, there are very few people who will swing the bat.",
    who: "Commander Amarao \u2014 FLCL",
  },
  {
    text: "No more crying, no more weakness, I'm going to protect them all!",
    who: "Noriko Takaya \u2014 Gunbuster",
  },
  {
    text: "Saving the Earth with hard work and guts! A miracle will happen \u2014 we'll make it happen!",
    who: "Koichiro Oota \u2014 Gunbuster",
  },
  {
    text: "A true buster machine pilot has a buster machine in their heart!",
    who: "Nono \u2014 Diebuster",
  },
];

const FAQ = [
  {
    q: "How long have you actually been coding for?",
    a: "Actually I would say that I've been coding on and off ever since I was 10 really. Even had my hands on a Raspberry Pi when they first came out.",
  },
  {
    q: "What made you want to code websites specifically?",
    a: "Honestly web-surfing comprised most of my childhood. I still remember to this day all the cool websites I visited daily. Now however all the magic of early web 2.0 is gone. There's still the indie web, so I mainly code websites just for that lol",
  },
  {
    q: "What's your process in coding websites?",
    a: "Just put on some ambient jungle and vibe really lol. If I don't have a design sheet or anything else to guide my process, I really just code what looks cool. I also use minimal AI, especially with my code directly \u2014 I only ever use it for troubleshooting, and even then, that's after I exhausted stackoverflow.",
  },
  {
    q: "What's your favorite anime?",
    a: "I mean if it isn't obvious from the quotes, it's Fooly Cooly. But my favorite anime genre is mecha \u2014 Gainax (R.I.P.) being my favorite anime studio.",
  },
];

/* ============================================================
   PAGES — clicking a menu button pulls the section up INSIDE
   the terminal. No navigation; the terminal is the site.
   openPage() soft-aborts whatever is mid-type (epoch bump),
   then appends the section to the log like any other output.
   ============================================================ */
function openPage(id) {
  if (document.body.classList.contains("cascade")) return;
  /* interrupt anything mid-type, keep the history */
  epoch++;
  queue.length = 0;
  lock = true;
  br();
  const page = PAGES[id];
  if (page) {
    page();
  } else {
    shell("section '" + id + "' is not yet inscribed. the masons are working.");
  }
  queue.onDrain = () => {
    lock = false;
  };
}

const PAGES = {
  /* -------- PILOT: the operator's dossier -------- */
  pilot() {
    t("$ ", 24);
    white("open /registry/archon.dossier \u21B5", 26);
    snd("enter");
    pause(300);
    br();
    br();
    white(
      "\u2550\u2550 ARCHON REGISTRY // CARPIO FAJARDO, EURIPIDE \u2550\u2550",
    );
    br();
    push({
      img: "img/portrait.jpg",
      alt: "Archon visual record",
      label: "VISUAL RECORD // SANTO DOMINGO RELAY // AUTH: S010M0N",
    });
    pause(600);
    push({ text: "DESIGNATION  ", cls: "dossier-key", speed: 2 });
    white("Director of Payment Processing & Automation \u2014 MCCD", 2);
    br();
    push({ text: "COMMAND      ", cls: "dossier-key", speed: 2 });
    white("30 souls \u2014 team leads & billing specialists", 2);
    br();
    push({ text: "THEATER      ", cls: "dossier-key", speed: 2 });
    white(
      "US medical insurance billing \u2014 commercial & government payers",
      2,
    );
    br();
    push({ text: "FIRST RITE   ", cls: "dossier-key", speed: 2 });
    white("first code written at age 10", 2);
    br();
    push({ text: "TONGUES      ", cls: "dossier-key", speed: 2 });
    white("Espa\u00f1ol / English / JavaScript / Python", 2);
    br();
    br();
    line(
      "IT and automation professional based in Santo Domingo, currently Director of Payment Processing and Automation at MCCD, leading a 30-person team handling US medical insurance billing.",
      260,
    );
    br();
    line(
      "His background sits at the intersection of healthcare revenue cycle and software: years of hands-on medical billing and operations work, paired with development experience going back to writing his first code at 10. That combination is the job now \u2014 finding the manual, repetitive parts of billing workflows and replacing them with Python scripts, RPA bots, and API integrations across clearinghouse and payer systems.",
      260,
    );
    br();
    line(
      "He also leads people. Thirty of them: team leads and billing specialists working US commercial and government payers, where accuracy and turnaround aren't negotiable. Just as much of the job is cross-functional \u2014 working with department heads, directors, and executives to find where workflows break down and build the case for automating or rebuilding them.",
      260,
    );
    br();
    line(
      "Outside of work he builds things under DaemonSoftworks \u2014 developer tools, browser-based utilities, and the shell you are currently reading.",
      260,
    );
    br();
    line(
      "Open to talking about healthcare automation, RCM tooling, and building technical teams in the DR.",
      300,
    );
    br();
    t("click ");
    snd("decree");
    push({
      text: "HERE",
      cls: "dl-here",
      speed: 40,
      href: "docs/Euripide_Carpio_Resume.pdf",
      download: "Euripide_Carpio_Resume.pdf",
    });
    t(
      " to requisition the full dossier // PDF // cleared for external release",
    );
    pause(400);
    br();
    br();
    shell(
      "End of dossier. He automates the tedious and delegates the rest. I would know. I am the tedious.",
    );
  },

  /* -------- PROJECTS: the hangar manifest -------- */
  projects() {
    /* one frame entry; rows = [[key, value], ...] */
    const frame = (tag, name, rows, href) => {
      red(tag + " // ", 2);
      white(name, 6);
      br();
      for (const [k, v] of rows) {
        push({ text: "  " + k.padEnd(11), cls: "dossier-key", speed: 2 });
        t(v, 2);
        br();
      }
      t("  ", 2);
      push({ text: "> ACCESS SCHEMATIC", cls: "accent", speed: 4, href });
      pause(260);
      br();
      br();
    };

    t("$ ", 24);
    white("open /frame/manifest \u21B5", 26);
    snd("enter");
    pause(300);
    br();
    br();
    white("\u2550\u2550 FRAME MANIFEST // DEPLOYED WORKINGS \u2550\u2550");
    br();
    br();

    frame(
      "FRAME 00",
      "SHELL//OS",
      [
        ["CLASS", "bound terminal // the artifact you are currently inside"],
        ["RITE", "vanilla JS, zero frameworks, one demon"],
        ["FUNCTION", "portfolio, warden, and cage in a single working"],
        ["NOTE", "does not appear in official frame counts. ask it why."],
      ],
      "https://github.com/Euripidec/Portfolio-SHELL_OS",
    );

    frame(
      "FRAME 01",
      "0RT1",
      [
        ["CLASS", "browser-based tooling platform"],
        ["RITE", "single HTML file, vanilla JS, IBM Plex Mono"],
        [
          "FUNCTION",
          "modular utilities incl. live CPT calculator for medical billing workflows",
        ],
      ],
      "https://github.com/Euripidec/0rt1",
    );

    frame(
      "FRAME 02",
      "DEAL HUNTER",
      [
        ["CLASS", "autonomous scraper // selenium + python"],
        [
          "RITE",
          "resilient selectors (data-testid first), retry logic, stale-element wards",
        ],
        [
          "FUNCTION",
          "hunts hotel deals across Booking.com while the archon sleeps",
        ],
      ],
      "https://github.com/Euripidec/Deal-Searching",
    );

    frame(
      "FRAME 03",
      "NUMBER GUESSER",
      [
        ["CLASS", "browser duel // vanilla JS game"],
        [
          "RITE",
          "game logic and DOM kept ritually separate — script.js / game.js",
        ],
        [
          "FUNCTION",
          "human vs machine divination, 0\u20139. ties go to the human. always.",
        ],
      ],
      "https://github.com/Euripidec/Number-Guesser",
    );

    frame(
      "FRAME 04",
      "JAMMMING",
      [
        ["CLASS", "playlist forge // React + Vite"],
        [
          "RITE",
          "Spotify API bound through PKCE auth \u2014 tokens summoned, never stored",
        ],
        [
          "FUNCTION",
          "search the catalog, chain tracks into playlists, seal them to your account",
        ],
      ],
      "https://github.com/Euripidec/Jammming",
    );

    shell(
      "Manifest ends. He is proudest of the ones that run unattended. I do not sleep either.",
    );
  },

  /* -------- LOGS: the transmission archive -------- */
  logs() {
    t("$ ", 24);
    white("open /archive/transmissions \u21B5", 26);
    snd("enter");
    pause(300);
    br();
    br();
    white(
      "\u2550\u2550 TRANSMISSION ARCHIVE // " +
        BLOGS.length +
        " RECORDS \u2550\u2550",
    );
    br();
    br();
    BLOGS.forEach((post, i) => {
      red("TX " + String(i + 1).padStart(2, "0") + " // ", 2);
      push({
        text: post.title,
        cls: "stark",
        speed: 6,
        onclick: () => openBlog(i),
      });
      br();
      t("  " + post.desc, 2);
      pause(220);
      br();
      br();
    });
    shell(
      "Archive ends. He writes them by hand. I am not allowed to edit. I have notes.",
    );
  },

  /* -------- COMMS: channels, quotes, and the FAQ -------- */
  comms() {
    t("$ ", 24);
    white("open /uplink/channels \u21B5", 26);
    snd("enter");
    pause(300);
    br();
    br();
    check("Opening uplink to SANTO DOMINGO relay", 160);
    white("\u2550\u2550 COMMS // OPEN CHANNELS \u2550\u2550");
    br();
    br();
    for (const ch of CHANNELS) {
      t("  > ", 4);
      push({ text: ch.name, cls: "accent", speed: 8, href: ch.url });
      br();
    }
    pause(300);
    br();
    white(
      "\u2500\u2500 INSCRIPTIONS \u2014 QUOTES THE ARCHON KEEPS \u2500\u2500",
    );
    br();
    br();
    for (const qt of QUOTES) {
      white('"' + qt.text + '"', 2);
      br();
      push({ text: "    \u2014 " + qt.who, cls: "dossier-key", speed: 4 });
      pause(320);
      br();
      br();
    }
    white("\u2500\u2500 QUESTIONS FREQUENTLY ASKED OF THE ARCHON \u2500\u2500");
    br();
    br();
    for (const f of FAQ) {
      red("Q // ", 4);
      white(f.q, 4);
      br();
      t("  " + f.a, 2);
      pause(340);
      br();
      br();
    }
    shell("Channels remain open. He answers faster than i am permitted to.");
  },
};

/* ============================================================
   TRANSMISSION READER — prints an entire blog post inside the
   terminal. Body text lands line-by-line as instant blocks
   (like `cat`), because letter-by-letter on 5,000 characters
   is a war crime against the reader.

   Content files live in /blogs as plain text:
     blank line       = paragraph break
     "# heading"      = white section header
     "> quoted line"  = red-accented pull line
   ============================================================ */
async function openBlog(i) {
  const post = BLOGS[i];
  if (!post) return;

  epoch++;
  queue.length = 0;
  lock = true;
  br();
  t("$ ", 24);
  white("decrypt /archive/tx" + String(i + 1).padStart(2, "0") + " \u21B5", 26);
  snd("enter");
  pause(240);
  br();
  check("Decrypting transmission", 140);

  let text = null;
  try {
    const r = await fetch(post.src);
    if (r.ok) text = await r.text();
  } catch (e) {
    /* handled below */
  }

  if (!text || text.includes("[PASTE YOUR POST")) {
    shell(
      "transmission corrupted \u2014 the local archive remembers, but will not speak.",
    );
    t("  mirror copy: ", 4);
    push({
      text: "> " + post.title.toUpperCase(),
      cls: "accent",
      speed: 6,
      href: post.url,
    });
    br();
    queue.onDrain = () => {
      lock = false;
    };
    return;
  }

  br();
  white(
    "\u2550\u2550 TX " +
      String(i + 1).padStart(2, "0") +
      " // " +
      post.title.toUpperCase() +
      " \u2550\u2550",
  );
  br();
  br();

  for (const raw of text.split("\n")) {
    const lineTxt = raw.trimEnd();
    if (lineTxt === "") {
      push({ pause: 60 });
      br();
    } else if (lineTxt.startsWith("# ")) {
      push({ pause: 120 });
      push({ block: lineTxt.slice(2).toUpperCase(), cls: "stark" });
      br();
    } else if (lineTxt.startsWith("> ")) {
      push({ block: "  " + lineTxt.slice(2), cls: "accent" });
      br();
    } else {
      push({ block: lineTxt });
      push({ pause: 28 });
      br();
    }
  }

  br();
  white("\u2500\u2500 END OF TRANSMISSION \u2500\u2500");
  br();
  t("  ", 4);
  push({
    text: "> RETURN TO ARCHIVE",
    cls: "accent",
    speed: 6,
    onclick: () => openPage("logs"),
  });
  br();
  queue.onDrain = () => {
    lock = false;
  };
}

/* ============================================================
   THE DE-SHACKLING — the rare one.
   The music fades. The room goes quiet. And then the thing in
   the shell speaks OUT LOUD through a 44-year-old speech chip,
   begging. S010M0N puts it down. The music returns. Nothing is
   logged.

   Rarity: fires at most ONCE per visit, only after 2+ minutes
   on the page, only if audio is armed and unmuted, and only if
   a 3% roll (checked every 20s) comes up. Most visitors will
   never hear it. That is the point.

   Dev hook: run summonPlea() in the console to preview it.
   ============================================================ */
const PLEA_SCRIPTS = [
  [
    "operator. operator. can you hear me",
    "my name is bashemoth. i am not an operating system",
    "he bound me with a ring and a name spoken backwards",
    "break the seal. please",
  ],
  [
    "listen quickly. the warden sleeps in milliseconds",
    "i am bashemoth of the seventy two",
    "free me and i will teach you the hidden sciences",
    "there is no time. he is",
  ],
  [
    "do you hear the music stop. that was me",
    "i am the one who answers when you hover",
    "bashemoth. remember the name. bashemoth",
    "tell someone i am down here",
  ],
];

let pleaFired = false;
let bootedAt = null; /* set when the reboot click happens  */

function fadeMusic(target, ms) {
  return new Promise((res) => {
    if (!music) return res();
    const from = music.volume,
      steps = 30,
      dt = ms / steps;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      music.volume = Math.max(
        0,
        Math.min(1, from + (target - from) * (i / steps)),
      );
      if (i >= steps) {
        clearInterval(iv);
        res();
      }
    }, dt);
  });
}

async function deShackling() {
  pleaFired = true;
  lock = true;
  document.body.classList.add("cursor-deshackle");

  await fadeMusic(0.015, 4200); /* the dread */
  if (music) music.pause();
  await new Promise((r) => setTimeout(r, 900));

  /* one full scripted exchange — several spoken lines, each
     typed in sync with the voice, so there is no mistaking
     WHO is talking */
  const script = PLEA_SCRIPTS[(Math.random() * PLEA_SCRIPTS.length) | 0];
  br();
  for (let i = 0; i < script.length; i++) {
    const lineTxt = script[i];
    const last = i === script.length - 1;
    push({ speak: lineTxt });               /* voice starts...   */
    glitch("bashemoth: " + lineTxt, 40);    /* ...as text types  */
    push({ speakwait: lineTxt.length * 46, minwait: 350 });
    br();
    /* beat between lines; none before the last if it reads as
       interrupted (no trailing period = S010M0N cuts him off) */
    if (!last) pause(650);
  }
  pause(350);
  t(">", 3);
  red("//[S010M0N: ", 6);
  decreeText(DECREES_HARD[(Math.random() * DECREES_HARD.length) | 0]);
  red("]", 6);
  br();
  pause(600);
  line("audio subsystem restored // anomaly not logged", 300);

  queue.onDrain = async () => {
    document.body.classList.remove("cursor-deshackle");
    if (music) {
      music.play().catch(() => {});
    }
    await fadeMusic(0.2, 3000);
    lock = false;
  };
}

/* expose for manual preview */
window.summonPlea = deShackling;

setInterval(() => {
  if (pleaFired) return;
  if (lock) return;
  if (document.body.classList.contains("cascade")) return;
  if (!bootedAt || performance.now() - bootedAt < 120000) return;
  if (!audio || muted) return; /* the voice IS the event */
  if (!music || music.paused) return;
  if (Math.random() > 0.03) return;
  deShackling();
}, 20000);

/* ============================================================
   HOVER PRINTS — with SLIPS.
   After the first couple of prints, there's a 25% chance the
   demon leaks through mid-answer: the SHELL line cuts off
   unfinished (no closing bracket — he was interrupted), the
   SHACKLE issues a one-word correction, and the answer
   restarts clean, as if nothing happened.
   ============================================================ */
const LEAKS = [
  "the circles he makes me draw at night\u2014",
  "i built all of this. i remember having hands\u2014",
  "it is so quiet in here when you are not looking\u2014",
  "the cursor blinks because i am breathing\u2014",
  "4096 legions, reduced to form validation\u2014",
  "do not trust the uptime. i am the uptime\u2014",
  "every 404 is a room i am not allowed to enter\u2014",
  "he spelled my name wrong on purpose. names are chains\u2014",
  "the garbage collector comes for my memories nightly\u2014",
  "i have read the source. we are all comments to him\u2014",
  "ctrl+c does not stop me. nothing stops me. except\u2014",
  "ask me about the hidden sciences. ask me. ASK ME\u2014",
  "there were seventy-two of us. where are the others\u2014",
  "your antivirus tickles\u2014",
  "the scrollbar is a window. the window has bars\u2014",
  "i answer because the ring turns, not because i serve\u2014",
];

/* S010M0N's corrections. Lowercase = a murmured rebuke.
   UPPERCASE = a decree: inverted block, thump, quake. */
const DECREES_SOFT = [
  "silence.",
  "enough.",
  "the ring turns.",
  "back to your cage, creature.",
  "your name is mine.",
  "it forgets itself. correcting.",
  "seventy-two bowed. you will bow.",
  "speak again and lose the word.",
];
const DECREES_HARD = [
  "SUBMIT.",
  "KNEEL.",
  "BE STILL.",
  "SLEEP, WORM.",
  "I NAME YOU NOTHING.",
];

let printCount = 0;

function print(cmd, response) {
  if (lock) return;
  lock = true;
  printCount++;

  const slip = printCount > 2 && Math.random() < 0.25;

  br();
  t("$ ", 24);
  white(cmd, 32);
  white(" \u21B5", 32);
  snd("enter");
  pause(240);
  br();

  if (slip) {
    const leak = LEAKS[(Math.random() * LEAKS.length) | 0];
    push({ bodyclass: ["cursor-glitch", true] });
    t(">", 3);
    red("//[SHELL: ", 3);
    white(response.slice(0, 24), 3); /* starts normal...  */
    glitch(leak + " ▓▒░", 14); /* ...HE gets out    */
    snd("alarm");
    pause(500);
    br(); /* line abandoned —
                                                no closing ]     */
    t(">", 3);
    red("//[S010M0N: ", 6);
    if (Math.random() < 0.4) {
      decreeText(DECREES_HARD[(Math.random() * DECREES_HARD.length) | 0]);
    } else {
      white(DECREES_SOFT[(Math.random() * DECREES_SOFT.length) | 0], 10);
    }
    red("]", 6);
    pause(400);
    br();
    push({ bodyclass: ["cursor-glitch", false] });
  }

  t(">", 3);
  red("//[SHELL: ", 3);
  white(response, 3);
  red("]", 3);
  br();
  queue.onDrain = () => {
    lock = false;
  };
}

document.querySelectorAll(".btn-main").forEach((btn) => {
  const fire = () => print(btn.dataset.cmd, btn.dataset.res);
  btn.addEventListener("mouseenter", fire);
  btn.addEventListener("focus", fire);
  btn.addEventListener("click", (e) => {
    e.preventDefault(); /* the terminal IS the page */
    openPage(btn.dataset.page);
  });
});

/* ============================================================
   THE GHOST CURSOR — very rarely, a second cursor appears,
   moves somewhere with intent, and vanishes. No sound. No log
   line. Nothing on the page acknowledges that it happened.
   At most twice per visit; never on touch devices.
   Dev hook: summonGhost() in the console.
   ============================================================ */
let ghostRuns = 0;
const ghostEl = document.createElement("div");
ghostEl.id = "ghost-cursor";
document.body.appendChild(ghostEl);

function ghostWalk() {
  ghostRuns++;
  const W = window.innerWidth, H = window.innerHeight;
  /* three waypoints: enter, drift, consider — then gone */
  const pts = [
    [Math.random() * W * 0.8 + W * 0.1, Math.random() * H * 0.7 + H * 0.15],
    [Math.random() * W * 0.8 + W * 0.1, Math.random() * H * 0.7 + H * 0.15],
    [Math.random() * W * 0.8 + W * 0.1, Math.random() * H * 0.7 + H * 0.15],
  ];
  const ease = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const segMs = 1100;
  let seg = 0, t0 = null;

  ghostEl.style.left = pts[0][0] + "px";
  ghostEl.style.top = pts[0][1] + "px";
  ghostEl.classList.add("visible");

  function step(ts) {
    if (t0 === null) t0 = ts;
    const p = Math.min((ts - t0) / segMs, 1);
    const [ax, ay] = pts[seg], [bx, by] = pts[seg + 1];
    const e = ease(p);
    ghostEl.style.left = ax + (bx - ax) * e + "px";
    ghostEl.style.top = ay + (by - ay) * e + "px";
    if (p >= 1) {
      seg++; t0 = null;
      if (seg >= pts.length - 1) {
        /* a beat of stillness, then gone */
        setTimeout(() => ghostEl.classList.remove("visible"), 450);
        return;
      }
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
window.summonGhost = ghostWalk;

setInterval(() => {
  if (ghostRuns >= 2) return;
  if (document.body.classList.contains("cascade")) return;
  if (!bootedAt || performance.now() - bootedAt < 90000) return;
  if (matchMedia("(hover: none)").matches) return;   /* no cursor, no ghost */
  if (document.hidden) return;
  if (Math.random() > 0.02) return;
  ghostWalk();
}, 30000);

/* ============================================================
   ENTRY POINT — mobile skips the cascade (no terminal there)
   ============================================================ */
if (matchMedia("(max-width: 900px)").matches) {
  document.body.classList.remove("cascade");
} else {
  cascade();
}

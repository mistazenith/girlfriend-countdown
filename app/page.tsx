"use client";

import { useEffect, useState } from "react";

/* ── Target: April 1, 2026 midnight EDT (UTC-4) ──────────── */
const TARGET = new Date("2026-04-01T00:00:00-04:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

/* ── NYC Skyline SVG ──────────────────────────────────────── */
function NYCSkyline() {
  return (
    <div className="skyline-wrap" aria-hidden="true">
      <svg
        viewBox="0 0 1440 220"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9707d" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b3a4a" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {/* Skyline path — stylized NYC buildings, Empire State, Chrysler, One WTC */}
        <path
          fill="url(#skyGrad)"
          d={`
            M0,220
            L0,180
            L30,180 L30,160 L50,160 L50,170 L60,170 L60,150 L75,150 L75,170 L85,170 L85,180
            L120,180 L120,140 L130,140 L130,120 L140,120 L140,140 L150,140 L150,180
            L180,180 L180,155 L190,155 L190,145 L200,145 L200,155 L210,155 L210,180
            L250,180 L250,130 L258,130 L258,110 L262,110 L262,95 L266,95 L266,60
            L270,55 L274,60 L274,95 L278,95 L278,110 L282,110 L282,130 L290,130 L290,180
            L320,180 L320,150 L330,150 L330,140 L340,140 L340,150 L350,150 L350,180
            L380,180 L380,135 L390,135 L390,125 L400,125 L400,100 L408,100 L408,80
            L412,75 L416,80 L416,100 L424,100 L424,125 L434,125 L434,135 L444,135 L444,180
            L470,180 L470,160 L485,160 L485,145 L500,145 L500,160 L515,160 L515,180
            L550,180 L550,120 L555,120 L555,50 L558,45 L560,30 L562,45 L565,50 L565,120 L570,120 L570,180
            L610,180 L610,155 L620,155 L620,140 L635,140 L635,155 L645,155 L645,180
            L680,180 L680,125 L690,125 L690,110 L700,110 L700,90 L710,90 L710,110 L720,110 L720,125 L730,125 L730,180
            L760,180 L760,150 L775,150 L775,135 L790,135 L790,150 L805,150 L805,180
            L830,180 L830,100 L836,100 L836,70 L840,65 L844,70 L844,100 L850,100 L850,180
            L880,180 L880,155 L895,155 L895,140 L910,140 L910,155 L925,155 L925,180
            L960,180 L960,130 L968,130 L968,115 L975,115 L975,95 L980,95 L980,60 L984,55 L988,60 L988,95 L993,95 L993,115 L1000,115 L1000,130 L1008,130 L1008,180
            L1040,180 L1040,145 L1055,145 L1055,130 L1070,130 L1070,145 L1085,145 L1085,180
            L1110,180 L1110,160 L1125,160 L1125,145 L1140,145 L1140,160 L1155,160 L1155,180
            L1190,180 L1190,135 L1200,135 L1200,120 L1210,120 L1210,105 L1220,105 L1220,120 L1230,120 L1230,135 L1240,135 L1240,180
            L1270,180 L1270,150 L1285,150 L1285,165 L1300,165 L1300,180
            L1330,180 L1330,155 L1345,155 L1345,140 L1360,140 L1360,155 L1375,155 L1375,180
            L1400,180 L1400,165 L1420,165 L1420,175 L1440,175
            L1440,220
            Z
          `}
        />
        {/* Small lit windows scattered on buildings */}
        {[
          [135, 128], [265, 68], [268, 78], [272, 68],
          [408, 88], [412, 82], [557, 58], [560, 42], [563, 58],
          [700, 98], [840, 78], [843, 72],
          [980, 68], [984, 62], [975, 102], [983, 80],
          [1210, 112], [1215, 108],
        ].map(([cx, cy], i) => (
          <rect
            key={i}
            x={cx - 1.5}
            y={cy}
            width="3"
            height="4"
            rx="0.5"
            fill="#ffd6e0"
            opacity="0.7"
          />
        ))}
      </svg>
    </div>
  );
}

/* ── Floating Hearts ──────────────────────────────────────── */
function FloatingHearts() {
  const hearts = [
    "\u2764\uFE0F", "\uD83E\uDE77", "\uD83D\uDC95", "\u2764\uFE0F",
    "\uD83E\uDE77", "\uD83D\uDC97", "\u2764\uFE0F", "\uD83E\uDE77",
    "\uD83D\uDC95", "\u2764\uFE0F", "\uD83D\uDC97", "\uD83E\uDE77",
    "\u2764\uFE0F", "\uD83D\uDC95",
  ];
  return (
    <div className="hearts-container" aria-hidden="true">
      {hearts.map((h, i) => (
        <span key={i} className="floating-heart">
          {h}
        </span>
      ))}
    </div>
  );
}

/* ── Countdown Block ──────────────────────────────────────── */
function CountdownBlock({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="countdown-num rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg border border-pink-200/50 px-4 py-3 sm:px-6 sm:py-4 min-w-[72px] sm:min-w-[100px]">
        <span
          className="block text-center text-4xl sm:text-6xl font-bold"
          style={{
            fontFamily: "var(--font-quicksand), sans-serif",
            color: "#b5405a",
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        className="mt-2 text-xs sm:text-sm font-medium tracking-wider uppercase"
        style={{ color: "#c9707d" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Main Page ────────────────────────────────────────────── */
export default function Home() {
  /* Start with zeros to avoid hydration mismatch (SSR vs client time) */
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => setTime(getTimeLeft());
    /* First tick fires immediately via setTimeout(0), then every second */
    const kickoff = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(kickoff);
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <FloatingHearts />
      <NYCSkyline />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
        {/* ── Heading ── */}
        <h1
          className="text-5xl sm:text-7xl font-bold mb-3 drop-shadow-sm"
          style={{
            fontFamily: "var(--font-dancing-script), cursive",
            color: "#b5405a",
          }}
        >
          Counting Down to Us
        </h1>
        <p
          className="text-lg sm:text-xl mb-10 font-medium"
          style={{
            fontFamily: "var(--font-quicksand), sans-serif",
            color: "#c9707d",
          }}
        >
          Every second brings me closer to you
        </p>

        {/* ── Countdown ── */}
        <div className="flex gap-3 sm:gap-6 mb-10">
          <CountdownBlock value={time.days} label="Days" />
          <CountdownBlock value={time.hours} label="Hours" />
          <CountdownBlock value={time.minutes} label="Minutes" />
          <CountdownBlock value={time.seconds} label="Seconds" />
        </div>

        {/* ── "Until" label ── */}
        <p
          className="text-lg sm:text-2xl font-semibold mb-8 italic"
          style={{
            fontFamily: "var(--font-dancing-script), cursive",
            color: "#d4829a",
          }}
        >
          until we&apos;re together again
        </p>

        {/* ── Route ── */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="route-shimmer text-xl sm:text-2xl font-bold tracking-wide"
            style={{ fontFamily: "var(--font-quicksand), sans-serif" }}
          >
            Korea
          </span>
          <span className="plane-bob text-xl sm:text-2xl" role="img" aria-label="plane with heart trail">
            &#9992;&#65039;&#xFE0F;&#x1F49E;
          </span>
          <span
            className="route-shimmer text-xl sm:text-2xl font-bold tracking-wide"
            style={{ fontFamily: "var(--font-quicksand), sans-serif" }}
          >
            New York
          </span>
        </div>

        {/* ── Date ── */}
        <p
          className="text-sm sm:text-base font-medium mb-16"
          style={{
            fontFamily: "var(--font-quicksand), sans-serif",
            color: "#c9707d",
          }}
        >
          April 1, 2026
        </p>

        {/* ── Footer love note ── */}
        <p
          className="text-base sm:text-lg max-w-md leading-relaxed"
          style={{
            fontFamily: "var(--font-dancing-script), cursive",
            color: "#d4829a",
          }}
        >
          Distance means so little when someone means so much.
          <br />
          See you soon, baby.
        </p>
      </main>
    </>
  );
}

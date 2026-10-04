import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SparklesIcon,
  XMarkIcon,
  CheckIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

import { mobileApps } from "../data/mobileprojects";

const SPACING = 115; // how far side phones sit from the centre phone

/* ---------- Phone shell ---------- */
function PhoneFrame({ accent, children }) {
  return (
    <div
      className="relative w-[200px] sm:w-[230px] aspect-[9/19.5] rounded-[2.2rem] bg-neutral-900 p-[7px] ring-1 ring-white/10"
      style={{
        boxShadow: `0 35px 60px -25px ${accent}88, 0 12px 30px -12px rgba(0,0,0,.55)`,
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-black">
        {children}
      </div>
    </div>
  );
}

/* Shown when an app has no screenshots yet (FlexiPay) */
function PlaceholderScreen({ accent }) {
  return (
    <div className="h-full w-full bg-white p-4 flex flex-col gap-3">
      <div className="h-3 w-16 rounded bg-neutral-200 mt-4" />
      <div
        className="rounded-2xl p-4 text-white"
        style={{ background: `linear-gradient(135deg, ${accent}, #065f46)` }}
      >
        <div className="text-[10px] opacity-80">Wallet balance</div>
        <div className="text-xl font-bold mt-1">₦ 0.00</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-neutral-100" />
        ))}
      </div>
      <div className="mt-auto mb-6 text-center text-[11px] text-neutral-400">
        Screenshots coming soon
      </div>
    </div>
  );
}

/* ---------- Fan of phones ---------- */
function PhoneFan({ app, index, setIndex, onOpen }) {
  const reduce = useReducedMotion();
  const screens = app.screens.length ? app.screens : [null];
  const last = screens.length - 1;

  const go = useCallback(
    (dir) => setIndex((i) => Math.min(last, Math.max(0, i + dir))),
    [last, setIndex]
  );

  return (
    <div className="w-full">
      <div className="relative mx-auto h-[470px] sm:h-[530px] w-full max-w-md">
        <div className="absolute inset-0 flex items-center justify-center">
          {screens.map((s, i) => {
            const offset = i - index;
            const active = offset === 0;
            const hidden = Math.abs(offset) > 1;
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  zIndex: 10 - Math.abs(offset),
                  pointerEvents: hidden ? "none" : "auto",
                  cursor: active && s ? "zoom-in" : "pointer",
                }}
                initial={false}
                animate={{
                  x: offset * SPACING,
                  scale: active ? 1 : 0.84,
                  rotate: offset * 5,
                  opacity: hidden ? 0 : active ? 1 : 0.55,
                }}
                transition={
                  reduce ? { duration: 0 } : { type: "spring", stiffness: 220, damping: 26 }
                }
                drag={active ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) go(1);
                  else if (info.offset.x > 50) go(-1);
                }}
                onClick={() => (active ? s && onOpen(i) : setIndex(i))}
              >
                <PhoneFrame accent={app.accent}>
                  {s ? (
                    <img
                      src={s.src}
                      alt={`${app.name} – ${s.label}`}
                      draggable={false}
                      className="h-full w-full object-cover object-top select-none"
                    />
                  ) : (
                    <PlaceholderScreen accent={app.accent} />
                  )}
                </PhoneFrame>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      {app.screens.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Previous screen"
            className="p-2 rounded-full border border-border-light dark:border-border-dark disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10 transition focus-visible:outline focus-visible:outline-2"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <div className="text-sm text-text-muted min-w-[9rem] text-center">
            {app.screens[index].label}
          </div>
          <button
            onClick={() => go(1)}
            disabled={index === last}
            aria-label="Next screen"
            className="p-2 rounded-full border border-border-light dark:border-border-dark disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10 transition focus-visible:outline focus-visible:outline-2"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------- Full-screen viewer ---------- */
function Lightbox({ app, index, setIndex, onClose }) {
  const last = app.screens.length - 1;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => Math.min(last, i + 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [last, onClose, setIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIndex((i) => Math.max(0, i - 1));
        }}
        disabled={index === 0}
        aria-label="Previous screen"
        className="absolute left-3 sm:left-8 p-3 rounded-full bg-white/10 text-white disabled:opacity-20 hover:bg-white/20 transition"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      <motion.img
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        src={app.screens[index].src}
        alt={`${app.name} – ${app.screens[index].label}`}
        className="max-h-[88vh] max-w-[80vw] rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIndex((i) => Math.min(last, i + 1));
        }}
        disabled={index === last}
        aria-label="Next screen"
        className="absolute right-3 sm:right-8 p-3 rounded-full bg-white/10 text-white disabled:opacity-20 hover:bg-white/20 transition"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </motion.div>
  );
}

/* ---------- Section ---------- */
export default function MobileApps() {
  const [appIndex, setAppIndex] = useState(0);
  const [shotIndex, setShotIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const app = mobileApps[appIndex];

  const pickApp = (i) => {
    setAppIndex(i);
    setShotIndex(0);
  };

  return (
    <section
      id="mobile-apps"
      className="relative py-28 bg-bg-light dark:bg-bg-dark transition-colors overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Mobile Apps</h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Android and iOS apps I designed and built end to end, each with an AI assistant inside.
          </p>
        </div>

        {/* App switcher */}
        <div
          role="tablist"
          aria-label="Mobile apps"
          className="flex gap-2 overflow-x-auto pb-3 mb-10 sm:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {mobileApps.map((a, i) => {
            const selected = i === appIndex;
            return (
              <button
                key={a.id}
                role="tab"
                aria-selected={selected}
                onClick={() => pickApp(i)}
                className="shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all focus-visible:outline focus-visible:outline-2"
                style={
                  selected
                    ? { background: a.accent, color: a.onAccent, borderColor: a.accent }
                    : { borderColor: `${a.accent}55` }
                }
              >
                {a.name}
              </button>
            );
          })}
        </div>

        {/* Active app */}
        <AnimatePresence mode="wait">
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Accent glow behind the phones */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full blur-3xl"
              style={{ background: `radial-gradient(closest-side, ${app.accent}40, transparent)` }}
            />

            <div className="relative order-1">
              <PhoneFan
                app={app}
                index={shotIndex}
                setIndex={setShotIndex}
                onOpen={() => setLightbox(true)}
              />
            </div>

            <div className="relative order-2">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {app.platforms.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-3 py-1 rounded-full border"
                    style={{ borderColor: `${app.accent}66`, color: app.accent }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold mb-2">{app.name}</h3>
              <p className="text-lg font-medium mb-4" style={{ color: app.accent }}>
                {app.tagline}
              </p>
              <p className="text-text-muted leading-relaxed mb-6 max-w-xl">{app.description}</p>

              {app.ai && (
                <div
                  className="flex gap-3 rounded-2xl p-4 mb-6 max-w-xl border"
                  style={{ background: `${app.accent}14`, borderColor: `${app.accent}44` }}
                >
                  <SparklesIcon className="w-6 h-6 shrink-0 mt-0.5" style={{ color: app.accent }} />
                  <div>
                    <div className="font-semibold mb-1">Built-in AI</div>
                    <p className="text-sm text-text-muted leading-relaxed">{app.ai}</p>
                  </div>
                </div>
              )}

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 max-w-xl">
                {app.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <CheckIcon className="w-5 h-5 shrink-0" style={{ color: app.accent }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {app.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary-soft text-primary-dark dark:bg-border-dark dark:text-text-dark"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {app.web && (
                <a
                  href={app.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition hover:opacity-90 focus-visible:outline focus-visible:outline-2"
                  style={{ background: app.accent, color: app.onAccent }}
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  Visit web version
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && app.screens.length > 0 && (
          <Lightbox
            app={app}
            index={shotIndex}
            setIndex={setShotIndex}
            onClose={() => setLightbox(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
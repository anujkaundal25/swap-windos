import React from "react";

const materials = [
  { letter: "S", name: "Steel", note: "Slim sightlines, serious strength" },
  { letter: "W", name: "Wood", note: "Warm, crafted, timeless" },
  { letter: "A", name: "Aluminum", note: "Light, modern glazing systems" },
  { letter: "P", name: "PVC", note: "Efficient, low-maintenance" },
];

function Arrow({ className = "" }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-ink text-paper"
    >
      {/* Photo + overlays */}
      <img
        src="/hero.jpg"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink/95 via-ink/70 to-ink/20" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-transparent to-ink/50" />

      {/* Window-mullion lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <span className="absolute inset-y-0 left-1/4 w-px bg-white/[0.07]" />
        <span className="absolute inset-y-0 left-2/4 w-px bg-white/[0.07]" />
        <span className="absolute inset-y-0 left-3/4 w-px bg-white/[0.07]" />
      </div>

      {/* Headline block */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="rise eyebrow flex items-center gap-3 text-champagne" style={{ "--d": "50ms" }}>
            <span className="h-px w-10 bg-gold" />
            Wholesale · USA · Canada · Europe
          </p>

          <h1
            className="rise mt-6 text-[clamp(2.9rem,7.4vw,6.4rem)] leading-[0.95] text-balance"
            style={{ "--d": "150ms" }}
          >
            Four materials. <em className="text-champagne">One window</em> to everything you build.
          </h1>

          <p
            className="rise mt-7 max-w-xl text-base leading-8 text-paper/75 sm:text-lg"
            style={{ "--d": "300ms" }}
          >
            Windows, doors, architectural aluminum glazing and glass — supplied wholesale to commercial and
            residential projects, delivered straight to the job site.
          </p>

          <div className="rise mt-10 flex flex-col gap-4 sm:flex-row" style={{ "--d": "420ms" }}>
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold py-3 pr-3 pl-7 text-sm font-bold text-ink transition-colors duration-300 hover:bg-champagne"
            >
              Explore Products
              <span className="grid size-9 place-items-center rounded-full bg-ink text-champagne transition-transform duration-300 group-hover:translate-x-0.5">
                <Arrow className="size-4" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur-sm transition-colors duration-300 hover:border-champagne hover:text-champagne"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* S · W · A · P — four "panes" of one window */}
      <div className="rise relative border-t border-white/15 bg-ink/55 backdrop-blur-md" style={{ "--d": "560ms" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {materials.map((item, i) => (
            <a
              key={item.letter}
              href="#products"
              className={`group relative flex items-center gap-5 px-6 py-6 transition-colors duration-300 hover:bg-white/[0.06] lg:px-8 lg:py-7 ${
                i % 2 === 1 ? "border-l border-white/15" : ""
              } ${i > 1 ? "border-t border-white/15 lg:border-t-0" : ""} ${
                i > 0 ? "lg:border-l lg:border-white/15" : ""
              }`}
            >
              <span className="font-display text-6xl leading-none text-champagne transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-gold sm:text-7xl">
                {item.letter}
              </span>
              <span className="min-w-0">
                <span className="block text-base font-bold tracking-wide sm:text-lg">{item.name}</span>
                <span className="eyebrow mt-1 hidden text-[0.62rem] leading-4 text-paper/55 sm:block">
                  {item.note}
                </span>
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

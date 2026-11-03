import React from "react";
import Reveal from "@/componenets/ui/Reveal";

const features = [
  {
    title: "Custom Engineering & Design",
    text: "Tailored to meet exact industry standards and client specifications.",
  },
  {
    title: "Sustainable & Long-Lasting Materials",
    text: "Eco-conscious production processes with unmatched durability.",
  },
];

const stats = [
  { n: "4", label: "Core materials" },
  { n: "7", label: "Architectural systems" },
  { n: "3", label: "Regions served" },
];

function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span className="h-px w-10 bg-gold" />
                01 — Who we are
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-6 text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] text-navy text-balance">
                Delivering premium quality across <em className="text-gold">every</em> project.
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-base leading-8 text-ink/70 sm:text-lg">
                We specialize in custom material engineering and manufacturing. From steel and wood to aluminum and
                PVC, our mission is to deliver durable, aesthetically outstanding solutions tailored to your unique
                architectural and structural requirements.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <ul className="mt-10 max-w-xl divide-y divide-ink/15 border-y border-ink/15">
                {features.map((f, i) => (
                  <li key={f.title} className="flex gap-5 py-5">
                    <span className="eyebrow pt-1 text-gold">0{i + 1}</span>
                    <div>
                      <h3 className="font-sans text-[0.95rem] font-bold tracking-normal text-navy">{f.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-ink/60">{f.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-8">
                <a
                  href="#learn-more"
                  className="group inline-flex items-center gap-3 rounded-xl bg-navy py-2.5 pr-2.5 pl-6 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-ink"
                >
                  Learn More About Us
                  <span className="grid size-9 place-items-center rounded-xl bg-gold text-ink transition-transform duration-300 group-hover:rotate-[-45deg]">
                    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </span>
                </a>

                <dl className="flex gap-9">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <dd className="font-display text-5xl leading-none text-navy">{s.n}</dd>
                      <dt className="eyebrow mt-2 text-[0.6rem]! text-ink/55">{s.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          {/* Arched image */}
          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* offset gold outline */}
              <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-full border border-gold" />

              <div className="relative overflow-hidden rounded-t-full bg-paper-2">
                <img
                  src="/about.jpg"
                  alt="Black steel-framed glass doors opening onto a bright living room"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                />
                {/* mullion cross over the arch */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <span className="absolute inset-y-0 left-1/2 w-px bg-white/40" />
                  <span className="absolute inset-x-0 top-1/3 h-px bg-white/30" />
                </div>
              </div>

              {/* rotating badge */}
              <div className="absolute -bottom-10 -left-4 grid size-32 place-items-center rounded-full bg-navy text-champagne shadow-2xl sm:-left-10 sm:size-36">
                <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 size-full" aria-hidden="true">
                  <defs>
                    <path id="about-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fill="currentColor" fontSize="8.6" letterSpacing="2.6" fontFamily="var(--font-mono)">
                    <textPath href="#about-circle">STEEL • WOOD • ALUMINUM • PVC •</textPath>
                  </text>
                </svg>
                <span className="font-display text-4xl text-paper">
                  S<span className="text-gold">W</span>AP
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

import React from "react";
import Reveal from "@/componenets/ui/Reveal";

function Services() {
  const servicesList = [
    {
      id: "01",
      title: "Steel Fabrication",
      description:
        "High-strength structural steel solutions customized for commercial and industrial construction projects.",
      bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=900",
      icon: (
        <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.4}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0l3-3m-3 3l-3-3"
          />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Custom Wood Craft",
      description:
        "Precision architectural woodworking and premium timber elements engineered for luxury aesthetics.",
      bgImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=900",
      icon: (
        <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.4}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM4 21a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z"
          />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Aluminum Systems",
      description: "Lightweight, modern, and corrosion-resistant aluminum framing and wall systems.",
      bgImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=900",
      icon: (
        <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.4}
            d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM12 4v16M4 12h16"
          />
        </svg>
      ),
    },
    {
      id: "04",
      title: "PVC & Polymer Moldings",
      description:
        "Durable, weather-resistant PVC profiles designed for low-maintenance and long exterior lifespan.",
      bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=900",
      icon: (
        <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.4}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="products" className="relative bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3 text-champagne">
              <span className="h-px w-10 bg-gold" />
              02 — What we offer
            </p>
            <h2 className="mt-6 text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] text-balance">
              Our core <em className="text-champagne">services</em>.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="max-w-md text-base leading-8 text-paper/65 lg:ml-auto">
              Comprehensive material processing, manufacturing, and structural design tailored to your project
              requirements.
            </p>
          </Reveal>
        </div>

        {/* Sashes */}
        <Reveal delay={150} className="mt-14">
          <div className="panes">
            {servicesList.map((service) => (
              <article
                key={service.id}
                className="pane group relative isolate min-h-[26rem] overflow-hidden rounded-sm bg-navy"
              >
                <img
                  src={service.bgImage}
                  alt=""
                  loading="lazy"
                  className="pane-img absolute inset-0 -z-20 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/65 to-ink/10" />
                <div className="absolute inset-3 -z-10 border border-white/0 transition-colors duration-500 group-hover:border-white/25" />

                <div className="pane-inner flex h-full min-h-[26rem] flex-col justify-between p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid size-14 place-items-center rounded-full border border-white/25 text-champagne backdrop-blur-sm transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                      {service.icon}
                    </span>
                    <span className="font-display text-5xl leading-none text-white/35 transition-colors duration-300 group-hover:text-champagne">
                      {service.id}
                    </span>
                  </div>

                  <div>
                    <span className="mb-5 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-20" />
                    <h3 className="text-[2rem] leading-[1.05]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-paper/70">{service.description}</p>
                    <a
                      href="#contact"
                      className="eyebrow mt-6 inline-flex items-center gap-2 text-champagne transition-colors hover:text-white"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;

"use client";
import React, { useState } from "react";
import Reveal from "@/componenets/ui/Reveal";

const emptyForm = { firstName: "", lastName: "", email: "", phone: "", message: "" };

function Icon({ d, className = "size-5" }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={d} />
    </svg>
  );
}

function Cta() {
  const [formData, setFormData] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your backend / email service
    console.log("Form submitted:", formData);
    setSent(true);
    setFormData(emptyForm);
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-navy py-24 text-paper sm:py-32">
      {/* faint photo + mullions */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-br from-ink/90 via-navy/90 to-navy-2/80" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <span className="absolute inset-y-0 left-1/4 w-px bg-white/[0.06]" />
        <span className="absolute inset-y-0 left-2/4 w-px bg-white/[0.06]" />
        <span className="absolute inset-y-0 left-3/4 w-px bg-white/[0.06]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-champagne">
                <span className="h-px w-10 bg-gold" />
                04 — Contact us
              </p>
              <h2 className="mt-6 text-[clamp(2.5rem,5.4vw,4.8rem)] leading-[1.02] text-balance">
                Let’s discuss your <em className="text-champagne">window &amp; door</em> needs.
              </h2>
              <p className="mt-7 max-w-lg text-base leading-8 text-paper/70 sm:text-lg">
                Connect with our team to explore the best window and door solutions for your home or business, with
                expert guidance.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <ul className="mt-10 max-w-lg divide-y divide-white/10 border-y border-white/10">
                <li>
                  <a href="tel:+18772127927" className="group flex items-center gap-5 py-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gold text-ink">
                      <Icon d="M3 5a2 2 0 0 1 2-2h3l2 5-2.5 1.5a15 15 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2C10 21 3 14 3 5Z" />
                    </span>
                    <span>
                      <span className="eyebrow block text-[0.62rem]! text-paper/50">Call the takeoff desk</span>
                      <span className="font-display text-3xl transition-colors group-hover:text-champagne">
                        877-212-SWAP
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:SWAP@swapwindows.com" className="group flex items-center gap-5 py-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/25 text-champagne transition-colors group-hover:bg-gold group-hover:text-ink">
                      <Icon d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm0 1 9 6 9-6" />
                    </span>
                    <span>
                      <span className="eyebrow block text-[0.62rem]! text-paper/50">Send plans &amp; takeoffs</span>
                      <span className="text-base font-semibold transition-colors group-hover:text-champagne">
                        SWAP@swapwindows.com
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative rounded-sm bg-paper p-7 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-11">
              {/* gold corner tab */}
              <span className="absolute top-0 left-0 h-1 w-24 bg-gold" />

              {sent ? (
                <div className="py-10 text-center">
                  <span className="mx-auto grid size-16 place-items-center rounded-xl bg-gold text-ink">
                    <Icon d="m5 12 5 5 9-10" className="size-7" />
                  </span>
                  <h3 className="mt-6 text-4xl text-navy">Thank you.</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-ink/65">
                    Your message has been sent. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="eyebrow link-draw mt-8 text-navy"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-4xl leading-tight text-navy sm:text-[2.6rem]">Get in touch with us</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">
                    Reach out to our team for expert windows and doors solutions, quick support, and professional
                    service tailored to your needs.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="eyebrow text-[0.62rem]! text-ink/55">
                          First name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          name="firstName"
                          autoComplete="given-name"
                          placeholder="Jane"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="field"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="eyebrow text-[0.62rem]! text-ink/55">
                          Last name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          name="lastName"
                          autoComplete="family-name"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="field"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="eyebrow text-[0.62rem]! text-ink/55">
                          E-mail address
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="jane@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="field"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="eyebrow text-[0.62rem]! text-ink/55">
                          Phone no.
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="(000) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="field"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="eyebrow text-[0.62rem]! text-ink/55">
                        Your message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Tell us about your project…"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="field resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-between rounded-xl bg-navy py-2.5 pr-2.5 pl-7 text-sm font-bold text-paper transition-colors duration-300 hover:bg-ink"
                    >
                      Send Message
                      <span className="grid size-11 place-items-center rounded-xl bg-gold text-ink transition-transform duration-300 group-hover:rotate-[-45deg]">
                        <Icon d="M5 12h14m-6-6 6 6-6 6" />
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Cta;

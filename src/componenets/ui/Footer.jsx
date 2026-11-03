const materialLinks = [
  "Steel Windows & Doors",
  "Aluminum Windows & Architectural Systems",
  "Wood Windows & Doors",
  "PVC Windows & Doors",
  "Glass-Only Supply (Frameless)",
];

const systemLinks = [
  "Storefronts",
  "Curtain Walls",
  "Office Partitions",
  "Balcony Glazing & Railings",
  "Shower Enclosures",
  "Commercial Entrances",
  "Specialty Sliding Systems",
];

function FooterLinkList({ title, links, highlightLast = false }) {
  return (
    <div>
      <h2 className="eyebrow border-b border-ink/15 pb-3 text-navy">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link, index) => (
          <li key={link}>
            <a
              href="#"
              className={`link-draw text-sm leading-5 text-ink/80 transition-colors hover:text-gold ${
                highlightLast && index === links.length - 1 ? "font-bold" : ""
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr] lg:gap-14">
          {/* Brand */}
          <div>
            <a href="#top" aria-label="SWAP Windows home" className="inline-flex">
              <img src="/logo.webp" alt="SWAP Windows" className="h-16 w-auto" />
            </a>

            <p className="mt-7 max-w-md font-display text-[1.7rem] leading-[1.2] text-navy">
              Wholesale windows, doors &amp; glass for people who <em className="text-gold">build</em>.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-ink/70">
              SWAP Windows Corp. provides wholesale windows, doors, architectural aluminum glazing systems, and glass
              for commercial and residential projects across the USA, Canada, and Europe.
            </p>

            <div className="mt-7 flex items-start gap-3">
              <svg
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.6}
                  d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12Z"
                />
                <circle cx="12" cy="9" r="2.2" strokeWidth={1.6} />
              </svg>
              <div>
                <p className="text-sm leading-6">7 Orshava Ct, Suite 102, Monroe, NY 10950</p>
                <p className="mt-1 text-xs leading-5 text-ink/60">
                  Wholesale Distribution Center &amp; Commercial Takeoff Desk
                </p>
              </div>
            </div>
          </div>

          <FooterLinkList title="Four Materials" links={materialLinks} highlightLast />
          <FooterLinkList title="Architectural Systems" links={systemLinks} />

          {/* Contact */}
          <div>
            <h2 className="eyebrow border-b border-ink/15 pb-3 text-navy">Official Contact</h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="eyebrow text-[0.64rem]! text-ink/50">Toll-Free Phone</dt>
                <dd className="mt-1.5">
                  <a
                    href="tel:+18772127927"
                    className="font-display text-3xl text-navy transition-colors hover:text-gold"
                  >
                    877-212-SWAP
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.64rem]! text-ink/50">Direct Takeoffs &amp; Plans</dt>
                <dd className="mt-1.5">
                  <a
                    href="mailto:SWAP@swapwindows.com"
                    className="link-draw font-semibold text-navy transition-colors hover:text-gold"
                  >
                    SWAP@swapwindows.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.64rem]! text-ink/50">Corporate Office</dt>
                <dd className="mt-1.5 leading-5">7 Orshava Ct, Suite 102, Monroe, NY 10950</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.64rem]! text-ink/50">Job-Site Logistics</dt>
                <dd className="mt-1.5 leading-5">Prompt Crafted Delivery Direct to Job Sites Nationwide</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Giant outlined wordmark */}
        {/* <div
          aria-hidden="true"
          className="mt-16 -mb-[0.12em] select-none text-center font-display text-[clamp(7rem,27vw,23rem)] leading-[0.8] text-transparent"
          style={{ WebkitTextStroke: "1.5px rgba(4,40,81,0.22)" }}
        >
          SWAP
        </div> */}
      </div>

      <div className="relative border-t border-ink/10 bg-ink mt-5">
        <div className="eyebrow mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-[0.66rem]! text-paper/60 sm:flex-row lg:px-8">
          <p>© SWAP Windows Corp. All rights reserved.</p>
          <p>
            Steel <span className="text-gold">·</span> Wood <span className="text-gold">·</span> Aluminum{" "}
            <span className="text-gold">·</span> PVC
          </p>
        </div>
      </div>
    </footer>
  );
}

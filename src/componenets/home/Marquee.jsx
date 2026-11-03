const systems = [
  "Storefronts",
  "Curtain Walls",
  "Office Partitions",
  "Balcony Glazing & Railings",
  "Shower Enclosures",
  "Commercial Entrances",
  "Specialty Sliding Systems",
];

function Row({ hidden = false }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {systems.map((s) => (
        <li key={s} className="flex items-center">
          <span className="font-display text-3xl whitespace-nowrap text-paper italic sm:text-4xl">{s}</span>
          <span className="mx-8 text-gold sm:mx-10" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden bg-navy py-6" aria-label="Architectural systems we supply">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

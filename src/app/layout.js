import { Instrument_Serif, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";

// Display: elegant editorial serif (headlines, big numerals)
const display = Instrument_Serif({
  variable: "--f-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

// Body: clean, modern geometric sans
const sans = Manrope({
  variable: "--f-sans",
  subsets: ["latin"],
});

// Labels / specs: technical mono, gives a "drawing sheet" feel
const mono = Geist_Mono({
  variable: "--f-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SWAP Windows Corp. — Wholesale Windows, Doors & Glass",
  description:
    "Wholesale steel, wood, aluminum and PVC windows, doors and architectural glazing systems for commercial and residential projects across the USA, Canada and Europe.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

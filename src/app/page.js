import AboutUs from "@/componenets/home/AboutUs";
import Cta from "@/componenets/home/Cta";
import Hero from "@/componenets/home/Hero";
import Marquee from "@/componenets/home/Marquee";
import Projects from "@/componenets/home/Projects";
import Services from "@/componenets/home/Services";
import Footer from "@/componenets/ui/Footer";
import Header from "@/componenets/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <AboutUs />
        <Services />
        <Projects />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import CoreValues from "../components/CoreValues";
import Banner from "../components/Banner";
import Partners from "../components/Partners";
import AwardsRecognition from "../components/AwardsRecognition";
import Contact from "../components/Contact";
import LatestNews from "../components/LatestNews";

AOS.init({
  duration: 600,
  easing: "ease-out",
});

export default function Home() {
  return (
    <div className="w-full smooth-scroll">
      <section id="home" className="scroll-mt-20 lg:scroll-mt-24">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20 lg:scroll-mt-24">
        <About />
      </section>
      <section id="services" className="scroll-mt-20 lg:scroll-mt-24">
        <Services />
      </section>
      <section id="core-values" className="scroll-mt-20 lg:scroll-mt-24">
        <CoreValues />
      </section>
      <section id="banner" className="scroll-mt-20 lg:scroll-mt-24">
        <Banner />
      </section>
      <section id="latest-news" className="scroll-mt-20 lg:scroll-mt-24">
        <LatestNews />
      </section>  
      <section id="partnership" className="scroll-mt-20 lg:scroll-mt-24">
        <Partners />
      </section>
      <section id="awards-recognition" className="scroll-mt-20 lg:scroll-mt-24">
        <AwardsRecognition />
      </section>
      <section id="contact" className="scroll-mt-20 lg:scroll-mt-24">
        <Contact />
      </section>
    </div>
  );
}

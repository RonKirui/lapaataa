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
      <section id="home" className="smooth-mt-20">
        <Hero />
      </section>
      <section id="about" className="-smooth-mt-100">
        <About />
      </section>
      <section id="services" className="smooth-mt-20">
        <Services />
      </section>
      <section id="core-values" className="smooth-mt-20">
        <CoreValues />
      </section>
      <section id="banner" className="smooth-mt-20">
        <Banner />
      </section>
      <section id="latest-news" className="smooth-mt-20">
        <LatestNews />
      </section>  
      <section id="partnership" className="smooth-mt-20">
        <Partners />
      </section>
      <section id="awards-recognition" className="smooth-mt-20">
        <AwardsRecognition />
      </section>
      <section id="contact" className="smooth-mt-20">
        <Contact />
      </section>
    </div>
  );
}

import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import CoreValues from "../components/CoreValues";
import Impacts from "../components/Impacts";
import Partners from "../components/Partners";

AOS.init({
  duration: 600,
  easing: "ease-out",
});

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Services />
      <CoreValues />
      <Impacts />
      <Partners />
    </div>
  );
}

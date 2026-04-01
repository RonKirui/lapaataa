import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import CoreValues from "../components/CoreValues";

AOS.init({
  duration: 600,
  easing: "ease-out",
});

export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <CoreValues />
    </div>
  );
}

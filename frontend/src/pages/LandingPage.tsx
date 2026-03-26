import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/NavBar";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";

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
    </div>
  );
}

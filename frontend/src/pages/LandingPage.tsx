import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/NavBar";

AOS.init({
  duration: 600,
  easing: "ease-out",
});

export default function Home() {
  return <NavBar />;
}

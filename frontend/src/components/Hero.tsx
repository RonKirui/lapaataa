import heroImage from "../assets/lapataahero.jpeg";
import empowerment from "../assets/lapaataa_youth_empowerment_icon_green.png";
import health from "../assets/lapaataa_health_clinics_icon_green.png";
import roads from "../assets/lapaataa_roads_icon_green.png";
import scholarships from "../assets/lapaataa_scholarships_icon_green.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import data from "../data/data.json";
import { useParams } from "react-router-dom";

export default function Hero() {

  return (
    <div>

<section className="relative h-screen overflow-hidden bg-white border-b-2 border-gray-200 px-5">

  {/* Background image */}
  <img
    src={heroImage}
    alt="Community"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* White fade over the image */}
  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
    <div className="max-w-xl">
      <p className="mb-3 font-semibold uppercase tracking-widest text-orange-600 border-l-5 border-green-800 pl-2">
        Building Stronger Communities in Kenya
      </p>

      <h1 className="text-6xl text-green-800 font-serif font-bold leading-[0.95]">
        Inspire,
        <br />
        Empower,
        <br />
        <span className="text-green-800">Transform.</span>
      </h1>

      <p className="mt-6 max-w-lg leading-8 text-gray-700">
        We create lasting change by investing in people,
        infrastructure, and opportunities that uplift
        communities and build a stronger tomorrow.
      </p>
    </div>
    
<div className="absolute mt-5 flex gap-x-4">
  {/* Primary Button */}
  <p className="transform rounded-xl bg-orange-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-orange-700">
    Join Our Cause
    
            <FaRegHandshake className="inline ml-2 size-8" />
  </p>

  {/* Secondary (Outlined) Button */}
  <p className="transform rounded-xl border-1 border-green-800 bg-transparent px-6 py-3 text-lg font-semibold text-green-800 transition duration-300 hover:scale-105 hover:bg-green-800 hover:text-white">
    Explore Programs
    
            <FaArrowRight className="inline ml-2 size-6" />
  </p>
</div>

  
  </div>

</section>
      {/*<div
        className="w-full min-h-screen relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-5xl w-full text-pink-900 text-center pb-10 font-bold">
            Inspire, Empower, Transform
          </div>
          <div className="">
            Lapaataa Foundation was established to bring hope and support to
            Kenya, specifically Konoin Constituency's missing and vulnerable.
            Founded by Hon. Brighton Yegon, MP for Konoin, our aim is to reunite
            families, assist those in need, and create a safer community for
            all.
            <br />
            <br />
            We are dedicated to providing resources, advocacy, and care for the
            lost and destitute. Our Vision is a society where no one is
            forgotten, and every person is valued and protected.
          </div>
        //<div className="absolute inset-0 bg-black/60"></div>
        <div className="w-full"></div>
      </div>**/}
<div className="w-full absolute -bottom-15 flex justify-center p-2 opacity-100"><div className="rounded p-1"><div className="text-black flex items-center justify-center">
        <div className="flex gap-x-5">
          {data.impacts.map((impact) => (<div className="flex flex-1 bg-stone-100 border-1 border-gray-200 py-5 rounded-xl shadow-lg pr-5">
            <img
                src={impact.icon}
                className="float-end z-40 size-20"
                alt="Empowerment"
              />
              <div className="ml-2">
                <p className="text-2xl font-bold text-green-800">{impact.title}</p>
                <p className="text-sm mt-2 font-semibold">{impact.subtitle}</p>
                <p className="text-xs">{impact.description}</p>
              </div>
            </div>))}

        </div></div>
        </div></div>
      
    </div>
  );
}
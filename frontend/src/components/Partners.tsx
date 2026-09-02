import { useState } from "react";
import { PiCaretRightThin } from "react-icons/pi";

import kcbimage from "../assets/kcb.jpg";
import uwezoimage from "../assets/uwezo.jpg";
import bometuni from "../assets/bometuni.jpg";
import everestimage from "../assets/everestglob.jpg";
import imarishaimge from "../assets/imarisha.png";
import kimbilioimge from "../assets/kimbiliodaima.jpg";
import kipchimchimimg from "../assets/kipchimchim.png";
import minilaborimg from "../assets/minilabour.png";
import minioald from "../assets/ministryoald.png";
import mobilehub from "../assets/mobilehub.jpg";
import neaimg from "../assets/nea.jpg";
import safaricom from "../assets/safaricomfo.png";
import youthaffairs from "../assets/youthaffairs.png";
import youthenter from "../assets/youthenter.png";
import minoh from "../assets/ministryoh.png";

export default function Partners() {
  const [showAll, setShowAll] = useState(false);

  const partners = [
    { id: 1, name: "KCB", image: kcbimage },
    { id: 2, name: "Uwezo Fund", image: uwezoimage },
    { id: 3, name: "Safaricom Foundation", image: safaricom },
    { id: 4, name: "Imarisha", image: imarishaimge },
    { id: 5, name: "Kimbilio Daima", image: kimbilioimge },
    { id: 6, name: "Kipchimchim", image: kipchimchimimg },
    { id: 7, name: "Everest Global", image: everestimage },
    { id: 8, name: "Mobile Hub", image: mobilehub },
    { id: 9, name: "Bomet University", image: bometuni },
    { id: 10, name: "NEA", image: neaimg },
    { id: 11, name: "Youth Enterprise", image: youthenter },
    { id: 12, name: "Ministry of Labour", image: minilaborimg },
    { id: 13, name: "Ministry of Agriculture", image: minioald },
    { id: 14, name: "Youth Affairs", image: youthaffairs },
    { id: 15, name: "Ministry of Health", image: minoh },
  ];

  const visiblePartners = showAll ? partners : partners.slice(0, 8);

  return (
    <section className="w-full bg-white">
      <div className="w-full px-5 py-12 lg:px-20 lg:py-20">
        <p className="mb-4 w-full text-center text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Partners
          </p>

        <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-semibold text-green-950 md:text-5xl">
          Strong Partnerships. Sustainable Change.
        </h2>

        <p className="mx-auto mb-10 mt-5 max-w-2xl text-center text-sm leading-6 text-gray-600 md:text-base">
          We are proud to collaborate with a diverse network of partners who
          share our vision for positive change and community development.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {visiblePartners.map((partner) => (
            <div
              key={partner.id}
              className="group flex h-36 items-center justify-center border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={partner.image}
                alt={`${partner.name} logo`}
                className="max-h-24 w-full object-contain transition duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="group flex items-center gap-2 rounded-md border-b-2 border-orange-500 px-1 py-2 font-medium text-orange-600 transition hover:border-green-800 hover:text-green-800"
            aria-expanded={showAll}
          >
            {showAll ? "Show Fewer Partners" : "View All Partners"}
            <PiCaretRightThin
              className={`text-xl transition-transform duration-300 ${
                showAll ? "rotate-90" : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </div>

        <p className="mx-auto mb-10 mt-12 max-w-2xl text-center text-sm leading-6 text-gray-600">
          We are grateful for the support and collaboration of our partners,
          whose contributions enable us to make a meaningful impact in the
          communities we serve.
        </p>

        <div className="flex flex-col items-center gap-5 bg-green-900 px-6 py-12 text-center text-white lg:px-30">
          <div className="flex w-full items-center gap-4">
            <div className="h-px flex-1 bg-green-300/60" />
            <h3 className="whitespace-nowrap text-xl font-semibold">
              Partner With Us
            </h3>
            <div className="h-px flex-1 bg-green-300/60" />
          </div>

          <p className="max-w-xl text-sm leading-6 text-green-50">
            Join us in making a difference. Lets work together for a
            better tomorrow.
          </p>

          <button
            type="button"
            className="rounded-md bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

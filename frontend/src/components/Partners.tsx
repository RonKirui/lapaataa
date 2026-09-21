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
      <div className="w-full px-5 sm:px-20 py-12 lg:pt-20">
        <p className="mb-4 text-sm text-center font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Partners
          </p>

          <h2
            id="core-values-title"
            className="mx-auto max-w-3xl text-center font-serif text-3xl font-semibold text-green-950 md:text-5xl"
          >
            Strong Partnerships. Sustainable Change.
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 bg-orange-500" />

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

        <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-gray-600">
          We are grateful for the support and collaboration of our partners,
          whose contributions enable us to make a meaningful impact in the
          communities we serve.
        </p>

    
      </div>
       <section className="relative isolate overflow-hidden bg-green-950 px-5 py-16 text-white sm:px-8 lg:px-20 lg:py-20">
  {/* Decorative background shapes */}
  <div
    aria-hidden="true"
    className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border border-green-400/20"
  />
  <div
    aria-hidden="true"
    className="absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full border border-orange-400/20"
  />
  <div
    aria-hidden="true"
    className="absolute left-1/2 top-0 -z-10 h-full w-px bg-white/5"
  />

  <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
    {/* Eyebrow */}
    <div className="mb-5 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.25em] text-orange-300 sm:text-sm">
      <span className="h-px w-10 bg-orange-400" aria-hidden="true" />
      Partnership
      <span className="h-px w-10 bg-orange-400" aria-hidden="true" />
    </div>

    {/* Heading */}
    <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
      Partner With Us to Create Lasting Impact
    </h2>

    <div
      aria-hidden="true"
      className="mt-6 h-1 w-16 rounded-full bg-orange-500"
    />

    {/* Description */}
    <p className="mt-6 max-w-2xl text-base leading-7 text-green-100/80 sm:text-lg">
      Join us in empowering communities, expanding opportunity, and building a
      stronger, more resilient future for Kenya. Together, we can turn shared
      purpose into measurable change.
    </p>

    {/* Actions */}
    <div className="mt-9 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
      <a
        href="/partner-with-us"
        className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-950/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-green-950"
      >
        Get In Touch
        <span aria-hidden="true" className="text-lg">→</span>
      </a>

      <a
        href="/our-work"
        className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/40 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-950"
      >
        Explore Our Work
      </a>
    </div>

    {/* Trust statement */}
    <p className="mt-8 text-xs uppercase tracking-[0.16em] text-green-200/60">
      Government · Corporate · NGO · Community Partners
    </p>
  </div>
</section>

    </section>
  );
}

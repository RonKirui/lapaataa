import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import integrityIcon from "../assets/lapaataa_integrity_icon.png";
import empowermentIcon from "../assets/lapaataa_empowerment_icon.png";
import sustainabilityIcon from "../assets/lapaataa_sustainability_icon.png";
import collaborationIcon from "../assets/lapaataa_collaboration_icon.png";
import excellenceIcon from "../assets/lapaataa_excellence_icon.png";

const values = [
  {
    title: "Integrity",
    description:
      "We uphold honesty, accountability, and transparency in everything we do.",
    icon: integrityIcon,
  },
  {
    title: "Empowerment",
    description:
      "We equip people and communities to lead their own development and progress.",
    icon: empowermentIcon,
  },
  {
    title: "Sustainability",
    description:
      "We create lasting solutions that protect resources and serve future generations.",
    icon: sustainabilityIcon,
  },
  {
    title: "Collaboration",
    description:
      "We build inclusive partnerships that turn shared purpose into collective impact.",
    icon: collaborationIcon,
  },
  {
    title: "Excellence",
    description:
      "We pursue quality, learning, and measurable results in all our work.",
    icon: excellenceIcon,
  },
];

function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export default function CoreValuesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  // Add enough cloned cards for a seamless loop at each screen size.
  const slides = useMemo(
    () => [...values, ...values.slice(0, visibleCount)],
    [visibleCount]
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setIsTransitioning(false);
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((current) => current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((current) => current + 1);
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((current) =>
      current === 0 ? values.length - 1 : current - 1
    );
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= values.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // These calculations preserve the original three-card design on desktop,
  // while making the slider fit one or two cards on smaller screens.
  const trackWidth = (slides.length / visibleCount) * 100;
  const cardWidth = 100 / slides.length;
  const translateAmount = currentIndex * cardWidth;

  return (
    <section
      id="core-values"
      className="w-full overflow-hidden bg-gray-50 px-5 py-20 text-gray-900 sm:px-8 lg:px-20 lg:py-20"
      aria-labelledby="core-values-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            How We Work
          </p>

          <h2
            id="core-values-title"
            className="font-serif text-4xl font-bold leading-tight text-green-950 sm:text-5xl"
          >
            Our Core Values
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 bg-orange-500" />

          <p className="mt-5 text-base leading-7 text-gray-600">
            Guiding principles that shape every partnership, program, and
            decision we make.
          </p>
        </div>

        <div className="relative mt-14">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous core value"
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-green-900 bg-white text-green-900 shadow-md transition hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2 lg:flex"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <div className="overflow-hidden lg:mx-14">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                width: `${trackWidth}%`,
                transform: `translateX(-${translateAmount}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((value, index) => (
                <div
                  key={`${value.title}-${index}`}
                  className="shrink-0 px-2"
                  style={{ width: `${cardWidth}%` }}
                >
                  <article className="group flex min-h-[290px] h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-800 hover:shadow-xl sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full p-3 shadow-md shadow-green-900/20">
                        <img
                          src={value.icon}
                          alt={`${value.title} icon`}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <span className="font-serif text-4xl font-bold text-green-100">
                        {String((index % values.length) + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-7 h-px w-10 bg-orange-500 transition-all duration-300 group-hover:w-16" />

                    <h3 className="mt-5 font-serif text-2xl font-bold text-green-950">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {value.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next core value"
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-green-900 bg-white text-green-900 shadow-md transition hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2 lg:flex"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>

        <div
          className="mt-8 flex justify-center gap-2"
          role="tablist"
          aria-label="Core values navigation"
        >
          {values.map((value, index) => (
            <button
              key={value.title}
              type="button"
              role="tab"
              aria-label={`Show ${value.title}`}
              aria-selected={currentIndex % values.length === index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                currentIndex % values.length === index
                  ? "w-8 bg-orange-500"
                  : "w-2.5 bg-gray-300 hover:bg-green-800"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

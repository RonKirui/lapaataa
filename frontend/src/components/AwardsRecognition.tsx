import type { JSX } from "react";
import {
  FaAward,
  FaTrophy,
} from "react-icons/fa6";

type RecognitionTone = "gold" | "silver" | "bronze";

interface Recognition {
  id: number;
  year: string;
  title: string;
  description: string;
  tone: RecognitionTone;
}

const recognitions: Recognition[] = [
  {
    id: 1,
    year: "2021",
    title: "Community Impact Excellence Award",
    description:
      "Recognized for exceptional leadership and measurable impact in community development and social upliftment.",
    tone: "gold",
  },
  {
    id: 2,
    year: "2018",
    title: "Social Development Leadership Award",
    description:
      "Awarded for outstanding dedication to improving livelihoods and empowering vulnerable communities.",
    tone: "silver",
  },
  {
    id: 3,
    year: "2015",
    title: "Grassroots Champion Award",
    description:
      "Honoring contributions to grassroots initiatives that drive positive change and build resilient communities.",
    tone: "bronze",
  },
];

const medalColors: Record<RecognitionTone, string> = {
  gold: "bg-amber-100 text-amber-600",
  silver: "bg-slate-100 text-slate-500",
  bronze: "bg-orange-100 text-orange-700",
};

export default function AwardsRecognition(): JSX.Element {
  return (
    <section
      id="awards"
      className="bg-[#fbfaf6] px-5 py-16 text-gray-900 sm:px-8 lg:px-20 lg:py-24"
      aria-labelledby="awards-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.25em] text-orange-600 sm:text-sm">
            <span className="h-px w-8 bg-orange-500" aria-hidden="true" />
            Recognition
            <span className="h-px w-8 bg-orange-500" aria-hidden="true" />
          </p>

          <h2
            id="awards-title"
            className="mx-auto max-w-3xl text-center font-serif text-3xl font-semibold text-green-950 md:text-5xl"
          >
            Celebrating Impact and Service
          </h2>

          <div
            className="mx-auto mt-5 h-1 w-16 rounded-full bg-orange-500"
            aria-hidden="true"
          />

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
            Our work is made possible through partnerships, trust, and a shared
            commitment to community transformation. These recognitions affirm
            our dedication to creating lasting impact and uplifting lives.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <article className="relative overflow-hidden rounded-2xl border-2 border-amber-500 bg-green-950 p-7 text-white shadow-xl sm:p-10">
            <div
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/10"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-7 flex h-32 w-32 items-center justify-center rounded-full border-4 border-amber-300 bg-amber-500/15 shadow-[0_0_35px_rgba(245,158,11,0.25)]">
                <FaAward
                  className="text-7xl text-amber-300"
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                Featured Recognition
              </p>

              <h3 className="mt-4 max-w-md font-serif text-3xl font-bold leading-tight text-amber-200 sm:text-4xl">
                Elder of the Order of the Burning Spear (EBS)
              </h3>

              <div
                className="my-6 h-px w-24 bg-amber-300/60"
                aria-hidden="true"
              />

              <p className="font-serif text-2xl font-semibold">
                Hon. Brighton Yegon
              </p>
              <p className="mt-4 max-w-sm text-base italic leading-7 text-green-100/85">
                For Outstanding Contribution to Community Development
              </p>
            </div>
          </article>

          <div className="relative space-y-5 lg:pl-8">
            <div
              className="absolute bottom-8 left-[21px] top-8 hidden w-px bg-green-900/30 sm:block"
              aria-hidden="true"
            />

            {recognitions.map((recognition: Recognition) => (
              <article
                key={recognition.id}
                className="relative flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg sm:grid-cols-[70px_1fr] sm:items-start sm:gap-5"
              >
                <div className="relative sm:-ml-25 z-10 flex flex-col sm:flex-row items-center gap-3 sm:items-start sm:gap-2">
                  <span className="text-2xl font-bold text-green-950">
                    {recognition.year}
                  </span>
                  <span
                    className="hidden h-3 w-3 mt-3 rounded-full border-2 border-green-900 bg-[#fbfaf6] sm:block"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${medalColors[recognition.tone]}`}
                    aria-hidden="true"
                  >
                    <FaTrophy />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold leading-tight text-green-950">
                      {recognition.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {recognition.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

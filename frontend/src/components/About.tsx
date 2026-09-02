import visionImage from "../assets/vision_icon_white.png";
import missionImage from "../assets/mission_icon_white.png";

const statements = [
  {
    eyebrow: "Our Mission",
    title: "Empowering People. Transforming Communities.",
    description:
      "We empower communities through sustainable, holistic programs in health, education, housing, climate-smart agriculture, and sports. By working together, we build resilience, unlock potential, and lay the foundation for self-reliant growth.",
    image: missionImage,
    accent: "bg-green-900",
  },
  {
    eyebrow: "Our Vision",
    title: "A Thriving, Self-Reliant Society for All.",
    description:
      "We envision thriving, self-reliant communities where poverty is eradicated and every individual has the opportunity to live a healthy, educated, dignified, and fulfilling life.",
    image: visionImage,
    accent: "bg-orange-600",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-white px-5 py-20 text-gray-900 sm:px-8 lg:px-20 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              <span className="h-px w-10 bg-orange-500" />
              About Lapaataa Foundation
            </p>
            <h2 className="max-w-xl font-serif text-4xl font-bold leading-[1.05] text-green-950 sm:text-5xl lg:text-6xl">
              Building a stronger future, together.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-gray-600">
              Lapaataa Foundation partners with communities to create practical,
              sustainable opportunities that improve lives and strengthen local
              resilience across Kenya.
            </p>
            <div className="mt-6 h-1 w-16 bg-orange-500" />
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {statements.map((statement) => (
            <article
              key={statement.eyebrow}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-10"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-green-100/60 transition duration-500 group-hover:scale-125" />

              <div className="relative z-10 flex flex-col gap-7 sm:flex-row sm:items-start">
                <div
                  className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl ${statement.accent} p-5 shadow-lg`}
                >
                  <img
                    src={statement.image}
                    alt={`${statement.eyebrow} icon`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                    {statement.eyebrow}
                  </p>
                  <h3 className="max-w-md font-serif text-2xl font-bold leading-tight text-green-950 sm:text-3xl">
                    {statement.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                    {statement.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-gray-200 pt-8 text-center sm:grid-cols-3">
          <div>
            <p className="font-serif text-3xl font-bold text-green-900">People</p>
            <p className="mt-1 text-sm text-gray-500">At the heart of our work</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-green-900">Partnership</p>
            <p className="mt-1 text-sm text-gray-500">Strengthening collective action</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-green-900">Progress</p>
            <p className="mt-1 text-sm text-gray-500">Measured through lasting impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}

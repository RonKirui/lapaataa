import heroImage from "../assets/lapataahero.jpeg";
import { FaArrowRight, FaBell, FaCalendarDays, FaRegHandshake } from "react-icons/fa6";
import data from "../data/data.json";

const upcomingEvents = [
  {
    id: 1,
    date: "15",
    month: "JUN",
    title: "Community Health Outreach",
    details: "Kaplong Community Centre · 9:00 AM",
  },
  {
    id: 2,
    date: "22",
    month: "JUN",
    title: "Youth Empowerment Forum",
    details: "Konoin · Registration open",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-green-950 text-white"
      aria-labelledby="hero-title"
    >
      {/* Hero image */}
      <img
        src={heroImage}
        alt="Community members working together to build a stronger future"
        className="absolute inset-0 -z-20 h-full min-h-[860px] w-full object-cover object-center lg:min-h-[720px]"
      />

      {/* Responsive image overlay for readable text */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-950/75 via-green-950/55 to-green-950/95 sm:bg-gradient-to-r sm:from-white sm:via-white/95 sm:via-55% sm:to-green-950/10" />

      <div className="mx-auto flex min-h-[860px] max-w-7xl flex-col px-5 pb-8 pt-28 sm:px-8 lg:min-h-[720px] lg:px-20 lg:pb-32 lg:pt-36">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-sm sm:text-orange-600">
            <span className="h-px w-10 bg-orange-500" />
            Building Stronger Communities in Kenya
          </p>

          <h1
            id="hero-title"
            className="max-w-xl font-serif text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl lg:text-green-950"
          >
            Inspire.
            <br />
            Empower.
            <br />
            <span className="text-orange-400 lg:text-green-900">Transform.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-green-50 sm:text-lg lg:text-gray-700">
            We create lasting change by investing in people, infrastructure,
            and opportunities that uplift communities and build a stronger
            tomorrow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="text-white inline-flex items-center justify-center gap-3 rounded-lg bg-orange-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-green-950 lg:focus:ring-offset-white">
              Join Our Cause
              <FaRegHandshake aria-hidden="true" className="text-xl" />
            </a>

            <a href="#services" className="text-green-800 inline-flex items-center justify-center gap-3 rounded-lg border-2 border-white/80 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 lg:border-green-900 lg:bg-transparent lg:text-green-900 lg:hover:bg-green-900 lg:hover:text-white">
              Explore Programs
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* events / notifications panel*/}
        <aside
          className="relative right-auto top-auto z-20 mt-8 block w-full hover:lg:scale-105 lg:transition lg:duration-500 overflow-hidden rounded-xl border border-white/30 bg-green-950/95 p-4 text-white shadow-2xl backdrop-blur-md sm:absolute sm:right-8 sm:top-8 sm:mt-0 sm:w-72 lg:right-10 lg:top-32"
          aria-labelledby="hero-events-title"
        >
          <div className="flex items-center justify-between border-b border-white/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600">
                <FaBell aria-hidden="true" className="text-sm" />
              </span>
              <h2 id="hero-events-title" className="text-sm font-bold">
                Upcoming Events
              </h2>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-300">
              Updates
            </span>
          </div>

          <div className="mt-3 space-y-3">
            {upcomingEvents.map((event) => (
              <p
                key={event.id}
                className="flex gap-3 rounded-lg p-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <span className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-md bg-white text-green-950">
                  <FaCalendarDays aria-hidden="true" className="text-orange-600" />
                  <span className="text-sm font-bold leading-none">{event.date}</span>
                  <span className="text-[9px] font-bold">{event.month}</span>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-5">
                    {event.title}
                  </span>
                  <span className="mt-1 block text-xs leading-4 text-green-100/75">
                    {event.details}
                  </span>
                </span>
              </p>
            ))}
          </div>

          <p
            className="mt-2 inline-flex items-center gap-2 border-t border-white/20 pt-3 text-xs font-bold text-orange-300 hover:text-orange-200"
          >
            View all events
            <FaArrowRight aria-hidden="true" />
          </p>
        </aside>

        {/* Impact status cards */}
        <div className="mt-auto pt-14 lg:pt-20 hover:lg:translate-y-10 lg:transition lg:duration-500">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gray-300/70 lg:rounded-xl lg:border lg:border-gray-200 lg:bg-white/95 lg:px-2 lg:py-2 lg:shadow-2xl lg:backdrop-blur-md">
            {data.impacts.map((impact) => (
              <article
                key={impact.id}
                className="flex items-center gap-4 rounded-xl border border-white/20 bg-white/95 p-4 text-gray-900 shadow-lg backdrop-blur-md sm:p-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 p-2.5 text-green-900">
                  <img
                    src={impact.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-serif text-3xl font-bold leading-none text-green-900">
                    {impact.title}
                  </p>
                  <p className="mt-1 text-sm font-bold capitalize text-gray-900">
                    {impact.subtitle}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {impact.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

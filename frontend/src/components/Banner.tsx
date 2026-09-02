import { RiDoubleQuotesL } from "react-icons/ri";
import heroImage from "../assets/patron_tbg.png";

export default function Banner() {
  return (
    <section
      className="relative isolate overflow-hidden bg-green-950 px-5 py-16 text-white sm:px-8 lg:px-20 lg:py-24"
      aria-labelledby="patron-message"
    >
      {/* Subtle background treatment */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(120deg,#052e24,#064e3b)]" />
      <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border border-orange-400/20" />
      <div className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full border border-white/10" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Patron image */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-4 rounded-3xl border border-orange-400/40" />
          <div className="relative overflow-hidden rounded-3xl bg-green-900/60 p-4 shadow-2xl shadow-black/20">
            <img
              src={heroImage}
              alt="Hon. Brighton Yegon, Patron of Lapatet Foundation"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Message */}
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            A Message from Our Patron
          </p>

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-orange-400/40 bg-orange-500/10">
            <RiDoubleQuotesL
              aria-hidden="true"
              className="text-4xl text-orange-400"
            />
          </div>

          <blockquote id="patron-message">
            <p className="max-w-2xl font-serif text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
              True transformation begins when we invest in people, uphold
              integrity, and work together for the common good.
            </p>
          </blockquote>

          <div className="mt-8 h-px w-16 bg-orange-400" />

          <div className="mt-5">
            <p className="text-xl font-semibold text-orange-400">
              Hon. Brighton Yegon, CBS
            </p>
            <p className="mt-1 text-base text-green-100">
              Patron, Lapaataa Foundation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

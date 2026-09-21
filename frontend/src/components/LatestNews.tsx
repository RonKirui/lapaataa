import type { JSX } from "react";
import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";
import heroimage from "../assets/lapataahero.jpeg";

interface Story {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  featured?: boolean;
}

const stories: Story[] = [
  {
    id: 1,
    category: "Community Impact",
    date: "Sep 14, 2026",
    title: "Building Opportunity, One Community at a Time",
    excerpt:
      "Through partnerships, skills training, and local leadership, we are helping Kenyan youth build brighter futures.",
    image: heroimage,
    href: "/stories/building-opportunity",
    featured: true,
  },
  {
    id: 2,
    category: "Education",
    date: "Sep 12, 2026",
    title: "Opening Doors Through Education",
    excerpt:
      "Scholarships and mentorship are creating new possibilities for Kenyan students.",
    image: heroimage,
    href: "/stories/opening-doors-through-education",
  },
  {
    id: 3,
    category: "Agriculture",
    date: "Sep 6, 2026",
    title: "Growing a More Resilient Future",
    excerpt:
      "Sustainable farming practices are strengthening food security and livelihoods.",
    image: heroimage,
    href: "/stories/resilient-future",
  },
];

export default function LatestNews(): JSX.Element {
  const [featuredStory, ...supportingStories] = stories;

  return (
    <section
      id="stories"
      className="bg-[#fbfaf6] px-5 py-16 text-gray-900 sm:px-8 lg:px-20 lg:py-24"
      aria-labelledby="latest-news-title"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Stories From the Field
          </p>

          <h2
            id="core-values-title"
            className="font-serif text-4xl font-bold leading-tight text-green-950 sm:text-5xl"
          >
            Latest News &amp; Stories
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 bg-orange-500" />

          <p className="mt-5 mb-10 text-base leading-7 text-gray-600">
            We share our progress, celebrate community voices, and highlight the
            people and partnerships creating meaningful change.
          </p>
        </div>

        {/* Featured story and supporting stories */}
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
          <FeaturedStory story={featuredStory} />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {supportingStories.map((story) => (
              <SupportingStory key={story.id} story={story} />
            ))}
          </div>
        </div>

        {/* View all action button */}
        <div className="mt-10 flex justify-center">
<button type="button" className="group flex items-center gap-2 rounded-md border-b-2 border-orange-500 px-1 py-2 font-medium text-orange-600 transition hover:border-green-800 hover:text-green-800">
                    View All Stories
                    
                    <FaArrowRight aria-hidden="true"
                      className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
        </div>
        
        
      </div>
    </section>
  );
}

interface StoryProps {
  story: Story;
}

function FeaturedStory({ story }: StoryProps): JSX.Element {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <a href={story.href} className="block focus:outline-none">
        <div className="relative aspect-[16/8] overflow-hidden bg-green-100">
          <img
            src={story.image}
            alt={story.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.15em]">
            <span className="rounded-full bg-orange-600 px-3 py-1.5 text-white">
              {story.category}
            </span>
            <span className="flex items-center gap-2 text-gray-500">
              <FaCalendarDays aria-hidden="true" />
              {story.date}
            </span>
          </div>

          <h3 className="mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight text-green-950 transition group-hover:text-green-800 sm:text-4xl">
            {story.title}
          </h3>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            {story.excerpt}
          </p>

          <span className="mt-6 inline-flex items-center gap-3 font-semibold text-green-900">
            Read Story
            <FaArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </a>
    </article>
  );
}

function SupportingStory({ story }: StoryProps): JSX.Element {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <a
        href={story.href}
        className="flex h-full flex-col focus:outline-none sm:flex-row lg:flex-row"
      >
        <div className="relative aspect-[16/9] shrink-0 overflow-hidden bg-green-100 sm:aspect-square sm:w-40 lg:w-44">
          <img
            src={story.image}
            alt={story.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center p-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.12em]">
            <span className="text-orange-600">{story.category}</span>
            <span className="text-gray-400">{story.date}</span>
          </div>

          <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-green-950 transition group-hover:text-green-800">
            {story.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">{story.excerpt}</p>

          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-900">
            Read Story
            <FaArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </a>
    </article>
  );
}


import { type FormEvent, useState, type JSX } from "react";

import logo from "../assets/lapaataalogo_orange.png";
import mapimg from "../assets/mapimage.png";
import {
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaHandshake,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaRegComments,
  FaRegPaperPlane,
  FaTwitter,
  FaBullhorn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

interface InquiryCard {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: typeof FaRegComments;
  accent: string;
}

const inquiryCards: InquiryCard[] = [
  {
    id: 1,
    title: "General Enquiries",
    description: "Have a question about our work, programs, or how we operate? We are here to help.",
    href: "#contact-form",
    icon: FaRegComments,
    accent: "bg-green-950",
  },
  {
    id: 2,
    title: "Partnerships",
    description: "We welcome collaborations with organizations, foundations, and businesses that share our vision.",
    href: "/partner-with-us",
    icon: FaHandshake,
    accent: "bg-orange-600",
  },
  {
    id: 3,
    title: "Media & Communications",
    description: "For media requests, interviews, and press enquiries, please connect with our communications team.",
    href: "mailto:media@lapaataafoundation.org",
    icon: FaBullhorn,
    accent: "bg-green-950",
  },
];

const initialForm: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: "",
};

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Connect this handler to your backend, email service, or form provider.
    setSubmitted(true);
  };

  return (
    <main className="bg-[#fbfaf6] text-gray-900">
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-center px-5 py-16 sm:px-8 lg:px-20 lg:py-24">
            <div className="max-w-xl">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-600 sm:text-sm">
                <span className="h-px w-10 bg-orange-500" aria-hidden="true" />
                Contact Us
              </p>

              <h1 className="font-serif text-4xl font-bold leading-[1.05] text-green-950 sm:text-5xl lg:text-6xl">
                Let&apos;s Build Stronger Communities Together
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                Whether you are a donor, partner, volunteer, or community member,
                we would love to hear from you. Get in touch with the Lapaataa
                Foundation and be part of lasting change in Kenya.
              </p>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden bg-green-950 lg:min-h-[430px]">
            {/* Replace this decorative block with your approved foundation image. */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(249,115,22,0.3),transparent_25%),linear-gradient(135deg,#064e3b,#022c22)]" />
            <div className="absolute -right-24 top-12 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute right-16 top-24 h-48 w-48 rounded-full border border-orange-400/40" />
            <div className="absolute bottom-10 left-10 max-w-xs text-white/80">
              <p className="font-serif text-3xl italic leading-tight text-white">
                Every conversation can begin a journey of change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form and contact information */}
      <section className="px-5 py-14 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.35fr_0.9fr]">
          <div
            id="contact-form"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Get in touch
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-green-950 sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Tell us how we can help. Fields marked with an asterisk are required.
              </p>
            </div>

            {submitted && (
              <div
                role="status"
                className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-900"
              >
                Thank you. Your message has been received. We will get back to you
                within two business days.
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Full Name <span className="text-orange-600">*</span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-normal text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                  />
                </label>

                <label className="block text-sm font-semibold text-gray-800">
                  Email Address <span className="text-orange-600">*</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-normal text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="+254 700 123 456"
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-normal text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                  />
                </label>

                <label className="block text-sm font-semibold text-gray-800">
                  Inquiry Type <span className="text-orange-600">*</span>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-normal text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="general">General enquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="media">Media and communications</option>
                    <option value="donation">Donation support</option>
                  </select>
                </label>
              </div>

              <label className="block text-sm font-semibold text-gray-800">
                Message <span className="text-orange-600">*</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="mt-2 w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 font-normal text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-green-950 px-6 py-3.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
              >
                Send Message
                <FaRegPaperPlane aria-hidden="true" />
              </button>
            </form>
          </div>

          <aside className="rounded-2xl bg-green-950 p-6 text-white shadow-xl sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              Reach us directly
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold">Contact Information</h2>

            <div className="mt-8 space-y-6">
              <ContactDetail
                icon={<FaLocationDot aria-hidden="true" />}
                label="Office Location"
                value={<>Konoin, Bomet County,<br />Kenya</>}
              />
              <ContactDetail
                icon={<FaPhone aria-hidden="true" />}
                label="Phone"
                value={<a href="tel:+254700123456" className="hover:text-orange-300">+254 700 123 456</a>}
              />
              <ContactDetail
                icon={<FaEnvelope aria-hidden="true" />}
                label="Email"
                value={<a href="mailto:info@lapaataafoundation.org" className="break-all hover:text-orange-300">info@lapaataafoundation.org</a>}
              />
              <ContactDetail
                icon={<FaClock aria-hidden="true" />}
                label="Office Hours"
                value={<>Monday–Friday<br />8:00 AM–5:00 PM</>}
              />
            </div>

            <div className="mt-8 border-t border-white/20 pt-6">
              <p className="text-sm leading-6 text-green-100/80">
                We usually respond within 2 business days. For urgent matters,
                please call us directly during office hours.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Office location */}
      <section className="px-5 pb-14 sm:px-8 lg:px-20 lg:pb-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[260px] overflow-hidden bg-green-100">
            <div className="absolute inset-0 hover:scale-105 transition duration-700 bg-[linear-gradient(120deg,rgba(6,78,59,.1),rgba(249,115,22,.12)),repeating-linear-gradient(45deg,transparent,transparent_48px,rgba(6,78,59,.12)_49px,transparent_50px)]"><img
            src={mapimg}
            alt={""}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
            <a 
              href="https://maps.google.com/?q=Konoin,Bomet,Kenya"
              target="_blank"
              rel="noreferrer"
            className="absolute group left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center hover:scale-110 transition duration-300 justify-center rounded-full bg-orange-600 text-3xl text-white shadow-xl ring-8 ring-orange-600/20">
             
          
        
              <FaLocationDot aria-hidden="true" />
            </a>
            <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-green-950 shadow-sm">
              Konoin, Bomet County, Kenya
            </span>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              <span className="h-px w-8 bg-orange-500" aria-hidden="true" />
              Visit Our Office
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-green-950">
              We welcome visitors
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              We welcome visitors, partners, and community members to our office.
              Please contact us in advance so we can better prepare for your visit.
            </p>
            <a
              href="https://maps.google.com/?q=Konoin,Bomet,Kenya"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-green-950 hover:text-orange-600"
            >
              Get directions <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry categories */}
      <section className="border-y border-gray-200 bg-white px-5 py-12 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {inquiryCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.id}
                href={card.href}
                className="group flex gap-4 rounded-xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${card.accent}`}>
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-serif text-xl font-bold text-green-950">
                    {card.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-gray-600">
                    {card.description}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                    Learn more
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 px-5 py-12 text-white sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div className="-mt-5" >
            <Link to={"/"}>
            <img className="h-20" src={logo} alt="Lapataa Foundation" />
          </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-green-100/75">
              Empowering people. Strengthening communities. Building a more resilient Kenya.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href="#facebook" label="Facebook" icon={<FaFacebookF />} />
              <SocialLink href="#twitter" label="Twitter" icon={<FaTwitter />} />
              <SocialLink href="#instagram" label="Instagram" icon={<FaInstagram />} />
              <SocialLink href="#linkedin" label="LinkedIn" icon={<FaLinkedinIn />} />
            </div>
          </div>

          {/*<FooterLinks
            title="Quick Links"
            links={["About Us", "Our Work", "Impact", "Stories", "Get Involved"]}
          />*/}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
              Quick Links
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-green-100/75">
              <a className="flex gap-3"> About Us</a>
              <a className="flex gap-3">Areas of Focus</a>
              <a className="flex gap-3">Latest News</a>
              <a className="flex gap-3">Parnership</a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
              Contact Us
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-green-100/75">
              <p className="flex gap-3"><FaLocationDot className="mt-1 shrink-0" /> Konoin, Bomet County, Kenya</p>
              <p className="flex gap-3"><FaPhone className="mt-1 shrink-0" /> +254 700 123 456</p>
              <p className="flex gap-3"><FaEnvelope className="mt-1 shrink-0" /> info@lapatetfoundation.org</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
              Stay Connected
            </h2>
            <p className="mt-4 text-sm leading-6 text-green-100/75">
              Subscribe for updates about our work and impact.
            </p>
            <form className="mt-4 flex overflow-hidden rounded-lg bg-white">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 px-3 py-3 text-sm text-gray-900 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-orange-600 px-4 text-white transition hover:bg-orange-700"
              >
                <FaArrowRight aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/20 pt-5 text-xs text-green-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lapaataa Foundation. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

interface ContactDetailProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function ContactDetail({ icon, label, value }: ContactDetailProps): JSX.Element {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-300">
        {icon}
      </span>
      <div className="text-sm">
        <p className="font-semibold text-white">{label}</p>
        <div className="mt-1 leading-6 text-green-100/75">{value}</div>
      </div>
    </div>
  );
}

interface FooterLinksProps {
  title: string;
  links: string[];
}

function FooterLinks({ title, links }: FooterLinksProps): JSX.Element {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
        {title}
      </h2>
      <nav className="mt-4 flex flex-col gap-3 text-sm text-green-100/75" aria-label={title}>
        {links.map((link) => (
          <a key={link} href={`/${link.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-white">
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

function SocialLink({ href, label, icon }: SocialLinkProps): JSX.Element {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition hover:border-orange-300 hover:bg-orange-600"
    >
      {icon}
    </a>
  );
}


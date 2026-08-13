import heroImage from "../assets/lapataahero.jpeg";

export default function Hero() {
  return (
    <div>

<section className="relative min-h-[650px] overflow-hidden bg-white">

  {/* Background image */}
  <img
    src={heroImage}
    alt="Community"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* White fade over the image */}
  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
    <div className="max-w-xl">
      <p className="mb-4 font-semibold uppercase tracking-widest text-orange-600">
        Building Stronger Communities in Kenya
      </p>

      <h1 className="text-6xl text-gray-900 font-serif font-bold leading-[0.95]">
        Inspire,
        <br />
        Empower,
        <br />
        <span className="text-orange-600">Transform.</span>
      </h1>

      <p className="mt-8 max-w-lg text-lg leading-8 text-gray-700">
        We create lasting change by investing in people,
        infrastructure, and opportunities that uplift
        communities and build a stronger tomorrow.
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
    </div>
  );
}
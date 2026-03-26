export default function About() {
  return (
    <>
      <div className=" mx-auto px-5 w-full pt-10 w-full gap-5 lg:px-30 text-gray-900">
        <div className="w-full">
          <div className="text-6xl w-full text-pink-900 text-center pb-10 font-bold">
            Inspire, Empower, Transform
          </div>
          <div className="text-xl">
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
        </div>
      </div>
      <div className="grid mt-10 bg-pink-900 px-10 sm:px-30 grid-cols-1 lg:grid-cols-2 py-10 gap-3">
        <div className=" p-5 rounded-sm border-l border-gray-50">
          <div className="text-4xl font-bold text-gray-50">Our Mission</div>
          <div className="pt-5 text-xl">
            To empower communities through sustainable, holistic programs in
            health, education, housing, climate-smart agriculture, and sports.
            We collaborate to build resilience, unlock potential, and lay the
            foundation for self-reliant growth.{" "}
          </div>
        </div>
        <div className="p-5 rounded-sm border-l border-gray-50">
          <div className="text-4xl font-bold text-gray-50">Our Vision</div>
          <div className="pt-5 text-xl">
            Creating thriving, self-reliant communities where poverty is
            eradicated and every individual lives a healthy, educated, and
            dignified life.
          </div>
        </div>
      </div>
    </>
  );
}

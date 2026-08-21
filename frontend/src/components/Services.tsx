import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <>
      <div className="p-5 lg:px-20 bg-gray-50 ">
        <p className="mb-2 w-full text-center font-semibold uppercase tracking-widest text-green-800">
        Our Areas of Focus
      </p>
      <p className="mb-8 w-full text-center text-sm text-black leading-[0.95]">
        We are dedicated to creating lasting change in communities through our
        comprehensive programs <br /> in health, education, housing, climate-smart
        agriculture, and sports.
      </p>
        <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center pb-5 gap-6">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </>
  );
}

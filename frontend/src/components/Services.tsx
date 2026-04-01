import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <>
      <div className="px-5 lg:px-30 bg-gray-200 ">
        <div className="w-full text-5xl p-15 font-sans text-center font-bold text-pink-900">
          Our Areas Of Focus
        </div>
        <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center pb-5 gap-4">
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

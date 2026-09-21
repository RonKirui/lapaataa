import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <>
      <div className="p-5 lg:px-20 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Areas of Focus
          </p>

          <h2
            id="services-title"
            className="font-serif text-4xl font-bold leading-tight text-green-950 sm:text-5xl"
          >
            Creating impact where it matters most.
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 bg-orange-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            We create lasting change through comprehensive programs in health,
            education, housing, climate-smart agriculture, sports, and economic
            empowerment.
          </p>
        </div>
        <ServiceCard />
      </div>
    </>
  );
}

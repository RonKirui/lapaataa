import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import data from "../data/data.json";

export default function ServiceCard() {
  return (
    <div className=" mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 items-center pb-5 gap-6 ">
      {data.programs.map((program) => (
        <div key={program.id} className="bg-gray-100 border-1 hover:translate-y-[-5px] hover:shadow-xl hover:bg-gray-200 transition duration-500 border-gray-300 rounded-lg shadow-2xl relative w-full ">
        <img
          className="size-100 z-0 shrink-0 rounded-lg w-full h-40 object-cover brightness-80 contrast-100 dark:brightness-50"
          src={program.img}
          alt="icon"
        ></img>
      {/* Overlay */}
      <div className="absolute w-full items-end px-2">
        <div className="w-full ml-2 -mt-9">
          <MdOutlineHealthAndSafety className=" bg-green-900 border-stone-200 p-2 rounded-full size-12" />
        </div>
      </div>

      <div className="p-4 text-gray-900">
        <p className=" font-semibold text-base text-gray-800 tracking-widest">
              {program.title}
            </p>
        <p className="text-sm line-clamp-3 text-gray-700">
            {program.description}
        </p>
         <p className="text-orange-600 py-2 rounded-b-sm">
        Learn More
        <FaArrowRight className="inline ml-2" />
      </p>
      </div>
      </div>
        
      ))}
      
    </div>
      
  );
}
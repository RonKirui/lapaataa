import heroImage from "../assets/lapataahero.jpeg";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
export default function ServiceCard() {
  return (
    <div className=" bg-gray-100 border-1 border-gray-300 rounded-lg shadow-2xl relative w-full ">
      <div>
        <img
          className="size-100 z-0 shrink-0 rounded-lg w-full h-40 object-cover brightness-80 contrast-100 dark:brightness-50"
          src={heroImage}
          alt="icon"
        ></img>
      </div>
      {/* Overlay */}
      <div className="absolute w-full items-end px-2">
        <div className="w-full ml-2 -mt-9">
          <MdOutlineHealthAndSafety className=" bg-green-900 border-stone-200 p-2 rounded-full size-12" />
        </div>
      </div>

      <div className="p-4 text-gray-900">
        <p className=" font-semibold text-base text-gray-800 tracking-widest">
              Economic Development{" "}
            </p>
        <p className="text-sm">
          We create lasting change by investing in people, infrastructure, and
          opportunities that uplift communities and build a stronger tomorrow.
        </p>
         <p className="text-orange-600 py-2 rounded-b-sm">
        Learn More
        <FaArrowRight className="inline ml-2" />
      </p>
      </div>
    </div>
      
  );
}
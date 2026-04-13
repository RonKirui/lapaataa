import heroImage from "../assets/lapataahero.jpeg";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BsChevronDoubleRight } from "react-icons/bs";
export default function ServiceCard() {
  return (
    <div className=" bg-gray-50 rounded-sm shadow-2xl rounded-br-4xl rounded-tl-4xl relative w-full ">
      <div>
        <img
          className="size-100 z-0 shrink-0 rounded-tl-4xl w-full h-50 object-cover brightness-90 dark:brightness-50"
          src={heroImage}
          alt="icon"
        ></img>
      </div>
      {/* Overlay */}
      <div className="absolute w-full items-end px-2">
        <div className="w-full -mt-18">
          <MdOutlineHealthAndSafety className="size-10" />
          <div className="w-full flex justify-between items-center text-white">
            <span className=" font-bold text-lg px-2">
              Economic Development{" "}
            </span>
            <BsChevronDoubleRight className="size-6 pt-1" />
            {/*<FaAnglesRight className="size-7" />*/}
          </div>
        </div>
      </div>

      <div className="p-4 text-gray-900">
        Empowering local entrepreneurs to thrive.
      </div>
    </div>
  );
}

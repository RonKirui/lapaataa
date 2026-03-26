import heroImage from "../assets/lapataahero.jpeg";
import { FaAnglesRight } from "react-icons/fa6";
export default function ServiceCard() {
  return (
    <div className=" bg-gray-50">
      <div>
        <img
          className="size-100 z-0 shrink-0 rounded-t-sm w-full h-40 object-cover brightness-90 dark:brightness-50"
          src={heroImage}
          alt="icon"
        />
      </div>
      <div className="bg-pink-900 font-bold p-4 flex justify-between text-gray-50 w-full">
        <span>Economic Development </span>
        <FaAnglesRight className="size-7" />
      </div>
      <div className="p-4 text-gray-900">
        Empowering local entrepreneurs to thrive.
      </div>
    </div>
  );
}

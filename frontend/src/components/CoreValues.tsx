import { MdOutlineHealthAndSafety } from "react-icons/md";
export default function CoreValues() {
  return (
    <div className="px-5 w-full h-screen lg:px-30">
      <div className="w-full text-5xl p-15 font-sans text-center font-bold text-pink-900">
        Our Core Values
      </div>
      <div className="w-full grid grid-cols-5 gap-2">
        <div className="card flex flex-col shadow-xl gap-y-4">
          <MdOutlineHealthAndSafety className="size-20" />
          <span className="text-pink-900 font-bold text-2xl">Integrity</span>
          <div className="divid-line bg-gray-300 w-full"></div>
          <span className="text-gray-800 text-center">
            We uphold honesty, accountability, and transparency in all our
            actions.
          </span>
        </div>
        <div className="card flex flex-col items-center shadow-xl gap-4">
          <MdOutlineHealthAndSafety className="size-20" />
          <span className="text-pink-900 font-bold text-2xl">Integrity</span>
          <div className="divid-line bg-gray-300 w-full"></div>
          <span className="text-gray-800 text-center">
            We uphold honesty, accountability, and transparency in all our
            actions.
          </span>
        </div>
        <div className="card flex flex-col items-center shadow-xl gap-4">
          <MdOutlineHealthAndSafety className="size-20" />
          <span className="text-pink-900 font-bold text-2xl">Integrity</span>
          <div className="divid-line bg-gray-300 w-full"></div>
          <span className="text-gray-800 text-center">
            We uphold honesty, accountability, and transparency in all our
            actions.
          </span>
        </div>
        <div className="card flex flex-col items-center shadow-xl gap-4">
          <MdOutlineHealthAndSafety className="size-20" />
          <span className="text-pink-900 font-bold text-2xl">Integrity</span>
          <div className="divid-line bg-gray-300 w-full"></div>
          <span className="text-gray-800 text-center">
            We uphold honesty, accountability, and transparency in all our
            actions.
          </span>
        </div>
        <div className="card flex flex-col items-center shadow-xl gap-4">
          <MdOutlineHealthAndSafety className="size-20" />
          <span className="text-pink-900 font-bold text-2xl">Integrity</span>
          <div className="divid-line bg-gray-300 w-full"></div>
          <span className="text-gray-800 text-center">
            We uphold honesty, accountability, and transparency in all our
            actions.
          </span>
        </div>
      </div>
    </div>
  );
}

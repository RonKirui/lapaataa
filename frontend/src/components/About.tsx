import heroImage from "../assets/lapataahero.jpeg";
import visionImge from "../assets/vision_icon_white.png";
import missionImge from "../assets/mission_icon_white.png";
export default function About() {
  return (
    <>
      <div className="bg-gray-100 p-20 mx-auto px-5 w-full flex flex-col lg:flex-row py-10 mt-5 w-full gap-20 lg:px-20 text-gray-900">
        
        <div className="w-full text-gray-900">

          <div className=" flex mt-2 gap-3 cols-2">
            <div className="p-2rounded-sm flex-1">
              <div className="flex gap-5 px-5 border-r-2 border-gray-300 items-center">
                <img
                  className="size-25 p-1 bg-green-800 rounded-full"
                  src={missionImge}
                />
                <div className="w-full">
                  <p className="mb-4 font-semibold uppercase tracking-widest text-green-800">
        Our Mission
      </p>
      <h2 className="text-xl text-gray-900 font-serif font-bold leading-[0.95]">
        Empowering People, Transforming Communities.
      </h2>
                  <div className="text-sm py-1 text-gray-500">
                    To empower communities through sustainable, holistic
                    programs in health, education, housing, climate-smart
                    agriculture, and sports. We collaborate to build resilience,
                    unlock potential, and lay the foundation for self-reliant
                    growth.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border-gray-900 flex-1">
              <div className="flex px-5 gap-5 items-center">
                <img
                  className="size-25 p-1 bg-green-800 rounded-full"
                  src={visionImge}
                />
                <div className="w-full">
                  <p className="mb-4 font-semibold uppercase tracking-widest text-green-800">
        Our Vision
      </p>
      <h2 className="text-xl text-gray-900 font-serif font-bold leading-[0.95]">
        A Thriving, Self-Reliant Society for All.
      </h2>
                  <div className="text-gray-500 text-sm py-1">
                    Creating thriving, self-reliant communities where poverty is
                    eradicated and every individual lives a healthy, educated,
                    and dignified life.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

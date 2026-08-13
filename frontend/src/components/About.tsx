import heroImage from "../assets/lapataahero.jpeg";
import visionImge from "../assets/vision_icon_white.png";
import missionImge from "../assets/mission_icon_white.png";
export default function About() {
  return (
    <>
      <div className=" mx-auto px-5 w-full flex flex-col lg:flex-row py-10 w-full gap-20 lg:px-20 text-gray-900">
        
        <div className="w-full">
          
          <div className="bg-gray-50 flex mt-2 gap-3 cols-2">
            <div className="p-2rounded-sm bg-gray-50">
              <div className="flex gap-2 items-center">
                <img
                  className="size-15 p-1 bg-pink-900 rounded-full"
                  src={missionImge}
                />
                <div className="w-full">
                  <div className="text-2xl font-bold text-pink-900">
                    Our Mission
                  </div>
                  <div className="divid-line bg-gray-500 w-full"></div>
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
            <div className="rounded-smborder-gray-900">
              <div className="flex gap-2 items-center">
                <img
                  className="size-15 p-1 bg-blue-800 rounded-full"
                  src={visionImge}
                />
                <div className="w-full">
                  <div className="text-2xl pt-2 font-bold text-blue-800">
                    Our Vision
                  </div>
                  <div className="divid-line bg-gray-500 w-full"></div>
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

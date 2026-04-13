import heroImage from "../assets/lapataahero.jpeg";
import visionImge from "../assets/vision_icon_white.png";
import missionImge from "../assets/mission_icon_white.png";
export default function About() {
  return (
    <>
      <div className=" mx-auto px-5 w-full flex flex-col lg:flex-row py-10 w-full gap-20 lg:px-20 text-gray-900">
        <img
          src={heroImage}
          alt="image"
          className="rounded-full hidden lg:block w-full lg:w-1/3"
        />
        <div className="w-full lg:w-2/3">
          <div className="text-5xl w-full text-pink-900 text-center pb-10 font-bold">
            Inspire, Empower, Transform
          </div>
          <div className="">
            Lapaataa Foundation was established to bring hope and support to
            Kenya, specifically Konoin Constituency's missing and vulnerable.
            Founded by Hon. Brighton Yegon, MP for Konoin, our aim is to reunite
            families, assist those in need, and create a safer community for
            all.
            <br />
            <br />
            We are dedicated to providing resources, advocacy, and care for the
            lost and destitute. Our Vision is a society where no one is
            forgotten, and every person is valued and protected.
          </div>
          <div className="bg-gray-50 mt-2 gap-3">
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

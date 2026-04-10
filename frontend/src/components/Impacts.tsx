import empowerment from "../assets/lapaataa_youth_empowerment_icon.png";
import health from "../assets/lapaataa_health_clinics_icon.png";
import roads from "../assets/lapaataa_roads_icon.png";
import scholarships from "../assets/lapaataa_scholarships_icon.png";
import heroImage from "../assets/lapataahero.jpeg";

export default function Impacts() {
  return (
    <>
      <div className="p-5 w-full bg-gray-200 lg:px-30 relative">
        <div className="w-full text-5xl p-10 font-sans text-center font-bold text-pink-900">
          Impacts & Awards
        </div>
        <span className="text-pink-900 font-bold text-xl text-center">
          Impacts Dashboard
        </span>
        <div className="divid-line mb-2 bg-gray-300 w-full"></div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="relative  rounded-br-4xl rounded-tl-4xl bg-gray-50 p-4 flex flex-col shadow-2xl gap-y-1 rounded-sm">
            <span className="text-pink-900 font-bold text-3xl">5000+</span>
            <span className="text-gray-800 text-sm">Youths Empowered</span>
            <div className="w-full">
              {/* Wave Background */}

              <svg
                className="absolute opacity-10 rounded-br-sm bottom-0 left-0 w-full"
                viewBox="0 0 200 260"
              >
                <path
                  fill="#521400" // light blue
                  d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256V320H0Z"
                ></path>
              </svg>
              <svg
                className="absolute opacity-20 rounded-br-sm bottom-0 left-0 w-full"
                viewBox="0 0 400 260"
              >
                <path
                  fill="#521400" // light blue
                  d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256V320H0Z"
                ></path>
              </svg>
              <img
                src={empowerment}
                className="float-end z-40 size-20"
                alt="Empowerment"
              />
            </div>
          </div>
          <div className="relative rounded-br-4xl rounded-tl-4xl bg-gray-50 p-4 flex flex-col rounded-sm shadow-xl gap-y-1">
            <span className="text-blue-800 font-bold text-3xl">20km+</span>
            <span className="text-gray-800 text-sm">Roads Constructed</span>
            <div className="w-full">
              {/* Wave Background */}

              <svg
                className="absolute rounded-b-sm  opacity-10 bottom-0 left-0 w-full"
                viewBox="0 0 200 260"
              >
                <path
                  fill="#003ef9" // light blue
                  d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256V320H0Z"
                ></path>
              </svg>
              <svg
                className="absolute opacity-20 rounded-b-sm  bottom-0 left-0 w-full"
                viewBox="0 0 400 260"
              >
                <path
                  fill="#003ef9" // light blue
                  d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256V320H0Z"
                ></path>
              </svg>
              <img
                src={roads}
                className="float-end z-40 size-20"
                alt="Empowerment"
              />
            </div>
          </div>
          <div className="relative rounded-br-4xl rounded-tl-4xl bg-gray-50 p-4 flex flex-col rounded-sm shadow-xl gap-y-1">
            <span className="text-pink-900 font-bold text-3xl">500+</span>
            <span className="text-gray-800 text-sm">Scholarships Awarded</span>
            <div className="w-full">
              {/* Wave Background */}

              <svg
                className="absolute opacity-10 rounded-b-sm  bottom-0 left-0 w-full"
                viewBox="0 0 200 260"
              >
                <path
                  fill="#521400" // light blue
                  d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256V320H0Z"
                ></path>
              </svg>
              <svg
                className="absolute opacity-20 rounded-b-sm  bottom-0 left-0 w-full"
                viewBox="0 0 400 260"
              >
                <path
                  fill="#521400" // light blue
                  d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256V320H0Z"
                ></path>
              </svg>
              <img
                src={scholarships}
                className="float-end z-40 size-20"
                alt="Empowerment"
              />
            </div>
          </div>
          <div className="relative  rounded-br-4xl rounded-tl-4xl bg-gray-50 p-4 flex rounded-sm flex-col shadow-xl gap-y-1">
            <span className="text-blue-800 font-bold text-3xl">10+</span>
            <span className="text-gray-800 text-sm">
              Health Clinics Supported
            </span>
            <div className="w-full">
              {/* Wave Background */}

              <svg
                className="absolute opacity-10 rounded-b-sm  bottom-0 left-0 w-full"
                viewBox="0 0 200 260"
              >
                <path
                  fill="#003ef9" // light blue
                  d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256V320H0Z"
                ></path>
              </svg>
              <svg
                className="absolute opacity-20 rounded-b-sm  bottom-0 left-0 w-full"
                viewBox="0 0 400 260"
              >
                <path
                  fill="#003ef9" // light blue
                  d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256V320H0Z"
                ></path>
              </svg>
              <img
                src={health}
                className="float-end z-40 size-20"
                alt="Empowerment"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-30 bg-gray-50 ">
        <div className="w-full flex justify-between items-center">
          <div className="divid-line bg-gray-300 w-full"></div>
          <div className="w-full text-xl font-sans text-center font-bold text-pink-900">
            Awards & Recognition
          </div>
          <div className="divid-line mb-2 bg-gray-300 w-full"></div>
        </div>
        <div className="mx-auto w-full py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center pb-5 gap-4">
          <div className="shadow-xl rounded-sm bg-gray-50 w-full ">
            <div>
              <img
                className="size-100 z-0 shrink-0 rounded-t-sm w-full h-40 object-cover brightness-90 dark:brightness-50"
                src={heroImage}
                alt="icon"
              ></img>
            </div>
            {/* Overlay */}
            <div className="w-full items-end px-5">
              <div className="w-full">
                <div className="w-full items-center text-white">
                  <span className="font-bold  my-2 text-pink-900">
                    Elder of the Order of the Burning Spear – EBS{" "}
                  </span>

                  <div className="divid-line my-2 bg-gray-300 w-full"></div>
                </div>
              </div>
            </div>

            <div className="px-5 text-gray-900">
              Empowering local entrepreneurs to thrive.
            </div>
            <div className="w-full">
              <span className="text-blue-800 float-right pb-5 px-5">
                Read More
              </span>
            </div>
          </div>
          <div className="shadow-xl rounded-sm bg-gray-50 w-full ">
            <div>
              <img
                className="size-100 z-0 shrink-0 rounded-t-sm w-full h-40 object-cover brightness-90 dark:brightness-50"
                src={heroImage}
                alt="icon"
              ></img>
            </div>
            {/* Overlay */}
            <div className="w-full items-end px-5">
              <div className="w-full">
                <div className="w-full items-center text-white">
                  <span className="font-bold  my-2 text-blue-800">
                    Elder of the Order of the Burning Spear – EBS{" "}
                  </span>

                  <div className="divid-line my-2 bg-gray-300 w-full"></div>
                </div>
              </div>
            </div>

            <div className="px-5 text-gray-900">
              Empowering local entrepreneurs to thrive.
            </div>
            <div className="w-full">
              <span className="text-blue-800 float-right pb-5 px-5">
                Read More
              </span>
            </div>
          </div>
          <div className="shadow-xl rounded-sm bg-gray-50 w-full ">
            <div>
              <img
                className="size-100 z-0 shrink-0 rounded-t-sm w-full h-40 object-cover brightness-90 dark:brightness-50"
                src={heroImage}
                alt="icon"
              ></img>
            </div>
            {/* Overlay */}
            <div className="w-full items-end px-5">
              <div className="w-full">
                <div className="w-full items-center text-white">
                  <span className="font-bold  my-2 text-pink-900">
                    Elder of the Order of the Burning Spear – EBS{" "}
                  </span>

                  <div className="divid-line my-2 bg-gray-300 w-full"></div>
                </div>
              </div>
            </div>

            <div className="px-5 text-gray-900">
              Empowering local entrepreneurs to thrive.
            </div>
            <div className="w-full">
              <span className="text-blue-800 float-right pb-5 px-5">
                Read More
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

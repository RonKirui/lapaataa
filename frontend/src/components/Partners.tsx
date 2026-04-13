import heroImage from "../assets/lapataahero.jpeg";
import kcbimage from "../assets/kcb.jpg";
import uwezoimage from "../assets/uwezo.jpg";
import bometuni from "../assets/bometuni.jpg";
import everestimage from "../assets/everestglob.jpg";
import imarishaimge from "../assets/imarisha.png";
import kimbilioimge from "../assets/kimbiliodaima.jpg";
import kipchimchimimg from "../assets/kipchimchim.png";
import minilaborimg from "../assets/minilabour.png";
import minioald from "../assets/ministryoald.png";
import mobilehub from "../assets/mobilehub.jpg";
import neaimg from "../assets/nea.jpg";
import safaricom from "../assets/safaricomfo.png";
import youthaffairs from "../assets/youthaffairs.png";
import youthenter from "../assets/youthenter.png";
import minoh from "../assets/ministryoh.png";

export default function Partners() {
  return (
    <div className="w-full">
      <div className="p-5 lg:p-10 w-full">
        {/* Pink-900 Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent"></div>
        <div className=" relative">
          {" "}
          <img
            className="w-full rounded-2xl h-20 bject-cover brightness-100 shrink-0"
            src={heroImage}
          />
          {/* Pink-900 Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t rounded-2xl from-pink-950/95 to-transparent"></div>
          <div className="w-full text-3xl absolute -mt-28 p-15 font-sans text-center font-bold text-gray-50">
            Our Partners
          </div>
        </div>
        <div>
          <div className="border-gray-400 w-full grid grid-cols-3 lg:grid-cols-5 border-r-2xl gap-7 p-10 py-20 ">
            <img className="w-full h-20 rounded-xl" src={kcbimage} />
            <img className="w-full h-20 rounded-xl" src={uwezoimage} />
            <img className="w-full h-20 rounded-xl" src={safaricom} />
            <img className="w-full h-20 rounded-xl" src={youthaffairs} />
            <img className="w-full h-20 rounded-xl" src={minilaborimg} />
            <img className="w-full h-20 rounded-xl" src={imarishaimge} />
            <img className="w-full h-20 rounded-xl" src={kimbilioimge} />
            <img className="w-full h-20 rounded-xl" src={kipchimchimimg} />
            <img className="w-full h-20 rounded-xl" src={everestimage} />
            <img className="w-full h-20 rounded-xl" src={minioald} />
            <img className="w-full h-20 rounded-xl" src={mobilehub} />
            <img className="w-full h-20 rounded-xl" src={neaimg} />
            <img className="w-full h-20 rounded-xl" src={youthenter} />
            <img className="w-full h-20 rounded-xl" src={bometuni} />
            <img className="w-full h-20 rounded-xl" src={minoh} />
          </div>
        </div>
        <div className="bg-pink-900 p-4 py-10 lg:px-30 text-center flex flex-col gap-4 items-center">
          <div className="w-full flex justify-between items-center">
            <div className="divid-line bg-pink-300 w-full"></div>
            <div className="w-full text-xl whitespace-nowrap px-4 font-sans text-center font-semibold text-gray-50">
              Partner With Us
            </div>
            <div className="divid-line mb-2 bg-gray-300 w-full"></div>
          </div>
          Join us in making a difference. Let's work together for a better
          tommorow.
          <div className="p-2 border border-orange-400 w-fit px-10">
            Get In Touch
          </div>
        </div>
      </div>
    </div>
  );
}

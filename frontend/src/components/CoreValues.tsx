import integrityIcon from "../assets/lapaataa_integrity_icon.png";
import empowermentIcon from "../assets/lapaataa_empowerment_icon.png";
import sustainabilyIcon from "../assets/lapaataa_sustainability_icon.png";
import collaborationIcon from "../assets/lapaataa_collaboration_icon.png";
import excellenceIcon from "../assets/lapaataa_excellence_icon.png";
export default function CoreValues() {
  return (
    <div className="px-5 py-20 w-full lg:px-30">
      <div className="w-full text-5xl pb-15 font-sans text-center font-bold text-pink-900">
        Our Core Values
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-2">
        <div className="card rounded-br-4xl rounded-tl-4xl flex flex-col shadow-2xl gap-y-2">
          <img src={integrityIcon} alt="Integrity" />
          <span className="text-pink-900 font-bold text-2xl text-center">
            Integrity
          </span>
          <div className="divid-line bg-gray-300 w-full"></div>
          <span className="text-gray-800 text-center">
            We uphold honesty, accountability, and transparency in all our
            actions.
          </span>
        </div>
        <div className="card rounded-br-4xl rounded-tl-4xl flex flex-col items-center shadow-2xl gap-2">
          <img src={empowermentIcon} alt="Integrity" />
          <span className="text-pink-900 font-bold text-2xl">Empowerment</span>
          <div className="divid-line bg-gray-300 w-full"></div>
          <span className="text-gray-800 text-center">
            We enable individuals and communities to take charge of their own
            development.
          </span>
        </div>
        <div className="card rounded-br-4xl rounded-tl-4xl flex flex-col items-center shadow-2xl gap-2">
          <img src={sustainabilyIcon} alt="Integrity" />
          <span className="text-pink-900 font-bold text-2xl">
            Sustainability
          </span>
          <div className="divid-line bg-gray-300 w-full"></div>
          <span className="text-gray-800 text-center">
            We design programs that create long-lasting impact for future
            generations.
          </span>
        </div>
        <div className="card rounded-br-4xl rounded-tl-4xl flex flex-col items-center shadow-2xl gap-2">
          <img src={collaborationIcon} alt="Integrity" />
          <span className="text-pink-900 font-bold text-2xl">
            Collaboration
          </span>
          <div className="divid-line bg-gray-300 w-full"></div>
          <span className="text-gray-800 text-center">
            We build partnerships and foster inclusivity for greater collective
            impact.
          </span>
        </div>
        <div className="card rounded-br-4xl rounded-tl-4xl flex flex-col items-center shadow-2xl gap-2">
          <img src={excellenceIcon} alt="Integrity" />
          <span className="text-pink-900 font-bold text-2xl">Excellence</span>
          <div className="divid-line bg-gray-300 w-full"></div>
          <span className="text-gray-800 text-center">
            We strive for quality, innovation, and effectiveness in all we do.
          </span>
        </div>
      </div>
    </div>
  );
}

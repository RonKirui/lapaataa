import integrityIcon from "../assets/lapaataa_integrity_icon.png";
import empowermentIcon from "../assets/lapaataa_empowerment_icon.png";
import sustainabilityIcon from "../assets/lapaataa_sustainability_icon.png";
import collaborationIcon from "../assets/lapaataa_collaboration_icon.png";
import excellenceIcon from "../assets/lapaataa_excellence_icon.png";
      
import React, { useState, useEffect } from 'react';

const CoreValuesSlider = () => {
  const values = [
    {
      title: "Integrity",
      description: "We uphold honesty, accountability, and transparency in all our actions.",
      icon: integrityIcon
    },
    {
      title: "Empowerment",
      description: "We enable individuals and communities to take charge of their own development.",
      icon: empowermentIcon
    },
    {
      title: "Sustainability",
      description: "We design programs that create long-lasting impact for future generations.",
      icon: sustainabilityIcon
    },
    {
      title: "Collaboration",
      description: "We build partnerships and foster inclusivity for greater collective impact.",
      icon: collaborationIcon
    },
    {
      title: "Excellence",
      description: "We strive for quality, innovation, and effectiveness in all we do.",
      icon: excellenceIcon
    }
  ];

  // Duplicate items for seamless infinite loop
  const displayValues = [...values, ...values.slice(0, 3)];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === values.length) {
          return 1; // Seamless reset to the second set of items
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <div className="w-full text-gray-900 overflow-hidden py-8">
      <p className="mb-2 w-full text-center font-semibold uppercase tracking-widest text-green-800">
        Our Core Values
      </p>
      <p className="mb-8 w-full text-center text-sm text-black leading-[0.95]">
        Guiding Principles for Lasting Impact
      </p>
      {/* Slider Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ 
          transform: `translateX(-${(currentIndex % values.length) * 33.333}%)`,
        }}
      >
        {displayValues.map((value, index) => (
          <div key={index} className="flex-none w-1/3 px-2">
            <div className={`flex gap-5 px-5 items-center`}>
              <img
                className="size-20 p-1 border border-green-800 rounded-full object-contain"
                src={value.icon}
                alt={value.title}
              />
              <div className="w-full">
                <h2 className="text-xl text-gray-900 font-bold leading-[0.95]">
                  {value.title}
                </h2>
                <p className="text-sm py-1 text-gray-500">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {values.map((_, index) => (
          <div 
            key={index} 
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              (currentIndex % values.length) === index ? 'bg-green-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreValuesSlider;

    
      {/*
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
}*/}

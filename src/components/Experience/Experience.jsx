import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My professional experience as a MERN Stack Developer Intern.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12 md:space-y-16 2xl:space-y-20">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex justify-center">
            <div
              className="w-full 
                               sm:max-w-2xl 
                               2xl:max-w-4xl
                               p-5 sm:p-8 2xl:p-10
                               rounded-2xl shadow-2xl border border-white 
                               bg-gray-900 backdrop-blur-md 
                               shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
                               transition-transform duration-300 hover:scale-105"
            >
              {/* Logo + Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">

                <div className="w-14 h-14 sm:w-16 sm:h-16 2xl:w-20 2xl:h-20 
                                      bg-white rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                {experience.desc}
              </p>

              <div className="mt-6">
                <h5 className="font-medium text-white tracking-wide">Skills</h5>
                <div className="flex flex-wrap gap-2 mt-3">
                  {experience.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#8245ec] text-white px-4 py-1 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

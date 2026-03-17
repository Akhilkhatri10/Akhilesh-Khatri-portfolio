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
      <div className="flex justify-center">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="w-full sm:max-w-2xl p-6 sm:p-10 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {experience.role}
                </h3>
                <h4 className="text-gray-300">
                  {experience.company}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {experience.date}
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-400">
              {experience.desc}
            </p>

            <div className="mt-6">
              <h5 className="font-medium text-white">Skills:</h5>
              <div className="flex flex-wrap gap-2 mt-3">
                {experience.skills.map((skill, index) => (
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
        ))}
      </div>
    </section>
  );
};

export default Experience;

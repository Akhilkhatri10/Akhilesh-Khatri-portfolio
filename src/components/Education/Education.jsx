// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div> */}

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`relative flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div> */}

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-16 h-16 bg-white rounded-xl overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 md:py-24 2xl:py-32 
                 px-[6vw] md:px-[7vw] lg:px-[16vw] 2xl:px-[20vw] 
                 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16 2xl:mb-20">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base md:text-lg 2xl:text-xl font-semibold max-w-3xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Education Entries */}
      <div className="space-y-12 md:space-y-16 2xl:space-y-20">
        {education.map((edu) => (
          <div key={edu.id} className="flex justify-center">
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
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold text-sm sm:text-base">
                Grade: {edu.grade}
              </p>

              <p className="mt-4 text-gray-400 text-sm sm:text-base 2xl:text-lg leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

import React from "react";
import styles from "../style";
import { skills, experiences } from "../constants"; // Define both in constants.js
import Image from 'next/image';


const Experience = () => {
  return (
    <section
      id="experience"
      className={`flex flex-col md:flex-row ${styles.paddingY} ${styles.sectionCenter} ${styles.experienceSection}`}
    >
      {/* Skills List */}
      <div className={`flex flex-col w-full md:w-1/2 items-center md:items-start xl:px-0 sm:px-16 px-6`}>
        {/* Section Heading */}
        <div className="py-2 px-6 bg-gradient-to-r from-teal-600 via-emerald-700 to-blue-600 rounded-[12px] mb-10 shadow-lg">
          <h2 className={`${styles.heading} text-white`}>
            <span className="text-white">Experience</span>
          </h2>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-6 w-full">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={200} height={200}
                className="w-10 h-10 bg-gray-800 p-2 rounded-full shadow-lg"
              />
              <div>
                <h4 className="text-white font-poppins font-semibold text-[18px]">{skill.name}</h4>
                <p className="text-gray-300 font-poppins text-[14px]">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center mt-10 md:mt-0 px-6">
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${styles.experienceCard} hover:shadow-xl transform hover:scale-105`}
            >
              <h3 className="text-white text-[20px] font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-300 text-[16px] mb-4">{exp.company}</p>
              <p className="text-gray-400 text-[14px]">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

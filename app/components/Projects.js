import React from "react";
import styles, { layout } from "../style";
import { projects } from "../constants";
import Image from 'next/image';


const Projects = () => {
  return (
    <section
      id="projects"
      className={`w-full min-h-screen ${styles.projectsSection}`}
    >
      <div className={`flex flex-col items-center w-full ${styles.sectionCenter}`}>
        {/* Section Heading */}
        <div className="py-3 px-6 bg-gradient-to-r from-teal-700 via-emerald-800 to-blue-700 rounded-[12px] mb-8 shadow-lg">
          <h2 className={`${styles.heading} text-white`}>
            <span className="text-white">My</span>{" "}
            <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className={`${styles.projectsGrid}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} hover:shadow-xl transform hover:scale-105`}
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={`Project ${index + 1}`}
                width={100} height={100}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />

              {/* Project Content */}
              <h3 className="text-white text-[20px] font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 text-[16px] mb-6">{project.description}</p>

              {/* Buttons */}
              <div className="flex justify-between">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projectButton} bg-teal-600 hover:bg-teal-700`}
                >
                  Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projectButton} bg-blue-600 hover:bg-blue-700`}
                >
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

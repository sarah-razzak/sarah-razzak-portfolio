import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const SectionCard = ({ children }) => {
  return (
    <motion.div
      className="bg-gradient-transparent p-8 rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="project-card-container">
      <div className="p-5 rounded-2xl sm:w-[360px] w-full bg-gradient-lighter">
        <div className="relative w-full h-[230px]">
          <div className="image-container" style={{ height: "230px" }}>
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl project-image"
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary font-bold text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="project-container-padding"> {/* Add a container with padding */}
      <SectionCard>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>My Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
          >
In addition to my professional experience, I've dedicated time to projects that reflect my passion for software and hardware applications. These projects showcase my ability to innovate, problem-solve, and collaborate effectively. Below are some highlights:          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");

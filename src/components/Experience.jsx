import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { loc, link } from "../assets";

const Experience = () => {
    // State variables for toggling experiences
    const [activeTabIndex, setActiveTabIndex] = useState(null);

    // Toggle function for the experience
    const toggleExperience = (index) => {
        setActiveTabIndex(activeTabIndex === index ? null : index);
    };

    return (
        <div className="experience-container">
            <motion.div variants={textVariant()}>
                {/* Header */}
                <h2 className={styles.sectionHeadText}>
                    Work &nbsp; Experience.
                </h2>
                <p>&nbsp;</p>

                {/* Experience containers */}
                <div className="mt-19 flex flex-col">
                    {experiences &&
                        experiences.map((experience, index) => (
                            <motion.div
                                key={`experience-${index}`}
                                variants={fadeIn(
                                    "up",
                                    "spring",
                                    index * 0.5,
                                    0.5
                                )}
                                transition={{ delay: index * 0.5 }}
                            >
                                <div className="mb-4">
                                    {/* Button to toggle experience */}
                                    <button
                                        className="flex items-center justify-between w-full p-4 bg-gradient rounded-md relative"
                                        onClick={() =>
                                            toggleExperience(index)
                                        }
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <span className="text-white text-lg font-bold">
                                                {experience.title}
                                            </span>
                                            <span className="text-white text-sm ml-2 mr-4">
                                                {experience.date}
                                            </span>
                                        </div>
                                        <span className="text-primary text-[22px]">
                                            {activeTabIndex === index
                                                ? "-"
                                                : "+"}
                                        </span>
                                    </button>
                                    {/* Details of experience (if activeTabIndex matches index) */}
                                    {activeTabIndex === index && (
                                        <div className="bg-gradient-transparent text-white p-4 rounded-md w-full">
                                            <p className="font-semibold mb-2">
                                                <img
                                                    src={loc}
                                                    alt="Location Icon"
                                                    className="inline-block w-4 h-4 mr-1"
                                                />
                                                {experience.location}
                                                <span className="ml-2">
                                                    &nbsp; &nbsp; &nbsp;
                                                </span>
                                                <a
                                                    href={
                                                        experience.company_website
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src={link}
                                                        alt="Link Icon"
                                                        className="inline-block w-4 h-4 mr-1"
                                                    />
                                                    {"Company Website"}
                                                </a>
                                            </p>
                                            <p>&nbsp;</p>
                                            <div className="flex items-center">
                                                <ul className="list-disc ml-4 space-y-2">
                                                    {experience.points.map(
                                                        (point, idx) => (
                                                            <li
                                                                key={`experience-point-${index}-${idx}`}
                                                                className="text-white text-sm"
                                                            >
                                                                {point}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                                <div className="ml-auto">
                                                    <div>
                                                        <img
                                                            src={
                                                                experience.icon
                                                            }
                                                            alt="Company Icon"
                                                            className="inline-block w-13 h-13 mt-1"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Tags section */}
                                            <p>&nbsp;</p>
                                            <div className="mt-4">
                                                <div className="flex flex-wrap">
                                                    {experience.tags.map(
                                                        (tag, tagIndex) => (
                                                            <span
                                                                key={`tag-${index}-${tagIndex}`}
                                                                className="bg-secondary text-primary font-bold text-xs px-3 py-2 rounded-full mr-2 mb-2"
                                                            >
                                                                {tag}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Experience, "work");

import React, { useState } from 'react';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion'; // Remove the fadeIn import

const Tech = () => {
  const [hoveredCircle, setHoveredCircle] = useState(null);

  // Function to handle mouse enter on a circle
  const handleMouseEnter = (index) => {
    setHoveredCircle(index);
  };

  // Function to handle mouse leave from a circle
  const handleMouseLeave = () => {
    setHoveredCircle(null);
  };

  // Function to handle mouse move over a circle
  const handleMouseMove = (e, index) => {
    // Move the circle slightly away from the mouse
    const circle = e.currentTarget;
    const rect = circle.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    circle.style.transform = `translate(${offsetX / 10}px, ${offsetY / 10}px)`;
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>

      <motion.div initial="hidden" animate="visible" className="flex flex-wrap justify-center">
      {technologies.map((tech, index) => {
  // Determine the color based on the index
  const colorClass = index % 2 === 0 ? 'blue' : 'purple';

  return (
    <div key={index} className="circle-name-container">
      <motion.div
        className={`tech-circle ${colorClass} ${hoveredCircle === index ? 'hovered' : ''} mb-4`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={(e) => handleMouseMove(e, index)}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: index * 0.2 } }
        }}
      >
        <img src={tech.icon} alt={tech.name} className="icon" />
      </motion.div>
      {hoveredCircle === index && (
        <div className="tech-name">{tech.name}</div>
      )}
    </div>
  );
})}


      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "");

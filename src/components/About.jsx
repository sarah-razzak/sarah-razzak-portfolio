import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full violet-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='metallic-card rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-primary text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

// Define the AboutContainer component
const AboutContainer = ({ children }) => {
  return <div className="about-container">{children}</div>;
}

const About = () => {
  return (
    <AboutContainer> {/* Wrap the content of the About component */}
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About &nbsp; Me.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3x leading'>
        I'm a mechatronics engineering student with a deep love for both software and hardware. From coding solutions to crafting circuits, I'm always exploring how technology can shape our world. 
        Beyond the books, I'm an adventurer fascinated by robotics, automation, and AI. I believe in the power of innovation to change lives and am passionate about making a meaningful impact in the world, especially in the context of sustainability.            
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </AboutContainer>
  )
}

export default SectionWrapper(About, "about")

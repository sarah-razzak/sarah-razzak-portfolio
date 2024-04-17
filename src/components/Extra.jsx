import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { extra } from '../constants'; // Adjust the import path to your file
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { click } from "../assets";

const ExtraCard = ({ index, title, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleCardFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className={`w-[250px] h-[350px] bg-gradient-lighter p-[1px] rounded-[20px] shadow-card relative`}
        onClick={handleCardFlip}
      >
        <div
          className={`bg-gradient rounded-[20px] p-5 w-[250px] h-[350px] flex justify-evenly items-center flex-col ${
            isFlipped ? 'bg-transparent' : ''
          }`}
        >
          {isFlipped ? (
            Array.isArray(description) ? (
                <ul className="text-[white] text-stroke text-[15px] font-bold text-center">
                    {description.map((item, idx) => (
                        <li key={idx} className="mb-6">{item}</li> 
                    ))}
                    </ul>
              
            ) : (
              <h3 className='text-primary text-sm font-bold text-center'>{description}</h3>
            )
          ) : (
            <h3 className='text-primary text-lg font-bold text-center'>{title}</h3>
          )}
          <img src={click} alt="click" className="click-icon" style={{ width: '40px', height: '40px' }} />
        </div>
      </motion.div>
    );
  };

// Define the ExtraContainer component
const ExtraContainer = ({ children }) => {
  return <div className='extra-container'>{children}</div>;
};

const ExtraSection = () => {
  return (
    <ExtraContainer>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Activities / Volunteer.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3x leading'>
        As a mechatronics engineering student, I actively engage in volunteer activities within technical clubs, sustainability initiatives, and community engagement efforts. Through my involvement, I leverage my engineering skills to contribute to projects aimed at addressing environmental challenges and fostering sustainable practices. I also dedicate my time to community engagement activities, utilizing my technical expertise to make a positive impact and create meaningful change within local communities.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {extra.map((item, index) => (
          <ExtraCard key={index} index={index} title={item.title} description={item.description} />
        ))}
      </div>
    </ExtraContainer>
  );
};

export default SectionWrapper(ExtraSection, 'activities');

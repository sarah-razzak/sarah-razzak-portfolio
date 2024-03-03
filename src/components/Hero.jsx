import { logo, rotate } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen overflow-hidden mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-22 h-20 object-contain mr-4 mt-[-80px]" /> {/* Adjust the size and margin here */}
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm <span className='violet-gradient text-[#f5f0f3]' style={{ textShadow: '1px 1px 2px #000000' }}>Sarah</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-100`}>
              I'm a Mechatronics <br className='sm:block hidden' />
              Engineering Student
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/8">
        <img src={rotate} alt="rotate" style={{ width: "150px", height: "150px" }} />
      </div>

      <ComputersCanvas />

      <div className='absolute xs:right-4 right-8 xs:bottom-4 bottom-8'>
        <a href='#about'>
          <div className='relative w-[80px] h-[80px]'>
            <div className='absolute w-full h-full rounded-full border-4 border-secondary flex justify-center items-center'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-secondary transform rotate-90"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

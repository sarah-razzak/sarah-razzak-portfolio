import React from "react";
import { styles } from "../styles";
import { resume } from "../assets";

const ResumeCard = () => {
  const handleViewPDF = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className="flex-[0.75] bg-blue-900 p-8 rounded-2xl">
      <p className={styles.sectionSubText}>Download my Resume</p>
      <h3 className={styles.sectionHeadText}>Resume.</h3>

      <div className="mt-12 flex flex-col gap-8">
        {/* Add any content related to your resume */}
        <button
          onClick={handleViewPDF}
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          View PDF
        </button>

        {/* LinkedIn Profile Button */}
        <button
          onClick={() => window.open("https://www.linkedin.com/in/sarah-alabdulrazzak/", "_blank")}
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          LinkedIn Profile
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;

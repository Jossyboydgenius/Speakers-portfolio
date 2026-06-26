import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 font-bodyFont"
    >
      {/* Higher Education */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">2019 - 2023</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Higher Education</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="Bachelor's in Communication Studies"
            subTitle="University of Media, Arts & Communication - (2019 - 2023)"
            result="Journalism"
            des="Specialized in journalism with a focus on advocacy and behavioral change communication towards sustainable development."
          />
        </div>
      </div>
      {/* Secondary Education */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">2015 - 2018</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Secondary Education</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="General Arts"
            subTitle="Edinaman Senior High School - (2015 - 2018)"
            result="WASSCE"
            des="Core Electives: Government, Geography, Economics, and Elective Mathematics."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;

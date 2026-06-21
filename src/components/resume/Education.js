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
      {/* Education */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">2019 - 2023</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="Bachelor's in Communication Studies"
            subTitle="University of Media, Arts & Communication - (2019 - 2023)"
            result="Ghana"
            des="Specialized in journalism with a focus on advocacy and behavioral change communication towards sustainable development."
          />
        </div>
      </div>
      {/* Job Experience */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">2018 - Present</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="Founder & Team Lead"
            subTitle="GOOD Foundation - (2019 - Present)"
            result="Ghana"
            des="Directed mental health initiatives and digital media campaigns, collaborating with institutions like the University of South Florida."
          />
          <ResumeCard
            title="Youth Advocate & Program Host"
            subTitle="Curious Minds Ghana - (2019 - Present)"
            result="Ghana"
            des="Led youth engagement initiatives on radio and TV, promoting education and awareness on issues affecting young people."
          />
          <ResumeCard
            title="Communications and Marketing Executive"
            subTitle="Africa Education Gateway (June 2024 – August 2024)"
            result="Ghana"
            des="Copywriting, organizational communication, email management and social media strategizing."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;

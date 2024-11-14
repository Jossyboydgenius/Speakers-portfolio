import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Speak Your Mind Challenge Winner"
            subTitle="MasterCard Foundation Baobab Contest (2022)"
            result="Winner"
            des="Won the challenge, showcasing advocacy skills and communication strategies for impactful youth engagement."
          />
          <ResumeCard
            title="Nominee for Student Poet & Makeup Artist of the Year"
            subTitle="Eminence Awards (2021)"
            result="Nominee"
            des="Recognized for contributions to poetry and makeup artistry, underscoring creative achievements and community engagement."
          />
          <ResumeCard
            title="Miss SDGs Pageantry Winner"
            subTitle="MCF Scholars at GIJ (2020)"
            result="Winner"
            des="Awarded for excellence in promoting the Sustainable Development Goals, with a focus on youth leadership and activism."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Professional Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold">Additional Recognitions</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="First Runner Up"
            subTitle="Confident Public Speakers Competition (2012)"
            result="Runner-Up"
            des="Achieved runner-up status in a public speaking competition, demonstrating strong communication and presentation skills."
          />
          <ResumeCard
            title="Publications on Environmental and Gender Issues"
            subTitle="Various Platforms (2024)"
            result="Published"
            des="Authored articles like 'A Free Press for Environmental Justice' and 'Investing in Women,' featured on platforms like Curious Minds Ghana."
          />
          <ResumeCard
            title="Advocacy and Mental Health Speaker"
            subTitle="Curious Minds Annual General Meeting (2023)"
            result="Speaker"
            des="Presented on advocacy and mental health at a national conference, raising awareness for mental health issues among youth."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;

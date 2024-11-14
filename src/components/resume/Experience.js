import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Founder & Team Lead"
            subTitle="Get Out Of Depression (GOOD) Foundation - (2019 - Present)"
            result="Ghana"
            des="Led mental health projects, impacting over 6000 individuals through initiatives such as the Art Therapy Project, partnership development, and team management."
          />
          <ResumeCard
            title="Host & Children/Youth Advocate"
            subTitle="GBC/Curious Minds Ghana - (2019 - Present)"
            result="Ghana"
            des="Hosted radio and TV programs for youth advocacy, with successful project management and digital media campaigns such as World Malaria Day."
          />
          <ResumeCard
            title="Learner Guide"
            subTitle="CAMFED Ghana - (2021 - 2023)"
            result="Ghana"
            des="Facilitated self-development and life skills sessions, focusing on empowering junior high school students and providing support against early marriage risks."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Trainer & Mentor"
            subTitle="Ghana Service Learning, University of South Florida - (2022 - Present)"
            result="Ghana"
            des="Mentored students in various disciplines and empowered girls through initiatives that promote support networks and personal development."
          />
          <ResumeCard
            title="Mentor"
            subTitle="Women In STEM and TVET Project - (2023 - Present)"
            result="Ghana"
            des="Provided mentorship for young women in STEM fields, focusing on skill development and leadership."
          />
          <ResumeCard
            title="National Communications Director"
            subTitle="SDG Ambassadors Ghana - (2022)"
            result="Ghana"
            des="Directed communications for national youth initiatives, promoting sustainable development goals through strategic media outreach."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

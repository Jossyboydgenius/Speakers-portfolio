import React from "react";
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Volunteering = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 font-bodyFont"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">2020 - Present</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Recent Volunteering</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="Host/Communications Associate"
            subTitle="Paahibu Space"
            result="Ghana"
            des="June 2024 - Present"
          />
          <ResumeCard
            title="Event Host/ Graphic Designer"
            subTitle="On Our Watch Global/ Diasporan Business Community"
            result="Ghana"
            des="Managed event hosting and graphic design responsibilities"
          />
          <ResumeCard
            title="Member"
            subTitle="Ghana CSO Platform on the SDGs"
            result="Ghana"
            des="2023 - Present"
          />
          <ResumeCard
            title="Consultant"
            subTitle="Green Care Africa"
            result="Ghana"
            des="2023 - Present"
          />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">2020 - 2023</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Volunteering Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="Member"
            subTitle="Amnesty International"
            result="Ghana"
            des="2020 - Present"
          />
          <ResumeCard
            title="Youth Advisory Board Member"
            subTitle="GH Alliance"
            result="Ghana"
            des="2023"
          />
          <ResumeCard
            title="Social Media Campaign Team member"
            subTitle="Abantu For Development"
            result="Ghana"
            des="2023"
          />
          <ResumeCard
            title="National Communications Director"
            subTitle="SDG Ambassadors Ghana"
            result="Ghana"
            des="2022"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Volunteering; 

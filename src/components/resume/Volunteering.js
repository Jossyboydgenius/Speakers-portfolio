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
      {/* Left Column: Volunteering Roles */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">2018 - Present</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Volunteering Roles</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="Learner Guide"
            subTitle="CAMFED Ghana - (2021 - 2023)"
            result="Facilitator"
            des="Facilitated self-development, life skills, and sexual and reproductive health sessions for over 100 Junior High School students at Nima. Led interventions to protect at-risk girls from early marriages, and established a Girls' Corner."
          />
          <ResumeCard
            title="Digital Campaign Team Member"
            subTitle="Abantu for Development - (2023)"
            result="Creative"
            des="Designed over 15 flyers for the SWARELG digital campaign to promote women's representation in local governance. Collaborated on hashtags, scripts, and content copy reviews."
          />
          <ResumeCard
            title="English/Class Teacher"
            subTitle="FEDEP International School - (2018 - 2019)"
            result="Educator"
            des="Taught English composition, comprehension, and grammar to over 150 students. Provided specialized tutoring to special needs children, and mentored the Girls' Club, increasing membership by 60%."
          />
        </div>
      </div>

      {/* Right Column: Affiliations & Memberships */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">Professional Connections</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Affiliations & Memberships</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="Member"
            subTitle="MasterCard Alumni / CAMFED Association - (2018 - Present)"
            result="Active"
            des="Engaging in networking and peer mentorship with alumni, driving collective development initiatives across Ghana."
          />
          <ResumeCard
            title="Champion"
            subTitle="SEND GHANA - (2025 - Present)"
            result="Advocate"
            des="Promoting policy research, public accountability, and community empowerment campaigns across Ghana."
          />
          <ResumeCard
            title="Member"
            subTitle="Child Online Protection Community - (2023 - Present)"
            result="Safety"
            des="Advocating for digital safety, child protection online, and policy frameworks to secure children's online spaces."
          />
          <ResumeCard
            title="Consultant"
            subTitle="International Humanity Chamber of Commerce - (2023 - 2024)"
            result="Expertise"
            des="Provided communications advisory and content alignment for community-driven economic development projects."
          />
          <ResumeCard
            title="Member"
            subTitle="Amnesty International - (2022 - Present)"
            result="Human Rights"
            des="Supporting global human rights campaigns, local awareness creation, and youth involvement in human rights advocacy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Volunteering; 

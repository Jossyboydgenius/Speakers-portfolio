import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 font-bodyFont"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">2012 - 2024</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
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
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">Workshops & Training</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Professional Development</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="Voices for Change (V4C) Human Rights Reporting"
            subTitle="CJID & Institute for War and Peace Reporting - (2024)"
            result="Certified"
            des="Specialized reporting training focused on human rights advocacy, public policy, and ethical journalism."
          />
          <ResumeCard
            title="Intercontinental Socio-Economic Rights Workshop"
            subTitle="African Commission on Human & Peoples' Rights (ACHPR) - (2025)"
            result="Participant"
            des="Promoting the socio-economic rights of women, with a focus on natural resource management and extractive industries."
          />
          <ResumeCard
            title="Countering Mis/disinformation & Propaganda"
            subTitle="Media Foundation for West Africa - (2024)"
            result="Specialist"
            des="Training focused on countering election-year misinformation and propaganda narratives in Ghana's democratic processes."
          />
          <ResumeCard
            title="AI For Her Future Hackathon"
            subTitle="UNFPA & African Health Innovation Centre - (2025)"
            result="Finalist"
            des="Created tech-driven and AI solutions addressing healthcare access and empowerment for women."
          />
          <ResumeCard
            title="5th African Youth Conference on Social Justice"
            subTitle="Young African Activist Network & FES (Addis Ababa) - (2022)"
            result="Delegate"
            des="Collaborated on democratic and social justice frameworks with youth activists across the African continent."
          />
          <ResumeCard
            title="MasterCard Foundation Baobab Summit"
            subTitle="MasterCard Foundation (Kigali, Rwanda) - (2022)"
            result="Attendee"
            des="Participated in leadership summits, peer networking, and panel discussions on youth leadership in Africa."
          />
          <ResumeCard
            title="Youth Leadership Training"
            subTitle="LeadAfrique International (Ghana Youth Leadership Academy) - (2023)"
            result="Graduate"
            des="Intensive training program focused on personal leadership, public speaking, and project governance."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;

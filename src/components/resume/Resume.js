import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Achievement from './Achievement';
import Experience from "./Experience";
import Volunteering from "./Volunteering";
import Skills from "./Skills";
import DigitalFootprint from "./DigitalFootprint";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const [skillsData, setSkillsData] = useState(false);
  const [volunteeringData, setVolunteeringData] = useState(false);
  const [footprintData, setFootprintData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsOfExp = Math.max(5, currentYear - startYear);

  return (
    <section id="resume" className="w-full py-20 border-b border-white/5 font-bodyFont">
      <div className="flex justify-center items-center text-center">
        <Title title={`${yearsOfExp}+ YEARS OF EXPERIENCE`} des="My Resume" />
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl w-full">
          <li
            onClick={() => {
              setEducationData(true);
              setExperienceData(false);
              setSkillsData(false);
              setVolunteeringData(false);
              setFootprintData(false);
              setAchievementData(false);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border text-center transition-all duration-300 ${
              educationData
                ? "bg-designColor text-[#090A0C] border-designColor shadow-lg shadow-designColor/20"
                : "bg-transparent text-gray-400 border-white/10 hover:border-designColor/50 hover:text-white"
            }`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setExperienceData(true);
              setSkillsData(false);
              setVolunteeringData(false);
              setFootprintData(false);
              setAchievementData(false);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border text-center transition-all duration-300 ${
              experienceData
                ? "bg-designColor text-[#090A0C] border-designColor shadow-lg shadow-designColor/20"
                : "bg-transparent text-gray-400 border-white/10 hover:border-designColor/50 hover:text-white"
            }`}
          >
            Experience
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setExperienceData(false);
              setSkillsData(true);
              setVolunteeringData(false);
              setFootprintData(false);
              setAchievementData(false);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border text-center transition-all duration-300 ${
              skillsData
                ? "bg-designColor text-[#090A0C] border-designColor shadow-lg shadow-designColor/20"
                : "bg-transparent text-gray-400 border-white/10 hover:border-designColor/50 hover:text-white"
            }`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setExperienceData(false);
              setSkillsData(false);
              setVolunteeringData(true);
              setFootprintData(false);
              setAchievementData(false);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border text-center transition-all duration-300 ${
              volunteeringData
                ? "bg-designColor text-[#090A0C] border-designColor shadow-lg shadow-designColor/20"
                : "bg-transparent text-gray-400 border-white/10 hover:border-designColor/50 hover:text-white"
            }`}
          >
            Volunteering
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setExperienceData(false);
              setSkillsData(false);
              setVolunteeringData(false);
              setFootprintData(true);
              setAchievementData(false);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border text-center transition-all duration-300 ${
              footprintData
                ? "bg-designColor text-[#090A0C] border-designColor shadow-lg shadow-designColor/20"
                : "bg-transparent text-gray-400 border-white/10 hover:border-designColor/50 hover:text-white"
            }`}
          >
            Digital Footprint
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setExperienceData(false);
              setSkillsData(false);
              setVolunteeringData(false);
              setFootprintData(false);
              setAchievementData(true);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border text-center transition-all duration-300 ${
              achievementData
                ? "bg-designColor text-[#090A0C] border-designColor shadow-lg shadow-designColor/20"
                : "bg-transparent text-gray-400 border-white/10 hover:border-designColor/50 hover:text-white"
            }`}
          >
            Development & Awards
          </li>
        </ul>
      </div>
      <div className="rounded-2xl mt-12">
        {educationData && <Education />}
        {experienceData && <Experience />}
        {skillsData && <Skills />}
        {volunteeringData && <Volunteering />}
        {footprintData && <DigitalFootprint />}
        {achievementData && <Achievement />}
      </div>
    </section>
  );
}

export default Resume;

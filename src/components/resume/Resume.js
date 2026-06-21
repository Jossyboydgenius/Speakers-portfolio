import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Achievement from './Achievement';
import Experience from "./Experience";
import Volunteering from "./Volunteering";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  const [volunteeringData, setVolunteeringData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b border-white/5 font-bodyFont">
      <div className="flex justify-center items-center text-center">
        <Title title="5+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-wrap justify-center gap-4 max-w-4xl w-full">
          <li
            onClick={() => {
              setEducationData(true);
              setExperienceData(false);
              setAchievementData(false);
              setVolunteeringData(false);
            }}
            className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border text-center transition-all duration-300 ${
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
              setAchievementData(false);
              setVolunteeringData(false);
            }}
            className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border text-center transition-all duration-300 ${
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
              setAchievementData(true);
              setVolunteeringData(false);
            }}
            className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border text-center transition-all duration-300 ${
              achievementData
                ? "bg-designColor text-[#090A0C] border-designColor shadow-lg shadow-designColor/20"
                : "bg-transparent text-gray-400 border-white/10 hover:border-designColor/50 hover:text-white"
            }`}
          >
            Achievements
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setExperienceData(false);
              setAchievementData(false);
              setVolunteeringData(true);
            }}
            className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border text-center transition-all duration-300 ${
              volunteeringData
                ? "bg-designColor text-[#090A0C] border-designColor shadow-lg shadow-designColor/20"
                : "bg-transparent text-gray-400 border-white/10 hover:border-designColor/50 hover:text-white"
            }`}
          >
            Volunteering
          </li>
        </ul>
      </div>
      <div className="rounded-2xl mt-12">
        {educationData && <Education />}
        {achievementData && <Achievement />}
        {experienceData && <Experience />}
        {volunteeringData && <Volunteering />}
      </div>
    </section>
  );
}

export default Resume;

import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Achievement from './Achievement';
import Experience from "./Experience";
import Volunteering from "./Volunteering";
// import Skills from './Skills';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  // const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  const [volunteeringData, setVolunteeringData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="5+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
          <li
            onClick={() =>
              setEducationData(true) &
              setExperienceData(false) &
              setAchievementData(false) &
              setVolunteeringData(false)
            }
            className={`relative group cursor-pointer flex justify-center items-center px-6 py-8 rounded-lg ${
              educationData
                ? "bg-gradient-to-r from-[#be8c6c] to-[#d4b08c] text-white"
                : "bg-gradient-to-r from-[#1e2024] to-[#202327] text-designColor"
            } hover:bg-gradient-to-r hover:from-[#be8c6c] hover:to-[#d4b08c] hover:text-white duration-300`}
          >
            Education
          </li>
          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false) &
              setVolunteeringData(false)
            }
            className={`relative group cursor-pointer flex justify-center items-center px-6 py-8 rounded-lg ${
              skillData
                ? "bg-gradient-to-r from-[#be8c6c] to-[#d4b08c] text-white"
                : "bg-gradient-to-r from-[#1e2024] to-[#202327] text-designColor"
            } hover:bg-gradient-to-r hover:from-[#be8c6c] hover:to-[#d4b08c] hover:text-white duration-300`}
          >
            Professional Skills
          </li> */}
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(true) &
              setAchievementData(false) &
              setVolunteeringData(false)
            }
            className={`relative group cursor-pointer flex justify-center items-center px-6 py-8 rounded-lg ${
              experienceData
                ? "bg-gradient-to-r from-[#be8c6c] to-[#d4b08c] text-white"
                : "bg-gradient-to-r from-[#1e2024] to-[#202327] text-designColor"
            } hover:bg-gradient-to-r hover:from-[#be8c6c] hover:to-[#d4b08c] hover:text-white duration-300`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementData(true) &
              setVolunteeringData(false)
            }
            className={`relative group cursor-pointer flex justify-center items-center px-6 py-8 rounded-lg ${
              achievementData
                ? "bg-gradient-to-r from-[#be8c6c] to-[#d4b08c] text-white"
                : "bg-gradient-to-r from-[#1e2024] to-[#202327] text-designColor"
            } hover:bg-gradient-to-r hover:from-[#be8c6c] hover:to-[#d4b08c] hover:text-white duration-300`}
          >
            Achievements
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementData(false) &
              setVolunteeringData(true)
            }
            className={`relative group cursor-pointer flex justify-center items-center px-6 py-8 rounded-lg ${
              volunteeringData
                ? "bg-gradient-to-r from-[#be8c6c] to-[#d4b08c] text-white"
                : "bg-gradient-to-r from-[#1e2024] to-[#202327] text-designColor"
            } hover:bg-gradient-to-r hover:from-[#be8c6c] hover:to-[#d4b08c] hover:text-white duration-300`}
          >
            Volunteering
          </li>
        </ul>
      </div>
      <div className="rounded-lg mt-8">
        {educationData && <Education />}
        {/* {skillData && <Skills />} */}
        {achievementData && <Achievement />}
        {experienceData && <Experience />}
        {volunteeringData && <Volunteering />}
      </div>
    </section>
  );
}

export default Resume;
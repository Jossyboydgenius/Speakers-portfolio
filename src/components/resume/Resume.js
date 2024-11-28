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
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setExperienceData(false) &
              setAchievementData(false) &
              setVolunteeringData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi rounded-lg`}
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
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi rounded-lg`}
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
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi rounded-lg`}
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
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi rounded-lg`}
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
            className={`${
              volunteeringData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi rounded-lg`}
          >
            Volunteering
          </li>
        </ul>
      </div>
      <div className="rounded-lg">
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

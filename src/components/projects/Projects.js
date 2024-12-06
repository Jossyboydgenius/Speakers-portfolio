import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectNine } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
         title="VISIT MY PORTFOLIO AND SHARE YOUR INSIGHTFUL FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Get Out of Depression (GOOD) Foundation"
          des="Led strategic development and digital marketing campaigns for the foundation, 
          impacting over 6000 individuals through mental health projects and partnerships with institutions like the University of South Florida."
          src={projectOne}
        />
        <ProjectsCard
          title="Gender Equality advocacy"
          des="Advocating for Gender Equality through media (traditional and digital) and in person programs that will promote the Sustainable Development Goal 5.
          My actions in support of gender equality over the years have included assisting production of the Gender and Development radio program at GBC, 
          participating in activities and campaigns by Abuntu for Development, Affirmative Action Coalition, 
          Women in Broadcasting and CAMFED/MasterCard as well as writing articles to highlight actions and the need for Gender equality."
          src={projectNine}
        />
        <ProjectsCard
          title="CAMFED Ghana - Girls' Empowerment Sessions"
          des="Mentoring sessions for girls and young women under the CAMFED transition guide and the learner
          guide programs, focused on self-development, life skills, and sexual and reproductive health for
          junior high students, fostering empowerment and education for young girls in Ghana."
          src={projectThree}
        />
        <ProjectsCard
          title="Sustainable Development Goal (SDG) Advocacy"
          des="Directed communications for SDG Ambassadors Ghana, focusing on youth engagement and
          sustainable development advocacy, collaborating with organizations. Volunteers with SDG-driven
          organizations to organize and implement activities on Gender development, good health and
          wellbeing and climate change."
          src={projectFour}
        />
        <ProjectsCard
          title="Children and Youth Advocate"
          des="Hosting and assisting with production of engaging youth advocacy radio and TV programs on GBC
          with Curious Minds Ghana, addressing social issues and encouraging meaningful youth participation
          in national conversations."
          src={projectTwo}
        />
        <ProjectsCard
          title="Digital Campaigns"
          des="Using my social media handles to talk about national issues like illegal mining, volunteered and
          assisted with implementation of digitals campaigns for 2023 16 DAYS OF ACTIVISM, 2024 Zero
          discrimination Day and World Malaria Day, which including TV and radio tours, article publications
          and social media campaigns with Curious Minds Ghana. As well as SWARELG campaign to promote
          women’s representation in local governance, driving community impact through effective visual
          storytelling by Abuntu for Development."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects;

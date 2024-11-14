import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Get Out of Depression (GOOD) Foundation"
          des="Led strategic development and digital marketing campaigns for the foundation, impacting over 6000 individuals through mental health projects and partnerships with institutions like the University of South Florida."
          src={projectOne}
        />
        <ProjectsCard
          title="Youth Advocacy Media Programs"
          des="Hosted and produced engaging youth advocacy radio and TV programs on GBC and Curious Minds Ghana, addressing social issues and encouraging youth involvement in national conversations."
          src={projectTwo}
        />
        <ProjectsCard
          title="CAMFED Ghana - Girls' Empowerment Sessions"
          des="Conducted mentorship sessions focused on self-development, life skills, and sexual and reproductive health for junior high students, fostering empowerment and education for young girls in Ghana."
          src={projectThree}
        />
        <ProjectsCard
          title="World Malaria Day Digital Campaign"
          des="Led a digital campaign for World Malaria Day, creating trending hashtags and coordinating social media interactions that achieved over 50K engagements, amplifying awareness on malaria prevention."
          src={projectThree}
        />
        <ProjectsCard
          title="Sustainable Development Goal (SDG) Advocacy"
          des="Directed communications for SDG Ambassadors Ghana, focusing on youth engagement and sustainable development advocacy, collaborating with organizations like Pearson Edexcel and Access Bank Ghana."
          src={projectOne}
        />
        <ProjectsCard
          title="Abantu for Development Campaign"
          des="Created digital media content, including over 15 graphic designs, for the SWARELG campaign to promote women’s representation in local governance, driving community impact through effective visual storytelling."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects;

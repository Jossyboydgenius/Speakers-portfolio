import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 font-bodyFont"
    >
      {/* Left Column: Core Professional Roles */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">2019 - Present</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Core Professional Roles</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="Founder & Team Lead"
            subTitle="Get Out Of Depression (GOOD) Foundation - (2019 - Present)"
            result="Advocacy"
            des="I lead impactful mental health projects, improving the well-being of over 6,000 individuals. Execute communications strategies, manage digital marketing, and foster partnerships, including a collaboration with the University of South Florida for the 'Art Therapy Project.' Manage a dynamic team, growing membership from 15 to 73 and coordinating 100+ outreach volunteers."
          />
          <ResumeCard
            title="Host / Children & Youth Advocate"
            subTitle="GBC / Curious Minds Ghana - (2019 - 2025)"
            result="Media"
            des="Hosted and assisted with the production of radio and TV shows (Youth Action, YOLO Talk Show, Uniiq Curious Minds). Initiated a resource contact list of 50+ key figures. Contributed to writing articles, designing content, producing podcasts, and leading digital campaigns—including a World Malaria Day 2024 Twitter campaign that trended with 5,000+ posts."
          />
          <ResumeCard
            title="Writer"
            subTitle="All Things Biola - (2024 - 2025)"
            result="Editorial"
            des="Crafted unique travel and culture content focused on Ghana. Spotlighted sustainable travel, green tourism, and climate-conscious practices. Advocated for eco-friendly tourism, supporting local communities, and preserving natural resources. Embedded travel SEO, significantly improving blog visibility."
          />
        </div>
      </div>

      {/* Right Column: Communications & Marketing Roles */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 flex flex-col gap-2">
          <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">2024 - 2025</p>
          <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Communications & Marketing</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full border-l border-white/10 flex flex-col gap-8">
          <ResumeCard
            title="Communications Assistant"
            subTitle="IoT Network Hub & STEMAiD - (2024 - 2025)"
            result="Tech-Advocacy"
            des="Led stakeholder engagement at donor meetings, designed internal communication plans, and crafted donor-funded strategies. Contributed to grant writing, proposal development, and strategic communications for STEM and AI youth projects. Developed and nurtured a strategic partner connection list."
          />
          <ResumeCard
            title="Communications & Content Executive"
            subTitle="Africa Education Gateway - (June 2024 - August 2024)"
            result="Education"
            des="Created high-quality content for 'SCHOOL WORLD' and supported events like the Global Super Teachers Conference. Managed media relations with 20+ outlets, featuring on GBC's Women's Voices. Drafted partnership proposals, securing collaborations with Pearson Edexcel (UK) and Access Bank Ghana."
          />
          <ResumeCard
            title="Host / Communications & Marketing Associate"
            subTitle="Paahibu Space - (2024 - 2025)"
            result="Engagement"
            des="Hosted interactive community programs and managed strategic communications, content marketing campaigns, and digital branding assets to drive engagement for youth initiatives."
          />
          <ResumeCard
            title="Communications Assistant"
            subTitle="On Our Watch Global / Diasporan Business Community - (2024)"
            result="PR & Design"
            des="Handled public event hosting, designed digital promotional graphics, managed donor communications, and supported targeted public relations campaigns."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

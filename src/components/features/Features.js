import React from 'react'
import { FaMicrophone, FaPodcast, FaComments, FaBullhorn, FaPenNib, FaUsers, FaLaptop, FaChartLine } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="MCing and Moderation"
          des="Providing professional and engaging hosting services for your events, 
          ensuring a smooth and memorable experience for all attendees. Facilitating discussions that bring out the best in panelists, ensuring a balanced and productive dialogue that keeps the audience engaged."
          icon={<FaMicrophone />}
        />
        <Card
          title="Podcast Hosting"
          des="Hosting thoughtful and engaging podcasts on relevant social issues, 
          bringing insightful conversations and diverse perspectives to the forefront."
          icon={<FaPodcast />}
        />
        <Card
          title="Voice Overs"
          des="Providing professional voice-over services for advertisements, documentaries, 
          and various multimedia projects, delivering clear and impactful narration."
          icon={<FaBullhorn />}
        />
        <Card
          title="Faceless Poetry"
          des="Inspiring change through powerful spoken word performances, 
          using poetry to address social issues and evoke emotional responses from the audience."
          icon={<FaPenNib />}
        />
        <Card
          title="Public Speaking"
          des="Delivering powerful and inspiring speeches for any audience, 
          motivating and empowering listeners with compelling storytelling and impactful messages."
          icon={<FaUsers />}
        />
        <Card
          title="Freelance Writing"
          des="Creating engaging and well-researched content for various platforms, 
          including blogs, articles, and social media, tailored to meet the needs of clients."
          icon={<FaLaptop />}
        />
        <Card
          title="Digital Marketing"
          des="Developing and implementing effective digital marketing strategies, 
          including SEO, social media marketing, and content marketing, to enhance online presence and drive engagement."
          icon={<FaChartLine />}
        />
      </div>
    </section>
  );
}

export default Features

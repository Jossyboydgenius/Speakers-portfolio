import React from 'react'
import { FaMicrophone, FaPodcast, FaComments, FaBullhorn, FaPenNib, FaUsers, FaLaptop, FaChartLine, FaCalendarAlt, FaNewspaper } from "react-icons/fa";
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
          title="Master of Ceremonies (MC) & Moderation"
          des="Providing professional and engaging hosting services for your events, ensuring a smooth and
          memorable experience for all attendees. Facilitating discussions that bring out the best in panellists,
          ensuring a balanced and productive dialogue that keeps the audience engaged."
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
          des="I deliver high-quality, compelling content tailored to your unique needs. Whether it’s articles, blogs,
          reports, or creative pieces, I bring clarity, originality, and professionalism to every project. My
          writing is driven by research, audience understanding, and a passion for storytelling, ensuring your
          message stands out and makes an impact."
          icon={<FaLaptop />}
        />
        <Card
          title="Digital Marketing"
          des="Crafting and executing data-driven digital marketing strategies that amplify visibility and drive
          engagement. From social media management and content creation Digital Marketing. My digital
          campaign skills resonate with your audience and align with your objectives."
          icon={<FaChartLine />}
        />
        <Card
          title="Event Planning"
          des="Organizing and coordinating events to ensure they run smoothly and successfully. 
          From concept to execution, I handle all aspects of event planning to create memorable experiences."
          icon={<FaCalendarAlt />}
        />
        <Card
          title="Media Relations"
          des="Building and maintaining relationships with media outlets to ensure positive coverage and effective communication of your message. 
          I manage press releases, media inquiries, and public relations strategies."
          icon={<FaNewspaper />}
        />
      </div>
    </section>
  );
}

export default Features

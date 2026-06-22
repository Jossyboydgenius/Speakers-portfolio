import React from 'react';
import { 
  FaMicrophone, 
  FaPodcast, 
  FaBullhorn, 
  FaPenNib, 
  FaUsers, 
  FaLaptop, 
  FaChartLine, 
  FaCalendarAlt, 
  FaNewspaper 
} from "react-icons/fa";

export const featuresData = [
  {
    id: 1,
    title: "Master of Ceremonies (MC) & Moderation",
    des: "Providing professional and engaging hosting services for your events, ensuring a smooth and memorable experience for all attendees. Facilitating discussions that bring out the best in panellists.",
    icon: <FaMicrophone />,
    details: "As a seasoned Master of Ceremonies and moderator, I bring energy, structure, and professional charisma to every stage. I specialize in keeping events running on time while maintaining high audience engagement. Whether it's a high-stakes corporate summit, a panel discussion on critical social issues, or an awards gala, I ensure panellists are spotlighted, discussions remain productive, and attendees feel connected to the event's goals.",
    focusAreas: [
      "Corporate Conferences & Summits",
      "Panel Discussions & Fireside Chats",
      "Awards Gala & Ceremonies",
      "Brand Launches & Promotional Events",
      "Community & Advocacy Dialogues"
    ],
    deliverables: [
      "Pre-event consulting & program alignment",
      "Script drafting & flow coordination",
      "Active stage presence & timeline control",
      "Audience engagement & Q&A moderation"
    ]
  },
  {
    id: 2,
    title: "Podcast Hosting",
    des: "Hosting thoughtful and engaging podcasts on relevant social issues, bringing insightful conversations and diverse perspectives to the forefront.",
    icon: <FaPodcast />,
    details: "Podcasting requires more than just a good voice; it demands deep listening, thoughtful inquiry, and the ability to steer conversations towards meaningful insights. I host podcasts focused on advocacy, development, and social change, interviewing industry leaders and community heroes alike. I bring a warm, conversational tone that encourages guests to share their authentic stories.",
    focusAreas: [
      "Development & Advocacy Podcasts",
      "Interview Series & Profiles",
      "Narrative Podcasts & Audio Documentaries",
      "Social Action & Current Affairs Discussions"
    ],
    deliverables: [
      "Guest research & question outlines",
      "Audio hosting/moderation",
      "Episode intro/outro recording",
      "Content structure & post-interview alignment"
    ]
  },
  {
    id: 3,
    title: "Voice Overs",
    des: "Providing professional voice-over services for advertisements, documentaries, and various multimedia projects, delivering clear and impactful narration.",
    icon: <FaBullhorn />,
    details: "A powerful voice over breathes life into stories, ads, and documentaries. I offer voice-over services characterized by clear articulation, rich resonance, and emotional adaptability. Whether you need a warm and reassuring voice for a non-profit campaign, an authoritative tone for a corporate video, or a dynamic narration for a commercial, I deliver professional recordings tailored to your specifications.",
    focusAreas: [
      "Commercial Advertisements & Promos",
      "Documentary & Explainer Narration",
      "E-learning & Training Modules",
      "Corporate Profile Videos",
      "IVR & Automated Phone Systems"
    ],
    deliverables: [
      "High-quality audio files (WAV/MP3)",
      "Multiple script reads & variations",
      "Voice styling adjustments",
      "Basic editing & background noise removal"
    ]
  },
  {
    id: 4,
    title: "Faceless Poetry",
    des: "Inspiring change through powerful spoken word performances, using poetry to address social issues and evoke emotional responses from the audience.",
    icon: <FaPenNib />,
    details: "Spoken word poetry is a vessel for raw emotion, activism, and storytelling. My 'Faceless Poetry' project uses verse to confront social injustices, shine a light on mental health struggles, and spark conversations around development. Through sensory imagery and rhythmic delivery, I craft performances that leave a lasting impact on listeners, challenging them to reflect and take action.",
    focusAreas: [
      "Social Justice & Advocacy Campaigns",
      "Cultural Festivals & Poetry Slams",
      "Mental Health Awareness Campaigns",
      "Educational & Institutional Programs"
    ],
    deliverables: [
      "Custom poetry writing & theme curation",
      "Live spoken word performances",
      "Pre-recorded audio/video poetry segments",
      "Creative writing workshops"
    ]
  },
  {
    id: 5,
    title: "Public Speaking",
    des: "Delivering powerful and inspiring speeches for any audience, motivating and empowering listeners with compelling storytelling and impactful messages.",
    icon: <FaUsers />,
    details: "I deliver motivational and informative speeches that challenge perspectives, build empathy, and inspire action. Covering topics such as youth advocacy, communication for development, and leadership, I leverage personal narratives and data-backed insights. My keynotes are interactive, thought-provoking, and tailored to the unique goals of each audience.",
    focusAreas: [
      "Youth Leadership Conferences",
      "Graduation & Commencement Ceremonies",
      "Keynote Speeches & Presentations",
      "Panel Guest & Roundtables",
      "Development & Social Change Summits"
    ],
    deliverables: [
      "Tailored speech preparation & outline",
      "Live presentation delivery",
      "Interactive audience Q&A sessions",
      "Slide deck presentation support"
    ]
  },
  {
    id: 6,
    title: "Freelance Writing",
    des: "I deliver high-quality, compelling content tailored to your unique needs. Whether it's articles, blogs, reports, or creative pieces, I bring clarity, originality, and professionalism.",
    icon: <FaLaptop />,
    details: "Written communication is the foundation of advocacy and branding. I deliver high-quality, research-driven written content tailored to your target audience. From engaging blog posts and editorial articles to comprehensive reports, press releases, and creative stories, I bring clarity, precision, and an editorial edge that makes your message stand out.",
    focusAreas: [
      "Advocacy Reports & Policy Briefs",
      "Blog & Editorial Article Writing",
      "Press Releases & Media Statements",
      "Creative Content & Brand Storytelling",
      "Website Copywriting"
    ],
    deliverables: [
      "Fully researched drafts & source mapping",
      "Revision rounds based on feedback",
      "SEO optimized copy for web readability",
      "Editing, proofreading & structural layout"
    ]
  },
  {
    id: 7,
    title: "Digital Marketing",
    des: "Crafting and executing data-driven digital marketing strategies that amplify visibility and drive engagement. From social media management to digital campaigns.",
    icon: <FaChartLine />,
    details: "Modern branding requires a strategic online presence. I develop and execute digital marketing strategies that increase visibility, foster community engagement, and align with your organizational goals. I specialize in social media curation, visual content creation, and copywriting that turns passive followers into active advocates.",
    focusAreas: [
      "Social Media Management & Strategy",
      "Digital Advocacy Campaigns",
      "Content Curation & Copywriting",
      "Email Newsletters & Outreach",
      "Basic SEO & Analytics Optimization"
    ],
    deliverables: [
      "Weekly/monthly content calendars",
      "Custom social media graphic assets",
      "Analytics tracking & performance reports",
      "Digital advertising setup & alignment"
    ]
  },
  {
    id: 8,
    title: "Event Planning",
    des: "Organizing and coordinating events to ensure they run smoothly and successfully. From concept to execution, I handle all aspects of event planning.",
    icon: <FaCalendarAlt />,
    details: "Turning a concept into a successful event requires meticulous planning, creative direction, and seamless coordination. I manage event planning processes, linking logistics, guest management, and stage schedules together. I focus on creating immersive experiences that communicate your message clearly to every attendee.",
    focusAreas: [
      "Interactive Workshops & Seminars",
      "Community Outreach Programs",
      "Virtual Webinars & Virtual Summits",
      "Charity & Non-Profit Galas",
      "Product & Brand Launches"
    ],
    deliverables: [
      "Event concept blueprint & script outline",
      "Timeline & speaker coordination",
      "On-site stage management",
      "Post-event evaluation metrics"
    ]
  },
  {
    id: 9,
    title: "Media Relations",
    des: "Building and maintaining relationships with media outlets to ensure positive coverage and effective communication of your message.",
    icon: <FaNewspaper />,
    details: "Effective communication requires navigating the media landscape with confidence. I help clients build and maintain relationships with media outlets, securing positive coverage and handling press correspondence. From drafting press kits to organizing media briefings, I ensure your key messages are accurately conveyed to the public.",
    focusAreas: [
      "Press Releases & Official Kits",
      "Media Pitching & Relations",
      "Press Conferences & Media Briefings",
      "Media Coverage Monitoring",
      "Public Relations Strategy"
    ],
    deliverables: [
      "Media contact strategy & outreach plan",
      "Written press releases & distributions",
      "Interview prep sheets & talking points",
      "Coverage clipping & report reports"
    ]
  }
];

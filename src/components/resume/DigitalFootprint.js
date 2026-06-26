import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";

const footprintArticles = [
  {
    title: "A Free Press For Environmental Justice",
    url: "https://cmghana.org/opinion-a-free-press-for-environmental-justice/",
    source: "Curious Minds Ghana",
    des: "An opinion article demonstrating how a free, independent press serves as a vital safeguard for climate action, accountability, and environmental protection in Ghana."
  },
  {
    title: "Was Ghana’s Education Reform Necessary?",
    url: "https://schoolworldmedia.com/was-ghanas-education-reform-necessary/",
    source: "School World Media",
    des: "An analytical review of recent public school curriculum changes and structural reforms implemented in the Ghanaian education system."
  },
  {
    title: "Investing in Women: The Urgency of Gender-Responsive Financing",
    url: "https://cmghana.org/investing-in-women-the-urgency-of-gender-responsive-financing/",
    source: "Curious Minds Ghana",
    des: "A public call to scale up gender-sensitive financing structures, empowering local women entrepreneurs and promoting SDG 5 targets."
  },
  {
    title: "Detty December with a Purpose: Making a Difference in Ghana",
    url: "https://allthingsbiola.com/2024/12/13/detty-december-with-a-purpose-making-a-difference-in-ghana/",
    source: "All Things Biola",
    des: "Promoting travel philanthropy and sustainable outreach during December holidays, encouraging tourists to support local community initiatives."
  },
  {
    title: "The Soul of Ghana: Music and Dance That Move You",
    url: "https://allthingsbiola.wordpress.com/2025/01/15/the-soul-of-ghana-music-and-dance-that-move-you/",
    source: "All Things Biola Blog",
    des: "An editorial piece celebrating traditional dance and rhythms, discussing their heritage preservation and role in eco-friendly tourism."
  }
];

const DigitalFootprint = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full font-bodyFont"
    >
      <div className="py-6 lgl:py-12 flex flex-col gap-2">
        <p className="text-xs font-semibold text-designColor uppercase tracking-widest font-bodyFont">PUBLISHED ARTICLES & MEDIA OUTREACH</p>
        <h2 className="text-2xl md:text-3xl font-normal font-titleFont italic text-white">Digital Footprint</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {footprintArticles.map((article, idx) => (
          <a
            key={idx}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-designColor/30 rounded-2xl p-6 flex flex-col gap-4 shadow-lg hover:shadow-designColor/5 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-designColor/10 text-designColor flex justify-center items-center text-lg flex-shrink-0 group-hover:bg-designColor group-hover:text-[#090A0C] transition-all duration-300">
                <FaBookOpen />
              </div>
              <span className="text-xs font-semibold text-designColor/80 border border-designColor/20 bg-designColor/5 px-3 py-1 rounded-full uppercase tracking-wider">
                {article.source}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base md:text-lg font-normal font-titleFont text-white italic group-hover:text-designColor transition-colors duration-300 flex items-center gap-2">
                <span>{article.title}</span>
                <FaExternalLinkAlt className="text-xs text-gray-500 group-hover:text-designColor transition-colors flex-shrink-0" />
              </h3>
              <p className="text-sm font-light text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {article.des}
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default DigitalFootprint;

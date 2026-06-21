import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="w-full p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-designColor/35 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-designColor/5"
    >
      <div className="w-full overflow-hidden rounded-xl">
        <img
          className="w-full h-52 object-cover group-hover:scale-105 duration-500 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-6 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-medium font-titleFont text-white group-hover:text-designColor transition-colors duration-300">
            {title}
          </h3>
          <span className="text-base w-8 h-8 rounded-full border border-white/10 flex justify-center items-center text-gray-400 hover:text-designColor hover:border-designColor/50 duration-300 cursor-pointer flex-shrink-0">
            <FaGlobe />
          </span>
        </div>
        <p className="text-sm font-bodyFont font-light leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {des}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectsCard

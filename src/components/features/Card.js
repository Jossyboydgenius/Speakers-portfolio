import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Card = ({title, des, icon, onClick, className}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className={`w-full px-8 py-10 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-designColor/35 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-designColor/5 cursor-pointer ${className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-designColor/10 text-designColor text-3xl group-hover:bg-designColor group-hover:text-[#090A0C] transition-all duration-300">
          {icon ? (
            <span>{icon}</span>
          ) : (
            <span className="w-6 h-[2px] bg-designColor rounded-full" />
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg md:text-xl font-medium font-titleFont text-white group-hover:text-designColor transition-colors duration-300">
            {title}
          </h2>
          <p className="text-sm font-bodyFont font-light leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {des}
          </p>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider font-semibold text-designColor/60 group-hover:text-designColor transition-colors duration-300 font-bodyFont">
          Learn More
        </span>
        <span className="text-xl text-designColor transform transition-transform duration-300 group-hover:translate-x-2">
          <HiArrowRight />
        </span>
      </div>
    </motion.div>
  );
}

export default Card

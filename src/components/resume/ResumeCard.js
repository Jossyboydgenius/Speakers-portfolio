import React from 'react'
import { motion } from "framer-motion";

const ResumeCard = ({title, subTitle, result, des}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="w-full h-auto group flex font-bodyFont"
    >
      {/* Timeline indicator line & dot */}
      <div className="w-10 h-[2px] bg-white/10 mt-16 relative flex-shrink-0">
        <span className="absolute w-4 h-4 rounded-full -top-1.5 -left-2 flex justify-center items-center bg-[#090A0C] border border-white/20 group-hover:border-designColor transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-designColor transition-colors duration-300"></span>
        </span>
      </div>
      
      {/* Card Content */}
      <div className="flex-grow min-w-0 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-designColor/30 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-lg hover:shadow-designColor/5 transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
          <div>
            <h3 className="text-lg md:text-xl font-normal font-titleFont text-white italic group-hover:text-designColor transition-colors duration-300">
              {title}
            </h3>
            <p className="text-xs font-medium text-gray-400 mt-1">
              {subTitle}
            </p>
          </div>
          {result && (
            <div className="flex-shrink-0 self-start md:self-auto">
              <span className="px-3 py-1.5 text-xs font-semibold text-designColor border border-designColor/20 bg-designColor/5 rounded-full uppercase tracking-wider">
                {result}
              </span>
            </div>
          )}
        </div>
        {des && (
          <p className="text-sm font-light leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {des}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default ResumeCard

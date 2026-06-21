import React from 'react'
import { motion } from "framer-motion";

const Title = ({title, des}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-3 mb-12"
    >
      <h3 className="text-xs font-semibold font-bodyFont uppercase tracking-[0.25em] text-designColor/90">
       {title}
      </h3>
      <h1 className="text-3xl md:text-4xl text-white font-normal font-titleFont italic leading-tight">{des}</h1>
    </motion.div>
  );
}

export default Title

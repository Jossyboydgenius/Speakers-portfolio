import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b border-white/5 font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </motion.section>
  );
}

export default Banner

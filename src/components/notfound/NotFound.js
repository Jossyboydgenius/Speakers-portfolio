import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen bg-bodyColor text-lightText flex flex-col justify-center items-center px-4 relative overflow-hidden font-bodyFont">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-designColor/10 rounded-full blur-[100px] z-0 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md flex flex-col items-center text-center z-10 gap-6"
      >
        <div className="w-20 h-20 bg-designColor/10 border border-designColor/20 text-designColor rounded-full flex justify-center items-center text-4xl shadow-[0_0_25px_rgba(190,140,108,0.1)]">
          <FiAlertCircle className="animate-pulse" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-7xl font-bold font-titleFont text-designColor tracking-wider">
            404
          </h1>
          <h2 className="text-2xl font-normal font-titleFont text-white italic">
            Page Not Found
          </h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed mt-2">
            The page you are looking for does not exist, has been removed, or is temporarily unavailable.
          </p>
        </div>

        <Link to="/" className="w-full mt-4">
          <button className="w-full py-3.5 rounded-xl border border-designColor hover:bg-designColor hover:text-[#090A0C] text-xs font-semibold uppercase tracking-wider text-designColor transition-all duration-300 shadow-lg hover:shadow-designColor/20">
            Go Back Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

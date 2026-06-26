import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { motion } from "framer-motion";

const ContactLeft = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="w-full lgl:w-[35%] bg-white/[0.01] border border-white/5 p-6 rounded-2xl flex flex-col gap-6 justify-center font-bodyFont"
    >
      <img
        className="w-full h-52 object-cover rounded-xl border border-white/5"
        src={contactImg}
        alt="Nana Aba"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-normal font-titleFont text-white italic">Nana Aba</h3>
        <p className="text-sm font-semibold text-designColor/90">
          Communications & Development Specialist
        </p>
        <p className="text-sm font-light leading-relaxed text-gray-400">
          Experienced in advocacy, digital marketing, and mental health initiatives, with a strong focus on social change communication.
        </p>
        <div className="flex flex-col gap-2 mt-2 border-t border-white/5 pt-4 text-sm font-light text-gray-400">
          <p className="flex items-center gap-2">
            Phone: <span className="text-white font-medium">+233(0)543579809</span>
          </p>
          <p className="flex items-center gap-2">
            Email: <span className="text-white font-medium break-all">helenaamoah6@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-t border-white/5 pt-4">
        <h2 className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Find me in</h2>
        <div className="flex gap-3">
          <a href="http://surl.li/sodnm" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://www.facebook.com/helena.amoah.73" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="http://twitter.com/appiatewaa" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
          <a href="https://www.instagram.com/abaappiatewaa" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactLeft;

import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets/index";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b border-white/5 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8 font-bodyFont">
      <div className="w-full h-full flex flex-col gap-6">
        <img className="w-32" src={logo} alt="logo" />
        <p className="text-sm font-light text-gray-400 leading-relaxed">
          Connecting people through impactful communication and advocacy.
        </p>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/helena-amoah" target="_blank" rel="noopener noreferrer">
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

      <div className="w-full h-full">
        <h3 className="text-sm uppercase text-designColor tracking-wider font-semibold">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-3 py-6 overflow-hidden font-light text-sm text-gray-400">
          <li>
            <Link to="home" smooth duration={500} className="w-full hover:text-white transition-colors duration-300 group cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="features" smooth duration={500} className="w-full hover:text-white transition-colors duration-300 group cursor-pointer">
              Features
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={500} className="w-full hover:text-white transition-colors duration-300 group cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link to="resume" smooth duration={500} className="w-full hover:text-white transition-colors duration-300 group cursor-pointer">
              Resume
            </Link>
          </li>
          <li>
            <Link to="testimonial" smooth duration={500} className="w-full hover:text-white transition-colors duration-300 group cursor-pointer">
              Testimonial
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={500} className="w-full hover:text-white transition-colors duration-300 group cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full h-full">
        <h3 className="text-sm uppercase text-designColor tracking-wider font-semibold">
          Resources
        </h3>
        <ul className="flex flex-col gap-3 py-6 overflow-hidden font-light text-sm text-gray-400">
          <li className="w-full hover:text-white transition-colors duration-300 group cursor-pointer">
            Terms of Service
          </li>
          <li className="w-full hover:text-white transition-colors duration-300 group cursor-pointer">
            Privacy Policy
          </li>
          <li className="w-full hover:text-white transition-colors duration-300 group cursor-pointer">
            Support
          </li>
          <li className="w-full hover:text-white transition-colors duration-300 group cursor-pointer">
            FAQs
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

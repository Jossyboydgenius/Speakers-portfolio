import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets/index";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <p className="text-base text-gray-400">
          Connecting people through impactful communication and advocacy.
        </p>
        <div className="flex gap-4">
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
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link to="home" smooth duration={500} className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Home
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="features" smooth duration={500} className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Features
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={500} className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Projects
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="resume" smooth duration={500} className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Resume
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="testimonial" smooth duration={500} className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Testimonial
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={500} className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          {/* <li>
            <Link to="blog" smooth duration={500} className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Blog
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li> */}
        </ul>
      </div>

      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Terms of Service
          </li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Privacy Policy
          </li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Support
          </li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            FAQs
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

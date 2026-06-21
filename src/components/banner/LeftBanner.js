import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["a Communications Specialist.", "an SDG Ambassador.", "a Youth Advocate.", "a Podcaster.", "an MC."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-12 font-bodyFont">
      <div className="flex flex-col gap-6">
        <h4 className="text-xs tracking-[3px] uppercase font-semibold text-designColor/85">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight font-titleFont">
          Hi, I'm <span className="text-designColor italic font-medium">Helena</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-normal text-gray-300 font-titleFont italic h-16 md:h-12">
          <span>{text}</span>
          <Cursor
            cursorBlinking={true}
            cursorStyle="|"
            cursorColor="#be8c6c"
          />
        </h2>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light tracking-wide max-w-[600px]">
          I have a strong background in copywriting, media relations, digital marketing, public speaking, and
          development advocacy. I founded the Get Out Of Depression (GOOD) Foundation and work on SDGs
          such as health, gender equality, and climate action.
        </p>
      </div>
      <div className="flex flex-col gap-4 border-t border-white/5 pt-8">
        <h2 className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
          Find me in
        </h2>
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
    </div>
  );
};

export default LeftBanner;

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMicrophone,
  FaPenNib,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["a Communications Specialist.", "an SDG Ambassador.", "a Youth Advocate.", "a Podcaster.", "an MC."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Helena</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I have a strong background in media relations, public speaking, and project management. 
        I founded the Get Out Of Depression (GOOD) Foundation and work on SDGs such as health,
        gender equality, and climate action.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            EXPERTISE IN
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" title="Public Speaking">
              <FaMicrophone />
            </span>
            <span className="bannerIcon" title="Content Creation">
              <FaPenNib />
            </span>
            <span className="bannerIcon" title="Media Relations">
              <FaBullhorn />
            </span>
            <span className="bannerIcon" title="Event Hosting">
              <FaUsers />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;

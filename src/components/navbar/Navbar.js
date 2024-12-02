import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets/index";

const navLinksdata = [
  { _id: 1, title: "Home", link: "home" },
  { _id: 2, title: "Features", link: "features" },
  { _id: 3, title: "Projects", link: "projects" },
  { _id: 4, title: "Resume", link: "resume" },
  { _id: 5, title: "Testimonial", link: "testimonial" },
  // { _id: 6, title: "Blog", link: "blog" },
  { _id: 7, title: "Contact", link: "contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              {title === "Contact" ? (
                <div className="relative group">
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="relative z-10 w-full h-full flex justify-center items-center transform transition-transform duration-300 group-hover:-translate-y-2"
                  >
                    <button className="w-full h-16 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne text-designColor rounded-lg flex justify-center items-center px-6 hover:bg-gradient-to-r hover:from-[#be8c6c] hover:to-[#d4b08c] hover:text-white duration-300">
                      {title}
                    </button>
                  </Link>
                  <div className="absolute bottom-0 w-full h-14 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne rounded-lg transform transition-transform duration-300 group-hover:-translate-y-2"></div>
                </div>
              ) : (
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  Connecting people through impactful communication and advocacy.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

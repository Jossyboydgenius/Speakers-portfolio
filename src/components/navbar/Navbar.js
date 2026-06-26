import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinksdata = [
  { _id: 1, title: "Home", link: "home" },
  { _id: 2, title: "Features", link: "features" },
  { _id: 3, title: "Projects", link: "projects" },
  { _id: 4, title: "Resume", link: "resume" },
  { _id: 5, title: "Testimonial", link: "testimonial" },
  { _id: 7, title: "Contact", link: "contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    };
    if (showMenu) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMenu]);

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-[#090A0C]/80 backdrop-blur-md mx-auto flex justify-between items-center font-bodyFont border-b border-white/5 px-4 md:px-8">
      <div className="flex items-center gap-3 cursor-pointer">
        <img className="h-10 w-10 rounded-full object-cover border border-designColor/40" src="/profilePhoto.png" alt="logo" />
        <span className="text-white tracking-wider text-sm md:text-base italic font-titleFont font-medium">
          Nana Aba
        </span>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-8">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-sm font-medium text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              {title === "Contact" ? (
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <button className="px-5 py-2 border border-designColor/30 hover:border-designColor text-designColor hover:bg-designColor hover:text-[#090A0C] rounded-full transition-all duration-300 text-xs font-semibold uppercase tracking-wider">
                    {title}
                  </button>
                </Link>
              ) : (
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-white transition-colors duration-300"
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden border border-white/10 hover:border-designColor/50 w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer transition-colors duration-300"
        >
          <FiMenu />
        </span>
        <AnimatePresence>
          {showMenu && (
            <>
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowMenu(false)}
                className="w-full h-screen fixed top-0 left-0 bg-black/60 backdrop-blur-sm z-50"
              />
              {/* Drawer Content */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="w-[80%] sm:w-[350px] h-screen fixed top-0 left-0 bg-[#0C0D10]/95 backdrop-blur-md p-6 border-r border-white/5 z-50 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2">
                      <img className="h-8 w-8 rounded-full object-cover border border-designColor/40" src="/profilePhoto.png" alt="logo" />
                      <span className="text-white tracking-wider text-xs md:text-sm italic font-titleFont font-medium">
                        Nana Aba
                      </span>
                    </div>
                    <span
                      onClick={() => setShowMenu(false)}
                      className="text-2xl text-gray-400 hover:text-designColor cursor-pointer transition-colors duration-300"
                    >
                      <MdClose />
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    Connecting people through impactful communication and advocacy.
                  </p>
                  <ul className="flex flex-col gap-4 mt-4">
                    {navLinksdata.map((item) => (
                      <li
                        key={item._id}
                        className="text-lg font-medium text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300 border-b border-white/[0.02] pb-2"
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
                </div>
                <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
                  <h2 className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
                    Find me in
                  </h2>
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
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;

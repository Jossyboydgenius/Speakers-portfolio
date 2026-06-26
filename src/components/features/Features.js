import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scroller } from 'react-scroll'
import { MdClose } from 'react-icons/md'
import { FaCheckCircle, FaInstagram, FaTiktok, FaSpotify, FaGlobe } from 'react-icons/fa'

const getPlatformIcon = (platform) => {
  const p = platform.toLowerCase();
  if (p.includes("instagram")) return <FaInstagram className="text-xs text-designColor group-hover:text-[#090A0C] transition-colors" />;
  if (p.includes("tiktok")) return <FaTiktok className="text-xs text-designColor group-hover:text-[#090A0C] transition-colors" />;
  if (p.includes("spotify") || p.includes("podcast")) return <FaSpotify className="text-xs text-designColor group-hover:text-[#090A0C] transition-colors" />;
  return <FaGlobe className="text-xs text-designColor group-hover:text-[#090A0C] transition-colors" />;
};
import Title from '../layouts/Title';
import Card from './Card';
import { featuresData } from '../../data/featuresData';

const Features = ({ setSelectedSubject }) => {
  const [activeService, setActiveService] = useState(null);

  // Prevent body scrolling when active service detail page is open
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeService]);

  return (
    <section
      id="features"
      className="w-full py-20 border-b border-white/5 font-bodyFont"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {featuresData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            des={item.des}
            icon={item.icon}
            onClick={() => setActiveService(item)}
            className={item.id === 10 ? "xl:col-start-2" : ""}
          />
        ))}
      </div>

      {/* Service Detail Page Overlay */}
      <AnimatePresence>
        {activeService && (
          <>
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[1000] cursor-pointer"
            />
            {/* Main detail container */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-4 bottom-4 left-4 right-4 md:top-10 md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl bg-[#090A0C] border border-white/10 rounded-2xl z-[1001] shadow-2xl p-6 md:p-10 flex flex-col justify-between overflow-y-auto cursor-default font-bodyFont"
            >
              {/* Header block */}
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-designColor/10 text-designColor text-4xl">
                    {activeService.icon}
                  </div>
                  <button
                    onClick={() => setActiveService(null)}
                    className="w-10 h-10 border border-white/10 hover:border-designColor/50 bg-white/[0.02] text-gray-400 hover:text-designColor flex justify-center items-center rounded-full text-2xl transition-all duration-300"
                  >
                    <MdClose />
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold font-titleFont text-white italic">
                    {activeService.title}
                  </h2>
                  <div className="w-20 h-[3px] bg-designColor mt-3 rounded-full" />
                </div>
              </div>

              {/* Details Content Body */}
              <div className="flex flex-col lgl:flex-row gap-8 my-8 overflow-y-auto pr-2">
                {/* Left: Detailed Overview */}
                <div className="w-full lgl:w-1/2 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-white font-titleFont">Service Overview</h3>
                    <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed font-bodyFont">
                      {activeService.details}
                    </p>
                  </div>
                  {activeService.workSamples && (
                    <div className="flex flex-col gap-4 border-t border-white/5 pt-4">
                      <h3 className="text-sm uppercase tracking-wider font-semibold text-designColor font-bodyFont">
                        Work Samples & Managed Socials
                      </h3>
                      <div className="flex flex-col gap-3">
                        {activeService.workSamples.map((sample, idx) => (
                          <div key={idx} className="text-sm font-bodyFont">
                            <p className="font-semibold text-white">{sample.client}</p>
                            <div className="flex flex-wrap gap-2 mt-1.5">
                              {sample.links.map((link, lIdx) => (
                                <a
                                  key={lIdx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-designColor hover:text-[#090A0C] bg-designColor/5 hover:bg-designColor border border-designColor/20 hover:border-designColor px-3 py-1.5 rounded-full text-xs transition-all duration-300 font-medium group"
                                >
                                  {getPlatformIcon(link.platform)}
                                  <span>{link.platform}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Bullet Focus & Deliverables */}
                <div className="w-full lgl:w-1/2 flex flex-col gap-6">
                  {/* Focus Areas */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-sm uppercase tracking-wider font-semibold text-designColor font-bodyFont">
                      Focus Areas
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {activeService.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 font-light">
                          <FaCheckCircle className="text-designColor/60 flex-shrink-0 text-xs mt-1" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Deliverables */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-sm uppercase tracking-wider font-semibold text-designColor font-bodyFont">
                      Key Deliverables
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {activeService.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 font-light">
                          <FaCheckCircle className="text-designColor/60 flex-shrink-0 text-xs mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer CTA block */}
              <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p className="text-xs text-gray-400 font-light font-bodyFont">
                  Interested in collaborating for your next project or event? Let's talk.
                </p>
                <button
                  onClick={() => {
                    if (setSelectedSubject) {
                      setSelectedSubject(`Inquiry: ${activeService.title}`);
                    }
                    setActiveService(null);
                    scroller.scrollTo("contact", {
                      duration: 500,
                      delay: 0,
                      smooth: "easeInOutQuark",
                      offset: -70
                    });
                  }}
                  className="w-full md:w-auto px-6 py-3 rounded-lg border border-designColor hover:bg-designColor hover:text-[#090A0C] text-xs font-semibold uppercase tracking-wider text-designColor transition-all duration-300 font-bodyFont"
                >
                  Book This Service
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Features

import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { resourcesData } from "./data/resourcesData";
import { MdClose } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/notfound/NotFound";

function App() {
  const [selectedSubject, setSelectedSubject] = React.useState("");
  const [activeResource, setActiveResource] = React.useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Lock scrolling when a footer resource detail page is active
  React.useEffect(() => {
    if (activeResource) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeResource]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="w-full h-auto bg-bodyColor text-lightText px-4 relative overflow-x-hidden">
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-designColor origin-left z-[100]"
              style={{ scaleX }}
            />
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
              <Banner />
              <Features setSelectedSubject={setSelectedSubject} />
              <Projects />
              <Resume />
              <Testimonial />
              <Contact selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
              <Footer setActiveResource={setActiveResource} />
              <FooterBottom />
            </div>

            {/* Footer Resources Page Overlays */}
            <AnimatePresence>
              {activeResource && resourcesData[activeResource] && (() => {
                const res = resourcesData[activeResource];
                return (
                  <>
                    {/* Overlay Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setActiveResource(null)}
                      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[1000] cursor-pointer"
                    />
                    {/* Document Modal */}
                    <motion.div
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="fixed top-4 bottom-4 left-4 right-4 md:top-10 md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:max-w-3xl bg-[#090A0C] border border-white/10 rounded-2xl z-[1001] shadow-2xl p-6 md:p-10 flex flex-col justify-between overflow-y-auto cursor-default font-bodyFont"
                    >
                      {/* Header Block */}
                      <div className="flex justify-between items-start border-b border-white/5 pb-6">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-semibold font-titleFont text-white italic">
                            {res.title}
                          </h2>
                          <p className="text-xs text-gray-400 mt-2 font-light">
                            Last Updated: {res.lastUpdated}
                          </p>
                        </div>
                        <button
                          onClick={() => setActiveResource(null)}
                          className="w-10 h-10 border border-white/10 hover:border-designColor/50 bg-white/[0.02] text-gray-400 hover:text-designColor flex justify-center items-center rounded-full text-2xl transition-all duration-300"
                        >
                          <MdClose />
                        </button>
                      </div>

                      {/* Content Block */}
                      <div className="flex flex-col gap-6 my-6 overflow-y-auto pr-2 flex-grow">
                        {res.sections.map((section, index) => (
                          <div key={index} className="flex flex-col gap-2">
                            <h3 className="text-lg font-medium text-designColor font-titleFont">
                              {section.heading}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed whitespace-pre-line">
                              {section.content}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Footer Action Block */}
                      <div className="border-t border-white/5 pt-6 flex justify-end">
                        <button
                          onClick={() => setActiveResource(null)}
                          className="px-6 py-2.5 rounded-lg border border-designColor hover:bg-designColor hover:text-[#090A0C] text-xs font-semibold uppercase tracking-wider text-designColor transition-all duration-300 font-bodyFont"
                        >
                          Close Document
                        </button>
                      </div>
                    </motion.div>
                  </>
                );
              })()}
            </AnimatePresence>
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

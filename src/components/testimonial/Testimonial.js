import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne, testimonialTwo, quote } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-10 border border-white/10 hover:border-designColor/50 bg-white/[0.02] text-gray-400 hover:text-designColor flex justify-center items-center rounded-full text-xl cursor-pointer absolute top-auto bottom-[-64px] right-[calc(50%-45px)] mdl:top-0 mdl:bottom-auto mdl:right-0 z-10 transition-all duration-300"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-10 border border-white/10 hover:border-designColor/50 bg-white/[0.02] text-gray-400 hover:text-designColor flex justify-center items-center rounded-full text-xl cursor-pointer absolute top-auto bottom-[-64px] left-[calc(50%-45px)] mdl:top-0 mdl:bottom-auto mdl:right-14 mdl:left-auto z-10 transition-all duration-300"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div>
        <ul className="flex gap-3 justify-center mt-8">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
          i === dotActive ? "bg-designColor w-6" : "bg-white/20 hover:bg-white/40"
        }`}
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b border-white/5 font-bodyFont"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-16 mdl:pb-0">
        <Slider {...settings}>
          {/* ================ Slider One ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6 lgl:gap-10">
              <div className="w-full lgl:w-[35%] bg-white/[0.01] border border-white/5 p-6 rounded-2xl flex flex-col gap-6 justify-center items-center">
                <img
                  className="w-full h-72 rounded-xl object-cover border border-white/10"
                  src={testimonialOne}
                  alt="Michael Tetteh Doku"
                />
                <div className="w-full flex flex-col text-center mt-2">
                  <p className="text-xs uppercase text-designColor tracking-wider font-semibold mb-1">
                    Curious Minds Ghana
                  </p>
                  <h3 className="text-xl font-normal font-titleFont text-white italic">Michael Tetteh Doku</h3>
                  <p className="text-sm font-light text-gray-400 mt-1">
                    Communications and Advocacy Manager
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] flex flex-col justify-between gap-4">
                <div className="flex justify-between items-center">
                  <img className="w-12 opacity-45" src={quote} alt="quote" />
                </div>
                <div className="w-full bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-lg">
                  <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center pb-4 border-b border-white/5">
                    <div>
                      <h3 className="text-lg font-medium text-white font-bodyFont">
                        Curious Minds Ghana
                      </h3>
                    </div>
                    <div className="text-designColor flex gap-1 text-sm">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-300 font-light italic leading-relaxed">
                    "Helena is an exceptional communications professional with a unique ability to craft compelling narratives that resonate with diverse audiences. Her creativity, strategic thinking, 
                    and attention to detail consistently elevated our communications campaigns, while her collaborative spirit made her a pleasure to work with. 
                    I highly recommend her for any role requiring expertise in communications, media and engagement."
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6 lgl:gap-10">
              <div className="w-full lgl:w-[35%] bg-white/[0.01] border border-white/5 p-6 rounded-2xl flex flex-col gap-6 justify-center items-center">
                <img
                  className="w-full h-72 rounded-xl object-cover border border-white/10"
                  src={testimonialTwo}
                  alt="Daniella Annam"
                />
                <div className="w-full flex flex-col text-center mt-2">
                  <p className="text-xs uppercase text-designColor tracking-wider font-semibold mb-1">
                    Get Out Of Depression
                  </p>
                  <h3 className="text-xl font-normal font-titleFont text-white italic">Daniella Annam</h3>
                  <p className="text-sm font-light text-gray-400 mt-1">
                    President
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] flex flex-col justify-between gap-4">
                <div className="flex justify-between items-center">
                  <img className="w-12 opacity-45" src={quote} alt="quote" />
                </div>
                <div className="w-full bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-lg">
                  <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center pb-4 border-b border-white/5">
                    <div>
                      <h3 className="text-lg font-medium text-white font-bodyFont">
                        GOOD Foundation
                      </h3>
                    </div>
                    <div className="text-designColor flex gap-1 text-sm">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-300 font-light italic leading-relaxed">
                    "Working with Helena Amoah at Get Out of depression foundation as the team lead has been an impactful moment. 
                    She is selfless adaptable and a team player. She also has a holistic I can do spirit that inspires others to do more and achieve the purpose. 
                    She is always on course to bring new and innovative ideas on board and carry out task effectively. 
                    Her proactive approach and skills in carrying out project led her of being the face of GOOD foundation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial

import React, { useState } from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import { motion } from "framer-motion";
import confetti from 'canvas-confetti';
import { FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: ""
  });

  const fireConfetti = () => {
    const colors = ['#be8c6c', '#d4b08c', '#ffffff', '#e2e8f0'];
    
    // Primary burst
    confetti({
      particleCount: 140,
      spread: 90,
      startVelocity: 45,
      origin: { y: 0.6 },
      colors: colors,
      zIndex: 9999
    });

    // Follow-up stream for 900ms
    const end = Date.now() + 900;
    (function frame() {
      if (Date.now() > end) return;
      
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        startVelocity: 55,
        origin: { x: 0, y: 0.8 },
        colors: colors,
        zIndex: 9999
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        startVelocity: 55,
        origin: { x: 1, y: 0.8 },
        colors: colors,
        zIndex: 9999
      });

      requestAnimationFrame(frame);
    }());
  };

  // ========== Validation Helpers ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const phoneValidation = (num) => {
    const cleaned = num.replace(/[\s\-()]/g, "");
    return /^\+?[0-9]{7,15}$/.test(cleaned);
  };

  const handleInputChange = (field, value) => {
    if (field === 'username') setUsername(value);
    if (field === 'phoneNumber') setPhoneNumber(value);
    if (field === 'email') setEmail(value);
    if (field === 'subject') setSubject(value);
    if (field === 'message') setMessage(value);

    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    let tempErrors = {
      username: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: ""
    };
    let isValid = true;

    if (!username.trim()) {
      tempErrors.username = "Username is required!";
      isValid = false;
    }
    
    if (!phoneNumber.trim()) {
      tempErrors.phoneNumber = "Phone number is required!";
      isValid = false;
    } else if (!phoneValidation(phoneNumber)) {
      tempErrors.phoneNumber = "Give a valid Phone Number (e.g. +233...)!";
      isValid = false;
    }

    if (!email.trim()) {
      tempErrors.email = "Please give your Email!";
      isValid = false;
    } else if (!emailValidation(email)) {
      tempErrors.email = "Give a valid Email!";
      isValid = false;
    }

    if (!subject.trim()) {
      tempErrors.subject = "Please give your Subject!";
      isValid = false;
    }

    if (!message.trim()) {
      tempErrors.message = "Message is required!";
      isValid = false;
    }

    setErrors(tempErrors);

    if (isValid) {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      fireConfetti();
      setIsSubmitted(true);
    }
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    setSuccessMsg("");
    setUsername("");
    setPhoneNumber("");
    setEmail("");
    setSubject("");
    setMessage("");
    setErrors({
      username: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b border-white/5 font-bodyFont"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6 lgl:gap-10">
          <ContactLeft />
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="w-full lgl:w-[60%] bg-white/[0.01] border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col gap-6 shadow-lg justify-center min-h-[450px]"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col justify-center items-center gap-6 py-12 px-6 text-center"
              >
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex justify-center items-center text-4xl shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                  <FiCheckCircle className="animate-bounce" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold font-titleFont text-white italic">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed">
                    {successMsg}
                  </p>
                </div>
                <button
                  onClick={handleSendAnother}
                  className="mt-4 px-8 py-3 rounded-lg border border-designColor/30 hover:border-designColor text-xs font-semibold uppercase tracking-wider text-designColor hover:bg-designColor hover:text-[#090A0C] transition-all duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form className="w-full flex flex-col gap-4 lgl:gap-6">
                <div className="w-full flex flex-col lgl:flex-row gap-6">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                      Your name
                    </p>
                    <input
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      value={username}
                      className={`${
                        errors.username
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10"
                      } contactInput`}
                      type="text"
                    />
                    {errors.username && (
                      <p className="text-rose-400 text-xs mt-1 font-medium pl-1">
                        {errors.username}
                      </p>
                    )}
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                      Phone Number
                    </p>
                    <input
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      value={phoneNumber}
                      className={`${
                        errors.phoneNumber
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10"
                      } contactInput`}
                      type="text"
                    />
                    {errors.phoneNumber && (
                      <p className="text-rose-400 text-xs mt-1 font-medium pl-1">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Email
                  </p>
                  <input
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    value={email}
                    className={`${
                      errors.email
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                        : "border-white/10"
                    } contactInput`}
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-xs mt-1 font-medium pl-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Subject
                  </p>
                  <input
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    value={subject}
                    className={`${
                      errors.subject
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                        : "border-white/10"
                    } contactInput`}
                    type="text"
                    />
                    {errors.subject && (
                      <p className="text-rose-400 text-xs mt-1 font-medium pl-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                      Message
                    </p>
                    <textarea
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      value={message}
                      className={`${
                        errors.message
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10"
                      } contactTextArea`}
                      cols="30"
                      rows="6"
                    ></textarea>
                    {errors.message && (
                      <p className="text-rose-400 text-xs mt-1 font-medium pl-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full mt-2">
                    <button
                      onClick={handleSend}
                      className="w-full h-12 rounded-lg border border-designColor/30 hover:border-designColor text-xs font-semibold uppercase tracking-wider text-designColor hover:bg-designColor hover:text-[#090A0C] transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact

import React from "react";
import photo from "../assets/girl.gif";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";
import video from "../assets/video11.mp4";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Social from "./Social";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Hero = () => {
  return (
    <div
      id="hero"
      className=" h-100 w-full text-white flex flex-col items-center justify-between pt-10 md:pt-8 md:mb-32  "
    >
      <video
        id="background-video"
        src={video}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      ></video>
      <div className=" h-full z-10 flex flex-col items-center justify-center w-full  px-8 py-20 sm:px-4  md:px-8 lg:px-16 bg-black bg-opacity-0 lg:flex-row lg:gap-36">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.h1
            className="font-extrabold text-4xl sm:text-5xl  "
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Hey, <span className="text-red-500">I am Debparna Ghatak</span>
          </motion.h1>
          <motion.h3
            className="font-semibold text-xl sm:text-2xl mb-6 h-14"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.5 }}
          >
            <Typewriter
              words={[
                "A Full Stack Developer",
                "A JavaScript Enthusiast",
                "A Problem Solver",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h3>
          <div className="flex gap-4 items-center justify-center mt-8 sm:mt-2">
            <Link to="https://github.com/dg2102" target="_blank">
              <button className="p-3 bg-red-700 rounded-full shadow-lg hover:bg-red-800 transition duration-300">
                GitHub
              </button>
            </Link>
            <Link to={resume} target="_blank" rel="noopener noreferrer">
              <button className="p-3 bg-red-700 rounded-full shadow-lg hover:bg-red-800 transition duration-300">
                Resume
              </button>
            </Link>
          </div>
          <Social/>
        </div>
        <div className="flex justify-center items-center mt-12">
          <img
            src={photo}
            alt="Debparna Ghatak"
            className="w-60 h-60 sm:w-48 sm:h-48 md:w-80 md:h-80  lg:w-96 lg:h-96 rounded-full shadow-2xl  border-gray-700"
          />
        </div>
      </div>
    
    </div>
  );
};

export default Hero;

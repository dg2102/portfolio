import React, { useState, useRef, useEffect } from "react";
import image from "./../assets/my-image.jpeg";
import { motion } from "framer-motion";

const About = () => {
  const [open, setOpen] = useState(false);
  const readMoreRef = useRef(null);

  useEffect(() => {
    if (open && readMoreRef.current) {
      readMoreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [open]);

  return (
    <div  id="about"className=" bg-gradient-to-r from-black via-gray-900 to-black min-h-100 md:pb-32 md:pt-48">
      <div className="about mx-auto w-11/12 md:w-3/4 lg:w-2/3 sm:pt-8 ">
        <div className="border p-6 md:p-10 border-indigo-600 flex flex-col md:flex-col md: gap-6 md:justify-center md:items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.6)] rounded-tl-3xl rounded-br-3xl text-white lg:flex-row ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6 md:mb-0 md:w-full lg:w-1/2"
          >
            <img src={image} alt="image" className="w-64 h-64 md:w-80 md:h-80 " />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 mt-5"
          >
            <h1 className="text-3xl md:text-4xl font-semibold">
              About
              <span className="text-3xl md:text-4xl font-semibold text-pink-500 ml-1">
                Me
              </span>
            </h1>
            <p className="mt-6 text-lg">
              Hello! I'm Debparna
              <br />
              a third-year undergraduate student with a passion for Full Stack
              Development, particularly the MERN stack (MongoDB, Express.js,
              React, and Node.js). As an enthusiastic learner, I'm constantly
              exploring new technologies and keeping up with the latest trends
              in web development.
            </p>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden"
              ref={readMoreRef}
            >
              <p className="mt-6 text-lg">
                My journey in tech started with a curiosity for how websites are
                built, which quickly grew into a deep passion for creating
                functional and user-friendly web applications. I thrive on
                challenges and am dedicated to continuously improving my skills,
                whether working on collaborative projects or individual
                assignments. I'm excited about the future and the endless
                possibilities in the tech world. I completed my class 10th from
                Kendriya Vidyalaya Barrackpore (Army) with 92.8% in 2019 and
                class 12th with 83.8% in 2021. Currently, I am pursuing my B.Tech
                from B.P PODDAR INSTITUTE OF MANAGEMENT AND TECHNOLOGY, KOLKATA,
                and my overall CGPA is 8.24.
              </p>
            </motion.div>
            <button
              onClick={() => setOpen(!open)}
              className="bg-pink-500 p-2 mt-4 rounded-lg hover:bg-pink-600"
            >
              {open ? "Read less" : "Read more"}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

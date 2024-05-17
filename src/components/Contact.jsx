import React from "react";
import { motion } from "framer-motion";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black px-4 sm:px-6 lg:px-10 py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl p-4 text-center lg:mr-32 font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent heading mb-8 ">
          Contact me.
        </h1>
        <div className="contact-section flex flex-col lg:flex-row justify-evenly items-center  ">
          <form type="submit" className="w-full lg:w-1/4  mb-9 lg:mb-0 mx-auto">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-4 focus:ring-pink-500"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 150 }}
              transition={{ duration: 0.25 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-4 focus:ring-pink-500"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 200 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-4 focus:ring-pink-500"
                id="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </motion.div>
            <div className="text-center rounded-lg bg-pink-500 hover:bg-pink-700 flex justify-center w-fit items-center mx-auto focus:outline-none focus:ring-2 focus:ring-pink-50">
              <button
                type="button"
                className="text-white font-bold py-2 px-2 rounded"
              >
                Send
              </button>
              <CiLocationArrow1 className="text-2xl text-white font-extrabold" />
            </div>
          </form>

          <div className="map w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118334.61329423003!2d88.26476012703966!3d22.535576497912906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715693436102!5m2!1sen!2sin"
              className="w-full h-80 lg:h-96 lg:w-3/4 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

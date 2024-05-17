// import React from 'react';
 import { FaLinkedin, FaGithubSquare, FaInstagram, FaFacebook,FaGithub  } from "react-icons/fa";
 import { Link } from 'react-router-dom';
const Social = () => {
  return (
    <div>
      <div className='w-full h-full text-white flex flex-row  gap-8 lg:mt-6'>
        
      <a
            href="https://www.linkedin.com/in/debparna-ghatak-a08645200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl duration-200 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/dg2102"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl duration-200 hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/debparnaghatak/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl duration-200 hover:text-blue-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/debporna.ghatak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl duration-200 hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          
          
      </div>
    </div>
  );
};

export default Social;


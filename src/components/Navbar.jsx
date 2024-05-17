import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


const Navbar = () => {
 
  const top_offset=50;
  const [showOption,setShowOption]= useState(false)
  const [showBackground, setShowBackground] = useState(false);
   const showMenu=()=>{
    
   
   }
  const scrollOffset=()=>{
    if(window.scrollY>= top_offset){
      setShowBackground(true);
    }else{
      setShowBackground(false);
    }
    
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollOffset);
    return () => {
      window.removeEventListener("scroll", scrollOffset);
    };
  }, []);
  return (
    <div className="mx-auto flex items-center justify-center relative  ">
      <div className={` h-12 w-full flex fixed top-0 justify-between align-middle items-center ${showBackground ? "bg-black shadow-[0_10px_20px_rgba(240,_46,_170,_0.4)]" : "bg-base-200 shadow-[0_20px_50px_rgba(8,_112,_184,_0.6)]" } rounded-full mx-auto px-16  z-40  border-none text-white  `}>
        <div className="logo">
         <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
         <h1 className="mb-5 font-bold text-xl"> PORTFOLIO<span className="text-5xl font-bold text-pink-500  ">.</span></h1></ScrollLink> 
        </div>
        <div className="links hidden gap items-center sm:hidden md:block">
         {/* <div className="flex mr-2">
           
          <IoSunny onClick={()=>{
            setTheme(!theme)
            console.log(theme)
          }} className={`text-2xl cursor-pointer `}/></div> */}
          <ScrollLink to="about" className=" w-20 h-fit p-2 text-center px-2 rounded-xl duration-300 ease-in-out hover:bg-red-600 font-bold mr-2 cursor-pointer"  smooth={true}
            duration={500}>About</ScrollLink>
            <ScrollLink to="skills" className=" w-20 h-fit p-2 text-center px-2 rounded-xl duration-300 ease-in-out hover:bg-red-600 font-bold mr-2 cursor-pointer" smooth={true}
            duration={500}>Skills</ScrollLink>
            <ScrollLink
            to="experience"
            className=" w-20 h-fit p-2 text-center px-2 rounded-xl duration-300 ease-in-out hover:bg-red-600 font-bold cursor-pointer"
            smooth={true}
            duration={500}
          >
            Experience
          </ScrollLink>
          <ScrollLink to="projects" className=" w-20 h-fit p-2 text-center px-2 rounded-xl duration-300 ease-in-out hover:bg-red-600 font-bold mr-2 cursor-pointer" smooth={true}
            duration={500} >Projects</ScrollLink>
          
          
          <ScrollLink
            to="contact"
            className=" w-20 h-fit p-2 text-center px-2 rounded-xl duration-300 ease-in-out hover:bg-red-600 font-bold cursor-pointer"
            smooth={true}
            duration={500}
          >
            Contact
          </ScrollLink>
          
        </div>
        
        {/* for mobile view */}
        <div className="  hamburger sm:block text-2xl md:hidden suration:300 " onClick={()=>setShowOption(!showOption)} >
        {showOption? <ImCross className="text-xl"/>:<GiHamburgerMenu />}

{showOption &&(
  
  <div className="absolute w-80 h-screen top-20 right-0 gap-3 flex flex-col pt-20 bg-black shadow-lg text-xl transition-all duration-500">
   <ScrollLink
    to="hero"
    className="text-pink-500 font-bold text-center p-4 transition duration-300 ease-in-out cursor-pointer"
    smooth={true}
    duration={500}
    onClick={() => setShowOption(false)}
  >
    HOME
  </ScrollLink>
  <ScrollLink
    to="about"
    className="text-pink-500 font-bold text-center p-4 transition duration-300 ease-in-out cursor-pointer"
    smooth={true}
    duration={500}
    onClick={() => setShowOption(false)}
  >
    ABOUT
  </ScrollLink>
  <ScrollLink
    to="skills"
    className="text-pink-500 font-bold text-center p-4 transition duration-300 ease-in-out cursor-pointer"
    smooth={true}
    duration={500}
    onClick={() => setShowOption(false)}
  >
    SKILLS
  </ScrollLink>
  <ScrollLink
    to="experience"
    className="text-pink-500 font-bold text-center p-4 transition duration-300 ease-in-out cursor-pointer"
    smooth={true}
    duration={500}
    onClick={() => setShowOption(false)}
  >
    EXPERIENCE
  </ScrollLink>
  <ScrollLink
    to="projects"
    className="text-pink-500 font-bold text-center p-4  transition duration-300 ease-in-out cursor-pointer"
    smooth={true}
    duration={500}
    onClick={() => setShowOption(false)}
  >
    PROJECTS
  </ScrollLink>
  <ScrollLink
    to="contact"
    className="text-pink-500 font-bold text-center p-4  transition duration-300 ease-in-out cursor-pointer"
    smooth={true}
    duration={500}
    onClick={() => setShowOption(false)}
  >
    CONTACT
  </ScrollLink>
  
</div>
)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

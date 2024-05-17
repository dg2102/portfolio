import React from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
const date= new Date(Date.now());
const date2= date.toUTCString().slice(0,16);


const Footer = () => {
  function toTop(){
  //   document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0;
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  }
  return (
    <div id="footer" className='w-full h-40 bg-gradient-to-r from-black via-gray-900 to-black text-white flex justify-center items-end relative  '>
      <footer className=' text-center mb-8 w-3/4 md:w-full'>
        <h1>Made with ❤ by <span className=' text-pink-500'>Debparna Ghatak</span>  {date2} </h1>
      </footer>
      <FaArrowAltCircleUp  onClick={toTop} className='absolute right-5 bottom-8 text-3xl font-bold cursor-pointer md: right-10 '/>
    </div>
  )
}

export default Footer

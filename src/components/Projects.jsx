import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import img1 from "../assets/dscbppimt.png";
import img2 from "../assets/amazon.png";
import img3 from "../assets/ecom.png";
import img4 from "../assets/music.png";
import img5 from "../assets/weather2.png";
import img6 from "../assets/Bookstore.png";

const Projects = () => {
    const projects = [
        { id: 1, img: `${img1}`, title: "DSC-Bppimt website", TechStack: "Html,Css,Javascript", github:"https://github.com/dg2102/updated-gdsc", link:"https://google-dsc-bppimt.netlify.app/" },
        { id: 2, img: `${img2}`, title: "Amazon-clone", TechStack: "Html,Css",github:"https://github.com/dg2102/Amazon-clone", link:"https://dg2102.github.io/Amazon-clone/" },
        { id: 3, img: `${img3}`, title: "E-com store", TechStack: "React-js, tailwind CSS,API" ,github:"https://github.com/dg2102/React-js-e-commerce", link:"https://react-js-e-commerce-cyan.vercel.app/"},
        { id: 4, img: `${img4}`, title: "Musically", TechStack: "Html,Css,Javascript" ,github:"https://github.com/dg2102/Music-app", link:"https://music-app-ten-dusky.vercel.app/"},
        { id: 5, img: `${img5}`, title: "Weather-tracker", TechStack: "Html,Css,Javascript" ,github:"https://github.com/dg2102/weather-tracking", link:"https://dg2102.github.io/weather-tracking/"},
        { id: 5, img: `${img6}`, title: "BookStore", TechStack: "React js,Mongodb,Express js,Nods-js,Tailwind Css" ,github:"https://github.com/dg2102/Bookstore_app", link:""}
    ]

    return (
        <div id="projects" className='bg-gradient-to-r from-black via-gray-900 to-black min-h-100 md:pb-32 '>
            <h1 className="text-4xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent heading pt-20">Projects</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
                {projects.map((value) => (
                    <div key={value.id} className="relative group bg-white  rounded-lg overflow-hidden hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.6)]">
                        <img src={value.img} alt={value.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h1 className="text-xl font-bold mb-2">{value.title}</h1>
                            <h2 className="text-gray-700">{value.TechStack}</h2>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-end justify-center  text-white p-4">
                            <div className="text-center transform translate-y-80 group-hover:-translate-y-20 transition duration-300">
                              
                              
                                <div className="flex space-x-4 justify-center">
                                    <Link to={value.github} target="_blank" className='px-4 py-2 bg-blue-500 rounded'><FaGithub className='text-3xl'/></Link>
                                    <Link to={value.link}  target="_blank"  className="px-4 py-2 bg-gray-500 rounded"><FaLink className='text-3xl '/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;

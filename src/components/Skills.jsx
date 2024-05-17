import React from "react"
import { motion } from "framer-motion"

const skills=[
    {
        "id":1,
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png",
        "title":"HTML"
    },
    {
        "id":2,
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817",
        "title":"CSS"
    },
    {
        "id":3,
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902",
        "title":"JS"
    },
    {
        "id":4,
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png",
        "title":"REACT JS"
    }
    ,{
        "id":5,
        "img":"https://www.svgrepo.com/show/376337/node-js.svg",
        "title":"NODE JS"
    }
    ,{
        "id":6,
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UjcLPDK4WzyRPZQN8O8pGC03J2lU5d5MVIVbrSVzhA&s",
        "title":"EXPRESS JS"
    }
    ,{
        "id":7,
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png",
        "title":"BOOTSTRAP"
    },
    {
        "id":8,
        "img":"https://www.svgrepo.com/show/331488/mongodb.svg",
        "title":"MONGO DB"
    },
    {
        "id":9,
        "img":"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
        "title":"Github"
    },
    {
        "id":10,
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
        "title":"C++"
    },
    {
        "id":11,
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png",
        "title":"Python"
    },
    {
        "id":12,
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        "title":"Tailwind Css"
    }
]

const Skills = () => {
  return (
    <div id="skills"  className='bg-gradient-to-r from-black via-gray-900 to-black '>

        <div  className=" skill-bg h-92 container mx-auto px-10 text-white text-center pb-20 "> 
        <h1 className="text-4xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent heading mb-8   ">Skills</h1>
        <div className="flex justify-evenly gap-10 ">
        <div className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-10  ">
            {skills.map((value)=>

            <motion.div 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0,y:100}}
            transition={{duration:0.8}}
            viewport={{ once: true }}
             
             key={value.id} className="h-32  m-2  text-emerald-50 text-center flex flex-col justify-center items-center w-fit ">
               <img  src={value.img} alt="" className="h-28 w-32"/>
               <h1 className="text-center">{value.title}</h1>
            </motion.div>
            )}
            
        </div>
        </div>
       
        </div>
     
    </div>
  )
}

export default Skills

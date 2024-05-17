import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
const Experience = () => {
  return (
    <div  id ="experience"className=' bg-gradient-to-r from-black via-gray-900 to-black min-h-100 pt-16 md:pb-24'>
          <h1 className="text-4xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent heading mb-6  ">Experience</h1>
        <VerticalTimeline >
    
    
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
    
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<MdOutlineWork />}
    >
      <h3 className="vertical-timeline-element-title text-3xl"> NSCC BPPIMT</h3>
      <h4 className="vertical-timeline-element-subtitle">PR and marketing core</h4>
      <p>
      2022-2023
      </p>
    </VerticalTimelineElement>
   
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
    
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<MdOutlineWork />}
    >
      <h3 className="vertical-timeline-element-title text-3xl"> DSC-BPPIMT</h3>
      <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
      <p>
        2023-2024
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
     
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<MdOutlineWork />}
    >
      <h3 className="vertical-timeline-element-title text-3xl">TechStorm 2.24(Technical fest)</h3>
      <h4 className="vertical-timeline-element-subtitle">Sponsor Joint Coordinator</h4>
      <p>
        2024
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<MdOutlineWork />}
    >
      <h3 className="vertical-timeline-element-title text-3xl"> SSOC-24(Social Summer of Code)</h3>
      <h4 className="vertical-timeline-element-subtitle">Contributor</h4>
      <p>
      2024
      </p>
    </VerticalTimelineElement>
    
  </VerticalTimeline>
    
    </div>
    
    
  )
}

export default Experience

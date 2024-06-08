import React from 'react'
import Common from './Common'
import ProjectsList from './ProjectList'
import Porject1 from '../assets/project.png'

const Project = [
  {
    title: "VideoRandor Platform",
    image: Porject1,
    gitLink: "https://github.com/priy-am/YoutubeClone",
    vistLink:"https://anyoutube.netlify.app/",
    about:"Videorandor Platform made by ytAPI, tailwind, react+vite"
  },
  {
    title: "VideoRandor Platform",
    image: Porject1,
    gitLink: "https://github.com/priy-am/YoutubeClone",
    vistLink:"https://anyoutube.netlify.app/",
    about:"Videorandor Platform made by ytAPI, tailwind, react+vite"
  },
]

const Projects = () => {
  return (
    <div id='Projects'>
      <Common text={"Projects"} />
<div className='text-center text-lg mb-4 '>these are dummy project .... project are comming soon</div>
      <div className='md:px-12 px-1 md:m-0 mt-16'>
        <ProjectsList projects={Project} />
      </div>
    </div>
  )
}

export default Projects

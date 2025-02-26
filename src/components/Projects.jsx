import React from 'react'
import Common from './Common'
import ProjectsList from './ProjectList'
import Porject1 from '../assets/project.png'
import chatpage from '../assets/chat-home.png'
import blog from '../assets/blog.png'

const Project = [
  {
    title: "ChatApp",
    image: chatpage,
    gitLink:"https://github.com/priy-am/ChatApp",
    vistLink:"https://chat-app-xi-rust.vercel.app/",
    about:"I developed a real-time chat application using Next.js, Clerk for authentication, and GetStream for messaging"
  },
  {
    title: "Blog- Markdown",
    image: blog,
    gitLink:"https://github.com/priy-am/n-blog",
    vistLink:"https://blog-blush-phi-61.vercel.app/",
    about:"Built with Next.js and optimized for performance."
  },
]

const Projects = () => {
  return (
    <div id='Projects'>
      <Common text={"Projects"} />

      <div className='md:px-12 px-1 md:m-0 mt-16'>
        <ProjectsList projects={Project} />
      </div>
    </div>
  )
}

export default Projects

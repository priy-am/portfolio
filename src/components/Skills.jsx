import React, { useRef } from 'react'
import Common from './Common'
import { TfiHtml5 } from "react-icons/tfi";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoNodejs } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import ScrollAnimation from 'react-animate-on-scroll';
import { motion, useInView } from "framer-motion"


const Skill = [
  {
    name: "HTML",
    icon: <TfiHtml5 size={"70px"} />,
    color: "text-red-800"
  },
  {
    name: "CSS",
    icon: <SiCss3 size={"70px"} />,
    color: "text-blue-800"
  },
  {
    name: "JS",
    icon: <SiJavascript size={"70px"} />,
    color: "text-yellow-500"
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={"70px"} />,
    color: "text-blue-800"
  },
  {
    name: "React",
    icon: <RiReactjsLine size={"70px"} />,
    color: "text-sky-600"
  },
  {
    name: "Nodejs",
    icon: <BiLogoNodejs size={"70px"} />,
    color: "text-lime-600"
  },
  {
    name: "Expressjs",
    icon: <SiExpress size={"70px"} />,
    color: "text-black dark:text-white"
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={"70px"} />,
    color: "text-green-800"
  },
  {
    name: "Nextjs",
    icon: <TbBrandNextjs size={"70px"} />,
    color:"text-black dark:text-white"

  },
  {
    name: "Git",
    icon: <FaGitAlt size={"70px"} />,
    color: "text-orange-600"
  },
]

function Section({ name, icon, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>

      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }}
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.4 }}
        whileInView={{ opacity: 1 }} className={`group  rounded-xl h-44 min-w-24 border border-hoverSecondary flex flex-col gap-6 items-center justify-center  ${color}`}>{icon}
        <div className='font-semibold hidden group-hover:block'>{name}</div>
      </motion.div>
    </section>
  );
}

const Skills = () => {

  return (
    <div id='Skills'>
      <Common text={"Skills"} />
        <div className='grid md:grid-cols-4 grid-cols-2 justify-center items-center md:px-52 px-7 gap-7 md:m-0 mt-10'>

          {
            Skill.map((value)=>{
              return <Section key={value.name} name={value.name} icon={value.icon} color={value.color}/>
            })
          }

        </div>

    </div >
  )
}

export default Skills

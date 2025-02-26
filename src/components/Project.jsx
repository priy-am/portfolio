// src/components/Project.js
import React, { useRef, useEffect } from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";

const Project = ({ title, image, gitLink, vistLink, about }) => {

  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log(gitLink, vistLink);

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <motion.div ref={ref} initial="hidden"
      animate={control} style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }} className="border group relative  p-4 rounded-xl shadow-lg dark:shadow-footer mb-4">
      <h2 className="text-xl dark:text-primary-light font-bold mb-2">{title}</h2>
      <img src={image} alt={title} className="w-full mb-2" />
      <div className='absolute hidden group-hover:flex flex-col gap-6 text-primary-light justify-center items-center top-0 w-full h-full left-0 bg-opacity-50 rounded-xl  bg-black z-10 ease-in-out '>
        <div className='about md:text-2xl text-lg font-semibold px-9 '>{about}</div>
        <div className='icons flex justify-center items-center gap-10'>
          <span className='hover:text-hoverSecondary'><a href={gitLink} target="_blank" rel="noopener noreferrer" ><IoLogoGithub className='md:size-[43px] size-[37px]' /></a></span>
          <span className='hover:text-hoverSecondary'><a href={vistLink} target="_blank" rel="noopener noreferrer" ><FaRegEye className='md:size-[43px] size-[37px]' /></a></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;

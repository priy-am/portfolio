import React, { useRef, useEffect } from 'react'
import Common from './Common'
import priyam from '../assets/priyAi.jpeg'
import Reume from '../assets/Priyam-resume-1.pdf'
import { FaDownload } from "react-icons/fa6";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
    const control = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, isInView]);

    return (
        <div id='About' >
            <Common text={"About me"} />

            <motion.div ref={ref} initial="hidden"
                animate={control} style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className={`flex mt-5 md:m-0 text-primary-dark dark:text-primary-light  `}>
                <div className="left w-1/2 md:flex hidden justify-center items-center ">
                    <div className="imgback w-80 h-96 bg-footer relative">
                        <img src={priyam} alt="myself" className='absolute  h-96 bottom-9 left-12' />
                    </div>
                </div>
                <div className={`right  md:w-1/2 p-5 flex flex-col gap-7  items-center  pr-10`}>


                    <div className='flex flex-col gap-5 font-mono'>
                        <p className='md:text-lg text-sm'>
                            I am Priyam , a passionate and results-driven individual with a strong background in software development and technology. Currently pursuing bachelor in Computer application
                        </p>
                        <p className='md:text-lg text-sm'>
                            As a self-motivated learner, I excel in dynamic environments, constantly expanding my knowledge in competitive programming and web development. My commitment to excellence is evident in delivering high-quality solutions and proactive problem-solving.
                        </p>
                        <p className='md:text-lg text-sm'>
                            I am excited about the prospect of contributing my technical expertise to innovative projects and furthering my professional growth.
                        </p>
                    </div>

                    <a href={Reume} download="Resume">
                        <motion.button whileTap={{ scale: 0.8 }} className='border-2 flex  justify-center items-center gap-1 border-secondary md:w-80 md:px-0 px-9 py-3 rounded-3xl hover:bg-hoverSecondary font-semibold hover:text-white '>
                            Resume <span><FaDownload /></span>
                        </motion.button>
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default About

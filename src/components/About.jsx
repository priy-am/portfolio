import React, { useRef, useEffect } from 'react'
import Common from './Common'
import Resume from '../assets/Priyam-Resume.pdf'
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

            {/* <motion.div ref={ref} initial="hidden"
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

                    <a href={Resume} download="Resume">
                        <motion.button whileTap={{ scale: 0.8 }} className='border-2 flex  justify-center items-center gap-1 border-secondary md:w-80 md:px-0 px-9 py-3 rounded-3xl hover:bg-hoverSecondary font-semibold hover:text-white '>
                            Resume <span><FaDownload /></span>
                        </motion.button>
                    </a>
                </div>
            </motion.div> */}

            <motion.div ref={ref} initial="hidden"
                animate={control} style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className={`flex mt-5 md:m-0 text-primary-dark dark:text-primary-light  `}>
                <div className='mx-80'>
                    <div className="point"></div>
                    <div className="education flex gap-32 items-center  mb-7">
                        <div className="left font-bold text-3xl ">Education</div>
                        <div className='right '>
                            <div className="flex gap-4 items-center">
                                <div className='font-bold'>J.C Bose University Science and technology </div>
                                <div className='text-gray-600 text-sm'>2023-2026</div>
                            </div>
                            <div className="position text-lg">Bachelor of Computer Application</div>
                        </div>
                    </div>
                    <div className="workExperience flex gap-36 ">
                        <div className="left font-bold text-2xl ">Work Experience</div>
                        <div className='right'>
                            <div className=" flex gap-4 items-center">
                                <div className='font-semibold text-lg'>Jarurat Care Foundation!</div>
                                <div className='text-gray-600 text-sm'>sep-2024 jan-2025</div>
                            </div>
                            <div className="position text-lg ">Web Development</div>
                            <div className="content">
                                <ul className='' style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                                    <li style={{ position: 'relative', paddingLeft: '20px' }}>
                                        <span style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '6px', backgroundColor: 'black', borderRadius: '50%' }}></span>
                                        Developed and maintained the company website
                                    </li>
                                    <li style={{ position: 'relative', paddingLeft: '20px' }}>
                                        <span style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '6px', backgroundColor: 'black', borderRadius: '50%' }}></span>
                                        Developed and maintained dynamic web pages using React, Tailwind CSS, and JavaScript to enhance user interaction and engagement.
                                    </li>
                                    <li style={{ position: 'relative', paddingLeft: '20px' }}>
                                        <span style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '6px', backgroundColor: 'black', borderRadius: '50%' }}></span>
                                        Optimized website performance and improved user experience
                                    </li>
                                    <li style={{ position: 'relative', paddingLeft: '20px' }}>
                                        <span style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '6px', backgroundColor: 'black', borderRadius: '50%' }}></span>
                                        Designed and implemented new features
                                    </li>
                                    <li style={{ position: 'relative', paddingLeft: '20px' }}>
                                        <span style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '6px', backgroundColor: 'black', borderRadius: '50%' }}></span>
                                        Contributed to improving the NGO’s website functionality, increasing the ease of use for users seeking support, resulting in improved form submissions and user satisfaction.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-10'>
                        <a href={Resume} download="Resume">
                            <motion.button whileTap={{ scale: 0.8 }} className='border-2 flex  justify-center items-center gap-1 border-secondary md:w-80 md:px-0 px-9 py-3 rounded-3xl hover:bg-hoverSecondary font-semibold hover:text-white '>
                                Resume <span><FaDownload /></span>
                            </motion.button>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About

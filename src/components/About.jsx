import React, { useRef, useEffect } from 'react';
import Common from './Common';
import Resume from '../assets/Priyam-Resume.pdf';
import { FaDownload } from 'react-icons/fa6';
import { motion, useInView, useAnimation } from 'framer-motion';

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
        <div id='About' className='px-6 md:px-20 lg:px-40 xl:px-80 py-10'>
            <Common text={'About me'} />

            <motion.div 
                ref={ref} 
                initial="hidden" 
                animate={control} 
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                className='text-primary-dark dark:text-primary-light'
            >
                <div>
                    <div className='font-bold text-3xl mb-5'>Education</div>
                    <div className='flex flex-col md:flex-row md:gap-8 items-start md:items-center mb-7'>
                        <div className='font-bold'>J.C Bose University of Science and Technology</div>
                        <div className='text-gray-600 text-sm'>2023-2026</div>
                    </div>
                    <div className='text-lg'>Bachelor of Computer Application</div>
                </div>

                <div className='mt-10'>
                    <div className='font-bold text-2xl mb-5'>Work Experience</div>
                    <div className='flex flex-col md:flex-row md:gap-8 items-start md:items-center'>
                        <div className='font-semibold text-lg'>Zarurat Care Foundation</div>
                        <div className='text-gray-600 text-sm'>Sep 2024 - Jan 2025</div>
                    </div>
                    <div className='text-lg'>Web Development</div>
                    <ul className='list-disc list-inside mt-4 space-y-2'>
                        <li>Developed and maintained the company website</li>
                        <li>Created dynamic web pages using React, Tailwind CSS, and JavaScript</li>
                        <li>Optimized website performance and improved user experience</li>
                        <li>Designed and implemented new features</li>
                        <li>Enhanced website functionality for better user engagement</li>
                    </ul>
                </div>

                <div className='flex justify-center mt-10'>
                    <a href={Resume} download='Resume'>
                        <motion.button 
                            whileTap={{ scale: 0.8 }} 
                            className='border-2 flex items-center gap-2 border-secondary px-6 py-3 rounded-3xl hover:bg-hoverSecondary font-semibold hover:text-white'
                        >
                            Resume <FaDownload />
                        </motion.button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default About;

import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { motion, useScroll, useTransform  } from "framer-motion"

const Common = ({ text }) => {

    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);

    return (
        <div className={`dark:bg-primary-dark mt-24 md:h-44 `}
        >
            <motion.div style={{ scale }} className='flex items-center w-full '>
                    <h1 className={`font-mono text-primary-dark dark:text-primary-light w-[40%] md:text-5xl text-3xl font-semibold md:pl-28 pl-3`}>{text}</h1>
                    <div className='h-[1px] bg-secondary w-[60%]'></div>
                </motion.div>
            <motion.div
                style={{
                    scaleY: scrollYProgress
                }}
            />
        </div>
    )

    // return (
    //     <ScrollAnimation animateIn='fadeIn'>
    //         <div className={`dark:bg-primary-dark mt-24 md:h-44 `}>
    //             <div className='flex items-center w-full '>
    //                 <h1 className={`font-mono text-primary-dark dark:text-primary-light w-[40%] md:text-5xl text-3xl font-semibold md:pl-36 pl-3`}>{text}</h1>
    //                 <div className='h-[1px] bg-secondary w-[60%]'></div>
    //             </div>


    //         </div>
    //     </ScrollAnimation>
    // )
}

export default Common

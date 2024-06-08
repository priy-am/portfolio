import React, { useRef, useEffect } from 'react'
import { Link, Events, animateScroll as scroll } from 'react-scroll';
import { FaAnglesRight } from "react-icons/fa6";
import Header from './Header';
import priyam from '../assets/priyam02.png'
import { ReactTyped } from 'react-typed';
import { PiHandsPrayingFill } from "react-icons/pi";
import { motion, useAnimation, useInView } from "framer-motion";

const First = () => {
    const control = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const Variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
    }

    return (

        <div id='Home'>
            <Header />
            <div className="flex md:flex-row md:h-screen flex-col-reverse justify-center items-center md:px-40  dark:bg-primary-dark">
                <div className={` w-[55%]  flex flex-col justify-center items-center`}>
                    <motion.div ref={ref} initial="hidden"
                        animate={control}
                        variants={Variants} className="content md:block flex flex-col justify-center items-center ">
                        <div className="greeting text-secondary font-bold. text-xl flex items-center gap-1">Namste <span className='text-yellow-600'><PiHandsPrayingFill /></span> everyone</div>
                        <div className={`mySelf font-bold text-center md:text-start md:text-6xl md:m-0 my-2 text-5xl text-primary-dark dark:text-primary-light`}>My Self PIRYAM</div>
                        <div className="text-4xl font-bold mt-3 ">
                            <span className={`text-primary-dark dark:text-primary-light`}>I am  {""}
                                <span className='text-[#5df0a1] '>
                                    <ReactTyped
                                        strings={["a Developer", "Full Stack", "a Student", "from Delhi"]}
                                        typeSpeed={100}
                                        loop
                                        backSpeed={20}
                                        cursorChar="</"
                                        showCursor={true}
                                    />
                                </span>
                            </span>
                            <span className="text-[#5df0a1]">&gt;</span>
                        </div>

                        <Link to='About'
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                            activeClass="text-secondary">
                            <button className="text-white text-lg hover:bg-secondary rounded-full px-4 py-2 md:mt-5 mt-8 flex justify-center items-center gap-1 bg-hoverSecondary">
                                More about me<FaAnglesRight /></button>
                        </Link>
                    </motion.div>

                </div>
                <div className={` w-[45%] flex items-center justify-center  relative`}>

                    <motion.div
                        initial={{ opacity: 0.6 }}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.4 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        whileInView={{ opacity: 1 }}
                        className="profile flex justify-center items-center drop-shadow-[34px_16px_16px_rgba(129,156,246,0.25)] border-[3px] md:border-[8px] bg-footer border-blue-50 aspect-square  overflow-hidden rounded-custom cursor-pointer md:m-0 mt-14 mb-6 animate-[borderShpeChanging_10s_ease-in-out_infinite_alternate-reverse] ">
                        <img src={priyam} className="object-cover  h-full w-full object-top" alt="img" />
                    </motion.div>
                </div>
            </div>


        </div >

    )
}

export default First

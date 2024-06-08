import React, { useState, useEffect } from 'react';
import { Link, Events, animateScroll as scroll } from 'react-scroll';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const Header = () => {
    const content = ["Home", "About", "Skills", "Projects", "Contact"];
    const [activeLink, setActiveLink] = useState('');
    const [DarkMode, setDarkMode] = useState(false)
    const [menuBar, setmenuBar] = useState(false)

    //menubar animation


    //for scroll on id 
    useEffect(() => {
        Events.scrollEvent.register('begin', (to, element) => {
            setActiveLink(to);
        });

        return () => {
            Events.scrollEvent.remove('begin');
        };
    }, );

    //set dark class to html 
    const dark = () => {
        if (DarkMode) {
            document.documentElement.classList.remove("dark")
        } else {
            document.documentElement.classList.add("dark")
        }
    }

    const SetDarkTheme = () => {
        setDarkMode(!DarkMode);
        dark();

    }

    return (
        <>

            <div className='fixed w-full top-0  bg-gradient-to-b from-footer  backdrop-blur-3xl opacity-80 md:p-2 py-1 z-10 shadow-[0px_6px_16px_rgba(129,156,246,0.25)]'>
                <nav className={`flex md:justify-between justify-around md:px-24 items-center h-14 bg-transparent text-primary-dark dark:text-primary-light`}>
                    <div className="left">
                        <img src="/pri01.png" alt="portfolio" className=' md:size-16 size-12 ' />
                    </div>
                    <div className='right flex items-center justify-center gap-5 '>
                        <div className='flex items-center gap-10 '>
                            <div className="darkMode cursor-pointer" onClick={() => {SetDarkTheme()}}>
                                {DarkMode ? <MdSunny size={"22px"} /> : <FaMoon size={"22px"} />}
                            </div>
                            <div className="md:hidden cursor-pointer" onClick={() => { setmenuBar(!menuBar) }}><IoMdMenu /></div>
                        </div>
                        <ul  className={`md:flex md:gap-5 text-xl  transition ease-in-out delay-300 duration-[0.4s] ${menuBar?"flex flex-col gap-2 items-center absolute left-0 w-full py-3 top-14  bg-primary-light dark:bg-primary-dark z-10":"hidden"}`}>
                            {
                                content.map((value, index) => {
                                    return (<li key={index}> <Link to={value}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-70}
                                        onSetActive={(to) => { setActiveLink(to) }}
                                        activeClass="text-secondary"
                                        className='hover:underline cursor-pointer'
                                        >{value}</Link></li>
                                    
                                    )
                                })
                            }



                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header

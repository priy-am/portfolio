import React from 'react'
import { RxHeartFilled } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
    return (
        <div className='md:p-12 sm:py-12 py-8  bg-gradient-to-b from-footer backdrop-blur-3xl opacity-80 z-10 shadow-[0px_6px_16px_rgba(129,156,246,0.25)] text-primary-dark dark:text-primary-light flex sm:flex-row flex-col sm:gap-0 gap-4 justify-evenly items-center'>
            <div className='flex items-center gap-2 justify-center text-xl'>
                <span> Made with</span>
                <span className='heart text-red-600'><RxHeartFilled /></span>
                <span>, By</span>
                <span className='underline text-[#2d0bfbd1] cursor-pointer'>code.priyam</span>
            </div>
            <span><a href="https://github.com/priy-am" target="_blank"><IoLogoGithub className='size-10 hover:fill-secondary'/></a></span>

        </div>
    )
}

export default Footer

import React, { useRef, useEffect } from 'react'
import Common from './Common'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';
import { FaHandshake } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { motion, useAnimation, useInView } from "framer-motion";
import contact from '../assets/contact.jpeg'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // contact api
  const onSubmit = async (data, event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_CONTACT_API);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast(res.message)
    }
    reset();
  };

  //animated
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

    <div id='Contact'>

      <Common text={"Contact"} />
      <ToastContainer />

      <div className='flex justify-center items-center md:m-0 mt-8'>
        <div className="right md:flex flex-col gap-6 hidden w-1/3  items-center ">
          <div className='text-2xl font-semibold font-mono'>Also connect with </div>
          {/* <img src={contact} alt="contact" className='w-1/2' /> */}
          <div className="icons flex gap-5 justify-center items-center">
            <span><a href="https://github.com/priy-am" target="_blank"><IoLogoGithub className='size-20 hover:fill-footer dark:fill-white dark:hover:fill-footer' /></a></span>
            <span><a href="https://www.linkedin.com/in/priy-am/" target="_blank"><FaLinkedin className='size-20 hover:fill-footer fill-blue-600' /></a></span>
          </div>
        </div>

        <motion.div ref={ref} initial="hidden"
          animate={control}
          variants={Variants}
          className="relative container md:w-2/3 px-9 py-8 mb-9 md:mr-7 mx-4 border-2 border-footer bg-[#6f7bdb29] rounded-2xl">
          <div className='dark:text-white flex items-center gap-4 md:justify-center justify-evenly font-semibold mb-4 text-3xl font-mono '>Let's Connect <div className=''><FaHandshake /></div> </div>
          {isSubmitting && <Loader />}
          <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 dark:text-white'>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-3 w-full'>
              <div className='flex flex-col'>
                <input className='border border-secondary bg-transparent rounded-lg px-5 py-3 outline-none' placeholder='Name' type="text" {...register("name", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 3, message: "min length 3" },
                  maxLength: { value: 10, message: "max length 10" }
                })} />
                {errors.name && <div className='text-red-800'>{errors.name.message}</div>}
              </div>
              <div className='flex flex-col'>
                <input className='border border-secondary bg-transparent rounded-lg px-5 py-3 outline-none' placeholder='Email' type="email" {...register("email", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 3, message: "min length 3" },
                })} />
                {errors.email && <div className='text-red-800'>{errors.email.message}</div>}
              </div>
              <div className='flex flex-col'>
                <input className='border border-secondary bg-transparent rounded-lg px-5 py-3 outline-none' placeholder='Phone NO.' type='text' {...register("phone", {
                  minLength: { value: 10, message: "Enter the correct phone no." },
                  maxLength: { value: 10, message: "Enter the correct phone no." },
                })} />
                {errors.phone && <div className='text-red-800'>{errors.phone.message}</div>}
              </div>

              <div className='flex flex-col'>
                <input className='border border-secondary bg-transparent rounded-lg px-5 py-3 outline-none' placeholder='Subjuect' type="text" {...register("subject", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 3, message: "min length 3" }
                })} />
                {errors.subject && <div className='text-red-800'>{errors.subject.message}</div>}
              </div>
            </div>
            <textarea placeholder='Message' rows='5' className='max-h-48 min-h-36 md:min-h-60 md:max-h-80 border bg-transparent border-secondary rounded-lg px-5 py-3 outline-none' {...register("message", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 5, message: "Min length 5" }
            })} ></textarea>
            {errors.message && <div className='text-red-800'>{errors.message.message}</div>}

            <motion.button whileTap={{ scale: 0.8 }} disabled={isSubmitting} type="submit" value="Submit" className='border-2 mt-4 rounded-full font-semibold border-secondary cursor-pointer bg-hoverSecondary text-white py-2 hover:bg-secondary flex justify-center items-center gap-2'>Send<div className="flex items-center"><IoMdSend /></div>
            </motion.button>

            {errors.form && <div className='text-red-800'>{errors.form.message}</div>}
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

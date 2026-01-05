'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { Ovo } from 'next/font/google'
import { motion } from "motion/react"
const ovo = Ovo({
  weight: '400',
  subsets: ['latin'],
})

const Header = ({isDarkMode}) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      
      <motion.div 
      initial={{ scale:0 }}
  whileInView={{ scale: 1 }}
  transition={{duration:0.8,type:'spring',stiffness:100}}
      >
        <Image
          src={assets.profile_img}
          alt="Profile"
          width={130}
          height={130}
          className="rounded-full"
        />
      </motion.div>

      <motion.h3
      initial={{ y:-20, opacity:0 }}
  whileInView={{ y:0, opacity:1 }}
  transition={{duration:0.6,delay:0.3}}

        className={`flex items-end gap-2 text-xl md:text-2xl mb-3 ${ovo.className}`}
      >
        Hi! I&apos;m Dhanashree Labhe
        <Image src={assets.hand_icon} alt="" width={24} />
      </motion.h3>

      <motion.h1
      initial={{ y:-30, opacity:0 }}
  whileInView={{ y:0, opacity:1 }}
  transition={{duration:0.8,delay:0.5}}

        className={`text-3xl sm:text-6xl lg:text-[66px] ${ovo.className}`}
      >Engineering Student  Passionate Developer
      </motion.h1>

      <motion.p 
      initial={{ opacity:0 }}
  whileInView={{opacity:1 }}
  transition={{duration:0.6,delay:0.7}}
 
      className={`max-w-2xl mx-auto ${isDarkMode ?  'text-white' :'text-gray-600'}  ${ovo.className}`}>
        I am an engineering student and developer with hands-on experience
        building real-world projects and a strong foundation in AI, machine
        learning, and cloud technologies.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
        initial={{ y:30, opacity:0 }}
  whileInView={{ y:0, opacity:1 }}
  transition={{duration:0.6,delay:1}}

  href="#contact"
  className={`px-10 py-3 border rounded-full text-white border-white flex items-center gap-2
    ${isDarkMode
      ? 'bg-blue-950 hover:bg-blue-900'
      : 'bg-black hover:bg-gray-800'}`}
>
  contact me
  <Image src={assets.right_arrow_white} alt="" width={16} />
</motion.a>



        <motion.a
        initial={{ y:30, opacity:0 }}
  whileInView={{ y:0, opacity:1 }}
  transition={{duration:0.6,delay:1.2}}
  href="/DHANASHREE LABHE RESUME.pdf"
  download
  className={`px-10 py-3 border rounded-full flex items-center gap-2 transition
    ${isDarkMode
      ? 'bg-white border-gray-400 text-black hover:bg-gray-200'
      : 'bg-white border-gray-500 text-black hover:bg-gray-100'}`}
>
  My Resume

  
    <Image
      src={ assets.download_icon}
      alt="Download"
      width={16}
      height={16}
    />
</motion.a>


      </div>
    </div>
  )
}

export default Header

'use client'

import React from 'react'
import { Ovo } from 'next/font/google'
import Image from 'next/image'
import { workData, assets } from '@/assets/assets'
import { motion } from 'motion/react'

const ovo = Ovo({
  weight: '400',
  subsets: ['latin'],
})

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-16 scroll-mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className={`text-center mb-2 text-lg ${isDarkMode ? 'text-white' : 'text-gray-600'} ${ovo.className}`}
      >
        My Recent Work
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`text-center text-5xl mb-6 ${ovo.className}`}
      >
        Projects I've Built
      </motion.h2>

      <p className={`mb-12 mx-auto max-w-2xl text-center ${isDarkMode ? 'text-white' : 'text-gray-600'} ${ovo.className}`}>
        A showcase of my recent projects demonstrating my skills in web development, AI, and cloud technologies.
      </p>

      <motion.div
        className="flex flex-wrap gap-5 justify-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        {workData.map(({ bgImage, title, description }) => (
          <motion.div
            key={title}
            className="aspect-square w-64 bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-300 group-hover:bottom-7">
              <div>
                <h2 className={`font-semibold text-gray-900 ${ovo.className}`}>{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
              </div>

              <div className="border border-black w-9 aspect-square rounded-full flex items-center justify-center shadow-[2px_2px_0_#000] transition-colors duration-300 group-hover:bg-gray-300">
                <Image src={assets.send_icon} alt="Send Icon" className="w-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`w-max flex items-center justify-center gap-2 border-[2px] rounded-full py-3 px-10 mx-auto my-20 transition-all duration-500 group ${
          isDarkMode
            ? 'text-white border-white hover:bg-white hover:text-black'
            : 'text-gray-700 border-gray-700 hover:bg-gray-300'
        }`}
      >
        Show More
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4 transition duration-300 group-hover:invert"
        />
      </motion.a>
    </motion.div>
  )
}

export default Work

'use client'

import React from 'react'
import { Ovo } from 'next/font/google'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets'
import { motion } from 'motion/react'

const ovo = Ovo({
  weight: '400',
  subsets: ['latin'],
})

const Skills = ({ isDarkMode }) => {
  return (
    <motion.div
      id="skills"
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
        What I Know
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`text-center text-5xl mb-14 ${ovo.className}`}
      >
        My Skills
      </motion.h2>

      <p className={`mb-12 mx-auto max-w-2xl text-center ${isDarkMode ? 'text-white' : 'text-gray-600'} ${ovo.className}`}>
        A strong technical foundation with hands-on experience across web development, AI, and cloud technologies.
      </p>

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        {serviceData.map(({ icon, iconDark, title, description, link }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className={`rounded-lg px-8 py-12 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${isDarkMode ? 'border border-gray-600 bg-transparent hover:bg-gray-800' : 'border border-gray-400 bg-white hover:bg-gray-100'}`}
          >
            {/* Icon */}
            {(isDarkMode ? iconDark : icon) && (
              <Image
                src={isDarkMode ? iconDark : icon}
                alt={title}
                width={40}
                height={40}
              />
            )}

            <h3 className={`text-lg my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{title}</h3>
            <p className={`text-sm leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>

            <a
              href={link}
              className={`flex items-center gap-2 text-sm mt-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
            >
              Learn More
              <Image
                src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
                alt="Right Arrow"
                width={16}
                height={16}
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Skills

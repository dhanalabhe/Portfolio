'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Ovo } from 'next/font/google'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from 'motion/react'

const ovo = Ovo({
  weight: '400',
  subsets: ['latin'],
})

const About = ({ isDarkMode }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <motion.section
      ref={ref}
      id="about"
      className="w-full px-[12%] py-16 scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, easing: 'ease-out' }}
    >
      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className={`text-center mb-2 text-lg ${
          isDarkMode ? 'text-white' : 'text-gray-600'
        } ${ovo.className}`}
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-center text-5xl mb-14 ${ovo.className}`}
      >
        About Me
      </motion.h2>

      {/* Main Content */}
      <div className="flex w-full flex-col lg:flex-row items-start gap-14">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 lg:w-96 mx-auto lg:mx-0"
        >
          <Image
            src={assets.user_image}
            alt="Dhanashree Labhe"
            className="w-full rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <p
            className={`mb-10 max-w-2xl text-justify ${
              isDarkMode ? 'text-white' : 'text-gray-600'
            } ${ovo.className}`}
          >
            I am a passionate engineering student and developer with hands-on
            experience building real-world projects across web, AI, and cloud
            technologies. Through continuous learning and practical
            implementation, I focus on creating efficient, scalable solutions
            while strengthening my problem-solving skills.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-12">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  visible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-xl p-6 cursor-pointer
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-xl hover:shadow-black/40
                  ${
                    isDarkMode
                      ? 'border-gray-600 hover:bg-gray-800'
                      : 'border-gray-300 hover:bg-gray-100'
                  }`}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  width={28}
                />
                <h3
                  className={`my-4 font-semibold text-xl ${
                    isDarkMode ? 'text-white' : 'text-black'
                  } ${ovo.className}`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {description}
                </p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <h4
            className={`mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-700'
            } ${ovo.className}`}
          >
            Tools I Use
          </h4>

          <ul className="flex flex-wrap items-center gap-4">
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  visible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1
                hover:shadow-md transition"
              >
                <Image src={tool} alt="Tool" className="w-6 sm:w-7" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About

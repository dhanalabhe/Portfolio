'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { Ovo } from 'next/font/google'
import menu_white from '@/assets/menu-white.png'


const ovo = Ovo({
  weight: '400',
  subsets: ['latin'],
})

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef(null)

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)' // show menu
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)' // hide menu
  }

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Background Image (hide in dark mode) */}
      {!isDarkMode && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%]">
          <Image
            alt=""
            src={assets.header_bg_color}
            className="w-full"
          />
        </div>
      )}

      {/* Navbar */}
      <nav
  className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
  flex justify-between items-center z-50
  transition-all duration-300
  ${
    isScroll
      ? isDarkMode
        ? 'bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-sm'
        : 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm'
      : 'bg-transparent'
  }`}
>

        {/* Logo */}
        <a href="#top">
          <Image
            alt="Logo"
            src={isDarkMode? assets.logo_dark:assets.logo}
            className="w-36 cursor-pointer"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-colors duration-300 ${
            isScroll
              ? isDarkMode
                ? 'bg-gray-800 bg-opacity-50 text-white shadow-sm'
                : 'bg-white bg-opacity-50 text-black shadow-sm'
              : isDarkMode
              ? 'border border-gray-300 bg-opacity-50 text-white'
              : 'bg-white bg-opacity-50 text-black'
          }`}
        >
          <li><a className={ovo.className} href="#top">Home</a></li>
          <li><a className={ovo.className} href="#about">About Me</a></li>
          <li><a className={ovo.className} href="#skills">Skills</a></li>
          <li><a className={ovo.className} href="#work">My Work</a></li>
          <li><a className={ovo.className} href="#contact">Contact Me</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme}>
            <Image
              alt="Theme"
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              className="w-6"
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3
            px-10 py-2.5 border rounded-full ml-4 ${ovo.className}
            ${isDarkMode ? 'text-white border-gray-300' : 'text-black border-gray-400'}`}
          >
            Contact
            <Image alt="" src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              alt=''
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              className='w-6'
            />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10
          fixed top-0 right-0 w-64 h-screen
          transition-transform duration-500 z-50
          transform translate-x-full
          ${isDarkMode ? 'bg-blue-950 text-white' : 'bg-rose-50 text-black'}`}
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              alt="Close"
              src={isDarkMode ? assets.close_white : assets.close_black}
              className="w-5 cursor-pointer"
            />
          </div>

          <li><a onClick={closeMenu} className={ovo.className} href="#top">Home</a></li>
          <li><a onClick={closeMenu} className={ovo.className} href="#about">About Me</a></li>
          <li><a onClick={closeMenu} className={ovo.className} href="#skills">Skills</a></li>
          <li><a onClick={closeMenu} className={ovo.className} href="#work">My Work</a></li>
          <li><a onClick={closeMenu} className={ovo.className} href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

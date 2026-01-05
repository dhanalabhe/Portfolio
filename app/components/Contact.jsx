import React, { useState } from 'react'
import { Ovo } from 'next/font/google'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

const ovo = Ovo({
  weight: '400',
  subsets: ['latin'],
})

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    )

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()
    setResult(data.success ? "Message sent successfully!" : "Something went wrong")
  }

  return (
    <motion.div

    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
      id="contact"
      className={`w-full px-[12%] py-16 scroll-mt-20
        bg-no-repeat bg-center bg-[length:90%_auto]
        ${isDarkMode ? 'bg-none' : "bg-[url('/footer-bg-color.png')]"}
      `}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
       
        transition={{ duration: 0.5,  delay: 0.3 }}
        className={`text-center mb-2 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${ovo.className}`}
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`text-center text-5xl mb-6 ${isDarkMode ? 'text-white' : 'text-black'} ${ovo.className}`}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={`mb-12 mx-auto max-w-2xl text-center
          ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${ovo.className}`}
      >
        I am currently open to new opportunities and collaborations. Whether
        you have a question, a project idea, or just want to say hello, feel free
        to reach out to me via email.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className={`flex-1 p-3 outline-none border rounded-md
              ${isDarkMode
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                : 'bg-white border-gray-400 text-black'}`}
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className={`flex-1 p-3 outline-none border rounded-md
              ${isDarkMode
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                : 'bg-white border-gray-400 text-black'}`}
          />
        </div>

        <textarea
          name="message"
          rows="6"
          required
          placeholder="Your Message"
          className={`w-full p-4 outline-none border rounded-md mb-6
            ${isDarkMode
              ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
              : 'bg-white border-gray-400 text-black'}`}
        />

        <button
          type="submit"
          className={`py-3 px-8 w-max mx-auto rounded-full flex items-center gap-2
            transition duration-500
            ${isDarkMode
              ? 'bg-blue-950 text-white hover:bg-blue-900'
              : 'bg-black text-white hover:bg-black/90'}`}
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>

        <p
          className={`mt-6 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${ovo.className}`}
        >
          {result}
        </p>
      </motion.form>
    </motion.div>
  )
}

export default Contact

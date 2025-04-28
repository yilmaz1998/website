import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black flex items-center justify-center gap-8 py-3 shadow-md">
      <a
        href="https://github.com/yilmaz1998"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/sinan-yilmazz/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-300 transition"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  )
}

export default Footer

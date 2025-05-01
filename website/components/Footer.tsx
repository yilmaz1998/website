import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black flex items-center justify-center gap-8 py-3 shadow-md">
      <a
        href="https://github.com/yilmaz1998"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-gray-400 transition"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/sinan-yilmazz/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  )
}

export default Footer

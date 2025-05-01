'use client'

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { motion } from 'framer-motion'
import FadeInOnView from "@/components/animations/FadeInOnView"


const Page = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Button
        variant="outline"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="flex items-center"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </Button>
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10">
      <img src={'/images/Sinan.jpg'} className="mt-10 rounded-full w-64 h-64 sm:w-48 sm:h-48 md:w-64 md:h-64" />
      <div className="relative text-center items-center justify-center">
      <h1 className="text-4xl font-extrabold">Sinan Yilmaz</h1>
      <p className="text-gray-500">Software Developer</p>
      </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
      <p className="text-lg max-w-3xl mx-auto mb-15 mt-6 px-2 md:px-3">
      In 2022, I moved to the U.S. and decided to follow my passion for technology. I completed the General Assembly Software Engineering Bootcamp in June 2024, where I gained hands-on experience in full-stack web development. With my roots in mechanical engineering and years of working in the restaurant industry, I’ve developed a solid work ethic, people skills, and a love for solving problems. I’m excited to start this new chapter as a software developer and keep learning every step of the way.
        </p>
      </motion.div>
        <FadeInOnView><Education /></FadeInOnView>
        <FadeInOnView><Skills /></FadeInOnView>
        <FadeInOnView><Projects /></FadeInOnView>
        <FadeInOnView><Contact /></FadeInOnView>
      <Footer />
    </div>
  )
}

export default Page

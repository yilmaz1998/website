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
          <h1 className="text-5xl font-extrabold">Sinan Yilmaz</h1>
          <p className="text-lg mt-1 text-gray-500">Software Engineer</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl max-w-3xl mx-auto mb-15 mt-6 px-2 md:px-3">
          Full-stack software engineer with a background in mechanical engineering, focused on building full-stack and AI-powered applications. 
          I create scalable, user-focused products using modern web technologies and LLM integrations.
          I moved to the U.S. in 2022 and began pursuing my passion for technology, completing a full-stack software engineering bootcamp in July 2024. 
          Since then, I’ve been continuously building and improving my skills.        
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

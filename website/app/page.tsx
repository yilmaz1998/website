'use client'

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Footer from "@/components/Footer"

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
      <img src={'/images/Sinan.jpg'} className="mt-10 rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80" />
      <h1 className="text-3xl font-extrabold mt-8">Sinan Yilmaz</h1>
      <p className="text-gray-500">Software Developer</p>
      <p className="text-lg max-w-3xl mx-auto mb-10 mt-6 px-2 md:px-3">
          I recently graduated from the General Assembly Software Engineering Bootcamp in June 2024, after transitioning to the U.S. in 2022. With a background in mechanical engineering and the restaurant business, I bring strong problem-solving, teamwork management, and communication skills. I have a passion for learning, creating, and continuously improving, and I am excited to enter the software engineering field to apply my skills and grow further.
        </p>
      <Skills/>
      <Projects />
      <Education />
      <Footer />
    </div>
  )
}

export default Page

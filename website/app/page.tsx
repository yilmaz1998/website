'use client'

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const Page = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mb-4 text-xl font-semibold">Sinan Yilmaz</div>
      <Button
        variant="outline"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="flex items-center"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </Button>
    </div>
  )
}

export default Page

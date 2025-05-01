"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const FadeInOnView = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 15 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default FadeInOnView

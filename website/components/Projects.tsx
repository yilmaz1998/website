import React from 'react'
import projects from '@/projects.json'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Projects = () => {
  return (
    <div className="px-2 md:px-3 mt-10 w-full max-w-3xl text-center mx-auto">
      <h1 className="text-3xl font-semibold mb-6">My Projects</h1>
      <Accordion type="single" collapsible className="w-full">
        {projects.map((project, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="cursor-pointer hover:no-underline text-xl">{project.name}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-2">
                  <img
                    src={`/images/${project.images[0]}`}
                    alt={project.name}
                    className="w-48 h-32 object-cover rounded-lg sm:w-64 sm:h-48 md:w-80 md:h-56"
                  />
                  <img
                    src={`/images/${project.images[1]}`}
                    alt={project.name}
                    className="w-48 h-32 object-cover rounded-lg sm:w-64 sm:h-48 md:w-80 md:h-56"
                  />
                </div>
                <div>
                  <p className="mb-2">{project.desc}</p>
                  <div className='flex justify-center items-center gap-3 text-center'>
                    <a href={project.live} target="_blank" className="text-blue-600 block">Live Site</a>
                    <a href={project.github} target="_blank" className="text-blue-600">GitHub</a>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default Projects

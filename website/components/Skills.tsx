import React from 'react'
import { Badge } from "@/components/ui/badge"

const skills = ['JavaScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL','Python', 'Django', 'HTML', 'CSS', 'Docker', 'Knex.js', 'Tailwind CSS', 'Bootstrap', 'ShadCN UI', 'Material UI']

const Skills = () => {
  return (
    <div className='mb-10 mt-10 max-w-3xl sm:w-1/2 text-center mx-auto'>
        <h1 className='text-3xl text-center font-semibold mb-6'>My Skills</h1>
        {skills.map((skill, index) => (
            <Badge variant="secondary" key={index} className='m-2 px-2'>
              {skill}
            </Badge>
        ))}
    </div>
  )
}

export default Skills

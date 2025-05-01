import React from 'react'
import { Badge } from "@/components/ui/badge"

const skills = ['JavaScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL','Python', 'Django', 'HTML', 'CSS', 'Docker', 'Kubernetes', 'Knex.js', 'Tailwind CSS', 'Bootstrap', 'ShadCN UI', 'Material UI', 'Jest', 'Postman 2', 'Vercel', 'Heroku', 'Netlify', 'Trello', 'Jira', 'Slack']

const Skills = () => {
  return (
    <div className='mt-15 mb-15 w-full max-w-3xl text-center mx-auto'>
        <h1 className='text-4xl text-center font-semibold mb-10'>My Skills</h1>
        {skills.map((skill, index) => (
            <Badge variant="secondary" key={index} className='m-2 px-2 text-md'>
              {skill}
            </Badge>
        ))}
    </div>
  )
}

export default Skills

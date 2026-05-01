import React from 'react'
import { Badge } from "@/components/ui/badge"

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 
  'MongoDB', 'PostgreSQL', 'HTML', 'CSS', 'Redux', 'Zustand','Socket.io', ' TanStack Query',
  'Firebase', 'Docker', 'Kubernetes', 'Prisma', 'Knex.js', 'Tailwind CSS', 
  'Bootstrap', 'ShadCN UI', 'Material UI', 'Jest', 'Postman 2', 'Vercel', 
  'Heroku', 'Netlify', 'GitHub', 'OpenAI API', 'ChromaDB', 'LangChain', 'Large Language Models (LLMs)',
  'Document Embeddings', 'Contextual Q&A', 'Prompt Engineering', 'RAG (Retrieval-Augmented Generation)', 'Vector Databases', 'Semantic Search', 
  'Abstract Systax Tree (AST) Analysis', 'Code Generation', 'AI-Powered Applications', 'Babel Parser'
];
const Skills = () => {
  return (
    <div className='mt-10 mb-15 w-full max-w-3xl text-center mx-auto'>
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

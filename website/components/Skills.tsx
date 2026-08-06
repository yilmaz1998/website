import React from 'react'
import { Badge } from "@/components/ui/badge"

const skills = [
  // Languages
  'JavaScript',
  'TypeScript',

  // Frontend
  'React',
  'Next.js',
  'Redux',
  'Zustand',
  'TanStack Query',
  'Tailwind CSS',
  'ShadCN UI',
  'Material UI',
  'Bootstrap',

  // Backend
  'Node.js',
  'Express',
  'REST APIs',
  'Redis',
  'JWT Authentication',
  'Socket.io',

  // Databases
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'Knex.js',

  // Cloud & DevOps
  'Docker',
  'Kubernetes',
  'Minikube',
  'Terraform',
  'AWS S3',
  'LocalStack',
  'Git',
  'GitHub',
  'CI/CD',
  'Vercel',
  'Heroku',
  'Netlify',

  // ETL & Data Engineering
  'ETL Pipelines',
  'CSV Processing',
  'Data Validation',
  'Data Transformation',

  // Monitoring & Observability
  'Prometheus',
  'Datadog',
  
  // Testing & Tools
  'Jest',
  'Postman',

  // AI / LLM
  'OpenAI API',
  'LangChain',
  'ChromaDB',
  'Vector Databases',
  'Document Embeddings',
  'Semantic Search',
  'RAG (Retrieval-Augmented Generation)',
  'Prompt Engineering',
  'Contextual Q&A',
  'Large Language Models (LLMs)',
  'AI-Powered Applications',

  // Static Analysis / Compiler
  'Abstract Syntax Tree (AST) Analysis',
  'Babel Parser',
  'Code Generation'
];

const Skills = () => {
  return (
    <div className='mt-10 mb-15 w-full max-w-4xl text-center mx-auto'>
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

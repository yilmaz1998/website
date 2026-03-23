import React from 'react'

const Education = () => {
  return (
    <div className="px-2 max-w-3xl text-center mb-15 mx-auto">
      <h1 className="text-4xl font-semibold mt-10 mb-10">Education</h1>

      <div className="flex flex-col gap-8">

        <div className="text-left">
          <div className="flex justify-between items-center text-xl font-semibold">
          <span>General Assembly</span>
            <span className="text-gray-500">12/2023 - 06/2024</span>
          </div>
          <p className="mt-2 text-gray-400 text-lg">
            Full-stack software engineering 400+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. 
            Built multiple full-stack applications using modern technologies such as JavaScript, React, Node.js, and MongoDB.          
          </p>
        </div>

        <div className="text-left">
          <div className="flex justify-between items-center text-xl font-semibold">
          <span>Duzce University</span>
            <span className="text-gray-500">09/2018 - 06/2022</span>
          </div>
          <p className="mt-2 text-gray-400 text-lg">
              Studied Mechanical Engineering at Duzce University, where I also completed an internship to gain practical experience in the field. 
              Gained hands-on experience with CNC machines, technical drawing, and automation robots, strengthening my technical and practical engineering skills.              
          </p>
        </div>

        <div className="text-left">
          <div className="flex justify-between items-center text-xl font-semibold">
          <span>Borsa Istanbul Technical High School</span>
            <span className="text-gray-500">09/2013 - 06/2017</span>
          </div>
          <p className="mt-2 text-gray-400 text-lg">
              Completed my technical high school education at Borsa Istanbul Technical High School, specializing in Automobile Technology. 
              Gained early hands-on experience with mechanical systems and technical problem solving.          
          </p>
        </div>

      </div>
    </div>
  )
}

export default Education

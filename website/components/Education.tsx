import React from 'react'

const Education = () => {
  return (
    <div className="px-2 md:px-3 max-w-3xl w-full text-center mb-20">
      <h1 className="text-3xl font-semibold mt-10 mb-6">Education</h1>

      <div className="flex flex-col gap-8">

        <div className="text-left">
          <div className="flex justify-between items-center text-lg font-semibold">
          <span>General Assembly</span>
            <span className="text-gray-600">Dec 2023 - Jun 2024</span>
          </div>
          <p className="mt-2 text-gray-500 text-sm">
            Full-stack software engineering 400+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.
          </p>
        </div>

        <div className="text-left">
          <div className="flex justify-between items-center text-lg font-semibold">
          <span>Duzce University</span>
            <span className="text-gray-600">2018 - 2022</span>
          </div>
          <p className="mt-2 text-gray-500 text-sm">
            Studied Mechanical Engineering at Duzce University, where I also completed an internship to gain practical experience in the field.
          </p>
        </div>

        <div className="text-left">
          <div className="flex justify-between items-center text-lg font-semibold">
          <span>Borsa Istanbul Technical High School</span>
            <span className="text-gray-600">2013 - 2017</span>
          </div>
          <p className="mt-2 text-gray-500 text-sm">
            Completed my technical high school education at Borsa Istanbul Technical High School, specializing in Automobile Technology.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Education

import React from 'react'

export default function Projects(){
  return (
    <main className="flex-grow flex flex-col items-center justify-center pt-24 fade-up">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl font-bold text-indigo-900 dark:text-purple-50 mb-12">My Projects</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-stretch w-full max-w-6xl mx-auto">
          {/* Project 1 */}
          <div className="bg-white/70 dark:bg-[#2f284b] rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-[90%] md:w-[95%] flex flex-col">
            <a href="/" className="flex flex-col h-full">
              <img src="/portfolio-6.png" alt="Portfolio Project" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-indigo-900 dark:text-purple-50 mb-1">Portfolio Website</h2>
                  <p className="text-sm mb-3">A personal portfolio website to showcase my skills and projects.</p>
                </div>
                <div className="flex justify-between items-center text-sm mt-auto">
                  <div className="flex space-x-2 text-primary-light dark:text-primary-dark"><span>HTML</span><span>CSS</span><span>JS</span></div>
                </div>
              </div>
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white/70 dark:bg-[#2f284b] rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-[90%] md:w-[95%] flex flex-col">
            <a href="/calculator" className="flex flex-col h-full">
              <img src="/calculator.png" alt="Calculator App" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-indigo-900 dark:text-purple-50 mb-1">Calculator App</h2>
                  <p className="text-sm mb-3">A responsive calculator web app developed using React.</p>
                </div>
                <div className="flex justify-between items-center text-sm mt-auto">
                  <div className="flex space-x-2 text-primary-light dark:text-primary-dark"><span>HTML</span><span>CSS</span><span>JS</span></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

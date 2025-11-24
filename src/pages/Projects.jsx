import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main className="relative pt-24 fade-up overflow-hidden">

      {/* 🌌 FULL-SCREEN VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50 -z-20"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto max-w-6xl px-6 text-center relative z-10 pb-20">

        <h1 className="text-4xl font-bold text-indigo-900 dark:text-purple-50 mb-12">
          My Projects
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lgg gap-8 justify-items-center items-stretch w-full">

          
          {/* Project 2 — Calculator */}
          <div className="bg-white/70 dark:bg-[#2f284b] rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-[90%] flex flex-col">
            <Link to="/calculator" className="flex flex-col h-full">
              <img
                src="/calculator.png"
                alt="Calculator App"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-indigo-900 dark:text-purple-50 mb-1">
                    Calculator App
                  </h2>
                  <p className="text-sm mb-3">
                    A responsive calculator web app developed using React.
                  </p>
                </div>
                <div className="flex justify-between items-center text-sm mt-auto">
                  <div className="flex space-x-2 text-primary-light dark:text-primary-dark">
                    <span>HTML</span><span>CSS</span><span>JS</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Project 3 — To-Do List */}
          <div className="bg-white/70 dark:bg-[#2f284b] rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-[90%] flex flex-col">
            <a
              href="https://harshanasathasivam-bit.github.io/to-do-list/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full"
            >
              <img
                src="/to-do list.jpg"
                alt="To-Do App"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-4 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-indigo-900 dark:text-purple-50 mb-1">
                    To-Do List App
                  </h2>
                  <p className="text-sm mb-3">
                    A clean and responsive To-Do List app with task editing and dark mode.
                  </p>
                </div>

                <div className="flex justify-between items-center text-sm mt-auto">
                  <div className="flex space-x-2 text-primary-light dark:text-primary-dark">
                    <span>HTML</span><span>CSS</span><span>JS</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}

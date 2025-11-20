import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <main className="flex justify-center items-center pt-24 h-screen">
      <section id="home" className="w-[75%] h-[75vh] bg-card-light dark:bg-card-dark rounded-2xl shadow-lg flex items-center justify-center fade-up transition-all duration-700">
        <div className="container grid lg:grid-cols-2 gap-12 items-center px-6">
          <div className="text-center lg:text-left">
            <p className="text-primary-light dark:text-primary-dark font-semibold mb-2">Hi, I am</p>
            <h1 className="text-5xl font-bold text-indigo-900 dark:text-[#E4DFFB] mb-3">Harshana S</h1>
            <h2 className="text-2xl md:text-3xl text-secondary-light dark:text-secondary-dark mb-6">I build things for the web 🌐</h2>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg mb-8">I'm a passionate frontend developer specializing in modern, responsive web apps.</p>
            <Link to="/projects" className="bg-primary-light dark:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 glow transition">View My Work</Link>
          </div>

          <div className="flex justify-center lg:justify-end fade-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light/40 dark:border-primary-dark/40 shadow-xl glow">
              <img src="/harshanaphoto.jpg" alt="Harshana" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

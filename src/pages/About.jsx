import React from 'react'

export default function About(){
  return (
    <main className="pt-24 fade-up">
      <section id="about" className="py-20 fade-up">
        <div className="container mx-auto px-6 text-center lg:text-left max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-indigo-900 dark:text-[#E4DFFB]">About Me</h2>
          <p className="mb-6 text-lg">I'm <strong>Harshana S</strong>, a frontend developer with a passion for crafting creative and interactive websites.</p>
          <p className="mb-6 text-lg">Currently pursuing <strong>B.E Computer Science</strong> at <span className="text-primary-light dark:text-primary-dark">K.S.R. College of Engineering</span>, I love exploring modern frontend technologies and building responsive, user-friendly web applications.</p>
          <p className="mb-6 text-lg">I enjoy turning complex problems into elegant solutions and continuously learning new skills to enhance my craft.</p>
        </div>
      </section>
    </main>
  )
}

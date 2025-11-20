import React from 'react'

export default function Resume(){
  return (
    <main className="flex-grow flex flex-col items-center justify-center pt-24 fade-up">
      <div className="container mx-auto max-w-xl px-6 text-center">
        <h1 className="text-4xl font-bold text-indigo-900 dark:text-purple-50 mb-6">My Resume</h1>
        <p className="text-lg text-indigo-900 dark:text-purple-50 mb-8">Download my resume to learn more about my skills, education, and experience.</p>
        <a href="/harshana_resume_1.docx" target="_blank" rel="noreferrer" className="bg-primary-light dark:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">📄 Download Resume</a>
      </div>
    </main>
  )
}

import React from 'react';
import VideoBackground from '../components/VideoBackground';

export default function Resume() {
  return (
    <main className="relative pt-24 min-h-screen fade-up overflow-hidden">

      {/* LIVE VIDEO BACKGROUND */}
      <VideoBackground />

      <div className="container mx-auto max-w-xl px-6 text-center relative z-10 pb-20">

        <h1 className="text-4xl font-bold text-indigo-900 dark:text-purple-50 mb-6">
          My Resume
        </h1>

        <p className="text-lg text-indigo-900 dark:text-purple-50 mb-8">
          Download my resume to learn more about my skills, education, and experience.
        </p>

        <a
          href="/harshana_resume_1.docx"
          target="_blank"
          rel="noreferrer"
          className="bg-primary-light dark:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          📄 Download Resume
        </a>

      </div>

    </main>
  );
}

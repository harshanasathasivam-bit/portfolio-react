import React from 'react';

export default function About() {
  return (
    <main className="pt-24 fade-up">
      <section id="about" className="py-8 fade-up">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center max-w-6xl">

          {/* LEFT SIDE TEXT */}
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-8 text-indigo-900 dark:text-[#E4DFFB]">
              About Me
            </h2>

            <p className="mb-6 text-lg">
              I'm <strong>Harshana S</strong>, a frontend developer with a passion for crafting creative and interactive websites.
            </p>

            <p className="mb-6 text-lg">
              Currently pursuing <strong>B.E Computer Science</strong> at 
              <span className="text-primary-light dark:text-primary-dark"> K.S.R. College of Engineering</span>, 
              I love exploring modern frontend technologies and building responsive, user-friendly web applications.
            </p>

            <p className="mb-6 text-lg">
              I enjoy turning complex problems into elegant solutions and continuously learning new skills to enhance my craft.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/girl1.png" 
              alt="About"
              className="w-[80%] md:w-[70%] lg:w-[90%] object-contain drop-shadow-xl rounded-xl"
            />
          </div>

        </div>
      </section>
    </main>
  );
}

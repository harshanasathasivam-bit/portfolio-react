import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex justify-center items-center pt-20 h-screen">
      <section
        id="home"
        className="w-[75%] h-[75vh] bg-card-light dark:bg-card-dark rounded-2xl shadow-lg flex items-center justify-center fade-up transition-all duration-700"
      >
        <div className="container grid lg:grid-cols-2 gap-12 items-center px-6">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left lg:pl-[10%]">
            <p className="text-primary-light dark:text-primary-dark font-semibold mb-2">
              Hi, I am
            </p>

            <h1 className="text-5xl font-bold text-indigo-900 dark:text-[#E4DFFB] mb-3">
              Harshana S
            </h1>

            <h2 className="text-2xl md:text-3xl text-secondary-light dark:text-secondary-dark mb-6">
              I build things for the web 🌐
            </h2>

            <p className="max-w-xl mx-auto lg:mx-0 text-lg mb-8">
              I'm a passionate frontend developer specializing in modern, responsive web apps.
            </p>

            {/* BUTTON + SOCIAL ICONS */}
            <div className="inline-block">
              <Link
                to="/projects"
                className="bg-primary-light dark:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 glow transition inline-block"
              >
                View My Work
              </Link>

              {/* SOCIAL ICON ROW */}
              <div className="flex justify-center space-x-6 mt-4">

                {/* Instagram */}
                <a
                  href="https://instagram.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-600 dark:text-violet-300 hover:text-violet-500 dark:hover:text-purple-400 transition transform hover:scale-125"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9A3.5 3.5 0 0020 16.5v-9A3.5 3.5 0 0016.5 4h-9zm9.25 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2A3 3 0 1015 12a3 3 0 00-3-3z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/harshana-sathasivam-1054a5333/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-600 dark:text-violet-300 hover:text-violet-500 dark:hover:text-purple-400 transition transform hover:scale-125"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3A2.992 2.992 0 0122 6v12a2.992 2.992 0 01-3 3H5a2.992 2.992 0 01-3-3V6a2.992 2.992 0 013-3h14zM8.339 17v-7H5.67v7h2.669zm-1.335-8.09A1.545 1.545 0 018.55 7.36c0-.85-.68-1.54-1.546-1.54-.863 0-1.546.69-1.546 1.54s.683 1.55 1.546 1.55zM18.33 17v-4.03c0-2.17-.463-3.97-2.96-3.97a2.59 2.59 0 00-2.34 1.28h-.03V10h-2.66v7h2.66v-3.9c0-1.03.19-2.01 1.48-2.01 1.27 0 1.29 1.18 1.29 2.08V17h2.56z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/harshanasathasivam-bit"
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-600 dark:text-violet-300 hover:text-violet-500 dark:hover:text-purple-400 transition transform hover:scale-125"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.59 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.63-3.37-1.36-3.37-1.36-.45-1.16-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.1 2.91.84.09-.65.35-1.09.63-1.34-2.22-.26-4.56-1.14-4.56-4.98 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03a9.6 9.6 0 012.5-.35c.85 0 1.71.12 2.51.35 1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.69 0 3.86-2.34 4.72-4.58 4.97.36.31.69.93.69 1.86 0 1.34-.01 2.41-.01 2.73 0 .26.18.58.69.48A10.03 10.03 0 0022 12.26C22 6.59 17.52 2 12 2z"
                    />
                  </svg>
                </a>

              </div>
            </div>
          </div>

    {/* RIGHT SIDE IMAGE */}
<div className="flex items-center justify-center lg:justify-end h-full relative fade-up-translate-y-[5%]
">

  {/* PERFECTLY CENTERED PURPLE BRUSH BACKGROUND */}
  <img
    src="/bg-shade.png"
    alt="Background Shade"
    className="absolute w-[520px] md:w-[800px] opacity-90 -z-10
               left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  />

  {/* MAIN PHOTO — CENTERED + POSITION FIXED */}
  <img
    src="/shana1.png"
    alt="Harshana"
    className="relative z-20 
               w-[50%] md:w-[55%]
               translate-x-[-42%]
               object-contain drop-shadow-2xl"
  />
</div>


        </div>
      </section>
    </main>
  );
}
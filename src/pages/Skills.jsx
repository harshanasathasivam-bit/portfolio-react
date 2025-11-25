import React from 'react';

export default function Skills() {
  return (
    <>
      {/* Hide Footer */}
      <div data-hide-footer="true"></div>

      <main className="relative min-h-screen flex items-center justify-center fade-up overflow-hidden">

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

        {/* CENTERED CONTENT */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-indigo-900 dark:text-[#E4DFFB] mb-12">
            My Skills
          </h1>

          {/* PERFECT 2 ROW × 6 COLUMN GRID */}
          <div className="grid grid-cols-6 gap-8 justify-center items-center mx-auto">

            {[
              { name: 'HTML', img: '/html.png' },
              { name: 'CSS', img: '/text.png' },
              { name: 'JavaScript', img: '/java-script.png' },
              { name: 'Java', img: '/java.png' },
              { name: 'Python', img: '/python.png' },
              { name: 'C', img: '/letter-c.png' },
              { name: 'React', img: '/react.png' },
              { name: 'MS Excel', img: '/excel.png' },
              { name: 'VS Code', img: '/vscode.png' },
              { name: 'MS PowerPoint', img: '/powerpoint.png' },
              { name: 'GitHub', img: '/github.png' },
              { name: 'MS Word', img: '/word.png' },
            ].map((s, i) => (
              <div
                key={i}
                className="w-32 h-32 flex flex-col items-center justify-center
                           bg-card-light dark:bg-card-dark rounded-xl shadow
                           hover:-translate-y-2 transition-all hover:shadow-lg"
              >
                <img src={s.img} alt={s.name} className="h-12 w-12 mb-2" />
                <p className="font-semibold text-sm">{s.name}</p>
              </div>
            ))}

          </div>
        </div>

      </main>
    </>
  );
}

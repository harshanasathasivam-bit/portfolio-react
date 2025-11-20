import React from 'react'

export default function Skills(){
  return (
    <main className="flex-grow flex flex-col items-center justify-center pt-24 fade-up">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl font-bold text-indigo-900 dark:text-[#E4DFFB] mb-12">My Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            {name:'HTML', img:'/html.png'},
            {name:'CSS', img:'/text.png'},
            {name:'JavaScript', img:'/java-script.png'},
            {name:'Java', img:'/java.png'},
            {name:'Python', img:'/python.png'},
            {name:'C', img:'/letter-c.png'}
          ].map((s, i) => (
            <div key={i} className="bg-card-light dark:bg-card-dark rounded-xl p-6 shadow hover:-translate-y-2 transition-all hover:shadow-lg">
              <img src={s.img} alt={s.name} className="h-16 w-16 mx-auto mb-3" />
              <p className="font-semibold">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

import React from 'react'

export default function Contact(){
  return (
    <main className="flex-grow flex flex-col items-center justify-center pt-24 fade-up">
      <div className="container mx-auto max-w-xl px-6 text-center">
        <h1 className="text-4xl font-bold text-indigo-900 dark:text-purple-50 mb-6">Contact Me</h1>
        <p className="text-lg text-indigo-900 dark:text-purple-100 mb-8">Feel free to reach out via the form below.</p>

        <form action="https://formspree.io/f/xeorlqay" method="POST" className="space-y-6">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-md bg-card-light dark:bg-card-dark border border-gray-300 dark:border-slate-700" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-md bg-card-light dark:bg-card-dark border border-gray-300 dark:border-slate-700" />
          <textarea name="message" rows="4" placeholder="Your Message" required className="w-full p-3 rounded-md bg-card-light dark:bg-card-dark border border-gray-300 dark:border-slate-700"></textarea>
          <button type="submit" className="bg-primary-light dark:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 glow transition">Send Message</button>
        </form>
      </div>
    </main>
  )
}

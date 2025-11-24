import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 z-50 backdrop-blur bg-violet-100/80 dark:bg-[#3b2f5a]/80 shadow-lg transition-all duration-300">
      <div className="container mx-auto max-w-[95%] px-6 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-violet-500 dark:text-violet-300 text-3xl">terminal</span>
          <span className="text-xl font-bold text-indigo-900 dark:text-[#E4DFFB]">Harshana</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-violet-600' : ''}>Home</NavLink>
         
          <NavLink to="/skills" className={({isActive}) => isActive ? 'text-violet-600' : ''}>Skills</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'text-violet-600' : ''}>Projects</NavLink>
          <NavLink to="/resume" className={({isActive}) => isActive ? 'text-violet-600' : ''}>Resume</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-violet-600' : ''}>Contact</NavLink>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}

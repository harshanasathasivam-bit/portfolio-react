import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    if (next) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', next ? 'dark' : 'light')

    // animation classes
    const el = document.getElementById('theme-toggle')
    if (el) {
      el.classList.add('spin', 'glow-flash')
      setTimeout(() => el.classList.remove('spin', 'glow-flash'), 800)
    }
  }

  return (
    <button id="theme-toggle" onClick={toggle} className="ml-4 text-2xl text-violet-500 dark:text-violet-300 hover:scale-110 transition">{isDark ? '🌙' : '☀'}</button>
  )
}

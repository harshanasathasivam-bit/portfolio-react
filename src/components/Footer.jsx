import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-violet-100 dark:bg-[#3a3459] text-indigo-900 dark:text-[#E4DFFB] py-10 mt-auto shadow-inner transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a className="hover:text-violet-500 dark:hover:text-violet-300 transition-colors" href="https://github.com/harshanasathasivam-bit" target="_blank" rel="noreferrer">
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a className="hover:text-violet-500 dark:hover:text-violet-300 transition-colors" href="https://www.linkedin.com/in/harshana-sathasivam-1054a5333" target="_blank" rel="noreferrer">
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.71zM6.935 7.788c-.857 0-1.548-.69-1.548-1.548S6.078 4.69 6.935 4.69s1.548.69 1.548 1.548S7.792 7.788 6.935 7.788zm1.387 8.55V7.788H5.547v8.55h2.775zM20.997 2H3.003C2.45 2 2 2.45 2 3v18c0 .55.45 1 1.003 1h17.994C21.55 22 22 21.55 22 21V3c0-.55-.45-1-1.003-1z" />
            </svg>
          </a>
        </div>
        <p className="text-sm font-medium">Designed & Built by <span className="text-violet-600 dark:text-violet-300 font-semibold">Harshana</span></p>
        <p className="text-xs mt-2 text-violet-700 dark:text-violet-400">© 2025. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

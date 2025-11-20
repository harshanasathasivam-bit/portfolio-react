/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: { light: '#d0c7f0', dark: '#2c2644' },
        text: { light: '#1e1b4b', dark: '#e4dffb' },
        primary: { light: '#8b5cf6', dark: '#b794f4' },
        secondary: { light: '#a78bfa', dark: '#d0bfff' },
        card: { light: '#f5f0e9', dark: '#3a3459' }
      },
      fontFamily: { sans: ['Inter','sans-serif'] }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}

import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

import Skills from './pages/Skills'
import Projects from './pages/Projects'

import Contact from './pages/Contact'
import Calculator from './pages/Calculator'
import TodoApp from './pages/todoapp.jsx';

export default function App() {
  const location = useLocation();

  // Hide footer only on Home and Skills
  const hideFooterPages = ['/', '/skills','/projects'];
  const hideFooter = hideFooterPages.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todo-app" element={<TodoApp />} />
        </Routes>
      </main>

      {/* Show footer only when NOT in hideFooterPages */}
      {!hideFooter && <Footer />}
    </div>
  );
}

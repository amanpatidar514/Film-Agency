import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import Services from './pages/Services.tsx'
import Contact from './pages/Contact.tsx'
import { Header } from './components/layout/Header.tsx'
import { Footer } from './components/layout/Footer.tsx'

function App() {
  return (
    <div className="min-h-screen bg-midnight-900 text-cinema-50 overflow-x-hidden font-inter">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

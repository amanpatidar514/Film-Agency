import React, { useEffect, useState } from 'react'
import { Navigation } from './Navigation'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-midnight-950/80 backdrop-blur-xl border-b border-white/5 py-0 shadow-2xl'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-[1600px] mx-auto">
        <Navigation />
      </div>
    </header>
  )
}

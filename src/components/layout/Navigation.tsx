import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Camera, Film, Play, Layout, Phone, Info } from 'lucide-react'

const navItems = [
  { name: 'HOME', path: '/', icon: <Layout className="w-4 h-4" /> },
  { name: 'SERVICES', path: '/services', icon: <Film className="w-4 h-4" /> },
  { name: 'PROJECTS', path: '/projects', icon: <Play className="w-4 h-4" /> },
  { name: 'CONTACT', path: '/contact', icon: <Phone className="w-4 h-4" /> },
]

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}

export function Navigation() {
  const location = useLocation()

  return (
    <motion.nav
      className="w-full flex justify-between items-center py-6 px-10"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Brand Logo */}
      <Link to="/" className="flex items-center space-x-3 group">
        <div className="relative">
          <motion.div
            className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center shadow-gold-glow group-hover:rotate-12 transition-transform duration-500"
          >
            <Camera className="w-6 h-6 text-midnight-950" />
          </motion.div>
          <div className="absolute inset-0 bg-gold-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="text-2xl font-black font-cinzel tracking-tighter text-white">CINELUX</span>
          <span className="text-[10px] font-bold tracking-[0.4em] text-gold-500">PRODUCTIONS</span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                to={item.path}
                className={`relative px-5 py-2.5 rounded-full text-xs font-black tracking-widest transition-all duration-300 flex items-center gap-2 group ${
                  isActive ? 'text-gold-500' : 'text-cinema-300 hover:text-white'
                }`}
              >
                {item.icon}
                {item.name}

                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-gold-500/10 border border-gold-500/20 rounded-full -z-10 shadow-[0_0_15px_rgba(234,179,8,0.1)]"
                  />
                )}

                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* Action Button */}
      <div className="hidden lg:block">
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-white text-midnight-950 text-[11px] font-black tracking-widest rounded-full hover:bg-gold-500 transition-colors"
        >
          START A PROJECT
        </motion.button>
      </div>

      {/* Mobile Toggle Placeholder */}
      <div className="md:hidden">
        <div className="w-8 h-8 flex flex-col justify-center space-y-1.5 cursor-pointer group">
          <div className="w-8 h-0.5 bg-white group-hover:bg-gold-500 transition-colors" />
          <div className="w-5 h-0.5 bg-white group-hover:bg-gold-500 transition-colors ml-auto" />
          <div className="w-8 h-0.5 bg-white group-hover:bg-gold-500 transition-colors" />
        </div>
      </div>
    </motion.nav>
  )
}

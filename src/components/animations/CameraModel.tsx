import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Camera, Aperture, Eye, Disc, Sliders, Volume2, ShieldCheck, Zap } from 'lucide-react'

export function CameraModel() {
  const [isRecording, setIsRecording] = useState(true)
  const [apertureOpen, setApertureOpen] = useState(false)
  const [selectedLens, setSelectedLens] = useState('ANAMORPHIC 35mm f/1.4')
  const [timecode, setTimecode] = useState('01:24:59:18')

  // Mouse tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), { stiffness: 150, damping: 20 })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const x = (event.clientX - rect.left) / width - 0.5
    const y = (event.clientY - rect.top) / height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Running Timecode
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const hrs = String(now.getHours()).padStart(2, '0')
      const mins = String(now.getMinutes()).padStart(2, '0')
      const secs = String(now.getSeconds()).padStart(2, '0')
      const frames = String(Math.floor((now.getMilliseconds() / 1000) * 24)).padStart(2, '0')
      setTimecode(`${hrs}:${mins}:${secs}:${frames}`)
    }, 41) // ~24fps update rate
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center p-4 cursor-pointer select-none group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setApertureOpen(!apertureOpen)}
    >
      {/* Outer Glow Halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 via-crimson-500/10 to-gold-400/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />

      {/* Camera Viewfinder Frame Box */}
      <div className="absolute inset-2 border border-gold-500/30 rounded-3xl p-4 pointer-events-none flex flex-col justify-between backdrop-blur-[2px]">
        {/* Viewfinder Corners */}
        <div className="flex justify-between">
          <div className="w-8 h-8 border-t-2 border-l-2 border-gold-400" />
          <div className="w-8 h-8 border-t-2 border-r-2 border-gold-400" />
        </div>

        {/* HUD Top Bar */}
        <div className="flex justify-between items-center px-4 py-1 bg-midnight-950/80 border border-gold-500/20 rounded-full text-xs font-mono text-cinema-100">
          <div className="flex items-center space-x-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isRecording ? 'bg-crimson-500 animate-pulse-rec shadow-[0_0_10px_#ef4444]' : 'bg-cinema-400'
              }`}
            />
            <span className="font-bold tracking-wider text-crimson-500">REC</span>
            <span className="text-gold-400 font-mono font-semibold">{timecode}</span>
          </div>
          <div className="hidden sm:flex space-x-3 text-[11px] text-cinema-300">
            <span>ISO 800</span>
            <span className="text-gold-400">24 FPS</span>
            <span>1/50 SEC</span>
            <span>5600K</span>
          </div>
        </div>

        {/* Viewfinder Center Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 border border-gold-400/60 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-gold-400 rounded-full" />
          </div>
          <div className="absolute w-20 h-[1px] bg-gold-400/50" />
          <div className="absolute h-20 w-[1px] bg-gold-400/50" />
        </div>

        {/* HUD Bottom Bar */}
        <div className="flex justify-between items-end px-2">
          <div className="text-[11px] font-mono text-cinema-300 space-y-1">
            <div className="text-gold-400 font-semibold">{selectedLens}</div>
            <div className="flex items-center space-x-2">
              <span className="text-cinema-400">FPS:</span>
              <span className="text-cinema-50 font-bold">23.976</span>
              <span className="text-emerald-400 text-[10px]">● READY</span>
            </div>
          </div>

          {/* Audio VU Meter Sim */}
          <div className="flex space-x-1 items-end h-8 pb-1">
            {[40, 70, 90, 60, 80, 50, 95, 30].map((h, i) => (
              <motion.div
                key={i}
                className={`w-1 rounded-t ${i > 5 ? 'bg-crimson-500' : 'bg-gold-400'}`}
                animate={{ height: [`${h}%`, `${Math.max(15, (h + 30) % 100)}%`, `${h}%`] }}
                transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Corners */}
        <div className="flex justify-between">
          <div className="w-8 h-8 border-b-2 border-l-2 border-gold-400" />
          <div className="w-8 h-8 border-b-2 border-r-2 border-gold-400" />
        </div>
      </div>

      {/* 3D Tilted Lens Barrel Structure */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center"
      >
        {/* Outer Heavy Lens Ring */}
        <div className="absolute inset-0 rounded-full border-8 border-midnight-700 bg-gradient-to-br from-midnight-900 via-midnight-800 to-midnight-950 shadow-2xl flex items-center justify-center p-3 border-t-gold-500/40 border-b-gold-500/10">

          {/* Focal Distance Scale Ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 stroke-dash border-dashed border-gold-500/40 opacity-70"
            animate={{ rotate: apertureOpen ? 180 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />

          {/* Ribbed Matte Black Grip Ring */}
          <div className="absolute inset-4 rounded-full border-4 border-midnight-900 bg-[radial-gradient(circle,#1e293b_1px,transparent_1px)] bg-[size:8px_8px] shadow-inner" />

          {/* Aperture F-Stop Markings */}
          <div className="absolute inset-6 rounded-full flex items-center justify-center text-[9px] font-mono text-gold-400/80 pointer-events-none">
            <span className="absolute top-1 font-bold">f/1.4</span>
            <span className="absolute right-2 font-bold">f/2.8</span>
            <span className="absolute bottom-1 font-bold">f/5.6</span>
            <span className="absolute left-2 font-bold">f/11</span>
          </div>

          {/* Glass Element Outer Bezel */}
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full border-4 border-midnight-950 bg-gradient-to-br from-midnight-900 via-midnight-950 to-black p-2 flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,0,0,0.9)]">

            {/* Glowing Refraction Ring */}
            <div className="absolute inset-2 rounded-full border border-gold-400/30 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-gold-500/20 pointer-events-none" />

            {/* Dynamic Aperture Blades Assembly */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-black overflow-hidden flex items-center justify-center border border-gold-500/40 shadow-inner">

              {/* 8 Aperture Blades */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-24 h-24 bg-gradient-to-br from-midnight-800 to-midnight-950 border border-gold-500/30 origin-bottom-left shadow-lg"
                  animate={{
                    rotate: angle,
                    scale: apertureOpen ? 0.35 : 0.85,
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.02 }}
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                />
              ))}

              {/* Inner Lens Core / Film Sensor Reflection */}
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-midnight-950 via-midnight-900 to-midnight-950 flex items-center justify-center shadow-[inset_0_0_20px_rgba(250,204,21,0.3)]">
                {/* Purple/Blue Lens Coating Glare */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 via-transparent to-gold-400/30 blur-xs" />
                <Aperture className="w-10 h-10 text-gold-400 animate-spin-slow opacity-80" />
              </div>
            </div>

            {/* Cyan / Violet Lens Flare Reflection Strip */}
            <motion.div
              className="absolute top-6 right-8 w-20 h-8 rounded-full bg-gradient-to-r from-transparent via-cyan-400/30 to-purple-400/20 blur-sm -rotate-45 pointer-events-none"
              animate={{ opacity: [0.3, 0.8, 0.3], x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

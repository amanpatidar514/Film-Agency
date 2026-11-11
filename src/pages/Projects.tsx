import { motion } from 'framer-motion'
import { ScrollReveal } from '../components/animations/ScrollReveal'
import React from 'react'
import { Play, Award, Film, Compass, Sparkles } from 'lucide-react'

const recentWorks = [
  {
    title: 'MIDNIGHT CHRONICLES',
    category: 'Feature Film',
    year: '2024',
    video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p25.mp4',
    placeholderImg: 'https://images.pexels.com/photos/36723639/pexels-photo-36723639.jpeg?w=800&auto=format&fit=crop',
    tags: ['4K', 'Anamorphic']
  },
  {
    title: 'URBAN ECHOES',
    category: 'Commercial',
    year: '2023',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    placeholderImg: 'https://images.pexels.com/photos/16175210/pexels-photo-16175210.jpeg?cs=srgb&dl=pexels-miguel-de-la-rosa-506672256-16175210.jpg&fm=jpg&w=800&auto=format&fit=crop',
    tags: ['Color', 'Sound Design']
  },
  {
    title: 'BEYOND HORIZONS',
    category: 'Documentary',
    year: '2023',
    video: 'https://download.samplelib.com/mp4/sample-5s.mp4',
    placeholderImg: 'https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?w=800&auto=format&fit=crop',
    tags: ['Storytelling', 'VFX']
  }
]

const stats = [
  { label: 'AWARDS WON', val: '12+', icon: <Award /> },
  { label: 'FILMS RELEASED', val: '48', icon: <Film /> },
  { label: 'GLOBAL OFFICES', val: '04', icon: <Compass /> },
  { label: 'CLIENT SATISFACTION', val: '100%', icon: <Sparkles /> }
]

export default function Projects() {
  return (
    <div className="pt-20">
      {/* Projects Section - 2 Per Row (Large Cards) */}
      <section id="projects" className="py-32 lg:py-48 px-6 bg-[#04060b]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
            <div className="space-y-4">
              <ScrollReveal direction="left">
                <span className="text-gold-500 font-black tracking-[0.5em] uppercase text-xs">Portfolio</span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                  MASTERPIECES <span className="text-gold-500">SELECTED</span>
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={0.4}>
              <button className="px-10 py-5 border-2 border-white/10 text-white font-black rounded-xl hover:bg-white hover:text-midnight-950 transition-all text-sm tracking-[0.2em]">
                FULL PORTFOLIO
              </button>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
            {recentWorks.map((work, idx) => (
              <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -20 }}
                  className="group relative cursor-pointer"
                >
                  {/* Video Container */}
                  <div className="relative aspect-video rounded-[40px] overflow-hidden border-2 border-white/5 shadow-2xl bg-midnight-900">
                    {/* Always visible Background Image */}
                    <img
                      src={work.placeholderImg}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-[2s]"
                    />

                    {/* Video Layer on top */}
                    <video
                      src={work.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
                      onError={(e) => {
                        (e.currentTarget as HTMLVideoElement).style.display = 'none'
                      }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                      <div className="w-24 h-24 rounded-full bg-gold-500 flex items-center justify-center text-midnight-950 shadow-gold-lg">
                        <Play className="w-10 h-10 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Metadata Overlay */}
                    <div className="absolute top-8 left-8 flex gap-3">
                      {work.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-midnight-950/80 backdrop-blur-md border border-white/10 text-[10px] font-black tracking-widest text-gold-500 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="mt-12 flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-[2px] bg-gold-500" />
                        <span className="text-gold-500 font-black text-sm tracking-[0.3em] uppercase">{work.category}</span>
                      </div>
                      <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter font-cinzel">
                        {work.title}
                      </h4>
                    </div>
                    <span className="text-cinema-400 font-mono text-2xl pt-2">{work.year}</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Reels Section */}
      <section className="py-32 bg-midnight-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="text-center space-y-6 group">
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-midnight-900 border border-white/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-midnight-950 transition-all duration-500 shadow-xl">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div className="space-y-1">
                    <div className="text-5xl font-black text-white tabular-nums">{stat.val}</div>
                    <div className="text-[10px] font-black tracking-[0.4em] text-cinema-400 uppercase">{stat.label}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
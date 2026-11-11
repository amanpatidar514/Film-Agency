import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Camera, Film, Play, Sliders, Clapperboard, Sparkles,
  ChevronRight, ArrowRight, Video, Tv, Award, Zap,
  MonitorPlay, Mic2, Hexagon, Layers, Compass
} from 'lucide-react'
import { ScrollReveal, Stagger } from '../components/animations/ScrollReveal'
import { CameraModel } from '../components/animations/CameraModel'
import { FilmReel } from '../components/animations/FilmReel'

const CINEMATIC_MEDIA = {
  hero: 'https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?w=2000&auto=format&fit=crop',
  production: 'https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?w=800&auto=format&fit=crop',
  documentary: 'https://images.pexels.com/photos/36723639/pexels-photo-36723639.jpeg?w=800&auto=format&fit=crop',
  commercial: 'https://images.pexels.com/photos/16175210/pexels-photo-16175210.jpeg?cs=srgb&dl=pexels-miguel-de-la-rosa-506672256-16175210.jpg&fm=jpg&w=800&auto=format&fit=crop',
  post: 'https://images.pexels.com/photos/31718971/pexels-photo-31718971.jpeg?w=800&auto=format&fit=crop',
  music: 'https://images.pexels.com/photos/28003176/pexels-photo-28003176.jpeg?w=800&auto=format&fit=crop',
  vfx: 'https://images.pexels.com/photos/9488225/pexels-photo-9488225.jpeg?cs=tinysrgb&dpr=1&w=800&auto=format&fit=crop',
  lens: 'https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?w=800&auto=format&fit=crop',

  // Real sample videos
  videos: [
    'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p25.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://download.samplelib.com/mp4/sample-5s.mp4'
  ]
}

const services = [
  {
    title: 'FEATURE FILMS',
    description: 'High-concept cinematic narratives crafted for global audiences with award-winning production values.',
    icon: <Film className="w-6 h-6" />,
    img: CINEMATIC_MEDIA.production,
    accent: 'gold'
  },
  {
    title: 'COMMERCIALS',
    description: 'Bespoke brand storytelling that converts through emotional resonance and visual excellence.',
    icon: <Clapperboard className="w-6 h-6" />,
    img: CINEMATIC_MEDIA.commercial,
    accent: 'blue'
  },
  {
    title: 'DOCUMENTARIES',
    description: 'Intimate, powerful real-world stories told with cinematic sensitivity and technical precision.',
    icon: <Video className="w-6 h-6" />,
    img: CINEMATIC_MEDIA.documentary,
    accent: 'emerald'
  },
  {
    title: 'POST-PRODUCTION',
    description: 'Expert color grading, sound design, and VFX that elevate raw footage into a polished masterpiece.',
    icon: <MonitorPlay className="w-6 h-6" />,
    img: CINEMATIC_MEDIA.post,
    accent: 'purple'
  },
  {
    title: 'MUSIC VIDEOS',
    description: 'Experimental visual art synchronized with rhythm to create unforgettable musical experiences.',
    icon: <Mic2 className="w-6 h-6" />,
    img: CINEMATIC_MEDIA.music,
    accent: 'pink'
  },
  {
    title: 'VFX & CGI',
    description: 'Bending reality with high-end digital environments and seamless integration of virtual elements.',
    icon: <Zap className="w-6 h-6" />,
    img: CINEMATIC_MEDIA.vfx,
    accent: 'cyan'
  }
]

const recentWorks = [
  {
    title: 'THE SILENT REEL',
    category: 'Feature Film',
    year: '2024',
    video: CINEMATIC_MEDIA.videos[0],
    placeholderImg: 'https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?w=800&auto=format&fit=crop',
    tags: ['4K', 'Anamorphic']
  },
  {
    title: 'URBAN ECHOES',
    category: 'Commercial',
    year: '2023',
    video: CINEMATIC_MEDIA.videos[1],
    placeholderImg: 'https://images.pexels.com/photos/16175210/pexels-photo-16175210.jpeg?cs=srgb&dl=pexels-miguel-de-la-rosa-506672256-16175210.jpg&fm=jpg&w=800&auto=format&fit=crop',
    tags: ['Color', 'Sound Design']
  },
  {
    title: 'BEYOND HORIZONS',
    category: 'Documentary',
    year: '2023',
    video: CINEMATIC_MEDIA.videos[2],
    placeholderImg: 'https://images.pexels.com/photos/36723639/pexels-photo-36723639.jpeg?w=800&auto=format&fit=crop',
    tags: ['Storytelling', 'VFX']
  },
]

export default function Home() {
  return (
    <div className="film-grain min-h-screen bg-midnight-950 text-white selection:bg-gold-500/30">
      <div className="scanline opacity-20" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12 pt-20">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-transparent to-midnight-950 z-10" />
          <div className="absolute inset-0 bg-midnight-950/60 z-10" />
          <motion.div
            className="w-full h-full"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage: `url(${CINEMATIC_MEDIA.hero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Hero Content */}
          <div className="flex-[1.2] text-center lg:text-left space-y-10">
            <ScrollReveal direction="fade">
              <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-black tracking-[0.3em] uppercase">
                <div className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse-rec" />
                <span>Global Production House</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-6xl md:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter">
                <span className="block text-glow-white">CRAFTING</span>
                <span className="gold-gradient-text italic font-cinzel block mt-2">PRESTIGE</span>
                <span className="block text-glow-white">CINEMA</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-cinema-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light tracking-tight border-l-4 border-gold-500/50 pl-6">
                From concept to screen, we deliver award-winning cinematic experiences for the world's leading brands and studios.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(234, 179, 8, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-6 bg-gold-500 text-midnight-950 font-black rounded-xl transition-all overflow-hidden flex items-center gap-3 text-lg"
                >
                  <Play className="w-6 h-6 fill-current" />
                  <span>START ROLLING</span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 border-2 border-white/10 text-white font-black rounded-xl flex items-center gap-3 hover:border-gold-500/50 transition-all text-lg"
                >
                  <span>OUR SHOWREEL</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Camera Model */}
          <div className="flex-1 w-full max-w-md xl:max-w-xl hidden lg:block">
            <ScrollReveal direction="zoom" delay={0.3}>
              <CameraModel />
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-gold-500 opacity-60 uppercase">Discover More</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500/50 to-transparent" />
        </motion.div>
      </section>

      {/* Services Section - 3 Per Row */}
      <section id="services" className="relative py-32 lg:py-48 px-6 bg-midnight-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-4">
            <ScrollReveal direction="fade">
              <span className="text-gold-500 font-black tracking-[0.5em] uppercase text-xs">Expertise</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                OUR <span className="gold-gradient-text italic font-cinzel">ECOSYSTEM</span>
              </h2>
            </ScrollReveal>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-6" />
          </div>

          <Stagger delay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -15, scale: 1.02 }}
                    className="group relative h-[500px] rounded-3xl overflow-hidden shadow-cinema-card border border-white/5 bg-midnight-900/40 backdrop-blur-sm"
                  >
                    {/* Media Layer */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-[1.5s]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/70 to-transparent" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                      <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-midnight-950 transition-colors duration-500 shadow-xl">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase group-hover:text-gold-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-cinema-300 group-hover:text-white transition-colors text-base leading-relaxed font-light mb-8">
                        {service.description}
                      </p>
                      <motion.button
                        className="flex items-center gap-2 text-gold-500 font-black text-xs tracking-[0.2em] group/btn"
                      >
                        LEARN MORE <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* Cinematic Quote Divider */}
      <section className="py-40 bg-midnight-900/20 relative overflow-hidden flex items-center justify-center text-center px-6">
        <ScrollReveal direction="fade">
          <div className="max-w-4xl mx-auto space-y-10">
            <Hexagon className="w-16 h-16 text-gold-500/20 mx-auto animate-spin-slow" />
            <h2 className="text-4xl md:text-6xl font-cinzel italic text-cinema-200 leading-tight">
              "Cinema is a matter of what's in the frame and what's out."
            </h2>
            <div className="text-gold-500 font-black tracking-[0.4em] text-sm uppercase">— MARTIN SCORSESE</div>
          </div>
        </ScrollReveal>
      </section>

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
            {[
              { label: 'AWARDS WON', val: '12+', icon: <Award /> },
              { label: 'FILMS RELEASED', val: '48', icon: <Film /> },
              { label: 'GLOBAL OFFICES', val: '04', icon: <Compass /> },
              { label: 'CLIENT SATISFACTION', val: '100%', icon: <Sparkles /> }
            ].map((stat, i) => (
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

      {/* CTA Section */}
      <section className="relative py-48 px-6 bg-midnight-950 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 select-none">
          <FilmReel size="xl" className="text-gold-500 scale-[5]" speed={40} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
          <ScrollReveal direction="fade">
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              LET'S DEFINE THE<br/>
              <span className="gold-gradient-text italic font-cinzel">NEXT CHAPTER</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-cinema-300 max-w-2xl mx-auto font-light leading-relaxed">
              We're currently accepting high-profile projects for 2025. Partner with us to create visual legacy.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-8 bg-white text-midnight-950 font-black rounded-2xl text-xl tracking-[0.2em] shadow-2xl transition-all"
            >
              INITIALIZE PROJECT
            </motion.button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

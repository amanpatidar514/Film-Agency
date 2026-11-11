import { motion } from 'framer-motion'
import { ScrollReveal, Stagger } from '../components/animations/ScrollReveal'
import { ChevronRight, Film, Clapperboard, Video, Sliders, Mic2, Zap } from 'lucide-react'

const services = [
  {
    title: 'FEATURE FILMS',
    description: 'High-concept cinematic narratives crafted for global audiences with award-winning production values.',
    icon: <Film className="w-6 h-6" />,
    img: 'https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg?w=800&auto=format&fit=crop',
    accent: 'gold'
  },
  {
    title: 'COMMERCIALS',
    description: 'Bespoke brand storytelling that converts through emotional resonance and visual excellence.',
    icon: <Clapperboard className="w-6 h-6" />,
    img: 'https://images.pexels.com/photos/16175210/pexels-photo-16175210.jpeg?cs=srgb&dl=pexels-miguel-de-la-rosa-506672256-16175210.jpg&fm=jpg&w=800&auto=format&fit=crop',
    accent: 'blue'
  },
  {
    title: 'DOCUMENTARIES',
    description: 'Intimate, powerful real-world stories told with cinematic sensitivity and technical precision.',
    icon: <Video className="w-6 h-6" />,
    img: 'https://images.pexels.com/photos/36723639/pexels-photo-36723639.jpeg?w=800&auto=format&fit=crop',
    accent: 'emerald'
  },
  {
    title: 'POST-PRODUCTION',
    description: 'Expert color grading, sound design, and VFX that elevate raw footage into a polished masterpiece.',
    icon: <Sliders className="w-6 h-6" />,
    img: 'https://images.pexels.com/photos/31718971/pexels-photo-31718971.jpeg?w=800&auto=format&fit=crop',
    accent: 'purple'
  },
  {
    title: 'MUSIC VIDEOS',
    description: 'Experimental visual art synchronized with rhythm to create unforgettable musical experiences.',
    icon: <Mic2 className="w-6 h-6" />,
    img: 'https://images.pexels.com/photos/28003176/pexels-photo-28003176.jpeg?w=800&auto=format&fit=crop',
    accent: 'pink'
  },
  {
    title: 'VFX & CGI',
    description: 'Bending reality with high-end digital environments and seamless integration of virtual elements.',
    icon: <Zap className="w-6 h-6" />,
    img: 'https://images.pexels.com/photos/9488225/pexels-photo-9488225.jpeg?cs=tinysrgb&dpr=1&w=800&auto=format&fit=crop',
    accent: 'cyan'
  }
]

export default function Services() {
  return (
    <div className="pt-20">
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
    </div>
  )
}
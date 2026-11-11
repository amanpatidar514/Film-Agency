import { motion } from 'framer-motion'
import { ScrollReveal } from '../components/animations/ScrollReveal'

export default function Contact() {
  const contactInfo = [
    { label: 'Address', value: 'Indore, Madhya Pradesh, India' },
    { label: 'Phone', value: '+91 731 555-0198' },
    { label: 'Email', value: 'hello@cineluxfilms.com' },
    { label: 'Studio Hours', value: 'Mon-Fri: 9:00 AM - 6:00 PM IST' }
  ]

  return (
    <div className="pt-20">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <ScrollReveal>
                  <h2 className="text-5xl font-cinzel text-gold-500 mb-6">Let's Talk</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-xl text-cinema-300 mb-10 max-w-md">
                    We'd love to hear about your project. Whether you have a clear vision or just an idea, let's create something extraordinary together.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4} direction="up">
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <p className="text-cinema-400">
                          <span className="text-gold-500 font-medium">{info.label}:</span> {info.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                  <div className="flex space-x-4 mt-10">
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                      href="#contact-form" className="px-6 py-3 border-2 border-gold-500 text-gold-500 rounded-full font-medium">
                      Download Project Brief
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                      href="#social" className="px-6 py-3 bg-gold-500 text-midnight-900 rounded-full font-medium">
                      Follow Our Work
                    </motion.a>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <form id="contact-form" className="bg-midnight-900 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  {['Name', 'Email', 'Phone'].map((field, i) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <input
                        type="text"
                        placeholder={field}
                        className="w-full bg-midnight-800 border border-midnight-700 rounded-full px-6 py-4 text-cinema-50 placeholder-cinema-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </motion.div>
                  ))}

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 * 0.1 }}>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="w-full bg-midnight-800 border border-midnight-700 rounded-2xl px-6 py-4 text-cinema-50 placeholder-cinema-400 focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-gold-500 text-midnight-900 font-medium rounded-full text-lg"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

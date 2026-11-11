import { motion } from 'framer-motion'
import { useAnimationControls } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'shutter' | 'zoom'
  delay?: number
  className?: string
}

const variants = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.8 },
    },
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.8 },
    },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.8 },
    },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.8 },
    },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  },
  shutter: {
    hidden: { opacity: 0, clipPath: 'inset(10% 50% 10% 50%)' },
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
    }
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15, duration: 1 }
    }
  }
}

export function ScrollReveal({ children, direction = 'up', delay = 0, className }: ScrollRevealProps) {
  const controls = useAnimationControls()
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start('visible')
          setHasAnimated(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [controls, hasAnimated])

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

interface StaggerProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function Stagger({ children, delay = 0, className }: StaggerProps) {
  const controls = useAnimationControls()
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start('visible')
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [controls, hasAnimated])

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

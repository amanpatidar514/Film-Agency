import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface CameraRollerProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const rollVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      duration: 1,
    },
  },
}

export function CameraRoller({ children, delay = 0, className }: CameraRollerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={rollVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

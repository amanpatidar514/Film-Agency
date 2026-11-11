import { motion } from 'framer-motion'

interface FilmReelProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
}

export function FilmReel({ className, size = 'md' }: FilmReelProps) {
  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" />
        <path
          d="M50 5A45 45 0 0 1 95 50"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="50" cy="50" r="8" fill="currentColor" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
        <path
          d="M35 50h30M50 35v30"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  )
}

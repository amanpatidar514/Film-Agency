# CineLux Films - Film Agency Website

A highly interactive, dynamic film agency website with professional animations, camera rolling effects, and smooth scroll animations.

## Tech Stack
- **React 18** with TypeScript
- **Vite** for build tooling
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **React Router** for navigation

## Project Structure

```
film-agency-website/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   ├── CameraRoller.tsx    # Camera rolling effects
│   │   │   ├── FilmReel.tsx        # Spinning film reel component
│   │   │   └── ScrollReveal.tsx    # Scroll-triggered animations
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Page header with scroll effects
│   │   │   ├── Footer.tsx          # Footer with social links
│   │   │   └── Navigation.tsx      # Navigation menu
│   │   └── ui/
│   ├── pages/
│   │   ├── Home.tsx               # Landing page
│   │   ├── Services.tsx           # Services page
│   │   ├── Projects.tsx           # Portfolio page
│   │   └── Contact.tsx            # Contact form
│   ├── styles/
│   │   └── globals.css            # Global styles with animations
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Color Palette
- **Midnight Navy** (#0a0f1f) - Primary background
- **Cinema Cream** (#f8f4e3) - Primary text
- **Gold** (#d4af37) - Accent and highlights
- **Crimson** (#b22222) - Secondary accent

## Key Features

### 1. Hero Section - Camera Rolling Effect
- Full-screen cinematic background with film grain texture
- Typewriter effect for tagline
- Animated navigation bar with blur effect on scroll

### 2. Services Section - "Components Unfolding"
- Staggered animation as cards appear
- Hover effects with scale transformation
- Film icons for visual identity

### 3. Portfolio Section - "Grid Projection"
- Masonry grid with film reel overlays
- Smooth entrance animations from right to left

### 4. Animated Components
- **ScrollReveal**: Reveal elements on scroll with directional options
- **Stagger**: Cascade animations for multiple children
- **FilmReel**: Spinning film reel SVG component
- **CameraRoller**: Simulates camera movement effects

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Dependencies

- framer-motion: ^11.15.0
- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.24.0

## Fonts
- Cinzel (Cinematic headings)
- Inter (Body text)
- Beau (Optional accents)

## Animation Features

### Hover Effects
- Scale transformations (1.05x on hover)
- Smooth spring animations
- Cursor pointer changes

### Scroll Animations
- Fade up/down effects
- Slide left/right effects
- Staggered child animations

### Micro-interactions
- Button hover states
- Card lift effects
- Camera dot indicator animation

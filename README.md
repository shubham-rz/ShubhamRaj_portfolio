# Shubham Raj — Developer Portfolio

A premium animated developer portfolio built with React, Vite, and Framer Motion.

## Tech Stack

- **Vite** — lightning-fast build tool
- **React 18** — functional components with hooks
- **Framer Motion** — smooth, elegant animations
- **CSS Modules** — scoped component styling
- **React Router** — client-side routing
- **React Icons** — icon library

## Getting Started

```bash
npm install
npm run dev
```

## Adding Your Profile Photo

Replace the placeholder at `public/profile.jpg` with your professional portrait image. The hero section will automatically display it in a circular frame with a glow effect.

## Project Structure

```
src/
├── animations/         # Framer Motion variants
├── assets/             # Static assets
├── components/
│   ├── About/          # About section with skill cards
│   ├── Contact/        # Contact form and social links
│   ├── CustomCursor/   # Animated custom cursor
│   ├── Hero/           # Hero section with profile photo
│   ├── Layout/         # Main layout orchestrator
│   ├── Navbar/         # Fixed navigation bar
│   ├── ParticleBackground/ # Canvas particle effect
│   ├── Projects/       # Project showcase cards
│   ├── Skills/         # Skill progress bars
│   └── Timeline/       # Professional journey timeline
├── data/               # Project data, skills, timeline
├── styles/             # Global styles and variables
├── App.jsx
└── main.jsx
```

## Features

- Dark premium theme with indigo/green accents
- Scroll-triggered animations on every section
- Floating profile image with glow pulse effect
- Animated particle background
- Custom cursor with trail effect
- Responsive design (desktop, tablet, mobile)
- Code splitting with React.lazy and Suspense
- Animated skill progress bars
- Vertical timeline with scroll reveal
- Contact form with mailto integration

## Build

```bash
npm run build
npm run preview
```

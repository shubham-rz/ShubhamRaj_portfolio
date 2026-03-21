import { Suspense, lazy } from 'react';
import Navbar from '../Navbar/Navbar';
import CustomCursor from '../CustomCursor/CustomCursor';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import Hero from '../Hero/Hero';

const About = lazy(() => import('../About/About'));
const Projects = lazy(() => import('../Projects/Projects'));
const Timeline = lazy(() => import('../Timeline/Timeline'));
const Skills = lazy(() => import('../Skills/Skills'));
const Contact = lazy(() => import('../Contact/Contact'));

function SectionLoader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.9rem',
    }}>
      Loading...
    </div>
  );
}

export default function Layout() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Timeline />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

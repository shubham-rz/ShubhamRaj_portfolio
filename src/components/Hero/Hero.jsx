import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInLeft, fadeInUp, floatingAnimation, glowPulse, staggerContainer } from '../../animations/animationVariants';
import { socialLinks } from '../../data/projectsData';
import styles from './Hero.module.css';

const profileImg = '/profile.png';

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroInner}>
        <motion.div
          className={styles.imageCol}
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.imageWrapper} animate={floatingAnimation}>
            <div className={styles.imageGlow} />
            <motion.div
              className={styles.imageRingOuter}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div className={styles.imageRing} animate={glowPulse} />
            <img
              src={profileImg}
              alt="Tarun Sharma"
              className={styles.profileImage}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.textCol}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.name} variants={fadeInUp}>
            Shubham
            <span className={styles.nameHighlight}> Raj</span>
          </motion.h1>

          <motion.div className={styles.roles} variants={fadeInUp}>
            <span className={`${styles.roleBadge} ${styles.rolePrimary}`}>Frontend Developer</span>
            <span className={`${styles.roleBadge} ${styles.roleSecondary}`}>React Developer</span>
            <span className={`${styles.roleBadge} ${styles.rolePrimary}`}>UI Developer</span>
          </motion.div>


          <motion.p className={styles.statement} variants={fadeInUp}>
            I design <span className={styles.statementHighlight}>scalable UI systems</span> and build
            <span className={styles.statementHighlight}>high-performance frontend architectures </span>
            with <span className={styles.statementHighlight}>3.5+ years</span> of expertise in
            <span className={styles.statementHighlight}> React & Next.js </span>, creating
            <span className={styles.statementHighlight}> seamless, performant, and user-first</span> web experiences.
          </motion.p>


          <motion.div className={styles.buttons} variants={fadeInUp}>
            <button
              className={styles.btnPrimary}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
            <a
              href="/resume.pdf"
              download="Tarun_Sharma_Resume.pdf"
              className={styles.btnSecondary}
              onClick={(e) => {
                e.preventDefault();
                const driveWin = window.open(socialLinks.resume, '_blank');
                if (!driveWin || driveWin.closed) {
                  window.location.href = '/resume.pdf';
                }
              }}
            >
              Download Resume
            </a>
            <button
              className={styles.btnOutline}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {isMobile ? (
              <motion.div
                className={styles.mobileScrollHint}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className={styles.swipeIcon}>
                  <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="10" cy="9" r="2" fill="currentColor" />
                    <path d="M10 16 L10 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M7 19 L10 22 L13 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className={styles.swipeText}>Scroll</span>
              </motion.div>
            ) : (
              <motion.div
                className={styles.mouse}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className={styles.mouseBody}>
                  <motion.div
                    className={styles.mouseWheel}
                    animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

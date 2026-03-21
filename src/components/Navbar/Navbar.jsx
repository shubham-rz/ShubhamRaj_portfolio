import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './Navbar.module.css';

const navItems = ['About', 'Projects', 'Timeline', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setMobileOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${mobileOpen ? styles.menuOpen : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={styles.navInner}>
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item} className={styles.navLink} onClick={() => scrollTo(item)}>
              {item}
            </li>
          ))}
          <li>
            <button className={styles.contactBtn} onClick={() => scrollTo('Contact')}>
              Let's Talk
            </button>
          </li>
        </ul>

        <div className={styles.controls}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <div key={item} className={styles.mobileLink} onClick={() => scrollTo(item)}>
            {item}
          </div>
        ))}
      </div>
    </motion.nav>
  );
}

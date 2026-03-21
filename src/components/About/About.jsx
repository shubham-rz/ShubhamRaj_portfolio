import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaJsSquare, FaCubes, FaBolt, FaPlug } from 'react-icons/fa';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../animations/animationVariants';
import styles from './About.module.css';

const coreSkills = [
  { icon: <FaReact />, name: 'React', desc: 'Component architecture & hooks' },
  { icon: <FaJsSquare />, name: 'JavaScript ES6+', desc: 'Modern language features' },
  { icon: <FaCubes />, name: 'Component Architecture', desc: 'Scalable design systems' },
  { icon: <FaBolt />, name: 'Performance Optimization', desc: 'Rendering & bundle tuning' },
  { icon: <FaPlug />, name: 'REST API Integration', desc: 'Seamless data layer connectivity' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.aboutInner}>
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Interfaces</span> That Scale
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A frontend engineer passionate about crafting high-quality, performant user experiences.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.textSide}
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p className={styles.paragraph}>
              With <span className={styles.highlight}>3.5+ years of experience</span> in frontend
              engineering, I specialize in building{' '}
              <span className={styles.highlight}>scalable React applications</span>,
              reusable UI component systems, and performance-optimized interfaces.
            </p>
            <p className={styles.paragraph}>
              My engineering philosophy centers on{' '}
              <span className={styles.highlight}>clean architecture</span>,{' '}
              <span className={styles.highlight}>thoughtful abstractions</span>, and
              obsessive attention to user experience. I believe great frontends are not just
              beautiful — they are fast, accessible, and maintainable.
            </p>

            <div className={styles.stats}>
              <motion.div className={styles.statCard} whileHover={{ scale: 1.05 }}>
                <div className={styles.statNumber}>3.5+</div>
                <div className={styles.statLabel}>Years Exp</div>
              </motion.div>
              <motion.div className={styles.statCard} whileHover={{ scale: 1.05 }}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Projects</div>
              </motion.div>
              <motion.div className={styles.statCard} whileHover={{ scale: 1.05 }}>
                <div className={styles.statNumber}>30%</div>
                <div className={styles.statLabel}>Perf Gains</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={styles.skillsSide}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p className={styles.skillsSideTitle}>Core Competencies</p>
            {coreSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                variants={fadeInUp}
                custom={i}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.skillIcon}>{skill.icon}</div>
                <div className={styles.skillInfo}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillDesc}>{skill.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

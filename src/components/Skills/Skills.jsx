import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRocket, FaTools } from 'react-icons/fa';
import { skills } from '../../data/projectsData';
import { fadeInUp, staggerContainer } from '../../animations/animationVariants';
import styles from './Skills.module.css';

const categoryIcons = {
  'Frontend Engineering': <FaCode />,
  'Performance & Architecture': <FaRocket />,
  'Tooling & Workflow': <FaTools />,
};

function SkillBar({ skill, inView, delay }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPercent}>{skill.level}%</span>
      </div>
      <div className={styles.barTrack}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <div className={styles.skillsInner}>
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A comprehensive overview of the technologies and methodologies I work with daily.
          </p>
        </motion.div>

        <motion.div
          className={styles.categories}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              className={styles.category}
              variants={fadeInUp}
              custom={ci}
            >
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>{categoryIcons[category]}</span>
                {category}
              </h3>
              <div className={styles.skillItems}>
                {items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    inView={inView}
                    delay={ci * 0.2 + si * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

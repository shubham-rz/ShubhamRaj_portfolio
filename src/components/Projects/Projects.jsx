import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCubes, FaChartBar } from 'react-icons/fa';
import { projects } from '../../data/projectsData';
import { fadeInUp, staggerContainer } from '../../animations/animationVariants';
import styles from './Projects.module.css';

const projectIcons = [<FaCubes />, <FaChartBar />];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={styles.projects} id="projects" ref={ref}>
      <div className={styles.projectsInner}>
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">
            Projects I've <span className="gradient-text">Engineered</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Production-grade applications built with scalable architecture and attention to performance.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={styles.card}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -4 }}
            >
              <div className={styles.cardVisual}>
                <motion.div
                  className={styles.cardIcon}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  {projectIcons[i % projectIcons.length]}
                </motion.div>
                <div className={styles.cardNumber}>0{i + 1}</div>
                <div className={styles.cardTechPreview}>
                  {project.tech.map((_, ti) => (
                    <span key={ti} className={styles.cardTechDot} />
                  ))}
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <ul className={styles.features}>
                  {project.features.map((f) => (
                    <li key={f} className={styles.feature}>{f}</li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techBadge}>{t}</span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.cardLinks}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className={styles.cardLink}>
                        <FaGithub /> GitHub
                      </a>
                    )}
                    <a href={project.live} target="_blank" rel="noreferrer" className={styles.cardLink}>
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                  <div className={styles.cardStatus}>
                    <span className={styles.statusDot} />
                    Completed
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

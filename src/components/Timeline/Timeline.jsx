import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { timelineData } from '../../data/projectsData';
import { fadeInUp } from '../../animations/animationVariants';
import styles from './Timeline.module.css';

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={styles.item}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
    >
      <div className={`${styles.dot} ${inView ? styles.dotActive : ''}`}>
        <div className={styles.dotInner} />
        {inView && <div className={styles.dotPulse} />}
      </div>

      <p className={styles.year}>{item.year}</p>
      <div className={styles.card}>
        <h3 className={styles.role}>{item.role}</h3>
        <p className={styles.company}>{item.company}</p>
        <ul className={styles.points}>
          {item.points.map((point) => (
            <li key={point} className={styles.point}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const trackRef = useRef(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const trackTop = rect.top;
      const trackHeight = rect.height;
      const viewportCenter = window.innerHeight * 0.6;
      const scrolled = viewportCenter - trackTop;
      const percent = Math.min(Math.max(scrolled / trackHeight, 0), 1);
      setFillHeight(percent * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.timeline} id="timeline">
      <div className={styles.timelineInner}>
        <motion.div
          ref={headerRef}
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My career path and the milestones that shaped my engineering approach.
          </p>
        </motion.div>

        <div className={styles.track} ref={trackRef}>
          <div className={styles.line} />
          <div
            className={styles.lineFill}
            style={{ height: `${fillHeight}%` }}
          />
          {timelineData.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

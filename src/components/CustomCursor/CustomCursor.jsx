import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const onMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <motion.div
        className={styles.cursor}
        style={{ left: cursorXSpring, top: cursorYSpring }}
      />
      <motion.div
        className={styles.cursorDot}
        style={{ left: dotX, top: dotY }}
      />
    </>
  );
}

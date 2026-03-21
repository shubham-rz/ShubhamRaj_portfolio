import { useRef, useEffect, useState } from 'react';
import styles from './ParticleBackground.module.css';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const [isLight, setIsLight] = useState(() => document.documentElement.getAttribute('data-theme') === 'light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isLight || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 1;
        this.baseSize = this.size;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.5 + 0.15;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (mouse.x != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            this.size = this.baseSize + force * 2;
          } else {
            this.size = this.baseSize;
          }
        }

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw(rgb) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${this.opacity})`;
        ctx.fill();
      }
    }

    const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 10000));
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    const connectParticles = (rgb) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgb}, ${0.1 * (1 - dist / 160)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const theme = document.documentElement.getAttribute('data-theme');
      const rgb = theme === 'light' ? '234, 88, 12' : '99, 102, 241';

      particles.forEach((p) => {
        p.update();
        p.draw(rgb);
      });
      connectParticles(rgb);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isLight]);

  return (
    <div style={{ display: isLight ? 'none' : 'block' }}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}

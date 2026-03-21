import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { socialLinks } from '../../data/projectsData';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../animations/animationVariants';
import styles from './Contact.module.css';

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${socialLinks.email}`;

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.contactInner}>
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.infoSide}
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p className={styles.infoParagraph}>
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of something amazing. Feel free
              to reach out through any of the channels below.
            </p>

            <div className={styles.infoLinks}>
              <a href={`mailto:${socialLinks.email}`} className={styles.infoLink}>
                <span className={styles.infoLinkIcon}><FaEnvelope /></span>
                {socialLinks.email}
              </a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className={styles.infoLink}>
                <span className={styles.infoLinkIcon}><FaGithub /></span>
                GitHub Profile
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className={styles.infoLink}>
                <span className={styles.infoLinkIcon}><FaLinkedin /></span>
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className={styles.inputGroup}>
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <motion.button
              type="submit"
              className={`${styles.submitBtn} ${status === 'success' ? styles.submitSuccess : ''}`}
              whileHover={status === 'idle' ? { scale: 1.03 } : {}}
              whileTap={status === 'idle' ? { scale: 0.97 } : {}}
              disabled={status === 'sending' || status === 'success'}
            >
              {status === 'idle' && <><FaPaperPlane /> Send Message</>}
              {status === 'sending' && <><FaSpinner className={styles.spinner} /> Sending...</>}
              {status === 'success' && <><FaCheckCircle /> Message Sent!</>}
              {status === 'error' && <><FaPaperPlane /> Failed — Try Again</>}
            </motion.button>

            {status === 'success' && (
              <motion.p
                className={styles.statusMsg}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className={`${styles.statusMsg} ${styles.statusError}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.form>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Designed & Engineered by <span className={styles.footerHighlight}>Shubham Raj</span>
          </p>
          <div className={styles.footerSocials}>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className={styles.footerSocial}>
              <FaGithub />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className={styles.footerSocial}>
              <FaLinkedin />
            </a>
            <a href={`mailto:${socialLinks.email}`} className={styles.footerSocial}>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

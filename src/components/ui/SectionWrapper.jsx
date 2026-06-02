import { useEffect, useRef } from 'react';
import './SectionWrapper.css';

/**
 * Wrapper component for page sections.
 * Provides consistent padding, max-width, and scroll-reveal animation.
 *
 * @param {object} props
 * @param {string} [props.id] - Section ID for anchor linking
 * @param {'dark'|'surface'|'transparent'} [props.bg] - Background variant
 * @param {boolean} [props.narrow] - Use narrow max-width
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Section content
 */
export default function SectionWrapper({
  id,
  bg = 'transparent',
  narrow = false,
  className = '',
  children,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section section--${bg} ${className}`}
    >
      <div className={`section__inner ${narrow ? 'container--narrow' : ''}`}>
        {children}
      </div>
    </section>
  );
}

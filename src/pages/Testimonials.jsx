import SectionWrapper from '../components/ui/SectionWrapper';
import TestimonialCard from '../components/ui/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';
import './Testimonials.css';

/**
 * Testimonials dedicated page.
 * Unique dark hero with a featured pull-quote + full testimonial listing.
 */
export default function Testimonials() {
  const featured = testimonials[0];
  const remaining = testimonials.slice(1);

  return (
    <div className="page page--testimonials">
      {/* ---- UNIQUE HERO: Dark with featured testimonial quote ---- */}
      <section className="testimonials-hero" id="testimonials-hero">
        <div className="testimonials-hero__inner container">
          <div className="testimonials-hero__quote-mark">&ldquo;</div>

          <blockquote className="testimonials-hero__featured-quote">
            {featured.quote}
          </blockquote>

          <div className="testimonials-hero__stars">
            {Array.from({ length: featured.rating }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>

          <div className="testimonials-hero__author">
            <span className="testimonials-hero__name">{featured.name}</span>
            <span className="testimonials-hero__role">{featured.role}</span>
          </div>
        </div>
      </section>

      {/* ---- All Testimonials ---- */}
      <SectionWrapper id="all-testimonials" bg="transparent">
        <p className="testimonials-section__label">
          More Success Stories
        </p>
        <div className="grid-3">
          {remaining.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

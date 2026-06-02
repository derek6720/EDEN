import { Star } from 'lucide-react';
import './TestimonialCard.css';

/**
 * Testimonial card component.
 *
 * @param {object} props
 * @param {string} props.quote - Client testimonial text
 * @param {string} props.name - Client name
 * @param {string} props.role - Client role/business
 * @param {number} [props.rating=5] - Star rating (1-5)
 */
export default function TestimonialCard({ quote, name, role, rating = 5 }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__stars">
        {Array.from({ length: rating }, (_, i) => (
          <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
        ))}
      </div>
      <blockquote className="testimonial-card__quote">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="testimonial-card__author">
        <span className="testimonial-card__name">{name}</span>
        <span className="testimonial-card__role">{role}</span>
      </div>
    </div>
  );
}

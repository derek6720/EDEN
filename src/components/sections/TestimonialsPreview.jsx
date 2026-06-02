import SectionWrapper from '../ui/SectionWrapper';
import TestimonialCard from '../ui/TestimonialCard';
import Button from '../ui/Button';
import { testimonials } from '../../data/testimonials';
import './TestimonialsPreview.css';

/**
 * Testimonials preview section — shows 3 featured testimonials on homepage.
 */
export default function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3);

  return (
    <SectionWrapper id="testimonials-preview" bg="transparent">
      <div className="testimonials-preview">
        <div className="testimonials-preview__header">
          <h2 className="testimonials-preview__title">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="testimonials-preview__subtitle">
            Real stories from real entrepreneurs who trusted us with their
            financial journey.
          </p>
        </div>

        <div className="testimonials-preview__grid">
          {featured.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>

        <div className="testimonials-preview__action">
          <Button variant="outline" size="md" href="/testimonials">
            See All Testimonials
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import TestimonialCard from '../components/ui/TestimonialCard';
import { testimonials } from '../data/testimonials';

/**
 * Testimonials dedicated page — full listing of all client stories.
 */
export default function Testimonials() {
  return (
    <div className="page page--testimonials">
      <PageHero
        title="Testimonials"
        subtitle="Real stories from real entrepreneurs who trusted us with their financial journey."
      />

      <SectionWrapper id="all-testimonials" bg="transparent">
        <div className="grid-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

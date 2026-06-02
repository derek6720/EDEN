import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import AboutMission from '../components/sections/AboutMission';
import CoursesPreview from '../components/sections/CoursesPreview';
import TestimonialsPreview from '../components/sections/TestimonialsPreview';
import CTABanner from '../components/sections/CTABanner';

/**
 * Homepage — scrollable landing page with all section previews.
 */
export default function Home() {
  return (
    <div className="page page--home">
      <Hero />
      <ServicesOverview />
      <AboutMission />
      <CoursesPreview />
      <TestimonialsPreview />
      <CTABanner />
    </div>
  );
}

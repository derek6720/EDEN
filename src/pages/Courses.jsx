import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import CourseCard from '../components/ui/CourseCard';
import { courses } from '../data/courses';

/**
 * Courses dedicated page — full listing of all available courses.
 */
export default function Courses() {
  return (
    <div className="page page--courses">
      <PageHero
        title="Courses"
        subtitle="Level up your financial knowledge with our comprehensive courses designed to help you build wealth and grow your business."
      />

      <SectionWrapper id="all-courses" bg="transparent">
        <div className="grid-3">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

import SectionWrapper from '../ui/SectionWrapper';
import CourseCard from '../ui/CourseCard';
import Button from '../ui/Button';
import { courses } from '../../data/courses';
import './CoursesPreview.css';

/**
 * Courses preview section — shows 3 course cards on the homepage.
 */
export default function CoursesPreview() {
  return (
    <SectionWrapper id="courses-preview" bg="surface">
      <div className="courses-preview">
        <div className="courses-preview__header">
          <h2 className="courses-preview__title">
            Level Up Your <span className="text-gradient">Knowledge</span>
          </h2>
          <p className="courses-preview__subtitle">
            Our courses are designed to give you the knowledge and confidence
            to build a strong financial foundation and grow your business.
          </p>
        </div>

        <div className="courses-preview__grid">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="courses-preview__action">
          <Button variant="outline" size="md" href="/courses">
            View All Courses
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

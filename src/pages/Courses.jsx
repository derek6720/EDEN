import SectionWrapper from '../components/ui/SectionWrapper';
import CourseCard from '../components/ui/CourseCard';
import { courses } from '../data/courses';
import { BookOpen, Users, Award } from 'lucide-react';
import './Courses.css';

/**
 * Courses dedicated page.
 * Unique warm-amber hero with learning stats + full course listing.
 */
export default function Courses() {
  return (
    <div className="page page--courses">
      {/* ---- UNIQUE HERO: Warm amber with learning stats ---- */}
      <section className="courses-hero" id="courses-hero">
        <div className="courses-hero__inner container">
          <h1 className="courses-hero__title">
            Level Up Your{' '}
            <span className="text-gradient">Financial Knowledge</span>
          </h1>
          <p className="courses-hero__subtitle">
            Comprehensive courses designed to help you build wealth, grow your
            business, and create lasting financial freedom.
          </p>

          <div className="courses-hero__stats">
            <div className="courses-hero__stat">
              <BookOpen size={20} />
              <span>{courses.length} Courses</span>
            </div>
            <div className="courses-hero__stat">
              <Users size={20} />
              <span>Self-Paced Learning</span>
            </div>
            <div className="courses-hero__stat">
              <Award size={20} />
              <span>Expert-Led Content</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Course Listing ---- */}
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

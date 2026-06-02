import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { ShieldCheck, TrendingUp, FileSearch, AlertTriangle } from 'lucide-react';
import flyerImg from '../assets/flyer-credit-repair.jpg';

/**
 * Credit Repair dedicated page — services and process overview.
 */
export default function CreditRepair() {
  return (
    <div className="page page--credit-repair">
      <PageHero
        title="Credit Repair"
        subtitle="Build a strong credit foundation and create a pathway to better funding opportunities."
      />

      <SectionWrapper id="credit-overview" bg="transparent">
        <div className="page-two-col">
          <div className="page-two-col__content">
            <h2>Your Credit Is Your <span className="text-gradient">Superpower</span></h2>
            <p>
              Your credit profile is the gateway to business funding. A strong
              credit score opens doors to better rates, higher limits, and more
              options. We help you build, repair, and leverage your credit to
              position you for success.
            </p>
            <p>
              Our proven strategies have helped clients increase their scores by
              100+ points, unlocking funding they never thought possible.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Start Your Credit Journey
            </Button>
          </div>

          <div className="page-two-col__media">
            <img
              src={flyerImg}
              alt="Eden Prosperity — Credit Repair Services"
              className="page-two-col__image"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="credit-process" bg="surface">
        <div className="section-header-center">
          <h2>Our <span className="text-gradient">Process</span></h2>
          <p>A simple, structured approach to improving your credit.</p>
        </div>
        <div className="grid-4">
          <div className="step-card">
            <div className="step-card__number">1</div>
            <FileSearch size={24} className="step-card__icon" />
            <h3 className="step-card__title">Credit Analysis</h3>
            <p className="step-card__text">
              We review your full credit report and identify areas for
              improvement, errors, and dispute opportunities.
            </p>
          </div>
          <div className="step-card">
            <div className="step-card__number">2</div>
            <AlertTriangle size={24} className="step-card__icon" />
            <h3 className="step-card__title">Dispute & Repair</h3>
            <p className="step-card__text">
              We file disputes, negotiate with creditors, and work to remove
              negative items from your report.
            </p>
          </div>
          <div className="step-card">
            <div className="step-card__number">3</div>
            <TrendingUp size={24} className="step-card__icon" />
            <h3 className="step-card__title">Build & Grow</h3>
            <p className="step-card__text">
              We help you establish positive credit habits and build a stronger
              credit profile for the future.
            </p>
          </div>
          <div className="step-card">
            <div className="step-card__number">4</div>
            <ShieldCheck size={24} className="step-card__icon" />
            <h3 className="step-card__title">Fund & Thrive</h3>
            <p className="step-card__text">
              With an improved score, we connect you with funding options and
              help you start growing your business.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

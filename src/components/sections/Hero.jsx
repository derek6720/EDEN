import Button from '../ui/Button';
import founderImg from '../../assets/flyer-business-funding.jpg';
import './Hero.css';

/**
 * Hero section — full viewport with headline, subtext, CTA, and founder image.
 * Split layout: text left, image right on desktop.
 */
export default function Hero() {
  return (
    <section className="hero" id="hero-section">
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__eyebrow fade-up">Eden Prosperity LLC</p>
          <h1 className="hero__title fade-up fade-up-delay-1">
            Are You Looking For{' '}
            <span className="text-gradient">Business Funding?</span>
          </h1>
          <p className="hero__subtitle fade-up fade-up-delay-2">
            Quick and hassle-free business loans tailored to your needs.
            Build wealth, create financial freedom, and pursue your dreams
            through business ownership.
          </p>
          <div className="hero__actions fade-up fade-up-delay-3">
            <Button variant="primary" size="lg" href="/contact">
              Apply Now
            </Button>
            <Button variant="secondary" size="lg" href="/business-loans">
              Learn More
            </Button>
          </div>

          <div className="hero__proof fade-up fade-up-delay-4">
            <div className="hero__proof-item">
              <span className="hero__proof-value">$20M+</span>
              <span className="hero__proof-label">Loans Available</span>
            </div>
            <div className="hero__proof-divider" />
            <div className="hero__proof-item">
              <span className="hero__proof-value">Same Day</span>
              <span className="hero__proof-label">Approval</span>
            </div>
            <div className="hero__proof-divider" />
            <div className="hero__proof-item">
              <span className="hero__proof-value">No Proof</span>
              <span className="hero__proof-label">Of Income Required</span>
            </div>
          </div>
        </div>

        <div className="hero__image-area fade-up fade-up-delay-2">
          <div className="hero__image-frame">
            <img src={founderImg} alt="Eden Prosperity — Business Funding" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Button from '../ui/Button';
import './CTABanner.css';

/**
 * Final CTA banner section — strong closing statement with action buttons.
 */
export default function CTABanner() {
  return (
    <section className="cta-banner" id="cta-banner">
      <div className="cta-banner__inner container">
        <h2 className="cta-banner__title">
          Your Future Starts Here.
          <br />
          <span className="text-gradient">Let Us Help You Build It.</span>
        </h2>
        <p className="cta-banner__subtitle">
          Whether you&apos;re launching your first business or scaling an
          existing one, we&apos;re here to help you every step of the way.
        </p>
        <div className="cta-banner__actions">
          <Button variant="primary" size="lg" href="/contact">
            Get Started
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

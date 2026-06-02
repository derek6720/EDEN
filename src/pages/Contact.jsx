import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

/**
 * Contact dedicated page — inquiry form and contact info.
 * Form is visual-only (non-functional) until backend is connected.
 */
export default function Contact() {
  return (
    <div className="page page--contact">
      <PageHero
        title="Contact Us"
        subtitle="Ready to get started? Reach out and let's talk about how we can help you achieve your goals."
      />

      <SectionWrapper id="contact-form" bg="transparent">
        <div className="contact-layout">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form__group">
              <label htmlFor="contact-name" className="contact-form__label">
                Full Name
              </label>
              <input
                type="text"
                id="contact-name"
                className="contact-form__input"
                placeholder="Your full name"
              />
            </div>

            <div className="contact-form__group">
              <label htmlFor="contact-email" className="contact-form__label">
                Email Address
              </label>
              <input
                type="email"
                id="contact-email"
                className="contact-form__input"
                placeholder="you@example.com"
              />
            </div>

            <div className="contact-form__group">
              <label htmlFor="contact-phone" className="contact-form__label">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-phone"
                className="contact-form__input"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="contact-form__group">
              <label htmlFor="contact-service" className="contact-form__label">
                Service Interested In
              </label>
              <select id="contact-service" className="contact-form__input">
                <option value="">Select a service...</option>
                <option value="business-loans">Business Loans</option>
                <option value="business-funding">Business Funding</option>
                <option value="credit-repair">Credit Repair</option>
                <option value="courses">Courses</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="contact-form__group">
              <label htmlFor="contact-message" className="contact-form__label">
                Message
              </label>
              <textarea
                id="contact-message"
                className="contact-form__input contact-form__textarea"
                rows="5"
                placeholder="Tell us about your goals..."
              />
            </div>

            <Button variant="primary" size="lg" type="submit">
              Send Message
            </Button>
          </form>

          {/* Contact Info Sidebar */}
          <aside className="contact-info">
            <h3 className="contact-info__title">Get In Touch</h3>

            <div className="contact-info__item">
              <Mail size={20} className="contact-info__icon" />
              <div>
                <p className="contact-info__label">Email</p>
                <a href="mailto:EdenProsperityLLC@Gmail.com" className="contact-info__value">
                  EdenProsperityLLC@Gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info__item">
              <Phone size={20} className="contact-info__icon" />
              <div>
                <p className="contact-info__label">Instagram</p>
                <a
                  href="https://instagram.com/_K_C_BIG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__value"
                >
                  @_K_C_BIG
                </a>
              </div>
            </div>

            <div className="contact-info__item">
              <MapPin size={20} className="contact-info__icon" />
              <div>
                <p className="contact-info__label">Service Area</p>
                <p className="contact-info__value">Nationwide — USA</p>
              </div>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </div>
  );
}

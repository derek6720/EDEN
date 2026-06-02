import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';
import { Banknote, Clock, FileCheck, ShieldCheck, BadgeDollarSign } from 'lucide-react';
import flyerImg from '../assets/flyer-business-loan.jpg';

/**
 * Business Loans dedicated page — details on loan offerings.
 */
export default function BusinessLoans() {
  return (
    <div className="page page--business-loans">
      <PageHero
        title="Business Loans"
        subtitle="Access capital to grow your business with competitive rates, flexible terms, and same-day approval."
      />

      {/* Loan highlights */}
      <SectionWrapper id="loan-details" bg="transparent">
        <div className="page-two-col">
          <div className="page-two-col__content">
            <h2>Funding That Works <span className="text-gradient">For You</span></h2>
            <p>
              We connect entrepreneurs with the right funding solutions — whether
              you&apos;re launching a new venture, expanding operations, or managing
              cash flow. Our network of lenders offers competitive rates with
              terms tailored to your business needs.
            </p>

            <ul className="feature-list">
              <li className="feature-list__item">
                <BadgeDollarSign size={20} className="feature-list__icon" />
                <span>Loans up to $20 Million</span>
              </li>
              <li className="feature-list__item">
                <Clock size={20} className="feature-list__icon" />
                <span>Same Day Approval</span>
              </li>
              <li className="feature-list__item">
                <FileCheck size={20} className="feature-list__icon" />
                <span>No Proof of Income Required</span>
              </li>
              <li className="feature-list__item">
                <ShieldCheck size={20} className="feature-list__icon" />
                <span>No Minimum Credit Score</span>
              </li>
            </ul>

            <Button variant="primary" size="lg" href="/contact">
              Apply Now
            </Button>
          </div>

          <div className="page-two-col__media">
            <img
              src={flyerImg}
              alt="Eden Prosperity — Business Loans"
              className="page-two-col__image"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Loan types */}
      <SectionWrapper id="loan-types" bg="surface">
        <div className="section-header-center">
          <h2>Types of <span className="text-gradient">Loans</span></h2>
          <p>We offer a wide range of financing options for every stage of your business.</p>
        </div>
        <div className="grid-3">
          <ServiceCard
            icon={<Banknote size={28} />}
            title="Term Loans"
            description="Traditional business loans with fixed repayment schedules. Ideal for large investments, equipment purchases, or expansion projects."
            to="/contact"
          />
          <ServiceCard
            icon={<Banknote size={28} />}
            title="Lines of Credit"
            description="Flexible revolving credit you can draw from as needed. Perfect for managing cash flow, seasonal expenses, or unexpected opportunities."
            to="/contact"
          />
          <ServiceCard
            icon={<Banknote size={28} />}
            title="SBA Loans"
            description="Government-backed loans with favorable terms and lower interest rates. We help you navigate the application process from start to finish."
            to="/contact"
          />
        </div>
      </SectionWrapper>
    </div>
  );
}

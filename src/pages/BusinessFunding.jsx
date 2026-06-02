import PageHero from '../components/ui/PageHero';
import SectionWrapper from '../components/ui/SectionWrapper';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';
import { TrendingUp, Landmark, HandCoins, Handshake } from 'lucide-react';
import flyerImg from '../assets/flyer-business-funding.jpg';

/**
 * Business Funding dedicated page — funding options and grant info.
 */
export default function BusinessFunding() {
  return (
    <div className="page page--business-funding">
      <PageHero
        title="Business Funding"
        subtitle="Explore diverse funding options including grants, lines of credit, and alternative financing solutions."
      />

      <SectionWrapper id="funding-overview" bg="transparent">
        <div className="page-two-col">
          <div className="page-two-col__media">
            <img
              src={flyerImg}
              alt="Eden Prosperity — Business Funding"
              className="page-two-col__image"
            />
          </div>

          <div className="page-two-col__content">
            <h2>Diverse Funding <span className="text-gradient">Solutions</span></h2>
            <p>
              Not every business needs the same type of funding. We help you
              explore and secure the right financial solution — from traditional
              loans and grants to alternative financing options that match your
              unique situation.
            </p>
            <p>
              Whether you&apos;re a startup looking for seed capital or an
              established business seeking growth funding, our team provides
              personalized guidance every step of the way.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Explore Funding Options
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="funding-types" bg="surface">
        <div className="section-header-center">
          <h2>Funding <span className="text-gradient">Options</span></h2>
          <p>Multiple pathways to the capital your business needs.</p>
        </div>
        <div className="grid-3">
          <ServiceCard
            icon={<Landmark size={28} />}
            title="Business Grants"
            description="Free money that doesn't need to be repaid. We help you find and apply for grants you actually qualify for — including same-day options."
            to="/contact"
          />
          <ServiceCard
            icon={<HandCoins size={28} />}
            title="Revenue-Based Financing"
            description="Get funded based on your business revenue, not your credit score. Flexible repayment that scales with your income."
            to="/contact"
          />
          <ServiceCard
            icon={<Handshake size={28} />}
            title="Investor Matching"
            description="Connect with investors who believe in your vision. We help prepare your pitch and match you with the right funding partners."
            to="/contact"
          />
        </div>
      </SectionWrapper>
    </div>
  );
}

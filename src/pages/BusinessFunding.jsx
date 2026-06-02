import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { Landmark, HandCoins, Handshake } from 'lucide-react';
import flyerImg from '../assets/flyer-business-funding.jpg';
import './BusinessFunding.css';

/**
 * Business Funding dedicated page.
 * Unique cyan-accented hero with funding pathway badges + timeline layout.
 */
export default function BusinessFunding() {
  return (
    <div className="page page--business-funding">
      {/* ---- UNIQUE HERO: Light with funding pathway badges ---- */}
      <section className="funding-hero" id="funding-hero">
        <div className="funding-hero__inner container">
          <h1 className="funding-hero__title">Business Funding</h1>
          <p className="funding-hero__subtitle">
            Explore diverse funding options including grants, lines of credit,
            and alternative financing solutions tailored to your goals.
          </p>

          <div className="funding-hero__paths">
            <div className="funding-hero__path">
              <Landmark size={18} />
              <span>Grants</span>
            </div>
            <div className="funding-hero__path-connector" />
            <div className="funding-hero__path">
              <HandCoins size={18} />
              <span>Revenue-Based</span>
            </div>
            <div className="funding-hero__path-connector" />
            <div className="funding-hero__path">
              <Handshake size={18} />
              <span>Investor Matching</span>
            </div>
          </div>

          <Button variant="primary" size="lg" href="/contact">
            Explore Options
          </Button>
        </div>
      </section>

      {/* ---- Funding Types: Timeline layout ---- */}
      <SectionWrapper id="funding-types" bg="surface">
        <div className="section-header-center">
          <h2>Funding <span className="text-gradient">Pathways</span></h2>
          <p>Multiple routes to the capital your business needs.</p>
        </div>
        <div className="funding-timeline">
          <div className="funding-timeline__item">
            <div className="funding-timeline__marker">
              <Landmark size={24} />
            </div>
            <div className="funding-timeline__content">
              <h3 className="funding-timeline__title">Business Grants</h3>
              <p className="funding-timeline__text">
                Free money that doesn&apos;t need to be repaid. We help you find and
                apply for grants you actually qualify for — including same-day options.
              </p>
            </div>
          </div>
          <div className="funding-timeline__item">
            <div className="funding-timeline__marker">
              <HandCoins size={24} />
            </div>
            <div className="funding-timeline__content">
              <h3 className="funding-timeline__title">Revenue-Based Financing</h3>
              <p className="funding-timeline__text">
                Get funded based on your business revenue, not your credit score.
                Flexible repayment that scales with your income.
              </p>
            </div>
          </div>
          <div className="funding-timeline__item">
            <div className="funding-timeline__marker">
              <Handshake size={24} />
            </div>
            <div className="funding-timeline__content">
              <h3 className="funding-timeline__title">Investor Matching</h3>
              <p className="funding-timeline__text">
                Connect with investors who believe in your vision. We help prepare
                your pitch and match you with the right funding partners.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ---- Overview Section ---- */}
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
    </div>
  );
}

import SectionWrapper from '../ui/SectionWrapper';
import ServiceCard from '../ui/ServiceCard';
import { Banknote, TrendingUp, ShieldCheck } from 'lucide-react';
import './ServicesOverview.css';

/**
 * Services overview section — 3 service cards on the homepage.
 */
const services = [
  {
    icon: <Banknote size={28} />,
    title: 'Business Loans',
    description:
      'Access capital to grow your business with competitive rates and flexible terms. Same day approval available with loans up to $20 million.',
    to: '/business-loans',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Business Funding Qualifications',
    description:
      'Explore diverse funding options, from grants to lines of credit, and check the requirements to qualify your business for same-day capital.',
    to: '/business-funding-qualifications',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Credit Consulting',
    description:
      'Build a strong credit foundation. We help you optimize your credit profile and create a pathway to better funding opportunities.',
    to: '/credit-consulting',
  },
];

export default function ServicesOverview() {
  return (
    <SectionWrapper id="services" bg="surface">
      <div className="services-overview">
        <div className="services-overview__header">
          <h2 className="services-overview__title">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="services-overview__subtitle">
            We provide comprehensive solutions to help you build wealth and
            create financial freedom through business ownership.
          </p>
        </div>
        <div className="services-overview__grid reveal-stagger">
          {services.map((service) => (
            <ServiceCard key={service.to} {...service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

/**
 * Service card component for displaying a service overview.
 *
 * @param {object} props
 * @param {React.ReactNode} props.icon - Lucide icon component
 * @param {string} props.title - Service name
 * @param {string} props.description - Short description
 * @param {string} props.to - React Router link destination
 */
export default function ServiceCard({ icon, title, description, to }) {
  return (
    <Link to={to} className="service-card">
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      <span className="service-card__link">
        Learn More <ArrowRight size={16} />
      </span>
    </Link>
  );
}

import './PageHero.css';

/**
 * Reusable page hero banner for dedicated pages.
 *
 * @param {string} title - Page title
 * @param {string} subtitle - Short description
 */
export default function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero" id="page-hero">
      <div className="page-hero__inner container">
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

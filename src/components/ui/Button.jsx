import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Reusable button component with multiple variants.
 *
 * @param {object} props
 * @param {'primary'|'secondary'|'accent'|'outline'} props.variant - Visual style
 * @param {'sm'|'md'|'lg'} props.size - Button size
 * @param {string} [props.href] - If provided, renders as a React Router Link
 * @param {string} [props.externalHref] - If provided, renders as an anchor tag
 * @param {function} [props.onClick] - Click handler
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  externalHref,
  onClick,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <Link to={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (externalHref) {
    return (
      <a
        href={externalHref}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

import React from 'react';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'accent' | 'outline'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  type = 'button',
  target,
  rel,
  ariaLabel
}) {
  const baseClasses = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

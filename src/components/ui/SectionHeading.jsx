import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center', // 'left' | 'center'
  theme = 'light',  // 'light' | 'dark'
  className = ''
}) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`section-heading ${isCenter ? 'text-center mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${isDark ? 'eyebrow-dark' : ''}`}>
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className={`section-title ${isDark ? 'text-white' : ''}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`section-description ${isCenter ? 'mx-auto' : ''} ${isDark ? 'text-slate-light' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}

import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  text: string;
  styleIndex: number; // 0 to 19 (mapping to style1 to style20)
}

const Logo: React.FC<LogoProps> = ({ text, styleIndex }) => {
  // styleIndex is 0-based, so we add 1 for class name (style1, style2, ...)
  const styleClass = styles[`style${styleIndex + 1}`];

  // Specific adjustments for some styles that might need extra DOM elements
  // Style 9 (Glitch) needs data-text attribute
  // Style 14 (Corporate) uses ::before, handled in CSS
  // Style 16 (Monogram) might need truncation if text is too long, but we'll let CSS handle overflow or just display as is.
  // Style 20 (Animated) uses ::after for underline

  const containerClass = styles.container;

  return (
    <div className={containerClass}>
      <span 
        className={styleClass} 
        data-text={text} // For glitch effect
      >
        {text}
      </span>
    </div>
  );
};

export default Logo;

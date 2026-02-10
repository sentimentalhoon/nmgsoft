import React from 'react';
import Logo from './Logo';

const NAMES = [
  "NMGSOFT",
  "NMyeongGaSoft",
  "NMG",
  "앤명가소프트",
  "앤명가"
];

const STYLES_COUNT = 20;

const LogoShowcase: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '100%' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
        NMGSOFT Logo Collection
      </h1>
      
      {NAMES.map((name) => (
        <div key={name} style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            borderLeft: '4px solid #333',
            paddingLeft: '1rem'
          }}>
            {name}
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
            gap: '1rem' 
          }}>
            {Array.from({ length: STYLES_COUNT }).map((_, index) => (
              <Logo key={`${name}-${index}`} text={name} styleIndex={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoShowcase;

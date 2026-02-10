import React from 'react';
import Image from 'next/image';

const LOGOS = [
  { 
    category: 'NMGSOFT - Modern Minimalist', 
    items: [
      { src: '/logos/modern-minimalist-1.png', label: 'Variant 1' },
      { src: '/logos/modern-minimalist-2.png', label: 'Variant 2' },
    ]
  },
  { 
    category: 'NMGSOFT - Futuristic Tech', 
    items: [
      { src: '/logos/futuristic-tech-1.png', label: 'Variant 1' },
      { src: '/logos/futuristic-tech-2.png', label: 'Variant 2' },
    ]
  },
  { 
    category: 'NMGSOFT - Luxury Serif', 
    items: [
      { src: '/logos/luxury-serif-1.png', label: 'Variant 1' },
      { src: '/logos/luxury-serif-2.png', label: 'Variant 2' },
    ]
  },
  { 
    category: 'NMyeongGaSoft - Premium Corporate', 
    items: [
      { src: '/logos/nmyeonggasoft-premium-corporate-1.png', label: 'Variant 1' },
      { src: '/logos/nmyeonggasoft-premium-corporate-2.png', label: 'Variant 2' },
    ]
  },
  { 
    category: 'NMGSOFT - Abstract Icon', 
    items: [
      { src: '/logos/abstract-icon-1.png', label: 'Variant 1' },
    ]
  },
];

const ImageLogoShowcase: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '100%', backgroundColor: '#f9fafb' }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '3rem', 
        fontSize: '2rem', 
        fontWeight: 'bold',
        color: '#111'
      }}>
        AI Generated Brand Concepts
      </h2>
      
      {LOGOS.map((section) => (
        <div key={section.category} style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            fontSize: '1.4rem', 
            marginBottom: '1.5rem', 
            color: '#333', 
            borderLeft: '4px solid #000', 
            paddingLeft: '1rem',
            marginLeft: '1rem'
          }}>
            {section.category}
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '2rem',
            justifyContent: 'center'
          }}>
            {section.items.map((logo, index) => (
              <div key={`${section.category}-${index}`} style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s',
              }}>
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  aspectRatio: '1/1',
                  marginBottom: '1rem',
                  overflow: 'hidden',
                  borderRadius: '8px'
                }}>
                  <Image 
                    src={logo.src} 
                    alt={logo.label} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <p style={{ fontWeight: '600', color: '#555' }}>{logo.label}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageLogoShowcase;

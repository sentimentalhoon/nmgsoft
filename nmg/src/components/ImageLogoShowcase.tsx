"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const LOGOS = [
  {
    category: 'Official Brand Identity (User Provided)',
    items: [
      { src: '/logos/official-logo-metallic.png', label: 'Official Metallic' },
      { src: '/logos/official-logo-black.png', label: 'Official Black & White' },
      { src: '/logos/official-logo-3.png', label: 'Official Logo 3' },
      { src: '/logos/official-logo-4.png', label: 'Official Logo 4' },
      { src: '/logos/official-logo-5.png', label: 'Official Logo 5' },
    ]
  },
  {
    category: '앤명가 (N-Myeong-Ga) - Official Parent Company',
    items: [
      { src: '/logos/nmyeongga-parent-card-1.png', label: 'Premium Executive' },
      { src: '/logos/nmyeongga-parent-card-2.png', label: 'Heritage Seal' },
      { src: '/logos/nmyeongga-parent-card-3.png', label: 'Modern Abstract' },
    ]
  },
  {
    category: '앤명가소프트 (NMG Soft) - IT Subsidiary',
    items: [
      { src: '/logos/nmg-soft-card-1.png', label: 'Tech Geometric' },
      { src: '/logos/nmg-soft-card-2.png', label: 'Minimalist Cloud' },
      { src: '/logos/nmg-soft-card-3.png', label: 'Pixel Creative' },
    ]
  },
  {
    category: '앤명가글램핑팜리조트 (NMG Glamping) - Leisure Subsidiary',
    items: [
      { src: '/logos/nmg-glamping-card-1.png', label: 'Line Art Badge' },
      { src: '/logos/nmg-glamping-card-2.png', label: 'Watercolor Nature' },
      { src: '/logos/nmg-glamping-card-3.png', label: 'Rustic Emblem' },
    ]
  },
  {
    category: 'NMGSOFT - Creative Variations',
    items: [
      { src: '/logos/nmyeongga-logo-minimalist.png', label: 'Modern Minimalist' },
      { src: '/logos/nmyeongga-logo-hybrid.png', label: 'Tech-Nature Hybrid' },
      { src: '/logos/nmyeongga-logo-calligraphy.png', label: 'Traditional Calligraphy' },
      { src: '/logos/nmyeongga-logo-luxury.png', label: 'Luxury Serif' },
      { src: '/logos/nmyeongga-logo-isometric.png', label: '3D Isometric' },
      { src: '/logos/nmyeongga-logo-geometric.png', label: 'Geometric Abstract' },
      { src: '/logos/nmyeongga-logo-lineart.png', label: 'Sleek Line Art' },
      { src: '/logos/nmyeongga-logo-emblem.png', label: 'Corporate Emblem' },
      { src: '/logos/nmyeongga-logo-futuristic.png', label: 'Futuristic Gradient' },
      { src: '/logos/nmyeongga-logo-eco.png', label: 'Eco-Friendly' },
    ]
  },
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
  const [selectedLogo, setSelectedLogo] = useState<{ src: string, label: string } | null>(null);

  return (
    <div style={{ padding: '2rem', maxWidth: '100%', backgroundColor: '#f9fafb' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '3rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#111'
      }}>
        Brand Identity & Concepts
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
              <div
                key={`${section.category}-${index}`}
                onClick={() => setSelectedLogo(logo)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  padding: '1rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
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

      {/* Lightbox Modal */}
      {selectedLogo && (
        <div
          onClick={() => setSelectedLogo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backdropFilter: 'blur(5px)'
          }}
        >
          <button
            onClick={() => setSelectedLogo(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.4)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          >
            ✕
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              height: '80vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={selectedLogo.src}
                alt={selectedLogo.label}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p style={{
              color: 'white',
              marginTop: '1.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              {selectedLogo.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageLogoShowcase;

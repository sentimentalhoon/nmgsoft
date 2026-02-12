"use client";

import React, { useRef, useState } from 'react';

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section style={{ 
      padding: '4rem 2rem', 
      background: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1d1d1f', marginBottom: '0.5rem' }}>
          Brand Vision
        </h2>
        <p style={{ color: '#666', fontSize: '1rem' }}>
          Experience the dynamic visual identity of NMyeongGa Soft.
        </p>
      </div>

      <div style={{
        position: 'relative',
        maxWidth: '400px', // Restricted width for vertical video
        width: '100%',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        backgroundColor: '#000',
        aspectRatio: '9/16' // Vertical aspect ratio
      }}>
        <video
          ref={videoRef}
          src="/videos/20260205164033_n4jQn9Nhw3.mp4"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          controls
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

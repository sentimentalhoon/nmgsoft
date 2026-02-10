"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Ensure autoplay works even if the browser blocks it initially
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section style={{ 
      position: "relative", 
      width: "100%", 
      height: "60vh", 
      overflow: "hidden",
      borderRadius: "0 0 2rem 2rem", // Stylish bottom curve
      boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
    }}>
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted} // Controlled by React state
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // filter: "grayscale(100%) contrast(1.1)", // Removed filter to show original color
        }}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay Content */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)",
        color: "white",
        textAlign: "center",
        padding: "2rem",
        pointerEvents: "none" // Let clicks pass through if needed, but button needs pointer-events: auto
      }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "800", 
          marginBottom: "1rem",
          textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          letterSpacing: "-0.02em"
        }}>
          NMyeongGa Soft
        </h1>
        <p style={{
          fontSize: "1rem",
          fontWeight: "300",
          opacity: 0.9,
          maxWidth: "300px",
          lineHeight: "1.6"
        }}>
          Innovation in every pixel.<br/>
          Software that matters.
        </p>
      </div>

      {/* Mute Toggle Button */}
      <button 
        onClick={toggleMute}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          background: "rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 20,
          pointerEvents: "auto", // Re-enable pointer events
          color: "white",
          transition: "all 0.3s ease"
        }}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          // Muted Icon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          // Unmuted Icon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
      
      {/* Scroll Indicator */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        animation: "bounce 2s infinite",
        opacity: 0.8,
        pointerEvents: "none"
      }}>
        <div style={{
          width: "24px",
          height: "40px",
          border: "2px solid white",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "6px"
        }}>
          <div style={{
            width: "4px",
            height: "8px",
            background: "white",
            borderRadius: "2px"
          }} />
        </div>
        <style jsx>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
            40% {transform: translateY(-10px) translateX(-50%);}
            60% {transform: translateY(-5px) translateX(-50%);}
          }
        `}</style>
      </div>
    </section>
  );
}

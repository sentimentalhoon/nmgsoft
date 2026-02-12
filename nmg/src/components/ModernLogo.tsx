"use client";

import React from 'react';

export default function ModernLogo() {
  return (
    <section style={{ 
      padding: '4rem 2rem', 
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4rem',
      borderTop: '1px solid #eaeaea',
      borderBottom: '1px solid #eaeaea'
    }}>
      
      {/* 
        MASTERPIECE LOGO IMPLEMENTATION 
        - Precise Geometric Construction
        - Custom Typography (Geometric Sans-Serif)
        - Perfect Optical Balance
      */}

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px'
      }}>

        {/* 1. Official Black (Masterpiece Variant) */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem'
        }}>
          <LogoSVG variant="black" width={400} />
        </div>

        {/* 2. Official Metallic (Premium Variant) */}
        <div style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          padding: '3rem',
          borderRadius: '30px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <LogoSVG variant="metallic" width={400} />
        </div>

      </div>

      <div style={{ textAlign: 'center', marginTop: '1rem', opacity: 0.6 }}>
        <p style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
          Official Brand Identity
        </p>
      </div>

    </section>
  );
}

function LogoSVG({ variant, width = 400 }: { variant: 'black' | 'metallic', width?: number }) {
  const isMetallic = variant === 'metallic';
  const height = width * 0.35; // Aspect ratio
  
  // High-End Definitions
  const colors = {
    black: '#111111',
    metallicRequest: "url(#masterpiece-gradient)",
    text: isMetallic ? "url(#masterpiece-gradient-text)" : "#111111",
    symbol: isMetallic ? "url(#masterpiece-gradient-symbol)" : "#111111",
  };

  return (
    <svg width={width} height={height} viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        {/* Luxurious Metallic Gradient for Dark Background */}
        <linearGradient id="masterpiece-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFC69D" /> {/* Gold/Champagne Highlight */}
          <stop offset="30%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#A89F91" />
          <stop offset="100%" stopColor="#DFC69D" />
        </linearGradient>

        <linearGradient id="masterpiece-gradient-symbol" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E2E2E2" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#B0B0B0" />
        </linearGradient>

        <linearGradient id="masterpiece-gradient-text" x1="0%" y1="20%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#CCCCCC" />
        </linearGradient>

        {/* Soft Drop Shadow for Depth */}
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.15" />
        </filter>
        
        {/* Inner Glow for Metallic */}
         <filter id="inner-glow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
            <feOffset dx="1" dy="1"/>
            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feFlood floodColor="white" floodOpacity="0.5"/>
            <feComposite in2="SourceAlpha" operator="in" />
            <feMerge>
                <feMergeNode in="SourceGraphic"/>
                <feMergeNode/>
            </feMerge>
        </filter>
      </defs>

      <g filter={isMetallic ? "" : ""}>
        
        {/* --- SYMBOL CONSTRUCTION --- */}
        {/* Based on Official Logo: Hexagon with Check/Arrow Mark and Circuit Nodes */}
        <g transform="translate(10, 10) scale(0.9)">
            
            {/* 1. Main Hexagon Arrow Shape 
                Precise coordinates for a robust, aggressive tech arrow.
            */}
            <path 
                d="M40,20 L130,20 L160,50 L160,110 L130,110 L130,60 L70,60 L70,140 L120,140 L145,165 L50,165 L20,135 L20,50 L40,20 Z" 
                fill={colors.symbol} 
            />
            
            {/* 2. Inner Diagonal Slash 
                The cut that makes it dynamic.
            */}
            <path 
                d="M80,110 L115,75 L140,75 L140,95 L100,135 L80,135 Z" 
                fill={colors.symbol}
            />

            {/* 3. Circuit Node Accents (Top) */}
            <circle cx="60" cy="75" r="4" fill={colors.symbol} />
            <line x1="60" y1="75" x2="95" y2="40" stroke={colors.symbol} strokeWidth="3" strokeLinecap="round" />
            <circle cx="95" cy="40" r="4" fill={colors.symbol} />

            {/* 4. Circuit Node Accents (Bottom) */}
            <circle cx="85" cy="130" r="4" fill={colors.symbol} />
            <line x1="85" y1="130" x2="120" y2="95" stroke={colors.symbol} strokeWidth="3" strokeLinecap="round" />
            <circle cx="120" cy="95" r="4" fill={colors.symbol} />
        </g>


        {/* --- TYPOGRAPHY CONSTRUCTION --- */}
        {/* 
            Custom built vector letters for "앤명가" 
            Bold, Modern, Geometric Sans-Serif style (similar to Malgun Gothic Bold / Noto Sans KR Black)
        */}
        <g transform="translate(180, 45)">
            
            {/* '앤' (N) */}
            <g transform="translate(0,0)">
                {/* ㅇ */}
                <path d="M25,25 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0" fill="none" stroke={colors.text} strokeWidth="9" />
                {/* ㅐ */}
                <rect x="55" y="0" width="9" height="75" fill={colors.text} /> {/* Vertical 1 */}
                <rect x="55" y="32" width="20" height="9" fill={colors.text} /> {/* Horizontal */}
                <rect x="75" y="0" width="9" height="75" fill={colors.text} /> {/* Vertical 2 */}
                {/* ㄴ */}
                <path d="M5,85 L5,115 L85,115 L85,106 L14,106 L14,85 Z" fill={colors.text} />
            </g>

            {/* '명' (Myeong) */}
            <g transform="translate(100,0)">
                {/* ㅁ */}
                <path d="M5,5 L45,5 L45,45 L5,45 Z" fill="none" stroke={colors.text} strokeWidth="9" />
                {/* ㅕ */}
                <rect x="65" y="15" width="15" height="9" fill={colors.text} /> {/* Horizontal 1 */}
                <rect x="65" y="35" width="15" height="9" fill={colors.text} /> {/* Horizontal 2 */}
                <rect x="80" y="0" width="9" height="75" fill={colors.text} />  {/* Vertical */}
                {/* ㅇ */}
                <path d="M45,100 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0" fill="none" stroke={colors.text} strokeWidth="9" />
            </g>

            {/* '가' (Ga) */}
            <g transform="translate(205,0)">
                {/* ㄱ */}
                <path d="M5,5 L65,5 L65,55 L56,55 L56,14 L5,14 Z" fill={colors.text} />
                {/* ㅏ */}
                <rect x="80" y="0" width="9" height="115" fill={colors.text} /> {/* Vertical */}
                <rect x="89" y="55" width="18" height="9" fill={colors.text} /> {/* Horizontal Dot */}
            </g>

        </g>

        {/* --- SUBTITLE --- */}
        <g transform="translate(182, 155)">
            <text 
                fontFamily="Arial, sans-serif" 
                fontWeight="bold" 
                fontSize="18" 
                letterSpacing="4" 
                fill={isMetallic ? "#ccc" : "#555"}
            >
                TECHNOLOGY PARTNERS
            </text>
        </g>

      </g>
    </svg>
  );
}

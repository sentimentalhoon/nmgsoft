import React from 'react';

const AdvancedSvgLogoShowcase: React.FC = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '100%', backgroundColor: '#f0f2f5' }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '3rem',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#111'
            }}>
                Advanced Vector Concepts (High-Fidelity SVG)
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2.5rem',
                justifyContent: 'center'
            }}>

                {/* 1. Neon Glass Glow */}
                <LogoItem title="Neon Glass" description="Cyberpunk Glow Effect">
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ backgroundColor: '#111', borderRadius: '8px' }}>
                        <defs>
                            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <path d="M20 50 L40 20 L60 50 L80 20" fill="none" stroke="#0ff" strokeWidth="2" filter="url(#neon-glow)" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="50" y="80" textAnchor="middle" fill="#f0f" fontSize="14" fontWeight="bold" filter="url(#neon-glow)" fontFamily="sans-serif">NMG</text>
                        <path d="M10 50 L90 50" stroke="#333" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#0ff" strokeWidth="1" strokeDasharray="5,5" filter="url(#neon-glow)" />
                    </svg>
                </LogoItem>

                {/* 2. Brushed Metal */}
                <LogoItem title="Brushed Metal" description="Industrial Texture">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <linearGradient id="metal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#999" />
                                <stop offset="25%" stopColor="#fff" />
                                <stop offset="50%" stopColor="#ccc" />
                                <stop offset="75%" stopColor="#999" />
                                <stop offset="100%" stopColor="#eee" />
                            </linearGradient>
                            <filter id="noise">
                                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                                <feColorMatrix type="saturate" values="0" />
                                <feBlend mode="multiply" in2="SourceGraphic" />
                            </filter>
                        </defs>
                        <rect x="10" y="20" width="80" height="60" rx="5" fill="url(#metal-grad)" />
                        <rect x="10" y="20" width="80" height="60" rx="5" fill="url(#metal-grad)" filter="url(#noise)" opacity="0.4" />
                        <text x="50" y="55" textAnchor="middle" fontSize="24" fontWeight="900" fill="#333" style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.5), -1px -1px 0 rgba(0,0,0,0.2)' }}>NMG</text>
                        <rect x="15" y="25" width="5" height="5" rx="2.5" fill="#333" opacity="0.5" />
                        <rect x="80" y="25" width="5" height="5" rx="2.5" fill="#333" opacity="0.5" />
                        <rect x="15" y="70" width="5" height="5" rx="2.5" fill="#333" opacity="0.5" />
                        <rect x="80" y="70" width="5" height="5" rx="2.5" fill="#333" opacity="0.5" />
                    </svg>
                </LogoItem>

                {/* 3. Watercolour Wash */}
                <LogoItem title="Watercolour" description="Organic Fluidity">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <filter id="watercolor">
                                <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="5" result="turbulence" />
                                <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G" />
                                <feGaussianBlur stdDeviation="1" />
                            </filter>
                        </defs>
                        <circle cx="40" cy="40" r="30" fill="#FFC107" opacity="0.7" filter="url(#watercolor)" />
                        <circle cx="60" cy="60" r="30" fill="#E91E63" opacity="0.6" filter="url(#watercolor)" />
                        <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#333">앤명가</text>
                    </svg>
                </LogoItem>

                {/* 4. Paper Cutout Depth */}
                <LogoItem title="Paper Cutout" description="Layered Shadows">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <filter id="shadow1">
                                <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3" />
                            </filter>
                            <filter id="shadow2">
                                <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3" />
                            </filter>
                        </defs>
                        <rect x="0" y="0" width="100" height="100" fill="#e0e0e0" rx="10" />
                        <circle cx="50" cy="50" r="40" fill="#fff" filter="url(#shadow1)" />
                        <path d="M50 15 L85 80 L15 80 Z" fill="#4CAF50" filter="url(#shadow2)" transform="scale(0.8) translate(12, 10)" />
                        <circle cx="50" cy="55" r="15" fill="#8BC34A" />
                        <text x="50" y="60" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">ECO</text>
                    </svg>
                </LogoItem>

                {/* 5. Holographic Foil */}
                <LogoItem title="Holographic" description="Iridescent Gradient">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <linearGradient id="holo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ff00cc" />
                                <stop offset="33%" stopColor="#3333ff" />
                                <stop offset="66%" stopColor="#00ffcc" />
                                <stop offset="100%" stopColor="#ffff33" />
                            </linearGradient>
                        </defs>
                        <rect x="10" y="30" width="80" height="40" fill="url(#holo-grad)" rx="20" />
                        <text x="50" y="55" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff" letterSpacing="2">NMG</text>
                        <rect x="10" y="30" width="80" height="40" fill="url(#holo-grad)" rx="20" opacity="0.3" transform="translate(2,2)" />
                        <path d="M20 35 Q50 60 80 35" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
                    </svg>
                </LogoItem>

                {/* 6. Stained Glass */}
                <LogoItem title="Stained Glass" description="Mosaic Leadlight">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="#2196F3" stroke="#333" strokeWidth="3" />
                        <path d="M50 10 L50 50" stroke="#333" strokeWidth="3" />
                        <path d="M10 50 L50 50" stroke="#333" strokeWidth="3" />
                        <path d="M90 50 L50 50" stroke="#333" strokeWidth="3" />
                        <path d="M50 90 L50 50" stroke="#333" strokeWidth="3" />
                        <path d="M50 10 L10 50 L50 50 Z" fill="#4CAF50" stroke="none" />
                        <path d="M50 10 L90 50 L50 50 Z" fill="#FFC107" stroke="none" />
                        <path d="M10 50 L50 90 L50 50 Z" fill="#FF5722" stroke="none" />
                        <path d="M90 50 L50 90 L50 50 Z" fill="#9C27B0" stroke="none" />
                        <text x="50" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff" stroke="#000" strokeWidth="0.5">NMG</text>
                    </svg>
                </LogoItem>

                {/* 7. Crystal Facet */}
                <LogoItem title="Crystal Facet" description="Polished Gem">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon points="50,10 90,40 50,90 10,40" fill="#B3E5FC" />
                        <polygon points="50,10 90,40 50,50" fill="#81D4FA" stroke="#fff" strokeWidth="0.5" />
                        <polygon points="10,40 50,10 50,50" fill="#4FC3F7" stroke="#fff" strokeWidth="0.5" />
                        <polygon points="10,40 50,90 50,50" fill="#29B6F6" stroke="#fff" strokeWidth="0.5" />
                        <polygon points="90,40 50,90 50,50" fill="#03A9F4" stroke="#fff" strokeWidth="0.5" />
                        <text x="50" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff" letterSpacing="1">GEM</text>
                    </svg>
                </LogoItem>

                {/* 8. Embroidery Stitch */}
                <LogoItem title="Embroidery" description="Stitched Fabric">
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ backgroundColor: '#f5f5dc' }}>
                        <text x="50" y="60" textAnchor="middle" fontSize="30" fontWeight="bold" fill="none" stroke="#D32F2F" strokeWidth="2" strokeDasharray="3,2">N</text>
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#388E3C" strokeWidth="2" strokeDasharray="4,3" />
                        <path d="M20 50 Q50 20 80 50" fill="none" stroke="#1976D2" strokeWidth="2" strokeDasharray="2,2" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#5D4037" strokeWidth="1" strokeDasharray="1,2" />
                    </svg>
                </LogoItem>

                {/* 9. Liquid Blob */}
                <LogoItem title="Liquid Blob" description="Organic Tech">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <radialGradient id="blob-grad" cx="30%" cy="30%" r="70%">
                                <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#673AB7" />
                            </radialGradient>
                        </defs>
                        <path d="M40 10 Q70 0 80 30 Q90 60 60 80 Q30 100 10 70 Q-10 40 40 10" fill="url(#blob-grad)" />
                        <text x="50" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">SOFT</text>
                        <ellipse cx="35" cy="30" rx="10" ry="5" fill="#fff" opacity="0.4" transform="rotate(-30 35 30)" />
                    </svg>
                </LogoItem>

                {/* 10. Circuit Board Detail */}
                <LogoItem title="Deep Tech" description="Intricate Circuit">
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ backgroundColor: '#002' }}>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1a237e" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100" height="100" fill="url(#grid)" />
                        <path d="M20 80 L20 20 L50 20" fill="none" stroke="#00E676" strokeWidth="2" />
                        <path d="M80 80 L80 50 L50 50" fill="none" stroke="#00E676" strokeWidth="2" />
                        <circle cx="20" cy="80" r="3" fill="#00E676" />
                        <circle cx="50" cy="20" r="3" fill="#00E676" />
                        <circle cx="80" cy="80" r="3" fill="#00E676" />
                        <circle cx="50" cy="50" r="3" fill="#00E676" />
                        <text x="70" y="30" fill="#00E676" fontSize="10" fontFamily="monospace">CPU:ON</text>
                        <rect x="40" y="40" width="20" height="20" fill="none" stroke="#00E676" strokeWidth="1" />
                        <text x="50" y="54" textAnchor="middle" fill="#fff" fontSize="8">NMG</text>
                    </svg>
                </LogoItem>

            </div>
        </div>
    );
};

interface LogoItemProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const LogoItem: React.FC<LogoItemProps> = ({ title, description, children }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: '1.5rem',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
        }}>
            <div style={{
                width: '160px',
                height: '160px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '8px'
            }}>
                {children}
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#222' }}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#777' }}>{description}</p>
        </div>
    );
};

export default AdvancedSvgLogoShowcase;

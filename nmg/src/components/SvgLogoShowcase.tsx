import React from 'react';

const SvgLogoShowcase: React.FC = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '100%', backgroundColor: '#fff' }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '3rem',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#111'
            }}>
                Vector Design Concepts (SVG)
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '2rem',
                justifyContent: 'center'
            }}>

                {/* 1. Hexagon Node (Tech/Software) */}
                <LogoItem title="Hexagon Node" description="Tech & Connectivity">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#0052D4', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#4364F7', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" fill="none" stroke="url(#grad1)" strokeWidth="4" />
                        <circle cx="50" cy="50" r="15" fill="url(#grad1)" />
                        <circle cx="50" cy="10" r="4" fill="#111" />
                        <circle cx="85" cy="30" r="4" fill="#111" />
                        <circle cx="85" cy="70" r="4" fill="#111" />
                        <circle cx="50" cy="90" r="4" fill="#111" />
                        <circle cx="15" cy="70" r="4" fill="#111" />
                        <circle cx="15" cy="30" r="4" fill="#111" />
                        <path d="M50 50 L50 10 M50 50 L85 30 M50 50 L85 70 M50 50 L50 90 M50 50 L15 70 M50 50 L15 30" stroke="#ddd" strokeWidth="2" />
                        <text x="50" y="115" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">NMG</text>
                    </svg>
                </LogoItem>

                {/* 2. Mountain & Sun (Glamping) */}
                <LogoItem title="Nature Harmony" description="Resort & Leisure">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="#f0f9ff" />
                        <circle cx="70" cy="30" r="10" fill="#FDB813" />
                        <path d="M20 80 L50 30 L80 80 Z" fill="#2E8B57" opacity="0.8" />
                        <path d="M10 80 L40 40 L70 80 Z" fill="#228B22" opacity="0.9" />
                        <path d="M45 80 L50 30 L55 80 Z" fill="none" stroke="#fff" strokeWidth="0.5" />
                        <text x="50" y="95" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2E8B57">앤명가</text>
                    </svg>
                </LogoItem>

                {/* 3. Digital Leaf (Hybrid) */}
                <LogoItem title="Digital Ecology" description="Software & Nature">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M50 90 Q10 90 10 50 Q10 10 50 10 Q90 10 90 50 Q90 90 50 90" fill="none" stroke="#333" strokeWidth="2" />
                        <path d="M50 90 Q50 50 90 10" fill="none" stroke="#4CAF50" strokeWidth="3" />
                        <path d="M50 50 L20 50 M50 50 L30 30 M50 50 L30 70" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="20" cy="50" r="3" fill="#00BCD4" />
                        <circle cx="30" cy="30" r="3" fill="#00BCD4" />
                        <circle cx="30" cy="70" r="3" fill="#00BCD4" />
                        <path d="M60 40 Q70 30 80 40 Q70 50 60 40" fill="#4CAF50" />
                        <path d="M70 50 Q80 40 90 50 Q80 60 70 50" fill="#4CAF50" />
                    </svg>
                </LogoItem>

                {/* 4. Minimalist Wordmark */}
                <LogoItem title="Modern Typography" description="Clean & Bold">
                    <svg viewBox="0 0 140 60" className="w-full h-full">
                        <rect x="0" y="0" width="140" height="60" fill="#1a1a1a" rx="4" />
                        <text x="70" y="38" textAnchor="middle" fontSize="24" fontFamily="sans-serif" fontWeight="900" fill="#fff" letterSpacing="2">NMG</text>
                        <text x="70" y="52" textAnchor="middle" fontSize="8" fontFamily="serif" fill="#ccc">SOFT & RESORT</text>
                        <circle cx="20" cy="30" r="4" fill="#FFD700" />
                    </svg>
                </LogoItem>

                {/* 5. Interlocking Monogram */}
                <LogoItem title="Interlocked" description="Unity & Strength">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M30 30 L30 70 L50 70 L50 50 L70 50 L70 70" fill="none" stroke="#3F51B5" strokeWidth="8" strokeLinecap="square" />
                        <path d="M70 30 L70 55" fill="none" stroke="#FF5722" strokeWidth="8" strokeLinecap="square" />
                        <path d="M50 30 L50 45" fill="none" stroke="#FF5722" strokeWidth="8" strokeLinecap="square" />
                        <path d="M30 30 L70 30" fill="none" stroke="#3F51B5" strokeWidth="8" strokeLinecap="square" />
                        <text x="50" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">GROUP</text>
                    </svg>
                </LogoItem>

                {/* 6. Circuit Tree */}
                <LogoItem title="Circuit Roots" description="Growth & Tech">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M50 90 L50 60" stroke="#5D4037" strokeWidth="4" />
                        <path d="M50 60 L30 40 L30 20" stroke="#5D4037" strokeWidth="2" />
                        <path d="M50 60 L70 40 L70 20" stroke="#5D4037" strokeWidth="2" />
                        <path d="M50 60 L50 30" stroke="#5D4037" strokeWidth="2" />
                        <circle cx="30" cy="20" r="5" fill="#4CAF50" />
                        <circle cx="70" cy="20" r="5" fill="#4CAF50" />
                        <circle cx="50" cy="30" r="5" fill="#4CAF50" />
                        <circle cx="30" cy="40" r="2" fill="#2196F3" />
                        <circle cx="70" cy="40" r="2" fill="#2196F3" />
                        <path d="M30 40 L20 40 M70 40 L80 40" stroke="#2196F3" strokeWidth="1" />
                    </svg>
                </LogoItem>

                {/* 7. Shield Emblem */}
                <LogoItem title="Royal Shield" description="Trust & Heritage">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M50 10 L85 25 V50 C85 70 50 90 50 90 C50 90 15 70 15 50 V25 Z" fill="#1A237E" stroke="#FFC107" strokeWidth="2" />
                        <text x="50" y="45" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#fff" fontFamily="serif">N</text>
                        <text x="50" y="65" textAnchor="middle" fontSize="12" fontWeight="normal" fill="#FFC107" fontFamily="serif">MyeongGa</text>
                        <path d="M25 25 L35 25" stroke="#FFC107" strokeWidth="1" />
                        <path d="M65 25 L75 25" stroke="#FFC107" strokeWidth="1" />
                    </svg>
                </LogoItem>

                {/* 8. Abstract Wave */}
                <LogoItem title="Dynamic Wave" description="Innovation & Flow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <linearGradient id="gradWave" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#00c6ff', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#0072ff', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#eee" strokeWidth="2" />
                        <path d="M20 50 Q40 20 60 50 T100 50" fill="none" stroke="url(#gradWave)" strokeWidth="6" strokeLinecap="round" />
                        <path d="M10 50 Q30 80 50 50 T90 50" fill="none" stroke="url(#gradWave)" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
                        <text x="50" y="85" textAnchor="middle" fontSize="10" fill="#333" letterSpacing="1">NMG SOFT</text>
                    </svg>
                </LogoItem>

                {/* 9. Pixel Block */}
                <LogoItem title="Pixel Core" description="Digital Foundation">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="30" y="30" width="15" height="15" fill="#673AB7" />
                        <rect x="45" y="30" width="15" height="15" fill="#512DA8" />
                        <rect x="30" y="45" width="15" height="15" fill="#9575CD" />
                        <rect x="55" y="55" width="15" height="15" fill="#D1C4E9" />
                        <rect x="45" y="45" width="15" height="15" fill="#fff" stroke="#333" strokeWidth="1" />
                        <text x="52.5" y="55" textAnchor="middle" fontSize="10" fontWeight="bold">N</text>
                        <text x="50" y="85" textAnchor="middle" fontSize="10" fill="#333" fontFamily="monospace">PIXEL.NMG</text>
                    </svg>
                </LogoItem>

                {/* 10. Infinity Loop */}
                <LogoItem title="Infinite Vision" description="Endless Possibilities">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M30 50 C30 30 50 30 50 50 C50 70 70 70 70 50 C70 30 50 30 50 50 C50 70 30 70 30 50 Z"
                            fill="none" stroke="#E91E63" strokeWidth="4" />
                        <circle cx="30" cy="50" r="5" fill="#E91E63" />
                        <circle cx="70" cy="50" r="5" fill="#E91E63" />
                        <text x="50" y="85" textAnchor="middle" fontSize="10" fill="#880E4F">NBEYOND</text>
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
            backgroundColor: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
        }}>
            <div style={{
                width: '120px',
                height: '120px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {children}
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#333' }}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{description}</p>
        </div>
    );
};

export default SvgLogoShowcase;

import { Download, Eye } from 'lucide-react';

export const Resume = () => {
    return (
        <section id="resume" className="min-h-screen flex flex-col justify-center items-center container mx-auto px-6 relative z-10 pb-20 overflow-hidden">
            {/* Animated Trees on Left Side - Aligned with Card */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 1, marginLeft: 'calc(50% - 650px)', marginTop: '-50px' }}>
                {/* Tall Grass & Reeds - Left Foreground (New - Matches Image) */}
                <svg width="400" height="250" viewBox="0 0 400 250" className="absolute" style={{ left: '-350px', top: '300px', zIndex: 3 }}>
                    {/* Grass Blades */}
                    <path d="M10,250 Q20,150 15,50" stroke="rgba(8,20,12,0.95)" strokeWidth="3" fill="none" style={{ animation: 'treeShake 2s ease-in-out infinite' }} />
                    <path d="M30,250 Q40,160 50,80" stroke="rgba(8,20,12,0.95)" strokeWidth="2" fill="none" style={{ animation: 'treeShake 2.5s ease-in-out infinite 0.2s' }} />
                    <path d="M50,250 Q40,180 30,100" stroke="rgba(8,20,12,0.95)" strokeWidth="3" fill="none" style={{ animation: 'treeShake 2.2s ease-in-out infinite 0.1s' }} />
                    <path d="M70,250 Q80,170 90,60" stroke="rgba(8,20,12,0.95)" strokeWidth="2" fill="none" style={{ animation: 'treeShake 2.8s ease-in-out infinite 0.3s' }} />

                    {/* Reeds with Heads */}
                    <g style={{ animation: 'treeShake 3s ease-in-out infinite' }}>
                        <path d="M120,250 Q130,150 125,40" stroke="rgba(8,20,12,0.95)" strokeWidth="2" fill="none" />
                        <ellipse cx="125" cy="40" rx="4" ry="15" fill="rgba(8,20,12,0.95)" />
                    </g>
                    <g style={{ animation: 'treeShake 2.7s ease-in-out infinite 0.4s' }}>
                        <path d="M150,250 Q140,160 145,50" stroke="rgba(8,20,12,0.95)" strokeWidth="2" fill="none" />
                        <ellipse cx="145" cy="50" rx="3" ry="12" fill="rgba(8,20,12,0.95)" />
                    </g>

                    {/* More Grass */}
                    <path d="M180,250 Q190,190 200,100" stroke="rgba(8,20,12,0.95)" strokeWidth="2" fill="none" style={{ animation: 'treeShake 2.3s ease-in-out infinite 0.1s' }} />
                    <path d="M220,250 Q210,180 205,90" stroke="rgba(8,20,12,0.95)" strokeWidth="3" fill="none" style={{ animation: 'treeShake 2.6s ease-in-out infinite 0.2s' }} />
                </svg>

                {/* Ferns - Left Foreground (New - Moved closer) */}
                <svg width="300" height="200" viewBox="0 0 300 200" className="absolute" style={{ left: '-280px', top: '320px', zIndex: 4 }}>
                    <path d="M10,200 Q30,100 10,20" stroke="rgba(10,30,20,0.9)" strokeWidth="3" fill="none" style={{ animation: 'treeShake 3s ease-in-out infinite' }} />
                    <path d="M15,200 Q45,110 70,30" stroke="rgba(12,35,22,0.9)" strokeWidth="2" fill="none" style={{ animation: 'treeShake 2.8s ease-in-out infinite 0.2s' }} />
                    <path d="M5,200 Q-15,110 -40,30" stroke="rgba(12,35,22,0.9)" strokeWidth="2" fill="none" style={{ animation: 'treeShake 3.2s ease-in-out infinite 0.1s' }} />
                </svg>

                {/* Dense Bushes - Left Side (New - Moved closer and overlapping) */}
                <svg width="600" height="350" viewBox="0 0 600 350" className="absolute" style={{ left: '-380px', top: '250px', zIndex: 2 }}>
                    <path d="M0,350 Q50,250 100,300 T200,280 T300,320 T400,260 T500,300 T600,350 Z" fill="rgba(6,18,10,0.98)" />
                    <path d="M0,300 Q40,200 80,260 T160,240 T240,280 T320,220 T400,260 T480,200 T500,300 Z" fill="rgba(8,20,12,0.98)" />
                    <path d="M20,300 Q60,220 100,280 T180,260 T260,300 T340,240 T420,280 T500,300 Z" fill="rgba(12,28,18,0.95)" style={{ opacity: 0.9 }} />
                    <path d="M-20,300 Q20,180 60,240 T140,220 T220,260 T300,200 T380,240 T460,180 T500,300 Z" fill="rgba(5,15,8,1)" style={{ opacity: 0.95 }} />
                </svg>

                {/* Pine Tree 1 - Left (New) */}
                <svg width="140" height="420" viewBox="0 0 140 420" className="absolute" style={{ left: '-280px', top: '-40px', animation: 'treeShake 3.4s ease-in-out infinite 0.1s' }}>
                    <polygon points="70,20 110,120 30,120" fill="rgba(15,35,25,0.9)" />
                    <polygon points="70,80 120,180 20,180" fill="rgba(18,40,28,0.9)" />
                    <polygon points="70,140 130,240 10,240" fill="rgba(22,45,32,0.9)" />
                    <rect x="62" y="240" width="16" height="180" fill="rgba(35,25,15,0.95)" />
                </svg>

                {/* Tree 6 - Far Left Edge (New) */}
                <svg width="200" height="550" viewBox="0 0 200 550" className="absolute" style={{ left: '-350px', top: '-100px', animation: 'treeShake 3.5s ease-in-out infinite 0.3s' }}>
                    <polygon points="100,40 130,160 70,160" fill="rgba(16,36,26,0.9)" />
                    <polygon points="100,100 140,220 60,220" fill="rgba(20,42,30,0.9)" />
                    <polygon points="100,160 150,280 50,280" fill="rgba(24,48,34,0.9)" />
                    <polygon points="100,220 160,340 40,340" fill="rgba(28,54,38,0.9)" />
                    <rect x="90" y="340" width="22" height="200" fill="rgba(36,26,16,0.95)" />
                </svg>

                {/* Tree 4 - Extra Tall (New - Further Left) */}
                <svg width="180" height="500" viewBox="0 0 180 500" className="absolute" style={{ left: '-200px', top: '-80px', animation: 'treeShake 3.2s ease-in-out infinite 0.2s' }}>
                    <polygon points="90,30 120,140 60,140" fill="rgba(18,38,28,0.85)" />
                    <polygon points="90,90 130,200 50,200" fill="rgba(22,45,32,0.85)" />
                    <polygon points="90,150 140,260 40,260" fill="rgba(26,52,36,0.85)" />
                    <polygon points="90,210 150,320 30,320" fill="rgba(30,58,40,0.85)" />
                    <rect x="80" y="320" width="20" height="180" fill="rgba(38,28,18,0.95)" />
                </svg>

                {/* Tree 5 - Very Tall (New - Further Left) */}
                <svg width="160" height="480" viewBox="0 0 160 480" className="absolute" style={{ left: '-80px', top: '-60px', animation: 'treeShake 2.9s ease-in-out infinite 0.5s' }}>
                    <polygon points="80,40 105,130 55,130" fill="rgba(20,40,30,0.8)" />
                    <polygon points="80,90 115,190 45,190" fill="rgba(24,48,34,0.8)" />
                    <polygon points="80,140 125,250 35,250" fill="rgba(28,56,38,0.8)" />
                    <polygon points="80,190 135,310 25,310" fill="rgba(32,62,42,0.8)" />
                    <rect x="72" y="310" width="16" height="170" fill="rgba(40,30,20,0.9)" />
                </svg>

                {/* Tree 1 - Tallest (Original) */}
                <svg width="150" height="400" viewBox="0 0 150 400" style={{ animation: 'treeShake 3s ease-in-out infinite' }}>
                    <polygon points="75,50 100,150 50,150" fill="rgba(20,40,30,0.8)" />
                    <polygon points="75,100 110,200 40,200" fill="rgba(25,50,35,0.8)" />
                    <polygon points="75,150 120,250 30,250" fill="rgba(30,60,40,0.8)" />
                    <rect x="65" y="250" width="20" height="150" fill="rgba(40,30,20,0.9)" />
                </svg>

                {/* Tree 2 - Medium (Original) */}
                <svg width="120" height="320" viewBox="0 0 120 320" className="absolute left-32 top-10" style={{ animation: 'treeShake 2.5s ease-in-out infinite 0.3s' }}>
                    <polygon points="60,40 80,120 40,120" fill="rgba(25,45,32,0.7)" />
                    <polygon points="60,80 90,160 30,160" fill="rgba(30,55,37,0.7)" />
                    <polygon points="60,120 100,200 20,200" fill="rgba(35,65,42,0.7)" />
                    <rect x="52" y="200" width="16" height="120" fill="rgba(45,35,25,0.8)" />
                </svg>

                {/* Tree 3 - Shortest (Original) */}
                <svg width="100" height="260" viewBox="0 0 100 260" className="absolute left-16 top-20" style={{ animation: 'treeShake 2.8s ease-in-out infinite 0.6s' }}>
                    <polygon points="50,30 70,100 30,100" fill="rgba(22,42,28,0.6)" />
                    <polygon points="50,70 80,140 20,140" fill="rgba(28,52,33,0.6)" />
                    <polygon points="50,110 90,180 10,180" fill="rgba(33,62,38,0.6)" />
                    <rect x="43" y="180" width="14" height="80" fill="rgba(42,32,22,0.7)" />
                </svg>
            </div>

            {/* Animated Trees on Right Side - Mirrored */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 1, marginRight: 'calc(50% - 650px)', marginTop: '-50px', transform: 'scaleX(-1)' }}>
                {/* Tall Grass & Reeds - Right Foreground (New - Matches Image) */}
                <svg width="400" height="250" viewBox="0 0 400 250" className="absolute" style={{ left: '-350px', top: '300px', zIndex: 3 }}>
                    {/* Grass Blades */}
                    <path d="M10,250 Q20,150 15,50" stroke="rgba(8,20,12,0.95)" strokeWidth="3" fill="none" style={{ animation: 'treeShake 2s ease-in-out infinite' }} />
                    <path d="M30,250 Q40,160 50,80" stroke="rgba(8,20,12,0.95)" strokeWidth="2" fill="none" style={{ animation: 'treeShake 2.5s ease-in-out infinite 0.2s' }} />
                    <path d="M50,250 Q40,180 30,100" stroke="rgba(8,20,12,0.95)" strokeWidth="3" fill="none" style={{ animation: 'treeShake 2.2s ease-in-out infinite 0.1s' }} />
                    <path d="M70,250 Q80,170 90,60" stroke="rgba(8,20,12,0.95)" strokeWidth="2" fill="none" style={{ animation: 'treeShake 2.8s ease-in-out infinite 0.3s' }} />

                    {/* Reeds with Heads */}
                    <g style={{ animation: 'treeShake 3s ease-in-out infinite' }}>
                        <path d="M120,250 Q130,150 125,40" stroke="rgba(8,20,12,0.95)" strokeWidth="2" fill="none" />
                        <ellipse cx="125" cy="40" rx="4" ry="15" fill="rgba(8,20,12,0.95)" />
                    </g>
                    <g style={{ animation: 'treeShake 2.7s ease-in-out infinite 0.4s' }}>
                        <path d="M150,250 Q140,160 145,50" stroke="rgba(8,20,12,0.95)" strokeWidth="2" fill="none" />
                        <ellipse cx="145" cy="50" rx="3" ry="12" fill="rgba(8,20,12,0.95)" />
                    </g>

                    {/* More Grass */}
                    <path d="M180,250 Q190,190 200,100" stroke="rgba(8,20,12,0.95)" strokeWidth="2" fill="none" style={{ animation: 'treeShake 2.3s ease-in-out infinite 0.1s' }} />
                    <path d="M220,250 Q210,180 205,90" stroke="rgba(8,20,12,0.95)" strokeWidth="3" fill="none" style={{ animation: 'treeShake 2.6s ease-in-out infinite 0.2s' }} />
                </svg>

                {/* Ferns - Right Foreground (New - Moved closer) */}
                <svg width="300" height="200" viewBox="0 0 300 200" className="absolute" style={{ left: '-280px', top: '320px', zIndex: 4 }}>
                    <path d="M10,200 Q30,100 10,20" stroke="rgba(10,30,20,0.9)" strokeWidth="3" fill="none" style={{ animation: 'treeShake 3s ease-in-out infinite' }} />
                    <path d="M15,200 Q45,110 70,30" stroke="rgba(12,35,22,0.9)" strokeWidth="2" fill="none" style={{ animation: 'treeShake 2.8s ease-in-out infinite 0.2s' }} />
                    <path d="M5,200 Q-15,110 -40,30" stroke="rgba(12,35,22,0.9)" strokeWidth="2" fill="none" style={{ animation: 'treeShake 3.2s ease-in-out infinite 0.1s' }} />
                </svg>

                {/* Dense Bushes - Right Side (New - Moved closer and overlapping) */}
                <svg width="600" height="350" viewBox="0 0 600 350" className="absolute" style={{ left: '-380px', top: '250px', zIndex: 2 }}>
                    <path d="M0,350 Q50,250 100,300 T200,280 T300,320 T400,260 T500,300 T600,350 Z" fill="rgba(6,18,10,0.98)" />
                    <path d="M0,300 Q40,200 80,260 T160,240 T240,280 T320,220 T400,260 T480,200 T500,300 Z" fill="rgba(8,20,12,0.98)" />
                    <path d="M20,300 Q60,220 100,280 T180,260 T260,300 T340,240 T420,280 T500,300 Z" fill="rgba(12,28,18,0.95)" style={{ opacity: 0.9 }} />
                    <path d="M-20,300 Q20,180 60,240 T140,220 T220,260 T300,200 T380,240 T460,180 T500,300 Z" fill="rgba(5,15,8,1)" style={{ opacity: 0.95 }} />
                </svg>

                {/* Pine Tree 2 - Right (New) */}
                <svg width="140" height="420" viewBox="0 0 140 420" className="absolute" style={{ left: '-280px', top: '-40px', animation: 'treeShake 3.4s ease-in-out infinite 0.1s' }}>
                    <polygon points="70,20 110,120 30,120" fill="rgba(15,35,25,0.9)" />
                    <polygon points="70,80 120,180 20,180" fill="rgba(18,40,28,0.9)" />
                    <polygon points="70,140 130,240 10,240" fill="rgba(22,45,32,0.9)" />
                    <rect x="62" y="240" width="16" height="180" fill="rgba(35,25,15,0.95)" />
                </svg>

                {/* Tree 6 - Far Right Edge (New) */}
                <svg width="200" height="550" viewBox="0 0 200 550" className="absolute" style={{ left: '-350px', top: '-100px', animation: 'treeShake 3.5s ease-in-out infinite 0.3s' }}>
                    <polygon points="100,40 130,160 70,160" fill="rgba(16,36,26,0.9)" />
                    <polygon points="100,100 140,220 60,220" fill="rgba(20,42,30,0.9)" />
                    <polygon points="100,160 150,280 50,280" fill="rgba(24,48,34,0.9)" />
                    <polygon points="100,220 160,340 40,340" fill="rgba(28,54,38,0.9)" />
                    <rect x="90" y="340" width="22" height="200" fill="rgba(36,26,16,0.95)" />
                </svg>

                {/* Tree 4 - Extra Tall (New - Further Right) */}
                <svg width="180" height="500" viewBox="0 0 180 500" className="absolute" style={{ left: '-200px', top: '-80px', animation: 'treeShake 3.1s ease-in-out infinite 0.1s' }}>
                    <polygon points="90,30 120,140 60,140" fill="rgba(18,38,28,0.85)" />
                    <polygon points="90,90 130,200 50,200" fill="rgba(22,45,32,0.85)" />
                    <polygon points="90,150 140,260 40,260" fill="rgba(26,52,36,0.85)" />
                    <polygon points="90,210 150,320 30,320" fill="rgba(30,58,40,0.85)" />
                    <rect x="80" y="320" width="20" height="180" fill="rgba(38,28,18,0.95)" />
                </svg>

                {/* Tree 5 - Very Tall (New - Further Right) */}
                <svg width="160" height="480" viewBox="0 0 160 480" className="absolute" style={{ left: '-80px', top: '-60px', animation: 'treeShake 2.8s ease-in-out infinite 0.4s' }}>
                    <polygon points="80,40 105,130 55,130" fill="rgba(20,40,30,0.8)" />
                    <polygon points="80,90 115,190 45,190" fill="rgba(24,48,34,0.8)" />
                    <polygon points="80,140 125,250 35,250" fill="rgba(28,56,38,0.8)" />
                    <polygon points="80,190 135,310 25,310" fill="rgba(32,62,42,0.8)" />
                    <rect x="72" y="310" width="16" height="170" fill="rgba(40,30,20,0.9)" />
                </svg>

                {/* Tree 1 - Tallest (Original) */}
                <svg width="150" height="400" viewBox="0 0 150 400" style={{ animation: 'treeShake 3.3s ease-in-out infinite 0.2s' }}>
                    <polygon points="75,50 100,150 50,150" fill="rgba(20,40,30,0.8)" />
                    <polygon points="75,100 110,200 40,200" fill="rgba(25,50,35,0.8)" />
                    <polygon points="75,150 120,250 30,250" fill="rgba(30,60,40,0.8)" />
                    <rect x="65" y="250" width="20" height="150" fill="rgba(40,30,20,0.9)" />
                </svg>

                {/* Tree 2 - Medium (Original) */}
                <svg width="120" height="320" viewBox="0 0 120 320" className="absolute left-32 top-10" style={{ animation: 'treeShake 2.6s ease-in-out infinite 0.5s' }}>
                    <polygon points="60,40 80,120 40,120" fill="rgba(25,45,32,0.7)" />
                    <polygon points="60,80 90,160 30,160" fill="rgba(30,55,37,0.7)" />
                    <polygon points="60,120 100,200 20,200" fill="rgba(35,65,42,0.7)" />
                    <rect x="52" y="200" width="16" height="120" fill="rgba(45,35,25,0.8)" />
                </svg>

                {/* Tree 3 - Shortest (Original) */}
                <svg width="100" height="260" viewBox="0 0 100 260" className="absolute left-16 top-20" style={{ animation: 'treeShake 2.9s ease-in-out infinite 0.7s' }}>
                    <polygon points="50,30 70,100 30,100" fill="rgba(22,42,28,0.6)" />
                    <polygon points="50,70 80,140 20,140" fill="rgba(28,52,33,0.6)" />
                    <polygon points="50,110 90,180 10,180" fill="rgba(33,62,38,0.6)" />
                    <rect x="43" y="180" width="14" height="80" fill="rgba(42,32,22,0.7)" />
                </svg>
            </div>

            <div className="bg-black/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/10 max-w-xl w-full text-center transform hover:scale-105 transition-all duration-300 relative z-20">
                <h1 className="text-4xl font-bold text-white mb-6">
                    My Resume
                </h1>

                <p className="text-lg text-gray-300 mb-8">
                    Download my resume to learn more about my skills, education, and experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="/harshana_resume_1.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]"
                    >
                        👁️ View Resume
                    </a>

                    <a
                        href="/harshana_resume_1.docx"
                        download
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_rgba(79,70,229,0.8)]"
                    >
                        📄 Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

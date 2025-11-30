import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef(null);

    const skills = [
        { name: 'HTML', img: '/html.png' },
        { name: 'CSS', img: '/text.png' },
        { name: 'JavaScript', img: '/java-script.png' },
        { name: 'Java', img: '/java.png' },
        { name: 'Python', img: '/python.png' },
        { name: 'C', img: '/letter-c.png' },
        { name: 'React', img: '/react.png' },
        { name: 'MS Excel', img: '/excel.png' },
        { name: 'VS Code', img: '/vscode.png' },
        { name: 'MS PowerPoint', img: '/powerpoint.png' },
        { name: 'GitHub', img: '/github.png' },
        { name: 'MS Word', img: '/word.png' },
    ];

    const handlePrev = () => {
        if (isAnimating || currentIndex === 1) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => Math.max(1, prev - 1));
        setTimeout(() => setIsAnimating(false), 600);
    };

    const handleNext = () => {
        if (isAnimating || currentIndex === skills.length - 2) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => Math.min(skills.length - 2, prev + 1));
        setTimeout(() => setIsAnimating(false), 600);
    };

    // Handle mouse wheel scrolling (both vertical and horizontal)
    useEffect(() => {
        const handleWheel = (e) => {
            if (containerRef.current && containerRef.current.contains(e.target)) {
                e.preventDefault();

                if (isAnimating) return;

                const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;

                if (delta > 0) {
                    handleNext();
                } else if (delta < 0) {
                    handlePrev();
                }
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, [currentIndex, skills.length, isAnimating]);

    const getVisibleCards = () => {
        return [
            skills[currentIndex - 1],
            skills[currentIndex],
            skills[currentIndex + 1]
        ].filter(Boolean);
    };

    const visibleCards = getVisibleCards();

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center py-24 px-4 relative overflow-hidden">
            {/* Flying Bird Background - Diagonal Flight */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                <svg width="100" height="80" viewBox="0 0 100 80" className="absolute" style={{
                    animation: 'birdFlyDiagonal 4s linear infinite'
                }}>
                    {/* Bird silhouette - Enhanced design */}

                    {/* Body - Center */}
                    <ellipse cx="50" cy="40" rx="12" ry="7" fill="rgba(50,50,50,0.85)">
                        <animate attributeName="fill" values="rgba(50,50,50,0.85);rgba(70,70,70,0.9);rgba(50,50,50,0.85)" dur="0.2s" repeatCount="indefinite" />
                    </ellipse>

                    {/* Left Wing - Attached to body */}
                    <g style={{ transformOrigin: '38px 40px', animation: 'wingFlapLeft 0.2s ease-in-out infinite' }}>
                        <path d="M 38 40 Q 25 30 15 33 Q 18 38 38 42 Z" fill="rgba(40,40,40,0.8)">
                            <animate attributeName="fill" values="rgba(40,40,40,0.8);rgba(60,60,60,0.9);rgba(40,40,40,0.8)" dur="0.2s" repeatCount="indefinite" />
                        </path>
                    </g>

                    {/* Right Wing - Attached to body */}
                    <g style={{ transformOrigin: '62px 40px', animation: 'wingFlapRight 0.2s ease-in-out infinite 0.1s' }}>
                        <path d="M 62 40 Q 75 30 85 33 Q 82 38 62 42 Z" fill="rgba(40,40,40,0.8)">
                            <animate attributeName="fill" values="rgba(40,40,40,0.8);rgba(60,60,60,0.9);rgba(40,40,40,0.8)" dur="0.2s" repeatCount="indefinite" begin="0.1s" />
                        </path>
                    </g>

                    {/* Head */}
                    <circle cx="55" cy="35" r="5" fill="rgba(55,55,55,0.85)">
                        <animate attributeName="fill" values="rgba(55,55,55,0.85);rgba(75,75,75,0.9);rgba(55,55,55,0.85)" dur="0.2s" repeatCount="indefinite" />
                    </circle>

                    {/* Eye */}
                    <circle cx="57" cy="34" r="1.5" fill="rgba(255,255,255,0.9)" />

                    {/* Beak */}
                    <polygon points="59,35 64,34 61,37" fill="rgba(200,150,60,0.9)" />

                    {/* Tail */}
                    <path d="M 45 43 L 50 52 L 55 43 Z" fill="rgba(45,45,45,0.8)">
                        <animate attributeName="fill" values="rgba(45,45,45,0.8);rgba(65,65,65,0.85);rgba(45,45,45,0.8)" dur="0.2s" repeatCount="indefinite" />
                    </path>
                </svg>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-secondary">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Carousel Container */}
                <div ref={containerRef} className="relative flex items-center justify-center gap-8">

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 1 || isAnimating}
                        className={`absolute left-0 z-10 p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl
                            transition-all duration-300 hover:scale-110 active:scale-95
                            ${currentIndex === 1 || isAnimating ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-primary hover:text-white'}
                        `}
                        aria-label="Previous skill"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    {/* Cards Container with smooth horizontal scroll */}
                    <div className="relative w-full max-w-4xl h-80 flex items-center justify-center overflow-hidden">
                        <div
                            className="flex items-center gap-6 absolute"
                            style={{
                                transform: `translateX(0px)`,
                                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            {visibleCards.map((skill, idx) => {
                                const isCenter = idx === 1;
                                const position = idx === 0 ? 'left' : idx === 2 ? 'right' : 'center';

                                return (
                                    <div
                                        key={`${skill.name}-${currentIndex}-${idx}`}
                                        className="flex-shrink-0"
                                        style={{
                                            transform: `scale(${isCenter ? 1.25 : 0.9}) rotate(${position === 'left' ? -6 : position === 'right' ? 6 : 0}deg)`,
                                            opacity: isCenter ? 1 : 0.6,
                                            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                            zIndex: isCenter ? 10 : 1
                                        }}
                                    >
                                        <div className={`
                                            bg-white dark:bg-gray-800 rounded-2xl shadow-2xl
                                            flex flex-col items-center justify-center p-8
                                            ${isCenter ? 'w-56 h-56 border-4 border-primary' : 'w-48 h-48'}
                                        `}
                                            style={{
                                                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                        >
                                            <img
                                                src={skill.img}
                                                alt={skill.name}
                                                className={`mb-4 ${isCenter ? 'h-24 w-24' : 'h-16 w-16'}`}
                                                style={{
                                                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                            />
                                            <p className={`font-bold text-center text-gray-800 dark:text-white ${isCenter ? 'text-xl' : 'text-base'}`}
                                                style={{
                                                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                            >
                                                {skill.name}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        disabled={currentIndex === skills.length - 2 || isAnimating}
                        className={`absolute right-0 z-10 p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl
                            transition-all duration-300 hover:scale-110 active:scale-95
                            ${currentIndex === skills.length - 2 || isAnimating ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-primary hover:text-white'}
                        `}
                        aria-label="Next skill"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center gap-2 mt-12">
                    {skills.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-2 rounded-full transition-all duration-300
                                ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600'}
                            `}
                        />
                    ))}
                </div>

                {/* Navigation Hint */}
                <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
                    {currentIndex} of {skills.length} • Scroll or use arrows
                </div>
            </div>
        </section>
    );
};
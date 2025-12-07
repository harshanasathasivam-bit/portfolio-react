import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Skills = () => {
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

                {/* Horizontal Scrollable Container */}
                <div className="relative">
                    {/* Gradient fade on edges */}
                    <div className="absolute left-0 top-0 bottom-6 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                    <div className="flex gap-6 overflow-x-auto pb-6 px-4 scroll-smooth"
                        style={{
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none', /* Firefox */
                            msOverflowStyle: 'none' /* IE and Edge */
                        }}
                    >
                        {skills.map((skill, idx) => (
                            <div
                                key={skill.name}
                                className="flex-shrink-0 scroll-snap-align-center group"
                                style={{ scrollSnapAlign: 'center' }}
                            >
                                <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 
                                    rounded-2xl shadow-xl
                                    flex flex-col items-center justify-center p-8 w-56 h-56
                                    transition-all duration-500 ease-out
                                    hover:scale-110 hover:shadow-[0_20px_50px_rgba(139,93,246,0.4)]
                                    border-2 border-gray-200 dark:border-gray-700 hover:border-primary
                                    transform-gpu"
                                    style={{
                                        animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`
                                    }}
                                >
                                    {/* Decorative gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 
                                        group-hover:from-primary/5 group-hover:to-purple-600/10 
                                        rounded-2xl transition-all duration-500 pointer-events-none">
                                    </div>

                                    {/* Icon with subtle animation */}
                                    <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        <img
                                            src={skill.img}
                                            alt={skill.name}
                                            className="h-24 w-24 mb-4 drop-shadow-lg"
                                        />
                                    </div>

                                    {/* Skill name */}
                                    <p className="relative z-10 font-bold text-center text-gray-800 dark:text-white text-xl
                                        transition-colors duration-300 group-hover:text-primary">
                                        {skill.name}
                                    </p>

                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                                        bg-gradient-to-t from-primary/20 via-transparent to-transparent 
                                        rounded-2xl transition-opacity duration-500 pointer-events-none blur-xl">
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Hint with animation */}
                <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400 animate-pulse">
                    ← Scroll horizontally to explore all skills →
                </div>
            </div>
        </section>
    );
};
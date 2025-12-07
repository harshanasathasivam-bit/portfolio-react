import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export const Project = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger staggered animation for all cards
                        setTimeout(() => setVisibleCards([0]), 100);
                        setTimeout(() => setVisibleCards([0, 1]), 300);
                        setTimeout(() => setVisibleCards([0, 1, 2]), 500);
                        setTimeout(() => setVisibleCards([0, 1, 2, 3]), 700);
                    } else {
                        // Reset when leaving viewport
                        setVisibleCards([]);
                    }
                });
            },
            { threshold: 0 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const projects = [
        {
            id: 0,
            title: "Calculator",
            description: "A responsive calculator web app developed using html,css and js.",
            image: `${import.meta.env.BASE_URL}calculator.jpg`,
            link: "https://harshanasathasivam-bit.github.io/calculator/",
            techs: ["HTML", "CSS", "JS"]
        },
        {
            id: 1,
            title: "To-Do List App",
            description: "A clean and responsive To-Do List app with task editing and dark mode.",
            image: `${import.meta.env.BASE_URL}notepad.jpg`,
            link: "https://harshanasathasivam-bit.github.io/to-do-list/",
            techs: ["HTML", "CSS", "JS"]
        },
        {
            id: 2,
            title: "Stopwatch App",
            description: "A precise stopwatch application with lap timing and start/stop functionality.",
            image: `${import.meta.env.BASE_URL}stopwatch.jpg`,
            link: "https://harshanasathasivam-bit.github.io/stopwatch/",
            techs: ["HTML", "CSS", "JS"]
        },
        {
            id: 3,
            title: "Student Event Registration System",
            description: "A comprehensive event registration platform for students with real-time updates and management features.",
            image: `${import.meta.env.BASE_URL}event.jpg`,
            link: "https://harshanasathasivam-bit.github.io/college-event-management/",
            techs: ["HTML", "CSS", "JS"]
        }
    ];

    return (
        <section ref={sectionRef} id="projects" className="min-h-screen flex flex-col justify-center py-24 px-2 relative">
            <div className="container mx-auto max-w-6xl px-6 text-center relative z-10">
                <h1 className="text-4xl font-bold text-indigo-900 dark:text-purple-50 mb-12">
                    My Projects
                </h1>

                {/* ARRANGE CARDS SIDE BY SIDE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative group"
                        >
                            {/* Glow effect behind card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-2xl blur-xl 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className={`relative bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/40 dark:to-gray-900/40
                                backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden
                                transition-all duration-700 ease-out
                                hover:shadow-[0_20px_60px_rgba(139,93,246,0.4)]
                                md:hover:-translate-y-3 md:hover:scale-[1.02] active:scale-95
                                border-2 border-white/20 dark:border-gray-700/50 hover:border-primary/50
                                transform-gpu
                                ${visibleCards.includes(project.id)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-20'
                                }`}
                                style={{
                                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col h-full"
                                >
                                    {/* Image with overlay effect */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-44 object-cover 
                                                group-hover:scale-110 group-hover:rotate-1
                                                transition-all duration-700"
                                        />
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent 
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        </div>
                                        {/* "View Project" label on hover */}
                                        <div className="absolute inset-0 flex items-center justify-center
                                            opacity-0 group-hover:opacity-100 transition-all duration-500
                                            transform scale-75 group-hover:scale-100">
                                            <span className="bg-white/90 dark:bg-gray-900/90 text-primary 
                                                backdrop-blur-sm px-4 py-2 rounded-full font-semibold shadow-xl
                                                border-2 border-primary/30">
                                                View Project →
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 text-left flex-grow flex flex-col justify-between">
                                        <div>
                                            <h2 className="text-lg font-bold text-indigo-900 dark:text-purple-50 mb-2
                                                group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h2>
                                            <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.techs.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 text-sm bg-primary/10 dark:bg-primary/20 
                                                        backdrop-blur-sm text-primary dark:text-primary-light rounded-full
                                                        border border-primary/20
                                                        group-hover:bg-primary group-hover:text-white group-hover:border-primary
                                                        transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
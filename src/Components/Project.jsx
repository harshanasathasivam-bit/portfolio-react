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
            { threshold: 0.1 }
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
            image: "/calculator.jpg",
            link: "https://harshanasathasivam-bit.github.io/calculator/",
            techs: ["HTML", "CSS", "JS"]
        },
        {
            id: 1,
            title: "To-Do List App",
            description: "A clean and responsive To-Do List app with task editing and dark mode.",
            image: "/notepad.jpg",
            link: "https://harshanasathasivam-bit.github.io/to-do-list/",
            techs: ["HTML", "CSS", "JS"]
        },
        {
            id: 2,
            title: "Stopwatch App",
            description: "A precise stopwatch application with lap timing and start/stop functionality.",
            image: "/stopwatch.jpg",
            link: "https://harshanasathasivam-bit.github.io/stopwatch/",
            techs: ["HTML", "CSS", "JS"]
        },
        {
            id: 3,
            title: "Student Event Registration System",
            description: "A comprehensive event registration platform for students with real-time updates and management features.",
            image: "/event.jpg",
            link: "https://harshanasathasivam-bit.github.io/college-event-management/",
            techs: ["React", "Node.js", "MongoDB"]
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
                    {/* Project – Calculator */}
                    <div className="bg-white/70 dark:bg-[#2f284b] rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full flex flex-col">
                        <a
                            href=" https://harshanasathasivam-bit.github.io/calculator/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col h-full"
                        >
                            <img
                                src="/calculator.jpg"
                                alt="Calculator App"
                                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            <div className="p-4 text-left flex-grow flex flex-col justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-indigo-900 dark:text-purple-50 mb-1">
                                        Calculator
                                    </h2>
                                    <p className="text-sm mb-3">
                                        A responsive calculator web app developed using html,css and js.
                                    </p>
                                </div>

                                <div className="flex space-x-2 text-primary-light dark:text-primary-dark">
                                    <span>HTML</span><span>CSS</span><span>JS</span>
                                </div>
                            </div>
                        </a>
                    </div>


                    {/* Project – To-Do List */}
                    <div className="bg-white/70 dark:bg-[#2f284b] rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full flex flex-col">
                        <a
                            href="https://harshanasathasivam-bit.github.io/to-do-list/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col h-full"
                        >
                            <img
                                src="/notepad.jpg"
                                alt="To-Do App"
                                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            <div className="p-4 text-left flex-grow flex flex-col justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-indigo-900 dark:text-purple-50 mb-1">
                                        To-Do List App
                                    </h2>
                                    <p className="text-sm mb-3">
                                        A clean and responsive To-Do List app with task editing and dark mode.
                                    </p>
                                </div>

                                <div className="flex space-x-2 text-primary-light dark:text-primary-dark">
                                    <span>HTML</span><span>CSS</span><span>JS</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Project – Stopwatch */}
                    <div className="bg-white/70 dark:bg-[#2f284b] rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full flex flex-col">
                        <a
                            href=" https://harshanasathasivam-bit.github.io/stopwatch/"
                            className="flex flex-col h-full"
                        >
                            <img
                                src="/stopwatch.jpg"
                                alt="Stopwatch App"
                                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            <div className="p-4 text-left flex-grow flex flex-col justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-indigo-900 dark:text-purple-50 mb-1">
                                        Stopwatch App
                                    </h2>
                                    <p className="text-sm mb-3">
                                        A precise stopwatch application with lap timing and start/stop functionality.
                                    </p>
                                </div>

                                <div className="flex space-x-2 text-primary-light dark:text-primary-dark">
                                    <span>HTML</span><span>CSS</span><span>JS</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Project – Student Event Registration System */}
                    <div className="bg-white/70 dark:bg-[#2f284b] rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full flex flex-col">
                        <a
                            href="https://harshanasathasivam-bit.github.io/college-event-management/"
                            className="flex flex-col h-full"
                        >
                            <img
                                src="/event.jpg"
                                alt="Student Event Registration System"
                                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            <div className="p-4 text-left flex-grow flex flex-col justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-indigo-900 dark:text-purple-50 mb-1">
                                        Student Event Registration System
                                    </h2>
                                    <p className="text-sm mb-3">
                                        A comprehensive event registration platform for students with real-time updates and management features.
                                    </p>
                                </div>

                                <div className="flex space-x-2 text-primary-light dark:text-primary-dark">
                                    <span>HTML</span><span>CSS</span><span>JS</span>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};
import { Link } from "react-router-dom";

export const Project = () => {
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center py-24 px-2 relative">
            <div className="container mx-auto max-w-6xl px-6 text-center relative z-10">
                <h1 className="text-4xl font-bold text-indigo-900 dark:text-purple-50 mb-12">
                    My Projects
                </h1>

                {/* ARRANGE CARDS ONE BY ONE */}
                <div className="flex flex-col items-center justify-center gap-8 max-w-3xl mx-auto">

                    {/* Project – Calculator */}
                    <div className="bg-white/70 dark:bg-[#2f284b] rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full flex flex-col">
                        <Link to="/calculator" className="flex flex-col h-full">
                            <img
                                src="/calculator.jpg"
                                alt="Calculator App"
                                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4 text-left flex-grow flex flex-col justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-indigo-900 dark:text-purple-50 mb-1">
                                        Calculator App
                                    </h2>
                                    <p className="text-sm mb-3">A responsive calculator web app developed using React.</p>
                                </div>
                                <div className="flex space-x-2 text-primary-light dark:text-primary-dark">
                                    <span>HTML</span><span>CSS</span><span>JS</span>
                                </div>
                            </div>
                        </Link>
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
                            href="#"
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
                            href="#"
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
                                    <span>React</span><span>Node.js</span><span>MongoDB</span>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};
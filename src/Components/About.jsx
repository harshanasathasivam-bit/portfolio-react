import { Bug, Code, Palette } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export const AboutSection = () => {
    const [leftCardVisible, setLeftCardVisible] = useState(false);
    const [rightCardVisible, setRightCardVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Entering viewport - trigger animation
                        setTimeout(() => setLeftCardVisible(true), 200);
                        setTimeout(() => setRightCardVisible(true), 400);
                    } else {
                        // Leaving viewport - reset for next time
                        setLeftCardVisible(false);
                        setRightCardVisible(false);
                    }
                });
            },
            { threshold: 0.1 } // Triggers when 10% visible
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

    return (
        <section ref={sectionRef} id="about" className="min-h-screen flex flex-col justify-center py-24 px-4 relative">
            <div className="container mx-auto mx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* LEFT SIDE - BLACK CARD */}
                    <div className={`bg-black dark:bg-gray-900 text-white rounded-2xl p-8 shadow-xl space-y-6 transition-all duration-1000 ease-out ${
                        leftCardVisible 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-50'
                    }`}>
                        <h3 className="text-2xl font-semibold">I'm Harshana S</h3>
                        <p className="text-gray-300">
                            A frontend developer with a passion for crafting creative and interactive websites.
                        </p>
                        <p className="text-gray-300">
                            Currently pursuing B.E Computer Science at K.S.R. College of Engineering, I love exploring modern frontend technologies and building responsive, user-friendly web applications.
                        </p>
                        <p className="text-gray-300">
                            I enjoy turning complex problems into elegant solutions and continuously learning new skills to enhance my craft.
                        </p>
                        <div className="flex justify-end pt-4">
                            <a href="#contact" className="px-6 py-2 rounded-full bg-primary text-white 
                            font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95 text-center">
                                Get In Contact Me
                            </a>

                        </div>
                    </div>

                    {/* RIGHT SIDE - IMAGE */}
                    <div className={`flex justify-center items-center transition-all duration-1000 ease-out ${rightCardVisible
                        ? 'opacity-100 translate-x-0 scale-100'
                        : 'opacity-0 translate-x-96 scale-95'
                        }`}>
                        <img
                            src="/about-image.png"
                            alt="Developer illustration"
                            className="w-full max-w-md rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
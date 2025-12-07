import { Github, Linkedin, Mail, PhoneCall, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from 'react';

export const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
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

    return (
        <section ref={sectionRef} id="contact" className="min-h-screen flex flex-col justify-center py-24 px-4 relative overflow-hidden">
            {/* Primary Dark Gradient Overlay - Ultra Smooth merge from Resume section */}
            <div className="absolute left-0 right-0 pointer-events-none" style={{
                top: '-80vh',
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 15%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.95) 75%, rgba(0,0,0,1) 85%, rgba(0,0,0,1) 100%)',
                zIndex: 0
            }}></div>

            {/* Secondary Dark Overlay - Extra smooth top blend */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.02) 10%, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.4) 100%)',
                zIndex: 0
            }}></div>

            {/* Glowing Moon */}
            <div
                className="absolute top-[20%] right-[10%] pointer-events-none"
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,1) 0%, rgba(255,250,240,0.95) 20%, rgba(240,240,255,0.8) 40%, rgba(200,210,255,0.4) 70%, transparent 100%)',
                    boxShadow: '0 0 40px rgba(255,255,255,0.8), 0 0 80px rgba(200,220,255,0.6), 0 0 120px rgba(150,180,255,0.4)',
                    animation: 'moonGlow 4s ease-in-out infinite, moonRotate 20s linear infinite',
                    zIndex: 2
                }}></div>

            {/* Comet / Falling Star */}
            <div className="absolute pointer-events-none" style={{
                top: '-50px',
                left: '70%',
                animation: 'cometMove 5s linear infinite',
                zIndex: 1
            }}>
                <div style={{
                    transform: 'rotate(135deg)',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row-reverse'
                }}>
                    <div style={{
                        width: '10px',
                        height: '10px',
                        background: '#fff',
                        borderRadius: '50%',
                        boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.9), 0 0 40px 10px rgba(100, 200, 255, 0.6)',
                        zIndex: 2,
                        position: 'relative'
                    }}></div>
                    <div style={{
                        width: '300px',
                        height: '6px',
                        background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(100,200,255,0.5) 30%, transparent 100%)',
                        borderRadius: '100px',
                        filter: 'blur(2px)',
                        marginRight: '-5px'
                    }}></div>
                </div>
            </div>

            {/* Extensive Twinkling Stars Field - Full Coverage */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: `
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 20% 30% / 10px 10px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 60% 70% / 8px 8px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 50% 50% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 80% 10% / 6px 6px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 90% 60% / 9px 9px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 33% 80% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 15% 60% / 6px 6px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 70% 25% / 8px 8px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 45% 15% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 25% 90% / 9px 9px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 85% 85% / 6px 6px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 10% 20% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 55% 85% / 8px 8px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 75% 45% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 35% 40% / 6px 6px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 65% 55% / 8px 8px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 40% 65% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 12% 45% / 6px 6px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 88% 35% / 9px 9px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 28% 12% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 72% 88% / 8px 8px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 52% 22% / 6px 6px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 18% 78% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 92% 18% / 8px 8px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 42% 92% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 8% 52% / 9px 9px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 78% 8% / 6px 6px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 62% 38% / 8px 8px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 22% 58% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 95% 45% / 6px 6px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 5% 75% / 8px 8px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 48% 5% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 82% 62% / 9px 9px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 30% 48% / 6px 6px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 68% 72% / 8px 8px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 14% 33% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 58% 95% / 6px 6px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 38% 28% / 9px 9px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 93% 68% / 7px 7px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 24% 68% / 8px 8px no-repeat,
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 5%, rgba(150,180,255,0.9) 15%, transparent 50%) 77% 14% / 6px 6px no-repeat
            `,
                animation: 'twinkle 1.2s ease-in-out infinite alternate, starGlow 2.5s ease-in-out infinite',
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,1)) drop-shadow(0 0 20px rgba(200,220,255,1)) drop-shadow(0 0 30px rgba(150,180,255,0.8))',
                zIndex: 1
            }}></div>

            <div className={`container mx-auto max-w-6xl relative z-10 px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                    Have a project or want to collaborate ? I'm always open to discussing new opportunities
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* LEFT CARD - Contact Info with Glass Morphism */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-2xl blur-xl 
                            opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl 
                            border-2 border-white/20 rounded-2xl p-8 shadow-2xl
                            hover:border-primary hover:-translate-x-2 transition-all duration-500
                            hover:shadow-[0_20px_50px_rgba(139,93,246,0.4)] hover:border-4">

                            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2">
                                <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-purple-600 rounded-full"></span>
                                Contact Info
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 
                                    hover:bg-white/10 transition-all duration-300 group/item
                                    border border-white/10 hover:border-primary/30">
                                    <div className="p-3 rounded-full bg-gradient-to-br from-primary/30 to-purple-600/30
                                        group-hover/item:scale-110 transition-transform duration-300">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Email</h4>
                                        <a href="mailto:harshananithish@gmail.com"
                                            className="text-gray-300 hover:text-primary transition-colors text-sm break-all">
                                            harshananithish@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 
                                    hover:bg-white/10 transition-all duration-300 group/item
                                    border border-white/10 hover:border-primary/30">
                                    <div className="p-3 rounded-full bg-gradient-to-br from-primary/30 to-purple-600/30
                                        group-hover/item:scale-110 transition-transform duration-300">
                                        <PhoneCall className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Phone</h4>
                                        <a href="tel:+919342673763"
                                            className="text-gray-300 hover:text-primary transition-colors text-sm">
                                            +(91)-9342673763
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-8 border-t border-white/10">
                                <h4 className="font-semibold mb-4 text-white">Connect with Me</h4>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/harshana-sathasivam-1054a5333/"
                                        target="_blank" rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-white/10 hover:bg-primary/30 
                                            transition-all duration-300 md:hover:scale-110 active:scale-95 group/social">
                                        <Linkedin className="h-5 w-5 text-white group-hover/social:text-primary transition-colors" />
                                    </a>
                                    <a href="https://github.com/harshanasathasivam-bit"
                                        target="_blank" rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-white/10 hover:bg-primary/30 
                                            transition-all duration-300 md:hover:scale-110 active:scale-95 group/social">
                                        <Github className="h-5 w-5 text-white group-hover/social:text-primary transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD - Contact Form with Glass Morphism */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-primary/30 rounded-2xl blur-xl 
                            opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl 
                            border-2 border-white/20 rounded-2xl p-8 shadow-2xl
                            hover:border-primary/50 transition-all duration-500
                            hover:shadow-[0_20px_50px_rgba(139,93,246,0.4)]">

                            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2">
                                <span className="w-1.5 h-8 bg-gradient-to-b from-purple-600 to-primary rounded-full"></span>
                                Send Message
                            </h3>

                            <form
                                action="https://formspree.io/f/xeorlqay"
                                method="POST"
                                className="space-y-5"
                            >
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-white/10 
                                            bg-white/5 backdrop-blur-sm text-white placeholder-gray-400
                                            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                                            transition-all duration-300 hover:border-white/20"
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-white/10 
                                            bg-white/5 backdrop-blur-sm text-white placeholder-gray-400
                                            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                                            transition-all duration-300 hover:border-white/20"
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-white/10 
                                            bg-white/5 backdrop-blur-sm text-white placeholder-gray-400
                                            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                                            transition-all duration-300 hover:border-white/20 resize-none"
                                        required
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 rounded-xl font-semibold
                                        bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary
                                        text-white shadow-lg hover:shadow-[0_10px_30px_rgba(139,93,246,0.5)]
                                        transition-all duration-500 md:hover:scale-[1.02] active:scale-95
                                        flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                                >
                                    <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover/btn:w-full"></span>
                                    <Send className="h-5 w-5 relative z-10" />
                                    <span className="relative z-10">Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
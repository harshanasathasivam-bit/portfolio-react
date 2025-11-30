import { Instagram, Linkedin, Mail, PhoneCall, Send, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-24 px-4 relative overflow-hidden">
            {/* Much Darker Gradient Overlay - Smooth merge from above */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 15%, rgba(0,0,0,0.95) 100%)',
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
                    transform: 'rotate(135deg)', // Angle pointing down-left
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row-reverse' // Head in front, tail behind
                }}>
                    {/* Comet Head */}
                    <div style={{
                        width: '10px',
                        height: '10px',
                        background: '#fff',
                        borderRadius: '50%',
                        boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.9), 0 0 40px 10px rgba(100, 200, 255, 0.6)',
                        zIndex: 2,
                        position: 'relative'
                    }}></div>

                    {/* Comet Tail */}
                    <div style={{
                        width: '300px',
                        height: '6px',
                        background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(100,200,255,0.5) 30%, transparent 100%)',
                        borderRadius: '100px',
                        filter: 'blur(2px)',
                        marginRight: '-5px' // Connect to head
                    }}></div>
                </div>
            </div>

            {/* Ultra Bright Glowing Stars - More stars added */}
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
                radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,200,1) 5%, rgba(255,220,150,0.9) 15%, transparent 50%) 92% 18% / 8px 8px no-repeat
            `,
                animation: 'twinkle 1.2s ease-in-out infinite alternate, starGlow 2.5s ease-in-out infinite',
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,1)) drop-shadow(0 0 20px rgba(200,220,255,1)) drop-shadow(0 0 30px rgba(150,180,255,0.8))',
                zIndex: 1
            }}></div>
            <div className="container mx-auto max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                    Have a project or want to collaborate ? I'm always open to discussing new opportunities
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact</h3>

                        <div className="space-y-6 items-center justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:test@gmail.com" className="text-secondary hover:text-primary transition-colors">harshananithish@gmail.com</a>
                                </div>

                            </div>
                        </div>
                        <div className="space-y-6 items-center justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <PhoneCall className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone Number</h4>
                                    <a href="tel:+1234567890" className="text-secondary hover:text-primary transition-colors">+(91)-9342673763</a>
                                </div>

                            </div>
                        </div>
                        <div className="pt-8 text-white">
                            <h4 className="font-semibold mb-4">Contact with Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs text-white">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form
                            action="https://formspree.io/f/xeorlqay"
                            method="POST"
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-m font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-m font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-m font-medium mb-2">Your Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    required
                                    placeholder="Your Message"
                                    rows="4"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full"
                            >
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
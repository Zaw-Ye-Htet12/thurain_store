"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Telescope, ArrowUpRight, Lightbulb, Rocket, Globe2, Sparkles } from "lucide-react";
import DecryptedText from "@/components/bits/DecryptedText";

// Spotlight Effect Component
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120,119,198,0.1), transparent 40%)`,
                }}
            />
            <div className="relative z-20 h-full">{children}</div>
        </div>
    );
};


export function VisionMission() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-background">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Dot Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />


            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider mb-6"
                    >
                        <Sparkles className="w-3 h-3" />
                        <span>Future Focused</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                        Our <DecryptedText text="Purpose" animateOn="view" className="text-primary inline-block" />
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
                    >
                        Redefining the standards of hardware and home improvement through innovation, quality, and sustainable practices.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Vision Card */}
                    <motion.div
                        style={{ y }}
                        className="h-full"
                    >
                        <SpotlightCard className="h-full p-8 md:p-12 flex flex-col justify-between group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div>
                                <div className="w-14 h-14 mb-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-primary border border-neutral-200 dark:border-neutral-700 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                    <Telescope className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">Our Vision</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                    To be the premier destination for high-quality hardware and home improvement solutions in Myanmar, recognized for our commitment to innovation, sustainability, and customer excellence.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center text-primary font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="mr-2 border-b border-primary/0 group-hover:border-primary transition-all">Explore Strategy</span>
                                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full lg:mt-24" // Staggered layout effect
                    >
                        <SpotlightCard className="h-full p-8 md:p-12 flex flex-col justify-between group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div>
                                <div className="w-14 h-14 mb-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-blue-600 border border-neutral-200 dark:border-neutral-700 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <Rocket className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors">Our Mission</h3>
                                <ul className="space-y-6">
                                    {[
                                        { icon: Target, text: "Provide a comprehensive range of genuine, durable products." },
                                        { icon: Lightbulb, text: "Offer expert advice and exceptional service to every customer." },
                                        { icon: Globe2, text: "Contribute to the modernization of Myanmar's infrastructure." }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 group/item">
                                            <div className="mt-1 p-1 bg-primary/10 rounded-md text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-muted-foreground text-lg group-hover/item:text-foreground transition-colors">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

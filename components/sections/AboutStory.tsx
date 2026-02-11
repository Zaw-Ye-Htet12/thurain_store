"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Layers, Zap, Hexagon } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useRef } from "react";
import Image from "next/image";

// Font variants are handled via CSS classes defined in globals.css: font-sans, font-display, font-mono

export function AboutStory() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Fast-read Content */}
                    <div className="order-2 lg:order-1 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="font-mono text-xs uppercase tracking-widest text-primary">// The Blueprint</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 leading-[0.9]">
                                CRAFTING <br />
                                <span className="text-muted-foreground">THE FUTURE</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-12 relative pl-4 border-l border-neutral-200 dark:border-neutral-800">
                            {[
                                {
                                    year: "ROOTS",
                                    title: "Physical Presence",
                                    desc: "Built on trust with two active physical locations, serving our community personally.",
                                    icon: Box
                                },
                                {
                                    year: "NOW",
                                    title: "Digital Evolution",
                                    desc: "Expanding beyond borders. Launching our comprehensive online store in just a few months.",
                                    icon: Layers
                                },
                                {
                                    year: "VISION",
                                    title: "The Standard",
                                    desc: "Premium quality goods at accessible prices. High-end products for every customer.",
                                    icon: Zap
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.15) }}
                                    className="relative pl-8 group"
                                >
                                    <div className="absolute -left-[21px] top-1 w-3 h-3 bg-background border-2 border-primary rounded-full group-hover:bg-primary transition-colors duration-300" />

                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                                        <span className="font-mono text-sm font-bold text-primary">{item.year}</span>
                                        <h3 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed max-w-sm font-light">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-12"
                        >
                            <Button asChild className="rounded-full h-12 px-8 text-sm uppercase tracking-widest font-semibold group">
                                <Link href="/about">
                                    Full Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Column: Imagery */}
                    <motion.div
                        style={{ y }}
                        className="order-1 lg:order-2 relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 shadow-2xl group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                            <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                                <Hexagon className="w-5 h-5 text-white/90 animate-pulse" />
                                <span className="font-mono text-[10px] text-white/70 uppercase tracking-widest">Sys.Status: Optimal</span>
                            </div>

                            <div className="absolute bottom-10 left-8 right-8 z-20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="font-mono text-xs text-primary mb-2">PROJECT: THURAIN</p>
                                <p className="text-3xl font-bold leading-tight">
                                    Premium quality. Unbeatable value.
                                </p>
                            </div>

                            <Image
                                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzfGVufDB8fDB8fHww"
                                alt="Modern Architecture"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

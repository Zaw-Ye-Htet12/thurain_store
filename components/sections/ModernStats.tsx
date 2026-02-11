"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Building2, Users, Package, Trophy, Handshake, Truck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Animated Counter Component
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                // Ensure we format the number and append suffix correctly
                ref.current.textContent = `${Math.floor(latest).toLocaleString()}${suffix}`;
            }
        });
        return () => unsubscribe();
    }, [springValue, suffix]);

    return <span ref={ref} className="tabular-nums tracking-tight" />;
}

// Card Component
const StatCard = ({
    title,
    value,
    suffix = "",
    description,
    icon: Icon,
    className,
    delay = 0,
}: {
    title: string;
    value: number | string;
    suffix?: string;
    description: string;
    icon: any;
    className?: string;
    delay?: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "relative group p-8 rounded-3xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col justify-between",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="mb-6 flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-background shadow-sm flex items-center justify-center text-primary border border-border group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="w-6 h-6" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/5 text-xs font-semibold text-primary uppercase tracking-wider">
                        {title}
                    </div>
                </div>

                <div>
                    <div className="text-4xl md:text-5xl font-bold text-foreground mb-3 flex items-baseline">
                        {typeof value === "number" ? (
                            <Counter value={value} suffix={suffix} />
                        ) : (
                            <span>
                                {value}
                                {suffix}
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{description}</p>
                </div>
            </div>

            {/* Decorative decorative blob */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500 pointer-events-none" />
        </motion.div>
    );
};

export function ModernStats() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
                        >
                            Impact & <span className="text-primary">Scale</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground max-w-lg text-lg font-light leading-relaxed"
                        >
                            Measuring our commitment to quality, service, and infrastructure development through the numbers that matter.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block mb-4"
                    >
                        <div className="text-right">
                            <p className="text-sm font-mono text-muted-foreground mb-1">DATA UPDATED</p>
                            <p className="font-bold text-foreground">FEB 2026</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
                    {/* Primary Large Card - Spans 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-2 relative p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground overflow-hidden group min-h-[300px] flex flex-col justify-between"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

                        {/* Huge translucent icon */}
                        <div className="absolute -right-10 -bottom-10 text-white/10 transform rotate-12 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-0">
                            <Trophy size={280} strokeWidth={0.5} />
                        </div>

                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-1">Market Leadership</h3>
                                <p className="text-primary-foreground/80 font-light">Defining standards since 2004</p>
                            </div>
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                                <Building2 className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="relative z-10 mt-8">
                            <div className="text-7xl md:text-8xl font-bold tracking-tighter mb-2 flex items-baseline leading-none">
                                <Counter value={20} suffix="+" />
                            </div>
                            <p className="text-xl font-medium text-primary-foreground/90 max-w-sm">Years of delivering excellence in hardware solutions across Myanmar.</p>
                        </div>
                    </motion.div>

                    <StatCard
                        title="Product Catalog"
                        value={1000}
                        suffix="+"
                        description="Premium hardware items, tools, and home improvement essentials curated for professional quality."
                        icon={Package}
                        delay={0.2}
                    />

                    <StatCard
                        title="Happy Clients"
                        value={5000}
                        suffix="+"
                        description="Homeowners, contractors, and businesses who trust us for their construction projects."
                        icon={Users}
                        delay={0.3}
                    />

                    <StatCard
                        title="Projects Supplied"
                        value={350}
                        suffix="+"
                        description="Major construction and renovation projects supported across the region."
                        icon={Handshake}
                        delay={0.4}
                    />

                    <StatCard
                        title="Delivery Coverage"
                        value="Coming Soon"
                        suffix=""
                        description="We are preparing our reliable logistics network. Updates coming shortly."
                        icon={Truck}
                        delay={0.5}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-2 relative p-8 md:p-10 rounded-3xl overflow-hidden group min-h-[300px] flex flex-col justify-end"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Business Partnership"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                        <div className="relative z-10 text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white">
                                    <Handshake className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-white/90">Join Our Network</span>
                            </div>

                            <h3 className="text-3xl md:text-3xl font-bold mb-3 leading-tight">
                                Partner & Distribute <br /><span className="text-white/70">With Us</span>
                            </h3>

                            <p className="text-white/80 max-w-md mb-6 font-light text-sm md:text-base">
                                Expand your business reach by partnering with Myanmar's leading hardware supplier. Let's build the future together.
                            </p>

                            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-white/80 transition-colors group/btn">
                                Collaborate Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

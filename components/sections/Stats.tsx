"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const StatItem = ({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 10 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(end);
        }
    }, [motionValue, isInView, end]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${Math.floor(latest).toLocaleString()}${suffix}`;
            }
        });
    }, [springValue, suffix]);

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl border shadow-sm">
            <span
                ref={ref}
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-2"
            />
            <p className="text-muted-foreground font-medium text-center">{label}</p>
        </div>
    );
};

export function Stats() {
    return (
        <section className="py-20 bg-background/50 relative overflow-hidden">
            {/* Decorative background grid */}
            <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10 dark:bg-grid-slate-700/20" />

            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <StatItem end={2000} suffix="+" label="Happy Customers" />
                    <StatItem end={150} suffix="+" label="Premium Products" />
                    <StatItem end={24} suffix="/7" label="Customer Support" />
                    <StatItem end={5} suffix="⭐" label="Average Rating" />
                </div>
            </div>
        </section>
    );
}

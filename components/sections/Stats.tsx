"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Building2, MapPin, Users, Package } from "lucide-react";

const StatItem = ({ end, suffix = "", label, icon: Icon }: { end: number; suffix?: string; label: string; icon: any }) => {
    const ref = useRef<HTMLDivElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
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
        <div className="relative group p-6 rounded-2xl bg-card border hover:border-primary/50 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                </div>
                <p className="font-semibold text-muted-foreground">{label}</p>
            </div>

            <span
                ref={ref}
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            >
                0
            </span>
        </div>
    );
};

export function Stats() {
    return (
        <section className="py-20 relative overflow-hidden bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatItem end={20} suffix="+" label="Years Experience" icon={Building2} />
                    <StatItem end={2} suffix="" label="Store Locations" icon={MapPin} />
                    <StatItem end={1000} suffix="+" label="Quality Products" icon={Package} />
                    <StatItem end={5000} suffix="+" label="Happy Customers" icon={Users} />
                </div>
            </div>
        </section>
    );
}

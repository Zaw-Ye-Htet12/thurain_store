"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import {
    ArrowDown, ArrowRight, ArrowUpRight, MapPin, Phone, Mail,
    Wrench, Pipette, HardHat, Lightbulb, Sofa,
    Shield, Search, ShieldCheck, Award,
    Clock, DollarSign, Truck, Users, Package, Store,
    ChevronRight, Sparkles, Hexagon, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import DecryptedText from "@/components/bits/DecryptedText";
import { useTranslations } from "next-intl";

/* ─────────────────────────── Animated Counter ─────────────────────────── */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-50px" });

    React.useEffect(() => {
        if (isInView) motionValue.set(value);
    }, [isInView, value, motionValue]);

    React.useEffect(() => {
        const unsub = springValue.on("change", (latest) => {
            if (ref.current) ref.current.textContent = `${Math.floor(latest).toLocaleString()}${suffix}`;
        });
        return unsub;
    }, [springValue, suffix]);

    return <span ref={ref} className="tabular-nums tracking-tight" />;
}

/* ─────────────────────────── Spotlight Card ─────────────────────────── */
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    return (
        <div
            ref={divRef}
            onMouseMove={(e) => {
                if (!divRef.current) return;
                const rect = divRef.current.getBoundingClientRect();
                setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/50 overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(120,119,198,0.08), transparent 40%)`,
                }}
            />
            <div className="relative z-20 h-full">{children}</div>
        </div>
    );
};

/* ─────────────────────────── Floating Particles ─────────────────────────── */
function FloatingParticles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/20 rounded-full"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN ABOUT PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export function AboutPageClient() {
    const t = useTranslations('AboutPage');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    return (
        <div ref={containerRef} className="relative">
            {/* ── HERO ── */}
            <HeroSection t={t} scrollYProgress={scrollYProgress} />

            {/* ── TIMELINE ── */}
            <TimelineSection t={t} />

            {/* ── QUALITY ── */}
            <QualitySection t={t} />

            {/* ── CATEGORIES ── */}
            <CategoriesSection t={t} />

            {/* ── VALUES ── */}
            <ValuesSection t={t} />

            {/* ── LOCATIONS ── */}
            <LocationsSection t={t} />

            {/* ── CTA ── */}
            <CTASection t={t} />
        </div>
    );
}

/* ═══════════════════════════ HERO ═══════════════════════════ */
function HeroSection({ t, scrollYProgress }: { t: any; scrollYProgress: any }) {
    const y = useTransform(scrollYProgress, [0, 0.15], [0, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_50%,transparent_100%)] pointer-events-none z-0" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <FloatingParticles />

            <motion.div style={{ y, opacity, scale }} className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest mb-8"
                >
                    <Hexagon className="w-3 h-3" />
                    <span>{t('hero.tag')}</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-6"
                >
                    {t('hero.title')}
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-primary">
                        <DecryptedText text={t('hero.highlight')} animateOn="view" />
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12"
                >
                    {t('hero.desc')}
                </motion.p>

                {/* Meta info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center gap-8 text-sm font-mono text-muted-foreground mb-16"
                >
                    <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        {t('hero.est')}
                    </span>
                    <span className="w-px h-4 bg-border" />
                    <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {t('hero.location')}
                    </span>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="flex flex-col items-center gap-3"
                >
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{t('hero.scroll')}</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowDown className="w-5 h-5 text-primary" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

/* ═══════════════════════════ TIMELINE ═══════════════════════════ */
function TimelineSection({ t }: { t: any }) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef as unknown as React.RefObject<Element>, { once: true, margin: "-100px" });

    const milestones = [
        { key: 'y2004', color: 'from-amber-500 to-orange-600' },
        { key: 'growth', color: 'from-emerald-500 to-teal-600' },
        { key: 'expansion', color: 'from-blue-500 to-indigo-600' },
        { key: 'today', color: 'from-violet-500 to-purple-600' },
    ];

    return (
        <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider mb-6">
                        <Sparkles className="w-3 h-3" />
                        <span>{t('timeline.tag')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                        {t('timeline.title')}{' '}
                        <span className="text-primary">
                            <DecryptedText text={t('timeline.highlight')} animateOn="view" />
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">{t('timeline.desc')}</p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Central line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

                    <div className="space-y-16 lg:space-y-0">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={m.key}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                className={`relative lg:pl-0 ${i > 0 ? 'lg:mt-8' : ''}`}
                            >
                                <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                                    {/* Content side */}
                                    <div className={`${i % 2 !== 0 ? 'lg:col-start-2 lg:text-left' : 'lg:text-right'}`}>
                                        <SpotlightCard className="p-8 md:p-10 group">
                                            <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                                                <span className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${m.color} text-white text-xs font-bold tracking-widest`}>
                                                    {t(`timeline.${m.key}.year`)}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                                                {t(`timeline.${m.key}.title`)}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed font-light group-hover:text-foreground/80 transition-colors">
                                                {t(`timeline.${m.key}.desc`)}
                                            </p>
                                        </SpotlightCard>
                                    </div>

                                    {/* Dot on timeline (desktop) */}
                                    <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${m.color} shadow-lg ring-4 ring-background`} />
                                    </div>

                                    {/* Spacer */}
                                    <div className={`hidden lg:block ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════ QUALITY ═══════════════════════════ */
function QualitySection({ t }: { t: any }) {
    const qualityItems = [
        { key: 'premium', icon: Shield, color: 'text-amber-500', bg: 'bg-amber-500/10' },
        { key: 'inspected', icon: Search, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { key: 'defectFree', icon: ShieldCheck, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { key: 'guaranteed', icon: Award, color: 'text-violet-500', bg: 'bg-violet-500/10' },
    ];

    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-neutral-50/50 dark:bg-neutral-950/50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider mb-6">
                        <ShieldCheck className="w-3 h-3" />
                        <span>{t('quality.tag')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                        {t('quality.title')}{' '}
                        <span className="text-primary">{t('quality.highlight')}</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">{t('quality.desc')}</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {qualityItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <SpotlightCard className="p-8 h-full group text-center">
                                    <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                        <Icon className={`w-8 h-8 ${item.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {t(`quality.items.${item.key}.title`)}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                                        {t(`quality.items.${item.key}.desc`)}
                                    </p>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════ CATEGORIES ═══════════════════════════ */
function CategoriesSection({ t }: { t: any }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const categories = [
        { key: 'hardware', icon: Wrench, image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=60' },
        { key: 'plumbing', icon: Pipette, image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&auto=format&fit=crop&q=60' },
        { key: 'metals', icon: HardHat, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=60' },
        { key: 'appliances', icon: Lightbulb, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=60' },
        { key: 'decor', icon: Sofa, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60' },
    ];

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider mb-6">
                        <Package className="w-3 h-3" />
                        <span>{t('categories.tag')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                        {t('categories.title')}{' '}
                        <span className="text-primary">{t('categories.highlight')}</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">{t('categories.desc')}</p>
                </motion.div>

                {/* Interactive Category Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* Left: Category List */}
                    <div className="space-y-3">
                        {categories.map((cat, i) => {
                            const Icon = cat.icon;
                            const isActive = activeIndex === i;
                            return (
                                <motion.div
                                    key={cat.key}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    onMouseEnter={() => setActiveIndex(i)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                    className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 group
                                        ${isActive
                                            ? 'border-primary/40 bg-primary/5 shadow-lg shadow-primary/5'
                                            : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-primary/20'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                                            ${isActive ? 'bg-primary text-primary-foreground scale-110' : 'bg-neutral-100 dark:bg-neutral-800 text-primary'}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-primary' : ''}`}>
                                                {t(`categories.${cat.key}.title`)}
                                            </h3>
                                            <p className="text-muted-foreground text-sm font-light mt-1 line-clamp-2">
                                                {t(`categories.${cat.key}.desc`)}
                                            </p>
                                        </div>
                                        <ChevronRight className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${isActive ? 'translate-x-1 text-primary' : ''}`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right: Active Image Preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/3] lg:aspect-auto rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hidden lg:block"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex ?? 'default'}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={categories[activeIndex ?? 0].image}
                                    alt={`Category ${activeIndex ?? 0}`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
                                        {t('categories.tag')}
                                    </p>
                                    <h3 className="text-3xl font-bold">
                                        {t(`categories.${categories[activeIndex ?? 0].key}.title`)}
                                    </h3>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════ VALUES ═══════════════════════════ */
function ValuesSection({ t }: { t: any }) {
    const values = [
        { key: 'trust', icon: Clock, gradient: 'from-amber-500/10 to-orange-500/10' },
        { key: 'pricing', icon: DollarSign, gradient: 'from-emerald-500/10 to-teal-500/10' },
        { key: 'delivery', icon: Truck, gradient: 'from-blue-500/10 to-indigo-500/10' },
        { key: 'expert', icon: Users, gradient: 'from-violet-500/10 to-purple-500/10' },
        { key: 'wholesale', icon: Package, gradient: 'from-rose-500/10 to-pink-500/10' },
        { key: 'locations', icon: Store, gradient: 'from-cyan-500/10 to-sky-500/10' },
    ];

    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-neutral-50/50 dark:bg-neutral-950/50">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider mb-6">
                        <Sparkles className="w-3 h-3" />
                        <span>{t('values.tag')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                        {t('values.title')}{' '}
                        <span className="text-primary">
                            <DecryptedText text={t('values.highlight')} animateOn="view" />
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {values.map((v, i) => {
                        const Icon = v.icon;
                        return (
                            <motion.div
                                key={v.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <SpotlightCard className="p-8 h-full group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6 text-primary border border-neutral-200 dark:border-neutral-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {t(`values.${v.key}.title`)}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed font-light group-hover:text-foreground/80 transition-colors">
                                            {t(`values.${v.key}.desc`)}
                                        </p>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════ LOCATIONS ═══════════════════════════ */
function LocationsSection({ t }: { t: any }) {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider mb-6">
                        <MapPin className="w-3 h-3" />
                        <span>{t('locations.tag')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                        {t('locations.title')}{' '}
                        <span className="text-primary">{t('locations.highlight')}</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Thamine Branch */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SpotlightCard className="p-8 md:p-10 h-full group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                                    <Store className="w-6 h-6 text-amber-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {t('locations.thamine.name')}
                                    </h3>
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold">
                                        {t('locations.thamine.badge')}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <span className="text-muted-foreground font-light">{t('locations.thamine.address')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                                    <span className="text-muted-foreground font-light">{t('locations.thamine.phone1')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                                    <span className="text-muted-foreground font-light">{t('locations.thamine.phone2')}</span>
                                </div>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/oGtjHgwnLNY3xXkE6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline group/link"
                            >
                                <span>View on Google Maps</span>
                                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                        </SpotlightCard>
                    </motion.div>

                    {/* Ban Dar Pin Branch */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <SpotlightCard className="p-8 md:p-10 h-full group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                    <Store className="w-6 h-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {t('locations.bandarpin.name')}
                                    </h3>
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold">
                                        {t('locations.bandarpin.badge')}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <span className="text-muted-foreground font-light">{t('locations.bandarpin.address')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                                    <span className="text-muted-foreground font-light">{t('locations.bandarpin.phone1')}</span>
                                </div>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/SpBFbuQw8rRHEBQBA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline group/link"
                            >
                                <span>View on Google Maps</span>
                                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════ CTA ═══════════════════════════ */
function CTASection({ t }: { t: any }) {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
            <FloatingParticles />

            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                        <DecryptedText text={t('cta.title')} animateOn="view" className="text-primary" />
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        {t('cta.desc')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="rounded-full h-14 px-10 text-base uppercase tracking-widest font-semibold group">
                            <a href="https://maps.app.goo.gl/oGtjHgwnLNY3xXkE6" target="_blank" rel="noopener noreferrer">
                                {t('cta.visit')}
                                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-10 text-base uppercase tracking-widest font-semibold group">
                            <Link href="/contact">
                                {t('cta.contact')}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>

                    {/* Contact email */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
                    >
                        <Mail className="w-4 h-4" />
                        <a href="mailto:thurainstoreofficial@gmail.com" className="hover:text-foreground underline underline-offset-4 transition-colors">
                            thurainstoreofficial@gmail.com
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

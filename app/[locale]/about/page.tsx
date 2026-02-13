"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

/* ─────── fade-up wrapper ─────── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT PAGE — Editorial / Magazine Style
   ═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
    const nav = useTranslations("Navigation");
    const t = useTranslations("AboutPage");
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const values = [
        { num: "01", title: t("values.v1.title"), text: t("values.v1.desc") },
        { num: "02", title: t("values.v2.title"), text: t("values.v2.desc") },
        { num: "03", title: t("values.v3.title"), text: t("values.v3.desc") },
    ];

    const stats = [
        { value: "20+", label: t("story.stats.years") },
        { value: "1000+", label: t("story.stats.products") },
        { value: "2", label: t("story.stats.locations") },
    ];

    return (
        <div className="relative">
            {/* ════════════════════ HERO ════════════════════ */}
            <section ref={heroRef} className="relative pt-30 min-h-[70vh] flex items-end pb-20 overflow-hidden">
                {/* Soft tinted backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-background to-background pointer-events-none" />

                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl relative z-10">
                    <Reveal>
                        <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-5">
                            {nav("about")}
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8">
                            {t("hero.titlePart1")}
                            <span className="italic font-light text-primary/80">{t("hero.titleHighlight")}</span>
                            <span className="text-primary">.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                            {t("hero.desc")}
                        </p>
                    </Reveal>
                </motion.div>
            </section>

            {/* ════════════════════ STORY ════════════════════ */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
                        {/* Left column — large pull quote */}
                        <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
                            <div className="relative">
                                <span className="absolute -left-4 md:-left-8 top-0 text-[8rem] md:text-[10rem] leading-none text-primary/[0.07] font-serif select-none">&ldquo;</span>
                                <blockquote className="text-2xl md:text-3xl font-medium leading-snug tracking-tight pt-8">
                                    {t("story.quote")}
                                </blockquote>
                                <div className="mt-8 flex items-center gap-3">
                                    <div className="w-10 h-px bg-primary" />
                                    <span className="text-sm text-muted-foreground tracking-wide">{t("story.attribution")}</span>
                                </div>
                            </div>
                        </Reveal>

                        {/* Right column — narrative text */}
                        <div className="lg:col-span-7 space-y-8">
                            <Reveal>
                                <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 mb-4 font-medium">{t("story.heading")}</h2>
                                <p className="text-muted-foreground text-[1.05rem] leading-[1.85] font-light">
                                    {t("story.p1")}
                                </p>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <p className="text-muted-foreground text-[1.05rem] leading-[1.85] font-light">
                                    {t("story.p2")}
                                </p>
                            </Reveal>

                            {/* Horizontal divider with stats */}
                            <Reveal delay={0.15}>
                                <div className="pt-8 border-t border-border/60">
                                    <div className="grid grid-cols-3 gap-6 text-center">
                                        {stats.map((stat) => (
                                            <div key={stat.label}>
                                                <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{stat.value}</div>
                                                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════ VALUES STRIP ════════════════════ */}
            <section className="py-20 md:py-28 border-y border-border/40 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
                    <Reveal>
                        <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 mb-12 font-medium">{t("values.heading")}</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {values.map((v, i) => (
                            <Reveal key={v.num} delay={i * 0.1}>
                                <div className="group">
                                    <span className="text-5xl md:text-6xl font-bold text-primary/[0.08] block mb-4 group-hover:text-primary/20 transition-colors duration-500">
                                        {v.num}
                                    </span>
                                    <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                                        {v.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-[1.8] font-light">
                                        {v.text}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════ LOCATIONS ════════════════════ */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
                    <Reveal>
                        <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 mb-12 font-medium">{t("locations.heading")}</h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Thamine */}
                        <Reveal>
                            <div className="p-8 md:p-10 rounded-2xl border border-border/60 bg-card/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.03] transition-all duration-500 group h-full flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                                        {t("locations.thamine.name")}
                                    </h3>
                                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-full font-semibold">
                                        {t("locations.thamine.badge")}
                                    </span>
                                </div>

                                <div className="space-y-3 text-sm text-muted-foreground font-light flex-1">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
                                        <span>{t("locations.thamine.address")}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 shrink-0 text-primary/60" />
                                        <span>{t("locations.thamine.phone1")}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 shrink-0 text-primary/60" />
                                        <span>{t("locations.thamine.phone2")}</span>
                                    </div>
                                </div>

                                <a
                                    href="https://maps.app.goo.gl/oGtjHgwnLNY3xXkE6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline underline-offset-4"
                                >
                                    {t("locations.googleMaps")} <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </Reveal>

                        {/* Ban Dar Pin */}
                        <Reveal delay={0.1}>
                            <div className="p-8 md:p-10 rounded-2xl border border-border/60 bg-card/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.03] transition-all duration-500 group h-full flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                                        {t("locations.bandarpin.name")}
                                    </h3>
                                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground bg-muted px-3 py-1 rounded-full font-semibold">
                                        {t("locations.bandarpin.badge")}
                                    </span>
                                </div>

                                <div className="space-y-3 text-sm text-muted-foreground font-light flex-1">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
                                        <span>{t("locations.bandarpin.address")}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 shrink-0 text-primary/60" />
                                        <span>{t("locations.bandarpin.phone1")}</span>
                                    </div>
                                </div>

                                <a
                                    href="https://maps.app.goo.gl/SpBFbuQw8rRHEBQBA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline underline-offset-4"
                                >
                                    {t("locations.googleMaps")} <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ════════════════════ CTA ════════════════════ */}
            <section className="py-24 md:py-32 border-t border-border/40">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            {t("cta.title")}<span className="text-primary">?</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
                            {t("cta.desc")}
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="h-14 px-10 rounded-full text-base font-semibold group">
                                <a href="https://maps.app.goo.gl/oGtjHgwnLNY3xXkE6" target="_blank" rel="noopener noreferrer">
                                    {t("cta.visit")}
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full text-base font-semibold group">
                                <Link href="/contact">
                                    {t("cta.contact")}
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-4 h-4" />
                            <a href="mailto:thurainstoreofficial@gmail.com" className="hover:text-foreground underline underline-offset-4 transition-colors">
                                thurainstoreofficial@gmail.com
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}

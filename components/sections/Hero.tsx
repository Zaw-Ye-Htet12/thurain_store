"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowRight, Hammer, Phone, ChevronRight } from "lucide-react";
import DecryptedText from "@/components/bits/DecryptedText";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations('Hero');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const titleRef = useRef<HTMLHeadingElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        setMousePosition({ x, y });
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-background perspective-1000 font-display"
            onMouseMove={handleMouseMove}
        >
            {/* Animated Industrial Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

            {/* Glowing Orbs for "Futuristic" feel */}
            <motion.div
                style={{ y: y1, x: mousePosition.x * -3, opacity: 0.15 }}
                className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
            />
            <motion.div
                style={{ y: y2, x: mousePosition.x * 3, opacity: 0.1 }}
                className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-primary/50 rounded-full blur-[100px]"
            />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col items-center text-center">

                {/* Modern Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-secondary/5 border border-primary/10 backdrop-blur-md shadow-sm mb-12 hover:border-primary/30 transition-colors cursor-default group"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                        {t('est')}
                    </span>
                </motion.div>

                {/* Main Title with Decrypted Animation */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground mb-8 leading-[0.9]">
                    <div className="flex flex-col items-center gap-2">
                        <DecryptedText
                            text={t('selling')}
                            animateOn="view"
                            revealDirection="center"
                            className="text-primary"
                        />
                        <span className="font-sans font-light tracking-tight text-4xl md:text-6xl opacity-80">{t('highEndProducts')}</span>
                    </div>
                </h1>

                <motion.p
                    style={{ opacity }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-light tracking-wide"
                >
                    {t('description')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
                >
                    <Button asChild size="lg" className="h-16 px-10 text-lg rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform bg-foreground text-background hover:bg-foreground/90 group">
                        <Link href="/products" className="flex items-center gap-2">
                            <span className="skew-x-[10deg] group-hover:skew-x-0 transition-transform inline-block">{t('exploreCatalog')}</span>
                            <ArrowRight className="h-5 w-5 skew-x-[10deg] group-hover:skew-x-0 transition-transform" />
                        </Link>
                    </Button>

                    <Link href="/contact" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-mono uppercase tracking-widest border-b border-transparent hover:border-foreground pb-1">
                        {t('getQuote')} <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-8 hidden md:flex flex-col gap-4 text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180"
            >
                <span>{t('scrollToDiscover')}</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent" />
            </motion.div>
        </section>
    );
}

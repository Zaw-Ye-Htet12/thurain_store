"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    const t = useTranslations("HomePage");

    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-20 animate-blob dark:bg-primary/20" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:bg-purple-500/20" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000 dark:bg-pink-500/20" />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground mb-8 backdrop-blur-sm bg-background/50"
                >
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    Now Shipping Worldwide
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent mb-6 max-w-4xl"
                >
                    {t('title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-muted-foreground max-w-[700px] mb-10 leading-relaxed"
                >
                    {t('description')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                        <Link href="/products">
                            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="h-14 px-8 text-lg rounded-full backdrop-blur-sm bg-background/50 hover:bg-background/80">
                        <Link href="/about">Learn More</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
            </motion.div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Hammer, Home, Droplets, Zap, Ruler, Wrench, Lightbulb, HardHat } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function Categories() {
    const t = useTranslations('Categories');

    // Explicitly defining the structure to ensure type safety if needed, 
    // but here we just map IDs to icons/colors.
    const categoryConfig = [
        {
            id: 'tools',
            icon: <Wrench className="h-8 w-8" />,
            color: "group-hover:text-amber-500"
        },
        {
            id: 'materials',
            icon: <Hammer className="h-8 w-8" />,
            color: "group-hover:text-blue-500"
        },
        {
            id: 'electrical',
            icon: <Zap className="h-8 w-8" />,
            color: "group-hover:text-yellow-500"
        },
        {
            id: 'plumbing',
            icon: <Droplets className="h-8 w-8" />,
            color: "group-hover:text-cyan-500"
        },
        {
            id: 'appliances',
            icon: <Home className="h-8 w-8" />,
            color: "group-hover:text-purple-500"
        },
        {
            id: 'lighting',
            icon: <Lightbulb className="h-8 w-8" />,
            color: "group-hover:text-orange-500"
        },
        {
            id: 'safety',
            icon: <HardHat className="h-8 w-8" />,
            color: "group-hover:text-red-500"
        },
        {
            id: 'metal',
            icon: <Ruler className="h-8 w-8" />,
            color: "group-hover:text-slate-500"
        },
    ];

    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 border border-primary/20 px-3 py-1 rounded-full">{t('sectionTitle')}</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground font-display">
                        {t('title')}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl font-light">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {categoryConfig.map((cat, idx) => (
                        <Link href="/products" key={cat.id} className="group relative">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                className="h-full bg-card hover:bg-card/50 border rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
                            >
                                <div className={`p-4 rounded-full bg-muted group-hover:bg-muted/50 transition-colors duration-300 ${cat.color}`}>
                                    {cat.icon}
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{t(`items.${cat.id}.name`)}</h3>
                                    <p className="text-sm font-medium text-muted-foreground/80 font-myanmar">{t(`items.${cat.id}.sub`)}</p>
                                </div>

                                <div className="mt-auto pt-4 flex items-center text-xs font-semibold text-muted-foreground uppercase tracking-widest border-t w-full justify-center group-hover:border-primary/20 transition-colors">
                                    {t(`items.${cat.id}.count`)}
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

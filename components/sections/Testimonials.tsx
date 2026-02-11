"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

export function Testimonials() {
    const t = useTranslations('Testimonials');

    const testimonials = [
        {
            name: "Aung Kyaw",
            role: t('role.homeowner'),
            content: t('t1'),
            rating: 5,
        },
        {
            name: "Thandar Soe",
            role: t('role.designer'),
            content: t('t2'),
            rating: 5,
        },
        {
            name: "Myo Min",
            role: t('role.contractor'),
            content: t('t3'),
            rating: 4,
        },
        {
            name: "Hla Hla Win",
            role: t('role.diy'),
            content: t('t4'),
            rating: 5,
        },
    ];

    return (
        <section className="py-24 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">{t('title')}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{t('desc')}</p>
            </div>

            {/* Marquee Effect Container */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex gap-6 animate-scroll whitespace-nowrap px-4 w-max">
                    {/* Duplicating the list to create infinite scroll effect */}
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="w-[300px] md:w-[400px] bg-background border rounded-2xl p-8 shadow-sm flex-shrink-0 whitespace-normal"
                        >
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                    <Star
                                        key={starIndex}
                                        className={`h-4 w-4 ${starIndex < t.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                                    />
                                ))}
                            </div>
                            <p className="text-foreground/80 mb-6 italic leading-relaxed">"{t.content}"</p>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{t.name}</h4>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Gradient Masks for smooth fade out */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent dark:from-muted/30" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent dark:from-muted/30" />
            </div>
        </section>
    );
}

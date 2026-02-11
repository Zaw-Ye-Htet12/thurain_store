"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Locations() {
    const t = useTranslations('Locations');

    const locations = [
        {
            id: "thamine",
            name: t('thamine.name'),
            nameMm: "သမိုင်းမြို့နယ် ဆိုင်ခွဲ",
            address: t('thamine.address'),
            phone: "09-43161917, 09-773104526",
            hours: t('hours'),
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop", // Modern building
            mapLink: "https://maps.app.goo.gl/E9SnVEkmZbGw9Z9NA"
        },
        {
            id: "kyimyindaing",
            name: t('kyimyindaing.name'),
            nameMm: "ကြည့်မြင်တိုင်မြို့နယ် ဆိုင်ခွဲ",
            address: t('kyimyindaing.address'),
            phone: "09-112233445, 09-554433221",
            hours: t('hours'),
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop", // Interior/Office vibe
            mapLink: "https://maps.app.goo.gl/zaPnbAKgcdzs8hrp6"
        }
    ];

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
            }}></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4 block"
                        >
                            {t('tag')}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter"
                        >
                            {t('title')} <span className="text-muted-foreground">{t('highlight')}</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-sm md:text-right text-left"
                    >
                        {t('desc')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={loc.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.7 }}
                            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50"
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0">
                                <Image
                                    src={loc.image}
                                    alt={loc.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            </div>

                            {/* Content Info Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono font-medium border border-white/10">
                                            {t('branch')} 0{index + 1}
                                        </span>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold mb-1">{loc.name}</h3>
                                    <p className="text-white/60 font-myanmar text-sm mb-6">{loc.nameMm}</p>

                                    <div className="space-y-4 mb-8 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-white/10">
                                                <MapPin className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Address</p>
                                                <p className="text-sm font-medium">{loc.address}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex items-center gap-3">
                                                <Phone className="h-4 w-4 text-white/70" />
                                                <span className="text-sm text-white/90">{loc.phone.split(',')[0]}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="h-4 w-4 text-white/70" />
                                                <span className="text-sm text-white/90">{loc.hours}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-white text-black hover:bg-white/90 rounded-xl py-6 font-semibold tracking-wide">
                                        <Navigation className="mr-2 h-4 w-4" /> {t('directions')}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

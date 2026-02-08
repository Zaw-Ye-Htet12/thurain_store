"use client";

import { useTranslations } from "next-intl";
import { Hammer, Home as HomeIcon, Droplet, Zap, CheckCircle2, Truck, Headphones, Shield, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
    const t = useTranslations("Features");

    const features = [
        {
            id: 'quality',
            icon: <Award className="h-6 w-6 text-primary" />,
            title: t('quality'),
            desc: t('qualityDesc')
        },
        {
            id: 'delivery',
            icon: <Truck className="h-6 w-6 text-primary" />,
            title: t('delivery'),
            desc: t('deliveryDesc')
        },
        {
            id: 'support',
            icon: <Headphones className="h-6 w-6 text-primary" />,
            title: t('support'),
            desc: t('supportDesc')
        },
        {
            id: 'secure',
            icon: <Shield className="h-6 w-6 text-primary" />,
            title: "Secure Payment",
            desc: "100% secure payment processing"
        }
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose ThuRain?</h2>
                    <p className="text-muted-foreground">We provide premium quality products with an exceptional shopping experience.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background rounded-2xl p-8 border hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

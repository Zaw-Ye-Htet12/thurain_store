"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Hammer, Home as HomeIcon, Droplet, Zap, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Categories() {
    const t = useTranslations("Categories");

    const categories = [
        {
            id: 'hardware',
            icon: <Hammer className="h-12 w-12" />,
            name: t('hardware'),
            color: "bg-blue-500/10 text-blue-500",
            description: "Tools for every project",
            colSpan: "md:col-span-2 md:row-span-2"
        },
        {
            id: 'decor',
            icon: <HomeIcon className="h-8 w-8" />,
            name: t('decor'),
            color: "bg-purple-500/10 text-purple-500",
            description: "Modern home styling",
            colSpan: "md:col-span-1 md:row-span-1"
        },
        {
            id: 'plumbing',
            icon: <Droplet className="h-8 w-8" />,
            name: t('plumbing'),
            color: "bg-cyan-500/10 text-cyan-500",
            description: "Essential fixtures",
            colSpan: "md:col-span-1 md:row-span-1"
        },
        {
            id: 'appliances',
            icon: <Zap className="h-8 w-8" />,
            name: t('appliances'),
            color: "bg-amber-500/10 text-amber-500",
            description: "Smart electronics",
            colSpan: "md:col-span-2 md:row-span-1"
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Shop by Category</h2>
                    <p className="text-muted-foreground max-w-lg">Find exactly what you need for your next project or home improvement.</p>
                </div>
                <Link href="/products" className="group flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                    View All Categories <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
            >
                {categories.map((cat) => (
                    <motion.div
                        key={cat.id}
                        variants={item}
                        className={cn("group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all hover:shadow-lg", cat.colSpan)}
                    >
                        <Link href="/products" className="absolute inset-0 z-10">
                            <span className="sr-only">View {cat.name}</span>
                        </Link>

                        <div className="flex h-full flex-col justify-between relative z-0">
                            <div className={cn("inline-flex w-fit rounded-full p-4 transition-transform duration-300 group-hover:scale-110", cat.color)}>
                                {cat.icon}
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{cat.name}</h3>
                                <p className="text-muted-foreground opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-sm">
                                    {cat.description} &rarr;
                                </p>
                            </div>
                        </div>

                        {/* Decorative background circle */}
                        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

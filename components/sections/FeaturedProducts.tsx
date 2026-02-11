"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

// Mock Data
const products = [
    {
        id: 1,
        name: "Pro-Series Drill Set",
        category: "Tools",
        price: "$129.99",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1000&auto=format&fit=crop",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Smart LED System",
        category: "Lighting",
        price: "$45.00",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000&auto=format&fit=crop",
        badge: "New"
    },
    {
        id: 3,
        name: "Matte Black Faucet",
        category: "Plumbing",
        price: "$89.50",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
        badge: ""
    },
    {
        id: 4,
        name: "Ergo-Grip Hammer",
        category: "Tools",
        price: "$24.99",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1586864387967-df029b8c0347?q=80&w=1000&auto=format&fit=crop",
        badge: "Sale"
    }
];

const categories = ["All", "Tools", "Lighting", "Plumbing", "Electrical"];

export function FeaturedProducts() {
    const t = useTranslations("HomePage");
    const [activeTab, setActiveTab] = useState("All");

    return (
        <section className="py-24 md:py-32 bg-background w-full">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header & Tabs */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4 block"
                        >
                            // Curated Collection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                        >
                            Featured <span className="text-muted-foreground">Essentials</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat, i) => (
                            <motion.button
                                key={cat}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.05) }}
                                onClick={() => setActiveTab(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/5] relative overflow-hidden bg-secondary/20">
                                {product.badge && (
                                    <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                                        {product.badge}
                                    </span>
                                )}

                                <button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-primary hover:text-white">
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>

                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Quick Add Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                    <Button className="w-full rounded-xl shadow-lg gap-2">
                                        <ShoppingBag className="w-4 h-4" /> Add to Cart
                                    </Button>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.category}</p>
                                    <div className="flex items-center gap-1 text-amber-500">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span className="text-xs font-bold text-foreground">{product.rating}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                <p className="text-xl font-bold">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" asChild className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground group transition-all duration-300">
                        <Link href="/products">
                            View Full Collection <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

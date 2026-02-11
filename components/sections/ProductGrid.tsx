"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ShoppingCart, ArrowUpRight, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

// Mock Data
const ALL_PRODUCTS = [
    {
        id: 1,
        name: "Pro-Series Drill Set",
        category: "Tools",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1000&auto=format&fit=crop",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Smart LED System",
        category: "Lighting",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000&auto=format&fit=crop",
        badge: "New"
    },
    {
        id: 3,
        name: "Matte Black Faucet",
        category: "Plumbing",
        price: 89.50,
        image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
        badge: ""
    },
    {
        id: 4,
        name: "Ergo-Grip Hammer",
        category: "Tools",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1586864387967-df029b8c0347?q=80&w=1000&auto=format&fit=crop",
        badge: "Sale"
    },
    {
        id: 5,
        name: "Industrial Copper Wire",
        category: "Electrical",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000&auto=format&fit=crop",
        badge: ""
    },
    {
        id: 6,
        name: "Safety Helmet (Yellow)",
        category: "Safety",
        price: 12.50,
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop",
        badge: ""
    },
    {
        id: 7,
        name: "Heavy Duty Wrench",
        category: "Tools",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000&auto=format&fit=crop",
        badge: "Reliable"
    },
    {
        id: 8,
        name: "Cement Mixer Portable",
        category: "Machinery",
        price: 450.00,
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
        badge: "Heavy Duty"
    }
];

const CATEGORIES = ["All", "Tools", "Lighting", "Plumbing", "Electrical", "Safety", "Machinery"];

export function ProductGrid() {
    const t = useTranslations("ProductGrid");
    const tBadges = useTranslations("Badges");
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Filter Logic
    const filteredProducts = ALL_PRODUCTS.filter((product) => {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="min-h-screen bg-background py-12 md:py-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto py-10 px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold font-display tracking-tighter mb-4"
                        >
                            {t('title')} <span className="text-primary">{t('highlight')}</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground text-lg max-w-lg font-light leading-relaxed"
                        >
                            {t('desc')}
                        </motion.p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative group w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder={t('search')}
                                className="pl-10 h-12 rounded-full border-border/50 bg-background/50 backdrop-blur-sm focus:ring-primary/20 transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full shrink-0 md:hidden"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Categories & Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={cn(
                        "flex flex-wrap gap-2 mb-10 transition-all duration-300",
                        isFilterOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden md:overflow-visible"
                    )}
                >
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-transparent",
                                activeCategory === cat
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-border/50"
                            )}
                        >
                            {t(`categories.${cat}`)}
                        </button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                                >
                                    {/* Image Section */}
                                    <div className="aspect-[4/5] relative overflow-hidden bg-secondary/10">
                                        {/* Badge */}
                                        {product.badge && (
                                            <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                                                {tBadges(product.badge as any)}
                                            </span>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                                            <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-sm hover:bg-primary hover:text-primary-foreground">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </Button>
                                        </div>

                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Quick Add Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 z-20">
                                            <Button className="w-full rounded-xl shadow-lg gap-2 bg-white/90 dark:bg-black/90 text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-md border border-border/50">
                                                <ShoppingCart className="w-4 h-4" /> {t('addToCart')}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Info Section */}
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-bold text-primary uppercase tracking-wider">{product.category}</span>
                                            <span className="font-bold text-foreground">${product.price.toFixed(2)}</span>
                                        </div>
                                        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors cursor-pointer">
                                            {product.name}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
                            <Search className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('noProducts')}</h3>
                        <p className="text-muted-foreground max-w-sm">
                            {t('noProductsDesc', { query: searchQuery, category: t(`categories.${activeCategory}`) })}
                        </p>
                        <Button
                            variant="link"
                            onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                            className="mt-4 text-primary"
                        >
                            {t('clearFilters')}
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

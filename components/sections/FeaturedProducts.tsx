"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FeaturedProducts() {
    const t = useTranslations("HomePage");

    // Mock data for featured products
    const featuredProducts = [1, 2, 3, 4];

    return (
        <section className="py-24 container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">{t('featured')}</h2>
                    <p className="text-muted-foreground">Discover our handpicked selection of premium items.</p>
                </div>
                <Button variant="ghost" asChild className="hidden md:flex group">
                    <Link href="/products" className="text-primary hover:text-primary/80">
                        {t('viewAll')} <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((i, index) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <ProductCard
                            id={i}
                            name={`Featured Item ${i}`}
                            description="Premium quality product for your home."
                            price="$129.99"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Button variant="outline" asChild className="w-full">
                    <Link href="/products">{t('viewAll')}</Link>
                </Button>
            </div>
        </section>
    );
}

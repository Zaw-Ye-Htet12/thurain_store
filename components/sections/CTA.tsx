"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-24 container px-4 md:px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-24 relative overflow-hidden"
            >
                {/* Abstract Patterns */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Transform Your Space?</h2>
                    <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl">
                        Join thousands of satisfied customers and start building your dream home with ThuRain's premium collection today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button
                            asChild
                            size="lg"
                            variant="secondary"
                            className="h-14 px-8 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                            <Link href="/products">
                                Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-lg font-semibold rounded-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
                        >
                            <Link href="/contact">
                                Contact Support
                            </Link>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

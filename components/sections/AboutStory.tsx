"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";

export function AboutStory() {
    return (
        <section className="py-24 container px-4 md:px-6 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        Crafting Quality & Comfort <br />
                        <span className="text-primary">Since 2020</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        At ThuRain, we believe that your home should be a reflection of your personality.
                        We started small, with a mission to bring high-quality, durable hardware and stylish decor to Myanmar.
                        Today, we are proud to serve thousands of customers who trust us for their home improvement needs.
                    </p>

                    <div className="space-y-4 mb-8">
                        {[
                            "Premium Materials Sourced Globally",
                            "Expert Craftsmanship & Durability",
                            "Direct-to-Customer Pricing",
                            "Satisfaction Guaranteed"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3"
                            >
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <span className="font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <Button size="lg" asChild className="rounded-full px-8">
                        <Link href="/about">
                            Read Our Full Story <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>

                {/* Visual / Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-muted relative">
                        {/* Abstract Shape / Image Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-6xl">
                            ThuRain
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-background border p-6 rounded-2xl shadow-xl max-w-[200px]"
                        >
                            <p className="font-bold text-4xl text-primary mb-1">100%</p>
                            <p className="text-sm text-muted-foreground font-medium">Customer Satisfaction Guarantee</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

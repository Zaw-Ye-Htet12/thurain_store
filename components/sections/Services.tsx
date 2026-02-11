"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Tag, Zap, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const services = [
    {
        icon: ShieldCheck,
        title: "High Quality Standards",
        description: "We refuse to compromise. Every product in our catalog is vetted for durability and professional-grade performance.",
        gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
        icon: Tag,
        title: "Always Low Price",
        description: "Direct importer status allows us to cut out middlemen and pass the savings directly to you. Fair pricing, guaranteed.",
        gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
        icon: Zap,
        title: "Expert Consultation",
        description: "Not sure what you need? Our veteran team provides free technical advice to ensure your project succeeds.",
        gradient: "from-orange-500/10 to-red-500/10"
    }
];

export function Services() {
    const [email, setEmail] = useState("");

    return (
        <section className="py-32 relative bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">// Why Choose Us</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                            Redefining <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Service Standards.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-lg max-w-md font-light leading-relaxed"
                    >
                        Quality hardware, unbeatable prices, and a shopping experience designed for the modern era.
                    </motion.p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 h-full rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 w-14 h-14 bg-background rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                                    <service.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Online Store Waitlist - Futuristic CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-foreground text-background"
                >
                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

                    <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/10 backdrop-blur-md border border-background/20 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono font-medium tracking-widest uppercase">Beta Access</span>
                        </div>

                        <h3 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
                            ONLINE STORE <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-background to-background/50">COMING SOON</span>
                        </h3>

                        <p className="text-background/80 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
                            We are building the most advanced hardware e-commerce platform in Myanmar. Join the waitlist for exclusive early access and launch discounts.
                        </p>

                        <div className="w-full max-w-md relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <form className="relative flex items-center bg-background rounded-full p-2 pr-2 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
                                <Input
                                    className="border-0 bg-transparent focus-visible:ring-0 text-foreground placeholder:text-muted-foreground pl-6 h-12 text-base md:text-lg"
                                    placeholder="Enter your email address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Button size="lg" className="rounded-full h-12 px-6 md:px-8 bg-foreground text-background hover:bg-foreground/90 font-bold shrink-0 transition-transform hover:scale-105 active:scale-95">
                                    Join Waitlist
                                </Button>
                            </form>
                        </div>

                        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-mono text-background/50 uppercase tracking-wider">
                            <span>• Priority Access</span>
                            <span>• Exclusive Discounts</span>
                            <span>• Launch Updates</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone, MessageSquare, ArrowUpRight } from "lucide-react";

const ContactMethod = ({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href: string }) => (
    <a
        href={href}
        className="group flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 py-6 hover:border-foreground transition-colors duration-500"
    >
        <div className="flex items-center gap-6">
            <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                <Icon className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 group-hover:text-foreground/70 transition-colors">{label}</p>
                <p className="text-lg font-medium">{value}</p>
            </div>
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
    </a>
)

export function Contact() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Subtle noise texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Typography & Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="block text-sm font-mono tracking-widest uppercase mb-6 text-muted-foreground">
                                // Contact
                            </span>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                                LET'S START A <br />
                                <span className="text-muted-foreground/50">CONVERSATION</span>
                            </h2>
                            <p className="text-xl text-muted-foreground font-light max-w-md mb-12 leading-relaxed">
                                Ready to upgrade your space? Get in touch for quotes, collaborations, or just to say hello.
                            </p>
                        </motion.div>

                        <div className="space-y-2">
                            <ContactMethod
                                icon={MessageSquare}
                                label="Chat with us"
                                value="Start a WhatsApp Chat"
                                href="https://wa.me/0814085141"
                            />
                            <ContactMethod
                                icon={Phone}
                                label="Call Directly"
                                value="+95 9 769 808 227"
                                href="tel:+959769808227"
                            />
                            <ContactMethod
                                icon={Mail}
                                label="Email Inquiries"
                                value="thurainstoreofficial@gmail.com"
                                href="mailto:thurainstoreofficial@gmail.com"
                            />
                            <ContactMethod
                                icon={MapPin}
                                label="Visit Showroom"
                                value="No.20, 1st Floor, Bandarpin street, Yangon, Myanmar"
                                href="https://maps.app.goo.gl/R12uem4CEKxLJiup7"
                            />
                        </div>
                    </div>

                    {/* Right Column: Minimalist Form */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-neutral-50 dark:bg-neutral-900/50 p-8 md:p-12 rounded-[2rem] border border-neutral-200 dark:border-neutral-800"
                        >
                            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-xs uppercase tracking-widest text-muted-foreground group-focus-within:text-foreground transition-colors">Name</label>
                                        <div className="relative">
                                            <Input
                                                className="bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/30 text-lg h-auto"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs uppercase tracking-widest text-muted-foreground group-focus-within:text-foreground transition-colors">Phone</label>
                                        <div className="relative">
                                            <Input
                                                className="bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/30 text-lg h-auto"
                                                placeholder="+95 ..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-xs uppercase tracking-widest text-muted-foreground group-focus-within:text-foreground transition-colors">Email (Optional)</label>
                                    <div className="relative">
                                        <Input
                                            className="bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/30 text-lg h-auto"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-xs uppercase tracking-widest text-muted-foreground group-focus-within:text-foreground transition-colors">Message</label>
                                    <div className="relative">
                                        <Textarea
                                            className="bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/30 text-lg min-h-[100px] resize-none shadow-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full h-14 text-lg group">
                                        <span className="mr-2">Send Request</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <p className="text-center text-xs text-muted-foreground mt-4">
                                        Typically replies within 2 hours during business hours.
                                    </p>
                                </div>
                            </form>
                        </motion.div>

                        {/* Abstract Shape or Decoration behind form */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-neutral-200 dark:bg-neutral-800 rounded-full blur-[80px] -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neutral-200 dark:bg-neutral-800 rounded-full blur-[80px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}

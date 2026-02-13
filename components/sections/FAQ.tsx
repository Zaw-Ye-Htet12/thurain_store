"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

function FAQItem({
    index,
    question,
    answer,
    isOpen,
    onToggle,
}: {
    index: number;
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
        >
            <button
                onClick={onToggle}
                className="w-full group"
                aria-expanded={isOpen}
            >
                <div
                    className={`flex items-start gap-6 py-7 border-b transition-colors duration-300 text-left ${isOpen
                            ? "border-primary/30"
                            : "border-neutral-200 dark:border-neutral-800 hover:border-primary/20"
                        }`}
                >
                    {/* Number */}
                    <span
                        className={`font-mono text-sm mt-0.5 min-w-[2rem] transition-colors duration-300 ${isOpen
                                ? "text-primary"
                                : "text-muted-foreground/40 group-hover:text-muted-foreground"
                            }`}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question & Answer */}
                    <div className="flex-1 min-w-0">
                        <h3
                            className={`text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 ${isOpen
                                    ? "text-foreground"
                                    : "text-foreground/80 group-hover:text-foreground"
                                }`}
                        >
                            {question}
                        </h3>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                                        opacity: { duration: 0.25, delay: 0.1 },
                                    }}
                                    className="overflow-hidden"
                                >
                                    <p className="pt-4 pb-1 text-muted-foreground leading-relaxed font-light max-w-2xl text-[15px]">
                                        {answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Toggle Icon */}
                    <div
                        className={`mt-1 p-2 rounded-full border transition-all duration-300 flex-shrink-0 ${isOpen
                                ? "bg-primary text-primary-foreground border-primary rotate-0"
                                : "bg-transparent text-muted-foreground border-neutral-300 dark:border-neutral-700 group-hover:border-primary/50 group-hover:text-primary"
                            }`}
                    >
                        {isOpen ? (
                            <Minus className="w-4 h-4" />
                        ) : (
                            <Plus className="w-4 h-4" />
                        )}
                    </div>
                </div>
            </button>
        </motion.div>
    );
}

export function FAQ() {
    const t = useTranslations("FAQ");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Subtle background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider mb-6"
                    >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>{t("tag")}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
                    >
                        {t("title")}{" "}
                        <span className="text-primary">{t("highlight")}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-muted-foreground text-lg max-w-xl mx-auto font-light leading-relaxed"
                    >
                        {t("desc")}
                    </motion.p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-0">
                    {faqKeys.map((key, index) => (
                        <FAQItem
                            key={key}
                            index={index}
                            question={t(`items.${key}.q`)}
                            answer={t(`items.${key}.a`)}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted-foreground text-sm">
                        {t("moreQuestions")}{" "}
                        <a
                            href="https://wa.me/959769808227"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:underline underline-offset-4 transition-colors"
                        >
                            {t("contactUs")}
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

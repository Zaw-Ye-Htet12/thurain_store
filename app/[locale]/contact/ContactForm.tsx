"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
    const t = useTranslations('Contact');

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            setFormData({ name: "", phone: "", email: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (err: any) {
            setStatus("error");
            setErrorMessage(err.message || "Something went wrong.");

            // Reset error after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neutral-50 dark:bg-neutral-900/50 p-8 md:p-12 rounded-[2rem] border border-neutral-200 dark:border-neutral-800"
        >
            <h2 className="text-2xl font-bold mb-8">{t('form.title')}</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground group-focus-within:text-foreground transition-colors">
                            {t('form.name')}
                        </label>
                        <div className="relative">
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status === "loading"}
                                className="bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/30 text-lg h-auto"
                                placeholder={t('form.placeholders.name')}
                            />
                        </div>
                    </div>
                    <div className="space-y-2 group">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground group-focus-within:text-foreground transition-colors">
                            {t('form.phone')}
                        </label>
                        <div className="relative">
                            <Input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                disabled={status === "loading"}
                                className="bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/30 text-lg h-auto"
                                placeholder={t('form.placeholders.phone')}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground group-focus-within:text-foreground transition-colors">
                        {t('form.email')}
                    </label>
                    <div className="relative">
                        <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={status === "loading"}
                            className="bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/30 text-lg h-auto"
                            placeholder={t('form.placeholders.email')}
                        />
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground group-focus-within:text-foreground transition-colors">
                        {t('form.message')}
                    </label>
                    <div className="relative">
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={status === "loading"}
                            className="bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/30 text-lg min-h-[120px] resize-none shadow-none"
                            placeholder={t('form.placeholders.message')}
                        />
                    </div>
                </div>

                {/* Status Messages */}
                <AnimatePresence mode="wait">
                    {status === "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800"
                        >
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                                {t('form.success')}
                            </p>
                        </motion.div>
                    )}

                    {status === "error" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800"
                        >
                            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                            <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                                {errorMessage || t('form.error')}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="pt-4">
                    <Button
                        type="submit"
                        size="lg"
                        disabled={status === "loading"}
                        className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full h-14 text-lg group disabled:opacity-70"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                <span>{t('form.sending')}</span>
                            </>
                        ) : (
                            <>
                                <span className="mr-2">{t('form.submit')}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                        {t('form.reply')}
                    </p>
                </div>
            </form>
        </motion.div>
    );
}

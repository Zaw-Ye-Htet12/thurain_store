"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Hammer } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const t = useTranslations("Navigation");
    const theme = useTheme();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        theme.setTheme(theme.theme === "dark" ? "light" : "dark");
    };

    const switchLocale = (newLocale: string) => {
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    const navLinks = [
        { href: `/${locale}`, label: t("home") },
        { href: `/${locale}/products`, label: t("products") },
        { href: `/${locale}/about`, label: t("about") },
        { href: `/${locale}/contact`, label: t("contact") },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm"
                : "py-6 bg-transparent border-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href={`/${locale}`}>
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-muted/50 rounded-full"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="flex bg-muted/50 p-1 rounded-full border border-border/50">
                        <Button
                            variant={locale === 'en' ? 'secondary' : 'ghost'}
                            size="sm"
                            className="h-7 px-3 rounded-full text-xs font-mono"
                            onClick={() => switchLocale('en')}
                        >
                            EN
                        </Button>
                        <Button
                            variant={locale === 'mm' ? 'secondary' : 'ghost'}
                            size="sm"
                            className="h-7 px-3 rounded-full text-xs font-mono"
                            onClick={() => switchLocale('mm')}
                        >
                            MM
                        </Button>
                    </div>

                    <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
                    >
                        <div className="container px-4 py-8 flex flex-col gap-6">
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="flex items-center justify-between pt-6 border-t border-border/50">
                                <div className="flex bg-muted/50 p-1 rounded-full border border-border/50">
                                    <Button
                                        variant={locale === 'en' ? 'secondary' : 'ghost'}
                                        size="sm"
                                        className="h-8 px-4 rounded-full text-xs font-mono"
                                        onClick={() => { switchLocale('en'); setMobileMenuOpen(false); }}
                                    >
                                        EN
                                    </Button>
                                    <Button
                                        variant={locale === 'mm' ? 'secondary' : 'ghost'}
                                        size="sm"
                                        className="h-8 px-4 rounded-full text-xs font-mono"
                                        onClick={() => { switchLocale('mm'); setMobileMenuOpen(false); }}
                                    >
                                        MM
                                    </Button>
                                </div>

                                <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

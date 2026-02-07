"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Moon, Sun, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
    const t = useTranslations("Navigation");
    const theme = useTheme();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleTheme = () => {
        theme.setTheme(theme.theme === "dark" ? "light" : "dark");
    };

    const switchLocale = (newLocale: string) => {
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between mx-auto px-4">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <ShoppingBag className="h-6 w-6" />
                    <span>ThuRain</span>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href={`/${locale}`} className="transition-colors hover:text-foreground/80 text-foreground/60">{t("home")}</Link>
                    <Link href={`/${locale}/products`} className="transition-colors hover:text-foreground/80 text-foreground/60">{t("products")}</Link>
                    <Link href={`/${locale}/about`} className="transition-colors hover:text-foreground/80 text-foreground/60">{t("about")}</Link>
                    <Link href={`/${locale}/contact`} className="transition-colors hover:text-foreground/80 text-foreground/60">{t("contact")}</Link>
                </nav>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => switchLocale(locale === 'en' ? 'mm' : 'en')}>
                        {locale === 'en' ? 'MM' : 'EN'}
                    </Button>

                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}

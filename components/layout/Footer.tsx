"use client";

import { Mail } from "lucide-react";

import { Logo } from "@/components/ui/Logo";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <Logo showText={false} className="opacity-80 grayscale hover:grayscale-0 transition-all" />
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        &copy; 2026 ThuRain Store. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a href="mailto:thurainstoreofficial@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="h-4 w-4" />
                        thurainstoreofficial@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
}

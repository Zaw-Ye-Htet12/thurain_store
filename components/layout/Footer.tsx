"use client";

import { Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto px-4">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by ThuRain Store. The source code is available on <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.
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

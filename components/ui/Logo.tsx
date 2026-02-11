import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    iconClassName?: string;
    textClassName?: string;
    showText?: boolean;
}

export function Logo({ className, iconClassName, textClassName, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-2 group select-none", className)}>
            <div className={cn("relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105", iconClassName)}>
                {/* Simple Minimalist Logo: A clean geometric 'T' foundation */}
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                >
                    {/* Background Shape - Solid but soft rounded square */}
                    <rect
                        width="40"
                        height="40"
                        rx="12"
                        className="fill-primary"
                    />

                    {/* The Letter 'T' - Clean, bold, negative space */}
                    <path
                        d="M12 12 H28 M20 12 V28"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary-foreground"
                    />
                </svg>
            </div>

            {showText && (
                <div className={cn("flex flex-col justify-center", textClassName)}>
                    <span className="font-display font-bold text-xl tracking-tight leading-none text-foreground">
                        ThuRain
                    </span>
                    <p className="text-muted-foreground font-myanmar text-sm">Store</p>
                </div>
            )}
        </div>
    );
}

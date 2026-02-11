"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: "start" | "end" | "center";
    bg?: boolean;
    className?: string;
    parentClassName?: string;
    animateOn?: "view" | "hover";
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 20,
    sequential = false,
    revealDirection = "start",
    bg = false,
    className = "",
    parentClassName = "",
    animateOn = "hover",
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const [isScrambling, setIsScrambling] = useState(false);
    const revealedIndices = useRef(new Set<number>());
    const iterationCount = useRef(0);
    const containerRef = useRef<HTMLElement>(null); // Use a generic HTMLElement ref

    // Check if element is in view (if animateOn is 'view')
    const isInView = useInView(containerRef as React.RefObject<Element>, { once: true, margin: "-10%" });

    useEffect(() => {
        let interval: any;

        if (animateOn === "view" && isInView && !isScrambling) {
            scramble();
        }

        return () => {
            if (interval) clearInterval(interval);
        }
    }, [isInView, animateOn]);

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);
        iterationCount.current = 0;
        revealedIndices.current.clear();

        const interval = setInterval(() => {
            setDisplayText((prevText) => {
                let newText = "";

                if (sequential) {
                    // logic for sequential reveal could be added here if needed
                    // simpler random scramble logic for now
                }

                newText = text
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (revealedIndices.current.has(index) || iterationCount.current >= maxIterations) {
                            return char;
                        }
                        // Random reveal chance based on iterations
                        if (Math.random() > 0.9) {
                            revealedIndices.current.add(index);
                            return char;
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iterationCount.current >= maxIterations) {
                    setIsScrambling(false);
                    clearInterval(interval);
                }

                iterationCount.current += 1; // Increment for loop
                return newText;
            });
        }, speed);
    };

    const handleMouseEnter = () => {
        if (animateOn === "hover") {
            setIsHovering(true);
            scramble();
        }
    };

    const handleMouseLeave = () => {
        if (animateOn === "hover") setIsHovering(false);
    };

    return (
        <span
            ref={containerRef}
            className={`inline-block whitespace-pre-wrap relative overflow-hidden ${parentClassName}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={className}>{displayText}</span>
        </span>
    );
}

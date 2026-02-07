"use client";

import { motion } from "framer-motion";

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    className
}: {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    align?: "left" | "center" | "right";
}

export function SectionHeading({ children, className, align = "left", ...props }: SectionHeadingProps) {
    return (
        <div className={cn("relative mb-8", align === "center" && "text-center", align === "right" && "text-right")}>
            <h2
                className={cn(
                    "text-3xl md:text-5xl font-serif font-bold tracking-tight text-ink relative inline-block z-10",
                    className
                )}
                {...props}
            >
                {children}
                {/* Underline Style */}
                <span className="absolute left-0 bottom-1 w-full h-3 bg-accent/20 dark:bg-accent/30 -z-10 -rotate-1 skew-x-12 transform scale-x-105"></span>
            </h2>
        </div>
    );
}

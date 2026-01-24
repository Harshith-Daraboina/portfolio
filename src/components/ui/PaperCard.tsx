import React from "react";
import { cn } from "@/lib/utils";

interface PaperCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function PaperCard({ children, className, ...props }: PaperCardProps) {
    return (
        <div
            className={cn(
                "bg-paper shadow-md border border-gray-300/50 p-6 relative overflow-hidden",
                "before:absolute before:inset-0 before:bg-paper-texture before:opacity-10 before:pointer-events-none",
                className
            )}
            {...props}
        >
            {/* Subtle Grainy Overlay */}
            {children}
        </div>
    );
}

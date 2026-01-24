import React from "react";
import { cn } from "@/lib/utils";

interface StampFrameProps {
    children: React.ReactNode;
    className?: string;
    label?: string;
    year?: string;
}

export function StampFrame({ children, className, label, year }: StampFrameProps) {
    return (
        <div className={cn("inline-block p-4 bg-[#f3efe6]", className)}>
            {/* The outer container mimics the paper background */}
            <div
                className="relative bg-white p-2 shadow-sm overflow-hidden"
                style={{}}
            >
                <div className="relative aspect-square w-full overflow-hidden bg-stone-200">
                    {children}
                </div>
            </div>

            {(label || year) && (
                <div className="flex justify-between items-baseline mt-2 px-1 font-mono text-[10px] uppercase tracking-widest text-[#555]">
                    <span>{label}</span>
                    <span>{year}</span>
                </div>
            )}
        </div>
    );
}

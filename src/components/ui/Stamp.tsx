import React from "react";
import { cn } from "@/lib/utils";

interface StampProps {
    className?: string;
    text?: string;
    date?: string;
}

export function Stamp({ className, text = "APPROVED", date }: StampProps) {
    return (
        <div
            className={cn(
                "border-[3px] border-accent/80 text-accent font-bold uppercase p-2 inline-block -rotate-12 opacity-80 mask-image:url('/paper-texture.png')",
                "rounded-sm text-center min-w-[100px]",
                className
            )}
        >
            <div className="text-xs tracking-[0.2em] border-b border-accent/60 pb-1 mb-1">{text}</div>
            {date && <div className="text-[10px] font-sans text-accent/80">{date}</div>}
        </div>
    );
}

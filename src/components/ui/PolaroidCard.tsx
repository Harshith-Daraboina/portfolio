import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PolaroidCardProps {
    title: string;
    category: string;
    image: string;
    year?: string;
    rotation?: string; // e.g., "rotate-2", "-rotate-1"
    className?: string;
}

export function PolaroidCard({
    title,
    category,
    image,
    year = "2024",
    rotation = "rotate-0",
    className,
}: PolaroidCardProps) {
    return (
        <div
            className={cn(
                "bg-white p-3 pb-8 shadow-md transform transition-transform duration-300 hover:scale-105 hover:z-10 hover:shadow-xl w-full max-w-[280px] mx-auto",
                rotation,
                className
            )}
        >
            <div className="relative aspect-[4/3] w-full mb-3 bg-gray-100 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-all duration-500"
                />
                {/* Inner shadow/vignette for realism */}
                <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none"></div>
            </div>

            <div className="px-1">
                <h3 className="font-serif text-lg font-bold leading-tight text-black mb-1">
                    {title}
                </h3>
                <div className="flex justify-between items-baseline border-t border-dashed border-gray-300 pt-2 mt-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
                        {category}
                    </span>
                    <span className="font-mono text-[9px] text-[#888]">{year}</span>
                </div>
            </div>
        </div>
    );
}

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Stamp } from "@/components/ui/Stamp";

interface ProjectFeatureCardProps {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    image: string;
    year?: string;
    featured?: boolean;
    link?: string;
}

export function ProjectFeatureCard({
    title,
    subtitle,
    description,
    tags,
    image,
    year = "2026",
    featured = true,
    link,
}: ProjectFeatureCardProps) {
    const Content = () => (
        <div className="bg-[#f3efe6] dark:bg-[#1e1e1e] p-6 md:p-8 border border-stone-200 dark:border-stone-700 overflow-hidden relative group hover:shadow-lg transition-shadow duration-300 h-full">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-paper-texture opacity-20 pointer-events-none mix-blend-multiply"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10 h-full">

                {/* Left: Main Image */}
                <div className="relative w-full">
                    {/* Image Container */}
                    <div className="relative aspect-[3/2] w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out border border-[#222]">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover contrast-110 brightness-95 group-hover:brightness-100 transition-all"
                        />
                    </div>

                    {/* Stamp Overlay */}
                    <div className="absolute -bottom-3 -left-3 z-20 scale-75 origin-bottom-left">
                        <Stamp text="CASE STUDY" date={year} className="bg-[#f3efe6] border-red-700 text-red-700 -rotate-6 opacity-90 shadow-sm" />
                    </div>
                </div>

                {/* Right: Editorial Content */}
                <div className="flex flex-col h-full justify-center">
                    <div className="flex justify-between items-baseline border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">
                        {featured && (
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#555] dark:text-[#888] font-bold">
                                Featured
                            </span>
                        )}
                        <span className="font-mono text-[9px] text-[#888]">{year}</span>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-2">
                        <span className="text-[#d44b3e] dark:text-[#ff4d4d] font-mono text-[10px] font-bold uppercase tracking-widest">
                            {subtitle}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-[#111] dark:text-[#f5f5f5] mb-3 uppercase tracking-tight group-hover:text-accent transition-colors">
                        {title}
                    </h2>

                    {/* Description */}
                    <div className="font-serif text-sm leading-relaxed text-[#444] dark:text-[#ccc] mb-6 text-justify">
                        <p>
                            {description}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-auto pt-4 border-t border-dashed border-[#ccc] dark:border-gray-700 font-mono text-[9px] uppercase tracking-widest flex flex-wrap gap-3 text-[#666] dark:text-[#999]">
                        {tags.map((tag, i) => (
                            <span key={i} className="flex items-center gap-1.5 group-hover:text-[#d44b3e] dark:group-hover:text-[#ff4d4d] transition-colors">
                                <span className="w-1 h-1 bg-[#444] dark:bg-[#777] rounded-full group-hover:bg-[#d44b3e] dark:group-hover:bg-[#ff4d4d]"></span>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );

    if (link) {
        return (
            <Link href={link} target="_blank" className="block h-full no-underline">
                <Content />
            </Link>
        );
    }

    return <Content />;
}

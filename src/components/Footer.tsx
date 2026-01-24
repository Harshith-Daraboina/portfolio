import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Linkedin, Instagram, Dribbble, Twitter, Github } from "lucide-react";
import { Stamp } from "@/components/ui/Stamp";

export function Footer() {
    return (
        <footer className="w-full bg-[#f3efe6] dark:bg-[#0b0b0b] text-[#222222] dark:text-[#f5f5f5] pt-12 pb-8 px-4 md:px-8 mt-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                {/* Top Border Decoration - Matching Bottom */}
                <div className="w-full h-[2px] bg-[#222222] dark:bg-[#444] mb-1"></div>
                <div className="w-full h-px bg-[#222222] dark:bg-[#444] mb-12"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Left Column: Editor's Last Word */}
                    <div className="lg:col-span-4 space-y-6">
                        <h3 className="font-mono text-sm tracking-widest uppercase font-bold text-[#888888] mb-4">
                            Editor&apos;s Last Word
                        </h3>
                        <div className="font-serif text-base leading-relaxed text-justify space-y-4">
                            <p>
                                This little newspaper of mine was stitched together in the third person because nothing says &quot;serious professional&quot; like narrating your own life as if you&apos;re a charming mystery novel. Yes, it&apos;s wordy.
                            </p>
                            <p>
                                Outrageously wordy, but hear me out I know hiring managers often have just minutes (sometimes seconds) to glance through portfolios and I wanted to make every one of those moments count, not by shrinking my voice, but by inviting you into it. For the rare kind soul who does pause to actually read: consider this a textual buffet, seasoned generously with design dilemmas, human stories, and an alarming amount of masala tea. If you&apos;ve made it this far, your patience deserves a medal or at least a tea on me.
                            </p>
                        </div>

                        <div className="mt-8">
                            {/* Signature */}
                            <div className="relative w-40 h-20 transform -rotate-2 mt-4">
                                <Image
                                    src="/signature.png"
                                    alt="Harshith Signature"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="font-mono text-xs uppercase mt-2 tracking-widest text-[#888888]">
                                [HARSHITH D]
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Photo */}
                    <div className="lg:col-span-4 flex justify-center items-start pt-4 relative">
                        <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500 w-full max-w-sm">
                            {/* Torn Paper Frame Effect */}
                            <div className="bg-[#fcfbf9] p-4 shadow-xl" style={{
                                clipPath: "polygon(2% 2%, 18% 0%, 35% 3%, 52% 0%, 68% 2%, 85% 0%, 100% 2%, 99% 18%, 100% 38%, 98% 55%, 100% 72%, 99% 90%, 82% 100%, 65% 98%, 48% 100%, 32% 98%, 15% 100%, 0% 98%, 1% 82%, 0% 65%, 2% 48%, 0% 30%, 1% 15%)"
                            }}>
                                <div className="relative aspect-[3/4] overflow-hidden filter sepia-[0.3]">
                                    <Image
                                        src="/footer.png"
                                        alt="Editor Portrait"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Stamp positioned over image */}
                        <div className="absolute -bottom-6 -right-6 z-10 hidden md:block">
                            <Stamp text="SCHEDULE CALL" date="1:1 CALL" className="bg-blue-800 text-white border-none rotate-12" />
                        </div>
                    </div>

                    {/* Right Column: Contact & Info */}
                    <div className="lg:col-span-4 space-y-8 pl-0 lg:pl-8">
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                                Enjoyed this issue?
                            </h2>
                            <p className="font-mono text-sm text-[#444] mb-8">
                                Send in your letters, gigs or gentle compliments to...
                            </p>
                        </div>

                        <div className="space-y-6 font-mono text-sm">
                            <div className="grid grid-cols-[100px_1fr] items-baseline gap-2 group">
                                <span className="text-[#888888] uppercase tracking-widest text-xs font-bold">Write To:</span>
                                <a href="mailto:daraboinaharshith2005@gmail.com" className="uppercase border-b border-[#222] pb-1 hover:text-accent hover:border-accent transition-colors truncate">
                                    daraboinaharshith2005@gmail.com
                                </a>
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-baseline gap-2">
                                <span className="text-[#888888] uppercase tracking-widest text-xs font-bold">Based In:</span>
                                <span className="uppercase border-b border-dashed border-[#888888] pb-1">
                                    Dharwad , India
                                </span>
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-baseline gap-2">
                                <span className="text-[#888888] uppercase tracking-widest text-xs font-bold">Hire For:</span>
                                <span className="uppercase font-bold tracking-widest">
                                    FULL STACK DEV
                                </span>
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-baseline gap-2">
                                <span className="text-[#888888] uppercase tracking-widest text-xs font-bold">Notice:</span>
                                <span className="uppercase text-xs leading-relaxed">
                                    RUMOR HAS IT THE EDITOR IS HUNTING FOR FULL-TIME STORIES WHERE THE WHY MATTERS, AND STORYTELLING TAKES CENTER STAGE.
                                </span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-300">
                            <p className="font-mono text-xs uppercase tracking-widest mb-4">
                                CARE TO MAKE HEADLINES TOGETHER? SEND A DISPATCH
                            </p>

                            <div className="flex gap-6 items-center">
                                <a href="#" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors">
                                    <Linkedin size={16} /> <span className="hidden sm:inline">LinkedIn</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors">
                                    <Instagram size={16} /> <span className="hidden sm:inline">Instagram</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors">
                                    <Github size={16} /> <span className="hidden sm:inline">Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer Border */}
                <div className="mt-16 w-full h-[2px] bg-[#222222] dark:bg-[#444] mb-1"></div>
                <div className="w-full h-px bg-[#222222] dark:bg-[#444]"></div>

                <div className="flex justify-between items-center mt-2 font-mono text-[10px] uppercase tracking-widest text-[#888888]">
                    <span>© 2026 Harshith Daraboina</span>
                    <span>All Rights Reserved</span>
                    <span>Vol. 1</span>
                </div>
            </div>
        </footer>
    );
}

import React from "react";
import Image from "next/image";
import { StampFrame } from "@/components/ui/StampFrame";

export function AnimeSection() {
    return (
        <section className="w-full bg-[#e8e4db] dark:bg-[#111] text-[#222222] dark:text-[#e6dfd5] py-20 px-4 md:px-8 border-t border-[#ccc] dark:border-[#333]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Left Content Area: 9 cols */}
                <div className="lg:col-span-9">
                    <div className="mb-12">
                        <h2 className="font-serif text-4xl font-bold mb-4 text-[#d44b3e] dark:text-[#ff4d4d]">
                            Through Lens: <span className="text-[#222] dark:text-[#f5f5f5] font-normal text-3xl">A visual diary of stories, strength and spirit</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <p className="font-mono text-xs leading-relaxed text-[#555] dark:text-[#ccc] max-w-md">
                                From the grand line to soul society, exploring narratives that define resilience.
                                These aren't just shows; they are distinct visual languages that shape my perspective on storytelling.
                            </p>
                        </div>
                    </div>

                    {/* Stamp Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <StampFrame label="PIRATE KING" year="1999" className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                            <div className="w-full h-full relative">
                                <Image src="/anime/onepiece.png" alt="One Piece" fill className="object-cover" />
                            </div>
                        </StampFrame>

                        <StampFrame label="SOUL REAPER" year="2004" className="transform rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="w-full h-full relative">
                                <Image src="/anime/bleach.png" alt="Bleach" fill className="object-cover" />
                            </div>
                        </StampFrame>

                        <StampFrame label="STRUGGLER" year="1997" className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                            <div className="w-full h-full relative">
                                <Image src="/anime/berserk.png" alt="Berserk" fill className="object-cover" />
                            </div>
                        </StampFrame>
                    </div>
                </div>

                {/* Right Sidebar: Film Strip - 3 cols */}
                <div className="lg:col-span-3 flex flex-col justify-center relative h-[600px] overflow-hidden">
                    {/* Film Strip Container */}
                    <div className="bg-[#222] p-4 rounded-sm shadow-xl relative h-full flex flex-col">
                        {/* Sprocket Holes Left */}
                        <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col gap-4 py-2 bg-[#222] z-20">
                            {Array.from({ length: 30 }).map((_, i) => (
                                <div key={i} className="w-3 h-4 bg-[#e8e4db] mx-auto rounded-sm opacity-80"></div>
                            ))}
                        </div>

                        {/* Sprocket Holes Right */}
                        <div className="absolute right-0 top-0 bottom-0 w-6 flex flex-col gap-4 py-2 bg-[#222] z-20">
                            {Array.from({ length: 30 }).map((_, i) => (
                                <div key={i} className="w-3 h-4 bg-[#e8e4db] mx-auto rounded-sm opacity-80"></div>
                            ))}
                        </div>

                        {/* Film Content - Scrolling Wrapper */}
                        <div className="flex-1 overflow-hidden relative">
                            <div className="space-y-4 px-4 animate-scroll-vertical absolute top-0 left-0 w-full">
                                {/* Original Set */}
                                <div className="aspect-video bg-[#e8e4db] p-1 rotate-1 relative overflow-hidden group mb-4">
                                    <Image src="/anime/sololeveling.png" alt="Solo Leveling" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] p-1 uppercase tracking-widest text-center">Solo Leveling</div>
                                </div>
                                <div className="aspect-video bg-[#e8e4db] p-1 -rotate-1 relative overflow-hidden group mb-4">
                                    <Image src="/anime/fma.png" alt="FMA" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] p-1 uppercase tracking-widest text-center">FMA: Brotherhood</div>
                                </div>
                                <div className="aspect-video bg-[#e8e4db] p-1 rotate-1 relative overflow-hidden group mb-4">
                                    <Image src="/anime/deathnote.png" alt="Death Note" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] p-1 uppercase tracking-widest text-center">Death Note</div>
                                </div>
                                <div className="aspect-video bg-[#e8e4db] p-1 -rotate-1 relative overflow-hidden group mb-4">
                                    <Image src="/anime/aot.png" alt="AOT" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] p-1 uppercase tracking-widest text-center">Attack on Titan</div>
                                </div>

                                {/* Duplicate Set for Seamless Loop */}
                                <div className="aspect-video bg-[#e8e4db] p-1 rotate-1 relative overflow-hidden group mb-4">
                                    <Image src="/anime/sololeveling.png" alt="Solo Leveling" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] p-1 uppercase tracking-widest text-center">Solo Leveling</div>
                                </div>
                                <div className="aspect-video bg-[#e8e4db] p-1 -rotate-1 relative overflow-hidden group mb-4">
                                    <Image src="/anime/fma.png" alt="FMA" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] p-1 uppercase tracking-widest text-center">FMA: Brotherhood</div>
                                </div>
                                <div className="aspect-video bg-[#e8e4db] p-1 rotate-1 relative overflow-hidden group mb-4">
                                    <Image src="/anime/deathnote.png" alt="Death Note" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] p-1 uppercase tracking-widest text-center">Death Note</div>
                                </div>
                                <div className="aspect-video bg-[#e8e4db] p-1 -rotate-1 relative overflow-hidden group mb-4">
                                    <Image src="/anime/aot.png" alt="AOT" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] p-1 uppercase tracking-widest text-center">Attack on Titan</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

import { PolaroidCard } from "@/components/ui/PolaroidCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Footer } from "@/components/Footer";
import { IssueNumber } from "@/components/ui/IssueNumber";

export default function ArchivePage() {
    return (
        <main className="min-h-screen bg-paper font-sans text-ink selection:bg-accent/30 selection:text-ink pb-20">
            {/* Navigation / Header */}
            <header className="mb-12">
                <div className="max-w-6xl mx-auto pt-6 pb-2 px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tighter mb-4">
                        HARSHITH DE FOLIO
                    </h1>
                </div>

                {/* Sub-header Bar (Sticky) */}
                <div className="sticky top-0 z-50 transition-shadow">
                    <div className="border-y border-gray-300 py-3 bg-paper/95 backdrop-blur-sm">
                        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-xs font-mono tracking-widest uppercase text-muted">
                            <div className="flex gap-8">
                                <IssueNumber />
                                <span className="hidden sm:inline-block">DATE: 25/01/2026</span>
                            </div>
                            <nav className="flex gap-6 font-medium">
                                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                                <Link href="/#about" className="hover:text-accent transition-colors">About</Link>
                                <Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link>
                                <Link href="/archive" className="text-accent underline decoration-wavy decoration-1 underline-offset-4 pointer-events-none">Archive</Link>
                                <div className="border-l border-gray-300 dark:border-gray-700 pl-6 ml-2">
                                    <ThemeToggle />
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 mt-12 mb-32">
                <div className="grid md:grid-cols-12 gap-12 items-start">

                    {/* Left: Categorized Grid (Images) - Now on Left */}
                    <div className="md:col-span-12 lg:col-span-9 space-y-16">

                        {/* Development Section */}
                        <section>
                            <h2 className="font-mono text-xl font-bold uppercase tracking-widest mb-8 border-b border-dashed border-[#ccc] pb-2 text-[#222] dark:text-[#eee]">
                                Development
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <PolaroidCard
                                    title="Architecture Blueprints"
                                    category="System Design"
                                    image="/archive/dev1.png"
                                    year="2024"
                                    rotation="-rotate-2"
                                />
                                <PolaroidCard
                                    title="UI experiments"
                                    category="Frontend"
                                    image="/archive/dev2.png"
                                    year="2024"
                                    rotation="rotate-1"
                                />
                                <PolaroidCard
                                    title="System Architecture"
                                    category="Backend"
                                    image="/archive/dev3.png"
                                    year="2025"
                                    rotation="-rotate-2"
                                />
                                {/* Placeholder for 3rd col to show grid effect if needed, or just leave as is since we only have 2 images per cat. 
                                    User asked for 3 col grid, implying we might need more items or just the capability. 
                                    I will ensure the grid supports it. */}
                            </div>
                        </section>

                        {/* ML Section */}
                        <section>
                            <h2 className="font-mono text-xl font-bold uppercase tracking-widest mb-8 border-b border-dashed border-[#ccc] pb-2 text-[#222] dark:text-[#eee]">
                                Machine Learning
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pl-4 md:pl-0">
                                <PolaroidCard
                                    title="Neural Networks"
                                    category="Deep Learning"
                                    image="/archive/ml1.png"
                                    year="2025"
                                    rotation="rotate-2"
                                />
                                <PolaroidCard
                                    title="Pattern Recognition"
                                    category="AI Research"
                                    image="/archive/ml2.png"
                                    year="2025"
                                    rotation="-rotate-1"
                                />
                                <PolaroidCard
                                    title="Generative AI"
                                    category="LLMs"
                                    image="/archive/ml3.png"
                                    year="2025"
                                    rotation="rotate-2"
                                />
                            </div>
                        </section>

                        {/* DevOps Section */}
                        <section>
                            <h2 className="font-mono text-xl font-bold uppercase tracking-widest mb-8 border-b border-dashed border-[#ccc] pb-2 text-[#222] dark:text-[#eee]">
                                DevOps
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <PolaroidCard
                                    title="Cloud Infrastructure"
                                    category="AWS / Azure"
                                    image="/archive/devops1.png"
                                    year="2023"
                                    rotation="-rotate-2"
                                />
                                <PolaroidCard
                                    title="Container Orchestration"
                                    category="Docker / K8s"
                                    image="/archive/devops2.png"
                                    year="2024"
                                    rotation="rotate-3"
                                />
                                <PolaroidCard
                                    title="CI/CD Pipelines"
                                    category="Automation"
                                    image="/archive/devops3.png"
                                    year="2024"
                                    rotation="-rotate-1"
                                />
                            </div>
                        </section>

                    </div>

                    {/* Right: Introduction (Text) - Now on Right */}
                    <div className="md:col-span-12 lg:col-span-3 lg:sticky lg:top-32">
                        <div className="mb-6 relative">
                            <h3
                                className="font-serif text-3xl font-bold relative z-10 inline-block"
                                style={{ color: 'var(--foreground)' }}
                            >
                                A Living, Breathing <span className="italic relative px-1">
                                    Mess
                                    <span className="absolute inset-0 bg-accent/20 -rotate-2 -z-10 scale-110 rounded-sm"></span>
                                </span> of a Mind at Work
                            </h3>
                            <div className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent/40 rotate-1 rounded-full"></div>
                        </div>
                        <div
                            className="font-serif text-sm leading-relaxed text-justify space-y-4 font-medium"
                            style={{ color: 'var(--foreground)' }}
                        >
                            <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                                Every portfolio needs a drawer where you put your half cooked work, messy sketches, ideas that didn't get ship and work that cant be put into a bucket. Welcome to mine.
                            </p>
                            <p>
                                This archive was never meant to be a tidy "Projects" page instead, it's a living, breathing newsroom of my creative life - home to structured case studies, scrappy concepts, photographs both personal and professional, design dilemmas, side quests, and stories I haven't fully figured out yet.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}

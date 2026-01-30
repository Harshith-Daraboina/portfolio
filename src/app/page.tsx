import { PaperCard } from "@/components/ui/PaperCard";
import { ProjectFeatureCard } from "@/components/ui/ProjectFeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stamp } from "@/components/ui/Stamp";
import Link from "next/link";
import Image from "next/image";
import { Download, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { GithubStats } from "@/components/ui/GithubStats";
import { IssueNumber } from "@/components/ui/IssueNumber";
import { Footer } from "@/components/Footer";
import { AnimeSection } from "@/components/AnimeSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper font-sans text-ink selection:bg-accent/30 selection:text-ink pb-20">
      {/* Navigation / Header */}
      <header className="mb-12 w-full !bg-black dark:!bg-transparent !text-white dark:!text-inherit transition-colors duration-300">
        <div className="max-w-6xl mx-auto py-6 px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter">
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
              <nav className="flex gap-3 sm:gap-6 font-medium text-[10px] sm:text-xs items-center">
                <Link href="/archive" className="hover:text-accent transition-colors">Archive</Link>
                <Link href="#about" className="hover:text-accent transition-colors">About</Link>
                <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
                <div className="border-l border-gray-300 dark:border-gray-700 pl-3 sm:pl-6 ml-1 sm:ml-2">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 mb-32">

        {/* Full Width Hero Section */}
        <section id="about" className="relative pt-8 pb-16 border-b border-gray-300 dark:border-gray-700 mb-12">
          <div className="absolute top-0 right-0 hidden md:block">
            <Stamp text="VERIFIED" date="24/01/2026" className="transform rotate-6" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8">
            From Empathy to <span className="bg-accent/10 px-2 italic text-accent">Interface</span>: <br />
            A Developer's Story.
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-base sm:text-lg leading-relaxed font-serif text-ink first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left mb-8">
                Harshith Daraboina is a Computer Science student at IIIT Dharwad.
                Leading open-source initiatives at the Microsoft Students Club and building AI-powered platforms, he blends engineering precision with user-centric design.
              </div>
              <div className="flex gap-4 mb-8">
                <a href="/Resume_Harshith_Daraboina.pdf" target="_blank" className="bg-ink text-paper py-3 px-6 font-bold text-sm tracking-widest uppercase hover:bg-accent transition-colors flex items-center justify-center gap-2 shadow-sm">
                  <Download size={16} /> Resume
                </a>
                <a href="mailto:daraboinaharshith2005@gmail.com" className="border border-ink py-3 px-6 font-bold text-sm tracking-widest uppercase hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-sm">
                  <Mail size={16} /> Contact
                </a>
              </div>

              {/* GitHub Stats Integration */}
              <div className="w-full hidden md:block">
                <GithubStats />
              </div>
            </div>

            <div className="relative max-w-sm mx-auto md:ml-auto md:mr-0 transform rotate-1 transition-transform duration-700 ease-in-out hover:rotate-0 hover:scale-[1.02]">
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-lg border-4 border-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero.png"
                  alt="Portrait of the designer"
                  className="object-cover w-full h-full opacity-95"
                />
                <div className="absolute inset-0 bg-paper-texture opacity-20 pointer-events-none mix-blend-multiply"></div>
              </div>

              {/* Stamp Overlay */}
              <div className="absolute -top-6 -left-6 z-20 transition-transform duration-500 hover:rotate-12">
                <Stamp text="DESIGNER" date="EST. 2020" className="-rotate-12 border-ink text-ink" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Projects */}
          <div className="lg:col-span-8">
            <section id="work">
              <SectionHeading>Selected Works</SectionHeading>
              <div className="space-y-12">
                {/* Attrangi */}
                <ProjectFeatureCard
                  title="Attrangi"
                  subtitle="AI Video Platform"
                  description="Built a lightweight video conferencing platform optimized for small rooms. Enabled unlimited meeting rooms with low-latency and integrated AI capabilities for smart noise suppression and automated insights."
                  tags={["Next.js", "WebRTC", "AI Insights"]}
                  image="/attrangi_meet.png"
                  year="2024"
                  link="https://meet-heyattrangi.vercel.app/"
                />

                {/* Pragya */}
                <ProjectFeatureCard
                  title="Pragya AI"
                  subtitle="Emotional Chatbot"
                  description="Developed an emotionally aware mental health chatbot using a NeuroEngine to guide conversations. Implemented facial expression logic and a RAG system using FAISS over a PDF knowledge base."
                  tags={["FastAPI", "LangChain", "Groq LLM"]}
                  image="/pragya_ai.png"
                  year="2025"
                  link="https://bot-heyattrangi.vercel.app/"
                />

                {/* Solar Power */}
                <ProjectFeatureCard
                  title="Solar AI"
                  subtitle="Power Prediction"
                  description="Built ML models using Python and scikit-learn achieving 92% prediction accuracy. Integrated real-time weather data for dynamic solar forecasting and created interactive Dashboards."
                  tags={["scikit-learn", "Python", "Plotly"]}
                  image="/solar_prediction.png"
                  year="2023"
                  link="https://github.com/Harshith-Daraboina/h4i/"
                />
              </div>
            </section>
          </div>

          {/* Right Column: Resume Details */}
          <div className="lg:col-span-4 space-y-12 border-t pt-12 lg:pt-0 lg:border-t-0 lg:border-l border-gray-300 lg:pl-12">

            {/* Technical Skills */}
            <section>
              <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-6 border-b border-gray-300 pb-2">Technical Skills</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-serif font-bold mb-1 text-base">Languages</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-mono text-xs">
                    C++, C, JavaScript, TypeScript, Python, Java
                  </p>
                </div>
                <div>
                  <h5 className="font-serif font-bold mb-1 text-base">Frontend</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-mono text-xs">
                    React.js, Next.js, React Native, Vue.js, Tailwind CSS, Material UI
                  </p>
                </div>
                <div>
                  <h5 className="font-serif font-bold mb-1 text-base">Backend & Cloud</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-mono text-xs">
                    Node.js, Express, FastAPI, PostgreSQL, MongoDB, Prisma, AWS, Docker
                  </p>
                </div>
                <div>
                  <h5 className="font-serif font-bold mb-1 text-base">Machine Learning</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-mono text-xs">
                    scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-6 border-b border-gray-300 pb-2">Experience</h4>
              <ul className="space-y-6">
                <li className="group cursor-default">
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="font-bold group-hover:text-accent transition-colors">Microsoft Students Club</div>
                  </div>
                  <div className="text-xs text-muted mb-2 uppercase tracking-wide">Lead (Open Source)</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Leading open-source initiatives and mentoring students in full-stack development.
                  </p>
                </li>
                <li className="group cursor-default">
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="font-bold group-hover:text-accent transition-colors">GDSC IIIT Dharwad</div>
                  </div>
                  <div className="text-xs text-muted mb-2 uppercase tracking-wide">Web Developer</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Developed web apps at GDSC. Built responsive UI components improving engagement.
                  </p>
                </li>
                <li className="group cursor-default">
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="font-bold group-hover:text-accent transition-colors">Career Guidance Cell</div>
                  </div>
                  <div className="text-xs text-muted mb-2 uppercase tracking-wide">Member</div>
                </li>
              </ul>
            </section>

            {/* Education */}
            <section>
              <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-6 border-b border-gray-300 pb-2">Education</h4>
              <ul className="space-y-4">
                <li className="group cursor-default">
                  <div className="font-bold group-hover:text-accent transition-colors">IIIT Dharwad</div>
                  <div className="text-xs text-muted uppercase tracking-wide mb-1">B.Tech Computer Science</div>

                </li>
              </ul>
            </section>

            <div className="mt-12 p-8 border border-dashed border-gray-400 text-center opacity-70">
              <p className="font-serif italic text-sm mb-2">"Sketching trust into every interaction."</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="https://github.com/Harshith-Daraboina" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/harshith-daraboina" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin size={18} /></a>
                <a href="https://www.instagram.com/harsh_ith_011/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram size={18} /></a>
                <a href="mailto:daraboinaharshith2005@gmail.com" className="hover:text-accent transition-colors"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimeSection />
      <Footer />
    </main>
  );
}

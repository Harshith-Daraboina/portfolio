"use client";

import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export function GithubStats() {
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch for client-only component
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="p-8 text-center text-xs font-mono uppercase text-gray-400">Loading Contributions...</div>;
    }

    return (
        <div className="relative border border-gray-300 bg-white p-6 shadow-sm group hover:shadow-md transition-all duration-300">
            {/* Editorial "Date Stamp" style label */}
            <div className="absolute top-0 left-0 bg-ink text-paper text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-10">
                Code Activity
            </div>

            {/* Actual Calendar - Customized to match "Paper" theme (monochrome/sepia) */}
            <div className="mt-4 flex justify-center w-full overflow-hidden">
                <div className="w-full [&>article]:w-full [&>article]:max-w-full [&_svg]:w-full [&_svg]:h-auto">
                    <GitHubCalendar
                        username="Harshith-Daraboina"
                        blockSize={13}
                        blockMargin={2}
                        fontSize={14}
                        theme={{
                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                        }}
                        colorScheme="light"
                    />
                </div>
            </div>

            <div className="mt-2 text-center border-t border-gray-100 pt-2">
                <span className="font-serif italic text-xs text-gray-500">
                    "Every commit tells a story."
                </span>
            </div>
        </div>
    );
}

"use client";

import React, { useEffect, useState } from "react";

export function IssueNumber() {
    const [issue, setIssue] = useState<string>("0000");

    useEffect(() => {
        // Generate a random 4-digit number
        const random = Math.floor(1000 + Math.random() * 9000);
        setIssue(random.toString());
    }, []);

    // Render a placeholder initially to match server (or just the number if we don't care about hydration mismatch with suppressHydrationWarning, but clean is better)
    // Actually, since we want "random every time", doing it on mount is best.
    // We can render a loading state or just text.
    // To avoid hydration mismatch, we render the same thing on server/client first (e.g. static or empty)
    // But wait, the user wants "random every time".
    // LocalStorage is not needed here.

    return (
        <span className="text-xs font-sans font-normal ml-2 opacity-50 tracking-widest hidden sm:inline-block">
            ISSUE #{issue}
        </span>
    );
}

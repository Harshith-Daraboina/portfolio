"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        // Restore theme on mount
        const saved = localStorage.getItem("theme") as "light" | "dark" | null;
        if (saved) {
            setTheme(saved);
            document.documentElement.setAttribute("data-theme", saved);
        }
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        const tear = document.getElementById("paper-tear");

        // Trigger tear animation
        if (tear) tear.classList.add("active");

        // Swap theme mid-rip (550ms matches the animation sweet spot)
        setTimeout(() => {
            setTheme(next);
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
        }, 550);

        // Clean up animation class
        setTimeout(() => {
            if (tear) tear.classList.remove("active");
        }, 1300);
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted hover:text-accent transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            <span className="hidden sm:inline-block">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
    );
}

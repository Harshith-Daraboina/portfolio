import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ['selector', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: "var(--accent)",
                muted: "var(--muted)",
                paper: "var(--background)", // Alias for compatibility
                ink: "var(--foreground)",   // Alias for compatibility
                "paper-light": "var(--paper-light)",
            },
            fontFamily: {
                serif: ["var(--font-playfair-display)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                'paper-texture': `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            },
        },
    },
    plugins: [],
};
export default config;

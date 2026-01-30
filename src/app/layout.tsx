import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Import fonts
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Harshith Daraboina | Portfolio",
    template: "%s | Harshith Daraboina",
  },
  description: "Computer Science Engineer & Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Harshith Daraboina", "Software Engineer", "Full Stack Developer", "React Developer", "Next.js Developer", "Portfolio", "Web Development"],
  authors: [{ name: "Harshith Daraboina" }],
  creator: "Harshith Daraboina",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshith-portfolio.vercel.app",
    title: "Harshith Daraboina | Portfolio",
    description: "Computer Science Engineer & Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Harshith Daraboina Portfolio",
    images: [
      {
        url: "/logo.png", // Fallback to logo, user should replace with dedicated OG image
        width: 1200,
        height: 630,
        alt: "Harshith Daraboina Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshith Daraboina | Portfolio",
    description: "Computer Science Engineer & Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/logo.png"], // Fallback
    creator: "@harshith_d", // Placeholder handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-background text-foreground transition-colors duration-500`}
      >
        <div id="paper-tear"></div>
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-paper-texture mix-blend-multiply"></div>
        {children}
      </body>
    </html>
  );
}

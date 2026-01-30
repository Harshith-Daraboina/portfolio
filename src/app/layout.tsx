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
  title: "Harshith Daraboina | Portfolio",
  description: "Computer Science Engineer & Full Stack Developer",
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "ZtPg76lIVz7gFpIiPlaVBUVCwGhl5qmINSOqty38OFU",
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

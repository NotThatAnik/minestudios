import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MineStudios | Minecraft Plugins, Mods & Tools",
  description: "Professional Minecraft Plugins, Mods, Texture Packs, Custom Development and Minecraft Utilities.",
  openGraph: {
    title: "MineStudios | Premium Minecraft Services",
    description: "Professional Minecraft Plugins, Mods, Texture Packs, and Developer Tools.",
    url: "https://minestudios.vercel.app",
    siteName: "MineStudios",
    images: [{ url: "/1000006154.png", width: 800, height: 600 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MineStudios | Premium Minecraft Services",
    description: "Professional Minecraft Plugins, Mods, Texture Packs, and Developer Tools.",
    images: ["/1000006154.png"],
  },
  icons: {
    icon: "/1000006154.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-background text-white antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "Marketplace", href: "#" },
    { name: "Custom Orders", href: "#" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/1000006154.png" alt="MineStudios" width={40} height={40} className="rounded-md" />
            <span className="font-bold text-xl tracking-tight text-white">MineStudios</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-muted hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://discord.gg/Kgvqc5jpBs" 
              target="_blank"
              className="bg-primary hover:bg-primary-hover text-background px-5 py-2 rounded-lg font-semibold transition-all hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]"
            >
              Join Discord
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-2 text-base font-medium text-white hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://discord.gg/Kgvqc5jpBs" 
              className="block px-3 py-2 text-base font-medium text-primary"
            >
              Discord
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

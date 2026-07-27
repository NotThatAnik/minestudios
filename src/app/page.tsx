"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Box, Palette, Zap, Shield, Wrench } from "lucide-react";

export default function Home() {
  const features = [
    { title: "Premium Plugins", desc: "Highly optimized, feature-rich plugins for any server type.", icon: <Code className="w-6 h-6 text-primary" /> },
    { title: "Custom Mods", desc: "Client and server-side mods tailored to your exact needs.", icon: <Box className="w-6 h-6 text-primary" /> },
    { title: "Texture Packs", desc: "Beautiful, custom-designed resource packs.", icon: <Palette className="w-6 h-6 text-primary" /> },
    { title: "Fast Support", desc: "Dedicated Discord ticket system for all our clients.", icon: <Zap className="w-6 h-6 text-primary" /> },
    { title: "Custom Development", desc: "Need something unique? We build it from scratch.", icon: <Wrench className="w-6 h-6 text-primary" /> },
    { title: "Secure & Stable", desc: "Production-ready code without memory leaks.", icon: <Shield className="w-6 h-6 text-primary" /> },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
        {/* Animated Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 flex flex-col items-center"
        >
          <Image src="/1000006154.png" alt="MineStudios" width={120} height={120} className="mb-6 drop-shadow-[0_0_20px_rgba(0,229,255,0.3)] rounded-2xl" />
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Welcome to <span className="text-primary">MineStudios</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10">
            Professional Minecraft Plugins, Mods, Texture Packs, Developer Tools & Custom Services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tools" className="bg-surface border border-primary/30 hover:border-primary text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Explore Tools
            </Link>
            <Link href="https://discord.gg/Kgvqc5jpBs" target="_blank" className="bg-primary hover:bg-primary-hover text-background px-8 py-3 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)]">
              Join Discord
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Why MineStudios Section */}
      <section className="py-20 bg-surface/30 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why MineStudios?</h2>
            <p className="text-muted">Professional Minecraft development studio at your service.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-surface border border-gray-800 p-6 rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="bg-background w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-gray-800">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

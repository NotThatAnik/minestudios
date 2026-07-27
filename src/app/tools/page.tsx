import Link from "next/link";
import { Activity, Calculator, User } from "lucide-react";

export default function ToolsPage() {
  const tools = [
    { title: "Server Status", desc: "Check if a Minecraft server is online, view players and MOTD.", icon: <Activity className="w-8 h-8 text-primary" />, href: "/tools/server-status" },
    { title: "Stack Calculator", desc: "Calculate stacks (64, 16) and remainder items easily.", icon: <Calculator className="w-8 h-8 text-primary" />, href: "/tools/stack-calculator" },
    { title: "UUID & Skin Finder", desc: "Look up any player's UUID, 3D Head, and Skin.", icon: <User className="w-8 h-8 text-primary" />, href: "/tools/uuid-finder" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Minecraft <span className="text-primary">Tools</span></h1>
        <p className="text-muted max-w-2xl mx-auto">Free, fast, and reliable tools for Minecraft server owners and players.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, idx) => (
          <Link href={tool.href} key={idx} className="group bg-surface border border-gray-800 p-6 rounded-xl hover:border-primary/50 transition-all hover:-translate-y-1 block">
            <div className="bg-background border border-gray-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {tool.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{tool.title}</h3>
            <p className="text-muted">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

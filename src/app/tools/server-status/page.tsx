"use client";
import { useState } from "react";
import Image from "next/image";
import { Activity } from "lucide-react";

export default function ServerStatus() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const checkStatus = async () => {
    if (!ip) return;
    setLoading(true);
    try {
      const res = await fetch(`https://api.mcsrvstat.us/3/${ip}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
        <Activity className="text-primary" /> Server Status Checker
      </h1>
      <p className="text-muted mb-8">Enter a Minecraft server IP to check its live status, players, and MOTD.</p>

      <div className="flex gap-4 mb-8">
        <input 
          type="text" 
          value={ip} 
          onChange={(e) => setIp(e.target.value)} 
          placeholder="e.g. mc.hypixel.net"
          className="flex-grow bg-surface border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-white"
        />
        <button onClick={checkStatus} disabled={loading} className="bg-primary hover:bg-primary-hover text-background px-6 py-3 rounded-lg font-semibold transition-colors">
          {loading ? "Checking..." : "Check"}
        </button>
      </div>

      {data && (
        <div className="bg-surface border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-800">
            {data.icon ? (
              <Image src={data.icon} alt="Server Icon" width={64} height={64} className="rounded-md" />
            ) : (
              <div className="w-16 h-16 bg-gray-800 rounded-md flex items-center justify-center text-xs text-muted">No Icon</div>
            )}
            <div>
              <h2 className="text-xl font-bold">{ip}</h2>
              <span className={`text-sm font-medium ${data.online ? 'text-green-400' : 'text-red-400'}`}>
                {data.online ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
          
          {data.online && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background border border-gray-800 p-4 rounded-lg">
                <span className="text-muted text-sm block mb-1">Players</span>
                <span className="font-bold text-lg">{data.players?.online || 0} / {data.players?.max || 0}</span>
              </div>
              <div className="bg-background border border-gray-800 p-4 rounded-lg">
                <span className="text-muted text-sm block mb-1">Version</span>
                <span className="font-bold text-lg">{data.version || 'Unknown'}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

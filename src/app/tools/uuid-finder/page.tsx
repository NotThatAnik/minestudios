"use client";
import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

export default function UuidFinder() {
  const [username, setUsername] = useState("");
  const [submittedUser, setSubmittedUser] = useState("");

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
        <User className="text-primary" /> UUID & Skin Viewer
      </h1>
      <p className="text-muted mb-8">Enter a username to grab their UUID, Head, and Skin.</p>

      <div className="flex gap-4 mb-8">
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="e.g. Notch"
          className="flex-grow bg-surface border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-white"
        />
        <button 
          onClick={() => setSubmittedUser(username)} 
          className="bg-primary hover:bg-primary-hover text-background px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Search
        </button>
      </div>

      {submittedUser && (
        <div className="bg-surface border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center">
          <Image 
            src={`https://minotar.net/armor/body/${submittedUser}/150.png`} 
            alt={`${submittedUser}'s Skin`} 
            width={150} 
            height={300} 
            className="mb-6 drop-shadow-xl"
            unoptimized
          />
          <h2 className="text-2xl font-bold mb-2">{submittedUser}</h2>
          <div className="bg-background px-4 py-3 rounded-lg border border-gray-700 w-full mb-4 break-all">
            <span className="text-muted text-sm block mb-1">Skin URL</span>
            <code className="text-primary">https://minotar.net/skin/{submittedUser}</code>
          </div>
        </div>
      )}
    </div>
  );
}

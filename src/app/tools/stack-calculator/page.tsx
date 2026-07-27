"use client";
import { useState } from "react";
import { Calculator } from "lucide-react";

export default function StackCalculator() {
  const [amount, setAmount] = useState<number>(0);
  const [stackSize, setStackSize] = useState<number>(64);

  const stacks = Math.floor(amount / stackSize);
  const remainder = amount % stackSize;

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
        <Calculator className="text-primary" /> Stack Calculator
      </h1>
      <p className="text-muted mb-8">Quickly calculate stacks and leftover items.</p>

      <div className="bg-surface border border-gray-800 rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm text-muted mb-2 font-medium">Total Item Amount</label>
          <input 
            type="number" 
            min="0"
            value={amount || ""} 
            onChange={(e) => setAmount(Number(e.target.value))} 
            className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-muted mb-2 font-medium">Stack Size</label>
          <div className="flex gap-4">
            {[64, 16, 1].map((size) => (
              <button
                key={size}
                onClick={() => setStackSize(size)}
                className={`flex-1 py-3 rounded-lg border font-semibold transition-all ${stackSize === size ? 'bg-primary/10 border-primary text-primary' : 'bg-background border-gray-700 text-muted hover:border-gray-500'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-background rounded-lg p-6 mt-6 border border-gray-800 text-center">
          <p className="text-sm text-muted mb-2">Result</p>
          <div className="text-3xl font-bold">
            <span className="text-primary">{stacks}</span> Stacks + <span className="text-primary">{remainder}</span> Items
          </div>
        </div>
      </div>
    </div>
  );
}

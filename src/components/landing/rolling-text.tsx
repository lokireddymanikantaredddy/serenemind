"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { HeartHandshake } from "lucide-react";

const phrases = [
  "Greater Love in Your Relationships",
  "Greater Purpose in Your Life's Direction",
  "Greater Peace in Your Heart",
];

export function RollingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2 text-lg md:text-xl text-primary-foreground/90">
      <p className="shrink-0">I want to work with you for...</p>
      <div className="flex items-center gap-2 font-semibold text-center sm:text-left text-accent">
        <HeartHandshake className="h-6 w-6 shrink-0" />
        <div className="relative h-8 w-full sm:w-auto sm:min-w-[420px] overflow-hidden">
          {phrases.map((phrase, i) => (
            <span
              key={phrase}
              className={cn(
                "absolute w-full text-center sm:text-left transition-transform duration-700 ease-in-out",
                i === index ? "translate-y-0" : "translate-y-full",
                i < index && "-translate-y-full"
              )}
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

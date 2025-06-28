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
    <div className="flex flex-col items-center justify-center gap-y-2 text-lg md:text-xl text-primary-foreground/90">
      <p>I want to work with you for...</p>
      <div className="flex items-center gap-2 font-semibold text-accent">
        <HeartHandshake className="h-6 w-6 shrink-0" />
        <div className="relative h-8 w-auto min-w-[320px] sm:min-w-[420px] overflow-hidden">
          {phrases.map((phrase, i) => (
            <span
              key={phrase}
              className={cn(
                "absolute w-full text-center transition-transform duration-700 ease-in-out",
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

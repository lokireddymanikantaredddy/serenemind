"use client";

import { useState, useEffect } from "react";
import { HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-y-3 text-base sm:text-lg md:text-xl text-primary-foreground/90">
      <p className="text-center">I want to work with you for…</p>
      <div className="flex items-center justify-center gap-2 font-semibold text-accent">
        <HeartHandshake className="h-6 w-6 shrink-0" />
        <div className="relative h-8 sm:h-10 w-[320px] overflow-hidden">
          {phrases.map((phrase, i) => (
            <span
              key={phrase}
              aria-hidden={i !== index}
              className={cn(
                "absolute inset-0 flex items-center justify-center text-center transition-all duration-700 ease-in-out",
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
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

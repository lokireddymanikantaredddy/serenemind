"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { HeartHandshake } from "lucide-react";

const phrases = [
  "Greater Love in Your Relationships",
  "Greater Purpose in Your Life's Direction",
  "Greater Peace in Your Heart",
];

// Find the longest phrase to prevent layout shifts.
const longestPhrase = phrases.reduce(
  (a, b) => (a.length > b.length ? a : b),
  ""
);

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
      <div className="flex items-center justify-center gap-2 font-semibold text-accent">
        <HeartHandshake className="h-6 w-6 shrink-0" />
        <div className="grid h-10 items-center">
          <span
            className="invisible col-start-1 row-start-1 whitespace-nowrap"
            aria-hidden="true"
          >
            {longestPhrase}
          </span>
          <div className="relative col-start-1 row-start-1 h-full w-full overflow-hidden">
            {phrases.map((phrase, i) => (
              <span
                key={phrase}
                aria-hidden={i !== index}
                className={cn(
                  "absolute inset-x-0 text-center transition-transform duration-700 ease-in-out",
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
    </div>
  );
}

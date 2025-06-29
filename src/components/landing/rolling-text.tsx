"use client";

import { useState, useEffect } from "react";
import {
  HeartHandshake,
  Compass,
  Feather,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items: { phrase: string; icon: LucideIcon }[] = [
  {
    phrase: "Greater Love in Your Relationships",
    icon: HeartHandshake,
  },
  {
    phrase: "Greater Purpose in Your Life's Direction",
    icon: Compass,
  },
  {
    phrase: "Greater Peace in Your Heart",
    icon: Feather,
  },
];

export function RollingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-3 text-base sm:text-lg md:text-xl text-primary-foreground/90">
      <p className="text-center">I want to work with you for…</p>

      {/* Rolling area */}
      <div className="relative h-10 sm:h-12 w-full max-w-[360px] overflow-hidden">
        {items.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.phrase}
              aria-hidden={i !== index}
              className={cn(
                "absolute inset-0 flex flex-nowrap items-center justify-center gap-2 transition-all duration-700 ease-in-out",
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              <IconComponent className="h-6 w-6 text-accent" />
              <span className="font-semibold text-accent whitespace-nowrap text-sm sm:text-base md:text-lg">{item.phrase}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  finalValue: number;
  duration?: number;
}

export function AnimatedNumber({ finalValue, duration = 2000 }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const currentCount = Math.floor(progress * finalValue);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
         setCount(finalValue);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, finalValue, duration]);

  return <span ref={ref}>{count}</span>;
}

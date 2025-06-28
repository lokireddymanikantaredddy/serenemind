"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Run once on mount to set initial time on client to avoid hydration issues
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const timerComponentsData = [
    { unit: 'days', value: timeLeft?.days ?? 0 },
    { unit: 'hours', value: timeLeft?.hours ?? 0 },
    { unit: 'minutes', value: timeLeft?.minutes ?? 0 },
    { unit: 'seconds', value: timeLeft?.seconds ?? 0 },
  ];
  
  // To prevent flash of 00, we render a placeholder with the same height to prevent layout shift
  if(!timeLeft) {
    return <div className="h-[114px]" />;
  }

  return (
    <div className="flex flex-col items-center gap-4">
       <p className="tracking-widest text-sm font-semibold uppercase text-primary-foreground/80">
        Booking opens in
       </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        {timerComponentsData.map(({unit, value}) => (
           <div
            key={unit}
            className="flex flex-col items-center justify-center rounded-lg border border-primary-foreground/20 bg-white/10 p-4 backdrop-blur-sm min-w-[70px] sm:min-w-[80px]"
           >
            <span className="font-headline text-3xl sm:text-4xl font-bold">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-xs uppercase tracking-wider text-primary-foreground/70">
              {unit}
            </span>
           </div>
        ))}
      </div>
    </div>
  );
}

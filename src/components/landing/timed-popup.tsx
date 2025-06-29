"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Stethoscope, Star } from "lucide-react";

export function TimedPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(10); // 10 seconds
  const inactivityTimeout = useRef<NodeJS.Timeout | null>(null);
  const countdownInterval = useRef<NodeJS.Timeout | null>(null);

  // Function to start inactivity timer
  const startInactivityTimer = () => {
    if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);
    setTimer(10);
    inactivityTimeout.current = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds
  };

  // Reset inactivity timer on user activity
  useEffect(() => {
    const resetTimer = () => {
      if (!isOpen) startInactivityTimer();
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("scroll", resetTimer);
    window.addEventListener("touchstart", resetTimer);

    // Start timer on mount
    startInactivityTimer();

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
      if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);
      if (countdownInterval.current) clearInterval(countdownInterval.current);
    };
    // eslint-disable-next-line
  }, [isOpen]);

  // Start countdown when popup opens
  useEffect(() => {
    if (isOpen) {
      setTimer(10);
      countdownInterval.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setIsOpen(false);
            clearInterval(countdownInterval.current!);
            startInactivityTimer(); // Restart inactivity timer after popup closes
            return 10;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (countdownInterval.current) clearInterval(countdownInterval.current);
    }
    // eslint-disable-next-line
  }, [isOpen]);

  const handleCloseAndScroll = () => {
    setIsOpen(false);
    if (countdownInterval.current) clearInterval(countdownInterval.current);
    startInactivityTimer();
  };

  const progress = (timer / 10) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-8 text-center sm:p-10">
        <div className="mb-4">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-primary transition-[width] duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            This popup will close in <span className="font-bold">{timer}</span> seconds
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/profile.png"
            alt="Portrait of Dr. Serena Blake"
            width={120}
            height={120}
            className="rounded-full object-cover shadow-lg"
            data-ai-hint="businesswoman glasses"
          />
          <DialogHeader className="space-y-2 p-0">
            <DialogTitle className="font-headline text-3xl font-bold tracking-tight text-foreground">
              Ready to Start Your Healing Journey?
            </DialogTitle>
            <DialogDescription>
              Take the first step towards emotional well-being, deeper connections, and lasting inner peace. Reach out to discuss how compassionate counseling can support you.
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm text-muted-foreground flex items-center justify-center gap-x-3">
            <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span>Top Rated</span>
            </div>
            <span>&bull;</span>
            <span>8+ Years Experience</span>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleCloseAndScroll}
            >
              Close
            </Button>
            <Button asChild className="w-full">
              <Link href="#contact" onClick={handleCloseAndScroll}>
                <Stethoscope className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

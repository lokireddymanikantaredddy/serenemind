"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      const popupShown = sessionStorage.getItem("sereneMindPopupShown");
      if (!popupShown) {
        setIsOpen(true);
        sessionStorage.setItem("sereneMindPopupShown", "true");
      }
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCloseAndScroll = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-8 text-center sm:p-10">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="https://placehold.co/400x400.png"
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
              onClick={() => setIsOpen(false)}
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

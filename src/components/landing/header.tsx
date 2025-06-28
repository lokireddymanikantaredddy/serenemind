"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Stethoscope, Phone, Mail, Sparkles, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full"
      )}
    >
      <div
        className="bg-secondary py-2"
      >
        <div className="container mx-auto flex max-w-5xl items-center justify-between px-4 text-sm text-muted-foreground">
          <a href="tel:555-444-3333" className="flex items-center gap-2 transition-colors hover:text-foreground">
            <Phone size={16} />
            <span>(555) 444-3333</span>
          </a>
          <a href="mailto:contact@serenemind.com" className="flex items-center gap-2 transition-colors hover:text-foreground">
            <Mail size={16} />
            <span className="hidden md:inline">contact@serenemind.com</span>
          </a>
        </div>
      </div>
      
      <div className="border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-20 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold font-headline text-foreground">
            <Stethoscope className="text-primary" />
            <span>SereneMind</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link href={href} key={label} className="text-muted-foreground transition-colors hover:text-foreground">
                {label}
              </Link>
            ))}
          </nav>
          
          <Button asChild className="hidden md:flex">
            <Link href="#contact">
              <Sparkles className="mr-2 h-4 w-4" />
              Get Started
            </Link>
          </Button>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground hover:bg-accent">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-lg",
          isMenuOpen ? "max-h-96 border-b border-border/60" : "max-h-0"
        )}
      >
        <nav className="flex flex-col items-start gap-1 p-4">
          {navLinks.map(({ href, label }) => (
            <Link
              href={href}
              key={label}
              className="w-full rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              onClick={handleLinkClick}
            >
              {label}
            </Link>
          ))}
          <Button asChild size="lg" className="mt-4 w-full">
            <Link href="#contact" onClick={handleLinkClick}>
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

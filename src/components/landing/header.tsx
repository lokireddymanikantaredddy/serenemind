"use client";

import React, { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        "sticky top-0 z-50 w-full transition-all duration-300"
      )}
    >
      <div
        className={cn(
          "bg-blue-100 transition-all duration-300 ease-in-out",
          isScrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "py-2 opacity-100"
        )}
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
      
      <div className="border-b border-black/10 bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-20 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold font-headline text-slate-900">
            <Stethoscope className="text-primary" />
            <span>SereneMind</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link href={href} key={label} className="text-slate-700 transition-colors hover:text-slate-950">
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
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-slate-900 hover:bg-slate-200">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-lg",
          isMenuOpen ? "max-h-96 border-b border-border/60" : "max-h-0"
        )}
      >
        <nav className="flex flex-col items-start gap-1 p-4">
          {navLinks.map(({ href, label }) => (
            <Link
              href={href}
              key={label}
              className="w-full rounded-md px-3 py-2 text-base font-medium text-slate-700 transition-colors hover:bg-slate-200 hover:text-slate-950"
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

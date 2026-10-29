"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const { socialLinks, personal } = portfolioData;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        isScrolled || menuOpen
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-sm font-semibold tracking-tight">
          {personal.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors hover:text-foreground",
                activeId === link.href.slice(1)
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <GithubIcon />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <LinkedinIcon />
          </a>
          <a href={socialLinks.email} className={cn(buttonVariants({ size: "lg" }), "ml-2")}>
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background px-4 pb-5 pt-3 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-base text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex gap-2">
            <a href={socialLinks.email} className={cn(buttonVariants({ size: "lg" }), "flex-1")}>
              Get in touch
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={buttonVariants({ variant: "outline", size: "icon-lg" })}
            >
              <GithubIcon />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={buttonVariants({ variant: "outline", size: "icon-lg" })}
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

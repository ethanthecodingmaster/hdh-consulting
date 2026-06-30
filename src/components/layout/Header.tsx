"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const useLightStyle = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        useLightStyle
          ? "bg-white/95 backdrop-blur-md shadow-sm shadow-navy-900/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label={`${siteConfig.name} 홈으로`}
        >
          <span
            className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              useLightStyle ? "text-navy-900" : "text-white"
            )}
          >
            HDH
          </span>
          <span
            className={cn(
              "hidden text-sm font-medium sm:inline transition-colors",
              useLightStyle ? "text-navy-600" : "text-navy-200"
            )}
          >
            Consulting
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="주요 메뉴">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? useLightStyle
                    ? "text-accent-600 bg-accent-50"
                    : "text-white bg-white/10"
                  : useLightStyle
                    ? "text-navy-700 hover:text-accent-600 hover:bg-navy-50"
                    : "text-navy-100 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href="/contact"
            size="sm"
            variant={useLightStyle ? "primary" : "outline"}
            className={cn(!useLightStyle && "border-white/30 text-white hover:border-white hover:text-white hover:bg-white/10")}
          >
            무료 상담 신청
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "rounded-lg p-2 md:hidden transition-colors",
            useLightStyle ? "text-navy-800 hover:bg-navy-50" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-100 bg-white md:hidden"
          >
            <nav className="flex flex-col px-4 py-4" aria-label="모바일 메뉴">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "text-accent-600 bg-accent-50"
                      : "text-navy-800 hover:bg-navy-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-4 w-full">
                무료 상담 신청
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

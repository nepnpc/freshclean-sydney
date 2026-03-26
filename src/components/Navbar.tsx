"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#00AEEF] flex items-center justify-center">
            <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-manrope)" }}>F</span>
          </div>
          <span
            className="text-[#0F172A] font-extrabold text-xl"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            FreshClean Sydney
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-bold transition-colors ${
                pathname === link.href
                  ? "text-[#00AEEF] border-b-2 border-[#00AEEF] pb-0.5"
                  : "text-[#0F172A] hover:text-[#00AEEF]"
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/get-quote"
            className="bg-[#00AEEF] text-white px-6 py-2.5 rounded-lg font-bold text-base hover:bg-[#0099d4] transition-colors shadow-md"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-bold ${
                pathname === link.href ? "text-[#00AEEF]" : "text-[#0F172A]"
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-quote"
            onClick={() => setMobileOpen(false)}
            className="bg-[#00AEEF] text-white px-6 py-2.5 rounded-lg font-bold text-base text-center"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}

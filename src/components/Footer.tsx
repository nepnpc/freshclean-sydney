"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#F1F5F9]">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-8">
        <div className="border-b border-[#E2E8F0] pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#00AEEF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span
                className="text-[#0F172A] font-extrabold text-2xl"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                FreshClean Sydney
              </span>
            </div>
            <p className="text-[#475569] text-sm leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
              Clinical Grade Cleaning for Sydney's premium homes and offices.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-[#475569] hover:text-[#00AEEF] transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-[#475569] hover:text-[#00AEEF] transition-colors">
                <InstagramIcon />
              </a>
              <a href="mailto:freshcleansyd@gmail.com" aria-label="Email"
                className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-[#475569] hover:text-[#00AEEF] transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#0F172A] font-bold text-base mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {["Service Areas", "Privacy Policy", "Terms of Service", "FAQs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#475569] text-sm hover:text-[#00AEEF] transition-colors"
                    style={{ fontFamily: "var(--font-manrope)" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#0F172A] font-bold text-base mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Contact Us
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="tel:0493597634" className="text-[#475569] text-sm hover:text-[#00AEEF] transition-colors"
                  style={{ fontFamily: "var(--font-manrope)" }}>
                  0493 597 634
                </a>
              </li>
              <li>
                <a href="mailto:freshcleansyd@gmail.com" className="text-[#475569] text-sm hover:text-[#00AEEF] transition-colors"
                  style={{ fontFamily: "var(--font-manrope)" }}>
                  freshcleansyd@gmail.com
                </a>
              </li>
              <li>
                <p className="text-[#475569] text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                  Sydney, New South Wales
                </p>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-[#475569] hover:text-[#00AEEF] transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-[#475569] hover:text-[#00AEEF] transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#0F172A] font-bold text-base mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Newsletter
            </h3>
            <p className="text-[#475569] text-sm mb-4 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
              Stay updated with our latest offers and cleaning tips.
            </p>
            <form className="flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00AEEF]"
                style={{ fontFamily: "var(--font-inter)" }}
              />
              <button
                type="submit"
                className="bg-[#00AEEF] text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-[#0099d4] transition-colors"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Join Newsletter
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-xs" style={{ fontFamily: "var(--font-inter)" }}>
            © 2024 FreshClean Sydney. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="text-[#94A3B8] text-xs hover:text-[#00AEEF] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}>
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-[#94A3B8] text-xs hover:text-[#00AEEF] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

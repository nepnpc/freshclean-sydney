"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Search } from "lucide-react";

const articles = [
  {
    slug: "clinical-sanctuary",
    category: "Inside FreshClean",
    tag: "PROCESS",
    title: "The Clinical Sanctuary: Why Hospital-Grade Clean Matters for Your Home",
    body: "An exclusive look into our proprietary 50-point sanctuary checklist that goes beyond surface shining.",
    date: "October 24, 2024",
    featured: false,
  },
  {
    slug: "sparkling-kitchen",
    category: "Cleaning Tips",
    tag: "TIPS",
    title: "7 Natural Secrets to a Sparkling Sydney Kitchen",
    body: "Discover how to harness the power of citrus and eucalyptus to maintain a clinical-grade shine in your coastal home...",
    date: "March 12, 2024",
    featured: true,
  },
  {
    slug: "zero-waste-cleaning",
    category: "Eco-Friendly",
    tag: "ECO",
    title: "Zero-Waste Cleaning: A Beginner's Guide",
    body: "Transition your home to a sustainable sanctuary with these simple swaps.",
    date: "February 8, 2024",
    featured: false,
  },
  {
    slug: "coastal-walks",
    category: "Sydney Lifestyle",
    tag: "LIFESTYLE",
    title: "The Best Coastal Walks for a Post-Cleaning Refresh",
    body: "Once your home is a sanctuary, take a breath at our favorite Sydney coastal trails.",
    date: "January 15, 2024",
    featured: false,
  },
  {
    slug: "hepa-filtration",
    category: "Wellness",
    tag: "AIR QUALITY",
    title: "Silent Invaders: The Importance of HEPA Filtration in Modern Homes",
    body: "Why hospital-grade filtration should be part of every Sydney home's cleaning routine.",
    date: "December 3, 2023",
    featured: false,
  },
];

const categories = ["All Stories", "Cleaning Tips", "Sustainable Living", "Sydney Lifestyle", "Wellness"];

export default function BlogPage() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#F7F9FF] py-20">
          <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] bg-[#00AEEF] opacity-10 rounded-full blur-3xl" />
          <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl lg:text-[72px] font-extrabold text-[#0F172A] mb-5" style={{ fontFamily: "var(--font-manrope)" }}>
                Our Journal
              </h1>
              <p className="text-lg text-[#475569] leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
                Insights into eco-friendly living, clinical cleaning standards, and the vibrant Sydney lifestyle. Your sanctuary, perfected.
              </p>
              <div className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 shadow-sm max-w-md">
                <Search size={18} className="text-[#94A3B8]" />
                <input type="text" placeholder="Search for tips, guides..." className="flex-1 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none bg-transparent" style={{ fontFamily: "var(--font-inter)" }} />
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="bg-gradient-to-br from-[#00AEEF] to-[#006B5B] rounded-3xl h-72 flex items-center justify-center text-8xl">
                📰
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-lg px-4 py-3">
                <p className="font-bold text-sm text-[#00AEEF]" style={{ fontFamily: "var(--font-manrope)" }}>100% Eco-Friendly</p>
                <p className="text-xs text-[#64748B]" style={{ fontFamily: "var(--font-inter)" }}>Tips & Guides</p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-[#F7F9FF] pb-4">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((c, i) => (
                <button key={c} className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${i === 0 ? "bg-[#0F172A] text-white" : "bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#00AEEF] hover:text-[#00AEEF]"}`} style={{ fontFamily: "var(--font-manrope)" }}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-[#F7F9FF] py-12">
          <div className="max-w-[1280px] mx-auto px-6">
            {/* Featured */}
            {featured && (
              <div className="bg-gradient-to-br from-[#0F172A] to-[#00658D] rounded-3xl p-10 mb-8 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-bold text-[#7CF8DD] uppercase tracking-wider" style={{ fontFamily: "var(--font-manrope)" }}>{featured.category}</span>
                  <p className="text-sm text-white/60 mt-1 mb-3" style={{ fontFamily: "var(--font-inter)" }}>{featured.date}</p>
                  <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>{featured.title}</h2>
                  <p className="text-white/75 text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>{featured.body}</p>
                  <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 font-bold text-base text-[#7CF8DD] hover:text-white transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>
                    Read Full Article →
                  </Link>
                </div>
                <div className="text-8xl text-center hidden md:block">🍋</div>
              </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((a) => (
                <div key={a.slug} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                  <div className="bg-gradient-to-br from-[#D9EAFF] to-[#DBEAFE] h-40 flex items-center justify-center text-5xl">
                    {a.tag === "ECO" ? "🌿" : a.tag === "LIFESTYLE" ? "🏖️" : a.tag === "AIR QUALITY" ? "💨" : "📝"}
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <span className="text-xs font-bold text-[#0284C7] uppercase" style={{ fontFamily: "var(--font-manrope)" }}>{a.category}</span>
                    <h3 className="font-bold text-[#0F172A] text-lg leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>{a.title}</h3>
                    <p className="text-sm text-[#475569] flex-1" style={{ fontFamily: "var(--font-inter)" }}>{a.body}</p>
                    <Link href={`/blog/${a.slug}`} className="text-sm font-bold text-[#0284C7] hover:text-[#00AEEF] transition-colors mt-auto" style={{ fontFamily: "var(--font-manrope)" }}>
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[#00658D]" />
          <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-[#00AEEF] opacity-20 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Subscribe to the Sanctuary Letter
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8" style={{ fontFamily: "var(--font-inter)" }}>
              Get monthly cleaning hacks, eco-friendly living guides, and exclusive Sydney service offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3.5 rounded-xl text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#7CF8DD]" style={{ fontFamily: "var(--font-inter)" }} />
              <button type="submit" className="bg-[#7CF8DD] text-[#0F172A] px-6 py-3.5 rounded-xl font-bold text-base hover:bg-white transition-all" style={{ fontFamily: "var(--font-manrope)" }}>
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

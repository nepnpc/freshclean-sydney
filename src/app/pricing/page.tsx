import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, Shield, Leaf, Star } from "lucide-react";

const tiers = [
  {
    badge: "Essential",
    name: "Standard",
    descriptor: "Small homes · Quick clean",
    price: "Flexible",
    priceSub: "Starting from market rates",
    features: ["2 Bedrooms", "2 Bathrooms", "1 Living room", "~2-3 hrs completion", "1-2 Dedicated cleaners"],
    cta: "Get Started",
    href: "/get-quote",
    highlighted: false,
  },
  {
    badge: "Most Selected",
    name: "Premium",
    descriptor: "Deep clean · Best value",
    price: "Negotiable",
    priceSub: "Tailored to your requirements",
    features: ["5 Bedrooms", "3 Bathrooms", "2 Living rooms + vacuum", "Oven / Fridge spot clean", "~4-5 hrs completion", "2-3 Expert cleaners"],
    cta: "Book Premium",
    href: "/get-quote",
    highlighted: true,
  },
  {
    badge: "Bespoke",
    name: "Enterprise",
    descriptor: "Large properties · Custom quote",
    price: "Custom",
    priceSub: "Volume-based discounts available",
    features: ["8+ Bedrooms / Offices", "5+ Bathrooms", "Full deep clean & inspection", "Custom timing / After hours", "Team as required"],
    cta: "Request Quote",
    href: "/get-quote",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#F7F9FF] py-20">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-[60px] font-bold text-[#0F172A] mb-6 leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>
              Clinical Clarity in Every Corner
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
              Transparent pricing for a sanctuary-grade clean. Choose the tier that fits your space and lifestyle.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-[#F7F9FF] pb-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-3xl p-8 flex flex-col gap-6 ${
                    tier.highlighted
                      ? "bg-[#0F172A] text-white shadow-2xl scale-105"
                      : "bg-white border border-[#E2E8F0] shadow-md"
                  }`}
                >
                  <div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${tier.highlighted ? "bg-[#00AEEF] text-white" : "bg-[#DBEAFE] text-[#0284C7]"}`} style={{ fontFamily: "var(--font-inter)" }}>
                      {tier.badge}
                    </span>
                    {tier.highlighted && (
                      <span className="ml-2 text-xs font-bold px-3 py-1 rounded-full bg-[#7CF8DD] text-[#006B5B]" style={{ fontFamily: "var(--font-inter)" }}>Popular</span>
                    )}
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold mb-1 ${tier.highlighted ? "text-white" : "text-[#0F172A]"}`} style={{ fontFamily: "var(--font-manrope)" }}>{tier.name}</h2>
                    <p className={`text-sm ${tier.highlighted ? "text-white/70" : "text-[#64748B]"}`} style={{ fontFamily: "var(--font-inter)" }}>{tier.descriptor}</p>
                  </div>
                  <div>
                    <p className={`font-extrabold leading-none ${tier.highlighted ? "text-[#7CF8DD] text-5xl" : "text-4xl text-[#0F172A]"}`} style={{ fontFamily: "var(--font-manrope)" }}>{tier.price}</p>
                    <p className={`text-sm mt-2 ${tier.highlighted ? "text-white/60" : "text-[#64748B]"}`} style={{ fontFamily: "var(--font-inter)" }}>{tier.priceSub}</p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <Check size={16} className={tier.highlighted ? "text-[#7CF8DD]" : "text-[#00AEEF]"} />
                        <span className={`text-sm font-medium ${tier.highlighted ? "text-white/90" : "text-[#475569]"}`} style={{ fontFamily: "var(--font-inter)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className={`text-center py-3.5 px-6 rounded-xl font-bold text-base transition-all ${
                      tier.highlighted
                        ? "bg-white text-[#0F172A] hover:bg-[#F1F5F9] shadow-lg"
                        : "bg-[#00AEEF] text-white hover:bg-[#0099d4] shadow-md"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] to-[#006B5B]" />
          <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#7CF8DD] opacity-20 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>
                Clinical Standards. Residential Warmth.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
                We don&apos;t just clean; we restore. Every member of our Sydney-based team is vetted through our rigorous 42-point hygiene checklist.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Shield size={18} />, label: "Police Vetted" },
                  { icon: <Leaf size={18} />, label: "Eco-Certified" },
                  { icon: <Star size={18} />, label: "Fully Insured" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 bg-white/20 text-white px-4 py-2.5 rounded-xl backdrop-blur-sm">
                    {badge.icon}
                    <span className="font-bold text-sm" style={{ fontFamily: "var(--font-inter)" }}>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden md:flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl h-72 w-full flex items-center justify-center text-8xl">
                🏆
              </div>
              <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-xl px-5 py-3">
                <p className="font-bold text-sm text-[#00AEEF]" style={{ fontFamily: "var(--font-manrope)" }}>100% Eco-Friendly</p>
                <p className="text-xs text-[#64748B]" style={{ fontFamily: "var(--font-inter)" }}>Safe for pets & children</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

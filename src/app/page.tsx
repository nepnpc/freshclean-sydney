import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Star, Shield, CheckCircle, ChevronDown, Award } from "lucide-react";

const services = [
  { title: "End of Lease", body: "Full bond-back guarantee with a detailed 72-point checklist for tenants and agents.", icon: "🏠" },
  { title: "Residential", body: "Regular home maintenance to keep your personal sanctuary in perfect clinical condition.", icon: "✨" },
  { title: "Deep Cleaning", body: "A thorough, top-to-bottom scrub of every surface, nook, and cranny.", icon: "🧹" },
  { title: "Office Cleaning", body: "Boost productivity with a clinically clean and organized workspace.", icon: "🏢" },
  { title: "Carpet Cleaning", body: "Steam cleaning and stain removal to restore your carpets to new.", icon: "🛋️" },
  { title: "Window Cleaning", body: "Crystal clear views with streak-free professional window washing.", icon: "🪟" },
  { title: "Commercial", body: "Scaling solutions for retail, hospitality, and large-scale facilities.", icon: "🏪" },
  { title: "After-Construction", body: "Removing fine dust and debris to reveal your beautiful new build.", icon: "🔨" },
];

const reviews = [
  { name: "Sarah Chen", suburb: "Surry Hills", initials: "SC", body: "FreshClean made my end-of-lease move so easy. The property manager said it was the cleanest handover he's ever seen. Got my full bond back within 48 hours!" },
  { name: "James Miller", suburb: "Mosman", initials: "JM", body: "I've used several services in Sydney, but the clinical attention to detail here is unmatched. My windows are actually invisible now. Highly recommend the deep clean." },
  { name: "Linda Thompson", suburb: "Balmain", initials: "LT", body: "Professional from start to finish. The team arrived on time and the house smells incredibly fresh. Best clinical-grade cleaning service in the Inner West." },
];

const faqs = [
  { q: "How do I get a quote?", a: "By emailing us, through WhatsApp, through phone call, through the website or by messaging us on our social media." },
  { q: "What areas do you cover?", a: "We cover all of Greater Sydney including the Inner West, North Shore, Eastern Suburbs, Western Sydney, and surrounding areas." },
  { q: "How long does it take?", a: "Cleaning times vary by property size and service type. A standard 2-bedroom clean takes 2–3 hours, while a deep clean for larger homes can take 5–7 hours." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#F7F9FF] min-h-[600px] flex items-center">
          <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#00AEEF] opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] bg-[#7CF8DD] opacity-15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-[1280px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-white border border-[#DBEAFE] rounded-full px-4 py-2 shadow-sm w-fit">
                <span className="text-[#EEC209] text-sm">★</span>
                <span className="text-xs font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Sydney&apos;s #1 Rated Team</span>
              </div>
              <h1 className="text-5xl lg:text-[64px] font-extrabold text-[#0F172A] leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>
                Professional End of Lease Cleaning Sydney
              </h1>
              <p className="text-lg text-[#3E4850] leading-relaxed max-w-[520px]" style={{ fontFamily: "var(--font-inter)" }}>
                Pure Clean. Pure Peace of Mind. We handle the clinical details so you can focus on your new beginning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote" className="bg-white text-[#0F172A] border border-[#E2E8F0] px-8 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all text-center" style={{ fontFamily: "var(--font-inter)" }}>
                  Get a Free Quote
                </Link>
                <Link href="/pricing" className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-[#0F172A] hover:text-white transition-all text-center" style={{ fontFamily: "var(--font-inter)" }}>
                  View Pricing
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-[#DBEAFE]">
                  <Shield size={16} className="text-[#00AEEF]" />
                  <span className="text-xs font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Bond Guarantee</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-[#DBEAFE]">
                  <CheckCircle size={16} className="text-[#00AEEF]" />
                  <span className="text-xs font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-[#DBEAFE]">
                  <span className="text-[#EEC209] font-bold text-xs">★★★★★</span>
                  <span className="text-[10px] font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>2,400+ REVIEWS</span>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="bg-gradient-to-br from-[#00AEEF] to-[#006B5B] rounded-3xl h-[480px] overflow-hidden relative flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-8xl mb-4">🏠</div>
                  <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)" }}>Clinical Grade</p>
                  <p className="text-lg opacity-80 mt-2" style={{ fontFamily: "var(--font-inter)" }}>Every corner, every time.</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-xs text-[#64748B] font-bold" style={{ fontFamily: "var(--font-inter)" }}>TRUSTED BY</p>
                <p className="text-2xl font-extrabold text-[#0F172A]" style={{ fontFamily: "var(--font-manrope)" }}>5,000+</p>
                <p className="text-xs text-[#64748B]" style={{ fontFamily: "var(--font-inter)" }}>Sydneysiders</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="bg-[#EDF4FF] py-20">
          <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6 leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>
                Welcome to FreshClean Sydney – Sydney&apos;s Premier Cleaning Experts.
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
                At FreshClean Sydney, we believe a clean space is a sanctuary. Founded on the principles of clinical precision and architectural order, we&apos;ve redefined what it means to experience professional cleaning. Whether it&apos;s securing your full bond back or maintaining a pristine office environment, our team uses medical-grade protocols to ensure every corner sparkles.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <div className="w-10 h-10 bg-[#DBEAFE] rounded-xl flex items-center justify-center mb-3">
                    <Award size={20} className="text-[#00AEEF]" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-manrope)" }}>Clinical Grade Standards</h3>
                  <p className="text-sm text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>We follow hospital-grade checklists to ensure hygiene is absolute.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <div className="w-10 h-10 bg-[#DBEAFE] rounded-xl flex items-center justify-center mb-3">
                    <Shield size={20} className="text-[#00AEEF]" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-manrope)" }}>Fully Insured & Vetted</h3>
                  <p className="text-sm text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>Your property is in safe hands with our background-checked professionals.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#00AEEF] to-[#7CF8DD] rounded-2xl h-56 flex items-center justify-center text-6xl">🛁</div>
              <div className="bg-gradient-to-br from-[#006B5B] to-[#00AEEF] rounded-2xl h-56 flex items-center justify-center text-6xl mt-8">🧽</div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-[#F7F9FF]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "var(--font-manrope)" }}>Our Premium Services</h2>
              <div className="w-16 h-1 bg-[#00AEEF] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-[#D9EAFF] rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow">
                  <div className="text-4xl">{s.icon}</div>
                  <h3 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-manrope)" }}>{s.title}</h3>
                  <p className="text-sm text-[#475569] flex-1" style={{ fontFamily: "var(--font-inter)" }}>{s.body}</p>
                  <Link href="/services" className="text-sm font-bold text-[#0284C7] hover:text-[#00AEEF] transition-colors mt-auto" style={{ fontFamily: "var(--font-inter)" }}>
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-[#E3EFFF] py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "var(--font-manrope)" }}>Trusted by 5,000+ Sydneysiders</h2>
              <p className="text-[#475569] text-base" style={{ fontFamily: "var(--font-inter)" }}>Real reviews from our valued clinical-grade cleaning clients.</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => <Star key={i} size={20} className="text-[#EEC209] fill-[#EEC209]" />)}
                </div>
                <span className="font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>5.0 Rating on Google</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <div key={r.name} className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
                  <div className="flex gap-0.5">{[1,2,3,4,5].map((i) => <Star key={i} size={16} className="text-[#EEC209] fill-[#EEC209]" />)}</div>
                  <p className="text-[#3E4850] text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-inter)" }}>&ldquo;{r.body}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-[#E2E8F0]">
                    <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center text-white font-bold text-sm">{r.initials}</div>
                    <div>
                      <p className="font-bold text-sm text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>{r.name}</p>
                      <p className="text-xs text-[#64748B]" style={{ fontFamily: "var(--font-inter)" }}>{r.suburb}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#F7F9FF]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-manrope)" }}>You Might Ask</h2>
              <p className="text-[#475569] text-lg mt-2" style={{ fontFamily: "var(--font-inter)" }}>Frequently Asked Questions</p>
            </div>
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] group">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                    <span className="font-bold text-[#0F172A] text-lg" style={{ fontFamily: "var(--font-inter)" }}>{faq.q}</span>
                    <ChevronDown size={20} className="text-[#64748B] transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-[#475569] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#00AEEF] to-[#006B5B] py-20">
          <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>Ready for a Clinical-Grade Clean?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>Join over 5,000 satisfied Sydneysiders. Get your free quote today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote" className="bg-white text-[#00AEEF] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all" style={{ fontFamily: "var(--font-inter)" }}>Get a Free Quote</Link>
              <a href="tel:0493597634" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all" style={{ fontFamily: "var(--font-inter)" }}>Call 0493 597 634</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

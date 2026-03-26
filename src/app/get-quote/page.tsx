import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Shield, Star } from "lucide-react";

export default function GetQuotePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#F7F9FF] py-16">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-[60px] font-extrabold text-[#0F172A] mb-5" style={{ fontFamily: "var(--font-manrope)" }}>
              Get a Free Quote
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
              Experience the gold standard in clinical-grade cleaning. Complete the form below and receive a tailored estimate for your space.
            </p>
          </div>
        </section>

        {/* Two-col layout */}
        <section className="bg-[#F7F9FF] pb-20">
          <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <div className="bg-gradient-to-br from-[#00AEEF] to-[#006B5B] rounded-3xl h-72 flex items-center justify-center text-8xl mb-6">
                🏠
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <Leaf size={20} className="text-[#00AEEF]" />, title: "Eco-Friendly Care", body: "Non-toxic, clinical grade solutions." },
                  { icon: <Shield size={20} className="text-[#00AEEF]" />, title: "Fully Insured", body: "Your peace of mind is our priority." },
                  { icon: <Star size={20} className="text-[#EEC209]" />, title: "5-Star Service", body: "Sydney's highest rated cleaners." },
                ].map((b) => (
                  <div key={b.title} className="flex items-start gap-4 bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-5">
                    <div className="w-10 h-10 bg-[#DBEAFE] rounded-xl flex items-center justify-center flex-shrink-0">{b.icon}</div>
                    <div>
                      <p className="font-bold text-[#0F172A] text-base" style={{ fontFamily: "var(--font-manrope)" }}>{b.title}</p>
                      <p className="text-sm text-[#475569] mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-3xl shadow-lg border border-[#E2E8F0] p-8">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "var(--font-manrope)" }}>Request Your Free Quote</h2>
              <form className="flex flex-col gap-5" action="mailto:freshcleansyd@gmail.com" method="get">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Name</label>
                    <input name="name" type="text" placeholder="John Smith" className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Mobile Number</label>
                    <input name="phone" type="tel" placeholder="0400 000 000" className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Email Address</label>
                  <input name="email" type="email" placeholder="john@example.com" className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Choose a Service</label>
                  <select name="service" className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }}>
                    <option value="">Select Service...</option>
                    <option>End of Lease</option>
                    <option>Residential</option>
                    <option>Deep Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Carpet Cleaning</option>
                    <option>Window Cleaning</option>
                    <option>Commercial</option>
                    <option>After-Construction</option>
                    <option>Airbnb / Holiday</option>
                    <option>Spring Cleaning</option>
                    <option>Upholstery</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Frequency</label>
                    <select name="frequency" className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] focus:outline-none focus:border-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }}>
                      <option>One Time</option>
                      <option>Weekly</option>
                      <option>Fortnightly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Bedrooms</label>
                    <select name="bedrooms" className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] focus:outline-none focus:border-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }}>
                      <option>Studio</option>
                      <option>1 Bedroom</option>
                      <option>2 Bedrooms</option>
                      <option>3 Bedrooms</option>
                      <option>4 Bedrooms</option>
                      <option>5+ Bedrooms</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Total Rooms</label>
                  <input name="rooms" type="text" placeholder="e.g. 5" className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Message</label>
                  <textarea name="message" rows={4} placeholder="Any specific requirements or instructions..." className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00AEEF] resize-none" style={{ fontFamily: "var(--font-inter)" }} />
                </div>
                <button type="submit" className="bg-[#0F172A] text-white px-6 py-4 rounded-xl font-extrabold text-lg shadow-lg hover:bg-[#1e293b] transition-all" style={{ fontFamily: "var(--font-manrope)" }}>
                  Request Your Free Quote
                </button>
                <p className="text-xs text-[#94A3B8] text-center" style={{ fontFamily: "var(--font-inter)" }}>
                  *We typically respond within 60 minutes during business hours.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

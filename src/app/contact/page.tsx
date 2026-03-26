import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#F7F9FF] py-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="inline-flex items-center gap-2 bg-[#DBEAFE] rounded-full px-4 py-1.5 mb-5">
              <Sparkles size={14} className="text-[#0284C7]" />
              <span className="text-xs font-bold text-[#0284C7]" style={{ fontFamily: "var(--font-manrope)" }}>Get in Touch</span>
            </div>
            <h1 className="text-5xl lg:text-[60px] font-extrabold text-[#0F172A] mb-5 max-w-2xl leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>
              Let&apos;s start your journey to a Clinical Sanctuary.
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Whether you have a specific clinical cleaning requirement or just need a routine refresh, our Sydney-based team is ready.
            </p>
          </div>
        </section>

        {/* Two-col */}
        <section className="bg-[#F7F9FF] pb-20">
          <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12">
            {/* Left — Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "var(--font-manrope)" }}>Contact Details</h2>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  {
                    icon: <MapPin size={20} className="text-[#00AEEF]" />,
                    label: "Office Address",
                    value: "Level 24, Three International Towers, 300 Barangaroo Ave, Sydney NSW 2000",
                  },
                  {
                    icon: <Mail size={20} className="text-[#00AEEF]" />,
                    label: "Email Us",
                    value: "freshcleansyd@gmail.com",
                    href: "mailto:freshcleansyd@gmail.com",
                  },
                  {
                    icon: <Phone size={20} className="text-[#00AEEF]" />,
                    label: "Call Direct",
                    value: "0493 597 634",
                    href: "tel:0493597634",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-5">
                    <div className="w-10 h-10 bg-[#DBEAFE] rounded-xl flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-0.5" style={{ fontFamily: "var(--font-inter)" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#0284C7] font-medium hover:text-[#00AEEF] transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>{item.value}</a>
                      ) : (
                        <p className="text-[#0F172A] font-medium" style={{ fontFamily: "var(--font-manrope)" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-[#DBEAFE] to-[#EDF4FF] rounded-2xl h-64 flex flex-col items-center justify-center gap-3 border border-[#E2E8F0]">
                <MapPin size={40} className="text-[#00AEEF]" />
                <p className="text-[#475569] font-medium text-sm" style={{ fontFamily: "var(--font-inter)" }}>Sydney CBD, New South Wales</p>
                <a href="https://maps.google.com/?q=300+Barangaroo+Ave+Sydney" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#0284C7] hover:text-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }}>
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg border border-[#E2E8F0] p-8">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "var(--font-manrope)" }}>Send Us a Message</h2>
              <form className="flex flex-col gap-5" action="mailto:freshcleansyd@gmail.com" method="get">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Full Name</label>
                  <input name="name" type="text" placeholder="John Doe" className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Email Address</label>
                  <input name="email" type="email" placeholder="john@example.com" className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Service Type</label>
                  <select name="service" className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] focus:outline-none focus:border-[#00AEEF]" style={{ fontFamily: "var(--font-inter)" }}>
                    <option>Residential Clinical Clean</option>
                    <option>End of Lease</option>
                    <option>Deep Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Commercial</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>Your Message</label>
                  <textarea name="message" rows={5} placeholder="Tell us about your space..." className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F7F9FF] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00AEEF] resize-none" style={{ fontFamily: "var(--font-inter)" }} />
                </div>
                <button type="submit" className="bg-[#0F172A] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#1e293b] transition-all" style={{ fontFamily: "var(--font-manrope)" }}>
                  Send Message
                </button>
                <p className="text-xs text-[#94A3B8] text-center" style={{ fontFamily: "var(--font-manrope)" }}>
                  By submitting, you agree to our privacy policy. We typically respond within 2 hours.
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

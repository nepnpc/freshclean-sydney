import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    title: "End of Lease",
    body: "Our 100% Bond Back Guarantee service. We follow a strict real estate checklist to ensure your property is ready for the final inspection.",
    icon: "🏠",
    featured: true,
  },
  { title: "Deep Cleaning", body: "A bottom-to-top intensive scrub targeting every hidden corner and ingrained grime.", icon: "🧹", featured: false },
  { title: "Residential", body: "Scheduled weekly or fortnightly visits to keep your sanctuary in perfect clinical condition.", icon: "✨", featured: false },
  { title: "Office Cleaning", body: "Boosting productivity with a sanitized, professional workspace tailored to corporate standards.", icon: "🏢", featured: false },
  { title: "Carpet Cleaning", body: "Advanced steam extraction technology to remove deep-seated allergens and stubborn stains.", icon: "🛋️", featured: false },
  { title: "Window Cleaning", body: "Streak-free clarity for both interior and exterior panes, including high-reach areas.", icon: "🪟", featured: false },
  { title: "Commercial", body: "Scalable solutions for retail, hospitality, and large-scale industrial facilities.", icon: "🏪", featured: false },
  { title: "After-Construction", body: "Removing fine dust and debris to turn a construction site into a move-in ready home.", icon: "🔨", featured: false },
  { title: "Airbnb / Holiday", body: "Fast turnaround cleans with high-standard staging for your 5-star guest reviews.", icon: "🏨", featured: false },
  { title: "Spring Cleaning", body: "A total seasonal reset for your home, clearing away the clutter and refreshing every surface.", icon: "🌸", featured: false },
  { title: "Upholstery", body: "Specialized delicate cleaning for sofas, armchairs, and curtains using fabric-safe chemicals.", icon: "🛍️", featured: false },
];

export default function ServicesPage() {
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#F7F9FF] py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#00658D]/10 pointer-events-none" />
          <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#DBEAFE] rounded-full px-4 py-1.5 mb-5">
                <span className="text-xs font-bold text-[#0284C7]" style={{ fontFamily: "var(--font-manrope)" }}>Our Expertise</span>
              </div>
              <h1 className="text-5xl lg:text-[60px] font-extrabold text-[#0F172A] leading-tight mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
                Clinical Grade Cleaning Solutions
              </h1>
              <p className="text-lg text-[#475569] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                From meticulous residential upkeep to large-scale commercial sanitation, we bring medical-grade precision to every corner.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00658D] to-[#004C6B] rounded-3xl h-72 flex items-center justify-center text-8xl hidden md:flex">
              🧽
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-[#F7F9FF]">
          <div className="max-w-[1280px] mx-auto px-6">
            {/* Featured */}
            {featured && (
              <div className="bg-gradient-to-r from-[#00AEEF] to-[#006B5B] rounded-3xl p-10 mb-8 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-white/70 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>Featured Service</span>
                  <h2 className="text-4xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>{featured.title}</h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>{featured.body}</p>
                  <Link href="/get-quote" className="bg-white text-[#00AEEF] px-8 py-3.5 rounded-xl font-bold text-base inline-block hover:shadow-lg transition-all" style={{ fontFamily: "var(--font-inter)" }}>
                    Get a Free Quote
                  </Link>
                </div>
                <div className="text-8xl text-center hidden md:block">{featured.icon}</div>
              </div>
            )}

            {/* Rest of services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((s) => (
                <div key={s.title} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                  <div className="text-4xl">{s.icon}</div>
                  <h3 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-manrope)" }}>{s.title}</h3>
                  <p className="text-sm text-[#475569] flex-1 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{s.body}</p>
                  <Link href="/get-quote" className="text-sm font-bold text-[#0284C7] hover:text-[#00AEEF] transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                    Get a Free Quote →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

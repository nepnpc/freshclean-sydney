"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
);

const relatedPosts = [
  { tag: "TIPS", title: "5 Ways to Maintain a Hotel-Fresh Bathroom Every Day", slug: "hotel-fresh-bathroom" },
  { tag: "AIR QUALITY", title: "Silent Invaders: The Importance of HEPA Filtration in Modern Homes", slug: "hepa-filtration" },
  { tag: "PROCESS", title: "The 48-Point Checklist: What Clinical Cleaning Actually Entails", slug: "clinical-checklist" },
];

export default function BlogPostPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-[#F7F9FF] border-b border-[#E2E8F0]">
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center gap-2 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
            <Link href="/" className="text-[#64748B] hover:text-[#00AEEF]">Home</Link>
            <span className="text-[#94A3B8]">/</span>
            <Link href="/blog" className="text-[#64748B] hover:text-[#00AEEF]">Blog</Link>
            <span className="text-[#94A3B8]">/</span>
            <span className="text-[#0F172A] font-medium">The Clinical Sanctuary</span>
          </div>
        </div>

        {/* Article Header */}
        <section className="bg-[#F7F9FF] py-14">
          <div className="max-w-[1280px] mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl lg:text-[60px] font-extrabold text-[#0F172A] leading-tight mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
              The Clinical Sanctuary: Why Hospital-Grade Clean Matters for Your Home
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748B]" style={{ fontFamily: "var(--font-inter)" }}>
              <span className="font-semibold text-[#0F172A]">FreshClean Experts</span>
              <span className="w-1 h-1 bg-[#CBD5E1] rounded-full" />
              <span>October 24, 2024</span>
              <span className="w-1 h-1 bg-[#CBD5E1] rounded-full" />
              <span>8 min read</span>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <div className="max-w-[1280px] mx-auto px-6 mb-12">
          <div className="bg-gradient-to-br from-[#00AEEF] to-[#006B5B] rounded-3xl h-80 flex items-center justify-center text-8xl">
            🏠
          </div>
        </div>

        {/* Content Layout */}
        <section className="pb-20">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[48px_1fr_300px] gap-8">
            {/* Left — Social Share */}
            <div className="hidden lg:flex flex-col items-center gap-4 pt-8">
              <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>Share</span>
              {[
                { icon: <FacebookIcon />, label: "Facebook" },
                { icon: <TwitterIcon />, label: "Twitter" },
                { icon: <LinkedinIcon />, label: "LinkedIn" },
              ].map((s) => (
                <button key={s.label} aria-label={s.label} className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#475569] hover:text-[#00AEEF] hover:border-[#00AEEF] transition-colors shadow-sm">
                  {s.icon}
                </button>
              ))}
            </div>

            {/* Center — Article Body */}
            <article className="prose max-w-none">
              <p className="text-[#3E4850] text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                <span className="text-5xl font-extrabold text-[#0F172A] float-left mr-2 leading-none" style={{ fontFamily: "var(--font-manrope)" }}>T</span>
                he concept of a &lsquo;clean home&rsquo; has evolved. In an era where health awareness is at an all-time high, the standard sweep-and-mop is no longer sufficient. At FreshClean Sydney, we advocate for the transition from visual cleanliness to biological safety—a philosophy we call The Clinical Sanctuary.
              </p>

              <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>Beyond the Surface: The Science of Sanitization</h2>
              <p className="text-[#3E4850] text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                Hospital-grade cleaning isn&apos;t just about removing dust; it&apos;s about disrupting the microscopic ecosystems that inhabit our shared spaces. Traditional household cleaners often merely redistribute bacteria. Our protocol utilizes EPA-approved, medical-grade disinfectants that achieve a 99.99% microbial reduction without leaving toxic residues.
              </p>

              {/* Callout */}
              <div className="bg-[#EDF4FF] border-l-4 border-[#00AEEF] rounded-r-2xl p-6 my-8">
                <p className="font-bold text-[#0F172A] text-xl mb-3" style={{ fontFamily: "var(--font-manrope)" }}>Did You Know?</p>
                <p className="text-[#475569] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  The average kitchen sponge can harbor more bacteria than a toilet seat. Clinical cleaning focuses on these &ldquo;High-Touch Points&rdquo;—light switches, handles, and remote controls—that are often overlooked in standard cleaning routines.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>Eco-Friendly Precision</h2>
              <p className="text-[#3E4850] text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                A common misconception is that &lsquo;clinical&rsquo; means &lsquo;harsh chemicals.&rsquo; Our Sanctuary approach pairs industrial precision with ecological responsibility:
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  { term: "HEPA-Filtration", def: "Capturing particles as small as 0.3 microns." },
                  { term: "Non-Toxic Agents", def: "Safe for infants, pets, and respiratory-sensitive individuals." },
                  { term: "Color-Coded Protocol", def: "Preventing cross-contamination between zones." },
                ].map((item) => (
                  <li key={item.term} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#00AEEF] rounded-full mt-2 flex-shrink-0" />
                    <p style={{ fontFamily: "var(--font-inter)" }}><strong className="text-[#0F172A]">{item.term}:</strong> <span className="text-[#3E4850]">{item.def}</span></p>
                  </li>
                ))}
              </ul>

              {/* In-content CTA */}
              <div className="bg-gradient-to-r from-[#00AEEF] to-[#006B5B] rounded-2xl p-8 my-8 text-center">
                <h3 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: "var(--font-manrope)" }}>Experience the Sanctuary Difference</h3>
                <p className="text-white/80 mb-5" style={{ fontFamily: "var(--font-inter)" }}>
                  Schedule a clinical consultation for your home and discover the peace of mind that comes with medical-grade hygiene.
                </p>
                <Link href="/get-quote" className="bg-white text-[#00AEEF] px-8 py-3.5 rounded-xl font-bold inline-block hover:shadow-lg transition-all" style={{ fontFamily: "var(--font-inter)" }}>
                  Book Your Sanctuary
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>The Mental Health Connection</h2>
              <p className="text-[#3E4850] text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                Clutter and invisible grime create a &lsquo;cognitive load.&rsquo; When your environment is truly clean—sterile yet inviting—the brain experiences a measurable drop in cortisol levels. This is the ultimate goal of hospital-grade cleaning: to turn your residence into a sanctuary where recovery and relaxation are physically supported by your surroundings.
              </p>
            </article>

            {/* Right Sidebar */}
            <aside className="flex flex-col gap-6">
              {/* Tags */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5">
                <p className="text-sm font-bold text-[#0F172A] mb-3" style={{ fontFamily: "var(--font-manrope)" }}>Post Tags</p>
                <div className="flex flex-wrap gap-2">
                  {["HEALTH", "HYGIENE", "SYDNEY", "LUXURY"].map((tag) => (
                    <span key={tag} className="text-xs font-bold text-[#475569] border border-[#E2E8F0] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-inter)" }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[#00658D] to-[#004C6B] rounded-2xl p-6 text-white">
                <p className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-manrope)" }}>Join Our Newsletter</p>
                <p className="text-white/70 text-sm mb-4" style={{ fontFamily: "var(--font-inter)" }}>Get clinical cleaning tips delivered weekly.</p>
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Your email" className="px-3 py-2.5 rounded-lg text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none" style={{ fontFamily: "var(--font-inter)" }} />
                  <button type="submit" className="bg-[#7CF8DD] text-[#0F172A] px-3 py-2.5 rounded-lg font-bold text-sm hover:bg-white transition-all" style={{ fontFamily: "var(--font-manrope)" }}>Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Posts */}
        <section className="bg-[#F7F9FF] py-16 border-t border-[#D1E4FB]">
          <div className="max-w-[1280px] mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-[#0F172A] mb-8" style={{ fontFamily: "var(--font-manrope)" }}>Recommended Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden hover:shadow-md transition-shadow group block">
                  <div className="relative bg-gradient-to-br from-[#00658D] to-[#004C6B] h-40 flex items-end p-4">
                    <span className="text-[10px] font-extrabold text-white bg-[#00AEEF] px-2.5 py-1 rounded" style={{ fontFamily: "var(--font-inter)" }}>{post.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0F172A] text-base leading-tight group-hover:text-[#00AEEF] transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

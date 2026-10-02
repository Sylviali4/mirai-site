//Footer verse version

import React from 'react';

export default function Home() {
  return (
    // Base container
    <main className="min-h-screen bg-[#EFECE6] text-[#2C2C2E] font-sans relative overflow-x-clip selection:bg-[#8B7EC8] selection:text-white">

      {/* Ambient background blur elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#D3CEE8]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[700px] h-[700px] bg-[#E5DFD5]/80 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#C5BDDF]/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Glassmorphism Navigation Bar */}
      <header className="sticky top-6 z-50 max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white/40 backdrop-blur-2xl border border-white/70 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] px-8 py-4 flex justify-between items-center transition-all duration-300">

          {/* Logo Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-[#1C1C1E]">
                MIRAI
              </span>
            </div>
            <span className="text-[10px] tracking-[0.2em] text-[#8E8E93] uppercase font-medium">
              Financial Solutions, LLC
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-[#636366]">
            <a href="#services" className="hover:text-[#1C1C1E] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#1C1C1E] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#1C1C1E] transition-colors">Contact</a>
          </nav>

          {/* Pill Button */}
          <a
            href="#contact"
            className="text-xs bg-[#1C1C1E] hover:bg-[#3A3A3C] text-white font-medium px-6 py-2.5 rounded-full shadow-sm transition-all duration-300"
          >
            Consultation
          </a>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 space-y-28 relative z-10 pt-4">

        {/* Hero Section */}
        <section className="max-w-3xl pt-2">
          {/* Tag element */}
          <div className="inline-flex items-center gap-2.5 bg-white/50 backdrop-blur-md border border-white/80 text-[#48484A] text-xs px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B7EC8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B5DA8]"></span>
            </span>
            <span className="font-medium tracking-wide">Next-Gen Bookkeeping & Financial Intelligence</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-[#1C1C1E]">
            Clarity in Numbers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B5DA8] via-[#8B7EC8] to-[#4A3E85]">
              Confidence in Growth.
            </span>
          </h1>

          <p className="text-[#636366] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl font-normal">
            At Mirai Financial Solutions, LLC, we combine precision bookkeeping with modern financial insights, empowering your business to navigate the future with confidence.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="relative group overflow-hidden bg-gradient-to-r from-[#7A6BB9] to-[#5C4D9A] text-white font-medium px-8 py-4 rounded-2xl transition-all shadow-md shadow-[#7A6BB9]/20 hover:shadow-lg hover:shadow-[#7A6BB9]/30 text-center"
            >
              <span className="relative z-10">Get Free Financial Assessment</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#services"
              className="bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/80 text-[#2C2C2E] font-medium px-8 py-4 rounded-2xl text-center transition-all shadow-sm"
            >
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="pt-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] tracking-tight mb-3">
              Our Core Solutions
            </h2>
            <p className="text-[#8E8E93] text-sm max-w-xl">
              Precision-driven financial and bookkeeping services engineered for modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-[#8B7EC8]/90 to-[#6B5DA8] backdrop-blur-2xl rounded-3xl p-8 border border-white/40 text-white shadow-[0_10px_30px_rgba(107,93,168,0.15)] hover:shadow-[0_15px_35px_rgba(107,93,168,0.25)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-mono font-bold text-sm mb-6 border border-white/30">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Full-Charge Bookkeeping
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Daily transaction categorization, precise bank reconciliations, and audit-ready ledger management powered by clean workflows.
              </p>
            </div>

            <div className="group relative bg-white/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#8B7EC8]/10 rounded-2xl flex items-center justify-center text-[#6B5DA8] font-mono font-bold text-sm mb-6 border border-[#8B7EC8]/20 group-hover:scale-105 transition-transform">
                02
              </div>
              <h3 className="text-lg font-bold text-[#1C1C1E] mb-3 group-hover:text-[#6B5DA8] transition-colors">
                Financial Reporting
              </h3>
              <p className="text-[#636366] text-sm leading-relaxed">
                Real-time Income Statements, Balance Sheets, and Cash Flow metrics structured to give you absolute clarity for decisions.
              </p>
            </div>

            <div className="group relative bg-white/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#8B7EC8]/10 rounded-2xl flex items-center justify-center text-[#6B5DA8] font-mono font-bold text-sm mb-6 border border-[#8B7EC8]/20 group-hover:scale-105 transition-transform">
                03
              </div>
              <h3 className="text-lg font-bold text-[#1C1C1E] mb-3 group-hover:text-[#6B5DA8] transition-colors">
                Payroll & Advisory
              </h3>
              <p className="text-[#636366] text-sm leading-relaxed">
                Seamless payroll execution and strategic advisory to minimize tax compliance burdens and optimize profitability.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="pt-8 pb-12">
          <div className="bg-white/30 backdrop-blur-3xl rounded-[2.5rem] p-8 sm:p-12 border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] tracking-tight mb-4">
                  Shape Your Financial Future.
                </h2>
                <p className="text-[#636366] text-sm sm:text-base leading-relaxed mb-8">
                  Schedule a 30-minute introductory session with our team. We will review your existing books and map out a streamlined solution for Mirai Financial Solutions.
                </p>

                <div className="space-y-3 text-xs text-[#636366] bg-white/50 backdrop-blur-md p-5 rounded-2xl border border-white/80 inline-block font-mono shadow-sm">
                  <p><span className="text-[#8E8E93]">Contact Us</span></p>
                  <p><span className="text-[#8E8E93]">EMAIL:</span> <strong className="text-[#1C1C1E]">advisor@miraifinancialsolutions.com</strong></p>
                </div>
              </div>

              {/* Glass Input Form Container */}
              <form className="bg-white/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/90 shadow-sm space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#48484A] mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-white/60 border border-white/80 rounded-2xl px-4 py-3 text-sm text-[#1C1C1E] placeholder:text-[#A1A1A6] focus:outline-none focus:ring-2 focus:ring-[#8B7EC8]/40 focus:border-[#8B7EC8] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#48484A] mb-2">Work Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full bg-white/60 border border-white/80 rounded-2xl px-4 py-3 text-sm text-[#1C1C1E] placeholder:text-[#A1A1A6] focus:outline-none focus:ring-2 focus:ring-[#8B7EC8]/40 focus:border-[#8B7EC8] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#48484A] mb-2">How can we support you?</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your company size and current bookkeeping setup..."
                    className="w-full bg-white/60 border border-white/80 rounded-2xl px-4 py-3 text-sm text-[#1C1C1E] placeholder:text-[#A1A1A6] focus:outline-none focus:ring-2 focus:ring-[#8B7EC8]/40 focus:border-[#8B7EC8] focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-[#1C1C1E] hover:bg-[#3A3A3C] text-white font-medium py-3.5 rounded-full text-sm transition-all duration-300 shadow-sm"
                >
                  Send Consultation Request
                </button>
              </form>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="mt-16 py-12 max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Bible Verse */}
        <div className="max-w-xl mx-auto mb-6">
          <p className="text-xs sm:text-sm italic text-[#636366] font-serif tracking-wide leading-relaxed">
            &ldquo;For I know the plans I have for you,&rdquo; declares the Lord, &ldquo;plans to prosper you and not to harm you, plans to give you hope and a future.&rdquo;
          </p>
          <span className="block mt-2 text-[10px] font-mono tracking-[0.2em] text-[#8B7EC8] uppercase">
            — Jeremiah 29:11
          </span>
        </div>

        {/* Copyright Information */}
        <div className="border-t border-[#E5E0D8] py-8 text-center text-xs text-[#8E8E93] max-w-7xl mx-auto px-6 relative z-10 font-mono">
          © {new Date().getFullYear()} Mirai Financial Solutions, LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
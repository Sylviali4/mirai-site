import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10 md:px-20 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-slate-800 pb-6 mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-widest text-white">
            MIRAI <span className="text-blue-500">FINANCIAL </span>
          </span>
          <span className="text-[10px] tracking-widest text-slate-400 uppercase">
            Solutions, LLC
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded border border-slate-700 transition-all"
        >
          Consultation
        </a>
      </header>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Main Banner */}
        <section className="max-w-3xl pt-8">
          <div className="inline-block bg-blue-950/60 border border-blue-800 text-blue-400 text-xs px-3 py-1 rounded-full mb-6 font-mono">
            Bookkeeping & Financial Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white">
            Clarity in Numbers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Confidence in Growth.
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
            At Mirai Financial Solutions, LLC, we deliver accurate bookkeeping and tailored financial insights so you can focus on scaling your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded text-center transition-colors shadow-lg shadow-blue-900/20"
            >
              Get Free Financial Assessment
            </a>
            <a
              href="#services"
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium px-6 py-3 rounded text-center transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="pt-12 border-t border-slate-800/80">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Our Core Services</h2>
            <p className="text-slate-400 text-sm">Comprehensive bookkeeping & accounting support tailored for growing enterprises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900/60 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 bg-blue-950 rounded flex items-center justify-center text-blue-400 font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Full-Charge Bookkeeping</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Daily transaction categorization, bank reconciliations, and clean ledger management to keep your books audit-ready.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 bg-blue-950 rounded flex items-center justify-center text-blue-400 font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Financial Reporting</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Clear Balance Sheets, P&L statements, and Cash Flow insights delivered monthly to guide strategic decisions.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 bg-blue-950 rounded flex items-center justify-center text-blue-400 font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Payroll & Advisory</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Streamlined payroll processing and customized financial advisory to optimize tax-readiness and profitability.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="pt-12 border-t border-slate-800/80 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Finances?</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Send us a message to schedule a 30-minute consultation. We will discuss your current setup and how Mirai Financial Solutions can help.
              </p>
              <div className="space-y-3 text-xs text-slate-400">
                <p><strong className="text-slate-200">Company:</strong> Mirai Financial Solutions, LLC</p>
                <p><strong className="text-slate-200">Email:</strong> contact@miraifinancial.com</p>
              </div>
            </div>

            {/* Contact Form Structure */}
            <form className="bg-slate-900 p-6 rounded-lg border border-slate-800 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Work Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">How can we help?</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your business or bookkeeping needs..."
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded text-sm transition-colors"
              >
                Send Request
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-900 pt-8 mt-20 text-center text-xs text-slate-600 max-w-7xl mx-auto">
        © {new Date().getFullYear()} Mirai Financial Solutions, LLC. All rights reserved.
      </footer>
    </main>
  );
}
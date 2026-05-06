export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Invoice Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Which Invoices<br />
          <span className="text-[#58a6ff]">Will Be Paid Late</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop chasing payments blindly. Our tracker analyzes client behavior and payment history to give you confidence scores before an invoice goes overdue.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">94%</div>
            <div className="text-sm text-[#8b949e]">Prediction accuracy on late payments</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">3x</div>
            <div className="text-sm text-[#8b949e]">Faster follow-up on at-risk invoices</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">$0</div>
            <div className="text-sm text-[#8b949e]">Lost to late fees with proactive alerts</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Unlimited invoice tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> AI confidence scores per invoice</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Client payment behavior profiles</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Email alerts for at-risk invoices</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> CSV import &amp; export</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the prediction work?</h3>
            <p className="text-sm text-[#8b949e]">We analyze your historical invoice data — payment timing, client patterns, invoice size, and seasonality — to generate a confidence score indicating the likelihood of a late payment before the due date arrives.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need to connect my accounting software?</h3>
            <p className="text-sm text-[#8b949e]">No integrations required to start. You can import invoices via CSV or enter them manually. Native integrations with QuickBooks and FreshBooks are on the roadmap.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel anytime from your account dashboard with no penalties or hidden fees. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const faqs = [
  {
    q: 'How does the Clienteling Revenue Audit work?',
    a: 'After you book, I set up a 30-minute discovery call to understand your business, your client base, and your current systems. You share access to whatever client data you have — CRM exports, POS reports, spreadsheets, or even associate notes. Within two weeks, you receive a written audit with a Clienteling Scorecard, a Revenue Opportunity Analysis, a VIP and dormant client review, a 90-day action plan, and ready-to-use outreach templates. We walk through it together on a follow-up call.',
  },
  {
    q: 'What do you need from us to get started?',
    a: 'For the audit, I need whatever client data you can provide — even if it is messy or incomplete. Common sources include your POS or CRM export, a client list with purchase history, and any notes your team keeps on key clients. If your data is fragmented, that is exactly what I help you identify and fix. You do not need a polished database to begin.',
  },
  {
    q: 'Is the fractional director engagement month-to-month?',
    a: 'Yes. The fractional Clienteling Director engagement runs on a month-to-month basis with no long-term contract. I recommend a minimum of three months to see meaningful results, but you can adjust scope or pause with 30 days notice. Pricing scales with the depth of involvement — from monthly performance reviews at the entry level to weekly strategic leadership at the higher end.',
  },
  {
    q: 'What industries do you work with?',
    a: 'I work with relationship-driven businesses where the customer lifetime value is high and personal service matters: fashion, jewelry, watches, automotive dealerships, interior design firms, real estate brokerages, plastic surgery and aesthetic practices, hospitality and private member services, yacht and aviation brokers, and bakeries and restaurants. If your revenue depends on repeat purchases, referrals, or long-term client relationships, the Magnolia Loop Method applies.',
  },
  {
    q: 'What if we do not have a CRM or client database?',
    a: 'That is common and completely fine. Most businesses I speak with start with scattered spreadsheets, POS exports, or knowledge that lives only in their team\'s memory. Part of the audit includes recommending a lightweight clienteling setup that your team can actually maintain — whether that means configuring a simple CRM, building a structured spreadsheet, or improving an existing system.',
  },
  {
    q: 'How quickly can we expect to see results?',
    a: 'The 90-day action plan is built so your team can act on the highest-value opportunities first. How quickly revenue follows depends on your client base size, how quickly your team adopts the outreach cadence, and the dormancy level of your existing relationships. The fractional director engagement compounds these results over time through monthly accountability and refinement.',
  },
  {
    q: 'Do you work with businesses outside the luxury sector?',
    a: 'The Magnolia Loop Method is built for businesses where relationships drive revenue, which extends beyond traditional luxury — to bakeries and restaurants with loyal regulars, professional services, and boutique hospitality. If you are unsure whether it fits, book a consultation and I will tell you honestly whether I can help.',
  },
  {
    q: 'What happens after the audit?',
    a: 'The audit is designed to be actionable on its own — you can implement the 90-day plan with their own team. If you want ongoing strategic leadership, the natural next step is the fractional Clienteling Director engagement, where I provide monthly accountability, performance reviews, and continued refinement. There is no obligation to continue; the audit stands alone as a complete deliverable.',
  },
];

export function FAQ() {
  const { openModal } = useModal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bone py-[112px] md:py-[128px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mb-[64px] grid grid-cols-1 items-end gap-[40px] md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
              <span className="h-px w-8 bg-current" />
              Questions
            </div>
            <h2 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
              Before you ask.
            </h2>
          </div>
          <p className="max-w-[480px] text-[15px] leading-[1.8] text-ink/72">
            The most common questions I hear from founders and operators considering the audit
            or the fractional director engagement. If yours is not here, reach out and I will
            answer it directly.
          </p>
        </div>

        <div className="mx-auto max-w-[920px]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-t border-ink/12 last:border-b"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-[24px] text-left transition-colors duration-200 hover:text-brass"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-[clamp(20px,2.4vw,28px)] leading-[1.2] tracking-[-0.02em]">
                    {faq.q}
                  </span>
                  <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-ink/15 transition-colors duration-200">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-brass" />
                    ) : (
                      <Plus className="h-4 w-4 text-ink/50" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[760px] pb-[28px] text-[15px] leading-[1.85] text-ink/62">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-[56px] flex max-w-[920px] flex-col items-start gap-[20px] rounded-[24px] border border-ink/8 bg-parchment/30 p-[32px] md:p-[40px] md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.02em] text-ink">
              Still have a question?
            </h3>
            <p className="mt-[10px] max-w-[420px] text-[15px] leading-[1.7] text-ink/70">
              I am happy to answer anything specific to your business. No pressure, no sales pitch.
            </p>
          </div>
          <button
            onClick={() => openModal('FAQ — Ask a Question')}
            className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-full bg-ink px-[26px] text-[12px] font-bold uppercase tracking-nav text-bone shadow-[0_8px_24px_rgba(7,22,51,0.14)] transition hover:-translate-y-px hover:bg-green"
          >
            Ask a Question →
          </button>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ArrowRight, ArrowLeft, TrendingUp, Users, Target, Clock } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const caseStudies = [
  {
    id: 'dormant-reactivation',
    industry: 'Luxury Jewelry',
    image: 'https://images.pexels.com/photos/28146843/pexels-photo-28146843.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    imageAlt: 'Luxury jewelry elegantly displayed in a store setting',
    title: 'Reactivating a decade of dormant client relationships',
    summary:
      'A heritage jewelry house had thousands of client records accumulated over 10+ years, with no system to act on them. The Magnolia Loop audit identified dormant high-value clients and built a 90-day reactivation plan.',
    challenge:
      'Client data was fragmented across spreadsheets, POS exports, and individual associate notes. There was no centralized record, no segmentation by potential, and no consistent outreach cadence. High-value clients who had not purchased in 2+ years were effectively invisible.',
    approach:
      'We conducted a full Clienteling Revenue Audit, consolidating client records into a single living database. Clients were segmented by recency, frequency, and estimated lifetime value. A tiered outreach calendar was built, pairing personalized touchpoints with specific moments — anniversaries of significant purchases, birthdays, and new collection launches.',
    results: [
      { icon: TrendingUp, value: '$1.2M', label: 'Revenue recovered from reactivated clients in the first 90 days' },
      { icon: Users, value: '142', label: 'Dormant clients re-engaged with personalized outreach' },
      { icon: Clock, value: '90 days', label: 'From audit delivery to first measurable revenue lift' },
    ],
    quote:
      'We knew these clients by name but had lost touch over the years. Magnolia Loop gave us a system to reach back out without feeling transactional.',
    quoteAuthor: 'Director of Client Experience',
  },
  {
    id: 'vip-segmentation',
    industry: 'Heritage Fashion',
    image: 'https://images.pexels.com/photos/8387126/pexels-photo-8387126.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    imageAlt: 'Two women exploring fashion in a stylish boutique together',
    title: 'Turning VIP service into a measurable revenue system',
    summary:
      'A multi-location fashion brand relied on individual associate relationships with top clients but had no way to scale that knowledge or measure its impact on revenue.',
    challenge:
      'VIP clients were served well by the associates who knew them, but that knowledge lived in memory. When associates left, relationships were lost. There was no VIP segmentation framework, no shared client profiles, and no accountability for outreach consistency.',
    approach:
      'We deployed a fractional clienteling director to build a VIP segmentation model based on spend, frequency, and relationship depth. Shared client profiles were created with preference notes, purchase history, and recommended next actions. Monthly KPIs were introduced to hold associates accountable for outreach quality, not just sales volume.',
    results: [
      { icon: TrendingUp, value: '38%', label: 'Increase in VIP client reactivation rate' },
      { icon: Target, value: '3x', label: 'Improvement in outreach-to-appointment conversion' },
      { icon: Users, value: '85%', label: 'VIP client profile completion across all locations' },
    ],
    quote:
      'The fractional director gave us executive-level clienteling leadership without the full-time cost. Our associates now have a system, not just instincts.',
    quoteAuthor: 'VP of Retail',
  },
  {
    id: 'boutique-growth',
    industry: 'Fine Watches',
    image: 'https://images.pexels.com/photos/28697832/pexels-photo-28697832.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    imageAlt: 'Collection of luxury watches displayed in a retail environment',
    title: 'Building a clienteling system from scratch for a growing boutique',
    summary:
      'An independent fine watches boutique was expanding rapidly but had no clienteling infrastructure. Every sale was a one-off with no follow-up system to drive repeat business.',
    challenge:
      'The boutique had strong product knowledge and personal service, but no CRM, no client profiles, and no outreach process. Growth was coming from new foot traffic, not from the clients they had already served. Retention was dropping as volume increased.',
    approach:
      'Starting with a Clienteling Revenue Audit, we mapped the full client journey from first visit to post-purchase follow-up. We designed a lightweight clienteling system the small team could maintain, including a client profile template, a 30-60-90 day follow-up cadence, and a simple VIP tiering system. The fractional director provided monthly accountability reviews.',
    results: [
      { icon: TrendingUp, value: '$680K', label: 'Additional revenue from follow-up outreach in year one' },
      { icon: Clock, value: '60 days', label: 'From system launch to first reactivated-client purchase' },
      { icon: Target, value: '94%', label: 'Client profile completion within 90 days of launch' },
    ],
    quote:
      'We were growing so fast we forgot to look after the people who got us here. Magnolia Loop built a system our team actually uses every day.',
    quoteAuthor: 'General Manager',
  },
];

export function CaseStudies() {
  const { openModal } = useModal();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = caseStudies[activeIndex];

  return (
    <section className="bg-bone py-[80px] md:py-[120px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mb-[56px]">
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
            <span className="h-px w-8 bg-current" />
            Case Studies
          </div>
          <h1 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
            How relationships become revenue.
          </h1>
          <p className="mt-[20px] max-w-[640px] text-[15px] leading-[1.8] text-ink/70">
            Real engagements with luxury and relationship-driven businesses. Each case study walks
            through the challenge, our approach, and the measurable outcomes.
          </p>
        </div>

        <div className="mb-[48px] flex flex-wrap gap-[12px]">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActiveIndex(i)}
              aria-pressed={i === activeIndex}
              className={`rounded-full border px-[20px] py-[10px] text-[12px] font-bold uppercase tracking-nav transition-all duration-200 ${
                i === activeIndex
                  ? 'border-ink bg-ink text-bone'
                  : 'border-ink/20 text-ink/70 hover:border-ink/40 hover:text-ink'
              }`}
            >
              {cs.industry}
            </button>
          ))}
        </div>

        <article
          key={active.id}
          aria-live="polite"
          className="animate-[fadeIn_0.4s_ease-out] overflow-hidden rounded-[32px] border border-ink/8 bg-parchment/30"
        >
          <div className="relative h-[260px] overflow-hidden md:h-[340px]">
            <img
              src={active.image}
              alt={active.imageAlt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-parchment/95 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-[32px] md:p-[48px]">
              <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-brass">
                <span className="h-px w-8 bg-current" />
                {active.industry}
              </div>
              <h2 className="mt-[14px] max-w-[760px] font-serif text-[clamp(28px,3.5vw,48px)] leading-[1.05] tracking-[-0.03em] text-bone">
                {active.title}
              </h2>
            </div>
          </div>

          <div className="p-[32px] md:p-[48px]">
            <p className="max-w-[760px] text-[15px] leading-[1.85] text-ink/75">
              {active.summary}
            </p>

            <div className="mt-[48px] grid grid-cols-1 gap-[40px] lg:grid-cols-[1fr_1fr]">
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-eyebrow text-green">
                  The Challenge
                </h3>
                <p className="mt-[16px] text-[15px] leading-[1.85] text-ink/72">
                  {active.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-eyebrow text-green">
                  Our Approach
                </h3>
                <p className="mt-[16px] text-[15px] leading-[1.85] text-ink/72">
                  {active.approach}
                </p>
              </div>
            </div>

            <div className="mt-[48px] rounded-[24px] bg-ink p-[32px] md:p-[40px]">
              <h3 className="text-[12px] font-bold uppercase tracking-eyebrow text-brass">
                Results
              </h3>
              <div className="mt-[28px] grid grid-cols-1 gap-[28px] sm:grid-cols-3">
                {active.results.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <div key={i}>
                      <Icon className="h-6 w-6 text-brass/60" />
                      <div className="mt-[14px] font-serif text-[clamp(36px,4vw,48px)] leading-none tracking-[-0.03em] text-bone">
                        {r.value}
                      </div>
                      <p className="mt-[12px] text-[14px] leading-[1.6] text-bone/70">
                        {r.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <blockquote className="mt-[36px] border-l-2 border-brass pl-[24px] font-serif text-[clamp(22px,2.5vw,30px)] leading-[1.2] tracking-[-0.02em] text-parchment">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <div className="mt-[16px] text-[12px] font-bold uppercase tracking-nav text-bone/65">
                {active.quoteAuthor}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-[48px] flex items-center justify-between">
          <div className="flex gap-[10px]">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Case study ${i + 1}`}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-[32px] bg-ink' : 'w-[6px] bg-ink/20 hover:bg-ink/40'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-[10px]">
            <button
              onClick={() => setActiveIndex((i) => (i - 1 + caseStudies.length) % caseStudies.length)}
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-ink/20 text-ink/60 transition hover:border-ink/40 hover:text-ink"
              aria-label="Previous case study"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveIndex((i) => (i + 1) % caseStudies.length)}
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-ink/20 text-ink/60 transition hover:border-ink/40 hover:text-ink"
              aria-label="Next case study"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-[64px] rounded-[24px] border border-ink/10 bg-parchment/40 p-[36px] text-center md:p-[48px]">
          <h2 className="mx-auto max-w-[680px] font-serif text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.03em] text-ink">
            Want results like these?
          </h2>
          <p className="mx-auto mt-[16px] max-w-[520px] text-[15px] leading-[1.8] text-ink/70">
            Start with a $995 Clienteling Revenue Audit and find the revenue already in your client book.
          </p>
          <button
            onClick={() => openModal('Case Studies — Book the Audit')}
            className="mt-[28px] inline-flex min-h-[52px] items-center justify-center rounded-full bg-ink px-[26px] text-[12px] font-bold uppercase tracking-nav text-bone shadow-[0_12px_26px_rgba(7,22,51,0.16)] transition hover:-translate-y-px hover:bg-green"
          >
            Book the $995 Audit →
          </button>
        </div>
      </div>
    </section>
  );
}

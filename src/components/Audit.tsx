import { Check } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const features = [
  'Clienteling Scorecard',
  'Revenue Opportunity Analysis',
  'VIP & Dormant Client Review',
  '90-Day Action Plan',
  'Outreach Templates',
];

const timeline = [
  {
    duration: 'Day 1',
    title: 'You book the audit',
    desc: 'After booking, you receive a short intake form and a link to schedule your 30-minute discovery call at a time that works for you.',
  },
  {
    duration: 'Days 2–7',
    title: 'Discovery call',
    desc: 'We discuss your business, your client base, and your current systems. You share whatever client data you have — even if it is messy or incomplete.',
  },
  {
    duration: 'Days 8–14',
    title: 'Audit delivered',
    desc: 'Within two weeks you receive the full written audit: scorecard, opportunity analysis, VIP review, 90-day action plan, and outreach templates.',
  },
  {
    duration: 'Day 15+',
    title: 'Walkthrough & next steps',
    desc: 'We walk through the findings together on a follow-up call. You implement the plan with your team, or continue with the fractional director.',
  },
];

export function Audit() {
  const { openModal } = useModal();

  return (
    <section id="audit" className="bg-parchment/55 py-[128px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="grid grid-cols-1 items-start gap-[84px] md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
            <span className="h-px w-8 bg-current" />
            Flagship Engagement
          </div>
          <h2 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
            Clienteling Revenue Audit
          </h2>
          <p className="mt-[22px] max-w-[560px] text-[15px] leading-[1.85] text-ink/72">
            A focused assessment that reveals missed relationship-driven revenue and turns the findings
            into a clear 90-day action plan.
          </p>
        </div>

        <article className="rounded-[30px] border border-ink/8 bg-bone p-[38px] shadow-[0_24px_70px_rgba(7,22,51,0.1)] transition-transform duration-300 hover:-translate-y-1">
          <div className="text-[12px] font-bold uppercase tracking-nav text-brass">Fixed investment</div>
          <div className="my-[10px] font-serif text-[72px] leading-none">$995</div>
          <p className="mb-[22px] max-w-[300px] text-[13px] leading-[1.6] text-ink/65">
            A complete revenue opportunity review, delivered within two weeks, with a plan your team can use immediately.
          </p>
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 border-t border-ink/16 py-4 text-[14px]"
            >
              <Check className="h-4 w-4 shrink-0 text-green" />
              {feature}
            </div>
          ))}
          <p className="mt-[18px] text-center text-[11px] uppercase tracking-nav text-ink/55">
            Best for owners and leaders with an existing client book
          </p>
          <button
            onClick={() => openModal('Book the Audit')}
            className="mt-[14px] min-h-[52px] w-full rounded-full bg-ink text-[12px] font-bold uppercase tracking-nav text-bone transition hover:-translate-y-px hover:bg-green"
          >
            Book the Audit →
          </button>
        </article>
        </div>

        <div className="mt-[72px]">
        <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
          <span className="h-px w-8 bg-current" />
          What Happens Next
        </div>
        <h3 className="mt-[18px] font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.05] tracking-[-0.03em] text-ink">
          From booking to your first revenue lift.
        </h3>

        <div className="mt-[44px] grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((step, i) => (
            <div key={i} className="bg-bone p-[28px] md:p-[32px]">
              <div className="flex items-center gap-3">
                <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-ink text-[12px] font-bold text-bone">
                  {i + 1}
                </span>
                <span className="text-[12px] font-bold uppercase tracking-nav text-brass">
                  {step.duration}
                </span>
              </div>
              <h4 className="mt-[18px] font-serif text-[20px] leading-[1.15] tracking-[-0.02em] text-ink">
                {step.title}
              </h4>
              <p className="mt-[10px] text-[14px] leading-[1.7] text-ink/72">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

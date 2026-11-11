import { Check } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { foundingOffer } from '@/lib/foundingOffer';

const features = [
  'Monthly performance reviews',
  'VIP opportunity identification',
  'Client reactivation analysis',
  'Associate KPI and accountability reviews',
  'Outreach calendar planning',
  'Manager consultation',
  'Quarterly revenue assessments',
];

export function Fractional() {
  const { openModal } = useModal();

  return (
    <section id="fractional" className="bg-parchment py-[128px] text-ink">
      <div className="mx-auto grid w-full max-w-site grid-cols-1 items-center gap-[84px] px-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-brass">
            <span className="h-px w-8 bg-current" />
            Ongoing Leadership
          </div>
          <h2 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
            Fractional Clienteling Director
          </h2>
          <p className="mt-[28px] font-serif text-[25px] text-green">Your outsourced clienteling department.</p>
          <p className="mt-[14px] max-w-[570px] text-[15px] leading-[1.85] text-ink/72">
            For luxury businesses that need strategic clienteling leadership, opportunity analysis and
            accountability—without adding a full-time executive.
          </p>
          <button
            onClick={() => openModal('Fractional — Schedule a Strategy Call')}
            className="mt-[29px] inline-flex min-h-[52px] items-center justify-center rounded-full border border-ink/30 bg-transparent px-[24px] text-[12px] font-bold uppercase tracking-nav text-ink transition hover:bg-ink hover:text-bone"
          >
            Schedule a Strategy Call →
          </button>
        </div>

        <article className="rounded-[30px] border border-ink/8 bg-ink p-[38px] text-bone shadow-[0_24px_70px_rgba(7,22,51,0.18)]">
          <div className="text-[12px] font-bold uppercase tracking-nav text-brass">Starting at</div>
          <div className="my-[10px] font-serif text-[58px] leading-none">
            $1,500<span className="text-[24px]">/mo</span>
          </div>
          <div className="mb-[22px] border-t border-bone/12 pt-[18px] text-[13px] leading-[1.7] text-bone/75">
            <span className="font-bold text-brass">Founding client rate after your audit:</span>{' '}
            {foundingOffer.fractionalFoundingPrice}/month, fixed for your first{' '}
            {foundingOffer.fractionalRateLockMonths} months. Initial{' '}
            {foundingOffer.fractionalInitialTermMonths}-month engagement; scope agreed before work begins.
          </div>
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 border-t border-bone/12 py-4 text-[14px] text-bone/78"
            >
              <Check className="h-4 w-4 shrink-0 text-brass" />
              {feature}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

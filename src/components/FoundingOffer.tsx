import { Check, ArrowRight } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { foundingOffer as offer } from '@/lib/foundingOffer';

const youReceive = [
  'The complete Clienteling Revenue Audit — scorecard, opportunity analysis, VIP review, 90-day plan and outreach templates',
  'Founding pricing on the audit',
  'A 30-day implementation check-in after delivery',
  'Direct access to me throughout the engagement',
  'Founding rate locked in if you continue with the fractional director',
];

const iAsk = [
  'Candid feedback on the audit and the process',
  'Permission to share measured results as a case study — anonymized if you prefer',
  'A short testimonial, only if the work earned one',
];

export function FoundingOffer() {
  const { openModal } = useModal();
  const isFull = offer.spotsRemaining <= 0;

  return (
    <section id="founding-client" className="bg-bone py-[112px] md:py-[128px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="grid grid-cols-1 items-start gap-[64px] lg:grid-cols-[1.25fr_0.75fr] lg:gap-[84px]">
          <div>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-brass">
              <span className="h-px w-8 bg-current" />
              Founding Clients
            </div>
            <h2 className="mt-[22px] max-w-[820px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
              Now accepting {offer.totalSpots} founding clients.
            </h2>

            <div className="mt-[38px] max-w-[680px] space-y-[20px] text-[15px] leading-[1.85] text-ink/75">
              <p>
                Magnolia Loop is new, and I would rather tell you that plainly than pretend otherwise. I am
                looking for a small number of relationship-driven businesses to work with closely as the
                method's first clients.
              </p>
              <p>
                You get the full audit at founding pricing and more of my time than any later engagement
                will include. In return, I ask for honest feedback and the chance to document what the
                work actually achieves.
              </p>
            </div>

            <div className="mt-[56px] grid grid-cols-1 gap-[40px] border-t border-ink/12 pt-[36px] sm:grid-cols-2">
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-nav text-green">What you receive</h3>
                <ul className="mt-[18px] space-y-[14px]">
                  {youReceive.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-[1.65] text-ink/78">
                      <Check className="mt-[3px] h-4 w-4 shrink-0 text-brass" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-nav text-green">What I ask in return</h3>
                <ul className="mt-[18px] space-y-[14px]">
                  {iAsk.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-[1.65] text-ink/78">
                      <span className="mt-[11px] h-px w-3 shrink-0 bg-brass" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="rounded-[30px] bg-ink p-[38px] text-bone shadow-[0_24px_70px_rgba(7,22,51,0.18)] lg:sticky lg:top-[122px]">
            <div className="flex items-center justify-between text-[12px] font-bold uppercase tracking-nav">
              <span className="text-brass">Founding audit</span>
              <span className="text-bone/60">
                {isFull ? 'Spots filled' : `${offer.spotsRemaining} of ${offer.totalSpots} open`}
              </span>
            </div>

            <div className="mt-[18px] flex gap-[6px]" aria-hidden="true">
              {Array.from({ length: offer.totalSpots }, (_, i) => (
                <span
                  key={i}
                  className={`h-[4px] flex-1 rounded-full ${
                    i < offer.totalSpots - offer.spotsRemaining ? 'bg-bone/20' : 'bg-brass'
                  }`}
                />
              ))}
            </div>

            <div className="mt-[30px] flex items-baseline gap-4">
              <span className="font-serif text-[72px] leading-none">{offer.foundingPrice}</span>
              <span className="text-[18px] text-bone/45 line-through">{offer.standardPrice}</span>
            </div>
            <p className="mt-[14px] text-[13px] leading-[1.6] text-bone/65">
              Same deliverables as the standard audit, delivered within two weeks. Founding pricing ends
              when the spots are filled.
            </p>

            <button
              onClick={() => openModal(isFull ? 'Founding Client — Waitlist' : 'Founding Client — Apply')}
              className="mt-[28px] inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-brass px-[25px] text-[12px] font-bold uppercase tracking-nav text-ink shadow-[0_12px_26px_rgba(183,121,10,0.28)] transition hover:-translate-y-px hover:bg-parchment"
            >
              {isFull ? 'Join the Waitlist' : 'Apply for a Founding Spot'}
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-[16px] text-center text-[11px] uppercase tracking-nav text-bone/50">
              Best fit: an existing client book worth reactivating
            </p>

            <div className="mt-[30px] border-t border-bone/12 pt-[22px]">
              <p className="font-serif text-[18px] leading-[1.3] text-parchment">
                “I will personally lead every founding engagement.”
              </p>
              <p className="mt-[10px] text-[12px] font-bold uppercase tracking-nav text-bone/60">
                Seth Coit · Founder
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

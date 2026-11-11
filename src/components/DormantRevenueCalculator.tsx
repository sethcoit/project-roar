import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { supabase } from '@/lib/supabase';

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const count = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

const toNumber = (value: string) => {
  const n = Number(value.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
};

export function DormantRevenueCalculator() {
  const { openModal } = useModal();
  const [clients, setClients] = useState('1500');
  const [inactivePct, setInactivePct] = useState(40);
  const [orderValue, setOrderValue] = useState('800');
  const [reactivationPct, setReactivationPct] = useState(5);
  const [email, setEmail] = useState('');
  const [followUpConsent, setFollowUpConsent] = useState(false);
  const [captureStatus, setCaptureStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const dormant = Math.round(toNumber(clients) * (inactivePct / 100));
  const reactivated = Math.round(dormant * (reactivationPct / 100));
  const estimate = reactivated * toNumber(orderValue);

  async function handleFollowUpSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!followUpConsent || captureStatus === 'loading') return;

    setCaptureStatus('loading');
    const { error } = await supabase.from('calculator_leads').insert({
      email: email.trim(),
      client_count: toNumber(clients),
      inactive_client_percentage: inactivePct,
      average_order_value: toNumber(orderValue),
      reactivation_percentage: reactivationPct,
      estimated_opportunity: estimate,
      follow_up_consent: followUpConsent,
    });

    if (error) {
      setCaptureStatus('error');
      return;
    }

    setCaptureStatus('success');
    setEmail('');
  }

  const inputClass =
    'w-full border-b border-ink/22 bg-transparent pb-[9px] font-serif text-[28px] leading-none tracking-[-0.02em] outline-none transition focus:border-green';
  const labelClass = 'mb-[10px] flex items-baseline justify-between text-[12px] font-bold uppercase tracking-nav text-green';

  return (
    <section id="calculator" className="border-b border-ink/10 bg-parchment/45 py-[112px] md:py-[128px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mb-[56px] grid grid-cols-1 items-end gap-[40px] md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
              <span className="h-px w-8 bg-current" />
              Dormant Revenue Calculator
            </div>
            <h2 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
              What is sitting in your book?
            </h2>
          </div>
          <p className="max-w-[480px] text-[15px] leading-[1.8] text-ink/72">
            Enter rough numbers for your business. This is a simple estimate of what bringing back a small
            share of inactive clients could be worth — the audit replaces it with the real figure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-[1fr_1fr] lg:gap-[72px]">
          <div className="space-y-[36px]">
            <div>
              <label htmlFor="calc-clients" className={labelClass}>
                Clients on record
              </label>
              <input
                id="calc-clients"
                inputMode="numeric"
                value={clients}
                onChange={(e) => setClients(e.target.value.replace(/[^0-9]/g, ''))}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="calc-inactive" className={labelClass}>
                <span>Inactive for 12+ months</span>
                <span className="font-serif text-[22px] normal-case tracking-normal text-ink">{inactivePct}%</span>
              </label>
              <input
                id="calc-inactive"
                type="range"
                min={0}
                max={90}
                step={5}
                value={inactivePct}
                onChange={(e) => setInactivePct(Number(e.target.value))}
                className="w-full accent-[#b7790a]"
              />
            </div>

            <div>
              <label htmlFor="calc-order" className={labelClass}>
                Average order value
              </label>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-[28px] leading-none text-ink/50">$</span>
                <input
                  id="calc-order"
                  inputMode="decimal"
                  value={orderValue}
                  onChange={(e) => setOrderValue(e.target.value.replace(/[^0-9.]/g, ''))}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="calc-reactivation" className={labelClass}>
                <span>Share you could bring back</span>
                <span className="font-serif text-[22px] normal-case tracking-normal text-ink">{reactivationPct}%</span>
              </label>
              <input
                id="calc-reactivation"
                type="range"
                min={1}
                max={20}
                step={1}
                value={reactivationPct}
                onChange={(e) => setReactivationPct(Number(e.target.value))}
                className="w-full accent-[#b7790a]"
              />
              <p className="mt-[8px] text-[12px] leading-[1.6] text-ink/55">
                Starts at a cautious 5%. Adjust it to what feels realistic for your clients.
              </p>
            </div>
          </div>

          <aside
            className="self-start rounded-[30px] bg-ink p-[38px] text-bone shadow-[0_24px_70px_rgba(7,22,51,0.18)] lg:sticky lg:top-[122px]"
            aria-live="polite"
          >
            <div className="text-[12px] font-bold uppercase tracking-nav text-brass">Estimated opportunity</div>
            <div className="mt-[14px] break-words font-serif text-[clamp(52px,6vw,80px)] leading-none tracking-[-0.03em]">
              {currency.format(estimate)}
            </div>
            <p className="mt-[14px] text-[14px] leading-[1.6] text-bone/70">
              from a single purchase by each client you bring back
            </p>

            <dl className="mt-[30px] border-t border-bone/12">
              <div className="flex justify-between gap-4 border-b border-bone/12 py-[14px] text-[14px]">
                <dt className="text-bone/65">Inactive clients</dt>
                <dd>{count.format(dormant)}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-bone/12 py-[14px] text-[14px]">
                <dt className="text-bone/65">Clients brought back</dt>
                <dd>{count.format(reactivated)}</dd>
              </div>
            </dl>

            <button
              onClick={() => openModal(`Calculator — est. ${currency.format(estimate)}`)}
              className="mt-[28px] inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-brass px-[25px] text-[12px] font-bold uppercase tracking-nav text-ink shadow-[0_12px_26px_rgba(183,121,10,0.28)] transition hover:-translate-y-px hover:bg-parchment"
            >
              Find the real number →
            </button>
            {captureStatus === 'success' ? (
              <p className="mt-[20px] text-[14px] leading-[1.6] text-bone">
                Thanks. Seth will follow up with you personally about this estimate.
              </p>
            ) : (
              <form onSubmit={handleFollowUpSubmit} className="mt-[24px] border-t border-bone/15 pt-[20px]">
                <label htmlFor="calculator-follow-up-email" className="block text-[13px] leading-[1.6] text-bone/80">
                  Want to discuss your estimate? Leave your email and Seth will follow up personally.
                </label>
                <input
                  id="calculator-follow-up-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  className="mt-[14px] h-[48px] w-full rounded-full border border-bone/20 bg-transparent px-[18px] text-[14px] text-bone placeholder:text-bone/45 focus:border-brass/60 focus:outline-none"
                />
                <label className="mt-[14px] flex items-start gap-3 text-[12px] leading-[1.6] text-bone/65">
                  <input
                    type="checkbox"
                    required
                    checked={followUpConsent}
                    onChange={(event) => setFollowUpConsent(event.target.checked)}
                    className="mt-1 accent-[#b7790a]"
                  />
                  <span>I agree to be contacted directly about this estimate. This is not a newsletter signup.</span>
                </label>
                <button
                  type="submit"
                  disabled={captureStatus === 'loading'}
                  className="mt-[16px] inline-flex min-h-[46px] w-full items-center justify-center rounded-full border border-bone/35 px-[20px] text-[11px] font-bold uppercase tracking-nav text-bone transition hover:bg-bone hover:text-ink disabled:cursor-wait disabled:opacity-60"
                >
                  {captureStatus === 'loading' ? 'Sending…' : 'Request personal follow-up'}
                </button>
                {captureStatus === 'error' && (
                  <p role="alert" className="mt-[12px] text-[12px] leading-[1.5] text-red-300">
                    We couldn’t save your request. Please try again or email hello@magnolia-loop.com.
                  </p>
                )}
              </form>
            )}
            <p className="mt-[16px] text-[11px] leading-[1.6] text-bone/50">
              An illustrative estimate based only on the numbers you entered — not a forecast or a
              guarantee. Repeat purchases and referrals are not included.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

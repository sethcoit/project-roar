import { useState } from 'react';
import { useModal } from '@/context/ModalContext';

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

  const dormant = Math.round(toNumber(clients) * (inactivePct / 100));
  const reactivated = Math.round(dormant * (reactivationPct / 100));
  const estimate = reactivated * toNumber(orderValue);

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

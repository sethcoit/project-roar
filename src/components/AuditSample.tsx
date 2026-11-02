const scores = [
  { area: 'Client data completeness', score: 2 },
  { area: 'VIP identification', score: 3 },
  { area: 'Follow-up consistency', score: 1 },
  { area: 'Dormant client visibility', score: 2 },
  { area: 'Outreach personalization', score: 3 },
  { area: 'Measurement & accountability', score: 1 },
];

const average = scores.reduce((sum, s) => sum + s.score, 0) / scores.length;

function Redacted({ width }: { width: string }) {
  return <span className="inline-block h-[0.9em] translate-y-[2px] rounded-[2px] bg-ink/85" style={{ width }} />;
}

function SampleLabel() {
  return (
    <span className="rounded-full border border-ink/15 bg-bone px-[10px] py-[4px] text-[10px] font-bold uppercase tracking-nav text-ink/60">
      Illustrative sample — not client data
    </span>
  );
}

export function AuditSample() {
  return (
    <section id="audit-sample" className="overflow-hidden bg-bone py-[112px] md:py-[128px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mb-[64px] grid grid-cols-1 items-end gap-[40px] md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
              <span className="h-px w-8 bg-current" />
              Inside the Audit
            </div>
            <h2 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
              See what you receive.
            </h2>
          </div>
          <p className="max-w-[480px] text-[15px] leading-[1.8] text-ink/72">
            Two pages in the format your audit arrives in: the Clienteling Scorecard that rates where your
            business stands today, and one of the ready-to-send outreach templates written for your clients.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-[40px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-[56px]">
          {/* Scorecard page */}
          <figure className="relative">
            <div className="rounded-[6px] border border-ink/10 bg-white p-[28px] shadow-[0_30px_80px_rgba(7,22,51,0.14)] md:p-[44px] lg:-rotate-[0.6deg]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/12 pb-[16px] text-[11px] font-bold uppercase tracking-nav text-ink/55">
                <span>Clienteling Revenue Audit</span>
                <span className="flex items-center gap-2">
                  Prepared for <Redacted width="96px" />
                </span>
              </div>

              <div className="mt-[28px] flex flex-col items-start gap-4 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-eyebrow text-brass">Section 1</div>
                  <h3 className="mt-[8px] font-serif text-[clamp(28px,2.8vw,36px)] leading-none tracking-[-0.03em]">
                    Clienteling Scorecard
                  </h3>
                </div>
                <div className="xl:text-right">
                  <div className="font-serif text-[48px] leading-none tracking-[-0.03em]">
                    {average.toFixed(1)}
                    <span className="text-[20px] text-ink/45"> / 5</span>
                  </div>
                  <div className="mt-[6px] text-[11px] font-bold uppercase tracking-nav text-green">Overall · Developing</div>
                </div>
              </div>

              <div className="mt-[32px] space-y-[16px]">
                {scores.map(({ area, score }) => (
                  <div key={area} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-[8px] sm:grid-cols-[200px_1fr_auto]">
                    <span className="text-[13px] text-ink/80">{area}</span>
                    <div className="order-last col-span-2 flex gap-[4px] sm:order-none sm:col-span-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span key={n} className={`h-[8px] flex-1 rounded-full ${n <= score ? 'bg-brass' : 'bg-ink/10'}`} />
                      ))}
                    </div>
                    <span className="text-[13px] font-bold tabular-nums text-ink">{score}/5</span>
                  </div>
                ))}
              </div>

              <div className="mt-[36px] border-t border-ink/12 pt-[22px]">
                <div className="text-[11px] font-bold uppercase tracking-nav text-ink/55">Top three opportunities</div>
                <ol className="mt-[14px] space-y-[10px] text-[13px] leading-[1.6] text-ink/80">
                  <li>
                    <span className="font-bold text-brass">01</span> Re-engage <Redacted width="34px" /> VIP clients with
                    no contact in 12+ months.
                  </li>
                  <li aria-hidden="true" className="select-none blur-[3px]">
                    <span className="font-bold text-brass">02</span> Standardize client profiles across both locations
                    before the holiday season.
                  </li>
                  <li aria-hidden="true" className="select-none blur-[3px]">
                    <span className="font-bold text-brass">03</span> Introduce a weekly outreach target per associate,
                    reviewed monthly.
                  </li>
                </ol>
              </div>
            </div>
            <figcaption className="mt-[18px] flex justify-center lg:justify-start">
              <SampleLabel />
            </figcaption>
          </figure>

          {/* Outreach template */}
          <figure className="relative lg:mt-[56px]">
            <div className="rounded-[6px] border border-ink/10 bg-white p-[28px] shadow-[0_30px_80px_rgba(7,22,51,0.14)] md:p-[40px] lg:rotate-[0.8deg]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/12 pb-[16px] text-[11px] font-bold uppercase tracking-nav text-ink/55">
                <span>Outreach Template</span>
                <span className="text-brass">Dormant VIP · 12+ months</span>
              </div>

              <dl className="mt-[22px] grid grid-cols-[auto_1fr] gap-x-4 gap-y-[8px] text-[12px]">
                <dt className="font-bold uppercase tracking-nav text-ink/50">Channel</dt>
                <dd className="text-ink/80">Personal email or handwritten note</dd>
                <dt className="font-bold uppercase tracking-nav text-ink/50">From</dt>
                <dd className="text-ink/80">The associate who knows them best</dd>
              </dl>

              <div className="mt-[24px] space-y-[14px] font-serif text-[17px] leading-[1.6] text-ink/85">
                <p>Dear [First name],</p>
                <p>
                  It has been a while since we last saw you at [Boutique] — and I thought of you this week when
                  [new piece related to their last purchase] arrived.
                </p>
                <p aria-hidden="true" className="select-none blur-[4px]">
                  I remember how much you enjoyed your visit in the spring, and I would love to show it to you
                  privately before it goes on display. Would a quiet morning next week suit you?
                </p>
                <p aria-hidden="true" className="select-none blur-[4px]">With warm regards, [Associate name]</p>
              </div>

              <div className="mt-[28px] rounded-[10px] bg-parchment/50 p-[18px] text-[12px] leading-[1.6] text-ink/70">
                <span className="font-bold uppercase tracking-nav text-green">Why it works · </span>
                Leads with the relationship, references something specific, and offers a private moment instead of a
                discount.
              </div>
            </div>
            <figcaption className="mt-[18px] flex justify-center lg:justify-start">
              <SampleLabel />
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

const proofPoints = [
  'Luxury client relations',
  'VIP clientele',
  'Sales leadership',
  'Service excellence',
];

export function Credibility() {
  return (
    <section className="border-y border-ink/10 bg-parchment/45 py-[72px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="grid grid-cols-1 items-end gap-[34px] md:grid-cols-[0.7fr_1.3fr] md:gap-[80px]">
          <div>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
              <span className="h-px w-8 bg-current" />
              Experience That Informs the Work
            </div>
            <p className="mt-[20px] font-serif text-[30px] leading-[1.08] tracking-[-0.02em] text-ink/85">
              Built from the floor up, with a close view of how relationships become results.
            </p>
          </div>
          <div className="grid grid-cols-2 border-t border-ink/18 sm:grid-cols-4 sm:border-t-0">
            {proofPoints.map((point, index) => (
              <div
                key={point}
                className={`border-ink/18 py-[18px] text-[12px] font-bold uppercase leading-[1.5] tracking-nav text-green sm:border-l sm:px-[20px] sm:py-0 ${
                  index > 1 ? 'border-t sm:border-t-0' : ''
                }`}
              >
                <span className="mb-[16px] block font-serif text-[25px] font-normal tracking-normal text-brass">
                  0{index + 1}
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-[40px] border-t border-ink/12 pt-[22px] text-[13px] uppercase tracking-nav text-ink/60">
          Experience includes luxury client relations and sales leadership at Hermès and Indochino.
        </p>
      </div>
    </section>
  );
}

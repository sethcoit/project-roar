const steps = [
  {
    num: '01',
    name: 'Audit',
    desc: 'The $995 Clienteling Revenue Audit reveals exactly where relationship-driven revenue is hiding in your client book.',
  cta: 'Book the Audit',
  href: '#audit',
  },
  {
    num: '02',
    name: 'Implementation',
    desc: 'Your team implements the 90-day action plan with the outreach templates and segmentation framework from the audit.',
    cta: 'See the Method',
    href: '#method',
  },
  {
    num: '03',
    name: 'Fractional Director',
    desc: 'For ongoing strategic leadership, the fractional Clienteling Director provides monthly accountability and refinement.',
    cta: 'Explore Fractional',
    href: '#fractional',
  },
];

export function Path() {
  return (
    <section className="bg-bone py-[112px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
          <span className="h-px w-8 bg-current" />
          Built in the Right Order
        </div>
        <h2 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
          A clear path forward.
        </h2>
        <div className="mt-[56px] grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-[32px]">
          {steps.map((step) => (
            <article key={step.num} className="group border-t border-brass pt-[20px] transition-transform duration-300 hover:-translate-y-1">
              <small className="text-[12px] font-bold uppercase tracking-nav text-brass">{step.num}</small>
              <h3 className="mt-[18px] font-serif text-[26px] transition-colors duration-200 group-hover:text-brass">{step.name}</h3>
              <p className="mt-[14px] max-w-[320px] text-[15px] leading-[1.75] text-ink/70">
                {step.desc}
              </p>
              <a
                href={step.href}
                className="mt-[18px] inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-nav text-green transition-colors hover:text-brass"
              >
                {step.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

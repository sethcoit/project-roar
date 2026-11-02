import { industries } from '@/lib/industries';

export function Industries() {
  return (
    <section id="industries" className="bg-parchment py-[112px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mb-[56px] grid grid-cols-1 gap-[40px] md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
              <span className="h-px w-8 bg-current" />
              Who It Is For
            </div>
            <h2 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
              Built for businesses where relationships matter.
            </h2>
          </div>
          <p className="self-end max-w-[480px] text-[15px] leading-[1.85] text-ink/72">
            I work with businesses where the lifetime value of a client relationship far exceeds any
            single transaction — the places where remembering a client is the whole job.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-ink/15 sm:grid-cols-3">
          {industries.map((industry, i) => (
            <div
              key={industry}
              className="group flex items-baseline justify-between gap-4 border-b border-ink/15 py-[26px] sm:px-[24px] sm:[&:nth-child(3n+1)]:pl-0 sm:[&:not(:nth-child(3n))]:border-r"
            >
              <span className="font-serif text-[clamp(24px,2.6vw,34px)] leading-tight tracking-[-0.02em] text-ink transition-colors duration-200 group-hover:text-brass">
                {industry}
              </span>
              <small className="text-[12px] font-bold tracking-nav text-brass">
                {String(i + 1).padStart(2, '0')}
              </small>
            </div>
          ))}
        </div>
        <a
          href="#/case-studies"
          className="mt-[36px] inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-nav text-green transition-colors hover:text-brass"
        >
          See how I would approach each one <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

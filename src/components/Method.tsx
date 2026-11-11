import { useState } from 'react';

const stages = [
  { num: '01', name: 'Capture', desc: 'Collect every client interaction, preference, and touchpoint into one living record.' },
  { num: '02', name: 'Understand', desc: 'Read the full client story — what they value, what they own, what they need next.' },
  { num: '03', name: 'Segment', desc: 'Group clients by potential, not just by spend, so outreach reaches the right people.' },
  { num: '04', name: 'Engage', desc: 'Reach out with purpose and personalization, not just when there is something to sell.' },
  { num: '05', name: 'Convert', desc: 'Turn the right moment into the right offer — naturally, never aggressively.' },
  { num: '06', name: 'Retain', desc: 'Stay present between purchases so the relationship never goes dormant.' },
  { num: '07', name: 'Measure', desc: 'Track what worked, refine what did not, and feed it all back to the top.' },
];

export function Method() {
  const [active, setActive] = useState(0);

  return (
    <section id="method" className="bg-ink py-[112px] text-bone">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mb-[64px] grid grid-cols-1 items-end gap-[70px] md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-brass">
              <span className="h-px w-8 bg-current" />
              The MagnoliaLoop Method™
            </div>
            <h2 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
              Relationships compound.
            </h2>
          </div>
          <p className="max-w-[520px] text-[15px] leading-[1.8] text-bone/70">
            A practical seven-stage system for turning client knowledge into consistent action — and
            consistent action into measurable value. Each stage feeds the next, and the last feeds back
            to the first. That is the loop.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-[1fr_1fr]">
          {/* Circular loop diagram */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* Outer ring */}
            <div className="absolute inset-[8%] rounded-full border border-bone/15" />
            {/* Inner ring */}
            <div className="absolute inset-[18%] rounded-full border border-bone/8" />
            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-serif text-[clamp(32px,5vw,52px)] leading-none text-parchment">
                {stages[active].num}
              </span>
              <span className="mt-3 text-[12px] font-bold uppercase tracking-eyebrow text-brass">
                Stage {active + 1} of 7
              </span>
            </div>

            {/* Stage nodes positioned around the circle */}
            {stages.map((stage, i) => {
              const angle = (i / stages.length) * 360 - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 42;
              const x = 50 + Math.cos(rad) * radius;
              const y = 50 + Math.sin(rad) * radius;
              const isActive = i === active;

              return (
                <button
                  key={stage.num}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-label={`${stage.num} ${stage.name}`}
                  className={`absolute z-10 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[12px] font-bold tracking-nav transition-all duration-300 ${
                    isActive
                      ? 'scale-110 border-brass bg-brass text-ink shadow-[0_0_28px_rgba(165,139,97,0.4)]'
                      : 'border-bone/25 bg-ink/60 text-bone/60 hover:border-bone/50 hover:text-bone'
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {stage.num}
                </button>
              );
            })}

            {/* Connector arcs between nodes */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
              {stages.map((_, i) => {
                const angle1 = (i / stages.length) * 360 - 90;
                const angle2 = ((i + 1) / stages.length) * 360 - 90;
                const rad1 = (angle1 * Math.PI) / 180;
                const rad2 = (angle2 * Math.PI) / 180;
                const r = 42;
                const x1 = 50 + Math.cos(rad1) * r;
                const y1 = 50 + Math.sin(rad1) * r;
                const x2 = 50 + Math.cos(rad2) * r;
                const y2 = 50 + Math.sin(rad2) * r;
                const isConnectorActive = i === active || (i + 1) % stages.length === active;

                return (
                  <path
                    key={i}
                    d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                    className={`transition-colors duration-300 ${
                      isConnectorActive ? 'stroke-brass' : 'stroke-bone/12'
                    }`}
                    strokeWidth={0.4}
                  />
                );
              })}
            </svg>
          </div>

          {/* Active stage detail panel */}
          <div className="min-h-[280px]">
            <div
              key={active}
              className="animate-[fadeIn_0.4s_ease-out]"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-[clamp(64px,8vw,104px)] leading-none text-brass">
                  {stages[active].num}
                </span>
                <h3 className="font-serif text-[clamp(36px,4.5vw,56px)] leading-none tracking-[-0.03em]">
                  {stages[active].name}
                </h3>
              </div>
              <p className="mt-[28px] max-w-[480px] text-[15px] leading-[1.85] text-bone/72">
                {stages[active].desc}
              </p>
            </div>

            {/* Stage selector list */}
            <div className="mt-[44px] grid grid-cols-7 gap-1 border-t border-bone/12 pt-[20px]">
              {stages.map((stage, i) => (
                <button
                  key={stage.num}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group flex flex-col items-center gap-2 transition ${
                    i === active ? 'opacity-100' : 'opacity-35 hover:opacity-70 focus:opacity-100'
                  }`}
                >
                  <span
                    className={`h-[3px] w-full transition-colors duration-300 ${
                      i === active ? 'bg-brass' : 'bg-bone/20'
                    }`}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-nav">
                    {stage.name.slice(0, 3)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

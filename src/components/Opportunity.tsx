const signs = [
  'Clients who have not heard from you in a year — and have not been missed by anyone on the team.',
  'Follow-up that depends on which associate happens to be working that day.',
  'VIPs everyone recognizes, but no one has formally identified or planned around.',
];

export function Opportunity() {
  return (
    <section id="opportunity" className="relative overflow-hidden bg-ink px-0 py-[128px] text-bone">
      <div className="relative z-10 mx-auto grid w-full max-w-site grid-cols-1 items-end gap-[80px] px-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-brass">
            <span className="h-px w-8 bg-current" />
            The Opportunity
          </div>
          <h2 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
            Your next sale may already be in your client book.
          </h2>
        </div>
        <div>
          <p className="max-w-[560px] text-[15px] leading-[1.85] text-bone/72">
            Dormant clients, inconsistent follow-up, incomplete profiles and unclear VIP priorities can
            obscure revenue inside relationships the business has already earned.
          </p>
          <ol className="mt-[36px] border-t border-bone/12">
            {signs.map((sign, i) => (
              <li key={sign} className="flex gap-[20px] border-b border-bone/12 py-[20px]">
                <span className="font-serif text-[22px] leading-none text-brass">0{i + 1}</span>
                <span className="text-[15px] leading-[1.6] text-bone/85">{sign}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

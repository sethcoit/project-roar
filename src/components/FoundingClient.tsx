import { Quote } from 'lucide-react';

interface CaseStudyResult {
  value: string;
  label: string;
}

interface CaseStudy {
  clientName: string;
  industry: string;
  engagementType: string;
  summary: string;
  results: CaseStudyResult[];
  quote: string;
  quoteAttribution: string;
  permissionConfirmed: boolean;
}

const caseStudy: CaseStudy = {
  clientName: '',
  industry: '',
  engagementType: '',
  summary: '',
  results: [],
  quote: '',
  quoteAttribution: '',
  permissionConfirmed: true,
};

const isFilled = (value: string) => value.trim().length > 0;

const isCaseStudyComplete =
  caseStudy.permissionConfirmed &&
  [
    caseStudy.clientName,
    caseStudy.industry,
    caseStudy.engagementType,
    caseStudy.summary,
    caseStudy.quote,
    caseStudy.quoteAttribution,
  ].every(isFilled) &&
  caseStudy.results.length > 0 &&
  caseStudy.results.every((r) => isFilled(r.value) && isFilled(r.label));

export const hasFoundingCaseStudy = isCaseStudyComplete;

export function FoundingClient() {
  if (!isCaseStudyComplete) return null;

  return (
    <section id="founding-client" className="bg-bone py-[112px] md:py-[128px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mb-[64px]">
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-brass">
            <span className="h-px w-8 bg-current" />
            Founding Client
          </div>
          <h2 className="mt-[22px] max-w-[820px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
            Results earned from relationships already in the book.
          </h2>
          <div className="mt-[20px] flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-bold uppercase tracking-nav text-green">
            <span>{caseStudy.clientName}</span>
            <span className="text-brass">·</span>
            <span>{caseStudy.industry}</span>
            <span className="text-brass">·</span>
            <span>{caseStudy.engagementType}</span>
          </div>
          <p className="mt-[20px] max-w-[600px] text-[15px] leading-[1.8] text-ink/70">
            {caseStudy.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[24px] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudy.results.map((result, i) => (
            <div key={i} className="bg-bone p-[28px] md:p-[36px]">
              <div className="font-serif text-[clamp(40px,5vw,64px)] leading-none tracking-[-0.03em] text-brass">
                {result.value}
              </div>
              <p className="mt-[16px] text-[13px] leading-[1.6] text-ink/72">{result.label}</p>
            </div>
          ))}
        </div>

        <figure className="mt-[64px] max-w-[880px] rounded-[24px] border border-ink/8 bg-parchment/35 p-[32px] md:p-[48px]">
          <Quote className="h-7 w-7 text-brass/60" />
          <blockquote className="mt-[20px] font-serif text-[clamp(22px,2.5vw,30px)] leading-[1.25] tracking-[-0.02em] text-ink/85">
            &ldquo;{caseStudy.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-[28px] border-t border-ink/12 pt-[18px] text-[12px] font-bold uppercase tracking-nav text-green">
            {caseStudy.quoteAttribution}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

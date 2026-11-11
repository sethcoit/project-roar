import { useModal } from '@/context/ModalContext';
import { ChevronDown } from 'lucide-react';
import { foundingOffer, foundingSpotsOpen } from '@/lib/foundingOffer';

export function Hero() {
  const { openModal } = useModal();

  return (
    <section
      id="top"
      className="relative grid min-h-[calc(100vh-78px)] items-center overflow-hidden bg-ink py-[88px] pb-[84px] md:py-[72px]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1100"
          alt=""
          className="h-full w-full object-cover opacity-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/12 to-ink/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(183,121,10,0.12),transparent_40%)]" />
      </div>
      <div className="pointer-events-none absolute right-[-16vw] top-[7vh] z-0 aspect-square w-[min(68vw,880px)] rounded-full border border-brass/20" />

      <div className="relative z-10 mx-auto grid w-full max-w-site grid-cols-1 items-center gap-[56px] px-6 md:grid-cols-[1fr_360px] md:gap-[72px]">
        <div>
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-brass">
            <span className="h-px w-8 bg-current" />
            Client Relationship Revenue Consulting
          </div>
          <h1 className="mt-[25px] max-w-[960px] font-serif text-[clamp(64px,9vw,140px)] leading-[0.82] tracking-[-0.06em] text-bone">
            Where client
            <br />
            relationships
            <br />
            <em className="not-italic text-parchment">become revenue.</em>
          </h1>
        </div>

        <div className="border-l-2 border-brass/60 pl-[25px]">
          <div className="mb-[28px] border-y border-bone/15 py-[16px]">
            <div className="flex items-center justify-between text-[12px] font-bold uppercase tracking-eyebrow text-brass">
              <span>The MagnoliaLoop</span>
              <span className="text-bone/60">Est. 2025</span>
            </div>
            <p className="mt-[10px] max-w-[250px] font-serif text-[20px] leading-[1.1] text-bone">
              Make every relationship worth more.
            </p>
          </div>
          <p className="mb-[29px] text-[15px] leading-[1.75] text-bone/80">
            Turn the relationships you already have into revenue you have not captured yet.
          </p>
          {foundingSpotsOpen ? (
            <a
              href="#founding-client"
              className="inline-flex min-h-[52px] w-full items-center justify-center whitespace-nowrap rounded-full bg-brass px-[20px] text-[12px] font-bold uppercase tracking-[0.1em] text-ink shadow-[0_12px_26px_rgba(183,121,10,0.28)] transition hover:-translate-y-px hover:bg-parchment sm:w-auto"
            >
              Apply for a Founding Spot · {foundingOffer.foundingPrice} →
            </a>
          ) : (
            <button
              onClick={() => openModal(`Book the ${foundingOffer.standardPrice} Audit`)}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-brass px-[25px] text-[12px] font-bold uppercase tracking-nav text-ink shadow-[0_12px_26px_rgba(183,121,10,0.28)] transition hover:-translate-y-px hover:bg-parchment sm:w-auto"
            >
              Book the {foundingOffer.standardPrice} Audit →
            </button>
          )}
          <a
            href="#method"
            className="mt-[16px] inline-flex min-h-[44px] items-center justify-center text-[12px] font-bold uppercase tracking-nav text-bone/75 transition hover:text-brass sm:ml-[18px] sm:mt-0"
          >
            See the method <span className="ml-2" aria-hidden="true">↓</span>
          </a>

          <a
            href="#founder"
            className="group mt-[32px] flex items-center gap-[14px] border-t border-bone/15 pt-[22px]"
          >
            <img
              src="/images/team/image.png"
              alt="Seth Coit"
              className="h-[52px] w-[52px] rounded-full border border-brass/50 object-cover object-top"
            />
            <span>
              <span className="block text-[14px] text-bone transition-colors group-hover:text-brass">
                Led personally by Seth Coit
              </span>
              <span className="mt-[3px] block text-[11px] font-bold uppercase tracking-nav text-bone/55">
                Luxury clienteling at Hermès &amp; Indochino
              </span>
            </span>
          </a>
        </div>
      </div>

      <a
        href="#founder"
        className="absolute bottom-[28px] left-1/2 z-10 -translate-x-1/2 text-bone/60 transition-colors hover:text-brass"
        aria-label="Scroll to explore"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

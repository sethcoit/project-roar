export function AboutFounder() {
  return (
    <section id="founder" className="overflow-hidden bg-bone py-[112px]">
      <div className="mx-auto grid w-full max-w-site grid-cols-1 items-start gap-[70px] px-6 md:grid-cols-[minmax(280px,0.7fr)_1.3fr] md:gap-[100px]">
        <figure className="relative mx-auto w-full max-w-[430px] md:mx-0 md:sticky md:top-[122px]">
          <div className="absolute -bottom-5 -left-5 hidden h-28 w-28 border-b border-l border-brass/70 sm:block" />
          <div className="absolute -right-5 -top-5 hidden h-28 w-28 border-r border-t border-brass/70 sm:block" />
          <div className="relative aspect-[3/4] overflow-hidden bg-parchment">
            <img
              src="/images/team/image.png"
              alt="Seth Coit, Founder and Chief Executive Officer of Magnolia Loop"
              className="h-full w-full object-cover object-top grayscale-[12%] transition duration-700 hover:scale-[1.02]"
            />
          </div>
          <figcaption className="mt-4 flex items-center justify-between text-[12px] font-bold uppercase tracking-nav text-green">
            <span>Seth Coit</span>
            <span>Founder + CEO</span>
          </figcaption>
        </figure>

        <div className="pt-1">
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
            <span className="h-px w-8 bg-current" />
            About the Founder
          </div>
          <h2 className="mt-[22px] max-w-[760px] font-serif text-[clamp(50px,6.5vw,94px)] leading-[0.93] tracking-[-0.05em]">
            I built Magnolia Loop from the sales floor.
          </h2>

          <div className="mt-[38px] max-w-[700px] space-y-[22px] text-[15px] leading-[1.85] text-ink/75">
            <p>
              I&apos;m Seth Coit. Before Magnolia Loop, I worked in luxury client relations and sales
              leadership at Hermès and Indochino — managing high-volume client interactions, supporting VIP
              clientele, driving sales growth, and coaching teams on clienteling and service excellence.
            </p>
            <p>
              In both places I saw the same thing: the most valuable knowledge a business has about its
              clients was scattered across systems, or kept only in an associate&apos;s memory. The
              relationships were there. The system to act on them was not.
            </p>
            <p>
              I started Magnolia Loop to build that system — to help businesses preserve what they know
              about their clients, act on it consistently, and turn personalized service into measurable
              revenue. When you work with Magnolia Loop, you work with me.
            </p>
          </div>

          <blockquote className="mt-[54px] max-w-[760px] border-l-2 border-brass pl-[25px] font-serif text-[clamp(28px,3vw,42px)] leading-[1.1] tracking-[-0.025em] text-green">
            “Relationships compound when they are remembered, understood, and acted upon consistently.”
          </blockquote>

          <div className="mt-[28px] text-[12px] font-bold uppercase tracking-nav text-ink/60">
            The Magnolia Loop philosophy
          </div>
        </div>
      </div>
    </section>
  );
}

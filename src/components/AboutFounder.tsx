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
            The person behind the loop.
          </h2>

          <div className="mt-[38px] max-w-[700px] space-y-[22px] text-[15px] leading-[1.85] text-ink/75">
            <p>
              Seth Coit is the Founder and Chief Executive Officer of Magnolia Loop, a client relationship
              revenue consultancy focused on helping luxury and relationship-driven businesses create more
              value from the customers they already have.
            </p>
            <p>
              While working in luxury client relations and sales leadership roles, Seth managed high-volume
              client interactions, supported VIP clientele, drove sales growth, and coached teams on
              clienteling and service excellence. At organizations including Hermès and Indochino, he saw
              firsthand how valuable client knowledge is often fragmented across systems or retained only in
              employee memory. That observation became the foundation for Magnolia Loop.
            </p>
            <p>
              Magnolia Loop exists to help businesses preserve relationship knowledge, improve retention,
              identify revenue opportunities, and build systems that turn personalized service into measurable
              commercial outcomes.
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

const industries = [
  {
    name: 'Fashion',
    num: '01',
    img: 'https://images.pexels.com/photos/8387126/pexels-photo-8387126.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Clients exploring a luxury fashion boutique',
  },
  {
    name: 'Jewelry',
    num: '02',
    img: 'https://images.pexels.com/photos/20858950/pexels-photo-20858950.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Fine gold necklace displayed in a luxury store',
  },
  {
    name: 'Watches',
    num: '03',
    img: 'https://images.pexels.com/photos/28697832/pexels-photo-28697832.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Luxury watches displayed in a retail environment',
  },
  {
    name: 'Interiors',
    num: '04',
    img: 'https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Elegant furniture showroom interior',
  },
  {
    name: 'Transportation',
    num: '05',
    img: 'https://images.pexels.com/photos/12565887/pexels-photo-12565887.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Luxury vehicles in a modern showroom',
  },
  {
    name: 'Real Estate',
    num: '06',
    img: 'https://images.pexels.com/photos/7027842/pexels-photo-7027842.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Elegant room with wooden flooring and chandelier',
  },
  {
    name: 'Hospitality',
    num: '07',
    img: 'https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Luxurious hotel lobby with elegant decor',
  },
  {
    name: 'Medical',
    num: '08',
    img: 'https://images.pexels.com/photos/16571735/pexels-photo-16571735.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Contemporary medical clinic with upscale design',
  },
  {
    name: 'High-End Services',
    num: '09',
    img: 'https://images.pexels.com/photos/8112162/pexels-photo-8112162.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Business professionals in a modern office meeting',
  },
];

export function Industries() {
  return (
    <section id="industries" className="bg-parchment py-[112px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mb-[56px] grid grid-cols-1 gap-[40px] md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
              <span className="h-px w-8 bg-current" />
              Who We Serve
            </div>
            <h2 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
              Built for businesses where relationships matter.
            </h2>
          </div>
          <p className="self-end max-w-[480px] text-[15px] leading-[1.85] text-ink/72">
            We specialize in industries where the lifetime value of a client relationship far exceeds
            any single transaction. These are the sectors we know best.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[16px] sm:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative overflow-hidden rounded-[20px] border border-ink/10 transition-all duration-300 hover:border-brass/40 hover:shadow-[0_8px_30px_rgba(183,121,10,0.12)]"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={industry.img}
                  alt={industry.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition-opacity duration-300 group-hover:from-ink/85" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-[18px]">
                <span className="font-serif text-[20px] leading-tight text-bone md:text-[24px]">
                  {industry.name}
                </span>
                <small className="font-sans text-[12px] tracking-nav text-brass">
                  {industry.num}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

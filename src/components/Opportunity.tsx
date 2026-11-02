export function Opportunity() {
  return (
    <section className="relative overflow-hidden bg-ink px-0 py-[128px] text-bone">
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
          <div className="mt-[36px] grid grid-cols-3 gap-[12px] sm:grid-cols-3">
            <div className="group overflow-hidden rounded-[14px] border border-bone/10">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8387126/pexels-photo-8387126.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                  alt="Client relationship in a luxury boutique"
                  className="h-full w-full object-cover opacity-[0.55] transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="group overflow-hidden rounded-[14px] border border-bone/10">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8439695/pexels-photo-8439695.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                  alt="Business partnership sealed with a handshake"
                  className="h-full w-full object-cover opacity-[0.55] transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="group overflow-hidden rounded-[14px] border border-bone/10">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/20858950/pexels-photo-20858950.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                  alt="Fine jewelry on display"
                  className="h-full w-full object-cover opacity-[0.55] transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

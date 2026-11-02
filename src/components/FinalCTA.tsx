import { useModal } from '@/context/ModalContext';

export function FinalCTA() {
  const { openModal } = useModal();

  return (
    <section className="bg-ink py-[148px] text-center text-bone">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="flex items-center justify-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-brass">
          <span className="h-px w-8 bg-current" />
          Make Every Relationship More Valuable
          <span className="h-px w-8 bg-current" />
        </div>
        <h2 className="mx-auto my-[28px] max-w-[1000px] font-serif text-[clamp(56px,7vw,104px)] leading-[0.95] tracking-[-0.045em]">
          Find the revenue already in your <em className="not-italic text-parchment">client book.</em>
        </h2>
        <button
          onClick={() => openModal('Start a Conversation')}
          className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-bone/38 bg-transparent px-[26px] text-[12px] font-bold uppercase tracking-nav text-bone transition hover:bg-bone hover:text-ink"
        >
          Start a Conversation →
        </button>
      </div>
    </section>
  );
}

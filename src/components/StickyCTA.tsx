import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const variants = [
  {
    eyebrow: 'Fractional Clienteling Director',
    cta: 'Schedule a Strategy Call',
    source: 'Schedule a Strategy Call',
  },
  {
    eyebrow: 'Clienteling Revenue Audit',
    cta: 'Book the $995 Audit',
    source: 'Sticky CTA — Book the Audit',
  },
];

export function StickyCTA() {
  const { openModal, isOpen } = useModal();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) return;
    const interval = setInterval(() => {
      setVariantIndex((i) => (i + 1) % variants.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [visible, dismissed]);

  const variant = variants[variantIndex];
  const show = visible && !dismissed && !isOpen;

  return (
    <div
      className={`fixed bottom-[14px] left-4 right-4 z-[35] transition-all duration-300 md:left-auto md:right-[22px] md:bottom-[22px] ${
        show
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-[15px] opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative md:w-auto">
      <button
        key={variantIndex}
        onClick={() => openModal(variant.source)}
        className="flex w-full items-center gap-[14px] rounded-full border border-bone/15 bg-ink px-[20px] py-[15px] text-left shadow-[0_18px_52px_rgba(0,0,0,0.24)] transition hover:border-brass/30 md:w-auto"
      >
        <div>
          <small className="block animate-[fadeIn_0.5s_ease-out] text-[12px] uppercase tracking-[0.17em] text-brass">
            {variant.eyebrow}
          </small>
          <strong className="mt-[6px] block animate-[fadeIn_0.5s_ease-out] text-[13px] uppercase tracking-[0.13em] text-bone">
            {variant.cta} →
          </strong>
        </div>
      </button>
      <button
        onClick={() => setDismissed(true)}
        className="absolute -top-[10px] right-[6px] flex h-[26px] w-[26px] items-center justify-center rounded-full border border-bone/15 bg-ink text-bone/70 transition hover:text-brass md:-right-[10px]"
        aria-label="Dismiss"
      >
        <X className="h-3.5 w-3.5" />
      </button>
      </div>
    </div>
  );
}

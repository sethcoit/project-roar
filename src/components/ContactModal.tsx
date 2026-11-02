import { useState, useEffect, useRef, type FormEvent } from 'react';
import { X, Check, Mail } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { submitConsultationRequest } from '@/lib/contact';

export function ContactModal() {
  const { isOpen, source, closeModal } = useModal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrorMsg('');
      setName('');
      setEmail('');
      setMessage('');
      closeRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, a, input, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setErrorMsg('');

    const result = await submitConsultationRequest({
      name,
      email,
      message: message || undefined,
      source,
    });

    if (result.success) {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('error');
      setErrorMsg(result.error ?? 'Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 backdrop-blur-sm md:items-center"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      <div
        ref={dialogRef}
        className="relative max-h-[92vh] w-full max-w-[510px] overflow-y-auto rounded-t-[30px] border border-ink/8 bg-bone p-[34px] shadow-[0_30px_90px_rgba(7,22,51,0.22)] md:rounded-[30px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={closeModal}
          aria-label="Close"
          className="absolute right-[18px] top-[18px] text-ink/70 transition hover:text-ink"
        >
          <X className="h-5 w-5" />
        </button>

        {status === 'success' ? (
          <div className="py-[40px] text-center">
            <div className="mx-auto mb-[22px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-green text-bone">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-[32px] leading-tight">Thank you.</h3>
            <p className="mt-[14px] text-[15px] leading-[1.8] text-ink/70">
              Your message has been received. We'll be in touch within one business day to schedule your
              consultation.
            </p>
            <button
              onClick={closeModal}
              className="mt-[28px] inline-flex min-h-[52px] items-center justify-center rounded-full bg-ink px-[24px] text-[13px] font-bold uppercase tracking-nav text-bone transition hover:bg-green"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
              <span className="h-px w-8 bg-current" />
              {source}
            </div>
            <h2 className="mt-[16px] font-serif text-[36px] leading-[1.05] tracking-[-0.03em]">
              Let's talk.
            </h2>
            <p className="mt-[10px] text-[15px] leading-[1.7] text-ink/70">
              Share a bit about your business and what you'd like to improve. We'll respond within one
              business day.
            </p>

            <form onSubmit={handleSubmit} className="mt-[28px] space-y-[18px]">
              <div>
                <label htmlFor="modal-name" className="mb-[7px] block text-[12px] font-bold uppercase tracking-nav">
                  Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-ink/22 bg-transparent pb-[9px] text-[15px] outline-none transition focus:border-green"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="mb-[7px] block text-[12px] font-bold uppercase tracking-nav">
                  Work Email
                </label>
                <input
                  id="modal-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-ink/22 bg-transparent pb-[9px] text-[15px] outline-none transition focus:border-green"
                />
              </div>
              <div>
                <label htmlFor="modal-message" className="mb-[7px] block text-[12px] font-bold uppercase tracking-nav">
                  What would you like to improve? <span className="text-ink/50">(optional)</span>
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none border-b border-ink/22 bg-transparent pb-[9px] text-[15px] outline-none transition focus:border-green"
                />
              </div>

              {status === 'error' && (
                <p role="alert" className="rounded-[12px] border border-red-600/20 bg-red-600/5 px-[14px] py-[12px] text-[13px] leading-[1.5] text-red-700">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="min-h-[52px] w-full rounded-full bg-ink text-[13px] font-bold uppercase tracking-nav text-bone transition hover:-translate-y-px hover:bg-green disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message →'}
              </button>
              <p className="text-center text-[12px] leading-[1.6] text-ink/60">
                Usually replies within one business day. Your information stays private and is only used to respond to your inquiry.
              </p>
              <a
                href="mailto:hello@magnolialoop.com"
                className="mx-auto mt-[4px] inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-nav text-green transition hover:text-brass"
              >
                <Mail className="h-3.5 w-3.5" /> Prefer email? hello@magnolialoop.com
              </a>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

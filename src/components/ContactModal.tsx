import { useState, useEffect, useRef, type FormEvent } from 'react';
import { X, Check, Mail } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { submitConsultationRequest } from '@/lib/contact';
import { industries } from '@/lib/industries';
import { bookingUrl, bookingEmbedUrl } from '@/lib/booking';

const clientBookSizes = ['Under 500 clients', '500–2,000', '2,000–10,000', '10,000+', 'Not sure'];
const timelines = ['As soon as possible', 'Within 1–3 months', 'Within 3–6 months', 'Just exploring'];

const labelClass = 'mb-[7px] block text-[12px] font-bold uppercase tracking-nav';
const fieldClass =
  'w-full border-b border-ink/22 bg-transparent pb-[9px] text-[15px] outline-none transition focus:border-green';

export function ContactModal() {
  const { isOpen, source, closeModal } = useModal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [clientBookSize, setClientBookSize] = useState('');
  const [crmSystem, setCrmSystem] = useState('');
  const [timeline, setTimeline] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingSrc, setBookingSrc] = useState('');
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrorMsg('');
      setName('');
      setEmail('');
      setIndustry('');
      setClientBookSize('');
      setCrmSystem('');
      setTimeline('');
      setMessage('');
      setBookingSrc('');
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
          'button, a, input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])'
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
      industry,
      clientBookSize,
      crmSystem: crmSystem || undefined,
      timeline,
      message: message || undefined,
      source,
    });

    if (result.success) {
      if (bookingUrl) setBookingSrc(bookingEmbedUrl(name, email));
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMsg(result.error ?? 'Something went wrong. Please try again.');
    }
  };

  const showBooking = status === 'success' && bookingSrc !== '';

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
        className={`relative max-h-[92vh] w-full overflow-y-auto rounded-t-[30px] border border-ink/8 bg-bone p-[34px] shadow-[0_30px_90px_rgba(7,22,51,0.22)] md:rounded-[30px] ${
          showBooking ? 'max-w-[760px]' : 'max-w-[510px]'
        }`}
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

        {showBooking ? (
          <div>
            <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
              <Check className="h-4 w-4" />
              Details received
            </div>
            <h3 className="mt-[16px] font-serif text-[32px] leading-[1.05] tracking-[-0.03em]">
              Now pick a time.
            </h3>
            <p className="mt-[10px] text-[15px] leading-[1.7] text-ink/70">
              Choose whatever suits you below. I will review your answers before we speak.
            </p>
            <iframe
              src={bookingSrc}
              title="Schedule a call with Seth Coit"
              className="mt-[22px] h-[640px] w-full rounded-[16px] border border-ink/10 bg-white"
            />
            <button
              onClick={closeModal}
              className="mt-[16px] w-full text-center text-[12px] font-bold uppercase tracking-nav text-ink/60 transition hover:text-brass"
            >
              I will book later — just email me
            </button>
          </div>
        ) : status === 'success' ? (
          <div className="py-[40px] text-center">
            <div className="mx-auto mb-[22px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-green text-bone">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-[32px] leading-tight">Thank you.</h3>
            <p className="mt-[14px] text-[15px] leading-[1.8] text-ink/70">
              Your message has been received. I will personally be in touch within one business day to
              schedule a time to talk.
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
              {bookingUrl
                ? 'A few quick details about your business, then pick a time that suits you.'
                : 'Share a bit about your business and what you would like to improve. I read every message and respond within one business day.'}
            </p>

            <form onSubmit={handleSubmit} className="mt-[28px] space-y-[18px]">
              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className={labelClass}>
                    Work Email
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="modal-industry" className={labelClass}>
                  Industry
                </label>
                <select
                  id="modal-industry"
                  required
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className={`${fieldClass} ${industry ? '' : 'text-ink/50'}`}
                >
                  <option value="" disabled>
                    Select your industry
                  </option>
                  {industries.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-book-size" className={labelClass}>
                    Client Book Size
                  </label>
                  <select
                    id="modal-book-size"
                    required
                    value={clientBookSize}
                    onChange={(e) => setClientBookSize(e.target.value)}
                    className={`${fieldClass} ${clientBookSize ? '' : 'text-ink/50'}`}
                  >
                    <option value="" disabled>
                      Approximate size
                    </option>
                    {clientBookSizes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="modal-timeline" className={labelClass}>
                    Timeline
                  </label>
                  <select
                    id="modal-timeline"
                    required
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className={`${fieldClass} ${timeline ? '' : 'text-ink/50'}`}
                  >
                    <option value="" disabled>
                      When to start
                    </option>
                    {timelines.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="modal-crm" className={labelClass}>
                  Current CRM or POS <span className="text-ink/50">(optional)</span>
                </label>
                <input
                  id="modal-crm"
                  type="text"
                  placeholder="e.g. Salesforce, Lightspeed, Shopify POS, spreadsheets, none"
                  value={crmSystem}
                  onChange={(e) => setCrmSystem(e.target.value)}
                  className={`${fieldClass} placeholder:text-ink/35`}
                />
              </div>
              <div>
                <label htmlFor="modal-message" className={labelClass}>
                  What would you like to improve? <span className="text-ink/50">(optional)</span>
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${fieldClass} resize-none`}
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
                {status === 'submitting' ? 'Sending…' : bookingUrl ? 'Continue to Scheduling →' : 'Send Message →'}
              </button>
              <p className="text-center text-[12px] leading-[1.6] text-ink/60">
                Usually replies within one business day. Your information stays private and is only used to respond to your inquiry.
              </p>
              <a
                href="mailto:hello@magnolia-loop.com"
                className="mx-auto mt-[4px] inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-nav text-green transition hover:text-brass"
              >
                <Mail className="h-3.5 w-3.5" /> Prefer email? hello@magnolia-loop.com
              </a>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

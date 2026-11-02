import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Mail, Check, Loader2, AlertCircle } from 'lucide-react';

interface NewsletterSignupProps {
  source?: string;
  variant?: 'section' | 'inline';
}

export function NewsletterSignup({ source = 'Homepage Lead Magnet', variant = 'section' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email, source });

    if (error) {
      if (error.code === '23505') {
        setStatus('duplicate');
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again.');
      }
      return;
    }

    setStatus('success');
    setEmail('');
  }

  if (variant === 'inline') {
    return (
      <div className="w-full">
        {status === 'success' ? (
          <div className="flex items-center gap-2 text-[13px] text-brass">
            <Check className="h-4 w-4" />
            You're subscribed. Check your inbox.
          </div>
        ) : status === 'duplicate' ? (
          <div className="flex items-center gap-2 text-[13px] text-brass">
            <Check className="h-4 w-4" />
            You're already on the list.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="h-[40px] w-full min-w-0 rounded-full border border-bone/20 bg-transparent px-[16px] text-[13px] normal-case tracking-normal text-bone placeholder:text-bone/45 focus:border-brass/50 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex h-[40px] shrink-0 items-center justify-center rounded-full bg-brass px-[18px] text-[12px] font-bold uppercase tracking-nav text-ink transition hover:bg-brass/80 disabled:opacity-50"
            >
              {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <div className="mt-2 flex items-center gap-2 text-[12px] text-red-400">
            <AlertCircle className="h-3 w-3" />
            {errorMsg}
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="bg-parchment/50 py-[112px] md:py-[128px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex items-center justify-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
            <span className="h-px w-8 bg-current" />
            Free Guide
            <span className="h-px w-8 bg-current" />
          </div>
          <h2 className="mt-[22px] font-serif text-[clamp(40px,5vw,72px)] leading-[1.0] tracking-[-0.03em] text-ink">
            The Dormant Revenue Playbook
          </h2>
          <p className="mx-auto mt-[20px] max-w-[560px] text-[15px] leading-[1.8] text-ink/70">
            A practical guide to finding and reactivating the high-value client relationships
            already sitting in your book. Delivered quarterly with field-tested clienteling
            strategies for relationship-driven businesses.
          </p>

          {status === 'success' ? (
            <div className="mx-auto mt-[40px] flex max-w-[480px] flex-col items-center gap-[16px] rounded-[24px] border border-green/30 bg-bone p-[36px]">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-green/10">
                <Check className="h-7 w-7 text-green" />
              </div>
              <h3 className="font-serif text-[24px] tracking-[-0.02em] text-ink">
                You're on the list.
              </h3>
              <p className="text-[14px] leading-[1.7] text-ink/70">
                Check your inbox for a confirmation email. Your first issue arrives soon.
              </p>
            </div>
          ) : status === 'duplicate' ? (
            <div className="mx-auto mt-[40px] flex max-w-[480px] flex-col items-center gap-[16px] rounded-[24px] border border-brass/30 bg-bone p-[36px]">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-brass/10">
                <Check className="h-7 w-7 text-brass" />
              </div>
              <h3 className="font-serif text-[24px] tracking-[-0.02em] text-ink">
                You're already subscribed.
              </h3>
              <p className="text-[14px] leading-[1.7] text-ink/70">
                You will receive the next issue as soon as it is out. No need to sign up again.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-[40px] flex max-w-[520px] flex-col items-stretch gap-[12px] sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-[18px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-ink/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  required
                  className="h-[52px] w-full rounded-full border border-ink/15 bg-bone pl-[48px] pr-[20px] text-[14px] text-ink placeholder:text-ink/45 focus:border-brass/50 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex h-[52px] shrink-0 items-center justify-center rounded-full bg-ink px-[28px] text-[12px] font-bold uppercase tracking-nav text-bone shadow-[0_8px_24px_rgba(7,22,51,0.14)] transition hover:-translate-y-px hover:bg-green disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {status === 'loading' ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  'Send the Playbook →'
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <div className="mx-auto mt-[16px] flex max-w-[520px] items-center justify-center gap-2 text-[12px] text-red-600">
              <AlertCircle className="h-4 w-4" />
              {errorMsg}
            </div>
          )}

          <p className="mx-auto mt-[20px] max-w-[420px] text-[12px] uppercase tracking-nav text-ink/55">
            No spam. Unsubscribe anytime. Your email is never shared.
          </p>
        </div>
      </div>
    </section>
  );
}

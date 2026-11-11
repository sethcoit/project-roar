import { useState, useEffect, useRef } from 'react';
import { useModal } from '@/context/ModalContext';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { hasFoundingCaseStudy } from '@/components/FoundingClient';
import { foundingOffer, foundingSpotsOpen } from '@/lib/foundingOffer';

const baseNavLinks = [
  { label: 'Founder', href: '#founder' },
  { label: 'Method', href: '#method' },
  { label: 'Audit', href: '#audit' },
  { label: 'Industries', href: '#industries' },
];

const navLinks = [
  ...baseNavLinks,
  { label: hasFoundingCaseStudy ? 'Founding Client' : 'Founding Offer', href: '#founding-client' },
];

interface SiteHeaderProps {
  onSubpage?: boolean;
}

export function SiteHeader({ onSubpage = false }: SiteHeaderProps) {
  const { openModal } = useModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setMobileOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-ink/10 bg-bone/90 backdrop-blur-xl"
    >
      {!onSubpage && (
        <div className="border-b border-bone/10 bg-ink px-6 py-[9px] text-center text-[10px] font-bold uppercase tracking-[0.18em] text-bone/70">
          {foundingSpotsOpen ? (
            <>
              Now accepting founding clients <span className="mx-2 text-brass">·</span>{' '}
              {foundingOffer.spotsRemaining} of {foundingOffer.totalSpots} spots open
            </>
          ) : (
            <>
              Now booking clienteling audits <span className="mx-2 text-brass">·</span> Fixed investment:{' '}
              {foundingOffer.standardPrice}
            </>
          )}
        </div>
      )}
      <div className="mx-auto flex h-[78px] w-full max-w-[1480px] items-center justify-between gap-8 px-6 sm:px-8 lg:px-10">
        <div className="flex items-center gap-[13px]">
          <a href="#top" className="flex items-center gap-[13px]">
            <img
              src="/MagnoliaLoopLogo-transparent.png"
              alt="MagnoliaLoop"
              className="h-[52px] w-auto transition-all duration-300 hover:scale-[1.03]"
            />
          </a>
          {onSubpage && (
            <a
              href="#top"
              className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-nav text-ink/70 transition-colors hover:text-brass"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          )}
        </div>

        {!onSubpage && (
          <>
            <nav className="hidden items-center gap-[30px] lg:flex" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[12px] font-bold uppercase tracking-nav text-ink/85 transition-colors hover:text-brass"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => openModal('Header CTA')}
              className="hidden min-h-[48px] items-center justify-center rounded-full bg-ink px-[24px] text-[12px] font-bold uppercase tracking-nav text-bone shadow-[0_8px_24px_rgba(7,22,51,0.14)] transition hover:-translate-y-px hover:bg-green lg:inline-flex"
            >
              Start a conversation
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              className="text-ink lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </>
        )}
      </div>

      {!onSubpage && (
        <nav
          className={`grid gap-[18px] px-6 pb-8 lg:hidden ${mobileOpen ? 'grid' : 'hidden'} bg-bone/95 backdrop-blur-xl`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setMobileOpen(false);
              }}
              className="font-serif text-[28px] text-ink"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              openModal('Header CTA');
            }}
            className="mt-[8px] inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink px-[24px] text-[12px] font-bold uppercase tracking-nav text-bone"
          >
            Start a conversation
          </button>
        </nav>
      )}
    </header>
  );
}

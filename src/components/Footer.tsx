import { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';

const siteLinks = [
  { label: 'Example Engagements', hash: '#/case-studies' },
  { label: 'Terms of Service', hash: '#/legal/terms' },
  { label: 'Privacy Policy', hash: '#/legal/privacy' },
  { label: 'Accessibility', hash: '#/legal/accessibility' },
  { label: 'Cookie Policy', hash: '#/legal/cookies' },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.91l4.713 6.231 5.62-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function Footer() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [socialHover, setSocialHover] = useState<string | null>(null);

  const socials = [
    {
      key: 'email',
      href: 'mailto:hello@magnolia-loop.com',
      label: 'Email',
      icon: Mail,
    },
    {
      key: 'x',
      href: 'https://x.com/magnolialoop',
      label: 'X (Twitter)',
      icon: XIcon,
    },
    {
      key: 'linkedin',
      href: 'https://www.linkedin.com/company/magnolialoop',
      label: 'LinkedIn',
      icon: Linkedin,
    },
  ];

  return (
    <footer className="border-t border-bone/14 bg-ink px-0 pb-[60px] pt-[48px] text-bone/70">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="flex flex-col items-start justify-between gap-[40px] md:flex-row md:items-start">
          <div className="flex flex-col gap-[18px]">
            <span className="flex items-center gap-2">
              <img src="/MagnoliaLoopLogo.png" alt="MagnoliaLoop" className="h-[28px] w-auto" />
              MagnoliaLoop
            </span>
            <span className="text-[12px] normal-case tracking-normal text-bone/65">
              Where Client Relationships Become Revenue
            </span>

            <a
              href="mailto:hello@magnolia-loop.com"
              className="group inline-flex items-center gap-[10px] text-[13px] normal-case tracking-normal transition-colors duration-200"
            >
              <Mail
                className={`h-[15px] w-[15px] transition-colors duration-200 ${
                  socialHover === 'email' ? 'text-brass' : 'text-bone/65'
                }`}
              />
              <span
                className={`transition-colors duration-200 ${
                  socialHover === 'email' ? 'text-bone' : 'text-bone/70'
                }`}
                onMouseEnter={() => setSocialHover('email')}
                onMouseLeave={() => setSocialHover(null)}
              >
                hello@magnolia-loop.com
              </span>
            </a>
          </div>

          <nav aria-label="Site links">
            <ul className="flex flex-col gap-[12px] sm:flex-row sm:flex-wrap sm:gap-x-[28px]">
              {siteLinks.map((link, i) => (
                <li key={link.hash}>
                  <a
                    href={link.hash}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`text-[12px] uppercase tracking-nav transition-colors duration-200 ${
                      hovered === i ? 'text-brass' : 'text-bone/70'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-[36px] flex flex-col items-start justify-between gap-[20px] border-t border-bone/10 pt-[24px] sm:flex-row sm:items-center">
          <span className="text-[12px] uppercase tracking-nav text-bone/65">
            © 2026 MagnoliaLoop. All rights reserved.
          </span>
          <div className="flex items-center gap-[14px]">
            {socials.map((s) => {
              const Icon = s.icon;
              const isHovered = socialHover === s.key;
              return (
                <a
                  key={s.key}
                  href={s.href}
                  aria-label={s.label}
                  target={s.key === 'email' ? undefined : '_blank'}
                  rel={s.key === 'email' ? undefined : 'noopener noreferrer'}
                  onMouseEnter={() => setSocialHover(s.key)}
                  onMouseLeave={() => setSocialHover(null)}
                  className={`flex h-[36px] w-[36px] items-center justify-center rounded-full border transition-all duration-200 ${
                    isHovered
                      ? 'border-brass/50 text-brass'
                      : 'border-bone/15 text-bone/65 hover:border-bone/30'
                  }`}
                >
                  <Icon className="h-[15px] w-[15px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

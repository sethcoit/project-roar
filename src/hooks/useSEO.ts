import { useEffect } from 'react';
import type { Route } from '@/hooks/useRoute';

const metadata: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Magnolia Loop — Where Client Relationships Become Revenue',
    description:
      'Turn existing client relationships into measurable revenue. Magnolia Loop delivers clienteling revenue audits and fractional leadership for luxury and relationship-driven businesses.'
  },
  'case-studies': {
    title: 'Case Studies — Magnolia Loop',
    description:
      'Real engagements with luxury and relationship-driven businesses. See how Magnolia Loop turned dormant client relationships into measurable revenue through clienteling audits and fractional director services.',
  },
  'legal-terms': {
    title: 'Terms of Service — Magnolia Loop',
    description:
      'The terms that govern use of the Magnolia Loop website and our client relationship revenue consulting services.',
  },
  'legal-privacy': {
    title: 'Privacy Policy — Magnolia Loop',
    description:
      'How Magnolia Loop collects, uses, and protects your personal information when you contact us or engage our consulting services.',
  },
  'legal-accessibility': {
    title: 'Accessibility Statement — Magnolia Loop',
    description:
      'Magnolia Loop is committed to making our website accessible to everyone, including individuals with disabilities.',
  },
  'legal-cookies': {
    title: 'Cookie Policy — Magnolia Loop',
    description:
      'How Magnolia Loop uses cookies and similar technologies on our website.',
  },
};

function getMetaKey(route: Route): string {
  if (route.name === 'home') return 'home';
  if (route.name === 'case-studies') return 'case-studies';
  return `legal-${route.section}`;
}

export function useSEO(route: Route) {
  const key = getMetaKey(route);
  const meta = metadata[key] ?? metadata.home;

  useEffect(() => {
    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.description);

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute('content', meta.title);

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) ogDescTag.setAttribute('content', meta.description);

    const twTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twTitleTag) twTitleTag.setAttribute('content', meta.title);

    const twDescTag = document.querySelector('meta[name="twitter:description"]');
    if (twDescTag) twDescTag.setAttribute('content', meta.description);
  }, [meta.title, meta.description]);
}

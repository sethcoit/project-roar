import { useEffect } from 'react';
import type { Route } from '@/hooks/useRoute';

const metadata: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Clienteling Consulting & Revenue Audits | Magnolia Loop',
    description:
      'Founder-led clienteling for luxury and relationship-driven businesses. A fixed-price audit finds the revenue already in your client book.'
  },
  'case-studies': {
    title: 'Example Engagements — Magnolia Loop',
    description:
      'Three common clienteling situations in luxury retail — dormant clients, VIP knowledge held by individual associates, and boutiques without a system — and how Magnolia Loop approaches each one.',
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
  }, [meta.title, meta.description]);
}

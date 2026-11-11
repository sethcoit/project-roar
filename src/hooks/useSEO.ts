import { useEffect } from 'react';
import type { Route } from '@/hooks/useRoute';

const metadata: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Clienteling Consulting & Revenue Audits | MagnoliaLoop',
    description:
      'Founder-led clienteling for luxury and relationship-driven businesses. A fixed-price audit finds the revenue already in your client book.'
  },
  'case-studies': {
    title: 'How I’d Approach Common Clienteling Challenges — MagnoliaLoop',
    description:
      'Three common clienteling situations in luxury retail — dormant clients, VIP knowledge held by individual associates, and boutiques without a system — and how MagnoliaLoop approaches each one.',
  },
  'legal-terms': {
    title: 'Terms of Service — MagnoliaLoop',
    description:
      'The terms that govern use of the MagnoliaLoop website and our client relationship revenue consulting services.',
  },
  'legal-privacy': {
    title: 'Privacy Policy — MagnoliaLoop',
    description:
      'How MagnoliaLoop collects, uses, and protects your personal information when you contact us or engage our consulting services.',
  },
  'legal-accessibility': {
    title: 'Accessibility Statement — MagnoliaLoop',
    description:
      'MagnoliaLoop is committed to making our website accessible to everyone, including individuals with disabilities.',
  },
  'legal-cookies': {
    title: 'Cookie Policy — MagnoliaLoop',
    description:
      'How MagnoliaLoop uses cookies and similar technologies on our website.',
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

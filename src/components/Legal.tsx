import { Shield, FileText, Lock, Mail } from 'lucide-react';

const sections = [
  {
    id: 'terms',
    icon: FileText,
    title: 'Terms of Service',
    body: [
      {
        heading: 'Acceptance of Terms',
        text: 'By accessing or using the MagnoliaLoop website and our consulting services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.',
      },
      {
        heading: 'Description of Services',
        text: 'MagnoliaLoop provides client relationship revenue consulting, including but not limited to clienteling revenue audits, fractional clienteling director services, and strategic advisory engagements. All services are described on our website and confirmed in individual engagement agreements.',
      },
      {
        heading: 'Engagement Agreements',
        text: 'These Terms govern general website use. Specific consulting engagements are governed by separate written agreements that may include additional terms, scopes of work, fees, and deliverables. In the event of any conflict between these Terms and a signed engagement agreement, the engagement agreement controls.',
      },
      {
        heading: 'Fees and Payment',
        text: 'Fees for services are described on our website and confirmed in engagement agreements. Unless otherwise stated, fees are due prior to the commencement of services. The $995 Clienteling Revenue Audit is a one-time fixed investment. Fractional Clienteling Director services are billed monthly at the agreed-upon rate. All fees are non-refundable except as expressly stated in an engagement agreement.',
      },
      {
        heading: 'Intellectual Property',
        text: 'All content on this website, including text, graphics, logos, the MagnoliaLoop name, the MagnoliaLoop Method™, and the MagnoliaLoop logo, is the property of MagnoliaLoop and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.',
      },
      {
        heading: 'Client Confidentiality',
        text: 'We respect the confidentiality of client information shared during engagements. We do not disclose client-specific data, strategies, or findings to third parties without explicit consent, except as required by law.',
      },
      {
        heading: 'Limitation of Liability',
        text: 'MagnoliaLoop provides consulting services on an "as is" basis. We do not guarantee specific revenue outcomes, as results depend on many factors beyond our control, including client implementation and market conditions. To the fullest extent permitted by law, MagnoliaLoop shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of our services or website.',
      },
      {
        heading: 'Third-Party Links',
        text: 'Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of these external sites. Accessing third-party links is at your own risk.',
      },
      {
        heading: 'Changes to Terms',
        text: 'We reserve the right to update these Terms of Service at any time. Changes are effective immediately upon posting to this page. Continued use of our website or services after changes constitutes acceptance of the updated Terms.',
      },
      {
        heading: 'Governing Law',
        text: 'These Terms are governed by the laws of the jurisdiction in which MagnoliaLoop is registered, without regard to conflict of law principles. Any disputes shall be resolved in the courts of that jurisdiction.',
      },
    ],
  },
  {
    id: 'privacy',
    icon: Lock,
    title: 'Privacy Policy',
    body: [
      {
        heading: 'Information We Collect',
        text: 'When you contact us through our website or engage our services, we collect the information you provide, including your name, work email address, company name, and any details you share about your business. We also collect limited technical data such as browser type and pages visited through standard analytics tools.',
      },
      {
        heading: 'How We Use Your Information',
        text: 'We use your information to respond to inquiries, schedule consultations, deliver consulting services, send engagement-related communications, and improve our website and services. We do not sell or rent your personal information to third parties.',
      },
      {
        heading: 'Information Sharing',
        text: 'We may share your information with trusted service providers who assist us in operating our website and business (such as hosting and analytics providers), under contractual obligations of confidentiality. We may also disclose information when required by law or to protect our rights.',
      },
      {
        heading: 'Data Retention',
        text: 'We retain personal information only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your personal information at any time.',
      },
      {
        heading: 'Cookies and Tracking',
        text: 'Our website may use cookies and similar technologies to enhance user experience and analyze traffic. You can control cookies through your browser settings. Disabling cookies may affect some website functionality.',
      },
      {
        heading: 'Data Security',
        text: 'We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
      },
      {
        heading: 'Your Rights',
        text: 'Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the use of your personal information. To exercise any of these rights, contact us using the information provided below.',
      },
      {
        heading: 'Children\'s Privacy',
        text: 'Our website and services are intended for business professionals. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us for prompt removal.',
      },
      {
        heading: 'Policy Updates',
        text: 'We may update this Privacy Policy from time to time. Changes are effective upon posting to this page. We encourage you to review this page periodically.',
      },
    ],
  },
  {
    id: 'accessibility',
    icon: Shield,
    title: 'Accessibility Statement',
    body: [
      {
        heading: 'Our Commitment',
        text: 'MagnoliaLoop is committed to making our website accessible to everyone, including individuals with disabilities. We strive to meet recognized accessibility standards and continually improve the user experience for all visitors.',
      },
      {
        heading: 'Conformance Status',
        text: 'We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. We regularly review our website to identify and address accessibility issues.',
      },
      {
        heading: 'Accessible Features',
        text: 'Our website includes features such as semantic HTML structure, keyboard navigation support, sufficient color contrast, descriptive image alt text, and visible focus indicators.',
      },
      {
        heading: 'Third-Party Content',
        text: 'Our website may include third-party content or links. We do not control the accessibility of third-party content and are not responsible for it.',
      },
      {
        heading: 'Feedback and Assistance',
        text: 'If you experience difficulty accessing any part of our website, or if you need assistance completing a form or reading content, please contact us. We welcome your feedback and will work to resolve accessibility issues promptly.',
      },
    ],
  },
  {
    id: 'cookies',
    icon: Mail,
    title: 'Cookie Policy',
    body: [
      {
        heading: 'What Are Cookies',
        text: 'Cookies are small text files stored on your device when you visit a website. They help the site remember your actions and preferences over time.',
      },
      {
        heading: 'Cookies We Use',
        text: 'We use essential cookies for basic website functionality, analytics cookies to understand how visitors use our site, and preference cookies to remember your settings. We do not use advertising cookies.',
      },
      {
        heading: 'Managing Cookies',
        text: 'You can control or delete cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Note that disabling cookies may impact certain features of our website.',
      },
      {
        heading: 'Updates to This Policy',
        text: 'We may update this Cookie Policy as our use of cookies changes. Updates are effective upon posting to this page.',
      },
    ],
  },
];

interface LegalProps {
  activeSection: string;
}

export function Legal({ activeSection }: LegalProps) {
  const active = sections.find((s) => s.id === activeSection) ?? sections[0];

  return (
    <section className="bg-bone py-[80px] md:py-[120px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mb-[56px]">
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
            <span className="h-px w-8 bg-current" />
            Legal
          </div>
          <h1 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
            Legal &amp; Policies
          </h1>
          <p className="mt-[20px] max-w-[640px] text-[15px] leading-[1.8] text-ink/72">
            The policies below outline how MagnoliaLoop operates, how we handle your information,
            and the terms that govern use of our website and services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[56px] lg:grid-cols-[280px_1fr]">
          <nav aria-label="Legal sections" className="lg:sticky lg:top-[120px] lg:self-start">
            <ul className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
              {sections.map((s) => {
                const Icon = s.icon;
                const isActive = s.id === active.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#/legal/${s.id}`}
                      className={`flex items-center gap-3 rounded-full px-[18px] py-[12px] text-[13px] font-bold uppercase tracking-nav transition-colors duration-200 lg:rounded-none lg:px-0 lg:py-[10px] ${
                        isActive
                          ? 'text-brass lg:border-l-2 lg:border-brass lg:pl-[14px]'
                          : 'text-ink/70 hover:text-ink lg:border-l-2 lg:border-transparent lg:pl-[14px]'
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {s.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <article className="max-w-[760px]">
            <div className="mb-[40px] border-b border-ink/12 pb-[28px]">
              <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-brass">
                <span className="h-px w-8 bg-current" />
                {active.title}
              </div>
              <h2 className="mt-[18px] font-serif text-[clamp(36px,4.5vw,56px)] leading-[1.0] tracking-[-0.03em]">
                {active.title}
              </h2>
            </div>

            <div className="space-y-[36px]">
              {active.body.map((item, i) => (
                <div key={i}>
                  <h3 className="font-serif text-[22px] leading-[1.2] tracking-[-0.02em] text-ink">
                    {item.heading}
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.85] text-ink/68">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[56px] rounded-[20px] border border-ink/10 bg-parchment/40 p-[28px]">
              <h3 className="font-serif text-[20px] tracking-[-0.02em] text-ink">Questions?</h3>
              <p className="mt-[10px] text-[15px] leading-[1.8] text-ink/75">
                If you have any questions about these policies, please contact us at{' '}
                <a
                  href="mailto:hello@magnolia-loop.com"
                  className="font-bold text-brass underline-offset-4 hover:underline"
                >
                  hello@magnolia-loop.com
                </a>
                . We will respond within one business day.
              </p>
            </div>

            <p className="mt-[40px] text-[13px] uppercase tracking-nav text-ink/55">
              Last updated: August 2026
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

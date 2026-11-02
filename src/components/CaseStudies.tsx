import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { foundingOffer, foundingSpotsOpen } from '@/lib/foundingOffer';

// Illustrative scenarios only. Replace with real case studies, with written client
// permission, as founding engagements produce measured results.
const examples = [
  {
    id: 'dormant-reactivation',
    industry: 'Jewelry',
    title: 'Reaching back to clients who quietly went dormant',
    situation:
      'A jewelry house with years of client records spread across spreadsheets, POS exports and associate notes. There is no single client record, no segmentation by potential, and no consistent outreach cadence. High-value clients who have not purchased in two or more years have effectively disappeared from view.',
    approach:
      'I would start with the Clienteling Revenue Audit: consolidating what exists into one working client list, segmenting it by recency, frequency and estimated lifetime value, and identifying the dormant clients most worth reaching first. From there, I would build a tiered outreach calendar tied to real moments — purchase anniversaries, birthdays, new collection launches — so reconnecting never feels transactional.',
    deliverables: [
      'A consolidated, segmented client list',
      'A ranked list of dormant high-value clients',
      'A 90-day reactivation calendar',
      'Personalized outreach templates for each tier',
    ],
    measures: [
      'Dormant clients re-engaged',
      'Appointments booked from outreach',
      'Revenue from reactivated clients',
    ],
  },
  {
    id: 'vip-segmentation',
    industry: 'Fashion',
    title: 'Making VIP knowledge belong to the business, not one associate',
    situation:
      'A multi-location fashion brand whose top clients are served well — by the associates who know them. That knowledge lives in memory and personal phones. When an associate leaves, the relationship often leaves too, and there is no way to see whether outreach is happening consistently.',
    approach:
      'I would define a VIP model based on spend, frequency and relationship depth, then build shared client profiles with preferences, purchase history and a recommended next action. As fractional director, I would introduce monthly reviews that hold the team accountable for outreach quality, not only sales volume.',
    deliverables: [
      'A VIP segmentation framework',
      'A shared client profile template',
      'Associate outreach KPIs',
      'Monthly performance reviews',
    ],
    measures: [
      'VIP profile completion across locations',
      'Outreach-to-appointment conversion',
      'VIP retention when associates change',
    ],
  },
  {
    id: 'boutique-growth',
    industry: 'Watches',
    title: 'Building a clienteling system from scratch for a growing boutique',
    situation:
      'An independent watch boutique with strong product knowledge and personal service, but no CRM, no client profiles and no follow-up process. Growth comes from new foot traffic rather than from clients already served, and repeat business slips as volume increases.',
    approach:
      'I would map the client journey from first visit to post-purchase follow-up, then design a lightweight system a small team can actually maintain: a client profile template, a 30-60-90 day follow-up cadence and a simple VIP tiering. Monthly check-ins would keep the habit in place once the excitement of a new system fades.',
    deliverables: [
      'A client journey map',
      'A client profile template',
      'A 30-60-90 day follow-up cadence',
      'A simple VIP tiering system',
    ],
    measures: [
      'Client profile completion',
      'Repeat purchase rate',
      'Revenue from follow-up outreach',
    ],
  },
  {
    id: 'automotive',
    industry: 'Automotive',
    title: 'Connecting the service lane to the next purchase',
    situation:
      'A luxury dealership where each sales consultant owns their own book and the service department sees owners far more often than sales does — but the two rarely share what they learn. Lease maturities, warranty milestones and model launches pass without a timely, personal conversation.',
    approach:
      'I would map the ownership lifecycle — delivery, service visits, lease maturity, warranty end, new model launches — and turn each milestone into a planned touchpoint inside the dealership\'s existing CRM. A simple service-to-sales handoff would make sure a consultant hears when a valued owner is in the building.',
    deliverables: [
      'An ownership lifecycle trigger calendar',
      'A service-to-sales handoff process',
      'Owner VIP tiers',
      'Consultant outreach templates for each milestone',
    ],
    measures: [
      'Lease-end retention and repurchase rate',
      'Sales appointments from service visits',
      'Lapsed owners re-engaged',
    ],
  },
  {
    id: 'interior-design',
    industry: 'Interior Design',
    title: 'Staying present after the installation is finished',
    situation:
      'An interior design firm whose client relationships are intense during a project and then go quiet. Past clients buy second homes, renovate or refer friends, but the firm only hears about it if the client happens to call. Referral partners such as architects and agents are tracked informally, if at all.',
    approach:
      'I would build a past-client list segmented by property, project scope and time since completion, then design a post-project rhythm — a one-year walkthrough, seasonal refresh ideas, invitations to new work — so the firm stays welcome without selling. Referral partners would get their own simple tracking and thank-you cadence.',
    deliverables: [
      'A segmented past-client database',
      'A post-project follow-up cadence',
      'A referral partner tracker',
      'Personal outreach templates for each touchpoint',
    ],
    measures: [
      'Repeat projects from past clients',
      'Referrals received and their source',
      'Time between projects for returning clients',
    ],
  },
  {
    id: 'real-estate',
    industry: 'Real Estate',
    title: 'Turning closed transactions into a lasting sphere',
    situation:
      'A luxury brokerage whose agents keep their past clients in personal phones and inboxes. Contact fades after closing, and when an agent leaves, the brokerage keeps none of the relationship. Repeat and referral business depends on who happens to remember whom.',
    approach:
      'I would create a brokerage-owned standard for past-client records, segment the sphere by transaction history — time since purchase, property type and price point — and build a cadence of closing anniversaries, relevant market updates and personal check-ins that each agent can keep up without a marketing team.',
    deliverables: [
      'A brokerage-owned client record standard',
      'A segmented sphere-of-influence database',
      'A closing-anniversary and market-update calendar',
      'Agent outreach templates',
    ],
    measures: [
      'Repeat and referral transactions',
      'Past-client response rate',
      'Relationships retained when agents leave',
    ],
  },
  {
    id: 'aesthetics',
    industry: 'Aesthetics',
    title: 'From consultation to a lasting patient relationship',
    situation:
      'A plastic surgery and aesthetic practice where many consultations never become procedures, and treatments that need maintenance are left for patients to remember on their own. Patient coordinators follow up when they have time, so the experience depends on who is busiest that week.',
    approach:
      'Working entirely inside the practice\'s existing HIPAA-compliant systems and consent policies, I would design a consultation follow-up sequence, a maintenance schedule tied to each treatment type, and patient tiers based on visit history. Coordinators would get clear scripts so follow-up feels like care, not sales.',
    deliverables: [
      'A consultation follow-up sequence',
      'A treatment-based maintenance reminder calendar',
      'Patient tiers based on visit history',
      'Patient coordinator scripts',
    ],
    measures: [
      'Consultation-to-procedure conversion',
      'Maintenance rebooking rate',
      'Lapsed patients re-engaged',
    ],
  },
  {
    id: 'hospitality',
    industry: 'Hospitality & Concierge',
    title: 'Remembering every guest the way your best staff do',
    situation:
      'A hotel, concierge service or private members\' club where preferences are noted at the front desk but rarely reach the rest of the team. Members drift away quietly, and the annual renewal notice is often the first personal contact in months.',
    approach:
      'I would define a shared preference profile every team member can use, identify the signals that a guest or member is drifting away — fewer visits, unused benefits — and build personal touchpoints before arrivals and well ahead of renewals, so recognition happens consistently, not by chance.',
    deliverables: [
      'A guest and member preference profile standard',
      'Early-warning indicators for lapsing members',
      'Pre-arrival and pre-renewal touchpoints',
      'A VIP recognition playbook for staff',
    ],
    measures: [
      'Return stays and renewal rate',
      'Member engagement between renewals',
      'At-risk members retained',
    ],
  },
  {
    id: 'yacht-aviation',
    industry: 'Yachts & Aviation',
    title: 'Keeping long, discreet relationships warm between transactions',
    situation:
      'A yacht or aircraft brokerage where transactions are rare, cycles are long, and each client relationship sits with one broker. Charter clients who could become owners, and owners approaching an upgrade or sale, are followed up on instinct rather than by plan.',
    approach:
      'I would map each client\'s ownership lifecycle — charter, purchase, upgrade, sale — and track the milestones that signal the next move. Outreach would be infrequent, discreet and meaningful: show invitations, relevant new builds or listings, and personal check-ins timed to ownership anniversaries.',
    deliverables: [
      'An ownership lifecycle tracker',
      'A charter-to-ownership pathway',
      'A discreet outreach calendar around shows and launches',
      'A broker client profile standard',
    ],
    measures: [
      'Charter-to-ownership conversion',
      'Repeat transactions and upgrades',
      'Time between transactions',
    ],
  },
  {
    id: 'bakery-restaurant',
    industry: 'Bakery & Restaurant',
    title: 'Turning regulars and celebration orders into a yearly rhythm',
    situation:
      'A bakery and restaurant where the staff know the regulars by face, but the business has no list of them. Birthday cakes, holiday orders and office catering arrive once and are never followed up, even though the same occasion comes around every year. Guest information is scattered across the POS, online ordering and reservation systems.',
    approach:
      'I would pull the guest information already sitting in those systems into one simple list, then build an occasion calendar from past celebration and catering orders — so a family hears from you a few weeks before next year\'s birthday, and an office before its holiday party. Staff would get a lightweight way to note regulars\' names and favorites so recognition does not depend on who is working.',
    deliverables: [
      'One guest list built from existing order data',
      'An annual occasion and reorder calendar',
      'A catering and corporate account follow-up cadence',
      'A simple regulars recognition practice for staff',
    ],
    measures: [
      'Repeat celebration orders year over year',
      'Catering and corporate reorders',
      'Visit frequency of regular guests',
    ],
  },
];

export function CaseStudies() {
  const { openModal } = useModal();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = examples[activeIndex];

  return (
    <section className="bg-bone py-[80px] md:py-[120px]">
      <div className="mx-auto w-full max-w-site px-6">
        <div className="mb-[56px]">
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow text-green">
            <span className="h-px w-8 bg-current" />
            Example Engagements
          </div>
          <h1 className="mt-[22px] font-serif text-[clamp(48px,6.2vw,88px)] leading-[0.96] tracking-[-0.04em]">
            What the work looks like.
          </h1>
          <p className="mt-[20px] max-w-[640px] text-[15px] leading-[1.8] text-ink/70">
            Magnolia Loop is new, so rather than publish results I do not yet have, here are common
            situations in relationship-driven businesses — and how I would approach each one. Real case
            studies will appear here as founding engagements produce measured results.
          </p>
        </div>

        <div className="mb-[48px] flex flex-wrap gap-[12px]">
          {examples.map((ex, i) => (
            <button
              key={ex.id}
              onClick={() => setActiveIndex(i)}
              aria-pressed={i === activeIndex}
              className={`rounded-full border px-[20px] py-[10px] text-[12px] font-bold uppercase tracking-nav transition-all duration-200 ${
                i === activeIndex
                  ? 'border-ink bg-ink text-bone'
                  : 'border-ink/20 text-ink/70 hover:border-ink/40 hover:text-ink'
              }`}
            >
              {ex.industry}
            </button>
          ))}
        </div>

        <article
          key={active.id}
          aria-live="polite"
          className="animate-[fadeIn_0.4s_ease-out] overflow-hidden rounded-[32px] border border-ink/8 bg-parchment/30"
        >
          <div className="bg-ink p-[32px] text-bone md:p-[48px]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-bold uppercase tracking-eyebrow">
              <span className="flex items-center gap-3 text-brass">
                <span className="h-px w-8 bg-current" />
                {active.industry}
              </span>
              <span className="rounded-full border border-bone/25 px-[12px] py-[4px] text-[10px] tracking-nav text-bone/70">
                Illustrative example — not a client result
              </span>
            </div>
            <h2 className="mt-[18px] max-w-[760px] font-serif text-[clamp(28px,3.5vw,48px)] leading-[1.05] tracking-[-0.03em]">
              {active.title}
            </h2>
          </div>

          <div className="p-[32px] md:p-[48px]">
            <div className="grid grid-cols-1 gap-[40px] lg:grid-cols-[1fr_1fr]">
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-eyebrow text-green">
                  The Situation
                </h3>
                <p className="mt-[16px] text-[15px] leading-[1.85] text-ink/72">{active.situation}</p>
              </div>
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-eyebrow text-green">
                  How I Would Approach It
                </h3>
                <p className="mt-[16px] text-[15px] leading-[1.85] text-ink/72">{active.approach}</p>
              </div>
            </div>

            <div className="mt-[48px] grid grid-cols-1 gap-[28px] border-t border-ink/12 pt-[36px] sm:grid-cols-2">
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-eyebrow text-green">
                  What You Would Receive
                </h3>
                <ul className="mt-[18px] space-y-[12px]">
                  {active.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-[1.65] text-ink/78">
                      <Check className="mt-[3px] h-4 w-4 shrink-0 text-brass" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-eyebrow text-green">
                  What We Would Measure
                </h3>
                <ul className="mt-[18px] space-y-[12px]">
                  {active.measures.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-[1.65] text-ink/78">
                      <span className="mt-[11px] h-px w-3 shrink-0 bg-brass" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-[48px] flex items-center justify-between">
          <div className="flex gap-[10px]">
            {examples.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Example ${i + 1}`}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-[32px] bg-ink' : 'w-[6px] bg-ink/20 hover:bg-ink/40'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-[10px]">
            <button
              onClick={() => setActiveIndex((i) => (i - 1 + examples.length) % examples.length)}
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-ink/20 text-ink/60 transition hover:border-ink/40 hover:text-ink"
              aria-label="Previous example"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveIndex((i) => (i + 1) % examples.length)}
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-ink/20 text-ink/60 transition hover:border-ink/40 hover:text-ink"
              aria-label="Next example"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-[64px] rounded-[24px] border border-ink/10 bg-parchment/40 p-[36px] text-center md:p-[48px]">
          {foundingSpotsOpen ? (
            <>
              <div className="text-[12px] font-bold uppercase tracking-nav text-brass">
                Founding Clients · {foundingOffer.spotsRemaining} of {foundingOffer.totalSpots} open
              </div>
              <h2 className="mx-auto mt-[14px] max-w-[680px] font-serif text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.03em] text-ink">
                Become the first real case study.
              </h2>
              <p className="mx-auto mt-[16px] max-w-[540px] text-[15px] leading-[1.8] text-ink/70">
                Founding clients receive the full Clienteling Revenue Audit for{' '}
                {foundingOffer.foundingPrice} (standard {foundingOffer.standardPrice}), led personally by
                me, in exchange for honest feedback and permission to document the results.
              </p>
              <button
                onClick={() => openModal('Founding Client — Apply')}
                className="mt-[28px] inline-flex min-h-[52px] items-center justify-center rounded-full bg-ink px-[26px] text-[12px] font-bold uppercase tracking-nav text-bone shadow-[0_12px_26px_rgba(7,22,51,0.16)] transition hover:-translate-y-px hover:bg-green"
              >
                Apply for a Founding Spot →
              </button>
            </>
          ) : (
            <>
              <h2 className="mx-auto max-w-[680px] font-serif text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.03em] text-ink">
                See what is in your client book.
              </h2>
              <p className="mx-auto mt-[16px] max-w-[520px] text-[15px] leading-[1.8] text-ink/70">
                Start with a {foundingOffer.standardPrice} Clienteling Revenue Audit and find the revenue
                already in your client book.
              </p>
              <button
                onClick={() => openModal('Case Studies — Book the Audit')}
                className="mt-[28px] inline-flex min-h-[52px] items-center justify-center rounded-full bg-ink px-[26px] text-[12px] font-bold uppercase tracking-nav text-bone shadow-[0_12px_26px_rgba(7,22,51,0.16)] transition hover:-translate-y-px hover:bg-green"
              >
                Book the {foundingOffer.standardPrice} Audit →
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

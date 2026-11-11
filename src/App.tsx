import { ModalProvider } from '@/context/ModalContext';
import { SiteHeader } from '@/components/SiteHeader';
import { Hero } from '@/components/Hero';
import { Opportunity } from '@/components/Opportunity';
import { FoundingClient, hasFoundingCaseStudy } from '@/components/FoundingClient';
import { FoundingOffer } from '@/components/FoundingOffer';
import { DormantRevenueCalculator } from '@/components/DormantRevenueCalculator';
import { Method } from '@/components/Method';
import { Audit } from '@/components/Audit';
import { AuditSample } from '@/components/AuditSample';
import { Fractional } from '@/components/Fractional';
import { Path } from '@/components/Path';
import { AboutFounder } from '@/components/AboutFounder';
import { Industries } from '@/components/Industries';
import { FinalCTA } from '@/components/FinalCTA';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';
import { ContactModal } from '@/components/ContactModal';
import { Legal } from '@/components/Legal';
import { CaseStudies } from '@/components/CaseStudies';
import { useRoute } from '@/hooks/useRoute';
import { useSEO } from '@/hooks/useSEO';

function App() {
  const route = useRoute();
  const isSubpage = route.name === 'legal' || route.name === 'case-studies';
  useSEO(route);

  return (
    <ModalProvider>
      <SiteHeader onSubpage={isSubpage} />
      <main aria-label="Main content">
        {route.name === 'legal' ? (
          <Legal activeSection={route.section} />
        ) : route.name === 'case-studies' ? (
          <CaseStudies />
        ) : (
          <>
            <Hero />
            <AboutFounder />
            <Opportunity />
            <DormantRevenueCalculator />
            {hasFoundingCaseStudy ? <FoundingClient /> : <FoundingOffer />}
            <Method />
            <Audit />
            <AuditSample />
            <Fractional />
            <Path />
            <Industries />
            <FAQ />
            <FinalCTA />
          </>
        )}
      </main>
      <Footer />
      {!isSubpage && <StickyCTA />}
      <ContactModal />
    </ModalProvider>
  );
}

export default App;

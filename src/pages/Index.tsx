
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import TrustedBrands from '@/components/TrustedBrands';
import ValueProposition from '@/components/ValueProposition';
import StatsSection from '@/components/StatsSection';
import FeatureCards from '@/components/FeatureCards';
import ServicesGrid from '@/components/ServicesGrid';
import PositioningSection from '@/components/PositioningSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LeadGenPopup from '@/components/LeadGenPopup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <TrustedBrands />
      <ValueProposition />
      <StatsSection />
      <FeatureCards />
      <ServicesGrid />
      <PositioningSection />
      <Footer />
      <WhatsAppFloat />
      <LeadGenPopup />
    </div>
  );
};

export default Index;

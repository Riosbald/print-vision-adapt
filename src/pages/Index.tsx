
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeatureCards from '@/components/FeatureCards';
import ServicesGrid from '@/components/ServicesGrid';
import PositioningSection from '@/components/PositioningSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeatureCards />
      <ServicesGrid />
      <PositioningSection />
      <Footer />
    </div>
  );
};

export default Index;

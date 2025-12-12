import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import InfoSections from '@/components/InfoSections';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CatalogSection />
      <InfoSections />
    </div>
  );
};

export default Index;

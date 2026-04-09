import GeometricBackground from "@/components/GeometricBackground";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SignupSection from "@/components/SignupSection";
import SocialProofSection from "@/components/SocialProofSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GeometricBackground />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <SignupSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SignupSection from "@/components/SignupSection";
import SocialProofSection from "@/components/SocialProofSection";
import Footer from "@/components/Footer";
import useReveal from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      
      <AnnouncementBar />
      <main className="relative z-10 pt-10">
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

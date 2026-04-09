import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Logo glow */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl rounded-full animate-pulse-glow" />
        <img
          src="/logo.png"
          alt="AIinARABIA Logo"
          className="relative w-48 h-48 md:w-64 md:h-64 object-contain"
          loading="eager"
        />
      </div>

      {/* Tagline */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        AI Hype to{" "}
        <span className="gradient-text">Real-World Impact</span>
        {" "}in the Middle East
      </h1>

      {/* Subtext */}
      <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        The MENA region's definitive source for AI news, expert guides, smart tools, and in-depth analysis. From the team behind{" "}
        <a href="https://aiinasia.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline underline-offset-4">
          AIinAsia.com
        </a>.
      </p>

      {/* Scroll indicator */}
      <a href="#features" className="absolute bottom-8 animate-bounce-chevron">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </a>
    </section>
  );
};

export default HeroSection;

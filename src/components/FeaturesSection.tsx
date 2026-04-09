import { Newspaper, BarChart3, GraduationCap, Wrench, Palette, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Newspaper,
    title: "Daily AI Briefing",
    description: "Your '3 Before 9' morning brief, curated for the MENA region",
  },
  {
    icon: BarChart3,
    title: "Business & Policy",
    description: "Enterprise AI adoption, regulation, and investment across the Gulf and beyond",
  },
  {
    icon: GraduationCap,
    title: "Learn & Guides",
    description: "Practical AI guides, tutorials, and prompt libraries in Arabic and English",
  },
  {
    icon: Wrench,
    title: "AI Tools",
    description: "Company directory, readiness scores, glossary, and more, localised for MENA",
  },
  {
    icon: Palette,
    title: "Create",
    description: "AI-powered creative workflows, prompt engineering, and hands-on experiments",
  },
  {
    icon: Globe,
    title: "MENA Focus",
    description: "Coverage spanning UAE, Saudi Arabia, Egypt, Qatar, and the wider region",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-display font-extrabold text-center mb-4">
          What's <span className="gradient-text">Coming</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Everything you need to stay ahead of AI in the Middle East and North Africa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="glass-card p-6 group animate-fade-in-up"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <feature.icon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

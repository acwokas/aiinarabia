const stats = [
  { value: "40K", label: "Readers" },
  { value: "1,500", label: "Articles Published" },
  { value: "100+", label: "Guides" },
  { value: "15", label: "Interactive Tools" },
];

const SocialProofSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Dubai skyline background */}
      <div
        className="absolute inset-0 opacity-[0.15] blur-xl"
        style={{
          backgroundImage: `url('/dubai-skyline.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="glass-card p-8 md:p-12 reveal">
          <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
            <a
              href="https://aiinasia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-semibold"
            >
              AIinAsia.com
            </a>{" "}
            is the Asia-Pacific's leading independent AI publication, now expanding to the Middle East.
          </p>

          <div className="w-16 h-[2px] mx-auto bg-gradient-to-r from-primary to-secondary mb-6" />

          {/* Stats row */}
          <div className="flex justify-center gap-8 md:gap-16 my-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold gradient-text">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Part of the{" "}
            <a
              href="https://you.withthepowerof.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors underline underline-offset-4"
            >
              You.WithThePowerOf.AI
            </a>{" "}
            collective
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

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
        <div className="glass-card p-8 md:p-12">
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

import { ChevronDown } from "lucide-react";

const AnnouncementBar = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href="#signup"
      onClick={handleClick}
      className="fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center gap-2 backdrop-blur-xl border-b border-white/[0.06] text-sm text-foreground/80 hover:text-foreground transition-all cursor-pointer"
      style={{
        background: 'linear-gradient(90deg, hsla(188,80%,50%,0.08) 0%, hsla(263,90%,66%,0.08) 50%, hsla(38,92%,50%,0.05) 100%)',
      }}
    >
      <span className="font-medium tracking-wide"><span className="font-medium tracking-wide">AI in Arabia launches Q3 2026</span></span>
      <span className="text-muted-foreground mx-1">|</span>
      <span className="text-primary font-semibold">Join the waitlist</span>
      <ChevronDown className="w-3.5 h-3.5 text-primary/60 ml-0.5" />
    </a>
  );
};

export default AnnouncementBar;

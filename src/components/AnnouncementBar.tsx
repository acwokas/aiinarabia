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
      className="fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 backdrop-blur-md border-b border-white/5 text-sm text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
    >
      <span>AIinARABIA launches Q3 2026 — Join the waitlist</span>
      <ChevronDown className="w-4 h-4" />
    </a>
  );
};

export default AnnouncementBar;

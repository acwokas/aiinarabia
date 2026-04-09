import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const SignupSection = () => {
  const [email, setEmail] = useState("");
  const [earlyAccess, setEarlyAccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 255) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/arabia@aiinasia.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          "Beta Access Requested": earlyAccess ? "Yes" : "No",
          _subject: `AIinARABIA Waitlist${earlyAccess ? " - Beta Access" : ""}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "You're on the list! 🎉",
          description: "We'll be in touch soon.",
        });
        setEmail("");
        setEarlyAccess(false);
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      // Fallback to mailto
      const subject = encodeURIComponent(
        `AIinARABIA Waitlist${earlyAccess ? " - Beta Access" : ""}`
      );
      const body = encodeURIComponent(
        `Email: ${email}\nBeta Access: ${earlyAccess ? "Yes" : "No"}`
      );
      window.open(`mailto:arabia@aiinasia.com?subject=${subject}&body=${body}`, "_blank");
      toast({
        title: "Almost there!",
        description: "Your email client should open to complete signup.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="signup" className="relative py-24 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-display font-extrabold mb-4">
          Be the <span className="gradient-text">First to Know</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Join the early access list. We'll notify you the moment AIinARABIA goes live.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={255}
              className="flex-1 bg-muted/50 border-border h-12 text-base placeholder:text-muted-foreground/50 focus-visible:ring-primary"
            />
            <button
              type="submit"
              disabled={loading}
              className="h-12 px-8 rounded-lg font-semibold text-sm bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all disabled:opacity-50 whitespace-nowrap cursor-pointer"
            >
              {loading ? "Sending..." : "Notify Me"}
            </button>
          </div>

          <label className="flex items-center gap-3 justify-center cursor-pointer select-none">
            <Checkbox
              checked={earlyAccess}
              onCheckedChange={(checked) => setEarlyAccess(checked === true)}
              className="border-muted-foreground/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <span className="text-sm text-muted-foreground">
              I'd like early access to contribute, test, or write for AIinARABIA
            </span>
          </label>
        </form>

        <p className="text-xs text-muted-foreground/40 mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default SignupSection;

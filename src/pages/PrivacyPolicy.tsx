import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 pt-20 pb-16">
        {/* Logo */}
        <Link to="/" className="inline-block mb-12">
          <img src="/logo.png" alt="AI in Arabia" className="h-10 w-auto" />
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-display font-extrabold gradient-text mb-3">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: April 2026</p>

        {/* Introduction */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">Introduction</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          AI in ARABIA ("we", "us", or "our") operates the website aiinarabia.com. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or sign up for our waitlist. We are committed to protecting your privacy and handling your data transparently.
        </p>

        {/* Information We Collect */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">Information We Collect</h2>
        <h3 className="text-base font-display font-semibold text-foreground/80 mb-2 mt-6">Information you provide directly</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          When you join our waitlist, we collect your email address and whether you have opted in for early access. This information is submitted via FormSubmit and sent to our team email. We do not store this data in a database on our servers.
        </p>
        <h3 className="text-base font-display font-semibold text-foreground/80 mb-2 mt-6">Information collected automatically</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          We use Google Analytics to collect anonymous usage data, including: pages visited, time spent on pages, referring websites, browser type and version, device type, and approximate geographic location (country/city level). This data is collected using cookies and similar tracking technologies.
        </p>

        {/* How We Use Your Information */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">How We Use Your Information</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          We use your information to: notify you when AI in ARABIA launches, send relevant updates about our platform (only if you opted in), analyse website traffic and usage patterns to improve our site, and understand our audience demographics.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">Cookies</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          We use the following types of cookies: essential cookies required for basic site functionality, and analytics cookies (Google Analytics) to understand how visitors interact with our site. You can control cookie preferences through your browser settings. Disabling cookies may affect your experience on our site.
        </p>

        {/* Third-Party Services */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">Third-Party Services</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          We use the following third-party services that may process your data: Google Analytics (usage analytics — see{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
            Google's privacy policy
          </a>
          ), and FormSubmit (form processing — data is transmitted to our email and not stored by FormSubmit beyond delivery).
        </p>

        {/* Data Retention */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">Data Retention</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Waitlist email addresses are retained until the site launches and you are notified, or until you request removal. Analytics data is retained according to Google Analytics' default retention settings (14 months).
        </p>

        {/* Your Rights */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">Your Rights</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          You have the right to: request access to the personal data we hold about you, request correction or deletion of your personal data, withdraw consent for marketing communications at any time, and request information about how your data is processed. To exercise any of these rights, contact us at{" "}
          <a href="mailto:hello@aiinarabia.com" className="text-primary hover:text-accent transition-colors">
            hello@aiinarabia.com
          </a>.
        </p>

        {/* Data Security */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">Data Security</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          We implement appropriate technical and organisational measures to protect your personal data. However, no method of transmission over the internet is 100% secure.
        </p>

        {/* International Data Transfers */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">International Data Transfers</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Your data may be processed in countries outside your country of residence, including the United States (Google Analytics) and where our team operates. We ensure appropriate safeguards are in place for such transfers.
        </p>

        {/* Children's Privacy */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">Children's Privacy</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Our website is not directed at children under 16. We do not knowingly collect personal data from children.
        </p>

        {/* Changes to This Policy */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">Changes to This Policy</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised "Last updated" date.
        </p>

        {/* Contact Us */}
        <h2 className="text-xl font-display font-bold text-foreground mb-3 mt-10">Contact Us</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          If you have questions about this Privacy Policy, contact us at:{" "}
          <a href="mailto:contact@aiinasia.com" className="text-primary hover:text-accent transition-colors">
            contact@aiinasia.com
          </a>
        </p>

        {/* Collective */}
        <p className="text-muted-foreground/60 text-xs mt-12 mb-8 text-center">
          AI in ARABIA is part of the{" "}
          <a href="https://you.withthepowerof.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
            You.WithThePowerOf.AI
          </a>{" "}
          collective
        </p>

        {/* Back to home */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

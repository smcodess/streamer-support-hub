import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import StreamerShowcase from "@/components/StreamerShowcase";
import TipForm from "@/components/TipForm";
import { Sparkles, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero background */}
      <div className="fixed inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container py-6">
          <nav className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-3">
              <Link to="/waitlist">
                <Button variant="outline" className="hidden sm:flex">
                  <Sparkles className="h-4 w-4" />
                  For Streamers
                </Button>
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content - Split Layout */}
        <main className="container py-8 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Streamer Showcase */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">No Platform Cuts</span>
                </div>
                <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Support creators{" "}
                  <span className="gradient-text">directly</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Send tips to your favorite streamers without losing 30-50% to platforms. Every rupee goes to them.
                </p>
              </div>

              <StreamerShowcase
                name="ProGamer_Alex"
                tagline="Grinding ranks & making memories"
                stats={{
                  followers: "125K",
                  games: "VALORANT",
                  schedule: "9 PM IST",
                }}
              />

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm">Instant delivery</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">Secure payments</span>
                </div>
              </div>
            </div>

            {/* Right - Tip Form */}
            <div className="lg:sticky lg:top-8">
              <TipForm />
            </div>
          </div>
        </main>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="gaming-card text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl font-bold mb-3">
              Are you a streamer?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get your own SuperTip page and start receiving direct tips from fans.
            </p>
            <Link to="/waitlist">
              <Button variant="glow-secondary" size="lg">
                <Sparkles className="h-5 w-5" />
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="container py-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Logo size="sm" />
            <p className="text-muted-foreground text-sm">
              © 2024 SuperTip. Zero cuts, 100% to creators.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

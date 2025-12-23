import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import StreamerCard from "@/components/StreamerCard";
import TipForm from "@/components/TipForm";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container py-6">
          <nav className="flex items-center justify-between">
            <Logo />
            <Link to="/waitlist">
              <Button variant="outline" size="sm">
                <Sparkles className="h-4 w-4" />
                For Streamers
              </Button>
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container py-12">
          <div className="max-w-md mx-auto space-y-6">
            <StreamerCard 
              name="ProGamer_Alex" 
              tagline="Daily streams @ 9 PM IST • VALORANT & More"
            />
            <TipForm />
          </div>

          {/* CTA Section */}
          <section className="mt-20 text-center">
            <p className="text-muted-foreground mb-4">
              Want SuperTip for your streams?
            </p>
            <Link to="/waitlist">
              <Button variant="glow-secondary" size="lg">
                <Sparkles className="h-5 w-5" />
                Join Waitlist
              </Button>
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer className="container py-8 text-center">
          <p className="text-muted-foreground text-sm">
            Zero platform cuts. 100% to creators.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

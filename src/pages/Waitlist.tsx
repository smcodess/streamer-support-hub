import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import { ArrowLeft, CheckCircle2, Zap, Users, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const features = [
  {
    icon: Zap,
    title: "Zero Platform Cuts",
    description: "Keep 100% of what your fans send you",
  },
  {
    icon: Users,
    title: "Instant Setup",
    description: "Get your tip page live in under 2 minutes",
  },
  {
    icon: TrendingUp,
    title: "Built for Gamers",
    description: "Designed specifically for gaming creators",
  },
];

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    setSubmitted(true);
    toast.success("You're on the list! 🎉");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container py-6">
          <nav className="flex items-center justify-between">
            <Logo />
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get <span className="gradient-text">SuperTip</span> for your streams
            </h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto">
              Stop losing 30-50% to platforms. Get direct tips from your fans with zero cuts.
            </p>

            {/* Waitlist Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" variant="glow" size="lg">
                    Join Waitlist
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Be the first to know when we launch. No spam, ever.
                </p>
              </form>
            ) : (
              <div className="gaming-card max-w-md mx-auto mb-16 text-center border-glow">
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">You're on the list!</h3>
                <p className="text-muted-foreground">
                  We'll reach out as soon as SuperTip is ready for you.
                </p>
              </div>
            )}

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="gaming-card text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
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

export default Waitlist;

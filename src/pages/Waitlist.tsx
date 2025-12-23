import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import { ArrowLeft, CheckCircle2, Zap, Users, TrendingUp, Percent, Sparkles } from "lucide-react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Percent,
    title: "Zero Cuts",
    description: "Keep every single rupee your fans send you",
    gradient: "from-primary to-cyan-300",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Your tip page is live in under 2 minutes",
    gradient: "from-secondary to-pink-300",
  },
  {
    icon: Users,
    title: "Fan Connection",
    description: "See messages and build stronger community bonds",
    gradient: "from-yellow-500 to-orange-400",
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    description: "Analytics and insights to grow your channel",
    gradient: "from-green-500 to-emerald-400",
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
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero background */}
      <div className="fixed inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container py-6">
          <nav className="flex items-center justify-between">
            <Logo />
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4" />
                Back to Demo
              </Button>
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container py-12 lg:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Early Access</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your fans want to{" "}
                <span className="gradient-text">support you</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Stop losing 30-50% to platforms. Get a beautiful tip page and keep 100% of what your community sends.
              </p>

              {/* Waitlist Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-14 text-base"
                    />
                    <Button type="submit" variant="glow" size="xl">
                      <Sparkles className="h-5 w-5" />
                      Join Waitlist
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Be first in line. No spam, just launch updates.
                  </p>
                </form>
              ) : (
                <div className="gaming-card max-w-md mx-auto border-glow">
                  <div className="flex flex-col items-center py-4">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 blur-xl bg-primary/40" />
                      <CheckCircle2 className="relative h-16 w-16 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-2">You're in!</h3>
                    <p className="text-muted-foreground text-center">
                      We'll reach out as soon as SuperTip is ready for you.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="gaming-card text-center group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-5 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-7 w-7 text-background" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Social proof teaser */}
            <div className="mt-20 text-center">
              <p className="text-muted-foreground mb-4">
                Join 500+ streamers already on the waitlist
              </p>
              <div className="flex justify-center -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-bold text-muted-foreground">
                  +495
                </div>
              </div>
            </div>
          </div>
        </main>

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

export default Waitlist;

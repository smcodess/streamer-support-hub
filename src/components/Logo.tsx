import { Zap } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Zap className="h-8 w-8 text-primary fill-primary" />
        <div className="absolute inset-0 blur-md bg-primary/40" />
      </div>
      <span className="font-heading text-2xl font-bold tracking-wider">
        Super<span className="text-primary text-glow">Tip</span>
      </span>
    </div>
  );
};

export default Logo;

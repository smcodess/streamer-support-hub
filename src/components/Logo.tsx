import { Zap } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo = ({ size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: "h-5 w-5", text: "text-lg" },
    md: { icon: "h-7 w-7", text: "text-2xl" },
    lg: { icon: "h-10 w-10", text: "text-4xl" },
  };

  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <div className="absolute inset-0 blur-xl bg-gradient-to-r from-primary to-secondary opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className="relative bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
          <Zap className={`${sizes[size].icon} text-primary-foreground fill-current`} />
        </div>
      </div>
      <span className={`font-heading ${sizes[size].text} font-bold tracking-wider`}>
        Super<span className="gradient-text">Tip</span>
      </span>
    </div>
  );
};

export default Logo;

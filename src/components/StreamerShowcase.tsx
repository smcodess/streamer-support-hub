import streamerBanner from "@/assets/streamer-banner.jpg";
import { Gamepad2, Users, Clock } from "lucide-react";

interface StreamerShowcaseProps {
  name: string;
  tagline?: string;
  stats?: {
    followers?: string;
    games?: string;
    schedule?: string;
  };
}

const StreamerShowcase = ({
  name,
  tagline = "Support your favorite streamer!",
  stats = {
    followers: "125K",
    games: "VALORANT",
    schedule: "9 PM IST",
  },
}: StreamerShowcaseProps) => {
  return (
    <div className="relative">
      {/* Floating glow orbs */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Main card */}
      <div className="relative gaming-card overflow-hidden">
        {/* Banner image */}
        <div className="relative h-56 -m-8 mb-6 overflow-hidden">
          <img
            src={streamerBanner}
            alt={`${name}'s banner`}
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        </div>

        {/* Streamer info */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
            <span className="text-sm text-green-400 font-medium">LIVE NOW</span>
          </div>
          
          <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
            {name}
          </h2>
          <p className="text-muted-foreground text-lg mb-6">{tagline}</p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{stats.followers}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border">
              <Gamepad2 className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">{stats.games}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{stats.schedule}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamerShowcase;

import streamerBanner from "@/assets/streamer-banner.jpg";

interface StreamerCardProps {
  name: string;
  tagline?: string;
}

const StreamerCard = ({ name, tagline = "Support your favorite streamer!" }: StreamerCardProps) => {
  return (
    <div className="gaming-card overflow-hidden border-glow">
      <div className="relative h-48 -m-6 mb-4 overflow-hidden">
        <img
          src={streamerBanner}
          alt={`${name}'s banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="font-heading text-xl font-bold text-foreground text-glow">
            {name}
          </h2>
          <p className="text-muted-foreground text-sm">{tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default StreamerCard;

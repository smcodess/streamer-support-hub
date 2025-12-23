import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Zap, Heart, Flame, Crown, Star } from "lucide-react";
import { toast } from "sonner";

const PRESET_TIERS = [
  { amount: 50, label: "Cheer", icon: Heart, color: "text-pink-400" },
  { amount: 100, label: "Hype", icon: Flame, color: "text-orange-400" },
  { amount: 500, label: "Legend", icon: Crown, color: "text-yellow-400" },
  { amount: 1000, label: "Ultra", icon: Star, color: "text-primary" },
];

const TipForm = () => {
  const [amount, setAmount] = useState("");
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const maxChars = 150;

  const handleTierSelect = (tierAmount: number) => {
    setSelectedTier(tierAmount);
    setAmount(tierAmount.toString());
  };

  const handleCustomAmount = (value: string) => {
    setAmount(value);
    setSelectedTier(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || Number(amount) < 1) {
      toast.error("Please enter a valid amount");
      return;
    }

    const tier = PRESET_TIERS.find((t) => t.amount === Number(amount));
    
    toast.success(
      <div className="flex items-center gap-2">
        <Zap className="h-5 w-5 text-primary" />
        <span>
          {tier ? `${tier.label} Tip` : "SuperTip"} sent!
        </span>
      </div>,
      {
        description: `₹${amount} from ${name || "Anonymous"}`,
      }
    );

    setAmount("");
    setSelectedTier(null);
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="gaming-card space-y-6">
      <div className="text-center mb-2">
        <h3 className="font-heading text-xl font-bold mb-1">Send a Tip</h3>
        <p className="text-sm text-muted-foreground">100% goes to the creator</p>
      </div>

      {/* Tier selection */}
      <div className="grid grid-cols-2 gap-3">
        {PRESET_TIERS.map((tier) => {
          const isSelected = selectedTier === tier.amount;
          return (
            <button
              key={tier.amount}
              type="button"
              onClick={() => handleTierSelect(tier.amount)}
              className={`relative group flex flex-col items-center gap-2 py-4 px-3 rounded-xl border transition-all duration-300 ${
                isSelected
                  ? "bg-primary/10 border-primary glow-primary"
                  : "bg-muted/30 border-border hover:border-primary/50 hover:bg-muted/50"
              }`}
            >
              <tier.icon
                className={`h-6 w-6 transition-all ${
                  isSelected ? "text-primary scale-110" : tier.color
                }`}
              />
              <span className="text-xs font-medium text-muted-foreground">
                {tier.label}
              </span>
              <span className={`text-lg font-bold ${isSelected ? "text-primary" : "text-foreground"}`}>
                ₹{tier.amount}
              </span>
            </button>
          );
        })}
      </div>

      {/* Custom amount */}
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
          Or enter custom amount
        </label>
        <div className="flex gap-2">
          <div className="flex items-center px-4 bg-muted/50 border border-border rounded-xl text-muted-foreground font-bold">
            ₹
          </div>
          <Input
            type="number"
            placeholder="0"
            value={selectedTier ? "" : amount}
            onChange={(e) => handleCustomAmount(e.target.value)}
            min="1"
            className="flex-1 text-lg font-semibold"
          />
        </div>
      </div>

      {/* Name input */}
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
          Your Name
        </label>
        <Input
          type="text"
          placeholder="Anonymous"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={50}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
          Message (optional)
        </label>
        <Textarea
          placeholder="Say something nice..."
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, maxChars))}
          rows={3}
        />
        <p className="text-xs text-muted-foreground mt-2 text-right">
          {maxChars - message.length} left
        </p>
      </div>

      <Button type="submit" variant="glow" size="xl" className="w-full">
        <Zap className="h-5 w-5" />
        Send {amount ? `₹${amount}` : "SuperTip"}
      </Button>
    </form>
  );
};

export default TipForm;

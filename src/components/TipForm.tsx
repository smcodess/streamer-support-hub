import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Zap } from "lucide-react";
import { toast } from "sonner";

const PRESET_AMOUNTS = [50, 100, 200, 500];

const TipForm = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const maxChars = 150;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || Number(amount) < 1) {
      toast.error("Please enter a valid amount");
      return;
    }

    toast.success("SuperTip sent! 🎉", {
      description: `₹${amount} tip from ${name || "Anonymous"}`,
    });

    setAmount("");
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="gaming-card space-y-5">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Amount
        </label>
        <div className="flex gap-2 mb-3">
          {PRESET_AMOUNTS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setAmount(preset.toString())}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 border ${
                amount === preset.toString()
                  ? "bg-primary text-primary-foreground border-primary glow-primary"
                  : "bg-muted border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              ₹{preset}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="Custom amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            className="flex-1"
          />
          <div className="flex items-center px-4 bg-muted border border-border rounded-lg text-muted-foreground text-sm font-medium">
            INR
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
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

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <Textarea
          placeholder="Write a message for the streamer..."
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, maxChars))}
          rows={4}
        />
        <p className="text-xs text-muted-foreground mt-1">
          {maxChars - message.length} characters left
        </p>
      </div>

      <Button type="submit" variant="glow" size="lg" className="w-full">
        <Zap className="h-5 w-5" />
        Send SuperTip
      </Button>
    </form>
  );
};

export default TipForm;

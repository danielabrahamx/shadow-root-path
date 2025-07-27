import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface GameStartProps {
  onStart: () => void;
}

export function GameStart({ onStart }: GameStartProps) {
  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
      <Card className="max-w-2xl mx-auto p-8 text-center shadow-chakra border-root-muted/30">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-warm">
            <span className="text-3xl">🌱</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            ShadowWork: Chakra Odyssey
          </h1>
          <h2 className="text-xl text-root-secondary mb-6">
            Root Chakra Journey
          </h2>
        </div>
        
        <div className="text-left mb-8 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Welcome to a journey of self-discovery through your Root Chakra - the foundation of your energetic system. 
            This interactive experience will guide you through scenarios that reveal unconscious patterns and help you 
            understand your relationship with security, grounding, and survival.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            You'll encounter 5 real-life situations where you'll make choices that reflect your inner patterns. 
            Each choice reveals something about how you approach safety, stability, and your basic needs.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            Take your time with each decision. There are no right or wrong answers - only insights waiting to be discovered.
          </p>
        </div>

        <Button 
          onClick={onStart}
          size="lg"
          className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3 shadow-warm"
        >
          Begin Your Journey
        </Button>
      </Card>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface GameStartProps {
  onStart: (chakraId: string) => void;
}

export function GameStart({ onStart }: GameStartProps) {
  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
      <Card className="max-w-4xl mx-auto p-8 text-center shadow-chakra">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            ShadowWork: Chakra Odyssey
          </h1>
          <p className="text-muted-foreground mb-8">
            Choose your chakra journey to explore unconscious patterns and find balance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { id: 'root', name: 'Root', emoji: '🌱', color: 'hsl(0, 100%, 35%)' },
            { id: 'sacral', name: 'Sacral', emoji: '🌊', color: 'hsl(25, 100%, 50%)' },
            { id: 'solar-plexus', name: 'Solar Plexus', emoji: '☀️', color: 'hsl(50, 100%, 50%)' },
            { id: 'heart', name: 'Heart', emoji: '💚', color: 'hsl(120, 100%, 35%)' },
            { id: 'throat', name: 'Throat', emoji: '🗣️', color: 'hsl(200, 100%, 50%)' },
            { id: 'third-eye', name: 'Third Eye', emoji: '👁️', color: 'hsl(260, 100%, 40%)' },
            { id: 'crown', name: 'Crown', emoji: '👑', color: 'hsl(280, 100%, 50%)' }
          ].map((chakra) => (
            <Button
              key={chakra.id}
              onClick={() => onStart(chakra.id)}
              variant="outline"
              className="h-24 flex flex-col gap-2 hover:shadow-lg transition-all"
              style={{ borderColor: chakra.color }}
            >
              <span className="text-2xl">{chakra.emoji}</span>
              <span className="font-medium">{chakra.name}</span>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}
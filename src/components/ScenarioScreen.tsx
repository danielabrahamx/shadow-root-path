import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Scenario, GameOption } from "@/data/scenarios";

interface ScenarioScreenProps {
  scenario: Scenario;
  currentScenario: number;
  totalScenarios: number;
  onChoice: (choice: string, outcome: string, reflection?: string) => void;
}

export function ScenarioScreen({ 
  scenario, 
  currentScenario, 
  totalScenarios, 
  onChoice 
}: ScenarioScreenProps) {
  const [selectedOption, setSelectedOption] = useState<GameOption | null>(null);
  const [showOutcome, setShowOutcome] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<GameOption[]>([]);

  useEffect(() => {
    // Shuffle options to prevent selection bias
    const shuffled = [...scenario.options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
    setSelectedOption(null);
    setShowOutcome(false);
  }, [scenario]);

  const handleSubmit = () => {
    if (!selectedOption) return;
    
    setShowOutcome(true);
    
    // Auto-advance after showing outcome
    setTimeout(() => {
      onChoice(selectedOption.type, selectedOption.outcome, selectedOption.reflection);
    }, 3000);
  };

  const progress = ((currentScenario - 1) / totalScenarios) * 100;

  if (showOutcome && selectedOption) {
    return (
      <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
        <Card className="max-w-2xl mx-auto p-8 shadow-chakra border-root-muted/30">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-warm">
              <span className="text-2xl">✨</span>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Your Choice Unfolds...
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              {selectedOption.outcome}
            </p>
            
            {selectedOption.reflection && (
              <div className="bg-root-accent/10 p-4 rounded-lg mb-6">
                <p className="text-root-secondary font-medium text-sm">
                  Reflection: "{selectedOption.reflection}"
                </p>
              </div>
            )}
            
            <p className="text-sm text-muted-foreground">
              Continuing to next scenario...
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
      <Card className="max-w-2xl mx-auto p-8 shadow-chakra border-root-muted/30">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">
              Scenario {currentScenario} of {totalScenarios}
            </span>
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-warm">
              <span className="text-xl">🌱</span>
            </div>
          </div>
          <Progress value={progress} className="mb-4" />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 leading-relaxed">
            {scenario.text}
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          {shuffledOptions.map((option, index) => (
            <div key={index} className="relative">
              <input
                type="radio"
                id={`option-${index}`}
                name="scenario-choice"
                className="sr-only"
                onChange={() => setSelectedOption(option)}
                checked={selectedOption === option}
              />
              <label
                htmlFor={`option-${index}`}
                className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedOption === option
                    ? 'border-root-primary bg-root-primary/10 shadow-warm'
                    : 'border-border hover:border-root-muted bg-card'
                }`}
              >
                <span className="text-foreground font-medium">
                  {option.label}
                </span>
              </label>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3 shadow-warm disabled:opacity-50"
          >
            Submit Choice
          </Button>
        </div>

        <div className="mt-8 p-4 bg-accent/10 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            💭 <strong>Reflection Prompt:</strong> As you consider your choice, notice what feelings or memories arise. 
            What does this situation remind you of from your own life?
          </p>
        </div>
      </Card>
    </div>
  );
}
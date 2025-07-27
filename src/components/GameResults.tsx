import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GameResults as Results } from "@/data/scenarios";

interface GameResultsProps {
  results: Results;
  onRestart: () => void;
}

export function GameResults({ results, onRestart }: GameResultsProps) {
  const getBalanceColor = (type: string) => {
    switch (type) {
      case 'balanced':
        return 'text-green-600';
      case 'overactive':
        return 'text-orange-600';
      case 'underactive':
        return 'text-blue-600';
      default:
        return 'text-root-secondary';
    }
  };

  const getBalanceIcon = (type: string) => {
    switch (type) {
      case 'balanced':
        return '⚖️';
      case 'overactive':
        return '🔥';
      case 'underactive':
        return '🌊';
      default:
        return '🌀';
    }
  };

  const getScorePercentage = () => {
    // Convert score range (-5 to 5) to percentage (0 to 100)
    return Math.max(0, Math.min(100, ((results.score + 5) / 10) * 100));
  };

  const downloadResults = () => {
    const content = `
ShadowWork: Root Chakra Journey Results
=====================================

Balance Type: ${results.balanceType.toUpperCase()}
Score: ${results.score}

Insights:
${results.insights}

Balancing Tips:
${results.tips.map((tip, index) => `${index + 1}. ${tip}`).join('\n')}

Date: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chakra-journey-results.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
      <Card className="max-w-3xl mx-auto p-8 shadow-chakra border-root-muted/30">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-warm">
            <span className="text-4xl">{getBalanceIcon(results.balanceType)}</span>
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Your Root Chakra Journey
          </h1>
          <h2 className={`text-xl font-semibold ${getBalanceColor(results.balanceType)} capitalize`}>
            {results.balanceType} Energy
          </h2>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Balance Spectrum</span>
            <span className="text-sm text-muted-foreground">Score: {results.score}</span>
          </div>
          <Progress value={getScorePercentage()} className="mb-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Underactive</span>
            <span>Balanced</span>
            <span>Overactive</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Your Insights</h3>
          <div className="bg-card p-6 rounded-lg border border-root-muted/30">
            <p className="text-muted-foreground leading-relaxed">
              {results.insights}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Balancing Practices</h3>
          <div className="space-y-3">
            {results.tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-root-accent/10 rounded-lg">
                <span className="flex-shrink-0 w-6 h-6 bg-root-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <p className="text-foreground text-sm leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={downloadResults}
            variant="outline"
            className="border-root-primary text-root-primary hover:bg-root-primary hover:text-primary-foreground"
          >
            Download Results
          </Button>
          <Button
            onClick={onRestart}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-warm"
          >
            Begin New Journey
          </Button>
        </div>

        <div className="mt-8 p-4 bg-accent/10 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            🙏 Remember: This journey is about awareness, not judgment. 
            Every pattern you discover is an opportunity for growth and self-compassion.
          </p>
        </div>
      </Card>
    </div>
  );
}
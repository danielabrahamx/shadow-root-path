import { useState } from "react";
import { GameStart } from "./GameStart";
import { ScenarioScreen } from "./ScenarioScreen";
import { GameResults } from "./GameResults";
import { scenarios, calculateResults, GameResults as Results } from "@/data/scenarios";

type GameState = 'start' | 'playing' | 'results';

export function ChakraGame() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [outcomes, setOutcomes] = useState<string[]>([]);
  const [reflections, setReflections] = useState<string[]>([]);
  const [results, setResults] = useState<Results | null>(null);

  const handleStartGame = () => {
    setGameState('playing');
    setCurrentScenarioIndex(0);
    setChoices([]);
    setOutcomes([]);
    setReflections([]);
    setResults(null);
  };

  const handleChoice = (choice: string, outcome: string, reflection?: string) => {
    const newChoices = [...choices, choice];
    const newOutcomes = [...outcomes, outcome];
    const newReflections = [...reflections, reflection || ''];

    setChoices(newChoices);
    setOutcomes(newOutcomes);
    setReflections(newReflections);

    if (currentScenarioIndex + 1 >= scenarios.length) {
      // Game finished, calculate results
      const gameResults = calculateResults(newChoices);
      setResults(gameResults);
      setGameState('results');
    } else {
      // Move to next scenario
      setCurrentScenarioIndex(currentScenarioIndex + 1);
    }
  };

  const handleRestart = () => {
    setGameState('start');
    setCurrentScenarioIndex(0);
    setChoices([]);
    setOutcomes([]);
    setReflections([]);
    setResults(null);
  };

  if (gameState === 'start') {
    return <GameStart onStart={handleStartGame} />;
  }

  if (gameState === 'playing') {
    const currentScenario = scenarios[currentScenarioIndex];
    return (
      <ScenarioScreen
        scenario={currentScenario}
        currentScenario={currentScenarioIndex + 1}
        totalScenarios={scenarios.length}
        onChoice={handleChoice}
      />
    );
  }

  if (gameState === 'results' && results) {
    return <GameResults results={results} onRestart={handleRestart} />;
  }

  return null;
}
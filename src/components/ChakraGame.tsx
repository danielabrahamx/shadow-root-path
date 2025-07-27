import { useState } from "react";
import { GameStart } from "./GameStart";
import { ScenarioScreen } from "./ScenarioScreen";
import { GameResults } from "./GameResults";
import { calculateResults, GameResults as Results } from "@/data/scenarios";
import { getScenariosByChakra } from "@/data/allScenarios";
import { chakras, getChakraById, getNextChakra } from "@/data/chakras";

type GameState = 'start' | 'playing' | 'results';

export function ChakraGame() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [selectedChakra, setSelectedChakra] = useState<string>('');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [outcomes, setOutcomes] = useState<string[]>([]);
  const [reflections, setReflections] = useState<string[]>([]);
  const [results, setResults] = useState<Results | null>(null);

  const handleStartGame = (chakraId: string) => {
    setSelectedChakra(chakraId);
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
    const scenarios = getScenariosByChakra(selectedChakra);

    setChoices(newChoices);
    setOutcomes(newOutcomes);
    setReflections(newReflections);

    if (currentScenarioIndex + 1 >= scenarios.length) {
      // Game finished, calculate results
      const gameResults = calculateResults(newChoices, selectedChakra);
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
    const scenarios = getScenariosByChakra(selectedChakra);
    const currentScenario = scenarios[currentScenarioIndex];
    const chakraInfo = getChakraById(selectedChakra);
    return (
      <ScenarioScreen
        scenario={currentScenario}
        currentScenario={currentScenarioIndex + 1}
        totalScenarios={scenarios.length}
        onChoice={handleChoice}
        chakraInfo={chakraInfo}
      />
    );
  }

  if (gameState === 'results' && results) {
    const chakraInfo = getChakraById(selectedChakra);
    const nextChakra = getNextChakra(selectedChakra);
    return <GameResults 
      results={results} 
      onRestart={handleRestart}
      chakraInfo={chakraInfo}
      nextChakra={nextChakra}
      onNextChakra={nextChakra ? () => handleStartGame(nextChakra.id) : undefined}
    />;
  }

  return null;
}
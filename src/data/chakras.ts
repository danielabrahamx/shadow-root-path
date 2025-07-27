export interface ChakraInfo {
  id: string;
  name: string;
  sanskrit: string;
  color: string;
  emoji: string;
  description: string;
  themes: string[];
}

export const chakras: ChakraInfo[] = [
  {
    id: 'root',
    name: 'Root Chakra',
    sanskrit: 'Muladhara',
    color: 'hsl(0, 100%, 35%)', // Deep red
    emoji: '🌱',
    description: 'Foundation, security, survival, grounding',
    themes: ['Security', 'Survival', 'Grounding', 'Stability', 'Basic Needs']
  },
  {
    id: 'sacral',
    name: 'Sacral Chakra',
    sanskrit: 'Svadhisthana',
    color: 'hsl(25, 100%, 50%)', // Orange
    emoji: '🌊',
    description: 'Creativity, sexuality, emotions, pleasure',
    themes: ['Creativity', 'Sexuality', 'Emotions', 'Pleasure', 'Relationships']
  },
  {
    id: 'solar-plexus',
    name: 'Solar Plexus Chakra',
    sanskrit: 'Manipura',
    color: 'hsl(50, 100%, 50%)', // Yellow
    emoji: '☀️',
    description: 'Personal power, confidence, identity, willpower',
    themes: ['Personal Power', 'Confidence', 'Identity', 'Willpower', 'Self-Esteem']
  },
  {
    id: 'heart',
    name: 'Heart Chakra',
    sanskrit: 'Anahata',
    color: 'hsl(120, 100%, 35%)', // Green
    emoji: '💚',
    description: 'Love, compassion, connection, forgiveness',
    themes: ['Love', 'Compassion', 'Connection', 'Forgiveness', 'Empathy']
  },
  {
    id: 'throat',
    name: 'Throat Chakra',
    sanskrit: 'Vishuddha',
    color: 'hsl(200, 100%, 50%)', // Blue
    emoji: '🗣️',
    description: 'Communication, truth, expression, authenticity',
    themes: ['Communication', 'Truth', 'Expression', 'Authenticity', 'Voice']
  },
  {
    id: 'third-eye',
    name: 'Third Eye Chakra',
    sanskrit: 'Ajna',
    color: 'hsl(260, 100%, 40%)', // Indigo
    emoji: '👁️',
    description: 'Intuition, wisdom, insight, imagination',
    themes: ['Intuition', 'Wisdom', 'Insight', 'Imagination', 'Clarity']
  },
  {
    id: 'crown',
    name: 'Crown Chakra',
    sanskrit: 'Sahasrara',
    color: 'hsl(280, 100%, 50%)', // Violet
    emoji: '👑',
    description: 'Spirituality, consciousness, connection to divine',
    themes: ['Spirituality', 'Consciousness', 'Divine Connection', 'Transcendence', 'Unity']
  }
];

export function getChakraById(id: string): ChakraInfo | undefined {
  return chakras.find(chakra => chakra.id === id);
}

export function getNextChakra(currentId: string): ChakraInfo | undefined {
  const currentIndex = chakras.findIndex(chakra => chakra.id === currentId);
  if (currentIndex === -1 || currentIndex === chakras.length - 1) {
    return undefined;
  }
  return chakras[currentIndex + 1];
}
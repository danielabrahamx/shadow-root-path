export interface GameOption {
  label: string;
  type: 'balanced' | 'overactive' | 'underactive';
  outcome: string;
  reflection?: string;
}

export interface Scenario {
  id: number;
  text: string;
  options: GameOption[];
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    text: "You're moving to a new apartment and feel overwhelmed by the need for security. How do you handle the situation?",
    options: [
      {
        label: "Research the neighborhood thoroughly and trust your instincts",
        type: "balanced",
        outcome: "You feel grounded in your decision, having balanced caution with confidence.",
        reflection: "I make decisions from a place of inner wisdom."
      },
      {
        label: "Install multiple security systems and obsess over every detail",
        type: "overactive",
        outcome: "Your anxiety grows as you realize no amount of security feels like enough.",
        reflection: "What fears am I trying to control through external security?"
      },
      {
        label: "Just pick any place - security doesn't really matter",
        type: "underactive",
        outcome: "You feel disconnected and unsafe, lacking proper foundation for this major decision.",
        reflection: "How might valuing my safety serve my wellbeing?"
      }
    ]
  },
  {
    id: 2,
    text: "Your financial situation becomes uncertain. What's your immediate response?",
    options: [
      {
        label: "Create a realistic budget and explore new opportunities",
        type: "balanced",
        outcome: "You feel empowered taking practical steps while staying open to possibilities.",
        reflection: "I trust in my ability to provide for myself."
      },
      {
        label: "Hoard every penny and avoid all spending",
        type: "overactive",
        outcome: "Your fear of scarcity creates more stress and limits your options.",
        reflection: "Where does my fear of not having enough come from?"
      },
      {
        label: "Ignore the situation and hope it resolves itself",
        type: "underactive",
        outcome: "Your avoidance makes the situation worse, leaving you feeling powerless.",
        reflection: "How can taking responsibility empower me?"
      }
    ]
  },
  {
    id: 3,
    text: "A close relationship in your life becomes unstable. How do you respond?",
    options: [
      {
        label: "Communicate openly about your needs and boundaries",
        type: "balanced",
        outcome: "You create space for authentic connection while honoring your own foundation.",
        reflection: "I deserve relationships that support my growth."
      },
      {
        label: "Become possessive and demand constant reassurance",
        type: "overactive",
        outcome: "Your clinging behavior pushes the other person away, creating more instability.",
        reflection: "What am I afraid of losing if I let go of control?"
      },
      {
        label: "Withdraw completely to avoid potential hurt",
        type: "underactive",
        outcome: "Your isolation leaves you feeling more disconnected and unsupported.",
        reflection: "How might staying present serve my connections?"
      }
    ]
  },
  {
    id: 4,
    text: "You're facing a major life decision about your career path. What guides you?",
    options: [
      {
        label: "Consider your values, needs, and long-term vision",
        type: "balanced",
        outcome: "You feel aligned with your authentic path, trusting your inner compass.",
        reflection: "My choices reflect who I truly am."
      },
      {
        label: "Choose only what feels completely safe and guaranteed",
        type: "overactive",
        outcome: "Your excessive caution keeps you stuck in situations that don't serve you.",
        reflection: "What opportunities might I miss by avoiding all risk?"
      },
      {
        label: "Let others decide or just drift without choosing",
        type: "underactive",
        outcome: "You feel lost and disconnected from your own power and purpose.",
        reflection: "How can I reclaim my power to choose my own path?"
      }
    ]
  },
  {
    id: 5,
    text: "Your daily routine has been disrupted and you feel ungrounded. How do you restore balance?",
    options: [
      {
        label: "Create new healthy routines while staying flexible",
        type: "balanced",
        outcome: "You establish a new rhythm that supports your wellbeing and adapts to change.",
        reflection: "I am the stable center of my changing world."
      },
      {
        label: "Rigidly stick to old patterns regardless of circumstances",
        type: "overactive",
        outcome: "Your inflexibility creates more stress as you fight against natural change.",
        reflection: "What am I afraid will happen if I adapt to change?"
      },
      {
        label: "Give up on routines entirely and live chaotically",
        type: "underactive",
        outcome: "Without structure, you feel more scattered and lose your sense of foundation.",
        reflection: "How do healthy boundaries and routines support my freedom?"
      }
    ]
  }
];

export type BalanceType = 'balanced' | 'overactive' | 'underactive' | 'mixed';

export interface GameResults {
  balanceType: BalanceType;
  score: number;
  insights: string;
  tips: string[];
}

export function calculateResults(choices: string[]): GameResults {
  let score = 0;
  let overactiveCount = 0;
  let underactiveCount = 0;
  let balancedCount = 0;

  choices.forEach(choice => {
    if (choice === 'balanced') {
      score += 1;
      balancedCount++;
    } else if (choice === 'overactive') {
      score -= 1;
      overactiveCount++;
    } else if (choice === 'underactive') {
      score -= 1;
      underactiveCount++;
    }
  });

  let balanceType: BalanceType;
  if (score > 2) {
    balanceType = 'balanced';
  } else if (score < -2) {
    balanceType = overactiveCount > underactiveCount ? 'overactive' : 'underactive';
  } else {
    balanceType = 'mixed';
  }

  const insights = getInsights(balanceType);
  const tips = getTips(balanceType);

  return { balanceType, score, insights, tips };
}

function getInsights(type: BalanceType): string {
  switch (type) {
    case 'balanced':
      return "You demonstrate a healthy relationship with your Root Chakra. You understand that true security comes from within while taking practical steps to care for yourself. Your grounded nature allows you to navigate challenges with both wisdom and flexibility.";
    case 'overactive':
      return "Your Root Chakra may be overactive, manifesting as excessive need for control and security. You might find yourself hoarding resources, being overly cautious, or clinging to people and situations. Remember that true security comes from trusting your inner resilience.";
    case 'underactive':
      return "Your Root Chakra may be underactive, showing up as disconnection from your basic needs and lack of grounding. You might struggle with commitment, avoiding responsibility, or feeling scattered. Reconnecting with your body and physical world can help restore your foundation.";
    case 'mixed':
      return "You show a complex relationship with your Root Chakra, sometimes overcompensating and sometimes withdrawing. This suggests you're in a period of learning to find your center. Pay attention to what triggers your different responses.";
    default:
      return "Continue exploring your relationship with security and grounding.";
  }
}

function getTips(type: BalanceType): string[] {
  const baseTips = [
    "Practice daily grounding exercises like walking barefoot or sitting in nature",
    "Develop a consistent self-care routine that honors your basic needs",
    "Notice when you feel most secure and what supports that feeling"
  ];

  switch (type) {
    case 'balanced':
      return [
        ...baseTips,
        "Share your grounded wisdom with others who might be struggling",
        "Continue trusting your inner guidance while staying practical"
      ];
    case 'overactive':
      return [
        ...baseTips,
        "Practice letting go of small controls to build trust in life's flow",
        "Explore what fears drive your need for excessive security",
        "Try meditation or breathing exercises when anxiety arises"
      ];
    case 'underactive':
      return [
        ...baseTips,
        "Start with small commitments to yourself and follow through",
        "Focus on physical activities that connect you to your body",
        "Create structure in your environment to support your growth"
      ];
    case 'mixed':
      return [
        ...baseTips,
        "Journal about what triggers your different responses to security",
        "Practice the middle path - neither too controlling nor too passive",
        "Seek support from grounded friends or mentors"
      ];
    default:
      return baseTips;
  }
}
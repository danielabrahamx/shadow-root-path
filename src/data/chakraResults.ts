import { BalanceType } from './scenarios';

interface ChakraInsights {
  [chakraId: string]: {
    [key in BalanceType]: string;
  };
}

interface ChakraTips {
  [chakraId: string]: {
    [key in BalanceType]: string[];
  };
}

export const chakraInsights: ChakraInsights = {
  root: {
    balanced: "You demonstrate a healthy relationship with your Root Chakra. You understand that true security comes from within while taking practical steps to care for yourself. Your grounded nature allows you to navigate challenges with both wisdom and flexibility.",
    overactive: "Your Root Chakra may be overactive, manifesting as excessive need for control and security. You might find yourself hoarding resources, being overly cautious, or clinging to people and situations. Remember that true security comes from trusting your inner resilience.",
    underactive: "Your Root Chakra may be underactive, showing up as disconnection from your basic needs and lack of grounding. You might struggle with commitment, avoiding responsibility, or feeling scattered. Reconnecting with your body and physical world can help restore your foundation.",
    mixed: "You show a complex relationship with your Root Chakra, sometimes overcompensating and sometimes withdrawing. This suggests you're in a period of learning to find your center. Pay attention to what triggers your different responses."
  },

  sacral: {
    balanced: "You have a healthy relationship with your Sacral Chakra, embracing creativity, emotion, and pleasure with wisdom. You can experience joy and passion while maintaining emotional awareness. Your creative energy flows naturally and enriches your life.",
    overactive: "Your Sacral Chakra may be overactive, leading to emotional volatility, addictive behaviors, or using creativity and pleasure as escape mechanisms. You might lose yourself in experiences rather than learning from them. Finding healthy boundaries with pleasure can restore balance.",
    underactive: "Your Sacral Chakra may be underactive, manifesting as creative blocks, emotional numbness, or shame around pleasure and sexuality. You might deny yourself joy or suppress your creative expression. Reconnecting with your emotional and creative nature can reignite your vitality.",
    mixed: "Your relationship with your Sacral Chakra shows both overindulgence and restriction patterns. You may swing between emotional overwhelm and numbness, or between creative binges and blocks. This suggests you're learning to find the middle path with pleasure and creativity."
  },

  "solar-plexus": {
    balanced: "You demonstrate healthy Solar Plexus energy with authentic confidence and balanced personal power. You can assert yourself respectfully while considering others' needs. Your sense of identity comes from within, allowing you to lead and make decisions with integrity.",
    overactive: "Your Solar Plexus may be overactive, showing up as dominating behavior, need for control, or aggressive assertion of your will. You might struggle with ego-driven decisions or power struggles. Learning to collaborate rather than dominate can restore healthy power dynamics.",
    underactive: "Your Solar Plexus may be underactive, manifesting as low self-esteem, difficulty making decisions, or avoiding responsibility. You might give your power away to others or struggle to assert your needs. Developing healthy boundaries and self-advocacy can strengthen your inner power.",
    mixed: "Your Solar Plexus shows both authoritarian and submissive patterns, suggesting internal conflict about power and authority. You may alternate between aggressive control and passive withdrawal. This indicates you're learning to find authentic, balanced personal power."
  },

  heart: {
    balanced: "You have a beautifully balanced Heart Chakra, capable of loving deeply while maintaining healthy boundaries. You can give and receive love authentically, extend compassion without depleting yourself, and practice forgiveness as a gift to yourself.",
    overactive: "Your Heart Chakra may be overactive, leading to codependency, over-giving, or losing yourself in relationships. You might struggle with boundaries or try to love others at the expense of self-love. Learning that true love includes self-care can restore balance.",
    underactive: "Your Heart Chakra may be underactive, showing up as difficulty trusting, fear of vulnerability, or walls around your heart. You might struggle to give or receive love freely. Gently opening to love while honoring your protection mechanisms can heal and expand your heart.",
    mixed: "Your Heart Chakra shows both over-giving and withdrawal patterns, suggesting past hurts have created complex defense mechanisms. You may alternate between people-pleasing and isolation. This indicates you're learning to love wisely with both compassion and boundaries."
  },

  throat: {
    balanced: "Your Throat Chakra flows with authentic expression and truthful communication. You can speak your truth with compassion, listen deeply to others, and find your unique voice in the world. Your communication creates connection rather than division.",
    overactive: "Your Throat Chakra may be overactive, manifesting as talking too much, dominating conversations, or speaking without consideration for others. You might use words as weapons or struggle to listen. Learning to balance speaking with listening can restore harmony.",
    underactive: "Your Throat Chakra may be underactive, showing up as difficulty expressing yourself, fear of speaking up, or silencing your authentic voice. You might swallow your truth to avoid conflict. Finding safe ways to practice authentic expression can strengthen your voice.",
    mixed: "Your Throat Chakra shows both forceful expression and silent withdrawal patterns. You may alternate between aggressive communication and self-silencing. This suggests you're learning to find the middle path of authentic, respectful expression."
  },

  "third-eye": {
    balanced: "Your Third Eye Chakra is beautifully balanced, integrating intuition with practical wisdom. You trust your inner knowing while remaining grounded, can access deeper insights, and maintain healthy discernment. Your inner vision guides you with clarity.",
    overactive: "Your Third Eye may be overactive, leading to obsession with mystical experiences, paranoid thinking, or disconnection from practical reality. You might get lost in spiritual concepts without grounding them. Balancing vision with practical action can restore equilibrium.",
    underactive: "Your Third Eye may be underactive, manifesting as dismissal of intuition, over-reliance on logic alone, or disconnection from deeper wisdom. You might ignore your inner knowing or struggle to see beyond surface appearances. Cultivating trust in your intuitive gifts can expand your perception.",
    mixed: "Your Third Eye shows both spiritual seeking and skeptical dismissal patterns. You may alternate between mystical absorption and rigid rationality. This suggests you're learning to integrate expanded awareness with practical wisdom."
  },

  crown: {
    balanced: "Your Crown Chakra radiates with healthy spiritual connection, integrating transcendent awareness with human experience. You can access higher consciousness while remaining grounded in love and service. Your spirituality enhances rather than escapes your humanity.",
    overactive: "Your Crown Chakra may be overactive, leading to spiritual bypassing, detachment from earthly concerns, or superiority about spiritual attainment. You might use spirituality to avoid human responsibilities. Grounding your spiritual insights in loving action can restore balance.",
    underactive: "Your Crown Chakra may be underactive, showing up as disconnection from meaning, cynicism about spirituality, or materialistic focus. You might struggle to connect with transcendent purpose or dismiss spiritual experiences. Opening to mystery and meaning can expand your consciousness.",
    mixed: "Your Crown Chakra shows both spiritual seeking and materialistic attachment patterns. You may alternate between transcendent experiences and earthly preoccupations. This suggests you're learning to integrate spiritual awareness with practical human life."
  }
};

export const chakraTips: ChakraTips = {
  root: {
    balanced: [
      "Practice daily grounding exercises like walking barefoot or sitting in nature",
      "Develop a consistent self-care routine that honors your basic needs",
      "Notice when you feel most secure and what supports that feeling",
      "Share your grounded wisdom with others who might be struggling",
      "Continue trusting your inner guidance while staying practical"
    ],
    overactive: [
      "Practice daily grounding exercises like walking barefoot or sitting in nature",
      "Develop a consistent self-care routine that honors your basic needs",
      "Notice when you feel most secure and what supports that feeling",
      "Practice letting go of small controls to build trust in life's flow",
      "Explore what fears drive your need for excessive security",
      "Try meditation or breathing exercises when anxiety arises"
    ],
    underactive: [
      "Practice daily grounding exercises like walking barefoot or sitting in nature",
      "Develop a consistent self-care routine that honors your basic needs",
      "Notice when you feel most secure and what supports that feeling",
      "Start with small commitments to yourself and follow through",
      "Focus on physical activities that connect you to your body",
      "Create structure in your environment to support your growth"
    ],
    mixed: [
      "Practice daily grounding exercises like walking barefoot or sitting in nature",
      "Develop a consistent self-care routine that honors your basic needs",
      "Notice when you feel most secure and what supports that feeling",
      "Journal about what triggers your different responses to security",
      "Practice the middle path - neither too controlling nor too passive",
      "Seek support from grounded friends or mentors"
    ]
  },

  sacral: {
    balanced: [
      "Engage in creative activities that bring you joy without pressure for perfection",
      "Honor your emotions as valuable messengers and allow them to flow",
      "Cultivate healthy relationships with pleasure and sensuality",
      "Continue expressing your authentic creative voice",
      "Share your emotional wisdom and creative gifts with others",
      "Practice gratitude for your capacity to feel and create"
    ],
    overactive: [
      "Engage in creative activities that bring you joy without pressure for perfection",
      "Honor your emotions as valuable messengers and allow them to flow",
      "Cultivate healthy relationships with pleasure and sensuality",
      "Practice moderation and mindful engagement with pleasurable activities",
      "Develop emotional regulation techniques like breathwork or meditation",
      "Set boundaries around creative projects to avoid burnout",
      "Explore what you're trying to fill or escape through excess"
    ],
    underactive: [
      "Engage in creative activities that bring you joy without pressure for perfection",
      "Honor your emotions as valuable messengers and allow them to flow",
      "Cultivate healthy relationships with pleasure and sensuality",
      "Start small with creative expression - even 5 minutes of doodling counts",
      "Practice feeling and naming emotions without judgment",
      "Allow yourself small pleasures and notice how they affect you",
      "Challenge beliefs about creativity, pleasure, or emotion being wrong"
    ],
    mixed: [
      "Engage in creative activities that bring you joy without pressure for perfection",
      "Honor your emotions as valuable messengers and allow them to flow",
      "Cultivate healthy relationships with pleasure and sensuality",
      "Notice what triggers your swings between indulgence and restriction",
      "Practice the middle way with both creativity and pleasure",
      "Keep a mood and creativity journal to identify patterns",
      "Seek support for healing emotional or creative wounds"
    ]
  },

  "solar-plexus": {
    balanced: [
      "Practice making decisions from your authentic values rather than external pressure",
      "Cultivate healthy assertiveness by speaking up for your needs respectfully",
      "Develop your unique talents and celebrate your individual contributions",
      "Continue leading with integrity and collaborative spirit",
      "Mentor others in developing healthy personal power",
      "Trust your inner authority while remaining open to feedback"
    ],
    overactive: [
      "Practice making decisions from your authentic values rather than external pressure",
      "Cultivate healthy assertiveness by speaking up for your needs respectfully",
      "Develop your unique talents and celebrate your individual contributions",
      "Practice listening to others' perspectives before asserting your own",
      "Explore collaborative leadership styles instead of authoritarian approaches",
      "Notice when ego is driving decisions versus authentic purpose",
      "Work on sharing power and empowering others"
    ],
    underactive: [
      "Practice making decisions from your authentic values rather than external pressure",
      "Cultivate healthy assertiveness by speaking up for your needs respectfully",
      "Develop your unique talents and celebrate your individual contributions",
      "Start with small acts of self-advocacy in low-stakes situations",
      "Practice saying no to requests that don't align with your values",
      "Celebrate your accomplishments and acknowledge your capabilities",
      "Seek opportunities to take on appropriate responsibilities"
    ],
    mixed: [
      "Practice making decisions from your authentic values rather than external pressure",
      "Cultivate healthy assertiveness by speaking up for your needs respectfully",
      "Develop your unique talents and celebrate your individual contributions",
      "Notice what triggers your swings between dominance and submission",
      "Practice consistent, balanced responses rather than reactive extremes",
      "Work with a coach or therapist to explore power dynamics",
      "Develop a stable sense of self-worth independent of others' approval"
    ]
  },

  heart: {
    balanced: [
      "Practice loving-kindness meditation for yourself and others",
      "Maintain healthy boundaries while keeping your heart open",
      "Express gratitude and appreciation regularly",
      "Continue modeling healthy love and compassion for others",
      "Share your gifts of empathy and understanding with the world",
      "Practice self-compassion as the foundation for loving others"
    ],
    overactive: [
      "Practice loving-kindness meditation for yourself and others",
      "Maintain healthy boundaries while keeping your heart open",
      "Express gratitude and appreciation regularly",
      "Learn to receive love and support from others",
      "Practice saying no to requests that deplete your energy",
      "Explore what you're trying to earn or prove through over-giving",
      "Develop self-love practices alongside love for others"
    ],
    underactive: [
      "Practice loving-kindness meditation for yourself and others",
      "Maintain healthy boundaries while keeping your heart open",
      "Express gratitude and appreciation regularly",
      "Start with small acts of self-compassion",
      "Practice expressing appreciation for others in safe relationships",
      "Allow yourself to receive kindness without feeling guilty",
      "Explore what fears or hurts keep your heart protected"
    ],
    mixed: [
      "Practice loving-kindness meditation for yourself and others",
      "Maintain healthy boundaries while keeping your heart open",
      "Express gratitude and appreciation regularly",
      "Notice what triggers your swings between over-giving and withdrawal",
      "Practice consistent, moderate expressions of love and care",
      "Work on healing past relationship wounds with professional support",
      "Develop discernment about when to open and when to protect your heart"
    ]
  },

  throat: {
    balanced: [
      "Practice active listening and authentic expression in equal measure",
      "Express your creativity through writing, speaking, or artistic pursuits",
      "Speak your truth with compassion and consideration for others",
      "Continue being a voice for truth and authentic communication",
      "Help others find and express their authentic voices",
      "Use your communication gifts to create positive change"
    ],
    overactive: [
      "Practice active listening and authentic expression in equal measure",
      "Express your creativity through writing, speaking, or artistic pursuits",
      "Speak your truth with compassion and consideration for others",
      "Practice the art of listening before speaking",
      "Notice when you're talking to avoid feeling versus to communicate",
      "Develop empathy for how your words affect others",
      "Practice expressing yourself in writing before speaking aloud"
    ],
    underactive: [
      "Practice active listening and authentic expression in equal measure",
      "Express your creativity through writing, speaking, or artistic pursuits",
      "Speak your truth with compassion and consideration for others",
      "Start with written expression to build confidence in your voice",
      "Practice speaking up in low-stakes situations",
      "Work on expressing needs and preferences clearly",
      "Challenge beliefs about your voice not being valuable"
    ],
    mixed: [
      "Practice active listening and authentic expression in equal measure",
      "Express your creativity through writing, speaking, or artistic pursuits",
      "Speak your truth with compassion and consideration for others",
      "Notice what triggers your swings between silence and over-talking",
      "Practice consistent, balanced communication",
      "Work on healing wounds around being heard or silenced",
      "Develop confidence in your unique perspective and voice"
    ]
  },

  "third-eye": {
    balanced: [
      "Cultivate both meditation and practical application of insights",
      "Trust your intuition while maintaining healthy discernment",
      "Keep a dream journal and reflect on symbolic messages",
      "Continue integrating wisdom and practical action",
      "Share your insights in ways that help others expand their awareness",
      "Practice seeing situations from multiple perspectives"
    ],
    overactive: [
      "Cultivate both meditation and practical application of insights",
      "Trust your intuition while maintaining healthy discernment",
      "Keep a dream journal and reflect on symbolic messages",
      "Ground mystical experiences through practical action",
      "Balance meditation with physical and social activities",
      "Practice discernment between true insight and mental fantasy",
      "Seek perspectives from grounded, wise mentors"
    ],
    underactive: [
      "Cultivate both meditation and practical application of insights",
      "Trust your intuition while maintaining healthy discernment",
      "Keep a dream journal and reflect on symbolic messages",
      "Start with short meditation or contemplation practices",
      "Notice and honor your subtle feelings and hunches",
      "Allow yourself to explore creative and imaginative activities",
      "Challenge beliefs that dismiss non-rational ways of knowing"
    ],
    mixed: [
      "Cultivate both meditation and practical application of insights",
      "Trust your intuition while maintaining healthy discernment",
      "Keep a dream journal and reflect on symbolic messages",
      "Notice what triggers swings between mystical absorption and skeptical dismissal",
      "Practice integrating expanded awareness with practical wisdom",
      "Work on healing splits between rational and intuitive knowing",
      "Seek teachers who model balanced development of inner vision"
    ]
  },

  crown: {
    balanced: [
      "Maintain regular spiritual practice while staying engaged with daily life",
      "Serve others from a place of love rather than spiritual achievement",
      "Practice gratitude and presence as forms of spiritual connection",
      "Continue modeling integrated spirituality for others",
      "Use your spiritual insights to create positive change in the world",
      "Remember that the ultimate spiritual attainment is love in action"
    ],
    overactive: [
      "Maintain regular spiritual practice while staying engaged with daily life",
      "Serve others from a place of love rather than spiritual achievement",
      "Practice gratitude and presence as forms of spiritual connection",
      "Ground spiritual experiences through practical service",
      "Engage with everyday responsibilities as spiritual practice",
      "Practice humility and remember that spiritual pride is still ego",
      "Connect with embodied, grounded spiritual teachers"
    ],
    underactive: [
      "Maintain regular spiritual practice while staying engaged with daily life",
      "Serve others from a place of love rather than spiritual achievement",
      "Practice gratitude and presence as forms of spiritual connection",
      "Start with simple practices like gratitude or moments of wonder",
      "Allow yourself to question and explore life's bigger meanings",
      "Connect with nature as a doorway to transcendent experience",
      "Read inspiring wisdom traditions without needing to believe everything"
    ],
    mixed: [
      "Maintain regular spiritual practice while staying engaged with daily life",
      "Serve others from a place of love rather than spiritual achievement",
      "Practice gratitude and presence as forms of spiritual connection",
      "Notice what triggers swings between spiritual seeking and materialistic focus",
      "Practice integrating transcendent awareness with human concerns",
      "Work on healing splits between spiritual and material aspects of life",
      "Find mentors who model healthy integration of spiritual and practical wisdom"
    ]
  }
};

export function getInsightsByChakra(chakraId: string, type: BalanceType): string {
  return chakraInsights[chakraId]?.[type] || `Continue exploring your relationship with your ${chakraId} chakra.`;
}

export function getTipsByChakra(chakraId: string, type: BalanceType): string[] {
  return chakraTips[chakraId]?.[type] || [];
}
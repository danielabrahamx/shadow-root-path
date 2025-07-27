import { GameOption, Scenario } from './scenarios';

interface ChakraScenarios {
  [chakraId: string]: Scenario[];
}

export const allScenarios: ChakraScenarios = {
  root: [
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
  ],

  sacral: [
    {
      id: 1,
      text: "You feel creatively blocked and uninspired in your artistic pursuits. How do you respond?",
      options: [
        {
          label: "Explore new techniques and trust the creative process",
          type: "balanced",
          outcome: "You reconnect with joy and allow creativity to flow naturally through you.",
          reflection: "I honor my creative expression as sacred."
        },
        {
          label: "Force yourself to create something impressive and perfect",
          type: "overactive",
          outcome: "Your perfectionism stifles natural creativity and increases frustration.",
          reflection: "What am I trying to prove through my creativity?"
        },
        {
          label: "Give up on creative projects - you're probably not talented anyway",
          type: "underactive",
          outcome: "You disconnect from a vital source of joy and self-expression.",
          reflection: "How does denying my creativity diminish my vitality?"
        }
      ]
    },
    {
      id: 2,
      text: "A romantic relationship becomes intensely passionate but also emotionally turbulent. How do you navigate this?",
      options: [
        {
          label: "Embrace the passion while maintaining emotional awareness",
          type: "balanced",
          outcome: "You experience deep connection while staying centered in yourself.",
          reflection: "I can love deeply while honoring my own emotional truth."
        },
        {
          label: "Lose yourself completely in the emotional intensity",
          type: "overactive",
          outcome: "You become emotionally dependent and lose touch with your own identity.",
          reflection: "Where do I end and my partner begin?"
        },
        {
          label: "Shut down emotionally to avoid vulnerability",
          type: "underactive",
          outcome: "You miss out on intimacy and genuine connection by protecting yourself.",
          reflection: "What am I afraid will happen if I allow myself to feel?"
        }
      ]
    },
    {
      id: 3,
      text: "You're invited to a sensual dance class that excites but also intimidates you. What do you do?",
      options: [
        {
          label: "Join with openness and curiosity about your body's expression",
          type: "balanced",
          outcome: "You discover new ways to express yourself and feel more embodied.",
          reflection: "My body is a sacred vessel for creative expression."
        },
        {
          label: "Become obsessed with being the most sensual person there",
          type: "overactive",
          outcome: "Your need to perform prevents authentic connection with your own sensuality.",
          reflection: "What am I seeking validation for?"
        },
        {
          label: "Avoid it - your body isn't meant for that kind of expression",
          type: "underactive",
          outcome: "You reinforce shame about your natural sensuality and embodiment.",
          reflection: "What messages about my body have I internalized?"
        }
      ]
    },
    {
      id: 4,
      text: "You experience strong mood swings that seem to come from nowhere. How do you handle them?",
      options: [
        {
          label: "Acknowledge the emotions and explore what they're telling you",
          type: "balanced",
          outcome: "You develop emotional intelligence and learn to ride the waves gracefully.",
          reflection: "My emotions are messengers guiding me toward what I need."
        },
        {
          label: "Let the emotions completely take over your day and decisions",
          type: "overactive",
          outcome: "You become reactive and make choices you later regret.",
          reflection: "How might I honor my emotions without being controlled by them?"
        },
        {
          label: "Push the emotions down and pretend they don't exist",
          type: "underactive",
          outcome: "The suppressed emotions build up and eventually explode more intensely.",
          reflection: "What happens when I disconnect from my emotional truth?"
        }
      ]
    },
    {
      id: 5,
      text: "You're offered an opportunity to experience something pleasurable but it challenges your comfort zone. What's your response?",
      options: [
        {
          label: "Approach it mindfully, honoring both excitement and boundaries",
          type: "balanced",
          outcome: "You expand your capacity for pleasure while staying true to yourself.",
          reflection: "I deserve to experience joy and pleasure in healthy ways."
        },
        {
          label: "Dive in completely without any thought to consequences",
          type: "overactive",
          outcome: "Your impulsiveness leads to situations that don't truly serve you.",
          reflection: "What am I trying to fill or escape through pleasure?"
        },
        {
          label: "Immediately reject it - pleasure is dangerous or wrong",
          type: "underactive",
          outcome: "You deny yourself natural joy and maintain unnecessary restrictions.",
          reflection: "What beliefs about pleasure am I carrying that no longer serve me?"
        }
      ]
    }
  ],

  "solar-plexus": [
    {
      id: 1,
      text: "You're in a meeting where you disagree with a decision that affects your work. How do you respond?",
      options: [
        {
          label: "Express your perspective respectfully and stand by your convictions",
          type: "balanced",
          outcome: "You feel empowered knowing you honored your truth and contributed meaningfully.",
          reflection: "I trust my voice and my right to be heard."
        },
        {
          label: "Dominate the conversation and demand everyone listen to you",
          type: "overactive",
          outcome: "Your aggressive approach alienates others and undermines your actual message.",
          reflection: "What am I trying to prove about my worth?"
        },
        {
          label: "Stay silent and go along with what others want",
          type: "underactive",
          outcome: "You feel diminished and resentful, having abandoned your own inner knowing.",
          reflection: "What stops me from believing my perspective matters?"
        }
      ]
    },
    {
      id: 2,
      text: "Someone criticizes your work publicly. What's your immediate reaction?",
      options: [
        {
          label: "Consider the feedback objectively while maintaining self-respect",
          type: "balanced",
          outcome: "You extract valuable insights without letting criticism diminish your worth.",
          reflection: "I can learn and grow while maintaining my inherent value."
        },
        {
          label: "Become defensive and attack the person's credibility",
          type: "overactive",
          outcome: "Your defensive reaction escalates conflict and prevents learning.",
          reflection: "What fear is triggered when my competence is questioned?"
        },
        {
          label: "Immediately assume they're right and you're incompetent",
          type: "underactive",
          outcome: "You spiral into self-doubt and diminish your confidence unnecessarily.",
          reflection: "Why do I give others' opinions more weight than my own experience?"
        }
      ]
    },
    {
      id: 3,
      text: "You have an opportunity to lead a challenging project that could advance your career. How do you approach it?",
      options: [
        {
          label: "Accept with confidence while preparing thoroughly",
          type: "balanced",
          outcome: "You step into leadership with both humility and self-assurance.",
          reflection: "I am capable of growing into challenges that align with my purpose."
        },
        {
          label: "Take charge immediately and micromanage every detail",
          type: "overactive",
          outcome: "Your need to control everything exhausts you and stifles your team.",
          reflection: "What do I believe will happen if I'm not in complete control?"
        },
        {
          label: "Decline - you're not qualified enough to lead anything",
          type: "underactive",
          outcome: "You miss growth opportunities and reinforce limiting beliefs about yourself.",
          reflection: "What would I attempt if I truly believed in my capabilities?"
        }
      ]
    },
    {
      id: 4,
      text: "You're asked to make a decision that will significantly impact others. How do you proceed?",
      options: [
        {
          label: "Gather input while taking responsibility for the final choice",
          type: "balanced",
          outcome: "You make a thoughtful decision while owning your authority and responsibility.",
          reflection: "I can hold power responsibly and make decisions that serve the greater good."
        },
        {
          label: "Make the decision unilaterally based only on your preferences",
          type: "overactive",
          outcome: "Your authoritarian approach creates resentment and resistance from others.",
          reflection: "How does considering others' needs actually strengthen my leadership?"
        },
        {
          label: "Ask everyone else to decide - you don't want the responsibility",
          type: "underactive",
          outcome: "You abdicate your power and leave others without clear direction.",
          reflection: "What responsibilities am I avoiding and what would embracing them teach me?"
        }
      ]
    },
    {
      id: 5,
      text: "You realize you've been living according to others' expectations rather than your own desires. What do you do?",
      options: [
        {
          label: "Gradually align your choices with your authentic values and goals",
          type: "balanced",
          outcome: "You reclaim your personal power while respecting existing commitments.",
          reflection: "I have the right and responsibility to live my own authentic life."
        },
        {
          label: "Dramatically rebel against all expectations and obligations",
          type: "overactive",
          outcome: "Your reactive rebellion creates chaos and damages important relationships.",
          reflection: "How can I honor my authenticity without destroying what matters?"
        },
        {
          label: "Continue living for others - it's safer than disappointing people",
          type: "underactive",
          outcome: "You feel increasingly resentful and disconnected from your true self.",
          reflection: "What would happen if I honored my own needs as much as others'?"
        }
      ]
    }
  ],

  heart: [
    {
      id: 1,
      text: "A friend repeatedly takes advantage of your kindness without reciprocating. How do you handle this?",
      options: [
        {
          label: "Set loving boundaries while keeping your heart open",
          type: "balanced",
          outcome: "You protect your energy while maintaining compassion for both yourself and your friend.",
          reflection: "True love includes honoring my own needs and boundaries."
        },
        {
          label: "Give even more to prove your love and try to fix them",
          type: "overactive",
          outcome: "Your over-giving enables their behavior and depletes your own heart energy.",
          reflection: "What am I trying to earn or prove through excessive giving?"
        },
        {
          label: "Cut them off completely and close your heart to protect yourself",
          type: "underactive",
          outcome: "You protect yourself but miss opportunities for healing and authentic connection.",
          reflection: "How can I protect myself without shutting down my capacity to love?"
        }
      ]
    },
    {
      id: 2,
      text: "You witness someone being treated unfairly in a public setting. What's your response?",
      options: [
        {
          label: "Intervene with compassion for both the victim and aggressor",
          type: "balanced",
          outcome: "You create space for healing and understanding while standing up for justice.",
          reflection: "I can advocate for others while holding compassion for all involved."
        },
        {
          label: "React with anger and confront the aggressor aggressively",
          type: "overactive",
          outcome: "Your emotional reaction escalates the situation and may cause more harm.",
          reflection: "How might my anger be blocking the love that could heal this situation?"
        },
        {
          label: "Look away and avoid getting involved in others' problems",
          type: "underactive",
          outcome: "You miss an opportunity to extend love and protection when it's needed.",
          reflection: "What fears prevent me from acting on my natural compassion?"
        }
      ]
    },
    {
      id: 3,
      text: "You're struggling to forgive someone who deeply hurt you. How do you approach this?",
      options: [
        {
          label: "Work on forgiveness as a process while honoring your pain",
          type: "balanced",
          outcome: "You heal gradually, releasing resentment without bypassing your legitimate feelings.",
          reflection: "Forgiveness is a gift I give myself, not a denial of what happened."
        },
        {
          label: "Force yourself to forgive immediately to be spiritual",
          type: "overactive",
          outcome: "Your premature forgiveness bypasses healing and keeps the wound active.",
          reflection: "What am I afraid will happen if I allow myself to feel hurt?"
        },
        {
          label: "Hold onto resentment as protection against future hurt",
          type: "underactive",
          outcome: "Your resentment becomes a prison that blocks your capacity for joy and love.",
          reflection: "How is holding onto this pain affecting my ability to experience love?"
        }
      ]
    },
    {
      id: 4,
      text: "You feel overwhelmed by others' emotional pain and find yourself constantly trying to help everyone. How do you respond?",
      options: [
        {
          label: "Practice compassionate presence while maintaining healthy boundaries",
          type: "balanced",
          outcome: "You offer genuine support while preserving your own emotional wellbeing.",
          reflection: "I can care deeply while allowing others their own healing journey."
        },
        {
          label: "Take on everyone's problems as if they were your own",
          type: "overactive",
          outcome: "You become emotionally overwhelmed and unable to help anyone effectively.",
          reflection: "What do I believe is my responsibility versus what belongs to others?"
        },
        {
          label: "Emotionally shut down to avoid feeling others' pain",
          type: "underactive",
          outcome: "You disconnect from empathy and miss the beauty of human connection.",
          reflection: "How can I feel others' pain without losing myself in it?"
        }
      ]
    },
    {
      id: 5,
      text: "You're in a romantic relationship where you love your partner but struggle with self-love. How do you address this?",
      options: [
        {
          label: "Work on loving yourself while receiving your partner's love",
          type: "balanced",
          outcome: "You create a foundation of self-love that enhances your capacity to love and be loved.",
          reflection: "Self-love and love for others grow together in harmony."
        },
        {
          label: "Focus entirely on loving your partner to avoid dealing with self-worth",
          type: "overactive",
          outcome: "Your self-neglect eventually undermines the relationship you're trying to protect.",
          reflection: "How does my relationship with myself affect my ability to love others?"
        },
        {
          label: "Reject your partner's love because you don't deserve it",
          type: "underactive",
          outcome: "You sabotage love opportunities and reinforce feelings of unworthiness.",
          reflection: "What would accepting love teach me about my own worthiness?"
        }
      ]
    }
  ],

  throat: [
    {
      id: 1,
      text: "You have an important truth to share but fear it might upset people close to you. What do you do?",
      options: [
        {
          label: "Share your truth with compassion and timing sensitivity",
          type: "balanced",
          outcome: "You honor both your authenticity and others' feelings, creating space for honest dialogue.",
          reflection: "My truth, spoken with love, serves the highest good of all."
        },
        {
          label: "Blurt out your truth aggressively without considering impact",
          type: "overactive",
          outcome: "Your forceful delivery overshadows your message and damages relationships.",
          reflection: "How can I express truth in ways that invite understanding rather than defensiveness?"
        },
        {
          label: "Keep quiet to avoid conflict and maintain harmony",
          type: "underactive",
          outcome: "Your unexpressed truth creates internal tension and inauthentic relationships.",
          reflection: "What am I afraid will happen if I speak my truth?"
        }
      ]
    },
    {
      id: 2,
      text: "In a group conversation, you notice someone consistently interrupting and dominating the discussion. How do you respond?",
      options: [
        {
          label: "Gently guide the conversation to include all voices",
          type: "balanced",
          outcome: "You create space for authentic expression while addressing the imbalance skillfully.",
          reflection: "I can advocate for balanced communication while honoring everyone's voice."
        },
        {
          label: "Interrupt them back and fight for speaking time",
          type: "overactive",
          outcome: "You escalate the communication problem rather than solving it.",
          reflection: "What am I competing for when I fight to be heard?"
        },
        {
          label: "Remain silent and withdraw from the conversation",
          type: "underactive",
          outcome: "You deprive the group of your valuable perspective and enable poor communication patterns.",
          reflection: "How does my silence affect the quality of our collective expression?"
        }
      ]
    },
    {
      id: 3,
      text: "You're asked to give a presentation on a topic you're passionate about but feel nervous about public speaking. What's your approach?",
      options: [
        {
          label: "Prepare thoroughly while embracing vulnerability and authenticity",
          type: "balanced",
          outcome: "You connect genuinely with your audience and share your passion effectively.",
          reflection: "My authentic voice has value and deserves to be heard."
        },
        {
          label: "Over-prepare and control every word to avoid any mistakes",
          type: "overactive",
          outcome: "Your rigid delivery prevents genuine connection and authentic expression.",
          reflection: "What am I afraid will happen if I'm not perfect in my expression?"
        },
        {
          label: "Decline the opportunity - you're not good at public speaking",
          type: "underactive",
          outcome: "You deny others the gift of your perspective and reinforce communication fears.",
          reflection: "What would I share if I truly believed my voice mattered?"
        }
      ]
    },
    {
      id: 4,
      text: "Someone asks for your honest opinion about their creative work, which you find mediocre. How do you respond?",
      options: [
        {
          label: "Offer constructive feedback with encouragement and specific suggestions",
          type: "balanced",
          outcome: "You provide valuable guidance that supports their growth and creative journey.",
          reflection: "Honest feedback, delivered with care, is an act of service."
        },
        {
          label: "Tell them bluntly that their work isn't good without any tact",
          type: "overactive",
          outcome: "Your harsh honesty crushes their confidence and creative spirit.",
          reflection: "How can I speak truth in ways that uplift rather than destroy?"
        },
        {
          label: "Lie and tell them it's wonderful to avoid hurting their feelings",
          type: "underactive",
          outcome: "Your false praise prevents their growth and undermines authentic communication.",
          reflection: "How does avoiding difficult truths actually serve others?"
        }
      ]
    },
    {
      id: 5,
      text: "You realize you've been agreeing with others' opinions to fit in, even when you disagree. What do you do?",
      options: [
        {
          label: "Gradually start expressing your authentic views with confidence",
          type: "balanced",
          outcome: "You reclaim your authentic voice and attract relationships based on truth.",
          reflection: "My unique perspective contributes to the richness of human discourse."
        },
        {
          label: "Suddenly become contrarian and disagree with everything",
          type: "overactive",
          outcome: "Your reactive authenticity becomes just another mask, preventing genuine expression.",
          reflection: "What is the difference between authentic expression and reactive opposition?"
        },
        {
          label: "Continue agreeing - it's easier than dealing with potential rejection",
          type: "underactive",
          outcome: "You reinforce the pattern of self-silencing and attract superficial relationships.",
          reflection: "What would change in my life if people knew who I really am?"
        }
      ]
    }
  ],

  "third-eye": [
    {
      id: 1,
      text: "You have a strong intuitive feeling about a major life decision, but everyone around you thinks it's illogical. What do you do?",
      options: [
        {
          label: "Honor your intuition while gathering additional information",
          type: "balanced",
          outcome: "You integrate inner knowing with practical wisdom to make a well-rounded decision.",
          reflection: "I trust my inner wisdom while remaining open to other perspectives."
        },
        {
          label: "Follow your intuition completely, dismissing all logical considerations",
          type: "overactive",
          outcome: "Your disregard for practical factors leads to avoidable problems.",
          reflection: "How can I honor both intuition and practical wisdom?"
        },
        {
          label: "Ignore your intuition and do what everyone else thinks is logical",
          type: "underactive",
          outcome: "You disconnect from your inner guidance and make decisions that don't align with your path.",
          reflection: "What happens when I silence my inner knowing?"
        }
      ]
    },
    {
      id: 2,
      text: "You keep having vivid dreams that feel meaningful but you can't understand their message. How do you respond?",
      options: [
        {
          label: "Journal about the dreams and reflect on possible meanings",
          type: "balanced",
          outcome: "You develop a deeper relationship with your unconscious wisdom and symbolic thinking.",
          reflection: "My dreams are messengers from my deeper self, offering guidance and insight."
        },
        {
          label: "Become obsessed with finding the exact meaning and interpretation",
          type: "overactive",
          outcome: "Your analytical fixation blocks the natural unfolding of dream wisdom.",
          reflection: "What am I trying to control by demanding certainty from mystery?"
        },
        {
          label: "Dismiss the dreams as meaningless brain activity",
          type: "underactive",
          outcome: "You miss valuable insights from your unconscious mind and inner guidance system.",
          reflection: "What wisdom might I be dismissing by ignoring my dream life?"
        }
      ]
    },
    {
      id: 3,
      text: "You're facing a complex problem that logical analysis hasn't solved. How do you approach finding a solution?",
      options: [
        {
          label: "Step back, meditate, and allow insights to emerge naturally",
          type: "balanced",
          outcome: "You access deeper levels of understanding and find creative solutions.",
          reflection: "Sometimes the greatest insights come when I stop forcing and start allowing."
        },
        {
          label: "Escape into fantasy and imagination without taking any practical action",
          type: "overactive",
          outcome: "You lose touch with reality and avoid taking necessary practical steps.",
          reflection: "How can I balance visionary thinking with grounded action?"
        },
        {
          label: "Keep trying the same logical approaches harder",
          type: "underactive",
          outcome: "You remain stuck in limited thinking patterns and miss breakthrough insights.",
          reflection: "What new perspectives become available when I move beyond purely logical thinking?"
        }
      ]
    },
    {
      id: 4,
      text: "You sense something isn't right about a situation, but you can't pinpoint what it is. How do you handle this?",
      options: [
        {
          label: "Trust your intuition while staying observant and gathering more information",
          type: "balanced",
          outcome: "You honor your inner sensing while remaining grounded and discerning.",
          reflection: "My intuitive awareness is a valuable source of information about the world around me."
        },
        {
          label: "Become paranoid and assume the worst about everyone and everything",
          type: "overactive",
          outcome: "Your overactive intuition creates unnecessary fear and distorts your perception.",
          reflection: "How can I distinguish between true intuitive guidance and anxiety-driven assumptions?"
        },
        {
          label: "Dismiss the feeling as imagination and ignore it completely",
          type: "underactive",
          outcome: "You ignore important intuitive information that could guide you away from problems.",
          reflection: "What important information do I miss when I dismiss my subtle perceptions?"
        }
      ]
    },
    {
      id: 5,
      text: "You're drawn to explore spiritual or metaphysical practices but worry about being seen as irrational. What do you do?",
      options: [
        {
          label: "Explore these interests authentically while maintaining discernment",
          type: "balanced",
          outcome: "You expand your understanding of reality while staying grounded and critical thinking.",
          reflection: "I can explore expanded awareness while maintaining wisdom and discernment."
        },
        {
          label: "Dive deep into esoteric practices and reject all conventional thinking",
          type: "overactive",
          outcome: "You become ungrounded and lose your ability to function effectively in practical reality.",
          reflection: "How can I honor both mystical experience and practical wisdom?"
        },
        {
          label: "Suppress your spiritual curiosity to appear rational and normal",
          type: "underactive",
          outcome: "You deny important aspects of human experience and limit your understanding.",
          reflection: "What parts of my expanded awareness am I afraid to explore?"
        }
      ]
    }
  ],

  crown: [
    {
      id: 1,
      text: "You have a profound spiritual experience that challenges your previous worldview. How do you integrate this?",
      options: [
        {
          label: "Allow the experience to gradually transform your understanding",
          type: "balanced",
          outcome: "You integrate transcendent insight while maintaining connection to daily life.",
          reflection: "I can expand my consciousness while remaining grounded in my humanity."
        },
        {
          label: "Become completely absorbed in spiritual seeking and detach from worldly life",
          type: "overactive",
          outcome: "Your spiritual bypassing disconnects you from human responsibilities and relationships.",
          reflection: "How can I honor transcendent experiences while embracing my human journey?"
        },
        {
          label: "Dismiss the experience as imagination and return to old beliefs",
          type: "underactive",
          outcome: "You miss opportunities for growth and maintain limiting perspectives.",
          reflection: "What am I afraid will happen if I allow my consciousness to expand?"
        }
      ]
    },
    {
      id: 2,
      text: "You feel a deep sense of unity with all existence during meditation, but struggle with ego concerns in daily life. How do you navigate this?",
      options: [
        {
          label: "Honor both transcendent unity and human individual needs",
          type: "balanced",
          outcome: "You integrate mystical awareness with practical human experience.",
          reflection: "My spiritual awareness enhances rather than escapes my human experience."
        },
        {
          label: "Reject all personal desires as illusion and try to transcend the ego completely",
          type: "overactive",
          outcome: "Your spiritual pride becomes another form of ego and disconnects you from humanity.",
          reflection: "How might my attempt to transcend ego actually be reinforcing it?"
        },
        {
          label: "Dismiss spiritual experiences as impractical and focus only on material concerns",
          type: "underactive",
          outcome: "You cut yourself off from transcendent perspective and meaning.",
          reflection: "How does connecting to something greater than myself serve my overall wellbeing?"
        }
      ]
    },
    {
      id: 3,
      text: "You feel called to serve humanity in some way but are uncertain about how to express this purpose. What's your approach?",
      options: [
        {
          label: "Explore different ways to serve while trusting your path will unfold",
          type: "balanced",
          outcome: "You align with your purpose while remaining open to how it might manifest.",
          reflection: "My desire to serve emerges from my connection to the greater whole."
        },
        {
          label: "Immediately quit everything to become a spiritual teacher or healer",
          type: "overactive",
          outcome: "Your impulsive spiritual ambition creates instability without authentic foundation.",
          reflection: "What am I trying to prove or achieve through spiritual service?"
        },
        {
          label: "Ignore the calling as unrealistic - you need to focus on practical matters",
          type: "underactive",
          outcome: "You disconnect from your deeper purpose and source of meaning.",
          reflection: "How might honoring my calling to serve actually support my practical life?"
        }
      ]
    },
    {
      id: 4,
      text: "You're questioning the meaning and purpose of your entire life direction. How do you work with this existential crisis?",
      options: [
        {
          label: "Embrace the questioning as an opportunity for deeper understanding",
          type: "balanced",
          outcome: "You use the crisis as a doorway to more authentic alignment with your true purpose.",
          reflection: "Questions about meaning are invitations to discover my deeper truth."
        },
        {
          label: "Become obsessed with finding the ultimate meaning and purpose",
          type: "overactive",
          outcome: "Your desperate seeking prevents you from recognizing meaning that's already present.",
          reflection: "What meaning exists in this moment that I'm overlooking?"
        },
        {
          label: "Decide life has no meaning and become cynical",
          type: "underactive",
          outcome: "You close yourself off from the mystery and beauty that gives life significance.",
          reflection: "How does believing life is meaningless affect my experience of being alive?"
        }
      ]
    },
    {
      id: 5,
      text: "You feel overwhelmed by the suffering in the world and wonder how to maintain hope and spiritual connection. What do you do?",
      options: [
        {
          label: "Hold both the reality of suffering and the presence of love simultaneously",
          type: "balanced",
          outcome: "You develop mature spiritual resilience that can encompass all of human experience.",
          reflection: "True spiritual awakening includes embracing both light and shadow with equal love."
        },
        {
          label: "Escape into spiritual bliss and deny the reality of suffering",
          type: "overactive",
          outcome: "Your spiritual bypassing prevents genuine compassion and authentic awakening.",
          reflection: "How does avoiding difficult realities limit my capacity for genuine love?"
        },
        {
          label: "Become overwhelmed and lose faith in any higher meaning or purpose",
          type: "underactive",
          outcome: "You disconnect from transcendent perspective that could provide strength and guidance.",
          reflection: "How might connecting to something greater help me bear witness to suffering with love?"
        }
      ]
    }
  ]
};

export function getScenariosByChakra(chakraId: string): Scenario[] {
  return allScenarios[chakraId] || [];
}
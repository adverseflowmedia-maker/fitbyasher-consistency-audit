// Each question maps to a category used for the breakdown chart.
// Each option carries a `points` value (0-10) which feeds the scoring engine,
// and a `trait` tag used to weight the personality-type calculation.

export const QUESTIONS = [
  {
    id: 'q1',
    category: 'Consistency',
    question: "When you start a new fitness routine, what usually happens within the first 3 weeks?",
    options: [
      { label: "I stay fully on track, no matter what", points: 10, traits: { performer: 1 } },
      { label: "I'm consistent for a while, then one bad week turns into a month off", points: 4, traits: { allOrNothing: 2 } },
      { label: "I do well until life gets busy, then it quietly disappears", points: 5, traits: { busyPerformer: 2 } },
      { label: "I switch to a 'better' program before I even finish this one", points: 2, traits: { motivationChaser: 2, infoAddict: 1 } },
    ],
  },
  {
    id: 'q2',
    category: 'Motivation',
    question: "What usually gets you to actually train on a given day?",
    options: [
      { label: "It's just part of my schedule. I don't even think about it.", points: 10, traits: { performer: 2 } },
      { label: "I need to feel motivated or inspired first", points: 2, traits: { motivationChaser: 3 } },
      { label: "Guilt. I feel bad if I skip, so I force it.", points: 5, traits: { allOrNothing: 1 } },
      { label: "Whatever time I have left after everything else", points: 4, traits: { busyPerformer: 2 } },
    ],
  },
  {
    id: 'q3',
    category: 'Schedule',
    question: "How does training fit into your weekly schedule?",
    options: [
      { label: "Fixed time slots, treated like non-negotiable meetings", points: 10, traits: { performer: 2 } },
      { label: "I plan it but it gets bumped by work or social stuff often", points: 4, traits: { busyPerformer: 3 } },
      { label: "I train 'whenever I find time', no fixed slots", points: 3, traits: { busyPerformer: 2, motivationChaser: 1 } },
      { label: "I plan elaborate schedules but rarely follow the actual plan", points: 2, traits: { infoAddict: 2, allOrNothing: 1 } },
    ],
  },
  {
    id: 'q4',
    category: 'Nutrition Adherence',
    question: "When it comes to eating lean, what's your typical pattern?",
    options: [
      { label: "I eat well most days without obsessing over it", points: 9, traits: { performer: 2 } },
      { label: "I'm strict Mon-Thu then completely off the rails on weekends", points: 3, traits: { allOrNothing: 3 } },
      { label: "I know exactly what to eat. I just don't do it consistently.", points: 3, traits: { infoAddict: 2 } },
      { label: "I eat reactively, whatever's fastest given how busy I am.", points: 4, traits: { busyPerformer: 2 } },
    ],
  },
  {
    id: 'q5',
    category: 'Nutrition Adherence',
    question: "How do you usually respond after eating something 'off plan'?",
    options: [
      { label: "I shrug it off and continue normally at the next meal", points: 10, traits: { performer: 2 } },
      { label: "I figure the day is ruined, so I might as well keep going", points: 1, traits: { allOrNothing: 3 } },
      { label: "I spiral into researching a new diet that will 'fix' this", points: 2, traits: { infoAddict: 3 } },
      { label: "I feel guilty but don't really change anything", points: 4, traits: { motivationChaser: 1 } },
    ],
  },
  {
    id: 'q6',
    category: 'Workout Adherence',
    question: "What happens to your training when work or life gets stressful?",
    options: [
      { label: "It stays the one stable thing. Sometimes it's all I keep.", points: 10, traits: { performer: 2 } },
      { label: "It's the first thing to get cut to 'make time'", points: 3, traits: { busyPerformer: 3 } },
      { label: "I tell myself I'll restart once things calm down (they don't)", points: 2, traits: { motivationChaser: 2 } },
      { label: "I research a more 'efficient' program instead of just training", points: 2, traits: { infoAddict: 2 } },
    ],
  },
  {
    id: 'q7',
    category: 'Self-Discipline',
    question: "Be honest: how often does your effort depend on how you feel that day?",
    options: [
      { label: "Rarely. I show up regardless of mood", points: 10, traits: { performer: 2 } },
      { label: "Almost always. If I don't feel it, I don't do it.", points: 2, traits: { motivationChaser: 3 } },
      { label: "Often, but I push through about half the time", points: 5, traits: { busyPerformer: 1 } },
      { label: "I perform well when following a plan, badly without one", points: 4, traits: { infoAddict: 1, allOrNothing: 1 } },
    ],
  },
  {
    id: 'q8',
    category: 'Self-Discipline',
    question: "How many fitness programs have you 'started fresh' in the last 12 months?",
    options: [
      { label: "0-1. I stick with one approach and adjust it.", points: 10, traits: { performer: 2 } },
      { label: "2-3, usually after a slip-up reset", points: 4, traits: { allOrNothing: 2 } },
      { label: "4 or more. I'm constantly looking for the right one.", points: 1, traits: { infoAddict: 3, motivationChaser: 1 } },
      { label: "I lose count. Life keeps getting in the way of whatever I pick.", points: 3, traits: { busyPerformer: 2 } },
    ],
  },
  {
    id: 'q9',
    category: 'Identity',
    question: "Which sentence feels closest to true for you right now?",
    options: [
      { label: "\"I am someone who trains. It's just who I am.\"", points: 10, traits: { performer: 2 } },
      { label: "\"I'm trying to become consistent.\"", points: 5, traits: { motivationChaser: 1 } },
      { label: "\"I'm disciplined at work but not with my body.\"", points: 4, traits: { busyPerformer: 2 } },
      { label: "\"I know more about training than most people who are actually fit.\"", points: 2, traits: { infoAddict: 3 } },
    ],
  },
  {
    id: 'q10',
    category: 'Identity',
    question: "When someone compliments your discipline, what's your honest internal reaction?",
    options: [
      { label: "Yeah, it's genuinely become automatic for me.", points: 10, traits: { performer: 2 } },
      { label: "I feel like a fraud because I know I'm inconsistent behind closed doors", points: 2, traits: { allOrNothing: 2, motivationChaser: 1 } },
      { label: "I think 'if only they saw how chaotic my schedule actually is'", points: 3, traits: { busyPerformer: 3 } },
      { label: "I deflect to what I'm currently learning instead of what I'm doing", points: 2, traits: { infoAddict: 2 } },
    ],
  },
  {
    id: 'q11',
    category: 'Habits',
    question: "Do you have a consistent daily anchor habit (e.g. same wake time, same first action)?",
    options: [
      { label: "Yes, and it's been stable for months", points: 10, traits: { performer: 2 } },
      { label: "I have one but it falls apart under any disruption", points: 4, traits: { allOrNothing: 1, busyPerformer: 1 } },
      { label: "I've tried to build one but it never sticks past a week or two", points: 2, traits: { motivationChaser: 2 } },
      { label: "Not really. Every day looks completely different.", points: 3, traits: { busyPerformer: 3 } },
    ],
  },
  {
    id: 'q12',
    category: 'Habits',
    question: "What's your relationship with fitness content (YouTube, podcasts, social media)?",
    options: [
      { label: "I consume a little, apply it, move on", points: 9, traits: { performer: 1 } },
      { label: "I consume a lot more than I apply", points: 2, traits: { infoAddict: 3 } },
      { label: "I binge it in motivated bursts, then ignore it for weeks", points: 3, traits: { motivationChaser: 2 } },
      { label: "I barely have time for it between work and everything else", points: 5, traits: { busyPerformer: 1 } },
    ],
  },
]

export const TOTAL_QUESTIONS = QUESTIONS.length

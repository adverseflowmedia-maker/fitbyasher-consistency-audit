import { QUESTIONS } from './questions.js'
import { CONSISTENCY_TYPES } from './consistencyTypes.js'

const MAX_POINTS_PER_QUESTION = 10

/**
 * answers: { [questionId]: optionIndex }
 * Returns:
 *  - score: 0-100 overall consistency score
 *  - type: the winning CONSISTENCY_TYPES entry
 *  - breakdown: [{ category, score (0-100), label }]
 *  - bottleneck: the lowest-scoring category
 */
export function calculateResults(answers) {
  let totalPoints = 0
  let maxPoints = 0

  const traitTotals = {
    motivationChaser: 0,
    allOrNothing: 0,
    busyPerformer: 0,
    infoAddict: 0,
    performer: 0,
  }

  const categoryTotals = {}
  const categoryMax = {}

  QUESTIONS.forEach((q) => {
    const selectedIndex = answers[q.id]
    if (selectedIndex === undefined || selectedIndex === null) return

    const option = q.options[selectedIndex]
    if (!option) return

    totalPoints += option.points
    maxPoints += MAX_POINTS_PER_QUESTION

    categoryTotals[q.category] = (categoryTotals[q.category] || 0) + option.points
    categoryMax[q.category] = (categoryMax[q.category] || 0) + MAX_POINTS_PER_QUESTION

    if (option.traits) {
      Object.entries(option.traits).forEach(([trait, weight]) => {
        traitTotals[trait] = (traitTotals[trait] || 0) + weight
      })
    }
  })

  const score = maxPoints > 0 ? Math.round((totalPoints / maxPoints) * 100) : 0

  const breakdown = Object.keys(categoryTotals).map((category) => ({
    category,
    score: Math.round((categoryTotals[category] / categoryMax[category]) * 100),
  }))

  // Lowest scoring category = the bottleneck
  const bottleneck = breakdown.reduce(
    (lowest, current) => (current.score < lowest.score ? current : lowest),
    breakdown[0] || { category: 'Consistency', score: 0 }
  )

  // Determine winning type — highest accumulated trait score among the 4 "problem" archetypes.
  // 'performer' trait doesn't map to a problem-type; high performer + high score means
  // they're already consistent, but we still surface their closest-matching growth edge.
  const problemTraits = ['motivationChaser', 'allOrNothing', 'busyPerformer', 'infoAddict']
  const winningTraitKey = problemTraits.reduce(
    (best, key) => (traitTotals[key] > traitTotals[best] ? key : best),
    problemTraits[0]
  )

  const type = CONSISTENCY_TYPES[winningTraitKey]

  return {
    score,
    totalPoints,
    maxPoints,
    breakdown,
    bottleneck,
    type,
    traitTotals,
  }
}

export function getScoreLabel(score) {
  if (score >= 85) return { label: 'Elite Consistency', tone: 'high' }
  if (score >= 65) return { label: 'Developing Consistency', tone: 'mid' }
  if (score >= 40) return { label: 'Fragile Consistency', tone: 'low' }
  return { label: 'Reactive Pattern', tone: 'critical' }
}

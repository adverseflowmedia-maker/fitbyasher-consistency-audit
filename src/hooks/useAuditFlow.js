import { useState, useCallback, useMemo } from 'react'
import { QUESTIONS, TOTAL_QUESTIONS } from '../data/questions.js'
import { calculateResults } from '../data/scoringEngine.js'

export const STAGES = {
  LANDING: 'landing',
  QUIZ: 'quiz',
  LEAD_CAPTURE: 'lead_capture',
  REPORT: 'report',
}

export function useAuditFlow() {
  const [stage, setStage] = useState(STAGES.LANDING)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [lead, setLead] = useState({ name: '', email: '' })

  const startAudit = useCallback(() => {
    setStage(STAGES.QUIZ)
    setCurrentQuestionIndex(0)
  }, [])

  const selectAnswer = useCallback((questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }))
  }, [])

  const goNext = useCallback(() => {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuestionIndex((i) => i + 1)
    } else {
      setStage(STAGES.LEAD_CAPTURE)
    }
  }, [currentQuestionIndex])

  const goBack = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((i) => i - 1)
    } else {
      setStage(STAGES.LANDING)
    }
  }, [currentQuestionIndex])

  const submitLead = useCallback((leadData) => {
    setLead(leadData)
    setStage(STAGES.REPORT)
  }, [])

  const restart = useCallback(() => {
    setAnswers({})
    setCurrentQuestionIndex(0)
    setLead({ name: '', email: '' })
    setStage(STAGES.LANDING)
  }, [])

  const currentQuestion = QUESTIONS[currentQuestionIndex]
  const progress = useMemo(
    () => Math.round(((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100),
    [currentQuestionIndex]
  )
  const isAnswered = currentQuestion ? answers[currentQuestion.id] !== undefined : false
  const isLastQuestion = currentQuestionIndex === TOTAL_QUESTIONS - 1

  const results = useMemo(() => {
    if (stage !== STAGES.LEAD_CAPTURE && stage !== STAGES.REPORT) return null
    return calculateResults(answers)
  }, [stage, answers])

  return {
    stage,
    setStage,
    startAudit,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: TOTAL_QUESTIONS,
    progress,
    answers,
    selectAnswer,
    isAnswered,
    isLastQuestion,
    goNext,
    goBack,
    lead,
    submitLead,
    restart,
    results,
  }
}

import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar.jsx'

export default function QuizFlow({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  progress,
  answers,
  selectAnswer,
  isAnswered,
  isLastQuestion,
  goNext,
  goBack,
}) {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    setAnimKey((k) => k + 1)
  }, [currentQuestionIndex])

  if (!currentQuestion) return null

  const selectedIndex = answers[currentQuestion.id]

  const handleSelect = (optionIndex) => {
    selectAnswer(currentQuestion.id, optionIndex)
  }

  return (
    <div className="px-5 sm:px-8 py-8 sm:py-12 max-w-2xl mx-auto min-h-[calc(100vh-90px)] flex flex-col">
      <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} progress={progress} />

      <div key={animKey} className="flex-1 flex flex-col mt-10 sm:mt-12 animate-fadeUp">
        <div className="eyebrow mb-3">{currentQuestion.category}</div>
        <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-[1.7rem] text-ink leading-snug mb-8">
          {currentQuestion.question}
        </h2>

        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedIndex === idx
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                aria-pressed={isSelected}
                className={`
                  w-full text-left px-5 sm:px-6 py-4 sm:py-4.5 rounded-2xl border transition-all duration-200
                  flex items-center gap-4 group
                  ${
                    isSelected
                      ? 'border-emerald-glow/60 bg-emerald-glow/[0.08] shadow-glow'
                      : 'border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15'
                  }
                `}
              >
                <span
                  className={`
                    flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200
                    ${isSelected ? 'border-emerald-glow' : 'border-white/20 group-hover:border-white/40'}
                  `}
                >
                  {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-emerald-glow" />}
                </span>
                <span className={`text-sm sm:text-[15px] leading-relaxed ${isSelected ? 'text-ink font-medium' : 'text-ink-dim'}`}>
                  {option.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 mt-10 sm:mt-12 pt-6 border-t border-white/[0.06]">
        <button onClick={goBack} className="btn-secondary">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <button onClick={goNext} disabled={!isAnswered} className="btn-primary">
          {isLastQuestion ? 'See My Results' : 'Next'}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

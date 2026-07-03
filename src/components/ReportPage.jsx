import ConsistencyDial from './ConsistencyDial.jsx'
import BreakdownChart from './BreakdownChart.jsx'
import ResetPlan from './ResetPlan.jsx'
import CoachingCTA from './CoachingCTA.jsx'
import { getScoreLabel } from '../data/scoringEngine.js'

export default function ReportPage({ results, lead, onRestart }) {
  if (!results) return null
  const { score, type, breakdown, bottleneck } = results
  const scoreLabel = getScoreLabel(score)

  return (
    <div className="px-5 sm:px-8 py-10 sm:py-14 max-w-3xl mx-auto">
      {/* Header / Score */}
      <div className="text-center mb-12 animate-fadeUp">
        <div className="eyebrow mb-3">
          {lead?.name ? `${lead.name}'s Consistency Audit` : 'Your Consistency Audit'}
        </div>
        <div className="flex justify-center mb-5">
          <ConsistencyDial value={score} size={200} />
        </div>
        <span
          className={`inline-flex px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wide
            ${
              scoreLabel.tone === 'high'
                ? 'bg-emerald-glow/10 text-emerald-glow border border-emerald-glow/30'
                : scoreLabel.tone === 'mid'
                ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                : 'bg-rose-400/10 text-rose-300 border border-rose-400/30'
            }`}
        >
          {scoreLabel.label}
        </span>
      </div>

      {/* Type Card */}
      <div className="glass-card p-7 sm:p-9 mb-8 animate-fadeUp" style={{ animationDelay: '0.08s' }}>
        <div className="flex items-start gap-4 mb-5">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-glow/10 border border-emerald-glow/30 flex items-center justify-center">
            <span className="font-mono font-bold text-lg text-emerald-glow">{type.letter}</span>
          </div>
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink leading-tight">
              {type.name}
            </h2>
            <p className="text-sm text-emerald-glow/80 font-medium mt-0.5">{type.tagline}</p>
          </div>
        </div>
        <p className="text-sm sm:text-[15px] text-ink-dim leading-relaxed">{type.description}</p>

        <div className="grid sm:grid-cols-2 gap-5 mt-7 pt-7 border-t border-white/[0.06]">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wide text-rose-300/80 mb-2">
              Biggest Weakness
            </h3>
            <p className="text-sm text-ink-mute leading-relaxed">{type.biggestWeakness}</p>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wide text-amber-300/80 mb-2">
              Hidden Blind Spot
            </h3>
            <p className="text-sm text-ink-mute leading-relaxed">{type.blindSpot}</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/[0.06]">
          <h3 className="text-xs font-mono uppercase tracking-wide text-ink-mute mb-2">
            Why Your Past Attempts Failed
          </h3>
          <p className="text-sm text-ink-dim leading-relaxed">{type.whyPastAttemptsFailed}</p>
        </div>
      </div>

      {/* Breakdown */}
      <div className="glass-card p-7 sm:p-9 mb-8 animate-fadeUp" style={{ animationDelay: '0.16s' }}>
        <div className="eyebrow mb-1">Detailed Breakdown</div>
        <h3 className="font-display font-semibold text-lg text-ink mb-1">
          Where your consistency holds and where it breaks
        </h3>
        <p className="text-sm text-ink-mute mb-6">
          Your biggest bottleneck right now is{' '}
          <span className="text-ink font-medium">{bottleneck.category}</span>.
        </p>
        <BreakdownChart breakdown={breakdown} />
      </div>

      {/* Action Plan */}
      <div className="glass-card p-7 sm:p-9 mb-8 animate-fadeUp" style={{ animationDelay: '0.24s' }}>
        <div className="eyebrow mb-1">Your Action Plan</div>
        <h3 className="font-display font-semibold text-lg text-ink mb-6">
          What actually fixes this
        </h3>
        <ul className="flex flex-col gap-3.5">
          {type.actionPlan.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-emerald-glow" />
              <span className="text-sm text-ink-dim leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 7-Day Reset Plan */}
      <div className="glass-card p-7 sm:p-9 mb-8 animate-fadeUp" style={{ animationDelay: '0.32s' }}>
        <div className="eyebrow mb-1">Your 7-Day Consistency Reset</div>
        <h3 className="font-display font-semibold text-lg text-ink mb-6">
          Start breaking the restart cycle this week
        </h3>
        <ResetPlan type={type} />
      </div>

      {/* Coaching CTA */}
      <div className="mb-10 animate-fadeUp" style={{ animationDelay: '0.4s' }}>
        <CoachingCTA />
      </div>

      <div className="text-center">
        <button
          onClick={onRestart}
          className="text-xs font-mono uppercase tracking-wide text-ink-mute hover:text-ink-dim transition-colors duration-200"
        >
          Retake the audit
        </button>
      </div>
    </div>
  )
}

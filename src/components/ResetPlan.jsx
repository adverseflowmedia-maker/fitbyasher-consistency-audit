import { RESET_PLAN_DAYS } from '../data/resetPlan.js'

export default function ResetPlan({ type }) {
  return (
    <div className="flex flex-col gap-3">
      {RESET_PLAN_DAYS.map((day, i) => (
        <div
          key={day.day}
          className="flex gap-4 items-start p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] animate-fadeUp"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-glow/10 border border-emerald-glow/30 flex items-center justify-center">
            <span className="text-xs font-mono font-bold text-emerald-glow">{day.day}</span>
          </div>
          <div>
            <h4 className="font-display font-semibold text-[15px] text-ink mb-1">{day.title}</h4>
            <p className="text-sm text-ink-mute leading-relaxed">{day.action}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

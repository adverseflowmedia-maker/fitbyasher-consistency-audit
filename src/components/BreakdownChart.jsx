export default function BreakdownChart({ breakdown }) {
  const sorted = [...breakdown].sort((a, b) => b.score - a.score)

  return (
    <div className="flex flex-col gap-4">
      {sorted.map((item, i) => {
        const colorClass =
          item.score >= 65
            ? 'from-emerald-deep to-emerald-glow'
            : item.score >= 40
            ? 'from-amber-600 to-amber-400'
            : 'from-rose-600 to-rose-400'
        return (
          <div key={item.category} className="animate-fadeUp" style={{ animationDelay: `${i * 0.05}s` }}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-ink-dim">{item.category}</span>
              <span className="text-sm font-mono font-semibold text-ink">{item.score}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${colorClass} transition-all duration-700 ease-out`}
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

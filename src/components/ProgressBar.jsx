export default function ProgressBar({ current, total, progress }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs font-mono uppercase tracking-[0.14em] text-ink-mute">
          Question {current} / {total}
        </span>
        <span className="text-xs font-mono font-semibold text-emerald-glow">
          {progress}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-deep to-emerald-glow transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'

/**
 * ConsistencyDial — the app's signature visual element.
 * A circular gauge whose stroke sweeps to the given value on mount.
 * Used small (in nav) and large (on results page).
 */
export default function ConsistencyDial({
  value = 0,
  size = 200,
  strokeWidth = 12,
  showLabel = true,
  labelSize = 'lg',
  animate = true,
}) {
  const [displayValue, setDisplayValue] = useState(animate ? 0 : value)
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const clampedValue = Math.max(0, Math.min(100, value))
  const offset = circumference - (clampedValue / 100) * circumference

  useEffect(() => {
    if (!animate) {
      setDisplayValue(value)
      return
    }
    let frame
    const start = performance.now()
    const duration = 1400
    const startVal = 0

    const tick = (now) => {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplayValue(Math.round(startVal + (value - startVal) * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value, animate])

  const colorStop = clampedValue >= 65 ? '#34D399' : clampedValue >= 40 ? '#FBBF24' : '#FB7185'

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`Consistency score: ${clampedValue} out of 100`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorStop} stopOpacity="0.6" />
            <stop offset="100%" stopColor={colorStop} stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#dialGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animate ? circumference - (displayValue / 100) * circumference : offset}
          style={{ transition: animate ? 'none' : 'stroke-dashoffset 0.6s ease' }}
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={
              labelSize === 'lg'
                ? 'text-5xl sm:text-6xl font-mono font-bold text-ink tracking-tight'
                : 'text-lg font-mono font-bold text-ink'
            }
          >
            {displayValue}
          </span>
          {labelSize === 'lg' && (
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-mute mt-1">
              / 100
            </span>
          )}
        </div>
      )}
    </div>
  )
}

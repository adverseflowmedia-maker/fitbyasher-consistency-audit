export default function CoachingCTA() {
  return (
    <div className="glass-card p-8 sm:p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-radial pointer-events-none" />
      <div className="relative">
        <div className="eyebrow mb-4">90 Day Lean &amp; Locked In</div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink leading-tight max-w-md mx-auto">
          Ready To Stop Restarting?
        </h2>
        <p className="mt-4 text-sm sm:text-base text-ink-dim leading-relaxed max-w-md mx-auto">
          This audit told you what's wrong. Coaching is where we fix it. A system built around your exact consistency type, so this time actually sticks instead of becoming another restart.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://instagram.com/Asher.ex_"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            Apply For Coaching
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://instagram.com/Asher.ex_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink-mute hover:text-emerald-glow transition-colors duration-200"
          >
            @Asher.ex_ on Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

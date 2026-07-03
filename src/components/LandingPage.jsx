import ConsistencyDial from './ConsistencyDial.jsx'

const FAIL_REASONS = [
  {
    title: 'They wait to feel motivated',
    detail: 'Motivation is a mood, not a system. The men who stay lean built routines that work even on the days they don\'t feel like it.',
  },
  {
    title: 'They reset after every slip',
    detail: 'One off-plan meal becomes a ruined week. One missed session turns into a month off. The slip was never the real problem. The all-or-nothing reaction to it was.',
  },
  {
    title: 'They optimize instead of execute',
    detail: 'More research. More new programs. More "better" approaches. Almost no repetition of one simple plan long enough to actually see it work.',
  },
  {
    title: "They never made it non-negotiable",
    detail: "Training gets treated as a flexible block instead of a real commitment, so it's always the first thing to go when life picks up.",
  },
]

const BENEFITS = [
  {
    label: 'Diagnostic',
    title: 'Find your exact consistency type',
    detail: 'One of four patterns is quietly running your behavior. This audit shows you which one and what to do about it.',
  },
  {
    label: 'Specific',
    title: 'See your real bottleneck',
    detail: 'Not generic advice. A breakdown across 8 categories showing exactly where your consistency breaks down first.',
  },
  {
    label: 'Actionable',
    title: 'Walk away with a 7-day reset',
    detail: 'A short, specific plan built for your type. The first 7 days of actually breaking the restart cycle.',
  },
]

export default function LandingPage({ onStart }) {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="px-5 sm:px-8 pt-6 sm:pt-12 pb-16 sm:pb-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-center">
          <div className="animate-fadeUp">
            <div className="eyebrow mb-5">The Consistency Audit · 3 Minutes</div>
            <h1 className="font-display font-extrabold text-[2.1rem] sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-ink">
              Why Do You Keep{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-emerald-glow to-emerald-deep bg-clip-text text-transparent">
                  Restarting
                </span>
              </span>{' '}
              Your Fitness Journey?
            </h1>
            <p className="mt-5 text-base sm:text-lg text-ink-dim leading-relaxed max-w-lg">
              Take this 3-minute assessment and find the exact pattern that's been stopping you from staying lean.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button onClick={onStart} className="btn-primary w-full sm:w-auto">
                Start Free Audit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-xs font-mono text-ink-mute uppercase tracking-wide">
                12 Questions · No Card Required
              </span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 sm:p-10 animate-float">
              <ConsistencyDial value={34} size={180} />
              <p className="text-center text-xs font-mono text-ink-mute mt-4 uppercase tracking-wide">
                Sample Score
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-5xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl">
          <div className="eyebrow mb-4">The Real Problem</div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink leading-tight">
            You don't have a discipline problem.
            <br />
            <span className="text-ink-dim">You have an unidentified pattern.</span>
          </h2>
          <p className="mt-5 text-ink-dim leading-relaxed">
            You know what to eat. You know how to train. You've read the articles, watched the videos, maybe even hired a coach. And yet three weeks in, it falls apart again. That's not a knowledge gap. It's a specific, repeatable pattern running underneath everything you try, and most men never catch it because nobody's ever put a number on it.
          </p>
        </div>
      </section>

      {/* Why most men fail */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-5xl mx-auto border-t border-white/[0.06]">
        <div className="eyebrow mb-4">Why Most Men Fail</div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-10 max-w-xl">
          Four patterns. One of them is running your life right now.
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {FAIL_REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className="glass-card p-6 sm:p-7 animate-fadeUp"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <h3 className="font-display font-semibold text-lg text-ink mb-2.5">
                {reason.title}
              </h3>
              <p className="text-sm text-ink-mute leading-relaxed">{reason.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of taking audit */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-5xl mx-auto border-t border-white/[0.06]">
        <div className="eyebrow mb-4">What You Get</div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-10 max-w-xl">
          A real diagnosis, not another generic plan.
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {BENEFITS.map((b) => (
            <div key={b.title} className="relative">
              <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-emerald-glow/70 mb-3">
                {b.label}
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2.5 leading-snug">
                {b.title}
              </h3>
              <p className="text-sm text-ink-mute leading-relaxed">{b.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 py-20 sm:py-28 max-w-5xl mx-auto border-t border-white/[0.06]">
        <div className="glass-card p-10 sm:p-14 text-center relative">
          <div className="absolute inset-0 bg-emerald-radial pointer-events-none" />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.4rem] text-ink leading-tight max-w-2xl mx-auto">
              Stop guessing why you keep restarting.
            </h2>
            <p className="mt-4 text-ink-dim max-w-md mx-auto">
              Three minutes. Twelve questions. One clear answer.
            </p>
            <button onClick={onStart} className="btn-primary mt-8">
              Start Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

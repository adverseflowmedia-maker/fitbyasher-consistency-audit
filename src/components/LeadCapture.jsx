import { useState } from 'react'
import ConsistencyDial from './ConsistencyDial.jsx'

export default function LeadCapture({ results, onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const next = {}
    if (!name.trim()) next.name = 'Enter your name to continue'
    if (!email.trim()) {
      next.email = 'Enter your email to continue'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Enter a valid email address'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      const leadData = { name: name.trim(), email: email.trim() }
      try {
        fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email.trim(),
            first_name: name.trim()
          })
        })
      } catch (_) {}
      onSubmit(leadData)
    }
  }

  return (
    <div className="px-5 sm:px-8 py-10 sm:py-16 max-w-md mx-auto min-h-[calc(100vh-90px)] flex flex-col justify-center">
      <div className="text-center mb-8 animate-fadeUp">
        <div className="flex justify-center mb-6">
          <ConsistencyDial value={results?.score ?? 0} size={140} labelSize="sm" />
        </div>
        <div className="eyebrow mb-3">Your Audit Is Ready</div>
        <h1 className="font-display font-bold text-2xl sm:text-[1.8rem] text-ink leading-snug">
          Get Your Personalized Consistency Roadmap
        </h1>
        <p className="mt-3 text-sm text-ink-mute leading-relaxed">
          Enter your details to unlock your full breakdown, your consistency type, and your 7-day reset plan.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wide text-ink-mute mb-2">
              First Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Asher"
              className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-ink placeholder:text-ink-mute/50 outline-none transition-colors duration-200
                ${errors.name ? 'border-rose-400/60' : 'border-white/10 focus:border-emerald-glow/60'}`}
            />
            {errors.name && <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wide text-ink-mute mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-ink placeholder:text-ink-mute/50 outline-none transition-colors duration-200
                ${errors.email ? 'border-rose-400/60' : 'border-white/10 focus:border-emerald-glow/60'}`}
            />
            {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
          </div>

          <button type="submit" className="btn-primary w-full mt-2">
            Unlock My Full Report
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <p className="text-center text-[11px] text-ink-mute/70 leading-relaxed mt-1">
            No spam. Your data stays private and is only used to send your results.
          </p>
        </div>
      </form>
    </div>
  )
}

export default function NavBar({ onLogoClick }) {
  return (
    <header className="w-full px-5 sm:px-8 py-5 flex items-center justify-between max-w-5xl mx-auto">
      <button
        onClick={onLogoClick}
        className="flex items-center gap-2.5 group"
        aria-label="FitByAsher home"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-glow shadow-glow group-hover:animate-pulseGlow" />
        <span className="font-display font-bold text-base tracking-tight text-ink">
          FitByAsher
        </span>
      </button>
      <a
        href="https://instagram.com/Asher.ex_"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-ink-mute hover:text-emerald-glow transition-colors duration-200"
      >
        @Asher.ex_
      </a>
    </header>
  )
}

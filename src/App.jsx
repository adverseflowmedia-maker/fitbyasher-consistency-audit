import { useAuditFlow, STAGES } from './hooks/useAuditFlow.js'
import NavBar from './components/NavBar.jsx'
import LandingPage from './components/LandingPage.jsx'
import QuizFlow from './components/QuizFlow.jsx'
import LeadCapture from './components/LeadCapture.jsx'
import ReportPage from './components/ReportPage.jsx'

export default function App() {
  const flow = useAuditFlow()

  return (
    <div className="min-h-screen bg-base bg-noise">
      <NavBar onLogoClick={flow.restart} />

      {flow.stage === STAGES.LANDING && <LandingPage onStart={flow.startAudit} />}

      {flow.stage === STAGES.QUIZ && (
        <QuizFlow
          currentQuestion={flow.currentQuestion}
          currentQuestionIndex={flow.currentQuestionIndex}
          totalQuestions={flow.totalQuestions}
          progress={flow.progress}
          answers={flow.answers}
          selectAnswer={flow.selectAnswer}
          isAnswered={flow.isAnswered}
          isLastQuestion={flow.isLastQuestion}
          goNext={flow.goNext}
          goBack={flow.goBack}
        />
      )}

      {flow.stage === STAGES.LEAD_CAPTURE && (
        <LeadCapture results={flow.results} onSubmit={flow.submitLead} />
      )}

      {flow.stage === STAGES.REPORT && (
        <ReportPage results={flow.results} lead={flow.lead} onRestart={flow.restart} />
      )}

      <footer className="px-5 sm:px-8 py-10 text-center">
        <p className="text-xs text-ink-mute/60">
          © {new Date().getFullYear()} FitByAsher. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

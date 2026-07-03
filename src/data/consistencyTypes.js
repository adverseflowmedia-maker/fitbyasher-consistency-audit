// Four consistency archetypes. `trait` key matches the trait tags in questions.js
// so the scoring engine can determine which type "wins" based on accumulated trait scores.

export const CONSISTENCY_TYPES = {
  motivationChaser: {
    id: 'motivationChaser',
    letter: 'A',
    name: 'The Motivation Chaser',
    tagline: 'Runs on emotional fuel that always runs out',
    description:
      "You don't lack ambition. You lack a system that works without it. You train hard when you feel inspired, then disappear the moment that feeling fades. The problem isn't willpower. It's that your whole approach runs on an emotion that was never built to last.",
    biggestWeakness:
      'You treat motivation as a prerequisite for action, instead of building structure that produces results regardless of how you feel that day.',
    blindSpot:
      "You actually have more discipline than you give yourself credit for. You just spend it all chasing the next exciting program instead of executing a boring one long enough to see it work.",
    whyPastAttemptsFailed:
      "Every program you've started has demanded that you feel motivated to follow it. The second the excitement faded, you had nothing left to run on. So you quietly stopped, told yourself you'd restart when you're ready, and waited for a feeling that was never coming back on its own.",
    actionPlan: [
      'Take "should I train today" out of the equation entirely. Pre-commit to fixed days and times so motivation never gets a vote.',
      'Build one identity-based anchor habit you do regardless of mood, even in a tiny version, to prove to yourself consistency doesn\'t require inspiration.',
      'Track action, not feelings. Log whether you did the thing, not whether you wanted to.',
      'Replace "I need to feel ready" with "I am someone who does this" as your internal script.',
    ],
  },

  allOrNothing: {
    id: 'allOrNothing',
    letter: 'B',
    name: 'The All-Or-Nothing Guy',
    tagline: 'One bad day becomes one bad month',
    description:
      "You're capable of intense, disciplined stretches. But one missed workout or one off-plan meal triggers a mental collapse where the whole effort feels ruined. You don't have a consistency problem in the traditional sense. You have an all-or-nothing trigger that turns small slips into full resets.",
    biggestWeakness:
      'You treat imperfect execution as failed execution. A single missed session erases weeks of progress in your head, even when your body is still ahead. That\'s where the real damage happens.',
    blindSpot:
      "You're not actually afraid of failing. You're afraid of being inconsistent in front of yourself. So instead of tolerating a B+ effort, you'd rather quit and call it a clean slate.",
    whyPastAttemptsFailed:
      "Every plan you've followed has been rigid enough that any deviation felt like breaking it completely. There was no room for a bad day or a missed session. So the first one you hit didn't just cost you that day. It cost you the whole program.",
    actionPlan: [
      'Build a minimum version of your day. A floor you can always hit, so a bad day never turns into a skip.',
      "Replace your internal rule from 'perfect or worthless' to 'next rep, next meal, not next Monday.'",
      'Pre-decide your recovery response to a missed session before it happens, so emotion doesn\'t make the call in the moment.',
      'Track your longest streak of imperfect-but-present weeks, not your longest streak of perfect ones.',
    ],
  },

  busyPerformer: {
    id: 'busyPerformer',
    letter: 'C',
    name: 'The Busy Performer',
    tagline: "Disciplined everywhere except where it's invisible",
    description:
      "You're competent, driven, and probably excellent at your job. But fitness keeps getting treated as a flexible block instead of a real commitment, so it's always first to go when life gets loud. You don't lack discipline. You just haven't protected training the way you protect everything else.",
    biggestWeakness:
      'You treat training as something you\'ll "fit in" rather than a fixed slot, so it ends up competing with everything else and usually losing.',
    blindSpot:
      "You apply more structure to your work calendar than to your own body. The version of you that shows up to meetings on time is fully capable of showing up to train. You've just never given it the same priority.",
    whyPastAttemptsFailed:
      "Every plan you've tried assumed you had flexible, predictable time to give it. You don't. So the moment a real week hit with deadlines, travel, or back-to-back obligations, the 'whenever I have time' approach fell apart. Because there was never a fixed slot to protect in the first place.",
    actionPlan: [
      'Put training on your calendar like a client meeting. Fixed time, fixed place, not open for rescheduling.',
      'Use a minimum-effective-dose approach (20-30 min sessions) so "no time" stops being a valid excuse.',
      'Plan meals and sessions on Sunday so you\'re not making those decisions on the fly during the week.',
      'Start by protecting one session per week that doesn\'t move, then build from there instead of trying to overhaul everything at once.',
    ],
  },

  infoAddict: {
    id: 'infoAddict',
    letter: 'D',
    name: 'The Information Addict',
    tagline: 'Knows everything, executes almost none of it',
    description:
      "You could probably coach someone else better than most coaches. You've absorbed years of content on training and nutrition. But somewhere along the way, that knowledge became a substitute for action. Research started feeling like progress, even when nothing in your actual routine changed.",
    biggestWeakness:
      "You use learning as a way to feel productive about fitness without doing the uncomfortable, repetitive work of actually being consistent at it.",
    blindSpot:
      "You don't need more information. You've had enough to get lean for a long time. What you actually lack is a decision to stop optimizing and start repeating one simple plan long enough for it to work.",
    whyPastAttemptsFailed:
      "Every time you started a plan, a part of you stayed open to finding a better one. The moment a new video, study, or method appeared, you treated it as a reason to switch instead of just noise to ignore. You were never short on knowledge. You were short on finishing what you started.",
    actionPlan: [
      'Pick one simple approach and commit to zero changes for 30 days, no matter what new information you encounter.',
      'Swap content time for execution time. For every video you watch, do a set.',
      'Unfollow or mute accounts that constantly introduce "new" methods while you are mid-program.',
      'Define success as adherence to the plan, not the sophistication of the plan.',
    ],
  },
}

export const CONSISTENCY_TYPES_LIST = Object.values(CONSISTENCY_TYPES)

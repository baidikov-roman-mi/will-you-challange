import { useState, useRef } from "react"

import ResultModal from "./ResultModal.tsx"

interface Props {
  title: string
  targetTime: number
}

export default function TimerChallenge({ title, targetTime }: Props) {
  const timer = useRef<number>()
  const dialog = useRef<HTMLDialogElement | null>(null)

  const [timerStarted, setTimerStarted] = useState(false)
  const [timerExpired, setTimerExpired] = useState(false)

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true)
      console.log("timerExpired :", timerExpired)

      if (dialog.current) {
        dialog.current.showModal()
      }
    }, targetTime * 1000)

    setTimerStarted(true)
  }

  function handleStop() {
    clearTimeout(timer.current)
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running... Do you fill it?" : "Timer inactive"}
        </p>
      </section>
    </>
  )
}

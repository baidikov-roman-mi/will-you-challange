import { useState, useRef } from "react"

interface Props {
  title: string
  targetTime: number
}

const TimerChallenge = ({ title, targetTime }: Props) => {
  const timer = useRef<number>()

  const [timerStarted, setTimerStarted] = useState(false)
  const [timerExpired, setTimerExpired] = useState(false)

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000)

    setTimerStarted(true)
  }

  function handleStop() {
    clearTimeout(timer.current)
  }

  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p>{timerStarted ? "Time is runnind... Do you fill this?" : "Timer inactive"}</p>
      </section>
    </>
  )
}

export default TimerChallenge

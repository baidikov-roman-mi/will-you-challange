interface Props {
  title: string
  targetTime: number
}

const TimerChallenge = ({ title, targetTime }: Props) => {
  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button> Start Challenge</button>
        </p>
        <p>Time is runnind... Do you fill this?</p>
      </section>
    </>
  )
}

export default TimerChallenge

import Player from "./components/Player.tsx"
import TimerChallenge from "./components/TimerChallenge.tsx"

const challenges = [
  { title: "Eeezy", time: 1 },
  { title: "Competitive", time: 10 },
  { title: "Serious", time: 15 },
  { title: "Yes, I fill", time: 30 },
  { title: "Time God", time: 60 }
]

const App = () => {
  return (
    <>
      <Player />
      <div id="challenges">
        {challenges.map((challenge, index) => (
          <TimerChallenge
            key={index}
            title={challenge.title}
            targetTime={challenge.time}
          />
        ))}
      </div>
    </>
  )
}

export default App

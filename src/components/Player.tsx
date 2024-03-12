import { useState } from "react"

export default function Player() {
  const [playerName, setPlayerName] = useState("User")
  const [submitted, setSubmitted] = useState(false)

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setSubmitted(false)
    setPlayerName(event.target.value)
  }

  function handleClick() {
    if (playerName != "") {
      setSubmitted(true)
    }
  }

  return (
    <section id="player">
      <h2>Welcome, {submitted ? playerName : "User"} !</h2>
      <p>
        <input type="text" onChange={(event) => handleName(event)} value={playerName} />
        <button onClick={() => handleClick()}>Set Name</button>
      </p>
    </section>
  )
}

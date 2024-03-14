import { useState, useRef } from "react"

const Player = () => {
  const playerNameRef = useRef<HTMLInputElement>(null)

  const [playerName, setPlayerName] = useState<string | undefined>()

  function handleClick() {
    if (playerNameRef.current?.value.trim() !== "") {
      setPlayerName(playerNameRef.current?.value)
    }
  }

  return (
    <section id="player">
      <h2>Welcome, {playerName ?? "Unknown user"}!</h2>
      <p>
        <input type="text" ref={playerNameRef} />
        <button onClick={() => handleClick()}>Set Name</button>
      </p>
    </section>
  )
}

export default Player

import React, { useState } from "react";

function App() {
  const [roll, setRoll] = useState(null);

  const rollDice = async () => {
    const response = await fetch("https://twodice-backend.onrender.com"); // Calls Flask API
    const data = await response.json();
    setRoll(data.result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dice Roller 🎲</h1>
      <button onClick={rollDice} style={{ fontSize: "20px", padding: "10px" }}>
        Roll the Dice
      </button>
      {roll !== null && <h2>You rolled a {roll}!</h2>}
    </div>
  );
}

export default App;

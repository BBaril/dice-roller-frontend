import React, { useState } from "react";

function App() {
  const [roll, setRoll] = useState("");    // State dor dice symbols

  const rollDice = async () => {
   try {
    const response = await fetch("https://twodice-backend.onrender.com/roll"); // Calls Flask API
    const data = await response.json();
    setRoll(data.result);  // Store Unicode dice symbols
   } catch (error) {
    console.error("Error fetching dice roll:", error);
    }
  };

  return (
    <div>
      <h1>Dice Roller 🎲</h1>
      <button onClick={rollDice}>Roll Dice</button>
      <h2 style={{ fontSize: "100px" }}>{roll}</h2> {/* Display dice result */}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [luzPrendida, setluzPrendida] = useState(false)

  const handleClick = () => {
    setluzPrendida(!luzPrendida)
  }

  return (
    <div className={`${luzPrendida ? "luzPrendida" : "luzApagada"} container`}>
      <button onClick={handleClick}>
        {luzPrendida ? "Apagar la luz" : "Prender la luz"}</button>
    </div>
  )
};

export default App;

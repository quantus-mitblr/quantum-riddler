// src/pages/GamePage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import App from '../components/WordSearch/App';
import App2 from '../components/MemoryGame/App';
import App3 from '../components/ConnectionsGame/App';
import GameTimer from '../components/GameTimer';

function GamePage() {
  const [currentGame, setCurrentGame] = useState(1);
  const [totalTime, setTotalTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTime((prevTime) => prevTime + 1); // Increment time every second
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleGameComplete = () => {
    if (currentGame === 1) {
      setCurrentGame(2);  // Move to Memory Game
    } else if (currentGame === 2) {
      setCurrentGame(3);  // Move to Connections Game
    } else {
      navigate('/results', { state: { time: totalTime } });  // All games complete, show results
    }
  };

  return (
    <div>
      <GameTimer totalTime={totalTime} />  {/* Display the global timer */}
      {currentGame === 1 && <App onComplete={handleGameComplete} />}
      {currentGame === 2 && <App2 onComplete={handleGameComplete} />}
      {currentGame === 3 && <App3 onComplete={handleGameComplete} />}
    </div>
  );
}

export default GamePage;

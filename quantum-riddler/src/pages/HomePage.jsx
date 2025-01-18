// src/pages/HomePage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();  // useNavigate for routing

  const handleStartGame = () => {
    navigate('/game');  // Redirect to the game page
  };

  return (
    <div className="start-button-container">
      <button onClick={handleStartGame} className="start-button">
        Start Game
      </button>
    </div>
  );
}

export default HomePage;

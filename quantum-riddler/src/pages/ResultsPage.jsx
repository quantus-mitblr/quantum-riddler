// src/pages/ResultsPage.jsx

import React from 'react';
import { useLocation } from 'react-router-dom'; // to get the time from navigation

const ResultsPage = () => {
  const location = useLocation();
  const { time } = location.state || { time: 0 }; // Default time if not passed

  // Convert time to minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60); // Calculate minutes
    const secs = seconds % 60; // Calculate remaining seconds
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Format as mm:ss
  };

  return (
    <div className="results-page">
      <h1>Congratulations!</h1>
      <h2>You finished the game in {formatTime(time)}!</h2>
      <p>We have sent your completion time to the event organisers and they will be getting back in touch with you soon.
      Good luck!</p>
    </div>
  );
};

export default ResultsPage;

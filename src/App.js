import React, { useState } from "react";
import "./App.css";
import PhotoGallery from "./PhotoGallery";
import MemoryTimeline from "./MemoryTimeline";
import confetti from "canvas-confetti"; // Import the confetti library

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(true);
    launchConfetti(); // Call the confetti function on button click
  };

  // Function to launch the confetti
  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }, // Adjust the launch position
    });
  };

  return (
    <div className="App">
      {!showContent ? (
        <div className="intro">
          <p className="message">
            Hi, it's your birthday, click me to find out what your friend
            prepared for you!
          </p>
          <button onClick={handleClick} className="click-me-button">
            Click Me
          </button>
        </div>
      ) : (
        <div className="content">
          <PhotoGallery />
          <MemoryTimeline />
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useRef } from "react";
import "./App.css";
import MemoryTimeline from "./MemoryGallery.js";
import confetti from "canvas-confetti";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  const handleClick = () => {
    setShowContent(true);
    launchConfetti();
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const openCard = () => {
    setShowCard(true);
    if (audioRef.current) {
      audioRef.current.play(); // Play the song when the card is opened
    }
  };

  const closeCard = () => {
    setShowCard(false);
    if (audioRef.current) {
      audioRef.current.pause(); // Stop the song when the card is closed
      audioRef.current.currentTime = 0; // Reset the song to the beginning
    }
  };

  return (
    <div className="App">
      {!showContent ? (
        <div className="intro main-container">
          <p className="message">HAPPY BIRTHDAY!!</p>
          <p className="message">
            Đây sẽ là card sinh nhật của em trong năm nay nhé!! ❤️
          </p>
          <button onClick={handleClick} className="click-me-button">
            Click Me
          </button>
        </div>
      ) : (
        <div>
          <div className="main-container">
            <div className="birthday-card-container">
              {!showCard ? (
                <button onClick={openCard} className="open-card-button">
                  HAPPY BIRTHDAY NHƯ NHÉ !! ✉️
                </button>
              ) : (
                <div className="birthday-card birthday-card-container">
                  <p className="happy-birthday">HAPPY BIRTHDAY NHƯ 🥳</p>
                  <p className="birthday-wish">
                    Chúc mừng chị đã vượt qua ba năm tam tai và tới tuổi 24 tuổi
                    nhé! 🥳 Tuổi mới em chúc chị sẽ luôn vui vẻ nè, hạnh phúc
                    nè, và đạt được thật nhiều thành công nhé! Em mong là chị sẽ
                    được nhận vô trường chị muốn, làm chủ đề chị thích và sau
                    này sẽ thành công và giúp đỡ nhiều người khác! Nhưng mà em
                    tin là 1 người tài giỏi và nỗ lực như chị thì chị sẽ đạt
                    được điều chị mong muốn thui 😙
                  </p>
                  <p className="birthday-wish">
                    Lý do mà em làm 1 cái memory gallery là gì? Là tại khi em đi
                    tìm hình của mình là em ko có tấm nào luôn, mỗi năm lại càng
                    ít hình đi T^T Năm sau em tốt nghiệp rồi mà em cũng ko biết
                    là em đi đâu về đâu, nên em mong là mình có thể đi chơi và
                    chụp hình kỷ niệm với nhau nhiều hơn nhé. Làm sao lần sau
                    chọn hình là em có nhiều sự lựa chọn là được hihi 😉
                  </p>
                  <button onClick={closeCard} className="close-card-button">
                    Close
                  </button>
                </div>
              )}
            </div>
            <MemoryTimeline />
          </div>
        </div>
      )}
      {showCard && (
        <iframe
          className="hidden-video"
          src="https://www.youtube.com/embed/Wu8NeFXaoOc?autoplay=1&start=18"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default App;

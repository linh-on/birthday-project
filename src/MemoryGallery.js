import React, { useState } from "react";
import Heart from "react-animated-heart";

const MemoryTimeline = () => {
  const [isClick, setClick] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleHeartClick = (index) => {
    const updatedClicks = [...isClick];
    updatedClicks[index] = !updatedClicks[index];
    setClick(updatedClicks);
  };

  return (
    <div className="memory-timeline">
      <h2>Our Memory Gallery</h2>
      <ul>
        <li>
          <strong>First selfie</strong> <br />
          <img src="first-selfie.jpg" alt="Memory 1" />
          <Heart isClick={isClick[0]} onClick={() => handleHeartClick(0)} />
        </li>

        <li>
          <strong> Birthday</strong> <br />
          <img src="birthday.jpg" alt="Memory 4" />
          <Heart isClick={isClick[3]} onClick={() => handleHeartClick(3)} />
        </li>

        <li>
          <strong>Cooking</strong> <br />
          <img src="cooking.jpg" alt="Memory 6" />
          <Heart isClick={isClick[5]} onClick={() => handleHeartClick(5)} />
        </li>
        <li>
          <strong>Sleepover</strong> <br />
          <img src="sleepover.jpg" alt="Memory 6" />
          <Heart isClick={isClick[6]} onClick={() => handleHeartClick(6)} />
        </li>
        <li>
          <strong>Studying</strong> <br />
          <img src="studying.jpg" alt="Memory 6" />
          <Heart isClick={isClick[7]} onClick={() => handleHeartClick(7)} />
        </li>
        <li>
          <strong>Gyming</strong> <br />
          <img src="gym.jpg" alt="Memory 6" />
          <Heart isClick={isClick[8]} onClick={() => handleHeartClick(8)} />
        </li>

        <li>
          <strong>Hoypot and Netflix</strong> <br />
          <img src="hotpoting.jpg" alt="Memory 6" />
          <Heart isClick={isClick[9]} onClick={() => handleHeartClick(9)} />
        </li>

        <li>
          <strong>Graduation</strong> <br />
          <img src="graduation.jpg" alt="Memory 6" />
          <Heart isClick={isClick[10]} onClick={() => handleHeartClick(10)} />
        </li>

        <li>
          <strong>San Francisco Trip </strong> <br />
          <img src="san-francisco.jpg" alt="Memory 5" />
          <Heart isClick={isClick[4]} onClick={() => handleHeartClick(4)} />
        </li>
        <li>
          <strong>Las Vegas Trip</strong> <br />
          <img src="las-vegas.jpg" alt="Memory 2" />
          <Heart isClick={isClick[1]} onClick={() => handleHeartClick(1)} />
        </li>
        <li>
          <strong>San Jose Trip </strong>
          <br />
          <img src="san-jose.jpg" alt="Memory 3" />
          <Heart isClick={isClick[2]} onClick={() => handleHeartClick(2)} />
        </li>
      </ul>
    </div>
  );
};

export default MemoryTimeline;

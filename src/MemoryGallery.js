import React, { useState } from "react";
import Heart from "react-animated-heart";

const MemoryTimeline = () => {
  const [isClick, setClick] = useState(Array(14).fill(false));

  const handleHeartClick = (index) => {
    const updatedClicks = [...isClick];
    updatedClicks[index] = !updatedClicks[index];
    setClick(updatedClicks);
  };

  const memories = [
    { title: "Happy", imgSrc: "first-selfie.jpg" },
    { title: "Birthday", imgSrc: "birthday.jpg" },
    { title: "Như", imgSrc: "nhu.jpg" },
    { title: "Cooking", imgSrc: "cooking.jpg" },
    { title: "Sleepover", imgSrc: "sleepover.jpg" },
    { title: "Studying", imgSrc: "studying.jpg" },
    { title: "Hoypot and Netflix", imgSrc: "hotpoting.jpg" },
    { title: "Graduation", imgSrc: "graduation.jpg" },
    { title: "San Francisco", imgSrc: "san-francisco.jpg" },
    { title: "Las Vegas", imgSrc: "las-vegas.jpg" },
    { title: "San Jose", imgSrc: "san-jose.jpg" },
    { title: "Vũng Tàu", imgSrc: "vung-tau.jpg" },
  ];

  return (
    <div className="memory-timeline">
      <h2>
        Đây là gallery hình chúng ta mà em chắc chắn ko đc đăng lên insta 🥲
      </h2>
      <ul>
        {memories.map((memory, index) => (
          <li key={index}>
            <strong>{memory.title}</strong> <br />
            <img src={memory.imgSrc} alt={`Memory ${index + 1}`} />
            <Heart
              isClick={isClick[index]}
              onClick={() => handleHeartClick(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryTimeline;

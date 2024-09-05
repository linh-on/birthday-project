import React from "react";

const MemoryTimeline = () => {
  const memories = [
    { year: "2020", description: "First time we met" },
    { year: "2021", description: "Amazing birthday celebration" },
    { year: "2022", description: "Our trip to the mountains" },
    // Add more memories
  ];

  return (
    <div className="memory-timeline">
      <h2>Memory Timeline</h2>
      <ul>
        {memories.map((memory, index) => (
          <li key={index}>
            <strong>{memory.year}</strong>: {memory.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryTimeline;

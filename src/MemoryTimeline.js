import React from "react";

const MemoryTimeline = () => {
  return (
    <div className="memory-timeline">
      <h2>Memory Timeline</h2>
      <ul>
        <li>
          <strong>2020:</strong> First time we met <br />
          <img src="memory1.jpg" alt="Memory 1" />
        </li>
        <li>
          <strong>2021:</strong> Amazing birthday celebration <br />
          <img src="memory2.jpg" alt="Memory 2" />
        </li>
        <li>
          <strong>2022:</strong> Our trip to the mountains <br />
          <img src="memory3.jpg" alt="Memory 3" />
        </li>
      </ul>
    </div>
  );
};

export default MemoryTimeline;

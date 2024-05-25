import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount(count + 1);

    const coin = e.target;
    const rect = coin.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const maxTilt = 20; // Max tilt angle

    // Determine the distance from the center
    const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Calculate tilt angles
    const tiltX = (deltaY / centerY) * maxTilt;
    const tiltY = (deltaX / centerX) * maxTilt;

    if (distanceFromCenter < centerX * 0.3) {
      // Click is near the center
      coin.style.transform = "scale(0.99)";
    } else {
      // Click is on the edge
      coin.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }

    setTimeout(() => {
      coin.style.transform = "rotateX(0) rotateY(0) scale(1)";
    }, 100); // Return to original position after 0.1 seconds
  };

  return (
    <>
      <div
        className="coin"
        id="coin"
        style={{
          cursor: "pointer",
          width: "300px",
          height: "300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src="/bitcoin1.png"
          alt="coin"
          onClick={(e) => handleClick(e)}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <h1>Tele Game </h1>
      <div className="card">
        <button style={{ cursor: "auto" }}>count is {count}</button>
        <p>Click Coin to get coins</p>
      </div>
    </>
  );
}

export default App;

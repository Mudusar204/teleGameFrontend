import { useState, useEffect } from "react";
import "../App.css";
import { BoltIcon } from "@heroicons/react/24/outline";

function Tap() {
  const [totalCount, setTotalCount] = useState(500);
  const [count, setCount] = useState(totalCount);
  const [progress, setProgress] = useState(500);
  const maxProgress = 500; // Set the maximum value for the progress bar

  useEffect(() => {
    console.log("chala");
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < maxProgress) {
          //   setCount(count + 1);
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  const handleClick = (e) => {
    setCount(count - 1);

    // Decrease the progress by 1
    setProgress((prevProgress) => Math.max(prevProgress - 1, 0));

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
      <h1>Tele Game</h1>

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
      {/* <div className="card"> */}
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BoltIcon style={{ height: "20px", width: "20px" }} />{" "}
        <span style={{ fontSize: "20px" }}> {progress}</span> / {totalCount}
      </p>
      {/* <p>Click Coin to get coins</p> */}
      {/* </div> */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0df",
          borderRadius: "5px",
          overflow: "hidden",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            width: `${progress / 5}%`,
            height: "10px",
            backgroundColor: "yellow",
          }}
        />
      </div>
    </>
  );
}

export default Tap;

import {
  ArrowRightCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Boosters = ({ icon, name, coins, level, desc }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: 10,
          }}
        >
          <div>{icon}</div>
          <div>
            <h5 style={{ marginTop: 0, marginBottom: 0, textAlign: "start" }}>
              {name}
            </h5>
            <h6 style={{ marginTop: 0, marginBottom: 0, textAlign: "start" }}>
              {coins} <span style={{ color: "grey" }}> | level {level}</span>
            </h6>
          </div>
        </div>
        <p>
          <ChevronRightIcon style={{ height: 10, width: 10, color: "white" }} />
        </p>
      </div>
    </div>
  );
};

export default Boosters;

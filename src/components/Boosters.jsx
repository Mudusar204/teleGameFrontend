import {
  ArrowRightCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Boosters = ({
  icon,
  name,
  coins,
  level,
  desc,
  claimBtn,
  levelShow,
  progressBar,
  progressValue,
}) => {
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
              {coins}{" "}
              {levelShow && (
                <span style={{ color: "grey" }}> | level {level}</span>
              )}
            </h6>
          </div>
        </div>
        <p>
          {claimBtn ? (
            <button style={{ color: "grey" }}>Claim</button>
          ) : (
            <ChevronRightIcon
              style={{ height: 10, width: 10, color: "white" }}
            />
          )}
        </p>
      </div>
      {progressBar && (
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
              width: `${progressValue ? progressValue : 0}%`,
              height: "10px",
              backgroundColor: "yellow",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Boosters;

import React from "react";
import "./BoosterDetails.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

const BoosterDetails = ({ isVisible, onClose, booster }) => {
  return (
    <div className={`booster-details ${isVisible ? "visible" : "hidden"}`}>
      <div className="booster-content">
        <p
          style={{ cursor: "pointer", marginTop: 0, marginBottom: 0 }}
          onClick={onClose}
          className="close-button"
        >
          <XMarkIcon style={{ height: 30, width: 30, color: "white" }} />
        </p>
        <h2 style={{ marginTop: 0 }}>{booster.name}</h2>
        <p>{booster.desc}</p>
        <p>Level: {booster.level}</p>
        <p>Coins: {booster.coins}</p>
      </div>
    </div>
  );
};

export default BoosterDetails;

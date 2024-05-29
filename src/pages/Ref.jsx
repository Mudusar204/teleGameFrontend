import React from "react";
import Booster from "../components/Boosters";
const Ref = () => {
  return (
    <div>
      <h1>0 Referrals</h1>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: 0 }}>My Invite Link:</h3>
          <button style={{ backgroundColor: "yellow", color: "grey" }}>
            Copy
          </button>
        </div>
        <p style={{ textAlign: "start", marginTop: 0, marginBottom: 0 }}>
          http://localhost:3000/telegame
        </p>
      </div>
      <h3 style={{ textAlign: "start" }}>My Referrals:</h3>
      <Booster
        name={"Tayyab ali"}
        coins={200}
        progressBar={true}
        progressValue={20}
      />
    </div>
  );
};

export default Ref;

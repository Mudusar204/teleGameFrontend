import {
  BoltIcon,
  FireIcon,
  HandRaisedIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Boosters from "../components/Boosters";

const Boost = () => {
  const [boosters, setBoosters] = React.useState([
    {
      name: "Multitap",
      level: 1,
      coins: 200,
      desc: "Taps every 30 seconds",
      icon: (
        <HandRaisedIcon style={{ height: 30, width: 30, color: "white" }} />
      ),
    },
    {
      name: "Energy Limit",
      level: 1,
      coins: 500,
      desc: "Taps every 30 seconds",
      icon: <LightBulbIcon style={{ height: 30, width: 30, color: "white" }} />,
    },
    {
      name: "Recharging Speed",
      level: 1,
      coins: 10000,
      desc: "Taps every 30 seconds",
      icon: <BoltIcon style={{ height: 30, width: 30, color: "white" }} />,
    },
  ]);
  return (
    <div>
      <h4 style={{ color: "grey", marginBottom: 0 }}>Your Share Balance:</h4>
      <h1 style={{ marginTop: 0, marginBottom: 0 }}>300.33333 T</h1>
      <h3 style={{ textAlign: "start" }}>Your daily boosters:</h3>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            gap: 5,
            justifyContent: "start",
            alignItems: "center",
            border: "1px solid grey",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <FireIcon style={{ height: 25, width: 25, color: "white" }} />{" "}
          <div>
            <h5 style={{ marginTop: 0, marginBottom: 0 }}>Taping Guru</h5>
            <h6 style={{ marginTop: 0, marginBottom: 0, textAlign: "start" }}>
              3/3
            </h6>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            gap: 5,
            justifyContent: "start",
            alignItems: "center",
            border: "1px solid grey",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <BoltIcon style={{ height: 25, width: 25, color: "white" }} />{" "}
          <div>
            <h5 style={{ marginTop: 0, marginBottom: 0 }}>Full Tank</h5>
            <h6 style={{ marginTop: 0, marginBottom: 0, textAlign: "start" }}>
              3/3
            </h6>
          </div>
        </div>
      </div>
      <h3 style={{ textAlign: "start" }}>Boosters:</h3>
      <div style={{ overflowY: "scroll" }}>
        {boosters.map((booster, index) => (
          <Boosters
            key={index}
            name={booster.name}
            level={booster.level}
            coins={booster.coins}
            desc={booster.desc}
            icon={booster.icon}
            levelShow={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Boost;

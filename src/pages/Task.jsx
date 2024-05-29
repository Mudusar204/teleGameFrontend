import {
  ArrowRightIcon,
  BoltIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  FireIcon,
  HandRaisedIcon,
  LightBulbIcon,
  TrophyIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Boosters from "../components/Boosters";

const Task = () => {
  const [activeTab, setActiveTab] = React.useState("Special");
  const [specials, setSpecials] = React.useState([
    {
      name: "Connect Solana Wallet",
      level: 1,
      coins: 1000000,
      desc: "Taps every 30 seconds",
      icon: (
        <DocumentTextIcon style={{ height: 30, width: 30, color: "white" }} />
      ),
    },
    {
      name: "Subscribe To Crypto News cha",
      level: 1,
      coins: 3000000,
      desc: "Taps every 30 seconds",
      icon: (
        <DocumentTextIcon style={{ height: 30, width: 30, color: "white" }} />
      ),
    },
    {
      name: "Never Miss Key Insight!",
      level: 1,
      coins: 3000000,
      desc: "Taps every 30 seconds",
      icon: (
        <DocumentTextIcon style={{ height: 30, width: 30, color: "white" }} />
      ),
    },
    {
      name: "Join Our Socials",
      level: 1,
      coins: 3000000,
      desc: "Taps every 30 seconds",
      icon: (
        <DocumentTextIcon style={{ height: 30, width: 30, color: "white" }} />
      ),
    },
    {
      name: "Subscribe To Crypto News",
      level: 1,
      coins: 3000000,
      desc: "Taps every 30 seconds",
      icon: (
        <DocumentTextIcon style={{ height: 30, width: 30, color: "white" }} />
      ),
    },
  ]);
  const [leagues, setLeagues] = React.useState([
    {
      name: "Bronze",
      level: 1,
      coins: 1000,
      desc: "Taps every 30 seconds",
      icon: <TrophyIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 50,
    },
    {
      name: "Silver",
      level: 1,
      coins: 5000,
      desc: "Taps every 30 seconds",
      icon: <TrophyIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 10,
    },
    {
      name: "Gold",
      level: 1,
      coins: 10000,
      desc: "Taps every 30 seconds",
      icon: <TrophyIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Platinum",
      level: 1,
      coins: 30000,
      desc: "Taps every 30 seconds",
      icon: <TrophyIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Diamond",
      level: 1,
      coins: 50000,
      desc: "Taps every 30 seconds",
      icon: <TrophyIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Master",
      level: 1,
      coins: 100000,
      desc: "Taps every 30 seconds",
      icon: <TrophyIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "GrandMaster",
      level: 1,
      coins: 250000,
      desc: "Taps every 30 seconds",
      icon: <TrophyIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Elite",
      level: 1,
      coins: 500000,
      desc: "Taps every 30 seconds",
      icon: <TrophyIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Legendary",
      level: 1,
      coins: 1000000,
      desc: "Taps every 30 seconds",
      icon: <TrophyIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Mythic",
      level: 1,
      coins: 5000000,
      desc: "Taps every 30 seconds",
      icon: <TrophyIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
  ]);
  const [referrals, setReferral] = React.useState([
    {
      name: "Invite 3 Friends",
      level: 1,
      coins: 50000,
      desc: "Taps every 30 seconds",
      icon: <UserPlusIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 10,
    },
    {
      name: "Invite 10 Friends",
      level: 1,
      coins: 200000,
      desc: "Taps every 30 seconds",
      icon: <UserPlusIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 5,
    },
    {
      name: "Invite 25 Friends",
      level: 1,
      coins: 250000,
      desc: "Taps every 30 seconds",
      icon: <UserPlusIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Invite 50 Friends",
      level: 1,
      coins: 300000,
      desc: "Taps every 30 seconds",
      icon: <UserPlusIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Invite 100 Friends",
      level: 1,
      coins: 500000,
      desc: "Taps every 30 seconds",
      icon: <UserPlusIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Invite 500 Friends",
      level: 1,
      coins: 2000000,
      desc: "Taps every 30 seconds",
      icon: <UserPlusIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Invite 1000 Friends",
      level: 1,
      coins: 2500000,
      desc: "Taps every 30 seconds",
      icon: <UserPlusIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Invite 10000 Friends",
      level: 1,
      coins: 10000000,
      desc: "Taps every 30 seconds",
      icon: <UserPlusIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
    {
      name: "Invite 100000 Friends",
      level: 1,
      coins: 1000000000,
      desc: "Taps every 30 seconds",
      icon: <UserPlusIcon style={{ height: 30, width: 30, color: "white" }} />,
      progressValue: 0,
    },
  ]);
  const renderContent = () => {
    switch (activeTab) {
      case "Ref Tasks":
        return (
          <div>
            <div style={{ overflowY: "scroll" }}>
              {referrals.map((referral, index) => (
                <Boosters
                  key={index}
                  name={referral.name}
                  level={referral.level}
                  coins={referral.coins}
                  desc={referral.desc}
                  icon={referral.icon}
                  claimBtn={true}
                  progressBar={true}
                  progressValue={referral.progressValue}
                />
              ))}
            </div>
          </div>
        );
      case "Leagues":
        return (
          <div>
            <div style={{ overflowY: "scroll" }}>
              {leagues.map((league, index) => (
                <Boosters
                  key={index}
                  name={league.name}
                  level={league.level}
                  coins={league.coins}
                  desc={league.desc}
                  icon={league.icon}
                  claimBtn={true}
                  progressBar={true}
                  progressValue={league.progressValue}
                />
              ))}
            </div>
          </div>
        );
      case "Special":
        return (
          <div>
            <div style={{ overflowY: "scroll" }}>
              {specials.map((special, index) => (
                <Boosters
                  key={index}
                  name={special.name}
                  level={special.level}
                  coins={special.coins}
                  desc={special.desc}
                  icon={special.icon}
                />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 style={{ marginTop: 0, marginBottom: 0 }}>300.33333 T</h1>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <TrophyIcon style={{ height: 20, width: 20, color: "white" }} /> Bronze
        <ChevronRightIcon style={{ height: 20, width: 20, color: "white" }} />
      </h3>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
      >
        <button style={{ flex: 1 }} onClick={() => setActiveTab("Special")}>
          Special
        </button>
        <button style={{ flex: 1 }} onClick={() => setActiveTab("Leagues")}>
          Leagues
        </button>
        <button
          style={{ flex: 1, whiteSpace: "nowrap" }}
          onClick={() => setActiveTab("Ref Tasks")}
        >
          Ref Tasks
        </button>
      </div>
      <div style={{ maxHeight: "60vh", overflow: "scroll" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Task;

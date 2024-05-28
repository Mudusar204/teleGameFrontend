import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Tap from "./pages/Tap";
import Ref from "./pages/Ref";
import Boost from "./pages/Boost";
import Stats from "./pages/Stats";
import Task from "./pages/Task";
import {
  FireIcon,
  ChartBarIcon,
  CircleStackIcon,
  UserPlusIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Ref",
      icon: <UserPlusIcon style={{ height: 30, width: 30, color: "white" }} />,
      path: "/ref",
    },
    {
      name: "Task",
      icon: (
        <CheckCircleIcon style={{ height: 30, width: 30, color: "white" }} />
      ),
      path: "/task",
    },
    {
      name: "Tap",
      icon: (
        <CircleStackIcon style={{ height: 30, width: 30, color: "white" }} />
      ),
      path: "/",
    },
    {
      name: "Boost",
      icon: <FireIcon style={{ height: 30, width: 30, color: "white" }} />,
      path: "/boost",
    },
    {
      name: "Stats",
      icon: <ChartBarIcon style={{ height: 30, width: 30, color: "white" }} />,
      path: "/stats",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {navItems.map((item) => (
        <div
          key={item.name}
          onClick={() => navigate(item.path)}
          style={{
            height: "60px",
            width: "40px",
            border:
              location.pathname === item.path
                ? "2px solid yellow"
                : "1px solid grey",
            padding: "5px",
            paddingRight: "10px",
            paddingLeft: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {item.icon}
          <p style={{ marginTop: 0, color: "white" }}>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "red",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Routes>
          <Route path="/" element={<Tap />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/boost" element={<Boost />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/task" element={<Task />} />
        </Routes>
        <NavBar />
      </div>
    </BrowserRouter>
  );
};

export default App;

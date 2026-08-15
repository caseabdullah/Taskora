import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Top from "../components/layout/Top";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [username, setusername] = useState();
  const [task, settask] = useState([]);
  const [stats, setstats] = useState({});
  const [sidebarOpen, setsidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setsidebarOpen={setsidebarOpen}
      />

      <div className="ml-0 lg:ml-64">

        <Top
          username={username}
          setsidebarOpen={setsidebarOpen}
        />

        <Outlet
          context={{
            setusername,
            task,
            settask,
            stats,
            setstats,
          }}
        />

      </div>

    </div>
  );
};

export default Layout;
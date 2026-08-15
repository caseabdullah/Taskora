import React from "react";
import {
  Astroid,
  LayoutGrid,
  Clock3,
  CheckCircle,
  X,
  CirclePlus,
} from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setsidebarOpen }) => {
  const navItems = [
    {
      to: "/dashboard",
      Label: "Dashboard",
      icon: LayoutGrid,
      end: true,
    },
    {
      to: "/dashboard/pending",
      Label: "Pending",
      icon: Clock3,
    },
    {
      to: "/dashboard/completed",
      Label: "Completed",
      icon: CheckCircle,
    },
  ];

  return (
    <>
      {/* Mobile/Tablet overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setsidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-64
          p-5
          border-r
          border-[#27272A]
          bg-[#0a0a0a]
          transition-transform
          duration-300
          ease-in-out

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >
        {/* Logo + close button */}
        <div className="flex items-center justify-between">

          <div className="logo flex gap-3 text-3xl text-white font-black py-3 items-center">
            <Astroid
              size={30}
              strokeWidth={3}
              color="#E0FF22"
            />
            Taskora
          </div>

          {/* Close button - mobile/tablet only */}
          <button
            onClick={() => setsidebarOpen(false)}
            className="
              lg:hidden
              p-2
              rounded-lg
              text-gray-400
              hover:text-white
              hover:bg-white/5
              transition
              cursor-pointer
            "
          >
            <X size={22} />
          </button>

        </div>

        {/* Navigation */}
        <div className="h-[80vh] mt-2 py-3 bg-[#18181B] rounded-2xl">

          <nav className="flex flex-col gap-3 px-3">

            {navItems.map(
              ({ to, Label, icon: Icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setsidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3
                    px-3 py-2.5
                    rounded-lg
                    text-lg
                    font-medium
                    transition-colors
                    ${
                      isActive
                        ? "bg-white/5 text-[#E0FF22]"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  <Icon size={20} />
                  {Label}
                </NavLink>
              )
            )}

            {/* Create Task - mobile/tablet */}
            <Link
              to="/dashboard/createTask"
              onClick={() => setsidebarOpen(false)}
              className="
                lg:hidden
                mt-2
                flex
                items-center
                gap-3
                px-3
                py-2.5
                rounded-lg
                text-lg
                font-medium
                bg-[#E0FF22]
                text-black
                hover:bg-[#E0FF22]/90
                transition
              "
            >
              <CirclePlus size={20} />
              Create Task
            </Link>

          </nav>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
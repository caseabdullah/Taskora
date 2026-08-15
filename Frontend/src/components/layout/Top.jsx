import React from "react";
import { CirclePlus, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Top = ({ username, setsidebarOpen }) => {
  const date = new Date();
  const hour = date.getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const today = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="py-5 px-4 sm:px-6 lg:px-7">

      {/* Left side - Greeting */}
      <div className="flex items-center gap-3">

        {/* Mobile Menu */}
        <button
          onClick={() => setsidebarOpen(true)}
          className="
            lg:hidden
            flex items-center justify-center
            p-2
            rounded-lg
            text-gray-300
            hover:bg-white/5
            hover:text-white
            cursor-pointer
          "
        >
          <Menu size={24} />
        </button>

        {/* Greeting */}
        <div className="flex flex-col gap-1 sm:gap-2">

          <h1
            className="
              text-[#E0FF22]
              font-black
              text-xl
              sm:text-4xl
              lg:text-3xl
            "
          >
            {greeting}, {username}
          </h1>

          <h1
            className="
              text-sm
              sm:text-base
              lg:text-lg
              text-[#A1A1AA]
              font-semibold
            "
          >
            {today}
          </h1>

        </div>

      </div>

      {/* Desktop Create Task Button */}
      <Link
        to="createTask"
        className="
          hidden
          lg:flex
          items-center
          justify-center
          gap-2
          w-fit
          px-5
          py-2.5
          rounded-4xl
          text-[15px]
          font-[620]
          bg-[#E0FF22]
          hover:bg-[#E0FF22]/90
          active:scale-90
          transition
          ml-auto
          -mt-12
        "
      >
        <CirclePlus size={18} />
        <span>Create New Task</span>
      </Link>

    </div>
  );
};

export default Top;
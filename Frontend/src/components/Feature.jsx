import React from 'react'
import {
  SquarePlus,
  SquarePen,
  Trash,
  Flag,
  CalendarClock,
  LayoutDashboard,
} from "lucide-react";

const Feature = () => {
  return (
    <div
      className="min-h-screen border border-b-[#1F1F1F] flex flex-col gap-8 sm:gap-10 px-5 sm:px-8 lg:px-10 py-7"
      id="features"
    >
      {/* Heading */}
      <div className="flex flex-col gap-3">
        <h1 className="text-[#E0FF22] uppercase text-lg sm:text-xl lg:text-2xl font-bold tracking-widest">
          Features
        </h1>

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-tight">
          Everything You Need to Stay Productive
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-6">

        {/* Create Tasks */}
        <div className="w-full sm:w-[47%] lg:w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#e0ff22] rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
          <div className="p-3 bg-[#E0FF22]/20 w-fit rounded-lg">
            <SquarePlus className="text-[#E0FF22]" size={22} />
          </div>

          <h1 className="text-xl text-white font-bold">Create Tasks</h1>

          <p className="text-[#8E8E93] leading-relaxed">
            Add new tasks in just a few clicks with a title, description,
            priority, and due date.
          </p>
        </div>

        {/* Edit Tasks */}
        <div className="w-full sm:w-[47%] lg:w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#e0ff22] rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
          <div className="p-3 bg-[#E0FF22]/20 w-fit rounded-lg">
            <SquarePen className="text-[#E0FF22]" size={22} />
          </div>

          <h1 className="text-xl text-white font-bold">Edit Tasks</h1>

          <p className="text-[#8E8E93] leading-relaxed">
            Update your tasks anytime to keep your plans accurate and
            organized.
          </p>
        </div>

        {/* Delete Tasks */}
        <div className="w-full sm:w-[47%] lg:w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#e0ff22] rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
          <div className="p-3 bg-[#E0FF22]/20 w-fit rounded-lg">
            <Trash className="text-[#E0FF22]" size={22} />
          </div>

          <h1 className="text-xl text-white font-semibold">Delete Tasks</h1>

          <p className="text-[#8E8E93] leading-relaxed">
            Remove completed or unwanted tasks to keep your workspace clean.
          </p>
        </div>

        {/* Priority */}
        <div className="w-full sm:w-[47%] lg:w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#e0ff22] rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
          <div className="p-3 bg-[#E0FF22]/20 w-fit rounded-lg">
            <Flag className="text-[#E0FF22]" size={22} />
          </div>

          <h1 className="text-xl text-white font-semibold">Priority Levels</h1>

          <p className="text-[#8E8E93] leading-relaxed">
            Mark tasks as High, Medium, or Low priority so you always know
            what to focus on.
          </p>
        </div>

        {/* Due Dates */}
        <div className="w-full sm:w-[47%] lg:w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#e0ff22] rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
          <div className="p-3 bg-[#E0FF22]/20 w-fit rounded-lg">
            <CalendarClock className="text-[#E0FF22]" size={22} />
          </div>

          <h1 className="text-xl text-white font-semibold">Due Dates</h1>

          <p className="text-[#8E8E93] leading-relaxed">
            Schedule deadlines and stay ahead of upcoming tasks without
            missing important dates.
          </p>
        </div>

        {/* Dashboard */}
        <div className="w-full sm:w-[47%] lg:w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#e0ff22] rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
          <div className="p-3 bg-[#E0FF22]/20 w-fit rounded-lg">
            <LayoutDashboard className="text-[#E0FF22]" size={22} />
          </div>

          <h1 className="text-xl text-white font-semibold">
            Dashboard Overview
          </h1>

          <p className="text-[#8E8E93] leading-relaxed">
            View your completed, pending, and upcoming tasks from one
            organized dashboard.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Feature
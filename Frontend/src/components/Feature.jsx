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
    <div className='h-screen border border-b-[#1F1F1F] flex flex-col gap-10 px-10 py-7' id='features'>
        <div className="flex flex-col gap-3">
            <h1 className='text-[#E0FF22] uppercase text-2xl font-bold tracking-widest'>Features</h1>
            <h1 className='text-white text-5xl font-black'>Everything You Need to Stay Productive</h1>
        </div>

        <div className="flex flex-wrap items-center  justify-center gap-5">

        <div className="w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-250 shadow-[0_0_2px_#e0ff22] rounded-2xl p-6 flex flex-col gap-3">
            <div className='p-3 bg-[#E0FF22]/20 w-fit rounded-lg'>
                <SquarePlus className="text-[#E0FF22]" size={22} />
            </div>
            <h1 className="text-xl text-white font-bold">Create Tasks</h1>
            <p className="text-[#8E8E93]">
            Add new tasks in just a few clicks with a title, description, priority, and due date.
            </p>
        </div>

        <div className="w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-250 shadow-[0_0_2px_#e0ff22] rounded-2xl p-6 flex flex-col gap-3">
            <div className='p-3 bg-[#E0FF22]/20 w-fit rounded-lg'>
                <SquarePen className="text-[#E0FF22]" size={22} />
            </div>
            <h1 className="text-xl text-white font-bold">Edit Tasks</h1>
            <p className="text-[#8E8E93]">
            Update your tasks anytime to keep your plans accurate and organized.
            </p>
        </div>

        <div className="w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-250 shadow-[0_0_2px_#e0ff22] rounded-2xl p-6 flex flex-col gap-3">
            <div className='p-3 bg-[#E0FF22]/20 w-fit rounded-lg'>
                <Trash className="text-[#E0FF22]" size={22} />
            </div>
            <h1 className="text-xl text-white font-semibold">Delete Tasks</h1>
            <p className="text-[#8E8E93]">
            Remove completed or unwanted tasks to keep your workspace clean.
            </p>
        </div>

        <div className="w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-250 shadow-[0_0_2px_#e0ff22] rounded-2xl p-6 flex flex-col gap-3">
            <div className='p-3 bg-[#E0FF22]/20 w-fit rounded-lg'>
                <Flag className="text-[#E0FF22]" size={22} />
            </div>
            <h1 className="text-xl text-white font-semibold">Priority Levels</h1>
            <p className="text-[#8E8E93]">
            Mark tasks as High, Medium, or Low priority so you always know what to focus on.
            </p>
        </div>

        <div className="w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-250 shadow-[0_0_2px_#e0ff22] rounded-2xl p-6 flex flex-col gap-3">
            <div className='p-3 bg-[#E0FF22]/20 w-fit rounded-lg'>
                <CalendarClock className="text-[#E0FF22]" size={22} />
            </div>
            <h1 className="text-xl text-white font-semibold">Due Dates</h1>
            <p className="text-[#8E8E93]">
            Schedule deadlines and stay ahead of upcoming tasks without missing important dates.
            </p>
        </div>

        <div className="w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-250 shadow-[0_0_2px_#e0ff22] rounded-2xl p-6 flex flex-col gap-3">
            <div className='p-3 bg-[#E0FF22]/20 w-fit rounded-lg'>
                <LayoutDashboard className="text-[#E0FF22]" size={22} />
            </div>
            <h1 className="text-xl text-white font-semibold">Dashboard Overview</h1>
            <p className="text-[#8E8E93]">
            View your completed, pending, and upcoming tasks from one organized dashboard.
            </p>
        </div>

        </div>
    </div>
  )
}

export default Feature
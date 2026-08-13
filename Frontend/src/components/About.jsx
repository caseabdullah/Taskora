import React from 'react'
import {
  Sparkles,
  Spotlight,
  Zap,
} from "lucide-react";

const About = () => {
  return (
    <div className='h-screen border border-b-[#1F1F1F] flex flex-col gap-10 px-10 py-7' id='about'>
        <div className="flex flex-col gap-5">
            <h1 className='text-[#E0FF22] uppercase text-2xl font-bold tracking-widest'>About Us</h1>
            <h1 className='text-white text-5xl font-black'>Simplify Your Workflow, Achieve More</h1>
            <p  className='text-[#8E8E93] pt-3 font-medium text-lg'>
                Taskora is a modern task management platform designed to help you organize
                your daily activities, manage deadlines, and stay focused on what matters
                most. With an intuitive dashboard, priority management, and smart task
                organization, Taskora makes productivity simple and efficient.
                Built with simplicity and efficiency in mind, Taskora gives you a clear view
                of your tasks, helping you plan your day, track progress, and complete your
                goals with confidence. Whether you are managing personal tasks, academic
                work, or team projects, Taskora provides the tools you need to stay organized
                and productive.
            </p>
        </div>
        <div className='flex flex-wrap items-center  justify-center gap-5'>
            <div className="w-[32%] h-60 bg-[#121212] hover:bg-[#181818] transition-colors duration-250 shadow-[0_0_2px_#e0ff22] rounded-2xl p-6 flex flex-col gap-3">
                <div className='p-3 bg-[#E0FF22]/20 w-fit rounded-lg'>
                    <Sparkles className="text-[#E0FF22]" size={22} />
                </div>
                <h1 className="text-xl text-white  font-bold">Simplicity</h1>
                <p className="text-[#8E8E93]">
                Taskora keeps task management simple with a clean interface that helps you create, organize, and complete tasks without unnecessary distractions.
                </p>
            </div>

            <div className="w-[32%] h-60 bg-[#121212] hover:bg-[#181818] transition-colors duration-250 shadow-[0_0_2px_#e0ff22] rounded-2xl p-6 flex flex-col gap-3">
                <div className='p-3 bg-[#E0FF22]/20 w-fit rounded-lg'>
                    <Spotlight className="text-[#E0FF22]" size={22} />
                </div>
                <h1 className="text-xl text-white font-bold">Focus</h1>
                <p className="text-[#8E8E93]">
               Prioritize important tasks, track deadlines, and stay focused on your goals with a workflow designed for better productivity.
                </p>
            </div>

            <div className="w-[32%] h-60 bg-[#121212] hover:bg-[#181818] transition-colors duration-250 shadow-[0_0_2px_#e0ff22] rounded-2xl p-6 flex flex-col gap-3">
                <div className='p-3 bg-[#E0FF22]/20 w-fit rounded-lg'>
                <Zap className="text-[#E0FF22]" size={22} />
                </div>
                <h1 className="text-xl text-white font-semibold">Efficiency</h1>
                <p className="text-[#8E8E93]">
                With powerful organization tools and a clear dashboard, Taskora helps you plan better, reduce clutter, and get more done in less time.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
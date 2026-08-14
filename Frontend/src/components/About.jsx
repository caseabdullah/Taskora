import React from 'react'
import {
  Sparkles,
  Spotlight,
  Zap,
} from "lucide-react";

const About = () => {
  return (
    <div
      className="min-h-fit lg:min-h-screen border border-b-[#1F1F1F] flex flex-col gap-8 sm:gap-10 px-5 sm:px-8 lg:px-10 py-8 lg:py-7"
      id="about"
    >

      {/* Heading + Description */}
      <div className="flex flex-col gap-4 sm:gap-5">

        <h1 className="text-[#E0FF22] uppercase text-lg sm:text-xl lg:text-2xl font-bold tracking-widest">
          About Us
        </h1>

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-tight">
          Simplify Your Workflow, Achieve More
        </h1>

        <p className="text-[#8E8E93] pt-2 font-medium text-base sm:text-lg md:text-lg lg:text-lg leading-7 sm:leading-8 max-w-5xl">
          Taskora is a modern task management platform designed to help you
          organize your daily activities, manage deadlines, and stay focused
          on what matters most. With an intuitive dashboard, priority
          management, and smart task organization, Taskora makes productivity
          simple and efficient.
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          Built with simplicity and efficiency in mind, Taskora gives you a
          clear view of your tasks, helping you plan your day, track progress,
          and complete your goals with confidence. Whether you are managing
          personal tasks, academic work, or team projects, Taskora provides
          the tools you need to stay organized and productive.
        </p>

      </div>

      {/* Cards */}
      <div className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-6">

        {/* Simplicity */}
        <div className="w-full sm:w-[47%] lg:w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#e0ff22] rounded-2xl p-5 sm:p-6 flex flex-col gap-3">

          <div className="p-3 bg-[#E0FF22]/20 w-fit rounded-lg">
            <Sparkles className="text-[#E0FF22]" size={22} />
          </div>

          <h1 className="text-xl text-white font-bold">
            Simplicity
          </h1>

          <p className="text-[#8E8E93] leading-7">
            Taskora keeps task management simple with a clean interface that
            helps you create, organize, and complete tasks without unnecessary
            distractions.
          </p>

        </div>

        {/* Focus */}
        <div className="w-full sm:w-[47%] lg:w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#e0ff22] rounded-2xl p-5 sm:p-6 flex flex-col gap-3">

          <div className="p-3 bg-[#E0FF22]/20 w-fit rounded-lg">
            <Spotlight className="text-[#E0FF22]" size={22} />
          </div>

          <h1 className="text-xl text-white font-bold">
            Focus
          </h1>

          <p className="text-[#8E8E93] leading-7">
            Prioritize important tasks, track deadlines, and stay focused on
            your goals with a workflow designed for better productivity.
          </p>

        </div>

        {/* Efficiency */}
        <div className="w-full sm:w-[47%] lg:w-[32%] bg-[#121212] hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#e0ff22] rounded-2xl p-5 sm:p-6 flex flex-col gap-3">

          <div className="p-3 bg-[#E0FF22]/20 w-fit rounded-lg">
            <Zap className="text-[#E0FF22]" size={22} />
          </div>

          <h1 className="text-xl text-white font-semibold">
            Efficiency
          </h1>

          <p className="text-[#8E8E93] leading-7">
            With powerful organization tools and a clear dashboard, Taskora
            helps you plan better, reduce clutter, and get more done in less
            time.
          </p>

        </div>

      </div>

    </div>
  )
}

export default About
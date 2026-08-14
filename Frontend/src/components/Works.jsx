import React from "react";
import {
  SquarePlus,
  Star,
  CalendarCheck,
  CircleCheck,
} from "lucide-react";

const Works = () => {

  const steps = [
    {
      icon: SquarePlus,
      title: "Create Your Tasks",
      description:
        "Create tasks with titles, descriptions, priorities, and due dates to keep everything organized."
    },
    {
      icon: Star,
      title: "Organize & Prioritize",
      description:
        "Set priorities and focus on important tasks that need your attention first."
    },
    {
      icon: CalendarCheck,
      title: "Track Your Progress",
      description:
        "Monitor deadlines, pending tasks, and completed work through your dashboard."
    },
    {
      icon: CircleCheck,
      title: "Complete Your Goals",
      description:
        "Finish your tasks and build a more productive daily workflow."
    }
  ];

  return (
    <section
      className="px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20 flex flex-col gap-8 sm:gap-10 lg:gap-15"
      id="how-it-works"
    >

      {/* Heading */}
      <div className="flex flex-col gap-3 sm:gap-5">

        <h1 className="text-[#E0FF22] uppercase text-lg sm:text-xl lg:text-2xl font-bold tracking-widest">
          How It Works
        </h1>

        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-tight">
          Manage Your Tasks in Just a Few Simple Steps
        </h2>

      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (
            <div
              key={index}
              className="bg-[#121212] rounded-2xl p-5 sm:p-6 flex flex-col gap-4 hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#E0FF22]"
            >

              {/* Number */}
              <span className="text-[#E0FF22] text-xl sm:text-2xl font-bold">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#E0FF22]/20 rounded-lg flex items-center justify-center">
                <Icon
                  className="text-[#E0FF22]"
                  size={22}
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-lg sm:text-xl font-bold leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#8E8E93] text-sm sm:text-base leading-7">
                {step.description}
              </p>

            </div>
          );

        })}

      </div>

    </section>
  );
};

export default Works;
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
    <section className="px-10 py-20 flex flex-col gap-15" id='how-it-works'>

      <div className="flex flex-col gap-5">
        <h1 className="text-[#E0FF22] uppercase text-2xl font-bold tracking-widest">
          How It Works
        </h1>

        <h2 className='text-white text-5xl font-black'>
          Manage Your Tasks in Just a Few Simple Steps
        </h2>
      </div>


      <div className="flex flex-wrap justify-between gap-8">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (
            <div
              key={index}
              className="w-full md:w-[22%] bg-[#121212] rounded-2xl p-6 flex flex-col gap-4 hover:bg-[#181818] transition-colors duration-300 shadow-[0_0_2px_#E0FF22]"
            >

              <span className="text-[#E0FF22] text-2xl font-bold">
                0{index + 1}
              </span>


              <div className="w-12 h-12 bg-[#E0FF22]/20 rounded-lg flex items-center justify-center">
                <Icon
                  className="text-[#E0FF22]"
                  size={24}
                />
              </div>


              <h3 className="text-white text-xl font-bold">
                {step.title}
              </h3>


              <p className="text-[#8E8E93]">
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
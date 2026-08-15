import React, { useRef, useState } from "react";
import { X, CalendarDays, Check } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { useNavigate, useOutletContext } from "react-router-dom";
import api from "../api/axios";
import Loader from "../components/layout/Loader";

const Createtask = () => {
  const navigate = useNavigate();
  const { settask, setstats } = useOutletContext();

  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const [priority, setpriority] = useState("Low");
  const [date, setDate] = useState(new Date());

  const description = useRef();

  const create_task = async (e) => {
    e.preventDefault();
    setloading(true);

    const data = {
      description: description.current.value,
      status: "Pending",
      priority: priority,
      dueDate: date,
    };

    try {
      const response = await api.post("/dashboard/createTask", data);

      settask(response.data.tasks);
      setstats(response.data.stats);

      navigate(-1);
    } catch (err) {
      console.log(err.response?.data);
      setloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">

      <div className="relative register bg-[#121212] w-full max-w-130 rounded-3xl shadow-2xl px-5 sm:px-10 pt-6 pb-10">

        {/* Loader */}
        {loading && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <Loader />
          </div>
        )}

        {/* Header */}
        <div>
          <div className="flex justify-between items-center">

            <h1 className="top text-2xl sm:text-3xl font-bold text-white">
              Create New Task
            </h1>

            <div
              onClick={() => navigate(-1)}
              className="bg-[#18181B] hover:bg-[#131313] transition border-2 border-[#222222] cursor-pointer duration-300 sm:ml-1 p-2 sm:p-1 rounded-xl inline-flex"
            >
              <X
              color="#8E8E93"
               className="w-5 h-5 sm:w-6.25 sm:h-6.25"/>
            </div>

          </div>

          <p className="text-base sm:text-lg font-medium text-gray-400">
            Add details to structure your workspace task.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={create_task}
          className="mt-5 flex flex-col gap-5"
        >

          {/* Description */}
          <div className="flex flex-col gap-2">

            <label className="font-medium text-[#8E8E93]">
              Task Description
            </label>

            <textarea
              required
              ref={description}
              placeholder="Enter task description..."
              className="
                min-h-10
                max-h-35
                text-white
                resize-none
                field-sizing-content
                border-2
                caret-white
                placeholder:text-gray-400
                bg-[#1A1A1A]
                border-[#2D2D2D]
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-[#E0FF22]
                transition-colors
                duration-300
              "
            />

          </div>

          {/* Priority */}
          <div className="flex flex-col gap-2">

            <label className="font-medium text-[#8E8E93]">
              Priority
            </label>

            <div className="flex flex-wrap gap-3">

              {/* Low */}
              <button
                type="button"
                onClick={() => setpriority("Low")}
                className={`
                  cursor-pointer
                  flex-1
                  py-2
                  text-base sm:text-lg
                  border-2
                  rounded-xl
                  transition-colors
                  ${
                    priority === "Low"
                      ? "text-[#22C55E] bg-[#22C55E]/10 border-[#22C55E] font-bold"
                      : "text-white bg-[#1A1A1A] border-[#2D2D2D]"
                  }
                `}
              >
                Low
              </button>

              {/* Medium */}
              <button
                type="button"
                onClick={() => setpriority("Medium")}
                className={`
                  cursor-pointer
                  flex-1
                  py-2
                  text-base sm:text-lg
                  border-2
                  rounded-xl
                  transition-colors
                  ${
                    priority === "Medium"
                      ? "text-yellow-400 bg-yellow-400/10 border-yellow-400 font-bold"
                      : "text-white bg-[#1A1A1A] border-[#2D2D2D]"
                  }
                `}
              >
                Medium
              </button>

              {/* High */}
              <button
                type="button"
                onClick={() => setpriority("High")}
                className={`
                  cursor-pointer
                  flex-1
                  py-2
                  text-base sm:text-lg
                  border-2
                  rounded-xl
                  transition-colors
                  ${
                    priority === "High"
                      ? "text-red-400 bg-red-400/10 border-red-400 font-bold"
                      : "text-white bg-[#1A1A1A] border-[#2D2D2D]"
                  }
                `}
              >
                High
              </button>

            </div>
          </div>

          {/* Due Date */}
          <div className="flex flex-col gap-2">

            <label className="font-medium text-[#8E8E93]">
              Due Date
            </label>

            <div className="relative">

              {/* Date Input */}
              <input
                type="text"
                readOnly
                value={date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                onClick={() => setopen(!open)}
                className="
                  w-full
                  border-2
                  caret-white
                  text-white
                  bg-[#1A1A1A]
                  border-[#2D2D2D]
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-[#E0FF22]
                  transition-colors
                  duration-300
                  cursor-pointer
                "
              />

              {/* Calendar Icon */}
              <CalendarDays
                color="#E0FF22"
                className="
                  absolute
                  top-3
                  right-3
                  cursor-pointer
                "
                onClick={() => setopen(!open)}
              />

              {/* Calendar */}
              {open && (
                <div
                  className="
                    absolute
                    z-50

                    /* Open ABOVE input */
                    bottom-full
                    mb-2

                    /* Mobile: centered */
                    left-1/2
                    -translate-x-1/2

                    /* Calendar styling */
                    bg-[#111111]
                    border-2
                    border-[#2D2D2D]
                    rounded-xl
                    p-3
                    shadow-2xl

                    /* Desktop: align right */
                    sm:left-auto
                    sm:right-0
                    sm:translate-x-0
                  "
                >
                  <DayPicker
                    className="taskora-calendar"
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                      if (selectedDate) {
                        setDate(selectedDate);
                        setopen(false);
                      }
                    }}
                    disabled={{
                      before: new Date(),
                    }}
                  />
                </div>
              )}

            </div>
          </div>

          {/* Create Button */}
          <button
            type="submit"
            className="
              active:scale-95
              flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[#E0FF22]
              py-3
              text-black
              font-[650]
              text-lg sm:text-xl
              hover:opacity-90
              transition-opacity
              duration-300
              cursor-pointer
            "
          >
            <Check size={23} strokeWidth={3} />
            Create Task
          </button>

        </form>
      </div>
    </div>
  );
};

export default Createtask;
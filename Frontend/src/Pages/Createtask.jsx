import React, { useRef, useState } from "react";
import { ShieldAlert,X,CalendarDays,Check } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { Link, useNavigate } from "react-router-dom"; 
import api from "../api/axios";
import { useOutletContext } from "react-router-dom";
import Loader from "../components/layout/Loader";


const Createtask = () => {


    const navigate=useNavigate();
    const { settask, setstats } = useOutletContext();
    const [loading, setloading] = useState(false)

    const [open, setopen] = useState(false)

    const [priority, setpriority] = useState("Low");
    const [date, setDate] = useState(new Date());
    const description=useRef();

    const create_task =async(e)=>{

      e.preventDefault();
      setloading(true)

      const data={
        description:description.current.value,
        status:"Pending",
        priority:priority,
        dueDate:date
      }

      try{
        const response=await api.post("/dashboard/createTask",data);
        console.log(response.data.tasks);
        settask(response.data.tasks)
        setstats(response.data.stats)
        console.log(response.data.stats);
        navigate(-1);
      }
      catch(err){
        console.log(err.response.data)
      }

    }

  return (
    <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative register bg-[#121212] w-130 rounded-3xl shadow-2xl px-10 pt-6 pb-10">
        {loading && (
              <div className="fixed inset-0 rounded-3xl z-50 flex items-center justify-center  bg-black/30 backdrop-blur-sm">
                <Loader />
              </div>
                )}
        <div>
        <div className="flex justify-between items-center flex-row">
          <h1 className="top text-3xl font-bold text-white">Create New Task</h1>
          <div
            onClick={()=>{
            navigate(-1)
            }}
            className="bg-[#18181B] hover:bg-[#131313]  transition border-2 border-[#222222] cursor-pointer duration-300 p-2 rounded-xl inline-flex">
              <X size={25} color="#8E8E93"/>
          </div>
        </div>

          <p className="text-lg font-medium text-gray-400">
            Add details to structure your workspace task.
          </p>
        </div>

        <form 
        onSubmit={(e)=>{
          create_task(e);
        }}
        className="mt-5 flex flex-col gap-5">

          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#8E8E93]">
              Task Description
            </label>

            <textarea
            required
            ref={description}
              placeholder="Enter task description..."
              className="min-h-10 max-h-35 text-white resize-none field-sizing-content border-2 caret-white placeholder:text-gray-400 bg-[#1A1A1A] border-[#2D2D2D]  rounded-xl px-4 py-3 outline-none focus:border-[#E0FF22] transition-colors duration-300"
            />
          </div>


          <div className="flex flex-col gap-2">
            <label className="font-medium text-[#8E8E93]">
              Priority
            </label>
            <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setpriority("Low")}
              className={`cursor-pointer flex-1 py-2 text-lg  border-2 rounded-xl transition-colors ${
                priority === "Low"
                  ? "text-[#22C55E] bg-[#22C55E]/10 border-[#22C55E] font-bold"                 
                  : "text-white bg-[#1A1A1A] border-[#2D2D2D]"
              }`}
            >
              Low
            </button>
          
            <button
              type="button"
              onClick={() => setpriority("Medium")}
              className={`cursor-pointer flex-1 py-2 text-lg  border-2 rounded-xl transition-colors ${
                priority === "Medium"
                  ? "text-yellow-400 bg-yellow-400/10 border-yellow-400 font-bold"
                  : "text-white bg-[#1A1A1A] border-[#2D2D2D]"
              }`}
            >
              Medium
            </button>
          
            <button
              type="button"
              onClick={() => setpriority("High")}
              className={`cursor-pointer flex-1 py-2 text-lg  border-2 rounded-xl transition-colors ${
                priority === "High"
                  ? "text-red-400 bg-red-400/10 border-red-400 font-bold"
           : "text-white bg-[#1A1A1A] border-[#2D2D2D]"
              }`}
            >
              High
            </button>
            </div>
          </div>

            <div className="flex flex-col gap-2">

  <label className="font-medium text-[#8E8E93]">
    Due Date
  </label>

  <div className="relative">

    <input
      type="text"
      readOnly
      value={date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })}
      onClick={() => setopen(!open)}
      className="w-full border-2 caret-white text-white bg-[#1A1A1A] border-[#2D2D2D] rounded-xl px-4 py-3 outline-none focus:border-[#E0FF22] transition-colors duration-300 cursor-pointer"
    /> <CalendarDays color="#E0FF22"  className=" absolute top-3 right-3 cursor-pointer" onClick={() => setopen(!open)}/>

    {open && (
      <div className="absolute z-50 mt-2 left-120 -top-80 bg-[#111111] border-2 border-[#2D2D2D] rounded-xl p-3 shadow-2xl">

        <DayPicker
          className="taskora-calendar"
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate);
            setopen(false);
          }}
          disabled={{ before: new Date() }}
        />

      </div>
    )}

  </div>

</div>

          <button
            type="submit"
            className="active:scale-95 flex items-center justify-center gap-3 rounded-xl bg-[#E0FF22] py-3 text-black font-[650] text-xl hover:opacity-90 transition-opacity duration-300 cursor-pointer">
            <Check size={23} strokeWidth={3}/> Create Task
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Createtask;
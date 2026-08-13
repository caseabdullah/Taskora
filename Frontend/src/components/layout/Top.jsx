import React from 'react'
import {CirclePlus} from 'lucide-react'
import { Link } from "react-router-dom";

const Top = ({username}) => {

    let date=new Date();
    let hour=date.getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

   let today = date.toLocaleDateString("en-US", {
   weekday: "long",
   month: "long",
   day: "numeric",
   year: "numeric"
   });

  return (
    <div className='flex justify-between items-center  py-7 px-7'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[#E0FF22] font-black text-3xl'>{greeting}, {username}</h1>
            <h1 className='text-lg text-[#A1A1AA] font-semibold'>{today}</h1>
        </div>
        <Link to="createTask" className='active:scale-90 flex items-center justify-center gap-2 h-fit px-5 py-2.5 rounded-4xl text-[15px] hover:bg-[#E0FF22]/90 transition-colors duration-150 cursor-pointer font-[620] bg-[#E0FF22]'><CirclePlus size={18}/> Create New Task</Link>
    </div>
  )
}

export default Top
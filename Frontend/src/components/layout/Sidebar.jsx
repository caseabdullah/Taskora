import React from 'react'
import { Astroid } from 'lucide-react'
import { NavLink } from "react-router-dom";
import { LayoutGrid, Clock3, CheckCircle } from "lucide-react";

const Sidebar = () => {
    const navItems=[
        {to:'/dashboard', Label:"Dashboard", icon:LayoutGrid ,end:true},
        {to:'/dashboard/pending', Label:"Pending", icon:Clock3 },
        {to:'/dashboard/completed', Label:"Completed", icon:CheckCircle},
    ]
  return (
    <div className='h-screen fixed flex flex-col gap-3 w-64 p-5 border-r border-r-[#27272A]'>
            <div className="logo flex gap-3 text-3xl text-white font-black pr-2 py-3 justify-center items-center">
            <Astroid size={30} strokeWidth={3} color='#E0FF22'/> Taskora
            </div>
            <div className='h-[80vh] py-3 bg-[#18181B] rounded-2xl'>
                <nav className="flex flex-col gap-3 px-3">
                    {navItems.map(({ to, Label, icon:Icon, end }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={end}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-lg font-medium transition-colors ${
                            isActive
                                ? "bg-white/5 text-[#E0FF22]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`
                        }
                        >
                        <Icon size={20} />
                        {Label}
                    </NavLink>
                    ))}
                </nav>
            </div>
    </div>
  )
}

export default Sidebar
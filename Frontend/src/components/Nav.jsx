import React from 'react'
import { Astroid } from "lucide-react";
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div className='nav text-white py-6 px-10 flex justify-between items-center'>
        <div className="logo flex gap-3 text-3xl font-black items-center">
            <Astroid size={30} strokeWidth={3} color='#E0FF22'/> Taskora
        </div>

        <div className="links flex gap-8 items-center">
                <a href="#features" className='text-[#8E8E93] font-semibold hover:text-white transition-colors duration-300'>Features</a>
                <a href="#about" className='text-[#8E8E93] font-semibold hover:text-white transition-colors duration-300'>About Us</a>
                <a href="#how-it-works" className='text-[#8E8E93] font-semibold hover:text-white transition-colors duration-300'>How It Works</a>

                <Link to="login" className='active:scale-95 font-semibold text-[#E0FF22] border border-[#E0FF22] py-2.5 px-3 rounded-lg hover:bg-[#E0FF22] hover:text-black hover:shadow-[0_0_10px_#E0FF22] transition-colors duration-300 cursor-pointer'>Sign in</Link>
        </div>
    </div>
  )
}

export default Nav
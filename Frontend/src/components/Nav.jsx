import React, { useState } from 'react'
import { Astroid, Info, Menu, Sparkles, SquareChartGantt, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='nav text-white py-5 px-5 sm:px-8 lg:px-10 flex justify-between items-center relative'>

      {/* Logo */}
      <div className="logo flex gap-2 sm:gap-3 text-2xl sm:text-3xl font-black items-center">
        <Astroid 
          size={26} 
          className="sm:w-7.5 sm:h-7.5"
          strokeWidth={3} 
          color='#E0FF22'
        />
        Taskora
      </div>

      {/* Desktop Links */}
      <div className="links hidden md:flex gap-5 lg:gap-8 items-center">
        <a 
          href="#features" 
          className='text-[#8E8E93] font-semibold hover:text-white transition-colors duration-300'
        >
          Features
        </a>

        <a 
          href="#about" 
          className='text-[#8E8E93] font-semibold hover:text-white transition-colors duration-300'
        >
          About Us
        </a>

        <a 
          href="#how-it-works" 
          className='text-[#8E8E93] font-semibold hover:text-white transition-colors duration-300'
        >
          How It Works
        </a>

        <Link 
          to="login" 
          className='active:scale-95 font-semibold text-[#E0FF22] border border-[#E0FF22] py-2.5 px-3 rounded-lg hover:bg-[#E0FF22] hover:text-black hover:shadow-[0_0_10px_#E0FF22] transition-all duration-300 cursor-pointer'
        >
          Sign in
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() =>{ setMenuOpen(true)
          document.body.style.overflow = 'hidden'
        }}
        className="md:hidden transition-colors duration-200 text-white"
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='fixed inset-0 h-screen z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm'>
          <div className="fixed top-0 h-screen pb-22 w-60 right-0 bg-[#0C0C12] border-l border-[#1F1F1F] px-5 py-6 flex flex-col justify-between md:hidden">
          <div className='flex flex-col gap-3'>
            <div className='flex justify-end'>
            <div 
            className='transition-colors duration-200 text-[#E0FF22]'
            onClick={()=> setMenuOpen(false)}>
              <X size={24} />
            </div>
          </div>
          <a 
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-[#8E8E93] transition-colors duration-200 items-center flex gap-3 text-lg font-semibold hover:text-white"
          >
           <Sparkles size={18}/> Features
          </a>

          <a 
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-[#8E8E93] transition-colors duration-200 items-center flex gap-3 text-lg font-semibold hover:text-white"
          >
           <Info size={18}/> About Us
          </a>

          <a 
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="text-[#8E8E93] transition-colors duration-200 items-center flex gap-3 text-lg font-semibold hover:text-white"
          >
           <SquareChartGantt size={18}/> How It Works
          </a>
          </div>

          <Link
            to="login"
            onClick={() => setMenuOpen(false)}
            className="text-center font-semibold text-[#E0FF22] border border-[#E0FF22] py-2.5 rounded-lg hover:bg-[#E0FF22] hover:text-black transition-colors duration-300"
          >
            Sign in
          </Link>

        </div>
      </div>
      )}

    </div>
  )
}

export default Nav
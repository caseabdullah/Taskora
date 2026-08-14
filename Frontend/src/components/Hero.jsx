import React from 'react'
import hero from '../images/hero.png'
import { Dot, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="border border-t-[#1F1F1F] border-b-[#1F1F1F] min-h-fit md:min-h-[65vh] lg:min-h-[86vh] flex flex-col md:flex-row gap-1 md:gap-3">

      {/* Content */}
      <div className="flex-1 flex justify-center md:justify-start items-start md:items-center px-5 sm:px-8 md:px-6 lg:pl-10 py-6 md:py-0">

        <div className="flex flex-col items-start gap-4 sm:gap-5 md:gap-4 lg:gap-5 text-white max-w-2xl">

          {/* Badge */}
          <div className="flex gap-1 sm:gap-2 items-center font-semibold text-sm sm:text-xs md:text-sm lg:text-base bg-[#e0ff22]/30 rounded-3xl p-2 pr-4  text-[#e0ff22]">
            <Dot size={26} strokeWidth={10}/>
            Stay Focused & Achieve more
          </div>

          {/* Heading */}
          <h1 className="font-black text-4xl sm:text-5xl md:text-4xl lg:text-6xl leading-tight">
            Get things done,
            <br />
            simply
          </h1>

          {/* Description */}
          <p className="text-[#8E8E93] font-medium text-base sm:text-lg md:text-base lg:text-xl leading-relaxed max-w-xl">
            A minimal task list that helps you stay focused. Organize,
            remind, and collaborate - without the noise.
          </p>

          {/* Button */}
          <Link
            to="signup"
            className="active:scale-95 flex items-center gap-2 font-semibold text-black bg-[#E0FF22] py-2.5 px-7 sm:px-10 md:px-7 lg:px-10 rounded-4xl transition-colors text-base sm:text-lg duration-300 cursor-pointer hover:bg-[#E0FF22]/90"
          >
            Get Started
            <ArrowRight strokeWidth={2} />
          </Link>

        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center items-center sm:px-8 md:px-4 lg:px-0 pb-10 md:pb-0">

        <img
          src={hero}
          alt="Taskora task management dashboard"
          className="w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-xl h-auto scale-100 lg:scale-90"
        />

      </div>

    </div>
  )
}

export default Hero
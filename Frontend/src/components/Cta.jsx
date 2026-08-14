import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className="border border-t-[#2A2A2A] bg-[#141414] min-h-60 px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-7 lg:gap-8">

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Ready to Take Control of Your Tasks?
        </h2>

        <p className="text-[#8E8E93] text-base sm:text-lg mt-3 sm:mt-4 max-w-xl leading-7">
          Start organizing your work, tracking deadlines, and improving your
          productivity with Taskora. Create your first task today and
          experience a simpler way to stay focused.
        </p>
      </div>

      {/* Button */}
      <Link
        to="signup"
        className="active:scale-95 shrink-0 flex items-center justify-center gap-2 font-semibold text-black bg-[#E0FF22] py-3 px-7 sm:px-8 rounded-4xl transition-colors duration-300 cursor-pointer hover:bg-[#E0FF22]/90 text-base sm:text-lg"
      >
        Get Started
        <ArrowRight strokeWidth={2} />
      </Link>

    </div>
  )
}

export default Cta
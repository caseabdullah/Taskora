import React from 'react'
import {ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
<div className="border border-t-[#2A2A2A] bg-[#141414] h-60 px-10 flex items-center justify-between gap-8 flex-wrap">

  <div className="flex-1">
    <h2 className="text-white text-4xl font-bold">
      Ready to Take Control of Your Tasks?
    </h2>

    <p className="text-[#8E8E93] text-lg mt-4 max-w-xl">
      Start organizing your work, tracking deadlines, and improving your
      productivity with Taskora. Create your first task today and experience
      a simpler way to stay focused.
    </p>
  </div>


  <Link to="signup" className="active:scale-95 flex items-center justify-center gap-2 font-semibold text-black bg-[#E0FF22] py-3 px-8 rounded-4xl transition-colors duration-300 cursor-pointer hover:bg-[#E0FF22]/90 text-lg">
    Get Started
    <ArrowRight strokeWidth={2} />
  </Link>

</div>
  )
}

export default Cta
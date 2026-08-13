import React from 'react'
import hero from '../images/hero.png'
import {Dot,ArrowRight} from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='border border-t-[#1F1F1F] border-b-[#1F1F1F] h-[84vh] gap-3 flex items-center'>

      <div className='flex-1 h-full flex justify-center pl-10 items-start flex-col gap-5  text-white'>
        <div className='flex gap-2 items-center font-semibold text-[16px] bg-[#e0ff22]/30 rounded-3xl px-3 pr-4 py-2 text-[#e0ff22]'>
          <Dot size={30} strokeWidth={10} /> Stay Focused & Achieve more
        </div>
        <h1 className='font-black text-6xl'>Get things done,<br/>simply</h1>
        <p className='text-[#8E8E93] font-medium text-xl'>A minimal task list that helps you stay focused. Organize, remind, and collaborate - without the noise.</p>
        <Link to="signup" className='active:scale-95 flex items-center gap-2 font-semibold text-black bg-[#E0FF22] py-2.5 px-10 rounded-4xl transition-colors text-lg duration-300 cursor-pointer hover:bg-[#E0FF22]/90'>Get Started <ArrowRight strokeWidth={2}/></Link>
      </div>

      <div className='flex-1 h-full flex justify-center items-center'>
        <img src={hero} alt="" className='scale-90'/>
      </div>

    </div>
  )
}

export default Hero
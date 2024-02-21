import React from 'react'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { IoLocationOutline, IoSunnySharp } from 'react-icons/io5'
import SearchBox from './SearchBox'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='w-full h-[70px] border-2 shadow-lg shadow-black/10 sticky top-0 left-0 z-50 flex'>
      <div className='flex w-[70%] justify-between items-center m-auto'>

      <div className='flex justify-center items-center gap-2'>
        <h3 className='text-3xl text-gray-700/70'>Weather</h3>
        <IoSunnySharp className='text-yellow-400/75 text-3xl'/>
      </div>
      <div className='flex gap-3 items-center'>
        <FaLocationCrosshairs className='text-2xl  text-gray-600/50'/>
        <IoLocationOutline className='text-2xl'/>
        <p className='text-lg text-gray-600/75'>India</p>
        <SearchBox />
      </div>
      </div>
    </nav>
  )
}
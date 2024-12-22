import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-around gap-[30vw] items-center px-10 h-14">

        <div className='logo text-2xl font-bold'>
          <span className='text-green-600'>&lt;</span>
          Pass
          <span className='text-green-600'>OP/&gt;</span>

        </div>

        <div className='text-white flex justify-center items-center bg-green-800 rounded-full cursor-pointer hover:ring-white ring-[1px]'>
          <img className='invert w-11 px-2 py-2' src="/icons/github.svg" alt="" />
          <span className='font-bold px-2 '>GitHub</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

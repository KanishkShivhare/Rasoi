import React from 'react'
import { NavLink } from 'react-router-dom'



const Top = () => {
  return (
    <>
    <div className='px-10 h-32 m-4 flex items-center justify-between'>
      <div className='h-full flex items-baseline'>
        <img className='h-full ml-5 drop-shadow-[0px_0px_13px_rgba(0,0,0,0.25)]' src="/Rasoi logo.png" alt="" />
        {/* <h1 className=' font-extrabold text-4xl'> <span className=' text-orange-500'>R</span>asoiii</h1> */}
      </div>
    <nav className='flex items-center gap-5 m-10 text-xl font-bold'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Content">Content</NavLink>
        <button className='bg-orange-500 px-5 py-2 rounded text-white ' >Log In</button>
    </nav>
    </div>

    </>
  )
}

export default Top
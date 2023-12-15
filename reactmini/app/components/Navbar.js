'use client'

import React from 'react'
import Searchbar from './Searchbar'

function Navbar({city, setCity}) {
   
  return (
    <div className='flex items-center justify-between px-[50px] w-full h-14 bg-blue-500 bg-gradient-to-r via-purple-500 from-cyan-500'>
        <h1 className=' font-semibold text-2xl'>Weather App</h1>
        <Searchbar city={city} setCity={setCity}/>
    </div>
  )
}

export default Navbar
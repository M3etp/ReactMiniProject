'use client'

import React, { useState } from 'react'

function Searchbar({city, setCity}) {
    const [finalCity, setFinalCity] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        setCity(finalCity)
        console.log(city)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text'
        className=' w-[400px] px-2 py-1 rounded-md border border-black'
        placeholder='search your city'
        onChange={(e)=>{setFinalCity(e.target.value)}}
        value={finalCity}
        />
        <input type='submit' value={'search'} className=' px-3 py-1 bg-white border border-black rounded-xl ml-5 bg-red-300'/>
    </form>
  )
}

export default Searchbar
'use client'

import { useState } from "react";
import Navbar from "./components/Navbar"
import WeatherCard from "./components/WeatherCard"

export default function Home() {
  const [city, setCity] = useState('Mumbai')
  return (
    <>
      <Navbar city={city} setCity={setCity}/>
      <div className=" max-w-[1120px] mx-auto">
        <WeatherCard city={city}/>
      </div>
    </>
  )
}

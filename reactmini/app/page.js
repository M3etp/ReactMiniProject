'use client'

import { motion } from "framer-motion"
import Navbar from "./component/Navbar"
import QuoteCard from "./component/QuoteCard"

export default function Home() {
  return (
   <>
    <Navbar heading='Random Quote Generator' created='Made By Meet Parmar.'/>
    <QuoteCard />
   </>
  )
}
